//USER DATA
var USERDATA = `
Test
eldning2b
-
Arvid
-
Björn
-
Vincent
-
Alexander
spejarliv3a
spejarliv3b
spejarliv3c
-
Julius
-
Irma
-
Theodor
-
Lilja
-
Dexter
-
Henrik
-
Edward
-
Filip
-
Henry
-
Nicholas
-
Calle
-
`

//Convenience
function g(id) {return document.getElementById(id);};

//Trial class
class Klassprov {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.completed = false;
  }
}

//Login data
logindata = [
  ["Test", "a"],
  ["Arvid", "Wallinum"],
  ["Björn", "Wallinum"],
  ["Vincent", "Wallinum"],
  ["Alexander", "Wallinum"],
  ["Julius", "Wallinum"],
  ["Irma", "Wallinum"],
  ["Lilja", "Wallinum"],
  ["Dexter", "Wallinum"],
  ["Henrik", "Wallinum"],
  ["Edward", "Wallinum"],
  ["Filip", "Wallinum"],
  ["Henry", "Wallinum"],
  ["Nicholas", "Wallinum"],
  ["Calle", "Wallinum"]
];

//Spejarliv Tre
spejarliv3a = new Klassprov(
  "spejarliv3a",
  "Berätta om scoutlöftet och scoutlagen samt om scouternas valspråk och lösen. Förklara med egna ord vad de betyder."
);
spejarliv3b = new Klassprov(
  "spejarliv3b",
  "Visa att du kan bära din scoutdräkt på ett korrekt sätt samt hur scouthälsningen utförs i dess olika varianter."
);
spejarliv3c = new Klassprov(
  "spejarliv3c",
  "Rita scoutsymbolen och I-klassmärket och berätta vad varje del i symbolen betyder. Rita och berätta om symbolerna för din scoutkår, avdelning och patrull."
);

spj3 = [
  spejarliv3a,
  spejarliv3b,
  spejarliv3c
];

//Friluftsliv Tre
friluftsliv3a = new Klassprov(
  "friluftsliv3a",
  "Visa upp din personliga packning för en vandringshajk om två nätter i vindskydd samt det rätta sättet att packa och bära din ryggsäck."
);
friluftsliv3b = new Klassprov(
  "friluftsliv3b",
  "Delta i en vandringshajk med din patrull eller avdelning där båda nätterna spenderas i tält eller vindskydd som du hjälpt till att slå upp."
);
friluftsliv3c = new Klassprov(
  "friluftsliv3c",
  "Berätta vilka delar av allemansrätten ni dragit nytta av under hajken."
);
friluftsliv3d = new Klassprov(
  "friluftsliv3d",
  "Visa att du kan använda kniv, späntkniv, yxa och såg på ett säkert sätt samt hur de ska vårdas, slipas och förvaras."
);

fri3 = [
  friluftsliv3a,
  friluftsliv3b,
  friluftsliv3c,
  friluftsliv3d
];

//Matlagning Tre
matlagning3a = new Klassprov(
  "matlagning3a",
  "Visa att du kan använda stormköket med både gasol- och spritbrännare på ett säkert sätt samt hur det ska rengöras och förvaras."
);
matlagning3b = new Klassprov(
  "matlagning3b",
  "Medverka i matlagning och diskning av två hajk-måltider på stormkök eller öppen eld."
);
matlagning3c = new Klassprov(
  "matlagning3c",
  "Visa att du på max 8 minuter kan tända och därefter hålla vid liv en eld med torr ved, tändstickor samt kniv och späntkniv eller liten yxa."
);

mat3 = [
  matlagning3a,
  matlagning3b,
  matlagning3c
];

//Sjukvård Tre
sjukvård3a = new Klassprov(
  "sjukvård3a",
  "Visa att du kan förebygga och ge första hjälpen till enklare skär- och skrubbsår, blåsor på händer och fötter, första gradens brännskador och näsblödning."
);
sjukvård3b = new Klassprov(
  "sjukvård3b",
  "Berätta hur du kan förebygga energibrist, vätskebrist, solsting, skavsår och mild nedkylning samt hur man känner igen symptomen för dessa."
);
sjukvård3c = new Klassprov(
  "sjukvård3c",
  "Visa att du kan lägga tryckförband med gasbinda och scouthalsduk på hand, fot, knä, axel, armbåge och huvud."
);

sju3 = [
  sjukvård3a,
  sjukvård3b,
  sjukvård3c
];

