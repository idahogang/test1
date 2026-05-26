// Change to 'png' if your cover images are PNGs
const IMG_EXT = 'jpg';

// To add Internet Archive links later, add a property "audioUrl" to an episode
// by matching on episode number, e.g.:
//   audioUrls["001"] = "https://archive.org/download/...";
// Or replace the null below with a fetch() to a urls.json file you maintain.
const audioUrls = {
  "001": "https://archive.org/download/tc-245-super-blue/TC001_Mark%20Ronson%2C%20Desus%20%26%20Mero.mp3",
  "002": "https://archive.org/download/tc-245-super-blue/TC002_Florence%20Welch%2C%20Another%20Round.mp3",
  "003": "https://archive.org/download/tc-245-super-blue/TC003_In%20L.A.%20with%20Azealia%20Banks.mp3",
  "004": "https://archive.org/download/tc-245-super-blue/TC004_With%20Jamie%20Foxx.mp3",
  "005": "https://archive.org/download/tc-245-super-blue/TC005_Emma%20Koenig%20%26%20Ethan%20Silverman.mp3",
  "006": "https://archive.org/download/tc-245-super-blue/TC006_Jake%20and%20Dave%20Longstreth.mp3",
  "007": "https://archive.org/download/tc-245-super-blue/TC007_Rashida%20Jones.mp3",
  "008": "https://archive.org/download/tc-245-super-blue/TC008_Jonah%20Hill%20%26%20ILoveMakonnen.mp3",
  "009": "https://archive.org/download/tc-245-super-blue/TC009_Jerrod%20Carmichael%20%26%20Rashida%20Jones.mp3",
  "010": "https://archive.org/download/tc-245-super-blue/TC010_Seinfeld%20and%20Starbucks.mp3",
  "011": "https://archive.org/download/tc-245-super-blue/TC011_Chromeo%27s%20Dave%201.mp3",
  "012": "https://archive.org/download/tc-245-super-blue/TC012_Alana%20Haim%20%26%20Jerrod%20Carmichael.mp3",
  "013": "https://archive.org/download/tc-245-super-blue/TC013_Christmas%20Special.mp3",
  "014": "https://archive.org/download/tc-245-super-blue/TC014_The%20Campaign%20Trail.mp3",
  "015": "https://archive.org/download/tc-245-super-blue/TC015_Town%20Hall.mp3",
  "016": "https://archive.org/download/tc-245-super-blue/TC016_A%20Tribute%20to%20Prince.mp3",
  "017": "https://archive.org/download/tc-245-super-blue/TC017_Ariel%20Rechtshaid.mp3",
  "018": "https://archive.org/download/tc-245-super-blue/TC018_New%20York%20Style.mp3",
  "019": "https://archive.org/download/tc-245-super-blue/TC019_Harambe%20%26%20PepsiCo.mp3",
  "020": "https://archive.org/download/tc-245-super-blue/TC020_Grizzly%20Bear%27s%20Ed%20Droste.mp3",
  "021": "https://archive.org/download/tc-245-super-blue/TC021_4th%20of%20July%20Spectacular.mp3",
  "022": "https://archive.org/download/tc-245-super-blue/TC022_With%20Mike%20D.mp3",
  "023": "https://archive.org/download/tc-245-super-blue/TC023_Primary%20Season.mp3",
  "024": "https://archive.org/download/tc-245-super-blue/TC024_Olympics%20Fever.mp3",
  "025": "https://archive.org/download/tc-245-super-blue/TC025_Jerrod%20Carmichael.mp3",
  "026": "https://archive.org/download/tc-245-super-blue/TC026_Fashion%20Week.mp3",
  "027": "https://archive.org/download/tc-245-super-blue/TC027_Where%20Are%20They%20Now.mp3",
  "028": "https://archive.org/download/tc-245-super-blue/TC028_Flamin%E2%80%99%20Hot%20Cheetos.mp3",
  "029": "https://archive.org/download/tc-245-super-blue/TC029_Old%20Dudes%20and%20Snack%20Foods.mp3",
  "030": "https://archive.org/download/tc-245-super-blue/TC030_Frito-Lay%27s%20Jennifer%20Saenz.mp3",
  "031": "https://archive.org/download/tc-245-super-blue/TC031_Trump%20Wins.mp3",
  "032": "https://archive.org/download/tc-245-super-blue/TC032_Love%20Me%2C%20I%27m%20a%20Liberal.mp3",
  "033": "https://archive.org/download/tc-245-super-blue/TC033_East%20Meets%20West.mp3",
  "034": "https://archive.org/download/tc-245-super-blue/TC034_The%20Chrismukkah%20Show.mp3",
  "035": "https://archive.org/download/tc-245-super-blue/TC035_Coca-Cola%20%26%20The%20Founder.mp3",
  "036": "https://archive.org/download/tc-245-super-blue/TC036_GRAMMY%20Special.mp3",
  "037": "https://archive.org/download/tc-245-super-blue/TC037_Oscars%20%26%20Corporate%20Playlists.mp3",
  "038": "https://archive.org/download/tc-245-super-blue/TC038_The%20Rock%20vs.%20Vin%20Diesel%202020.mp3",
  "039": "https://archive.org/download/tc-245-super-blue/TC039_The%20Seinfeld%20Theme%20Song.mp3",
  "040": "https://archive.org/download/tc-245-super-blue/TC040_About%20That%20Pepsi%20Ad.mp3",
  "041": "https://archive.org/download/tc-245-super-blue/TC041_Coachella%20Vibes.mp3",
  "042": "https://archive.org/download/tc-245-super-blue/TC042_Let%27s%20Talk%20Niall%20Horan.mp3",
  "043": "https://archive.org/download/tc-245-super-blue/TC043_NYC%20with%20Lizzy%20Goodman.mp3",
  "044": "https://archive.org/download/tc-245-super-blue/TC044_Post-Punk.mp3",
  "045": "https://archive.org/download/tc-245-super-blue/TC045_POP%20Quiz%20with%20Cazzie%20David.mp3",
  "046": "https://archive.org/download/tc-245-super-blue/TC046_The%20Dorito%20Effect.mp3",
  "047": "https://archive.org/download/tc-245-super-blue/TC047_Live%20Concerts%20and%20TV%20Jingles.mp3",
  "048": "https://archive.org/download/tc-245-super-blue/TC048_Jerrod%2C%20Steve%20%26%20RJ.mp3",
  "049": "https://archive.org/download/tc-245-super-blue/TC049_Vermont%27s%20Finest.mp3",
  "050": "https://archive.org/download/tc-245-super-blue/TC050_The%20Full%20Crisis%20Crew.mp3",
  "051": "https://archive.org/download/tc-245-super-blue/TC051_Zachary%20Fox.mp3",
  "052": "https://archive.org/download/tc-245-super-blue/TC052_Surprise%21%20It%27s%20James%20Corden.mp3",
  "053": "https://archive.org/download/tc-245-super-blue/TC053_Tribute%20to%20Tom%20Petty.mp3",
  "054": "https://archive.org/download/tc-245-super-blue/TC054_Eminem%20%26%20The%20Tragically%20Hip.mp3",
  "055": "https://archive.org/download/tc-245-super-blue/TC055_Tim%20Heidecker%20and%20Portugal.%20The%20Man.mp3",
  "056": "https://archive.org/download/tc-245-super-blue/TC056_Grateful%20T-shirts.mp3",
  "057": "https://archive.org/download/tc-245-super-blue/TC057_Cazzie%20David%20%26%20Grammy%20Nominees.mp3",
  "058": "https://archive.org/download/tc-245-super-blue/TC058_A%20Charli%20XCX%20Christmas.mp3",
  "059": "https://archive.org/download/tc-245-super-blue/TC059_Sandwich%20Math.mp3",
  "060": "https://archive.org/download/tc-245-super-blue/TC060_Sublime%20Goldfish.mp3",
  "061": "https://archive.org/download/tc-245-super-blue/TC061_Dystopian%20Diet%20Coke.mp3",
  "062": "https://archive.org/download/tc-245-super-blue/TC062_Lady%20Doritos%20Town%20Hall.mp3",
  "063": "https://archive.org/download/tc-245-super-blue/TC063_The%20Two-Fridge%20Vibe%5B15%5D.mp3",
  "064": "https://archive.org/download/tc-245-super-blue/TC064_It%20Wasn%27t%20Baio.mp3",
  "065": "https://archive.org/download/tc-245-super-blue/TC065_Life%20Hacks%20with%20T-Pain.mp3",
  "066": "https://archive.org/download/tc-245-super-blue/TC066_Juice%20Island.mp3",
  "067": "https://archive.org/download/tc-245-super-blue/TC067_Dev%2C%20Dave%2C%20Ariel%2C%20Despot.mp3",
  "068": "https://archive.org/download/tc-245-super-blue/TC068_Sweet%20Chili%20Heat.mp3",
  "069": "https://archive.org/download/tc-245-super-blue/TC069_OMG%20It%27s%20Alanis%20Morissette.mp3",
  "070": "https://archive.org/download/tc-245-super-blue/TC070_Live%20From%20Ojai.mp3",
  "071": "https://archive.org/download/tc-245-super-blue/TC071_Dear%20Nora%20%26%20Summer%20Hits.mp3",
  "072": "https://archive.org/download/tc-245-super-blue/TC072_Dave%20Longstreth.mp3",
  "073": "https://archive.org/download/tc-245-super-blue/TC073_%E2%80%9977%20vs%20%E2%80%9884.mp3",
  "074": "https://archive.org/download/tc-245-super-blue/TC074_This%20Show%20Rules.mp3",
  "075": "https://archive.org/download/tc-245-super-blue/TC075_Cazzie%20David%20Returns.mp3",
  "076": "https://archive.org/download/tc-245-super-blue/TC076_Seinfeld2000%27s%20Origin%20Story.mp3",
  "077": "https://archive.org/download/tc-245-super-blue/TC077_Classic%20Rock%20Icons.mp3",
  "078": "https://archive.org/download/tc-245-super-blue/TC078_Welcome%20To%20My%20Life.mp3",
  "079": "https://archive.org/download/tc-245-super-blue/TC079_A%20Star%20Is%20Born%202%20Armageddon.mp3",
  "080": "https://archive.org/download/tc-245-super-blue/TC080_Jason%20Mantzoukas%20%26%20Hannah%20Fidell.mp3",
  "081": "https://archive.org/download/tc-245-super-blue/TC081_Be%20Grateful.mp3",
  "082": "https://archive.org/download/tc-245-super-blue/TC082_Jokerman.mp3",
  "083": "https://archive.org/download/tc-245-super-blue/TC083_Baio%20and%20the%20Hot%20Sauce%20Challenge.mp3",
  "084": "https://archive.org/download/tc-245-super-blue/TC084_Jamflowman.mp3",
  "085": "https://archive.org/download/tc-245-super-blue/TC085_Harmony%20Hall%20%202021.mp3",
  "086": "https://archive.org/download/tc-245-super-blue/TC086_The%20Grammys.mp3",
  "087": "https://archive.org/download/tc-245-super-blue/TC087_Despot%20Returns.mp3",
  "088": "https://archive.org/download/tc-245-super-blue/TC088_No%20Country%20for%20Jamflowman.mp3",
  "089": "https://archive.org/download/tc-245-super-blue/TC089_Winter%20Returns.mp3",
  "090": "https://archive.org/download/tc-245-super-blue/TC090_Unbearably%20Buff.mp3",
  "091": "https://archive.org/download/tc-245-super-blue/TC091_With%20Bardo%20Martinez.mp3",
  "092": "https://archive.org/download/tc-245-super-blue/TC092_Father%20of%20the%20Bride.mp3",
  "093": "https://archive.org/download/tc-245-super-blue/TC093_Live%20from%20NYC.mp3",
  "094": "https://archive.org/download/tc-245-super-blue/TC094_Scott%20Aukerman%20and%20Adam%20Scott.mp3",
  "095": "https://archive.org/download/tc-245-super-blue/TC095_The%20Mailbag.mp3",
  "096": "https://archive.org/download/tc-245-super-blue/TC096_Live%20from%20Chicago.mp3",
  "097": "https://archive.org/download/tc-245-super-blue/TC097_TC%20AMA.mp3",
  "098": "https://archive.org/download/tc-245-super-blue/TC098_Rock%20Beefs.mp3",
  "099": "https://archive.org/download/tc-245-super-blue/TC099_Conspiracy%20Theories%20with%20Mark%20Foster.mp3",
  "100": "https://archive.org/download/tc-245-super-blue/TC100_Episode%20100.mp3",
  "101": "https://archive.org/download/tc-245-super-blue/TC101_Hella%20Mega%20Flaming%20Hot.mp3",
  "102": "https://archive.org/download/tc-245-super-blue/TC102_With%20Justin%20Vernon.mp3",
  "103": "https://archive.org/download/tc-245-super-blue/TC103_With%20Huey%20Lewis.mp3",
  "104": "https://archive.org/download/tc-245-super-blue/TC104_Rise%20and%20Shine%20with%20Cazzie%20David.mp3",
  "105": "https://archive.org/download/tc-245-super-blue/TC105_Bernie%2C%20Beto%20and%20Bob.mp3",
  "106": "https://archive.org/download/tc-245-super-blue/TC106_Gratefulsgiving%20with%20Hannah%20Fidell%20and%20Kyle%20Field.mp3",
  "107": "https://archive.org/download/tc-245-super-blue/TC107_Grammys%2C%20Garcia%20and%20Goose.mp3",
  "108": "https://archive.org/download/tc-245-super-blue/TC108_Happy%20New%20Year.mp3",
  "109": "https://archive.org/download/tc-245-super-blue/TC109_Breaking%20Down%20the%20Grammys.mp3",
  "110": "https://archive.org/download/tc-245-super-blue/TC110_What%20About%20Vampire.mp3",
  "111": "https://archive.org/download/tc-245-super-blue/TC111_Time%20To%20Make%20The%20Donuts.mp3",
  "112": "https://archive.org/download/tc-245-super-blue/TC112_FaceTime%20Crisis.mp3",
  "113": "https://archive.org/download/tc-245-super-blue/TC113_Imagine%20What%20About%20Vampire.mp3",
  "114": "https://archive.org/download/tc-245-super-blue/TC114_A%20TC%20Hangout.mp3",
  "115": "https://archive.org/download/tc-245-super-blue/TC115_Dylan%2C%20The%20Dead%2C%20and%20Despot.mp3",
  "116": "https://archive.org/download/tc-245-super-blue/TC116_Mask%20Off%20with%20Ed%20O%27Brien%20and%20Jerry%20Saltz.mp3",
  "117": "https://archive.org/download/tc-245-super-blue/TC117_In%20These%20Strange%20and%20Uncertain%20Times.mp3",
  "118": "https://archive.org/download/tc-245-super-blue/TC118_Old%20Wisdom%20with%20David%20Crosby%20and%20The%20Bellamy%20Brothers.mp3",
  "119": "https://archive.org/download/tc-245-super-blue/TC119_It%27s%20Gonna%20Be%20May.mp3",
  "120": "https://archive.org/download/tc-245-super-blue/TC120_HBD%20FOTB.mp3",
  "121": "https://archive.org/download/tc-245-super-blue/TC121_Classic%20Rock%20Talk.mp3",
  "122": "https://archive.org/download/tc-245-super-blue/TC122_Cheese%20Pizza%20and%20Chili%20Peppers.mp3",
  "123": "https://archive.org/download/tc-245-super-blue/TC123_Alex%2C%20Winter%2C%20and%20Mero.mp3",
  "124": "https://archive.org/download/tc-245-super-blue/TC124_The%20Lost%20Episode.mp3",
  "125": "https://archive.org/download/tc-245-super-blue/TC125_What%20About%20Rage%2C%20Man.mp3",
  "126": "https://archive.org/download/tc-245-super-blue/TC126_Bruce%20Hornsby.mp3",
  "127": "https://archive.org/download/tc-245-super-blue/TC127_Ben%20%26%20Jerry%27s%20%26%20Nike%27s.mp3",
  "128": "https://archive.org/download/tc-245-super-blue/TC128_With%20Danielle%20Haim.mp3",
  "129": "https://archive.org/download/tc-245-super-blue/TC129_Green%20Day%20and%20Yellow%20Mustard.mp3",
  "130": "https://archive.org/download/tc-245-super-blue/TC130_TC%20Technology.mp3",
  "131": "https://archive.org/download/tc-245-super-blue/TC131_Chaos%20and%20Candy.mp3",
  "132": "https://archive.org/download/tc-245-super-blue/TC132_I%20Got%20What%20I%20Got%20and%20Floating%20Docks.mp3",
  "133": "https://archive.org/download/tc-245-super-blue/TC133_What%20About%20PA%20with%20Daniel%20Ralston.mp3",
  "134": "https://archive.org/download/tc-245-super-blue/TC134_Frederic%20Remmington%20Cancelled.mp3",
  "135": "https://archive.org/download/tc-245-super-blue/TC135_Time%20Crisis%20Election%20Special.mp3",
  "136": "https://archive.org/download/tc-245-super-blue/TC136_Grateful%20Dead%20and%20Garfield%20Eats.mp3",
  "137": "https://archive.org/download/tc-245-super-blue/TC137_Kind%20Vibes%20with%20Cazzie%20David.mp3",
  "138": "https://archive.org/download/tc-245-super-blue/TC138_With%20Rashida%20Jones%20and%20Winter.mp3",
  "139": "https://archive.org/download/tc-245-super-blue/TC139_Herm%20Yarl%20Origins.mp3",
  "140": "https://archive.org/download/tc-245-super-blue/TC140_The%20Company%20Store.mp3",
  "141": "https://archive.org/download/tc-245-super-blue/TC141_Killer%20Hot%20Sauce%20and%20Iced%20Cold%20Coffee.mp3",
  "142": "https://archive.org/download/tc-245-super-blue/TC142_With%20Robert%20M.%20Rosenberg%20and%20Chris%20Baio.mp3",
  "143": "https://archive.org/download/tc-245-super-blue/TC143_Fungible%20Sandwich%20Technology.mp3",
  "144": "https://archive.org/download/tc-245-super-blue/TC144_Certified%20Forklift%20Operator.mp3",
  "145": "https://archive.org/download/tc-245-super-blue/TC145_Talking%20Dead%20Heads.mp3",
  "146": "https://archive.org/download/tc-245-super-blue/TC146_Government%20Website.mp3",
  "147": "https://archive.org/download/tc-245-super-blue/TC147_Avoid%20The%20Noid.mp3",
  "148": "https://archive.org/download/tc-245-super-blue/TC148_Flamin%E2%80%99%20Hot%20Chaos.mp3",
  "149": "https://archive.org/download/tc-245-super-blue/TC149_2221%20What%20You%20Think%20About%20Me.mp3",
  "150": "https://archive.org/download/tc-245-super-blue/TC150_With%20Despot%20and%20Bruce%20Hornsby.mp3",
  "151": "https://archive.org/download/tc-245-super-blue/TC151_Gentle%20Jesters.mp3",
  "152": "https://archive.org/download/tc-245-super-blue/TC152_Country%20Stuff.mp3",
  "153": "https://archive.org/download/tc-245-super-blue/TC153_Sour%20Rock%20with%20Hannah%20Fidell.mp3",
  "154": "https://archive.org/download/tc-245-super-blue/TC154_The%20Dog%20Days%20of%20Summer.mp3",
  "155": "https://archive.org/download/tc-245-super-blue/TC155_Do%20The%20Flamin%27%20Hot%20Brew.mp3",
  "156": "https://archive.org/download/tc-245-super-blue/TC156_With%20Chromeo.mp3",
  "157": "https://archive.org/download/tc-245-super-blue/TC157_The%20Gen%20X%20Top%205%20Challenge.mp3",
  "158": "https://archive.org/download/tc-245-super-blue/TC158_Another%20Boat%20in%20the%20Dock.mp3",
  "159": "https://archive.org/download/tc-245-super-blue/TC159_Grateful%20Genres%20with%20Kelefa%20Sanneh.mp3",
  "160": "https://archive.org/download/tc-245-super-blue/TC160_NFT%20Week%20with%20Despot.mp3",
  "161": "https://archive.org/download/tc-245-super-blue/TC161_With%20Rod%20Stewart.mp3",
  "162": "https://archive.org/download/tc-245-super-blue/TC162_The%20TC%20Singularity.mp3",
  "163": "https://archive.org/download/tc-245-super-blue/TC163_With%20Tom%20Scharpling%20and%20Despot.mp3",
  "164": "https://archive.org/download/tc-245-super-blue/TC164_The%20Four%20Quadrants%20of%20TC.mp3",
  "165": "https://archive.org/download/tc-245-super-blue/TC165_Sonic%20Simulations.mp3",
  "166": "https://archive.org/download/tc-245-super-blue/TC166_Goldfish%20and%20Guitar%20Rriffs.mp3",
  "167": "https://archive.org/download/tc-245-super-blue/TC167_Brown%20Haired%20Bands.mp3",
  "168": "https://archive.org/download/tc-245-super-blue/TC168_Hot%20Coffee%20and%20Cold%20Pop-Tarts.mp3",
  "169": "https://archive.org/download/tc-245-super-blue/TC169_The%20TC%20Music%20Industry%20Special.mp3",
  "170": "https://archive.org/download/tc-245-super-blue/TC170_Horsin%27%20Around.mp3",
  "171": "https://archive.org/download/tc-245-super-blue/TC171_Hornsby%20On%20The%20Horn.mp3",
  "172": "https://archive.org/download/tc-245-super-blue/TC172_Dr.%20Tealgood.mp3",
  "173": "https://archive.org/download/tc-245-super-blue/TC173_Welcome%20to%20the%20Jamily.mp3",
  "174": "https://archive.org/download/tc-245-super-blue/TC174_TC%20Fully%20Loaded.mp3",
  "175": "https://archive.org/download/tc-245-super-blue/TC175_TC%20Unfiltered.mp3",
  "176": "https://archive.org/download/tc-245-super-blue/TC176_Extreme%20TC.mp3",
  "177": "https://archive.org/download/tc-245-super-blue/TC177_Half%20Baked%20Potato.mp3",
  "178": "https://archive.org/download/tc-245-super-blue/TC178_Bare%20Bones%20Buffets.mp3",
  "179": "https://archive.org/download/tc-245-super-blue/TC179_Tangled%20Up%20in%20Brews.mp3",
  "180": "https://archive.org/download/tc-245-super-blue/TC180_BDGHV3P2.mp3",
  "181": "https://archive.org/download/tc-245-super-blue/TC181_False%20Fall.mp3",
  "182": "https://archive.org/download/tc-245-super-blue/TC182_Pump%20It%20Up%20with%20Thomas%20Mars.mp3",
  "183": "https://archive.org/download/tc-245-super-blue/TC183_That%20%2790s%20Show.mp3",
  "184": "https://archive.org/download/tc-245-super-blue/TC184_Coffee%20in%20Japan.mp3",
  "185": "https://archive.org/download/tc-245-super-blue/TC185_Big%20League%20Baio.mp3",
  "186": "https://archive.org/download/tc-245-super-blue/TC186_Chameleons%20and%20Cheesecake.mp3",
  "187": "https://archive.org/download/tc-245-super-blue/TC187_Desert%20Weirdness.mp3",
  "188": "https://archive.org/download/tc-245-super-blue/TC188_Hoodwink%E2%80%99d%20Holidays.mp3",
  "189": "https://archive.org/download/tc-245-super-blue/TC189_Popchip%20Away.mp3",
  "190": "https://archive.org/download/tc-245-super-blue/TC190_The%20Banshees%20of%20Inishiddily.mp3",
  "191": "https://archive.org/download/tc-245-super-blue/TC191_Dave%20is%20Here.mp3",
  "192": "https://archive.org/download/tc-245-super-blue/TC192_The%20Time%20Crisis%20Music%20Special.mp3",
  "193": "https://archive.org/download/tc-245-super-blue/TC193_Phish%20Bowl.mp3",
  "194": "https://archive.org/download/tc-245-super-blue/TC194_Modern%20Vampires%20of%20the%20Decade.mp3",
  "195": "https://archive.org/download/tc-245-super-blue/TC195_This%20Is%20How%20Jake%20Does%20It.mp3",
  "196": "https://archive.org/download/tc-245-super-blue/TC196_Youth%20and%20Young%20Manhood.mp3",
  "197": "https://archive.org/download/tc-245-super-blue/TC197_Youth%20%26%20Young%20Manhood%20Pt.%202.mp3",
  "198": "https://archive.org/download/tc-245-super-blue/TC198_TC%20Goes%20To%20The%20Movies.mp3",
  "199": "https://archive.org/download/tc-245-super-blue/TC199_We%20Didn%27t%20Start%20The%20Summer.mp3",
  "200": "https://archive.org/download/tc-245-super-blue/TC200_Time%20Crisis%20200.mp3",
  "201": "https://archive.org/download/tc-245-super-blue/TC201_Guided%20By%20Margaritaville.mp3",
  "202": "https://archive.org/download/tc-245-super-blue/TC202_We%20Will%20Pod%20You.mp3",
  "203": "https://archive.org/download/tc-245-super-blue/TC203_Tim%20Crisis.mp3",
  "204": "https://archive.org/download/tc-245-super-blue/TC204_What%27s%20in%20a%20Name.mp3",
  "205": "https://archive.org/download/tc-245-super-blue/TC205_Rock%20Talk%20with%20Carson%20Mell.mp3",
  "206": "https://archive.org/download/tc-245-super-blue/TC206_Trad%20Crisis.mp3",
  "207": "https://archive.org/download/tc-245-super-blue/TC207_Fairytale%20of%20TC.mp3",
  "208": "https://archive.org/download/tc-245-super-blue/TC208_Gen-X%20Projectors.mp3",
  "209": "https://archive.org/download/tc-245-super-blue/TC209_The%20Gift%20of%20TC.mp3",
  "210": "https://archive.org/download/tc-245-super-blue/TC210_The%20Octopus%20Forklift.mp3",
  "211": "https://archive.org/download/tc-245-super-blue/TC211_As%20the%20Crew%20Becomes%20Classical.mp3",
  "212": "https://archive.org/download/tc-245-super-blue/TC212_TC%20in%20Austin.mp3",
  "213": "https://archive.org/download/tc-245-super-blue/TC213_Sublime%20Salads.mp3",
  "214": "https://archive.org/download/tc-245-super-blue/TC214_Starbucks%20Lovers.mp3",
  "215": "https://archive.org/download/tc-245-super-blue/TC215_With%20Michael%20Azzerad.mp3",
  "216": "https://archive.org/download/tc-245-super-blue/TC216_In%20the%202000s.mp3",
  "217": "https://archive.org/download/tc-245-super-blue/TC217_In%20the%202000s%20%28Part%202%29.mp3",
  "218": "https://archive.org/download/tc-245-super-blue/TC218_The%20Born%20Identities.mp3",
  "219": "https://archive.org/download/tc-245-super-blue/TC219_Guided%20by%20Summer.mp3",
  "220": "https://archive.org/download/tc-245-super-blue/TC220_Mr.%20Flamin%27%20Hot.mp3",
  "221": "https://archive.org/download/tc-245-super-blue/TC221_Frickin%27%20Random.mp3",
  "222": "https://archive.org/download/tc-245-super-blue/TC222_Coffee%20and%20Airplanes.mp3",
  "223": "https://archive.org/download/tc-245-super-blue/TC223_An%20Alaskan%20Oasis.mp3",
  "224": "https://archive.org/download/tc-245-super-blue/TC224_French%20Words%20and%20Fake%20Zombies.mp3",
  "225": "https://archive.org/download/tc-245-super-blue/TC225_The%20TC%20Seafood%20Special.mp3",
  "226": "https://archive.org/download/tc-245-super-blue/TC226_Scenes%20from%20a%20Utah%20Soda%20Shop.mp3",
  "227": "https://archive.org/download/tc-245-super-blue/TC227_Rock%20Talk%20with%20David%20Chase.mp3",
  "228": "https://archive.org/download/tc-245-super-blue/TC228_Quincy.mp3",
  "229": "https://archive.org/download/tc-245-super-blue/TC229_Phil%20Brings%20the%20Boom%21.mp3",
  "230": "https://archive.org/download/tc-245-super-blue/TC230_Oops...All%20Music.mp3",
  "231": "https://archive.org/download/tc-245-super-blue/TC231_TimeCrisis2025.mp3",
  "232": "https://archive.org/download/tc-245-super-blue/TC232_Poetry%20Talk.mp3",
  "233": "https://archive.org/download/tc-245-super-blue/TC233_TC%20Music%20Boyz.mp3",
  "234": "https://archive.org/download/tc-245-super-blue/TC234_With%20Kyle%20M..mp3",
  "235": "https://archive.org/download/tc-245-super-blue/TC235_With%20Dave%20Longstreth.mp3",
  "236": "https://archive.org/download/tc-245-super-blue/TC236_Rush%20to%20Alabama.mp3",
  "237": "https://archive.org/download/tc-245-super-blue/TC237_All%20About%20Bands.mp3",
  "238": "https://archive.org/download/tc-245-super-blue/TC238_The%20Final%20Twisting.mp3",
  "239": "https://archive.org/download/tc-245-super-blue/TC239_%28T%29C%20Is%20for%20Cookie.mp3",
  "240": "https://archive.org/download/tc-245-super-blue/TC240_Bruce%20and%20Al.mp3",
  "241": "https://archive.org/download/tc-245-super-blue/TC241_Cosmic%20TC.mp3",
  "242": "https://archive.org/download/tc-245-super-blue/TC242_Cosmic%20TC%20Pt.%20II.mp3",
  "243": "https://archive.org/download/tc-245-super-blue/TC243_With%20John%20Fogerty.mp3",
  "244": "https://archive.org/download/tc-245-super-blue/TC244_Rip%20Van%20Winkeled.mp3",
  "245": "https://archive.org/download/tc-245-super-blue/TC245_Super%20Blue.mp3",
  "246": "https://archive.org/download/tc-245-super-blue/TC246_The%20Past%20is%20the%20Future.mp3",
  "247": "https://archive.org/download/tc-245-super-blue/TC247_Chocolate%20Talk.mp3",
  "248": "https://archive.org/download/tc-245-super-blue/TC248_Beantown%20Prometheus.mp3",
  "249": "https://archive.org/download/tc-245-super-blue/TC249_Its%20Bruce%20Hornsby.mp3",
  "250": "https://archive.org/download/tc-245-super-blue/TC250_Red%20Hot%20Gen-X%20Challenge.mp3",
  "251": "https://archive.org/download/tc-245-super-blue/TC251_TC%20Earth%20Day%20Special.mp3",
  "252": "https://archive.org/download/tc-245-super-blue/TC252_Is%20it%20Steak.mp3",
  "253": "https://archive.org/download/tc-245-super-blue/TC253_Already%20Got%20A%20Wife.mp3"
};

