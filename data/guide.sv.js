'use strict';
/* Vårdguide (Soyogi) - Svenskt innehåll.
   Struktur identisk med guide.ja.js. Nödnummer: 112.
   Japanspecifikt anpassat; temperaturer i C (F inom parentes). */
window.OUCHI_CONTENT = window.OUCHI_CONTENT || {};
window.OUCHI_CONTENT.sv = {

  tech: [
    {
      id: 'koshi', emoji: '🧍', title: 'Skydda ryggen',
      sub: 'Grunderna i en vård som skyddar ryggen, utan att lyfta',
      procs: [
        {
          id: 'koshi1', title: 'Lyft inte, pressa inte: 9 grunder',
          steps: [
            { fig: 'bm_stance', t: 'Ställ fötterna bredare än axlarna, böj knäna och sänk höften. Skapa först en stabil bas. Detta sätt att använda kroppen kallas ”kroppsmekanik”, det första vårdpersonal lär sig.', c: 'Att stå rak och böja sig bara i ryggen är den ställning som mest skadar ryggen.' },
            { fig: 'bm_close', t: 'Kom så nära personen som möjligt. Kliv in med fötterna och håll din kropp nära hennes. Ju längre bort du är, desto mer mångdubblas belastningen på din rygg.' },
            { fig: 'no_twist', t: 'Vrid inte kroppen. För att byta riktning, vrid inte i midjan; flytta fötterna och vänd hela kroppen.' },
            { fig: null, t: 'Flytta inte personen med bara armarna. Använd de stora musklerna i lår och säte. Föreställ dig att röra dig genom att böja och sträcka knäna.' },
            { fig: 'slide_move', t: 'Lyft inte, låt glida. Att flytta vågrätt kräver mycket mindre kraft. Ett glidlakan från handeln, eller till och med en stor plastpåse, hjälper.', c: 'Ett knep för att skydda dina händer: när du för in en hand under kroppen, gå först in med handflatan nedåt och vänd handflatan uppåt först när den är tillräckligt djupt, för att dra personen mot dig. Går du in med handflatan uppåt från början kan en nagel fastna i lakanet eller skyddet och skadas. Användbart vid varje uppgift där man för in en hand i ett trångt utrymme, som att bädda.' },
            { fig: 'roll_prep', t: 'Gör personen kompakt. Korsa armarna över bröstet och dra upp knäna, så kan du flytta henne med lite kraft.' },
            { fig: 'lever_examples', t: 'Använd hävstången. Skapa en stödpunkt (markerad med en triangel), som en armbåge eller en höft, innan du flyttar. För att sätta sig upp är armbågen vridpunkten. Vid sängkanten är höften vridpunkten och benens tyngd lyfter överkroppen.' },
            { fig: 'roll_legs_first', t: 'Gör tyngdkraften till din bundsförvant. Använd tyngden av en kroppsdel som motor. Vid att vända till sidan, till exempel, låt först de uppdragna knäna falla (1), och kroppen följer med lite kraft, dragen av benens tyngd (2).' },
            { fig: null, t: 'Låt personen göra det hon kan. Att använda den kraft hon har kvar hjälper också att hålla hennes kropp stark.', c: 'Mottot: ”låt personen använda greppen”. Sänggrindar, armstöd, ledstänger. Ditt arbete blir lättare och hennes kraft bevaras: två flugor i en smäll.' }
          ],
          points: [
            'Lite för mycket ansträngning ”varje gång” är det som förstör ryggen. Gör det till en vana att kontrollera din hållning varje gång.',
            'Känns det omöjligt ensam, gör det till två, eller luta dig mot hjälpmedel eller en yrkesperson. Det är inget nederlag, det är rätt beslut.'
          ]
        }
      ]
    },

    {
      id: 'seiketsu', emoji: '🧼', title: 'Hygienens grunder',
      sub: 'Naglar, handtvätt, munskydd. Enkelt men det starkaste skyddet',
      procs: [
        {
          id: 'seiketsu1', title: 'Naglar, händer, munskydd: skydda båda',
          steps: [
            { fig: null, t: 'Detta är grunden för all vård. Inte iögonfallande, men en toppklasses teknik som skyddar dig och personen från skador och infektioner.' },
            { fig: null, t: 'Håll dina egna naglar korta, med rundade hörn. Långa naglar rispar personens hud under vården, och fastnar i lakan eller kläder och skadar dig.', c: 'Huden hos äldre eller försvagade personer är tunn, och även en liten rispa kan leda till infektion.' },
            { fig: null, t: 'Utrymmet under naglarna samlar smuts och rester. Lämnade långa blir de en grogrund för infektion vid varje måltid, blöjbyte och sårvård. Att hålla naglarna korta är i sig infektionsförebyggande.' },
            { fig: null, t: 'Tvätta händerna med tvål före och efter vården. Mellan fingrarna, runt naglarna, upp till handlederna. Särskilt ”efter ett blöjbyte” och ”innan du rör mat”, varje gång.', c: 'När du inte når en handfat är handsprit praktiskt. Men synlig smuts måste tvättas bort med vatten; spriten tar inte bort den.' },
            { fig: null, t: 'Vid blöjbyten och att röra sår, använd engångshandskar. För att ta av dem, rulla den smutsiga sidan inåt, kasta dem, och tvätta ändå händerna efteråt.' },
            { fig: null, t: 'Ett munskydd är inte ett redskap bara för sjukdagar; det är basutrustning under vården. Alla bär bakterier och virus utan några symtom. Det som inte gör dig, frisk, något kan vara livshotande för en försvagad person.', c: 'Bär ett särskilt vid vård nära ansiktet (mat, munvård, blöjbyten, sårvård). ”Bara när du känner dig dålig” skyddar inte nog.' },
            { fig: null, t: 'Håll även personens naglar korta. Det hindrar henne att rispa sig själv och att någon av er skadas under vården.', c: 'Klipp inte hemma en inåtväxande, deformerad, tjock hård nagel (nagelsvamp) eller nageln på någon med diabetes. En vanlig nagelsax klarar ofta inte det; det krävs specialverktyg och skicklighet, och man skadar sig lätt. Överlåt det till en läkare, eller en sjuksköterska på läkares ordination.' },
            { fig: null, t: '”Klippa naglarna. Tvätta händerna. Ta på munskydd.” Det kostar nästan inget, vem som helst kan börja i dag, och effekten är enorm. Gör det till en vana.' }
          ],
          points: [
            'Om din hälsa rasar stannar vården. Att skydda din egen kropp är detsamma som att skydda den vårdade personen.'
          ]
        }
      ]
    },

    {
      id: 'taii', emoji: '🛏️', title: 'Vända till sidan (lägesändring)',
      sub: 'Hur du byter läge för att förebygga trycksår',
      procs: [
        {
          id: 'taii1', title: 'Från rygg till sida',
          steps: [
            { fig: null, t: 'Säg alltid högt: ”Jag ska ändra ditt läge nu.” Att bli berörd plötsligt skrämmer personen och stelar kroppen, vilket gör det tungt för er båda.', c: 'Om benen är sköra, lederna stela, eller det finns en fortskridande sjukdom, använd inte detta förfarande rakt av. Detaljer på sidan nedan.', link: { cat: 'kobetsu', proc: 'kobetsu1' } },
            { fig: 'roll_prep', t: 'Korsa armarna över bröstet och dra upp båda knäna. Med kroppen kompakt kan du vända den med lite kraft.', m: 'Om förlamning hindrar att korsa armarna räcker det att lägga den drabbade handen på magen. Tvinga inte en stel (kontrakt) arm att korsas.' },
            { fig: 'shift_parts', t: 'Låt ansiktet vändas mot den sida du ska vända. Flytta kroppen i förväg mot den bortre sängkanten, så att den hamnar i mitten efter vändningen.', c: 'Flytta kroppen bit för bit, i ordningen: huvud, sedan axlar och rygg, sedan höft, sedan ben. Knepet är att inte flytta allt på en gång.' },
            { fig: 'roll_pull', t: 'Lägg händerna på knät och axeln (eller höften) och tippa försiktigt mot dig. Att dra mot sig är säkrare och kräver mindre kraft än att knuffa.', c: 'När du vänder mot en sida utan grind, var mycket försiktig med fall.', m: 'Innan du vänder, lägg den drabbade armen på magen så att den inte kläms under kroppen. Att ligga på den drabbade sidan gör att personen dåligt märker smärta eller tryck, så håll det så kort som möjligt.' },
            { fig: 'roll_legs_first', t: 'Saknar du kraft att vända på en gång, låt först bara de uppdragna knäna falla mot dig (1). Benens tyngd vänder först, och höft och bål följer med lite kraft, dragna av den tyngden (2).', c: 'Knepet är att göra personens tyngd och tyngdkraften till dina bundsförvanter. Eftersom det inte bygger på armkraft hjälper det särskilt när en kvinna eller en äldre person vårdar.' },
            { fig: null, t: 'Kan personen röra sig även lite, låt henne gripa sänggrinden på den sida hon vänder mot. Även ett litet drag gör ditt arbete mycket lättare, och det håller hennes armkraft: en liten daglig rehabilitering.', c: 'Kontrollera först att grinden sitter fast. En grind som bara är inskjuten kan lossna om man drar hårt.' },
            { fig: 'roll_cushion', t: 'Lägg en kudde mot ryggen för att stabilisera läget. Böj det övre knät lätt och lägg en kudde även mellan knäna.' },
            { fig: null, t: 'Kontrollera till sist att beniga punkter som öron, axlar, armbågar, höftben och anklar inte trycker hårt mot något.' }
          ],
          points: [
            'Vänd henne inte genom att dra i en arm eller byxa; det skadar hud och leder. Stöd bålen (axlar och höft) för att vända.',
            'Kontrollera också att inga skrynkliga lakan eller kläder ligger kvar under kroppen. Veck orsakar trycksår.'
          ]
        },
        {
          id: 'taii2', title: 'Förebygg trycksår: näring, tid, plats',
          steps: [
            { fig: 'nutrition_cushion', t: 'I själva verket är den största grunden för trycksårsförebyggande inte lägesändringstekniken utan ”näringen”. En mager, benig person får sår tidigare, under samma förhållanden. Sköt måltider och näringstillstånd för att bevara den köttkudde som dämpar.', c: 'En avtagande aptit är i sig ett varningstecken för trycksår. Prata om näring med en läkare eller en näringsyrkesperson.' },
            { fig: 'pressure_points', t: 'Trycksår bildas lätt där ben sticker ut och trycker mot sängen. Bakhuvudet, axlarna, armbågarna, mitten av sätet och hälarna är typiska.' },
            { fig: null, t: 'Som riktmärke, lämna henne inte mer än 2 till 3 timmar i samma läge. Med en tryckfördelande madrass, eller beroende på tillståndet, ändras rätt intervall.', c: 'Bestäm intervall och metod tillsammans med en yrkesperson som en sjuksköterska eller vårdsamordnare, för tryggheten.' },
            { fig: null, t: 'Hittar du rodnad på säte eller hälar, tryck lätt med ett finger. Rodnad som inte blir vit är början på ett trycksår. Lägg henne så att ingen tyngd vilar på den punkten.', c: 'Gnid eller massera inte det röda området. Det gör det värre.', m: 'Den drabbade sidan har nedsatt känsel, och personen märker inte smärtan. Kontrollera huden på den drabbade sidan särskilt ofta.' },
            { fig: 'heel_float', t: 'För någon vars hälar lätt rodnar, lägg en kudde under vaderna för att lyfta hälarna något.' },
            { fig: null, t: 'Hur väl en madrass eller kudde ”förebygger trycksår” varierar enormt mellan produkter. Uppträder rodnad vid bruk, passar hjälpmedlet kanske inte. Det är värt att se över det eller pröva ett annat.', c: 'Snabbast för att hitta de passande förebyggande punkterna är att fråga en läkare, sjuksköterska eller hjälpmedelsyrkesperson.' }
          ],
          points: [
            'Även om ett trycksår bildas, klandra inte er själva med ”vår vård var dålig”. Kroppsform, konstitution och sjukdomar skapar från början stora skillnader i hur lätt de bildas.',
            'Det som betyder något är inte skuld, utan att tidigt prata med en yrkesperson och byta till ett förebyggande som passar personen.'
          ]
        }
      ]
    },

    {
      id: 'oki', emoji: '🌅', title: 'Sätta sig upp',
      sub: 'Tills hon sitter på sängkanten',
      procs: [
        {
          id: 'oki1', title: 'Låta henne sitta på sängkanten',
          steps: [
            { fig: null, t: 'Efter ett ord till henne vänder du kroppen först till sidan. Korsa armarna över bröstet, böj knäna, lägg händerna på knät och axeln och tippa försiktigt mot dig. Glöm inte att flytta kroppen till sängkanten på den sida hon reser sig.', m: 'Vid förlamning sätter man sig i regel upp med den starka sidan nedåt, eftersom man kan stödja sig på den starka sidans armbåge.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Fortfarande på sidan sänker du båda benen från knät och nedåt över sängkanten.' },
            { fig: 'situp_seq', t: 'Stöd axlar och höft, använd benens tyngd och res överkroppen i en båge (bild 1 till 4). Med armbågen som vridpunkt (triangel) och stödet flyttat från armbåge till handflata reser hon sig med mycket mindre kraft än att dra rakt upp.', c: 'Med en elsäng vars ryggstöd höjs är det ännu lättare att höja ryggen lite först. Finns en grind eller ett stöd, låt personen gripa det. Men för att lägga tyngd vid uppresning, använd bara ett fast ”stödhandtag (sänghandtag)”.' },
            { fig: 'sit_edge', t: 'När hon sitter, se till att hela fotsulorna vilar platt mot golvet. Med en höjdjusterbar säng ställer du in den så att fötterna når golvet.' },
            { fig: null, t: 'Släpp inte genast. Strax efter uppresningen kan blodtrycket sjunka och ge yrsel. Stöd henne en stund och betrakta färg och tillstånd.', c: 'Blek färg, förvirrad blick, kallsvett. Pressa då inte på; lägg tillbaka henne en stund.' }
          ],
          points: [
            'Om uppresning förblir svår dag efter dag löser hjälpmedel som en elsäng eller ledstänger det ofta. Fråga en hjälpmedelsyrkesperson eller en vårdrådgivning.'
          ]
        }
      ]
    },

    {
      id: 'ijou', emoji: '🪑', title: 'Resa sig och förflyttningar',
      sub: 'Från säng till rullstol. Där flest olyckor sker',
      procs: [
        {
          id: 'tachi1', title: 'Hjälpa någon att resa sig',
          steps: [
            { fig: 'stand_prep', t: 'Låt henne glida framåt på sitsen. Skjut sätet mot sitsens framkant.' },
            { fig: 'stand_prep', t: 'Låt fötterna dras något bakåt. Med anklarna bakom knäna är det lättare att resa sig.', c: 'Se upp med att dra bakåt för mycket. Går fötterna för långt bak kan hon tippa framåt när hon reser sig.' },
            { fig: null, t: 'Med en stol med armstöd, låt personen trycka på armstöden. Att trycka är lättare för uppresning än att dra, och avlastar dig också. Att trycka med egna armar är i sig en liten daglig rehabilitering som bevarar muskelstyrkan.' },
            { fig: 'stand_bow', t: 'Låt henne luta sig framåt ”som i en bugning”. När huvudet går framåt och nedåt lyfts sätet av sig självt. Dra inte rakt upp; det stoppar den naturliga rörelsen och gör uppresningen svårare.', c: 'Detta är den farliga punkten. Är bugningen för djup faller hon rakt framåt. En klassisk olycka, även bland vårdpersonal. Luta bara ”minimum för att sätet ska lyftas”. Stå snett framför, i läge att fånga henne, försiktigt och långsamt.', m: 'Personer med förlamning, eller försvagade av lång sängvila, kan inte stoppa sin egen framåtfart. Gå särskilt långsamt, bit för bit. Slappna inte av.' },
            { fig: 'stand_assist', t: 'Lägg armen om personens höft och res er tillsammans i takt med rörelsen framåt. Böj dina egna knän och sänk höften, så gör du dig inte illa i ryggen.', m: 'För någon vars drabbade knä lätt viker sig, stabiliserar det att lägga ditt knä lätt mot hennes drabbade knä (hindrar att det viker sig).', link: { cat: 'koshi', proc: 'koshi1' } },
            { fig: null, t: 'Strax efter uppresningen kan knäna vika sig. Fortsätt stödja tills du bekräftat att hon står stadigt.' }
          ],
          points: [
            'Det främsta exemplet på ”en olycka du undviker bara genom att känna till den” är fallet framåt. Gör detta förfarande försiktigt, långsamt, utan att slappna av.',
            'Fruktar du att inte kunna hålla ett knä som viker sig, tvinga inte. Här kommer stödhandtag och andra hjälpmedel in. Bär det inte ensam; prata med en yrkesperson.'
          ]
        },
        {
          id: 'ijou1', title: 'Från säng till rullstol',
          steps: [
            { fig: 'transfer_angle', t: 'Ställ rullstolen på personens lättare sida (den starka sidan vid förlamning), i en vinkel på 20 till 30 grader mot sängen.' },
            { fig: null, t: 'Lås båda bromsarna, och fäll upp eller ta bort fotstöden.', c: 'Att glömma bromsarna är den vanligaste orsaken till förflyttningsolyckor. Gör det till en vana att peka och kontrollera varje gång.' },
            { fig: null, t: 'Låt henne sitta på sängkanten, dra tillbaka fötterna och glida framåt på sitsen.' },
            { fig: null, t: 'Låt henne resa sig framåtlutad ”som i en bugning”. Glida framåt först, dra tillbaka fötterna. Se sidan nedan för detaljerna.', link: { cat: 'ijou', proc: 'tachi1' } },
            { fig: 'pivot_steps', t: 'När hon står, vrid på fötterna, i småsteg, långsamt. Vrid inte bara kroppen.' },
            { fig: null, t: 'Att låta henne gripa rullstolens bortre armstöd vänder kroppen naturligt. Sänk höften långsamt mot sitsen.', c: 'Mottot är ”låt personen använda greppen”. Varje gång hon använder armstödet bevaras kraften i armar och kropp.' },
            { fig: 'sit_deep', t: 'Låt henne sätta sig djupt bakåt och lägg fötterna på fotstöden. Sittande framåt glider hon ner, vilket är farligt. Nästa sida förklarar hur du placerar henne rätt.', link: { cat: 'ijou', proc: 'suwari1' } }
          ],
          points: [
            'Känner du ens lite ”jag kanske inte kan hålla henne”, gör det inte ensam.',
            'Förflyttning av den som inte kan stå själv (total hjälp) är en annan metod. Låt en yrkesperson se dig i person och lära dig det sätt som passar personen.'
          ]
        },
        {
          id: 'suwari1', title: 'Placera om djupt i rullstolen',
          steps: [
            { fig: 'sit_deep', t: 'Varför det är viktigt. Sittande framåt glider kroppen ner bit för bit, och tryck och skjuvning koncentreras till mitten av sätet (svanskotan). I den ställningen bildas trycksår bara av att sitta.' },
            { fig: null, t: 'Kontrollera först båda bromsarna. Ta bort fötterna från fotstöden och sätt sulorna platt mot golvet.' },
            { fig: null, t: 'Låt personen luta sig framåt ”som i en bugning”. Sätet lyfts lite. Att låta henne trycka på armstöden lyfter det lättare.' },
            { fig: null, t: 'Gå bakom henne och, i det ögonblick sätet lyfts, stöd bäckenet (runt höftbenen) med båda händerna och för det mjukt bakåt. Det är en känsla av att glida, inte lyfta.', c: 'Att sträcka händerna under armhålorna bakifrån för att hissa upp henne kan skada axlarna, så det rekommenderas inte hemma.' },
            { fig: null, t: 'Är det svårt för henne att luta sig framåt, gör det sida för sida, bit för bit. Luta kroppen åt ena hållet, skicka det lyfta sätet bakåt, sedan likadant på andra sidan. Detta ”gå på sätet” placerar henne lite djupare varje gång.' },
            { fig: null, t: 'Kontrollera till sist. Finns ingen glipa mellan ländryggen och ryggstödet och bäckenet är upprätt, är det bra. Sätt tillbaka fötterna på fotstöden.' },
            { fig: null, t: 'En sak till: ordna även oordnade kläder. Det finns faktiskt väldigt många vars byxa eller kjol glidit ner, med underkläder eller blöja i synhåll. En rullstol tar henne utanför hemmet. Så skäms personen.', c: 'Personen kan ofta inte ordna det själv och vågar inte säga det. Att märka det och ordna det diskret är vårdarens uppgift. En pinsam upplevelse kan bli en anledning till ”jag vill inte gå ut mer”. Ett prydligt yttre är ett litet extra steg som skyddar personen och dig från andras blickar.' }
          ],
          points: [
            'Omplacering sker flera gånger om dagen. Tänker du ”hon har glidit ner”, gör det, ofta. Det är i sig trycksårsförebyggande.',
            'Hållningen och kläderna. Först när båda är i ordning är omplaceringen ”klar”.'
          ]
        },
        {
          id: 'kuruma1', title: 'Förflytta sig i rullstolen',
          steps: [
            { fig: null, t: 'Innan du kör, kontrollera först. Är fötterna på fotstöden? Är händer, kläder eller filt fria från hjulen? Att köra med något klämt kan leda till skada eller olycka inom några meter.' },
            { fig: null, t: 'När det kontrollerats, säg ”Vi kör nu” innan du startar. Att starta plötsligt skrämmer henne.' },
            { fig: 'curb_tip', t: 'Vid en liten kant, tryck på tippspaken bak för att lyfta framhjulen och kör upp framåt. För att komma ner, kör bakåt och sänk långsamt från bakhjulen.', c: 'Spakens läge och förekomst skiljer sig mellan rullstolar. Kontrollera på den verkliga modellen vid lån eller köp.' },
            { fig: null, t: 'En brant nedförsbacke är från början en ”väg att undvika”. Finns en hiss eller en mjuk ramp, välj den även som omväg.', c: 'Måste du ner, kör bakåt och långsamt. Men den samlade tyngden av person och rullstol är mer än du tror. Att falla tillsammans för att du inte kan hålla är en allvarlig olycka. Att du inte faller betyder lika mycket. Vid minsta tvekan, ropa på hjälp.' },
            { fig: null, t: 'När du stannar eller går ifrån, lås alltid bromsarna. Och när du går ifrån, säg alltid ”Vänta här. Jag är strax tillbaka.” Olyckor där personen försöker resa sig medan du är borta är mycket vanliga.', c: 'Om ”vänta här” når fram till personen kräver omdöme. Vid minsta tvekan, undvik helt att lämna henne sittande i rullstolen och gå ifrån.' }
          ]
        }
      ]
    },

    {
      id: 'omutsu', emoji: '🚻', title: 'Byta blöja',
      sub: 'Snabbt, varmt, och skyddande huden',
      procs: [
        {
          id: 'omu1', title: 'Byta en tejpblöja',
          steps: [
            { fig: null, t: 'Innan du börjar, samla allt inom räckhåll. En ren blöja, ett inlägg, våtservetter, engångshandskar och en påse för den smutsiga blöjan. Så att du aldrig behöver gå ifrån mitt i.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: null, t: 'Efter ett ord till henne, dra ner byxan och lossa blöjans tejp. Håll allt utom det nödvändiga området täckt med en handduk eller filt.', link: { cat: 'omutsu', proc: 'omu2' } },
            { fig: null, t: 'Vänd kroppen till sidan, rulla den smutsiga blöjan inåt och skjut in den lätt under kroppen. Att vända till sidan görs som vid lägesändring.', c: 'Finns en sänggrind, stabiliserar det läget att låta henne hålla i den på sidan, är lättare för er båda och hjälper att bevara hennes kraft. Men tvinga inte. Är personen villig räcker det.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Torka framifrån och bakåt (från magsidan till sätessidan). Hos kvinnor särskilt är denna riktning viktig för att förebygga urinvägsinfektioner.', c: 'Vid kraftig nedsmutsning rengör sköljning med ljummet vatten bättre än att torka och är skonsammare mot huden.' },
            { fig: null, t: 'Rulla halva den nya blöjan och skjut in den under kroppen, vänd tillbaka henne på rygg, dra sedan ut den på andra sidan och bred ut den. Blöjans mitt ska ligga vid kroppens mitt.' },
            { fig: 'tape_cross', t: 'Fäst tejpen korsvis: de nedre något uppåt, de övre något nedåt. Lämna plats för ett eller två fingrar runt magen.' },
            { fig: null, t: 'För ett finger längs läckagebarriärerna (de upprättstående kanterna vid benöppningarna) och res dem utåt. Ligger de inåt orsakar de läckage.' },
            { fig: null, t: 'Kontrollera varje gång snabbt huden: rodnad, ömhet eller sår. Oroar dig något, prata tidigt med en yrkesperson.', m: 'Om kontrakturer gör benen svåra att öppna, tvinga dem inte. Arbeta inom det smärtfria området, och säkrast är att metoden visas av en yrkesperson som följer personen.' }
          ],
          points: [
            { t: 'Att skapa en stämning där hon aldrig behöver säga ”förlåt” är den största skickligheten. Hur man skapar den stämningen skiljer sig mellan personer. Det står på nästa sida.', link: { cat: 'omutsu', proc: 'omu2' } },
            'Efter en tarmtömning skyddar det huden att byta så snart som möjligt i stället för att vänta.',
            'När läckage fortsätter passar oftare än placeringen blöjan eller inlägget inte kroppen. Fråga en butik eller yrkesperson om att se över storlek eller typ.'
          ]
        },
        {
          id: 'omu2', title: 'Blöjbytet och hjärtat',
          steps: [
            { fig: null, t: 'Vård vid toalettbestyr visar skillnaden i ”hjärta” mer än skillnaden i skicklighet. Även om du är snabb och noggrann: känner sig personen förnedrad är det inte rätt svar. Och detta är den enda vården utan en fast ”rätt form”, med de största skillnaderna mellan människor.' },
            { fig: null, t: 'För vissa passar det att göra det sakligt, som ett vanligt hushållsgöromål. Att inte göra en stor sak av det gör skammen minst.' },
            { fig: null, t: 'För andra passar det bättre att småprata. Stämningen av ”detta är varken besvär eller börda” går fram, och känslan av ursäkt löses upp.', c: 'Vad som passar berättar personen för dig. Hennes min, hur mycket hon pratar, spänningen i kroppen, hur ofta hon säger ”förlåt”. Med ett sätt som inte passar ökar detta. Ökar det är det ett tecken att ändra ditt tillvägagångssätt.' },
            { fig: null, t: 'Oavsett stil finns ett gemensamt ”gör inte”. Gör ingen grimas. Kommentera inte lukt eller mängd. Skynda inte på. Klandra inte olyckor. Detta är lika för alla.' },
            { fig: null, t: 'Att i förväg bestämma vad du svarar när hon säger ”förlåt” gör det lättare. ”Vi är kvitt.” ”Du bytte på mig när jag var bebis.” Det finns ord som fungerar just för att ni är familj.', c: 'Men ett skämt kan såra vissa. Om hon skrattar gott är din lärare; iaktta personens reaktion.' }
          ],
          points: [
            'En blöja är inte alltid ”det enda alternativet”. Finns det ännu ett sätt att uträtta på toaletten eller en bäckstol skyddar det värdigheten och kroppens kraft. Om man alls ska använda blöjor är ett viktigt ämne värt att diskutera med en yrkesperson.',
            'Handgreppen behärskar du på en eller två veckor. Att förena hjärtan är ett trevande som fortsätter för evigt. Det kommer dagar då det inte går, och det är naturligt.'
          ]
        }
      ]
    },

    {
      id: 'shokuji', emoji: '🍚', title: 'Hjälpa till att äta',
      sub: 'En hållning som undviker felsväljning och ett lugnt tempo',
      procs: [
        {
          id: 'shoku1', title: 'Hållning utan felsväljning och hur du hjälper',
          steps: [
            { fig: null, t: 'Börja först när hon är riktigt vaken. Att äta sömnig leder till att mat kommer i luftstrupen (aspiration).', c: 'Tvätta händerna innan du rör mat. Rena naglar och händer skyddar personen direkt från infektion.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: 'meal_posture', t: 'På en stol, låt henne sitta långt bak, med sulorna mot golvet. Lätt framåtlutad, med hakan indragen, är den hållning som minst gynnar felsväljning.', c: 'När hakan lyfts öppnas luftstrupen rakt och mat kommer lättare in. Att luta huvudet bakåt och hälla in mat är farligt.' },
            { fig: 'bed_up', t: 'I sängen, res överkroppen (minst 30 grader, helst 60 till 90). Lägg en kudde bakom huvudet för att dra in hakan.' },
            { fig: null, t: 'Håll varje tugga liten. För skeden underifrån och bekräfta sväljningen före nästa tugga. Går adamsäpplet upp och ner är det tecknet på en sväljning.', m: 'Vid förlamning, för skeden till mungipan på den starka sidan. På den drabbade sidan tuggas mat dåligt och blir kvar utan att hon märker det.' },
            { fig: null, t: 'Att hjälpa till med allt är inte det enda rätta svaret. Du hjälper med soppan, och personen äter de fasta rätterna med bestick. En form ”hälften var” är också fin. Ju mer hon äter själv, desto mer bevaras hennes kraft och glädjen i att äta.' },
            { fig: null, t: 'Även när du hjälper: kan du kommunicera, låt henne få det hon vill, i den ordning hon vill. Men sättet att fråga skiljer sig. Vissa vill ha varje tugga angiven, andra säga ungefär och lämna åt dig, andra lämna allt.', c: 'Vissa tycker ”att bli frågad varje gång” är jobbigt. Vilket sätt att fråga som känns behagligt kan bara personen avgöra. Iaktta reaktionen och hitta den personens form.' },
            { fig: null, t: 'För någon som lätt felsväljer vatten eller te finns ett sätt att förtjocka. Den passande tjockleken skiljer sig, så rådgör med en logoped (sväljningsspecialist) eller en läkare eller sjuksköterska.' },
            { fig: null, t: '30 minuter till en timme efter måltiden, håll kroppen upprätt. Att lägga sig genast kan orsaka felsväljning med det som kommer tillbaka från magen.' },
            { fig: null, t: 'Kontrollera till sist att ingen mat blir kvar i munnen. Den tenderar att stanna i kinderna och i gommen.', m: 'Vid förlamning stannar den särskilt i kinden på den drabbade sidan. Personen märker det inte heller, så titta med avsikt.' }
          ],
          points: [
            { t: 'Mer felsväljning, måltider som tar för lång tid. Det kanske inte är dålig hjälp utan ett tecken på att sväljkraften har förändrats. Det är viktigt, därför står det på nästa sida.', link: { cat: 'shokuji', proc: 'shoku2' } }
          ],
          ng: [
            'Ge mat medan du ber om ett svar (att prata öppnar luftstrupen)',
            'Skynda på henne. Göra stora tuggor',
            'Luta huvudet bakåt och hälla in'
          ]
        },
        {
          id: 'shoku2', title: 'När ätandet börjar gå trögt',
          steps: [
            { fig: null, t: 'Att hjälpa till att äta är inte bara en uppgift. Den dagliga måltiden är den närmaste hälsokontrollen och för personen den största glädjen. Just därför är ”det går trögare” ett viktigt tecken du inte får missa.' },
            { fig: null, t: 'Tänk först på tillfälliga orsaker. Illamående, förstoppning, ett munsår, dåligt sittande tandprotes, nedstämdhet. Passar något och det återhämtar sig på några dagar behöver du inte oroa dig för mycket.' },
            { fig: null, t: 'Det man ska ge akt på är när det håller i sig länge. Ingen kroppslig sjukdom och inget skäl i sinnet hittas, ändå tar det tid, hon felsväljer, håller mat i munnen. Det kan vara ett tecken på att hela helheten ”tugga, skjuta bakåt med tungan, tajma sväljningen” försvagas. Det sker även när demens ändrar hjärnans funktion.' },
            { fig: null, t: 'Denna bedömning är faktiskt ett svårt område även för läkare och sjuksköterskor. En sväljningsspecialist (logoped) märker det ofta, så säg tydligt till din läkare eller rådgivning: ”jag vill att en sväljningsspecialist tittar”.', c: 'Via rehabilitering i hemmet eller en sjukhusmottagning är en sväljningsundersökning eller -bedömning ibland möjlig.' },
            { fig: null, t: 'Och här det viktigaste, ärligt sagt. ”Så länge hon kan äta via munnen” är inte alltid målet. För någon vars sväljning försvagats når ätandet självt ett stadium med risk för lunginflammation eller kvävning. Då kan ”via munnen även med tvång” inte kallas rätt svar.' },
            { fig: null, t: 'Bortom det finns alternativ som näring via näsan eller magen (sondmatning, PEG) eller dropp. Dessa ord är kanske smärtsamma bara att höra. Men detta är inte ”att ge upp”; det är medicinsk vård för att skydda personen från lunginflammation och kvävning.', c: 'Diskutera det väl med läkaren, försiktigt. Men det är också ett läge där man helst inte skjuter upp beslutet för länge. Ett sent beslut kan tränga in personen och dig i ett hörn.' }
          ],
          points: [
            'Denna bedömning är inte något familjen ska bära ensam. Snarare är det ett område familjen inte får besluta ensam. Alltid tillsammans med en yrkesperson.',
            'Att du märker ”hennes sätt att äta har ändrats på sistone”, som den som ser närmast varje dag, är just den information en yrkesperson mest behöver.'
          ]
        }
      ]
    },

    {
      id: 'koukuu', emoji: '🦷', title: 'Munvård',
      sub: 'Att förebygga lunginflammation börjar i munnen',
      procs: [
        {
          id: 'kou1', title: 'Tandborstning och munvård',
          steps: [
            { fig: null, t: 'Att hålla munnen ren är den bästa förebyggande åtgärden mot lunginflammation (aspirationspneumoni) hos äldre. Gör det till en vana efter måltiderna.' },
            { fig: null, t: 'Är personen villig, låt henne borsta själv. Det är i sig god rehabilitering. Men hon borstar ofta inte tillräckligt bra, så slutkontrollen är din uppgift.', c: 'Använd ord som inte gör slutkontrollen obehaglig. Något som ”Du har borstat bra. Visa mig bara baksidan till sist” går lättare in, genom att erkänna ansträngningen först.' },
            { fig: null, t: 'Hållningen är densamma som vid ätandet. Lätt framåtlutad, med hakan indragen. Så att vatten och smuts inte rinner ner i halsen under vården.', link: { cat: 'shokuji', proc: 'shoku1' } },
            { fig: null, t: 'Ta ut tandprotesen och rengör den med en protesborste. Använd inte vanlig tandkräm; slipmedlet repar protesen. På natten tar du ut den och lägger den i vatten eller rengöringsmedel.' },
            { fig: null, t: 'För den som inte kan skölja, torka mjukt med en svampborste nästan utan vatten, eller med fuktig kompress runt ett finger.' },
            { fig: null, t: 'Rengör mjukt inte bara tänderna utan även tungan, gommen och kindernas insidor. Försök inte ta bort fastsittande smuts på en gång.', m: 'Vid förlamning samlas smuts mellan kind och tandkött på den drabbade sidan, var uppmärksam där och mjuk.' },
            { fig: null, t: 'Det är okej om det inte är perfekt varje gång. Men håll minimum innan hon lägger sig. Ta ut tandprotesen. Ta bort mat som blivit kvar i munnen. Bara dessa två, varje kväll utan undantag.', c: 'Under sömnen kan det som blir kvar i munnen omärkligt rinna ner i luftstrupen, och en lunginflammation börjar i tysthet. Osynlig men livshotande, den största faran dold i munvården.' },
            { fig: null, t: 'Ihållande blödning, ett munsår, smärta, dåligt sittande protes. Rådgör då med en tandläkare. Det finns också ett system med ”tandläkare på hembesök”.' }
          ],
          points: [
            'De dagar hon värjer sig behöver du inte sträva efter perfektion. Men håll bara ”ta ut protesen och ta bort matrester före sömnen” som dagligt minimum.',
            'Munnen är en särskilt privat kroppsdel. Även vård som skyddar livet sårar hjärtat om den blir framtvingad. Liv och hjärta väger lika. Saknas det ena avlägsnar man sig från lyckan.'
          ]
        }
      ]
    },

    {
      id: 'kigae', emoji: '👕', title: 'Klä på sig',
      sub: 'Regeln: klä av från den starka sidan först',
      procs: [
        {
          id: 'kigae1', title: 'Byta ett överplagg (öppet framtill)',
          steps: [
            { fig: 'datsuken', t: 'När en sida är svår att röra på grund av förlamning eller smärta är regeln: klä av med start på den starka sidan, klä på med start på den svårrörliga (drabbade) sidan.', c: 'Dra inte hårt i en hand eller arm. Det kan skada axeln eller ge blåmärke på huden.' },
            { fig: null, t: 'Klä av. Dra först ut armen på den starka sidan ur ärmen. Dra sedan ut den svårrörliga sidan långsamt.' },
            { fig: null, t: 'Klä på. Trä först armen på den svårrörliga sidan. Det går lätt om du rynkar ärmen och möter handen.', c: 'När ett finger fastnar i ärmen och inte går igenom, tvinga inte. Att trycka på med en nagel fast kan slita av nageln, en allvarlig skada. Det händer även proffs. Dra tillbaka det mjukt, rynka ärmen på nytt, och försök igen.', m: 'När en kontraktur hindrar armbågen att sträckas, försök inte sträcka armen; rynka i stället plagget över. Rymligt, töjbart tyg är mycket lättare.' },
            { fig: null, t: 'När det sitter på upp till axeln, låt henne trä armen på den starka sidan. Låt henne göra det hon kan.' },
            { fig: null, t: 'Släta till sist ut vecken under rygg och säte. Att ligga på veck orsakar trycksår.' }
          ],
          points: [
            'Klädvalet är också en del av vårdtekniken. Att bara göra dem öppna framtill, rymliga och töjbara gör påklädningen många gånger lättare.',
            'Inte bara vid påklädning, utan även efter en förflyttning eller rullstol, eller efter toaletten, hamnar kläderna lätt i oordning. Nedglidna byxor, uppvikt fåll. Märk det och ordna diskret. Att ordna kläder i oordning är en grund i vården som skyddar personens värdighet.',
            'Påklädning är också ett värdefullt tillfälle att se hela kroppen. Rodnad i huden, blåmärken, svullnad, sår. Kan du naturligt hålla ett öga på det medan du hjälper, är det redan god vård.'
          ]
        },
        {
          id: 'kigae2', title: 'Byta byxor (liggande)',
          steps: [
            { fig: null, t: 'Först en punkt om inställning. Att klä underkroppen är den vård där skammen kommer mest till ytan. Även utan demens är det naturligt att bli nekad eller mötas av ovilja.', c: 'Kort sagt är det uppriktigheten i dina ord och ditt sätt. Säg syftet ”du känner dig fräsch efter bytet”, täck med en handduk, titta inte där det inte behövs, och var snabb. Förlorar du förtroendet här kan hon vägra själva bytet. En vård som skyddar värdighet och hygien samtidigt.' },
            { fig: null, t: 'Trä först det svårrörliga benet. Dra upp i ordning: ankel, knä, lår.', c: 'Fastnar en tå i fållen är kraft förbjuden. Avslitna naglar är en klassisk påklädningsskada. Dra tillbaka den en gång, rynka fållen på nytt, och trä den.' },
            { fig: null, t: 'För den som kan lyfta höften, låt henne böja knäna och lyfta sätet. Dra i det ögonblicket byxan upp till midjan.' },
            { fig: null, t: 'För den som inte kan lyfta höften, luta kroppen från sida till sida omväxlande och dra upp en sida i taget. Att vända till sidan görs som vid lägesändring.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Ordna midjeläget och vecken, så är det klart.' }
          ]
        }
      ]
    },

    {
      id: 'seishiki', emoji: '🛁', title: 'Tvätta kroppen och bada',
      sub: 'Varmt, säkert och rent',
      procs: [
        {
          id: 'sei1', title: 'Tvätta kroppen (i sängen)',
          steps: [
            { fig: null, t: 'Värm först rummet (sikta på 22 till 24°C / 72 till 75°F). Kyla stelar kroppen och höjer blodtrycket.' },
            { fig: null, t: 'Vrid ur handduken i ganska hett vatten, cirka 55 till 60°C (130 till 140°F), så har den precis rätt värme när den når huden. Kontrollera temperaturen först på insidan av din egen arm.' },
            { fig: null, t: 'Blotta bara den del du tvättar och håll resten täckt med en badhandduk. Hänsyn både till kylan och till skammen.' },
            { fig: 'wipe_direction', t: 'Torka lemmarna från den yttre änden mot kroppens mitt (hand mot axel, fot mot lår). Det följer blodets flödesriktning.' },
            { fig: null, t: 'Ordningen är ansikte, armar, bröst, mage, ben, rygg, säte, från de renare områdena först. Efter torkning, ta upp fukten genast med en torr handduk. Lämnad fuktig orsakar den avkylning och hudbesvär.', m: 'En kontrakt handflata, armhålorna och armbågsvecken samlar svett och smuts. Bänd dem inte upp med kraft; torka mjukt så långt de öppnas utan smärta.' },
            { fig: null, t: 'Det behöver inte vara hela kroppen varje dag. Att dela upp det, överkropp i dag och underkropp i morgon, tröttar varken personen eller dig.' }
          ],
          points: [
            'Tvätt och bad är främsta exempel på ofta nekad vård. De dagar hon nekar, pressa inte; i dag bara ansikte och händer, i morgon fötterna, är bra. Att tänka renlighet i veckor snarare än dagar är ungefär rätt.'
          ]
        },
        {
          id: 'sei2', title: 'Bada säkert',
          steps: [
            { fig: null, t: 'Först, något att veta. Ett bad är inte ”en tilldragelse som bara gör gott”. Det kostar energi. Det är besvärligt. Det är pinsamt. Hon vill inte vara en börda. Hon saknar förtroende för sin kropp. Skälen att neka är många, och alla naturliga.', c: 'Även friska människor har dagar av ”jag orkar inte bada i dag”. Att inte förstå det leder till den felaktiga vården att tvinga. De dagar hon nekar, lämna en utväg: bara tvätta kroppen, bara ett fotbad, eller en annan dag.' },
            { fig: null, t: 'På vintern, värm först omklädningsrummet och badrummet. En plötslig temperaturskillnad svänger blodtrycket kraftigt och orsakar en kollaps (temperaturchock).' },
            { fig: null, t: 'Riktmärke: vatten inte hetare än 41°C (106°F), och bada upp till 10 minuter. Långa bad i hett vatten är farligast.', m: 'Den drabbade sidan känner värme dåligt och är där brännskador förblir obemärkta. Häll duschen eller vattnet bit för bit, med start på den icke-drabbade sidan.' },
            { fig: null, t: 'Undvik bad på tom mage, strax efter en måltid eller efter alkohol.' },
            { fig: null, t: 'Ögonblicket att kliva över badkarskanten är det mest sannolika fallet. Använd ledstänger, ett badkarssteg och en halkmatta.', c: 'Hjälpmedel som ledstänger och duschstolar kan ibland lånas eller fås billigt via en vårdrådgivning. Fråga en yrkesperson.' },
            { fig: null, t: 'Under badet, släpp henne inte med blicken. När kroppen värms i vattnet ändras cirkulation och blodtryck, medvetandet kan grumlas, och hon kan till och med förlora medvetandet som i sömnen. Drunkning i badkaret sker så, i tysthet.', c: 'Om möjligt, stanna tillsammans i badrummet eller omklädningsrummet. Småprata trevligt medan hon värms upp långsamt. Det är det mest lugnande för er båda.' }
          ],
          points: [
            'När badet hemma blir svårt låter många familjer en dagverksamhet sköta bara badet. Det är inte att slarva; det är ett gott val för säkerheten.'
          ]
        }
      ]
    },

    {
      id: 'hokou', emoji: '🚶', title: 'Följa gången och förebygga fall',
      sub: 'Att göra hemmet fallsäkert är halva arbetet',
      procs: [
        {
          id: 'hok1', title: 'Hur du följer gången',
          steps: [
            { fig: 'walk_position', t: 'Den som följer står något bakom och vid sidan om personens svaga sida (sidan med förlamning). Läget för att stödja henne genast om hon vacklar.' },
            { fig: null, t: 'Att veta varför man faller ändrar sättet att stödja. De flesta fall börjar med ”foten lyfts mindre än väntat och man snubblar” eller ”sulan landar inte platt och foten vrickas”. Sedan sker fallet för att ett återhämtningssteg inte kommer i tid.', c: 'Med andra ord: kan du bara stödja det vacklande ögonblicket undviker du det värsta fallet. Att vara redo att ”stödja det steget när som helst” är vårdarens främsta uppgift.' },
            { fig: null, t: 'Snarare än att hålla handen låter lätt stöd under armhålan eller vid höften dig fånga henne om hon sjunker ihop. Låt personen hålla en ledstång eller käpp.', m: 'För den som använder en benortos (ett hjälpmedel för gången), sätt inte på den på ditt eget sätt; följ exakt vad en rehabiliteringsyrkesperson visat. Håll käppen i handen på den icke-drabbade sidan.' },
            { fig: null, t: 'Skynda inte på henne. Den enda meningen ”långsamt är bra” är den bästa fallförebyggningen.' }
          ]
        },
        {
          id: 'hok2', title: 'Förebygg fall inomhus',
          steps: [
            { fig: null, t: 'Minska farorna på golvet. Sladdar, uppkrupna mattor, kringliggande tidningar eller påsar, små trösklar. De flesta fall sker på sådana platser i hemmet.' },
            { fig: null, t: 'Sätt ett ljus i golvhöjd på vägen till toaletten nattetid. En liten rörelsesensorlampa är praktisk.' },
            { fig: null, t: 'Tofflor glider lätt av eftersom hälen inte hålls, så innetofflor som täcker hälen är säkrare.' },
            { fig: null, t: 'En ledstång eller stadig möbel att hålla i på ofta passerade platser ger trygghet. Håll också uppsikt på vanan att gripa tag i vinglande möbler.' }
          ],
          points: [
            'För montering av ledstänger och att ta bort trösklar går ibland offentliga bidrag att använda. Fråga en lokal vårdrådgivning.'
          ]
        },
        {
          id: 'hok3', title: 'Bygg en fallsäker kropp: övningar sittande',
          steps: [
            { fig: null, t: 'Fallförebyggning är inte bara gångträning. Små övningar sittande, uppbyggda, låter ”kraften att lyfta foten” och ”kraften att landa platt” växa. Tvinga inte; även framför tv:n är bra.' },
            { fig: null, t: 'Lårlyft. Sittande på en stol, lyft ett lår långsamt och sänk det. Omväxlande. Det håller kraften att lyfta foten och minskar snubblingar.' },
            { fig: null, t: 'Fotledsrullning. Lyft foten lite och rulla foten långsamt, åt båda håll. En smidig fotled tål vacklandet vid landningen.' },
            { fig: null, t: 'Tå- och hällyft. Sittande, håll hälen mot golvet och lyft tårna. Håll sedan tårna och lyft hälen. Kraften att landa sulan platt bärs av dessa muskler i smalben och vad.' },
            { fig: null, t: 'Antalet upprepningar räcker till ”så många som slutar behagligt”. Lite varje dag verkar bättre än mycket då och då. De dagar hon nekar är en vilodag bra.' }
          ],
          points: [
            'Denna övning kräver varken utrustning eller pengar. Det är den billigaste försäkringen för att ”fortsätta gå säkert och med glädje”.'
          ]
        }
      ]
    },

    {
      id: 'futon', emoji: '🛌', title: 'Vård på madrass på golvet',
      sub: 'Tips för vård från golvet och alternativet säng',
      procs: [
        {
          id: 'futon1', title: 'När du vårdar på en madrass på golvet',
          steps: [
            { fig: null, t: 'Först den viktiga slutsatsen. Om vården sannolikt fortsätter rekommenderar vi starkt att hyra eller ställa in en elektrisk vårdsäng. Om du kan vårda i höfthöjd ändrar allt, både belastningen på din rygg och personens säkerhet.', c: 'På många platser kan sådan utrustning hyras för en liten månadsavgift via en vårdförsäkring eller stödprogram. Fråga en lokal vårdrådgivning.' },
            { fig: null, t: 'Med det sagt, för alla som även i natt vårdar på en madrass på golvet, här tips för golvet. Vård på golvet är inte ”omöjlig”; bara sättet att använda kroppen skiljer sig lite från en säng.' },
            { fig: 'kneel_assist', t: 'När du hjälper från golvet, stå inte och böj dig i ryggen. Ett knä på golvet, det andra uppdraget: ”halvknästående” är grundhållningen. Sänk din egen kropp och kom nära personen.', c: 'Halvknästående vacklar mindre fram och tillbaka än båda knäna på golvet och låter dig sätta mer kraft.' },
            { fig: null, t: 'Att vända till sidan och byta blöja görs som i sängen (dra upp knäna, tippa mot dig). Bara din hållning skiljer sig. I halvknästående, dra med hela kroppen, inte med armkraft.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Att resa sig från golvet går i ordningen: på rygg, på sida, på alla fyra, halvknästående, sedan stående. Snarare än att resa henne rakt upp är det mycket lättare för er båda att låta personen röra sig ”via alla fyra”.', c: 'För stöd vid uppresning kan en stadig låg möbel (en gedigen stol till exempel) tjäna som ledstång.' },
            { fig: null, t: 'Svagheten med en madrass på golvet är att en tryckfördelande vårdmadrass är svår att använda. För den som är benägen för trycksår, håll medvetet vändintervallet kortare. En tunn, hård madrass kräver särskild uppmärksamhet.', link: { cat: 'taii', proc: 'taii2' } },
            { fig: null, t: 'Och en gång till. Att vika madrassen varje dag och vårda från golvet sliter på din rygg, det är säkert. Medan du ännu tänker ”det går bra”, börja ta reda på om en säng. Din rygg är vårdens viktigaste verktyg.' }
          ],
          points: [
            'Madrass på golvet eller säng är inte bättre eller sämre utan ett livsval. Men det gör en tydlig skillnad för slitaget på vårdarens kropp.',
            'Vid bytet till en säng, ta även hänsyn till personens känslor. Att be ”låna den till mig för min rygg” i stället för ”för din skull” accepteras ofta lättare.'
          ]
        }
      ]
    },

    {
      id: 'kobetsu', emoji: '🩺', title: 'Vid sjukdom eller funktionsnedsättning',
      sub: 'När du inte får använda dessa grunder rakt av',
      procs: [
        {
          id: 'kobetsu1', title: 'När du behöver ”personlig handledning”',
          steps: [
            { fig: null, t: 'Förfarandena i den här appen är de ”allmänna” grunderna för vård av en vuxen kropp. Men beroende på sjukdom eller funktionsnedsättning kan samma metod orsaka skada. Från följande sidor, kontrollera om något stämmer. Om det stämmer, håll den här appen bara som riktlinje och låt dig ovillkorligen visas det sätt som passar personen.' },
            { fig: 'no_pull', t: 'Personer med sköra ben. Svår benskörhet, lång sängvila, benskörhetssjukdom, osv. De kan bryta ben även med lite kraft, så vård som lyfter och drar måste ske under personlig handledning.', c: 'Ge aldrig vård som drar i en arm eller ett ben, med någon. Det är särskilt farligt med sköra ben.' },
            { fig: null, t: 'Personer med stela, svårrörliga leder (kontrakturer). Att tvinga dem att sträckas skadar led och hud. Det ”smärtfria rörelseområdet” skiljer sig mellan personer, så säkrast är att låta dig handledas i person av en yrkesperson.' },
            { fig: null, t: 'Personer med en fortskridande sjukdom. Muskeldystrofi, ALS, osv. Kroppen ändras oupphörligt, så att gårdagens rätta svar blir dagens fara. Se över metoden regelbundet med en yrkesperson. Det finns även sjukdomar där att överbelasta musklerna i sig skadar kroppen.' },
            { fig: null, t: 'Personer med svår fysisk och intellektuell funktionsnedsättning. Kroppsdeformation, höfter som lätt ur led, svag andning; varje kropp är helt olik. Ett område där även yrkespersoner behöver anpassad övning för var och en. Egenpåhittade metoder är förbjudna.' },
            { fig: null, t: 'Personer som använder medicinsk utrustning som respirator, trakeostomi, näring via näsa eller mage, eller syrgas i hemmet. Det finns medicinska regler för hållning och rörelse. Läkarens och sjuksköterskans anvisningar går före allt.' },
            { fig: null, t: 'Personer som en läkare sagt ska begränsa rörelse. Hjärtsjukdom, efter en fraktur, under dialys, osv. Kontrollera detaljerna i begränsningarna innan du bestämmer vården.' },
            { fig: null, t: 'Personlig handledning kan du begära av läkaren, en sjuksköterska på hembesök, specialisterna i rehabilitering i hemmet (fysioterapeuter och arbetsterapeuter) eller, för en person med funktionsnedsättning, en stödsamordnare. Säg ”visa mig hur jag gör hemma”, så visas du det sätt som passar personen, i det verkliga rummet och den verkliga sängen.' }
          ],
          points: [
            'Att begära personlig handledning är inte överdrivet. Att lära familjer hur man gör hemma är en viktig del av en yrkespersons arbete.',
            '”I den här personens fall, vad ska jag se upp med?” Den frågan är den bästa frågan.'
          ]
        }
      ]
    }
  ],

  danger: [
    {
      id: 'chissoku', emoji: '🆘', title: 'Kvävning (blockerad luftväg)', sub: 'När hon inte kan få fram ett ljud räknas varje sekund',
      fig: 'choking_back', cpr: true,
      when: [
        'Plötslig nöd under en måltid, oförmögen att få fram ett ljud eller hosta',
        'Griper om halsen med båda händerna (tecknet på kvävning)',
        'Färgen försämras snabbt'
      ],
      act: [
        'Kan hon få fram ett ljud eller hosta, låt henne först hosta hårt. En hosta är den starkaste kraften att stöta ut',
        'Kan hon inte hosta, luta henne framåt och slå bestämt 4 till 5 gånger mellan skulderbladen med handloven (ryggslag)',
        'Kommer det inte ut, omslut henne bakifrån, knyt en näve strax ovanför naveln och stöt snabbt inåt och uppåt (buktryck). Väx­la med ryggslag',
        'Gör inte buktryck på en gravid eller ett spädbarn (bara ryggslag)',
        'Efter buktryck, sök alltid vård efteråt. De inre organen måste kontrolleras'
      ],
      call: [
        'Blockeringen kommer inte ut',
        'Hon blir slapp eller slutar svara. Ring nödnumret genast. Sätt telefonen på högtalare så vägleder man dig'
      ]
    },
    {
      id: 'goen', emoji: '😮‍💨', title: 'Mer felsväljning, kanske lunginflammation', sub: 'Lunginflammation hos äldre börjar i tysthet',
      when: [
        'Felsväljningen vid måltider har ökat jämfört med förr',
        'Mer slem efter maten. En rosslande röst',
        'På något sätt lite energi. Aptiten har sjunkit. Lätt feber håller i sig'
      ],
      act: [
        'Lunginflammation hos äldre visar ofta varken tydlig hosta eller hög feber. ”På något sätt annorlunda än vanligt” kan vara det enda tecknet',
        { t: 'Se över ätställningen och hakans läge', link: { cat: 'shokuji', proc: 'shoku1' } },
        'Anteckna förändringarna. Att bara säga ”felsväljningen har ökat” är viktig information för läkaren'
      ],
      see: [
        'När ökad felsväljning eller lätt feber håller i sig. Prata tidigt med din husläkare'
      ],
      call: [
        'Andningen ser svår ut. Andas med axlarna',
        'Läppar eller ansikte har dålig färg. Hon är slapp'
      ]
    },
    {
      id: 'tentou', emoji: '🩹', title: 'Ett fall, eller att falla ur sängen', sub: 'Res henne inte hastigt upp',
      when: [
        'När du upptäcker att hon fallit (även medan du var borta)'
      ],
      act: [
        'Res henne inte hastigt upp. Kontrollera först om hon är vid medvetande, om det finns svår smärta och om lemmarna ser missformade ut',
        'Kan inte röra sig av svår smärta, ett ben har konstig form eller vinkel. Då kan det finnas en fraktur, ring ambulans utan att flytta henne',
        'Finns ingen större avvikelse, res henne långsamt upp och håll uppsikt under dagen',
        'Har hon slagit i huvudet, håll uppsikt i 24 till 48 timmar även om hon verkar bra i stunden. Den som tar blodförtunnande läkemedel kräver särskild uppmärksamhet'
      ],
      call: [
        'Inget medvetande. Förvirrad och svarar konstigt',
        'Efter ett slag mot huvudet: kräkning, ett krampanfall eller sluddrigt tal',
        'Kan inte röra sig av svår smärta. Ett ben är tydligt missformat'
      ]
    },
    {
      id: 'dassui', emoji: '🌡️', title: 'Feber, eller kan inte dricka', sub: 'Äldre märker törst dåligt',
      when: [
        'En torr mun. Spruckna läppar',
        'Kissar mer sällan. Mörkare färg',
        'Slapp. Sömnig och trög att svara'
      ],
      act: [
        'Äldre känner törst dåligt och blir uttorkade utan att märka det. Det sker inte bara på sommaren utan även på vintern och vid feber',
        'Kan hon dricka, ge vätska lite i taget, ofta. En vätskeersättning med salt och socker passar',
        'Kontrollera även rumstemperaturen. Är hon för varmt klädd i ett varmt rum?'
      ],
      see: [
        'Febern håller i sig. Hon kan bara få i sig lite vätska. Se tidigt din husläkare'
      ],
      call: [
        'Hon tar ingen vätska alls. Hon kräks strax efter att ha druckit',
        'Slapp och svarar konstigt. Ett krampanfall'
      ]
    },
    {
      id: 'jokusou', emoji: '🔴', title: 'Rött säte eller hälar (trycksår)', sub: 'Tecknet är ”rodnad som inte försvinner vid tryck”',
      when: [
        'Rodnad där ben sticker ut (mitten av sätet, hälar, axlar, bakhuvud)',
        'Rodnad som inte blir vit vid lätt fingertryck',
        'En blåsa, fjällande hud eller en mörk missfärgning'
      ],
      act: [
        { t: 'Rodnad som inte blir vit vid tryck är början på ett trycksår. Lägg henne så att ingen tyngd vilar på den punkten', link: { cat: 'taii', proc: 'taii1' } },
        'Massera, gnid eller torka det inte med hårtork. Det skadar hudens insida och gör det värre',
        'Finns ett sår är det gamla ”torka för att läka” inte dagens standard. Dagens sårvård bygger på ”hålla måttligt fuktigt”. Torka det inte ut på egen hand',
        'Men om det varas eller det finns oro för infektion kan fuktighållande slå fel. Bekräfta alltid själva metoden med en sjuksköterska eller läkare',
        'Att gå ner i vikt eller äta mindre är ett stort varningstecken för trycksår. Att bygga upp näringen igen är också en del av behandlingen',
        'Vid rodnad inne i blöjan spelar det roll att skilja trycksår från blöjeksem. Fortsätt inte smörja salva på egen hand'
      ],
      see: [
        'Det finns en blåsa, fjällande hud eller mörk missfärgning (ett framskridet trycksår). Visa det för en sjuksköterska eller läkare',
        'När rodnaden inte försvinner efter några dagar'
      ]
    },
    {
      id: 'fast', emoji: '⚡', title: 'Tecken på stroke (FAST)', sub: 'Vänta inte och se. Det är en kapplöpning mot klockan',
      fig: 'fast_signs',
      when: [
        'Face (ansikte). Ber du henne le lyfts inte den ena mungipan',
        'Arm. Lyfts båda armarna framåt sjunker den ena',
        'Speech (tal). Sluddrigt tal. Orden kommer inte',
        'Stämmer ens ett, är det en kapplöpning mot Time (tiden)'
      ],
      act: [
        'Anteckna starttiden (senaste gången hon var bra). Viktig information för valet av behandling',
        'Lägg henne i en bekväm ställning och vänd ansiktet åt sidan om hon kan kräkas',
        'Lägg inte mat, dryck eller läkemedel i munnen'
      ],
      call: [
        'Så snart du märker tecknen, vänta inte; ring nödnumret genast. Stroke är en sjukdom där ”ju tidigare man når sjukhuset, desto lindrigare följdverkningar”'
      ]
    },
    {
      id: 'ishiki', emoji: '🚨', title: 'Inget svar vid tilltal', sub: 'Vid tvekan, ring; det är rätt svar',
      cpr: true,
      when: [
        'Inget svar ens vid tilltal eller en lätt knackning på axeln'
      ],
      act: [
        'Ring nödnumret genast. Sätt på högtalare och handla medan du följer anvisningarna',
        'Kontrollera om det finns en normal andning (se bröst och mage röra sig i cirka 10 sekunder)',
        'Finns andning, vänd kroppen till sidan och lyft hakan lite (så att kräk inte täpper till halsen)',
        'Finns ingen normal andning, följ anvisningarna i telefon och börja med bröstkompressioner (hjärt-lungräddning)'
      ],
      call: [
        'För denna punkt är ”ring vid tvekan” rätt svar. Var det till slut inte så allvarligt, är det det bästa resultatet'
      ]
    }
  ],

  cpr: {
    open: '❤️ Hur du gör bröstkompressioner och rytmen',
    title: 'Bröstkompressioner (hjärt-lungräddning)',
    intro: 'Detta är för en person som inte svarar och inte andas normalt. Vid tvekan: börja.',
    firstTitle: 'Allra först',
    first: 'Ring det lokala nödnumret och sätt på högtalare. Larmoperatören säger vad du ska göra i telefon. De anvisningarna går före. Använd den här sidan som stöd.',
    stepsTitle: 'Så gör du',
    steps: [
      'Lägg henne på rygg på ett hårt golv. På en mjuk säng flyr tryckkraften',
      'Lägg handloven av en hand på mitten av bröstet och den andra handen ovanpå',
      'Sträck armbågarna och tryck rakt ner med kroppstyngden, hårt nog att sänka bröstet ungefär 5 cm (2 tum)',
      'Vid varje tryck, släpp tills bröstet återgår till sin ursprungliga höjd. Håll händerna på bröstet',
      'I ett tempo av 100 till 120 per minut, fortsätt med så få pauser som möjligt tills ambulansen kommer',
      'Inblåsningar är inte nödvändiga. Att fortsätta trycka är det viktigaste',
      'Vid trötthet, byt av utan att tveka. Kommer en hjärtstartare (AED), sätt på den och följ rösten'
    ],
    metroStart: 'Spela rytmen (110 per minut)',
    metroStop: 'Stoppa rytmen',
    metroHint: 'Tryck en gång vid varje slag. En högre ton ljuder var 30:e slag',
    note: 'Kraften kan bryta ett revben, men livet går först. På många platser är hjälp given i god tro och utan grov oaktsamhet skyddad från ansvar (skydd för den barmhärtige samariten). Tveka inte, tack.'
  },

  self: [
    {
      id: 'koshicare', emoji: '💪', title: 'Före och efter en ryggskada', sub: 'Din kropp är vårdens viktigaste verktyg',
      secs: [
        { h: 'Vård är ”arbete för ryggen”', body: [
          'Även bland vårdpersonal är ryggsmärta den vanligaste arbetssjukdomen. Skadar en otränad anhörig sin rygg är det inte för att du är svag. Det är helt naturligt.',
          'Just därför, gör sidan ”Skydda ryggen” i fliken Tekniker till en vana, varje gång.'
        ], ref: { cat: 'koshi', proc: 'koshi1' }},
        { h: 'Skydda med miljö och hjälpmedel', body: [
          'Med en höjdjusterbar säng höjer du den vid vård till ungefär din egen höfthöjd. Vård i lågt läge är en stor orsak till ryggsmärta.',
          'Det finns hjälpmedel som flyttar kraften till utrustning, som glidlakan och stödhandtag. De går ofta att låna via en vårdrådgivning, så fråga.'
        ]},
        { h: 'Om du ändå skadar dig', body: [
          'Fortsätt inte medan du uthärdar smärtan. Blir den värre kan du inte längre fortsätta själva vården.',
          'Svår smärta, eller smärta med domning i benet, bör ses tidigt.'
        ]}
      ]
    },
    {
      id: 'kakae', emoji: '🌧️', title: 'Bär det inte ensam', sub: 'Att vila är inte att fly, det är en färdighet',
      secs: [
        { h: 'Detta är tecken på din gräns', body: [
          'Kan inte sova på natten. Ingen aptit. Ilska som flammar upp för inget. Tårar som kommer. Du fräste åt personen. Du önskade att du kunde försvinna.',
          'Stämmer ens ett, är det inte att ”du är svag” utan en signal från din kropp att ”du behöver vila”.'
        ]},
        { h: 'Att vila är inte att fly, det är en färdighet', body: [
          'För att orka vidare med vården behöver du tid borta från den. Att bli avlöst för att vila kallas ”avlösning”, och det är ordnat som en självklarhet världen över.',
          'Omsorg i några timmar, omsorg över natten, hjälp som kommer hem till dig. Vilka alternativ din trakt har kan en vårdrådgivning berätta.'
        ]},
        { h: 'Det är okej att säga det högt', body: [
          'Att säga ”vården är tung” betyder inte att du kommit att inte tycka om personen.',
          'En plats att prata med familjer i samma situation (anhöriggrupper och träffar) kan vara en förvånande lättnad, bara av att bli förstådd.'
        ]}
      ]
    },
    {
      id: 'makaseru', emoji: '🤝', title: 'Överlåt åt yrkespersoner det du inte kan', sub: 'Det är inte att fly, det är en utformning som skyddar er båda',
      secs: [
        { h: 'Du får lämna över innan en skada sker', body: [
          'Ju mer en familj vårdar av god vilja, desto djupare klandrar den sig efter en olycka. Ångern ”om jag bara inte hade forcerat” väger tungt nog att krossa hjärtat.',
          'Därför säger den här appen det om och om igen. Överlåt det som är svårt, det du är osäker på, åt yrkespersoner innan en olycka sker. Det är inget nederlag, det är det klokaste beslutet som skyddar dig och personen.'
        ]},
        { h: 'Familjevård är inte alltid bäst', body: [
          'Du behöver inte tro ”familjevård är bäst”. Till exempel känner sig många mer bekväma vid toaletten eller badet med någon annan (en yrkesperson) än med familjen.',
          'Även för personens värdighet finns det förvisso situationer där en yrkespersons hand är bättre.'
        ]},
        { h: 'Ju mer du lämnar över, desto mer blir du familj igen', body: [
          'Bär du all vård blir du helt ”vårdaren”, och din tid som dotter, son, hustru eller man försvinner.',
          'För varje timme du överlåter åt en yrkesperson kan du bli ”familj” igen. Tiden att dricka te och skratta tillsammans är kanske mer dyrbar än någon vårdteknik.'
        ]}
      ]
    },

    {
      id: 'soudan', emoji: '🗺️', title: 'Veta vart du kan vända dig', sub: 'Innan du är i knipa, lär dig bara platserna',
      secs: [
        { h: 'Innan du sitter riktigt fast', body: [
          'Knepet är att lära sig vart man kan vända sig medan man ännu är i form, i stället för att söka först när man sitter riktigt fast.'
        ]},
        { h: 'Här är platser att vända dig till', body: [
          'En lokal informationstjänst för äldre (på många orter finns ett kontor eller center där man, ofta gratis, kan rådgöra om vård).',
          'En vårdsamordnare (din rådgivare om du använder en vårdtjänst).',
          'Din husläkare, en sjuksköterska på hembesök (kroppen och det medicinska). En tandläkare på hembesök, en apotekare (munnen och läkemedlen).',
          'För vård av en anhörig med funktionsnedsättning kan en stödsamordnare vara din rådgivare.',
          'En anhörig- eller familjegrupp i samma situation (hjärtats angelägenheter).'
        ]},
        { h: 'Ett knep för att rådgöra väl', body: [
          'Det är okej att stanna i tillståndet ”jag vet inte ens vad som bekymrar mig”. ”Jag kämpar, men jag vet inte var jag ska börja” är en bra första mening för att rådgöra.'
        ]},
        { h: 'Rådgivningstjänsten ”Soyogi” som gjorde appen', body: [
          'Soyogi, en rådgivningstjänst för vård och stöd. Det är den privata, ideella tjänst som skapar den här appen.',
          'När det är svårt att gå till offentliga kontor, eller du bara har tid på kvällen, kan du rådgöra anonymt online (i ett metaversum). Denna rådgivning är en japanskspråkig tjänst (1000 yen per 30 minuter; att boka går smidigare).'
        ], link: { href: 'https://soyogi.hp.peraichi.com/top', label: '🍃 Se Soyogis webbplats' }}
      ]
    },
    {
      id: 'kanpeki', emoji: '🍵', title: 'Sträva inte efter perfektion', sub: 'Att hålla ut på 60 poäng är bättre än att rasa på 100',
      secs: [
        { h: 'Att hålla ut på 60 poäng är starkare', body: [
          'Snarare än att ge perfekt vård varje dag och rasa, är att hålla ut länge och skära vissa hörn också lyckligare för personen.',
          'Färdiglagad mat, engångsartiklar, den enstaka pausen. Allt är ”färdigheter för att hålla ut”.'
        ]},
        { h: 'Jämför inte', body: [
          'Du behöver inte jämföra med ett annat hems vård, eller den beundransvärda vården på tv eller sociala medier. Det rätta svaret för ditt hem finns bara i ditt hem.'
        ]},
        { h: '”I dag klarade jag det” räcker', body: [
          '”På ett eller annat sätt klarade jag ännu en dag.” Det är verkligen något stort.'
        ]}
      ]
    },
    {
      id: 'kenkou', emoji: '🩺', title: 'Håll koll på din egen hälsa också', sub: 'För att ni inte ska falla båda tillsammans',
      secs: [
        { h: 'Om vårdaren rasar faller ni båda', body: [
          'Skjut inte upp din egen sömn, dina måltider och uppföljningen av dina kroniska sjukdomar. Din kropp är vårdens viktigaste verktyg.',
          'Hoppa inte över dina egna hälsokontroller ”på grund av vården”; gå dit.'
        ]},
        { h: 'En liten månadskontroll', body: [
          'Har du sovit ordentligt på sistone? Hoppar du över måltider? Uthärdar du kroppslig smärta? En gång i månaden räcker; fråga dig själv.'
        ]}
      ]
    }
  ]
};