//Hälsa Tre
hälsa3a = new Klassprov(
  "hälsa3a",
  "Pröva några gånger och skriv upp bästa resultat för: högsta antal korrekta armhävningar på 60 sekunder, högsta antal korrekta situps på 60 sekunder, kortaste tiden att springa/gå 1 km."
);
hälsa3b = new Klassprov(
  "hälsa3b",
  "Upprepa 5A varje dag under 30 dagar. Skriv upp dina resultat och gå igenom tillsammans med din patrull."
);

häl3 = [
  hälsa3a,
  hälsa3b
];

//Samhälle Tre
samhälle3a = new Klassprov(
  "samhälle3a",
  "Visa att du kan hissa, hala, vika och vårda den svenska flaggan."
);
samhälle3b = new Klassprov(
  "samhälle3b",
  "Medverka i sammanlagt 3 timmar av samhällsengagemang som ordnas av din patrull eller avdelning."
);

sam3 = [
  samhälle3a,
  samhälle3b
];

//Third
tredjeklass = [
  [spj3, "spejarliv"],
  [fri3, "friluftsliv"],
  [mat3, "matlagning"],
  [sju3, "sjukvård"],
  [häl3, "hälsa"],
  [sam3, "samhälle"]
];

//Spejarliv Två
spejarliv2a = new Klassprov(
  "spejarliv2a",
  "Fundera och välj ut 5-10 förebilder (nu levande, historiska eller fiktiva personer) och skriv upp vad du tycker om eller beundrar med var och en. Visa och gå igenom din lista tillsammans med din patrull."
);
spejarliv2b = new Klassprov(
  "spejarliv2b",
  "Färdigställ din personliga scoutstav - skall vara rejäl och tåla belastning samt vara markerad med streck för cm och dm i längdmått. Visa därefter att du kan handa, föra och ge scouthälsning med din scoutstav på ett korrekt sätt."
);
spejarliv2c = new Klassprov(
  "spejarliv2c",
  "Genomför Smygövning för II-klass med godkänt resultat. Övningen ska omfatta att spendera 5 timmar gömd i ensamhet i närheten av lägret eller stugan. För godkänt resultat ska du lämna skriftlig rapport om vad som pågått i lägret timma för timma, samt utan att bli sedd av någon ha samlat in 5 markörer som placerats runt området."
);
spejarliv2d = new Klassprov(
  "spejarliv2d",
  "Genomför Kims Spel för II-klass med godkänt resultat. Ska omfatta att observera 12 föremål under 1 minuts tid och efter 2 timmar minnas samtliga utan att ta anteckningar."
);

spj2 = [
  spejarliv2a,
  spejarliv2b,
  spejarliv2c,
  spejarliv2d,
];

//Friluftsliv Två
friluftsliv2a = new Klassprov(
  "spejarliv2a",
  "Delta på fem olika patrull- eller avdelningsutfärder. Minst två av dessa måste ha involverat övernattning utomhus i tält eller vindskydd."
);
friluftsliv2b = new Klassprov(
  "friluftsliv2b",
  "Visa att du kan lägga kryss-, rak-, vinkel- och trefotssurrning på ett korrekt sätt."
);
friluftsliv2c = new Klassprov(
  "friluftsliv2c",
  "Använd en karta för att peka ut karttecknen för mindre stig, markerad vandringsled, bilväg, bebyggelse, skog, åkermark, ängar, sjöar och höjdkurvor."
);
friluftsliv2d = new Klassprov(
  "friluftsliv2d",
  "Visa och förklara hur kompassen fungerar samt hur man orienterar med kartan."
);
friluftsliv2e = new Klassprov(
  "friluftsliv2e",
  "Genomför Orientering för II-klass med godkänt resultat. Övningen ska omfatta 10 kontroller på 1 timma inom ett 3 km2 stort område."
);

fri2 = [
  friluftsliv2a,
  friluftsliv2b,
  friluftsliv2c,
  friluftsliv2d,
  friluftsliv2e
];

//Matlagning Två
matlagning2a = new Klassprov(
  "matlagning2a",
  "Visa hur man bygger, tänder och håller vid liv en blåslampa för matlagning."
);
matlagning2b = new Klassprov(
  "matlagning2b",
  "Planera själv en hajkmåltid som du sedan lagar och serverar till din patrull. Visa under hajken hur maten ska transporteras, förvaras och förberedas."
);
matlagning2c = new Klassprov(
  "matlagning2c",
  "Visa att du på max 8 minuter kan tända och därefter hålla vid liv en eld med hjälp av tändstål, kniv och liten yxa samt ved du samlat från skogen."
);

