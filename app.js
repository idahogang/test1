// Change to 'png' if your cover images are PNGs
const IMG_EXT = 'jpg';

// To add Internet Archive links later, add a property "audioUrl" to an episode
// by matching on episode number, e.g.:
//   audioUrls["001"] = "https://archive.org/download/...";
// Or replace the null below with a fetch() to a urls.json file you maintain.
const audioUrls = {};

let episodes = [];

fetch('episodes.csv')
  .then(r => r.text())
  .then(text => {
    episodes = processEpisodes(parseCSV(text));
    populateYearFilter();
    render();
  });

document.getElementById('search').addEventListener('input', render);
document.getElementById('sort').addEventListener('change', render);
document.getElementById('year-filter').addEventListener('change', render);

function render() {
  const query   = document.getElementById('search').value.toLowerCase().trim();
  const sortBy  = document.getElementById('sort').value;
  const yearVal = document.getElementById('year-filter').value;

  let list = episodes.filter(ep => {
    if (yearVal && String(ep.year) !== yearVal) return false;
    if (!query) return true;
    const haystack = [ep.numStr, ep.title, ep.description, ep.guestsStr, ep.topFive, ep.date]
      .join(' ').toLowerCase();
    return haystack.includes(query);
  });

  list = [...list].sort((a, b) => {
    if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'year') {
      const ya = a.year ?? 9999, yb = b.year ?? 9999;
      return ya !== yb ? ya - yb : a.num - b.num;
    }
    return a.num - b.num;
  });

  document.getElementById('count').textContent =
    `${list.length} of ${episodes.length} episodes`;

  document.getElementById('grid').innerHTML = list.length
    ? list.map(cardHTML).join('')
    : '<div class="empty">No episodes match your search.</div>';
}

function cardHTML(ep) {
  const coverSrc = `covers/TC${ep.numStr}_${ep.title}.${IMG_EXT}`;
  const url = audioUrls[ep.numStr] || null;

  const audioHtml = url
    ? `<a class="play-btn" href="${attr(url)}" target="_blank" rel="noopener">&#9654; Play</a>`
    : `<span class="play-btn soon">Audio coming soon</span>`;

  return `<div class="card">
  <div class="cover-wrap">
    <img src="${attr(coverSrc)}" alt="${attr(ep.title)}" loading="lazy"
         onerror="this.onerror=null;this.src='placeholder.svg'">
    <span class="ep-badge">EP ${ep.numStr}</span>
  </div>
  <div class="card-body">
    <div class="ep-title">${esc(ep.title)}</div>
    <div class="meta">
      <span class="ep-date">${esc(formatDate(ep.date))}</span>
    </div>
    ${ep.description? `<p class="ep-desc">${esc(ep.description)}</p>` : ''}
    ${ep.guestsStr  ? `<div class="ep-guests">Guests: ${esc(ep.guestsStr)}</div>` : ''}
    ${ep.year       ? `<div class="ep-topfive">Top 5: ${ep.year}</div>` : ''}
    <div class="audio-row">${audioHtml}</div>
  </div>
</div>`;
}

function populateYearFilter() {
  const years = [...new Set(episodes.map(e => e.year).filter(Boolean))].sort((a, b) => a - b);
  const sel = document.getElementById('year-filter');
  years.forEach(y => {
    const o = document.createElement('option');
    o.value = y; o.textContent = y;
    sel.appendChild(o);
  });
}

// ── Data processing ──────────────────────────────────────────────

function processEpisodes(rows) {
  return rows.map(row => {
    if (row.length < 2) return null;
    const [numStr, title, date, guestsRaw, topFive, description] = row;
    const num = parseInt(numStr, 10);
    if (!num) return null;

    const guests = (guestsRaw || '').split('\n')
      .map(g => g.trim()).filter(g => g && g !== '—');

    return {
      num,
      numStr: numStr.trim(),
      title:       (title       || '').trim(),
      date:        (date        || '').trim(),
      guestsStr:   guests.join(', '),
      topFive:     (topFive     || '').trim(),
      year:        extractYear(topFive),
      description: (description || '').trim(),
    };
  }).filter(Boolean);
}

function extractYear(str) {
  if (!str) return null;
  const m = str.match(/\b(19[4-9]\d|20[0-2]\d)\b/);
  return m ? parseInt(m[1], 10) : null;
}

// ── CSV parser (RFC 4180) ─────────────────────────────────────────

function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQ = false;
      else field += c;
    } else {
      if      (c === '"')  inQ = true;
      else if (c === ',')  { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c !== '\r') field += c;
    }
  }
  if (field || row.length) { row.push(field); if (row.some(f => f)) rows.push(row); }
  return rows;
}

// ── Helpers ───────────────────────────────────────────────────────

function formatDate(str) {
  if (!str) return '';
  const [m, d, y] = str.split('/');
  if (!m || !d || !y) return str;
  const dt = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function attr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