let episodes = [];
let coversManifest = {};

Promise.all([
  fetch('episodes.csv').then(r => r.text()),
  fetch('covers-manifest.json').then(r => r.json()).catch(() => ({}))
]).then(([csvText, manifest]) => {
  coversManifest = manifest;
  episodes = processEpisodes(parseCSV(csvText));
  render();
});

document.getElementById('search').addEventListener('input', render);
document.getElementById('sort').addEventListener('change', render);

function render() {
  const query  = document.getElementById('search').value.toLowerCase().trim();
  const sortBy = document.getElementById('sort').value;

  let list = episodes.filter(ep => {
    if (!query) return true;
    const haystack = [ep.numStr, ep.title, ep.description, ep.guestsStr, ep.topFive, ep.date]
      .join(' ').toLowerCase();
    return haystack.includes(query);
  });

  list = [...list].sort((a, b) => {
    const da = new Date(a.date), db = new Date(b.date);
    return sortBy === 'oldest' ? da - db : db - da;
  });

document.getElementById('grid').innerHTML = list.length
    ? list.map(cardHTML).join('')
    : '<div class="empty">No episodes match your search.</div>';
}

function cardHTML(ep) {
  const coverFile = coversManifest[ep.numStr] || `TC${ep.numStr}_${ep.title}.${IMG_EXT}`;
  const coverSrc = `covers/${coverFile}`;
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
    ${ep.description ? `<p class="ep-desc">${esc(ep.description)}</p>` : ''}
    ${ep.guestsStr  ? `<div class="ep-guests">Guests: ${esc(ep.guestsStr)}</div>` : ''}
    ${ep.year       ? `<div class="ep-topfive">Top 5: ${ep.year}</div>` : ''}
    <div class="audio-row">${audioHtml}</div>
  </div>
</div>`;
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