mat2 = [
  matlagning2a,
  matlagning2b,
  matlagning2c,
];

//Sjukvård Två
sjukvård2a = new Klassprov(
  "sjukvård2a",
  "Visa hur du förebygger samt ger första hjälpen vid: vrickning, föremål i ögat, sticksår, andra gradens brännskada, värmeslag, chock, vätskebrist, hypotermi, medvetslöshet pga berusning samt allergisk chock och epilepsianfall."
);
sjukvård2b = new Klassprov(
  "sjukvård2b",
  "Visa ensam och tillsammans med en kamrat hur man transporterar en medvetslös från ett rökfyllt rum, hur man släcker brand i sina egna eller annan persons kläder samt hur en brandsläckare används."
);
sjukvård2c = new Klassprov(
  "sjukvård2c",
  "Visa att du kan lägga tryckförband med gasbinda och scouthalsduk för skada på huvud, axel och överarm."
);

sju2 = [
  sjukvård2a,
  sjukvård2b,
  sjukvård2c
];

//Hälsa Två
hälsa2a = new Klassprov(
  "hälsa2a",
  "Pröva dig fram till ett antal fysiska träningsaktiviteter som tar ca 30 minuter att utföra."
);
hälsa2b = new Klassprov(
  "hälsa2b",
  "Upprepa II-5A varje dag under 30 dagar. Skriv upp dina träningsaktiviteter och gå igenom tillsammans med din patrull."
);

häl2 = [
  hälsa2a,
  hälsa2b
];

//Samhälle Två
samhälle2a = new Klassprov(
  "samhälle2a",
  "Visa att du kan handha, föra, hälsa och avlösa svensk fana på korrekt sätt."
);
samhälle2b = new Klassprov(
  "samhälle2b",
  "Ta reda på information om hemberedskap genom minst två källor. Gå igenom dina slutsatser tillsammans med din patrull och diskutera vad en scout kan göra för att förbättra sin egen och sin familjs beredskap."
);
samhälle2c = new Klassprov(
  "samhälle2c",
  "Medverka i sammanlagt 9 timmar av samhällsinsats/er inom scouting."
);

sam2 = [
  samhälle2a,
  samhälle2b,
  samhälle2c
];

//Second
andraklass = [
  [spj2, "spejarliv"],
  [fri2, "friluftsliv"],
  [mat2, "matlagning"],
  [sju2, "sjukvård"],
  [häl2, "hälsa"],
  [sam2, "samhälle"]
];

//Spejarliv Ett
spejarliv1a = new Klassprov(
  "spejarliv1a",
  "Välj ut tre punkter is scoutlagen som du ska fokusera på varje dag under 30 dagar. Skriv upp dina resultat och gå igenom tillsammans med din patrull."
);
spejarliv1b = new Klassprov(
  "spejarliv1b",
  "Visa hur du kan använda scoutstaven för minst 5 olika ändamål utöver att vandra."
);
spejarliv1c = new Klassprov(
  "spejarliv1c",
  "Genomför smygövning för I-klass med godkänt resultat. Övningen ska omfatta att spendera 10 timmar gömd i ensamhet i närheten av lägret eller stugan. För godkänt resultat ska du lämna skriftlig rapport om vad som pågått i lägret timma för timma, samt utan att bli sedd av någon ha samlat in 10 kontroller som placerats runt området."
);
spejarliv1d = new Klassprov(
  "spejarliv1d",
  "Genomför Kims Spel för I-klass med godkänt resultat. Ska omfatta att observera 10 bilder under 1 minuts tid och efter 2 timmar kunna ge utförliga slutledningar om varje bild utan att ta anteckningar."
);
spejarliv1e = new Klassprov(
  "spejarliv1e",
  "Genomför I-klassfärden efter att du klarat samtliga krav för Scout av I-klass. Färden ska omfatta minst 20 km vandring med ryggsäck i kuperad terräng, varav 24 timmar tillsammans med endast 1 jämnårig scoutkamrat, övernattning i bivack samt tillredning av måltid utan köksutrustning."
);
spj1 = [
  spejarliv1a,
  spejarliv1b,
  spejarliv1c,
  spejarliv1d,
  spejarliv1e
];

//Friluftsliv Ett
friluftsliv1a = new Klassprov(
  "friluftsliv1a",
  "Genomför hajk i svårare miljö, t ex vinterlandskap, sommarfjäll, strömt vatten eller ytterskärgård."
);
friluftsliv1b = new Klassprov(
  "friluftsliv1b",
  "Spendera sammanlagt 35 nätter i tält, vindskydd eller under bar himmel."
);
friluftsliv1c = new Klassprov(
  "friluftsliv1c",
  "Förklara grundprinciperna för att hantera en överlevnadssituation och visa att du kan bygga och spendera natten i en personlig bivack."
);
friluftsliv1d = new Klassprov(
  "friluftsliv1d",
  "Bygg tillsammans med din patrull ett surrnings-arbete som kan användas praktiskt, t ex en flotte, en pionjärbro eller ett signaltorn."
);
friluftsliv1e = new Klassprov(
  "friluftsliv1e",
  "Genomför Orientering för I-klass med godkänt resultat. Orienteringen omfattar samma sträckning som II-klass och ska tillryggaläggas med en ryggsäck om minst 16 kg."
);

fri1 = [
  friluftsliv1a,
  friluftsliv1b,
  friluftsliv1c,
  friluftsliv1d,
  friluftsliv1e
];

//Matlagning Ett
matlagning1a = new Klassprov(
  "matlagning1a",
  "Visa hur man bygger, tänder och använder en latmansspis, signaleld och nyeld med reflektor."
);
matlagning1b = new Klassprov(
  "matlagning1b",
  "Visa att du behärskar två metoder för att tillreda måltider på öppen eld utan köksutrustning."
);
matlagning1c = new Klassprov(
  "matlagning1c",
  "Prova att konservera livsmedel med torkning, syrning, inläggning eller annan valfri metod för att konservera mat. Visa och smaka ditt resultat tillsammans med din patrull."
);
matlagning1d = new Klassprov(
  "matlagning1d",
  "Visa att du på max 8 minuter kan tända och därefter hålla vid liv en eld med hjälp av tändstål, kniv och liten yxa samt ved du samlat från skogen."
);

mat1 = [
  matlagning1a,
  matlagning1d,
  matlagning1c,
  matlagning1d
];

//Sjukvård Ett
sjukvård1a = new Klassprov(
  "sjukvård1a",
  "Berätta hur man prioriterar enligt L-ABC för att överblicka en olyckssituation och hur man agerar om man är först på en olycksplats."
);
sjukvård1b = new Klassprov(
  "sjukvård1b",
  "Förklara isens bärighet och visa tillvägagångssättet vid livräddning på is med olika tekniker samt visa att du kan ta dig upp ur en isvak med isdubbar."
);
sjukvård1c = new Klassprov(
  "sjukvård1c",
  "Genomgå en HLR-utbildning av en certifierad instruktör med godkänt resultat. Övningen ska omfatta kompressioner och inblåsningar på övningsdocka samt ge grundläggande kunskaper och luftvägsstopp samt hur en hjärtstartare fungerar."
);

sju1 = [
  sjukvård1a,
  sjukvård1b,
  sjukvård1c
];

//Hälsa Ett
hälsa1a = new Klassprov(
  "hälsa1a",
  "Gör ett eget träningsschema för att höja din nivå från den du har efter II-5B."
);
hälsa1b = new Klassprov(
  "hälsa1b",
  "Utför I-5A varje dag under 30 dagar. Skriv upp dina träningsaktiviteter och gå igenom tillsammans med din patrull."
);
hälsa1c = new Klassprov(
  "hälsa1c",
  "Ta reda på information om en av följande: tobak, alkohol, socker, snabbmat eller annan ovana som är vanlig bland ungdomar. Gå igenom dina slutsatser tillsammans med din patrull och diskutera vilken livsstil en scout bör ha."
);

häl1 = [
  hälsa1a,
  hälsa1b,
  hälsa1c
];

//Samhälle Ett
samhälle1a = new Klassprov(
  "samhälle1a",
  "Ta reda på information om samhällsberedskap inom civil- och totalförsvar genom minst två källor. Gå igenom dina slutsatser tillsammans med din patrull och diskutera vad scouter har gjort för att hjälpa samhället om en samhällskris inträffar."
);
samhälle1b = new Klassprov(
  "samhälle1b",
  "Medverka i sammanlagt 15 timmar av samhällsinsats/er inom scouting."
);
samhälle1c = new Klassprov(
  "samhälle1c",
  "Berätta med egna ord om hur samhällsengagemang hänger samman med scoutlöftet."
);

sam1 = [
  samhälle1a,
  samhälle1b,
  samhälle1c
];

//First
förstaklass = [
  [spj1, "spejarliv"],
  [fri1, "friluftsliv"],
  [mat1, "matlagning"],
  [sju1, "sjukvård"],
  [häl1, "hälsa"],
  [sam1, "samhälle"]
];

//Classes
klasser = [
  tredjeklass,
  andraklass,
  förstaklass
];

//Enter data onto document
classes = ["tredjeklass", "andraklass", "förstaklass"];
letters = ["A.", "B.", "C.", "D.", "E.", "F."];
for (var i = 0; i < klasser.length; i++) {
  for (var j = 0; j < klasser[i].length; j++) {

    section = document.createElement("li");
    section.setAttribute("class", "klassområde");
    sectiontitle = document.createElement("h2");
    sectiontitle.innerHTML = klasser[i][j][1][0].toUpperCase() + klasser[i][j][1].slice(1);
    sectiontitle.setAttribute("class", "områdestitel");
    sectionlist = document.createElement("ul");
    sectionlist.setAttribute("id", klasser[i][j][1] + String(3 - i));

    g(classes[i]).appendChild(section);
    g(classes[i]).appendChild(sectiontitle);
    g(classes[i]).appendChild(sectionlist);

    for (var k = 0; k < klasser[i][j].length; k++) {
      trial = document.createElement("li");
      trial.setAttribute("id", klasser[i][j][0][k].name);
      trial.setAttribute("class", "klassprov röd");
      sectionlist.appendChild(trial);

      content = document.createElement("div");
      content.setAttribute("class", "content");
      trial.appendChild(content);

      letter = document.createElement("h3");
      letter.innerHTML = letters[k];
      content.appendChild(letter);

      img = document.createElement("img");
      img.src = "placeholder.png";
      img.setAttribute("id", klasser[i][j][0][k].name + 'img');
      content.appendChild(img);

      desc = document.createElement("p");
      desc.innerHTML = klasser[i][j][0][k].desc;
      desc.setAttribute("class", "desc");
      content.appendChild(desc);

      trialcompletion = document.createElement("h6");
      trialcompletion.innerHTML = "Du har inte klarat det här klassprovet.";
      content.appendChild(trialcompletion);
    }

  }
}

//Log in function
function login() {
  var username = g("username").value;
  var password = g("password").value;
  g("username").value = "";
  g("password").value = "";

  for (var x = 0; x < klasser.length; x++) {
    for (var y = 0; y < klasser[x].length; y++) {
      for (var z = 0; z < klasser[x][y][0].length; z++) {
        g(klasser[x][y][0][z].name).setAttribute("class", "klassprov röd");
        g(klasser[x][y][0][z].name + 'img').src = "placeholder.png";
        g(classes[x] + "progress").setAttribute("width", "0%");
      }
    }
  }

  for (var i = 0; i < logindata.length; i++) {
    if (username == logindata[i][0]) {
      if (password == logindata[i][1]) {
        g("msg").innerHTML = "Logged in successfully!";
        g("msg").style = "color: limegreen;";

        var array = USERDATA.split("\n");
        console.log(array);
        for (var user = 0; user < array.length; user++) {
          if (username == array[user]) {
            var n = 0;
            while (true) {

              n++;
              var s = array[user + n];
              if (s == '-') break;

              for (var x = 0; x < klasser.length; x++) {

                var trials = 0;
                for (var section = 0; section < klasser[x].length; section++) {
                  trials += klasser[x][section].length;
                }

                for (var y = 0; y < klasser[x].length; y++) {
                  for (var z = 0; z < klasser[x][y][0].length; z++) {

                    if (klasser[x][y][0][z].name == s) {
                      g(klasser[x][y][0][z].name).setAttribute("class", "klassprov grön");
                      g(klasser[x][y][0][z].name + 'img').src = "placeholder2.png";
                      g(classes[x] + "progress").setAttribute("width", String(parseInt(g(classes[x] + "progress").width) + (100 / trials)) + "%");
                    }
                  }
                }
              }


            }
            break;
          }
        }

        return;
      } else {
        g("msg").innerHTML = "Incorrect password";
        g("msg").style = "color: red;";
        return;
      }
    }
  }
  g("msg").innerHTML = "User does not exist!";
  g("msg").style = "color: red;";
}
