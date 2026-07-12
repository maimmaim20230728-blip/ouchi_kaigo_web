'use strict';
/* Pflege-Ratgeber (Soyogi) - Deutscher Inhalt.
   Struktur identisch zu guide.ja.js. Notruf: 112 (DACH).
   Japan-Spezifisches angepasst; Temperaturen in C (F in Klammern). */
window.OUCHI_CONTENT = window.OUCHI_CONTENT || {};
window.OUCHI_CONTENT.de = {

  tech: [
    {
      id: 'koshi', emoji: '🧍', title: 'Den Rücken schützen',
      sub: 'Die Grundlagen einer rückenschonenden Pflege ohne Heben',
      procs: [
        {
          id: 'koshi1', title: 'Nicht heben, nicht überlasten: 9 Grundlagen',
          steps: [
            { fig: 'bm_stance', t: 'Stellen Sie die Füße breiter als die Schultern, beugen Sie die Knie und senken Sie das Becken. Schaffen Sie erst eine stabile Basis, bevor Sie beginnen. Diese Art, den Körper einzusetzen, heißt „Körpermechanik" und ist das Erste, was Pflegekräfte lernen.', c: 'Gerade stehen und sich nur im Rücken beugen ist die Haltung, die dem Rücken am meisten schadet.' },
            { fig: 'bm_close', t: 'Gehen Sie so nah wie möglich an die Person heran. Treten Sie mit den Füßen heran und halten Sie Ihren Körper nah an ihrem. Je weiter weg, desto stärker vervielfacht sich die Last auf Ihren Rücken.' },
            { fig: 'no_twist', t: 'Verdrehen Sie den Körper nicht. Zum Richtungswechsel drehen Sie nicht in der Taille; setzen Sie die Füße um und drehen Sie den ganzen Körper.' },
            { fig: null, t: 'Bewegen Sie die Person nicht nur mit den Armen. Nutzen Sie die großen Muskeln von Oberschenkeln und Gesäß. Stellen Sie sich vor, sich durch Beugen und Strecken der Knie zu bewegen.' },
            { fig: 'slide_move', t: 'Nicht heben, sondern schieben. Waagerechtes Bewegen kostet viel weniger Kraft. Ein Gleittuch aus dem Handel oder auch eine große Plastiktüte hilft.', c: 'Ein Tipp zum Schutz Ihrer Hände: Wenn Sie eine Hand unter den Körper schieben, gehen Sie erst mit der Handfläche nach unten hinein und drehen Sie sie erst, wenn sie tief genug ist, nach oben, um die Person zu sich zu ziehen. Gehen Sie von Anfang an mit der Handfläche nach oben, kann ein Nagel am Laken oder der Unterlage hängen bleiben und verletzt werden. Nützlich bei jeder Aufgabe, bei der man eine Hand in einen engen Spalt schiebt, etwa beim Bettenmachen.' },
            { fig: 'roll_prep', t: 'Machen Sie die Person kompakt. Legen Sie die Arme über die Brust und stellen Sie die Knie auf, dann können Sie sie mit wenig Kraft bewegen.' },
            { fig: 'lever_examples', t: 'Nutzen Sie das Hebelprinzip. Schaffen Sie einen Stützpunkt (mit Dreieck markiert), etwa einen Ellbogen oder eine Hüfte, bevor Sie bewegen. Zum Aufsetzen ist der Ellbogen der Drehpunkt. An der Bettkante ist die Hüfte der Drehpunkt, und das Gewicht der Beine hebt den Oberkörper.' },
            { fig: 'roll_legs_first', t: 'Machen Sie die Schwerkraft zum Verbündeten. Nutzen Sie das Gewicht eines Körperteils als Antrieb. Beim Drehen zur Seite etwa lassen Sie zuerst die aufgestellten Knie fallen (1), und der Körper folgt mit wenig Kraft, gezogen vom Gewicht der Beine (2).' },
            { fig: null, t: 'Lassen Sie die Person tun, was sie kann. Die verbliebene Kraft zu nutzen hält ihren Körper auch stärker.', c: 'Das Motto: „Lassen Sie die Person die Haltegriffe benutzen." Bettgitter, Armlehnen, Handläufe. Ihre Arbeit wird leichter und ihre Kraft bleibt erhalten: zwei Fliegen mit einer Klappe.' }
          ],
          points: [
            'Ein wenig Überlastung „jedes einzelne Mal" ruiniert Ihren Rücken. Machen Sie es sich zur Gewohnheit, jedes Mal Ihre Haltung zu prüfen.',
            'Fühlt es sich allein unmöglich an, tun Sie es zu zweit oder verlassen Sie sich auf Hilfsmittel oder eine Fachkraft. Das ist keine Niederlage, sondern die richtige Entscheidung.'
          ]
        }
      ]
    },

    {
      id: 'seiketsu', emoji: '🧼', title: 'Grundlagen der Hygiene',
      sub: 'Nägel, Händewaschen, Maske. Schlicht, aber der stärkste Schutz',
      procs: [
        {
          id: 'seiketsu1', title: 'Nägel, Händewaschen, Maske: beide schützen',
          steps: [
            { fig: null, t: 'Dies ist die Grundlage aller Pflege. Nicht spektakulär, aber eine erstklassige Technik, die sowohl Sie als auch die Person vor Verletzung und Infektion schützt.' },
            { fig: null, t: 'Halten Sie Ihre eigenen Nägel kurz und die Ecken rund. Lange Nägel kratzen bei der Pflege die Haut der Person und bleiben an Laken oder Kleidung hängen und verletzen Sie.', c: 'Die Haut älterer oder geschwächter Menschen ist dünn, und schon ein kleiner Kratzer kann zu einer Infektion führen.' },
            { fig: null, t: 'Der Raum unter den Nägeln sammelt Schmutz und Ausscheidungen. Bleiben sie lang, werden sie bei jeder Mahlzeit, jedem Windelwechsel und jeder Wundversorgung zum Nährboden für Infektionen. Kurze Nägel sind selbst Infektionsschutz.' },
            { fig: null, t: 'Waschen Sie die Hände vor und nach der Pflege mit Seife. Zwischen den Fingern, um die Nägel, bis zu den Handgelenken. Besonders „nach dem Windelwechsel" und „vor dem Berühren von Essen", jedes Mal.', c: 'Wenn Sie kein Waschbecken erreichen, ist Händedesinfektionsmittel praktisch. Sichtbarer Schmutz muss aber mit Wasser abgewaschen werden; Desinfektionsmittel entfernt ihn nicht.' },
            { fig: null, t: 'Für Windelwechsel und das Berühren von Wunden tragen Sie Einweghandschuhe. Zum Ausziehen rollen Sie die schmutzige Seite nach innen, werfen sie weg und waschen sich danach ebenfalls die Hände.' },
            { fig: null, t: 'Eine Maske ist kein Werkzeug nur für Krankheitstage, sondern Grundausstattung während der Pflege. Jeder trägt Keime und Viren, ganz ohne Symptome. Was Ihnen als Gesundem nichts ausmacht, kann für einen geschwächten Menschen lebensbedrohlich sein.', c: 'Tragen Sie eine besonders bei Pflege mit Gesichtsnähe (Essen, Mundpflege, Windelwechsel, Wundversorgung). „Nur wenn Sie sich unwohl fühlen" ist kein ausreichender Schutz.' },
            { fig: null, t: 'Halten Sie auch die Nägel der Person kurz. Das verhindert, dass sie sich selbst kratzt, und dass sich einer von Ihnen bei der Pflege verletzt.', c: 'Schneiden Sie eingewachsene, verformte, dicke harte Nägel (Nagelpilz) oder die Nägel eines Menschen mit Diabetes nicht zu Hause. Gewöhnliche Knipser schaffen das oft nicht; es braucht Spezialwerkzeug und Können und man verletzt sich leicht. Überlassen Sie das einer Ärztin oder einer Pflegekraft auf ärztliche Anweisung.' },
            { fig: null, t: '„Nägel schneiden. Hände waschen. Maske tragen." Es kostet fast nichts, jeder kann heute damit beginnen, und die Wirkung ist enorm. Machen Sie es zur Gewohnheit.' }
          ],
          points: [
            'Wenn Ihre Gesundheit zusammenbricht, hört die Pflege auf. Ihren eigenen Körper zu schützen ist dasselbe wie die gepflegte Person zu schützen.'
          ]
        }
      ]
    },

    {
      id: 'taii', emoji: '🛏️', title: 'Zur Seite drehen (Umlagern)',
      sub: 'Wie man die Lage wechselt, um Druckgeschwüre zu verhindern',
      procs: [
        {
          id: 'taii1', title: 'Von der Rückenlage in die Seitenlage',
          steps: [
            { fig: null, t: 'Sagen Sie stets laut: „Ich werde Sie jetzt umlagern." Plötzlich berührt zu werden erschreckt die Person und verspannt den Körper, was es für Sie beide schwer macht.', c: 'Bei brüchigen Knochen, steifen Gelenken oder einer fortschreitenden Krankheit verwenden Sie diese Anleitung nicht unverändert. Einzelheiten auf der Seite unten.', link: { cat: 'kobetsu', proc: 'kobetsu1' } },
            { fig: 'roll_prep', t: 'Legen Sie die Arme über die Brust und stellen Sie beide Knie auf. Ist der Körper kompakt, können Sie ihn mit wenig Kraft drehen.', m: 'Wenn eine Lähmung das Verschränken der Arme unmöglich macht, genügt es, die betroffene Hand auf den Bauch zu legen. Zwingen Sie einen steifen (kontrakten) Arm nicht ins Verschränken.' },
            { fig: 'shift_parts', t: 'Lassen Sie das Gesicht in die Richtung drehen, in die gedreht wird. Verschieben Sie den Körper vorab zur fernen Bettkante, damit er nach dem Drehen in der Mitte liegt.', c: 'Verschieben Sie den Körper stückweise in der Reihenfolge: Kopf, dann Schultern und Rücken, dann Hüfte, dann Beine. Der Trick ist, nicht alles auf einmal zu bewegen.' },
            { fig: 'roll_pull', t: 'Legen Sie die Hände an Knie und Schulter (oder Hüfte) und kippen Sie sanft zu sich hin. Zu sich ziehen ist sicherer und braucht weniger Kraft als wegzudrücken.', c: 'Wenn Sie zu einer Seite ohne Gitter drehen, achten Sie sehr auf Stürze.', m: 'Legen Sie vor dem Drehen den gelähmten Arm auf den Bauch, damit er nicht unter dem Körper eingeklemmt wird. Auf der gelähmten Seite zu liegen bemerkt die Person bei Schmerz oder Druck schlecht, halten Sie es daher so kurz wie möglich.' },
            { fig: 'roll_legs_first', t: 'Fehlt Ihnen die Kraft, sie auf einmal zu drehen, lassen Sie erst nur die aufgestellten Knie zu sich fallen (1). Das Gewicht der Beine dreht sich zuerst, und Hüfte und Rumpf folgen mit wenig Kraft, gezogen von diesem Gewicht (2).', c: 'Der Trick ist, das Gewicht der Person und die Schwerkraft zu Verbündeten zu machen. Da es nicht auf Armkraft angewiesen ist, hilft es besonders, wenn eine Frau oder ein älterer Mensch pflegt.' },
            { fig: null, t: 'Kann die Person sich auch nur ein wenig bewegen, lassen Sie sie das Bettgitter auf der Zielseite greifen. Schon ein kleiner Zug macht Ihre Arbeit viel leichter und hält ihre Armkraft: eine kleine tägliche Reha.', c: 'Prüfen Sie zuerst, ob das Gitter fest sitzt. Ein nur eingestecktes Gitter kann sich beim festen Ziehen lösen.' },
            { fig: 'roll_cushion', t: 'Legen Sie ein Kissen an den Rücken, um die Lage zu stabilisieren. Beugen Sie das obere Knie leicht und legen Sie auch zwischen die Knie ein Kissen.' },
            { fig: null, t: 'Prüfen Sie zuletzt, ob knöcherne Punkte wie Ohren, Schultern, Ellbogen, Hüftknochen und Knöchel nicht fest gegen etwas drücken.' }
          ],
          points: [
            'Drehen Sie sie nicht durch Ziehen an Arm oder Hose; das schadet Haut und Gelenken. Stützen Sie den Rumpf (Schultern und Hüfte) zum Drehen.',
            'Prüfen Sie auch, ob keine zerknitterten Laken oder Kleidungsstücke unter dem Körper bleiben. Falten verursachen Druckgeschwüre.'
          ]
        },
        {
          id: 'taii2', title: 'Druckgeschwüre verhindern: Ernährung, Zeit, Ort',
          steps: [
            { fig: 'nutrition_cushion', t: 'In Wahrheit ist die größte Grundlage der Dekubitusprophylaxe nicht die Umlagerungstechnik, sondern die „Ernährung". Ein dünner, knochiger Mensch bekommt unter gleichen Bedingungen früher Geschwüre. Achten Sie auf Mahlzeiten und Ernährung, damit das Fettpolster als Puffer erhalten bleibt.', c: 'Ein schwindender Appetit ist selbst ein Warnzeichen für Druckgeschwüre. Sprechen Sie mit einer Ärztin oder einer Ernährungsfachkraft über die Ernährung.' },
            { fig: 'pressure_points', t: 'Druckgeschwüre entstehen leicht dort, wo Knochen hervorstehen und auf das Bett drücken. Hinterkopf, Schultern, Ellbogen, Gesäßmitte und Fersen sind typisch.' },
            { fig: null, t: 'Als grober Richtwert: lassen Sie sie nicht länger als 2 bis 3 Stunden in derselben Lage. Bei einer druckverteilenden Matratze oder je nach Zustand der Person ändert sich das richtige Intervall.', c: 'Legen Sie Intervall und Vorgehen zur Sicherheit gemeinsam mit einer Fachkraft wie einer Pflegekraft oder Pflegeberatung fest.' },
            { fig: null, t: 'Finden Sie Rötung an Gesäß oder Fersen, drücken Sie sie sanft mit einem Finger. Rötung, die nicht weiß wird, ist der Beginn eines Druckgeschwürs. Lagern Sie so, dass kein Gewicht auf dieser Stelle ruht.', c: 'Reiben oder massieren Sie die gerötete Stelle nicht. Das macht es schlimmer.', m: 'Die gelähmte Seite hat ein gedämpftes Gefühl, und die Person bemerkt den Schmerz nicht. Prüfen Sie die Haut auf der gelähmten Seite besonders oft.' },
            { fig: 'heel_float', t: 'Bei jemandem, dessen Fersen leicht röten, legen Sie ein Kissen unter die Waden, um die Fersen leicht anzuheben.' },
            { fig: null, t: 'Wie gut eine Matratze oder ein Kissen „Druckgeschwüre verhindert", ist von Produkt zu Produkt sehr verschieden. Zeigt sich beim Gebrauch Rötung, passt das Hilfsmittel vielleicht nicht. Es lohnt sich, es zu überprüfen oder etwas anderes zu versuchen.', c: 'Der schnellste Weg zu den passenden Prophylaxepunkten ist, eine Ärztin, Pflegekraft oder Hilfsmittel-Fachkraft zu fragen.' }
          ],
          points: [
            'Selbst wenn ein Druckgeschwür entsteht, machen Sie sich keine Vorwürfe mit „unsere Pflege war schlecht". Körperbau, Konstitution und Krankheit schaffen von Anfang an große Unterschiede darin, wie leicht sie entstehen.',
            'Wichtig ist nicht Schuld, sondern früh mit einer Fachkraft zu sprechen und auf eine zur Person passende Vorbeugung umzustellen.'
          ]
        }
      ]
    },

    {
      id: 'oki', emoji: '🌅', title: 'Aufsetzen',
      sub: 'Bis sie an der Bettkante sitzen',
      procs: [
        {
          id: 'oki1', title: 'An die Bettkante setzen',
          steps: [
            { fig: null, t: 'Nach einem Wort an sie drehen Sie den Körper zuerst auf die Seite. Legen Sie die Arme über die Brust, beugen Sie die Knie, legen Sie die Hände an Knie und Schulter und kippen Sie sanft zu sich. Vergessen Sie nicht, den Körper zur Bettkante auf der Aufsteh-Seite zu verschieben.', m: 'Bei einer Lähmung ist es grundlegend, mit der stärkeren Seite unten aufzusetzen, weil man sich auf dem Ellbogen der stärkeren Seite abstützen kann.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Noch in Seitenlage senken Sie beide Beine ab dem Knie über die Bettkante.' },
            { fig: 'situp_seq', t: 'Stützen Sie Schultern und Hüfte, nutzen Sie das Gewicht der Beine und richten Sie den Oberkörper im Bogen auf (Bild 1 bis 4). Mit dem Ellbogen als Drehpunkt (Dreieck) und der Stütze vom Ellbogen zur Handfläche wechselnd, richten sie sich mit viel weniger Kraft auf als beim geraden Hochziehen.', c: 'Bei einem Pflegebett mit aufrichtbarem Rückenteil ist es noch leichter, den Rücken zuerst etwas anzuheben. Gibt es ein Gitter oder einen Haltegriff, lassen Sie die Person ihn greifen. Zum Belasten beim Aufstehen benutzen Sie aber nur einen festen „Aufstehgriff (Bettgriff)".' },
            { fig: 'sit_edge', t: 'Sobald sie sitzt, sorgen Sie dafür, dass die ganzen Fußsohlen flach auf dem Boden ruhen. Bei einem höhenverstellbaren Bett stellen Sie es so ein, dass die Füße den Boden erreichen.' },
            { fig: null, t: 'Lassen Sie nicht sofort los. Direkt nach dem Aufsetzen kann der Blutdruck fallen und Schwindel auslösen. Stützen Sie sie einen Moment und beobachten Sie Farbe und Zustand.', c: 'Blasse Farbe, ein benommener Blick, kalter Schweiß. Dann treiben Sie es nicht weiter; legen Sie sie eine Weile zurück.' }
          ],
          points: [
            'Bleibt das Aufsetzen tagelang schwer, lösen Hilfsmittel wie ein Pflegebett oder Handläufe es oft. Fragen Sie eine Hilfsmittel-Fachkraft oder eine Pflegeberatung.'
          ]
        }
      ]
    },

    {
      id: 'ijou', emoji: '🪑', title: 'Aufstehen und Transfer',
      sub: 'Vom Bett in den Rollstuhl. Wo die meisten Unfälle passieren',
      procs: [
        {
          id: 'tachi1', title: 'Beim Aufstehen helfen',
          steps: [
            { fig: 'stand_prep', t: 'Lassen Sie sie nach vorn auf dem Sitz rutschen. Schieben Sie das Gesäß zur Vorderkante des Sitzes.' },
            { fig: 'stand_prep', t: 'Lassen Sie die Füße etwas zurückziehen. Mit den Knöcheln hinter den Knien ist das Aufstehen leichter.', c: 'Achten Sie darauf, nicht zu weit zurückzuziehen. Gehen die Füße zu tief, kann die Person beim Aufstehen nach vorn kippen.' },
            { fig: null, t: 'Bei einem Stuhl mit Armlehnen lassen Sie die Person die Armlehnen drücken. Drücken ist zum Aufstehen leichter als Ziehen und entlastet auch Sie. Das Drücken mit den eigenen Armen ist selbst eine kleine tägliche Reha, die die Muskelkraft erhält.' },
            { fig: 'stand_bow', t: 'Lassen Sie sie sich „wie zum Verbeugen" nach vorn lehnen. Geht der Kopf nach vorn und unten, hebt sich das Gesäß von selbst. Ziehen Sie nicht gerade hoch; das stoppt die natürliche Bewegung und erschwert das Aufstehen.', c: 'Das ist der gefährliche Punkt. Ist die Verbeugung zu tief, fällt die Person gerade nach vorn. Ein klassischer Unfall auch unter Pflegekräften. Lehnen Sie nur „das Minimum, damit sich das Gesäß hebt". Stehen Sie schräg vorn, in einer Position, um sie aufzufangen, vorsichtig und langsam.', m: 'Menschen mit Lähmung oder durch lange Bettruhe Geschwächte können ihren eigenen Schwung nach vorn nicht stoppen. Gehen Sie besonders langsam, Stück für Stück. Lassen Sie nicht nach.' },
            { fig: 'stand_assist', t: 'Legen Sie Ihren Arm um die Hüfte der Person und stehen Sie im Takt der Vorlehn-Bewegung gemeinsam auf. Beugen Sie die eigenen Knie und senken Sie das Becken, dann tut Ihr Rücken nicht weh.', m: 'Bei jemandem, dessen gelähmtes Knie leicht einknickt, stabilisiert es, Ihr Knie leicht gegen sein gelähmtes Knie zu legen (verhindert Einknicken).', link: { cat: 'koshi', proc: 'koshi1' } },
            { fig: null, t: 'Direkt nach dem Aufstehen können die Knie einknicken. Stützen Sie weiter, bis Sie sicheren Stand bestätigt haben.' }
          ],
          points: [
            'Das Musterbeispiel für „einen Unfall, den man allein durch Wissen verhindert", ist der Sturz nach vorn. Führen Sie dieses Vorgehen vorsichtig, langsam und wachsam durch.',
            'Fürchten Sie, ein einknickendes Knie nicht halten zu können, erzwingen Sie es nicht. Hier kommen Aufstehgriffe und andere Hilfsmittel ins Spiel. Tragen Sie es nicht allein; sprechen Sie mit einer Fachkraft.'
          ]
        },
        {
          id: 'ijou1', title: 'Vom Bett in den Rollstuhl',
          steps: [
            { fig: 'transfer_angle', t: 'Stellen Sie den Rollstuhl auf die leichtere Seite der Person (die stärkere Seite bei Lähmung), in einem Winkel von 20 bis 30 Grad zum Bett.' },
            { fig: null, t: 'Ziehen Sie beide Bremsen an und klappen oder nehmen Sie die Fußstützen ab.', c: 'Das Vergessen der Bremsen ist die häufigste Ursache von Transferunfällen. Machen Sie es sich zur Gewohnheit, jedes Mal mit dem Finger zu zeigen und zu prüfen.' },
            { fig: null, t: 'Lassen Sie sie an der Bettkante sitzen, die Füße zurückziehen und nach vorn auf dem Sitz rutschen.' },
            { fig: null, t: 'Lassen Sie sie „wie zum Verbeugen" nach vorn gelehnt aufstehen. Erst nach vorn rutschen, die Füße zurückziehen. Einzelheiten auf der Seite unten.', link: { cat: 'ijou', proc: 'tachi1' } },
            { fig: 'pivot_steps', t: 'Sobald sie steht, drehen Sie auf den Füßen, in kleinen Schritten trippelnd, langsam. Verdrehen Sie nicht nur den Körper.' },
            { fig: null, t: 'Lassen Sie sie die ferne Armlehne des Rollstuhls greifen, dann dreht sich der Körper natürlich. Senken Sie die Hüfte langsam zum Sitz.', c: 'Das Motto ist „Lassen Sie die Person die Haltegriffe benutzen". Jedes Mal, wenn sie die Armlehne nutzt, bleibt die Kraft von Armen und Körper erhalten.' },
            { fig: 'sit_deep', t: 'Lassen Sie sie tief zurücksitzen und die Füße auf die Fußstützen setzen. Nach vorn gerutscht sitzend rutscht sie herunter, was gefährlich ist. Die nächste Seite erklärt das richtige Zurücksetzen.', link: { cat: 'ijou', proc: 'suwari1' } }
          ],
          points: [
            'Fühlen Sie auch nur leicht „ich kann sie vielleicht nicht halten", tun Sie es nicht allein.',
            'Der Transfer eines Menschen, der nicht allein stehen kann (Vollhilfe), ist eine andere Methode. Lassen Sie sich von einer Fachkraft persönlich zeigen, was zur Person passt.'
          ]
        },
        {
          id: 'suwari1', title: 'Im Rollstuhl tief zurücksetzen',
          steps: [
            { fig: 'sit_deep', t: 'Warum es wichtig ist. Nach vorn gerutscht sitzend rutscht der Körper Stück für Stück herunter, und Druck und Scherkräfte konzentrieren sich auf die Gesäßmitte (das Steißbein). In dieser Haltung entstehen Druckgeschwüre schon beim bloßen Sitzen.' },
            { fig: null, t: 'Prüfen Sie zuerst beide Bremsen. Nehmen Sie die Füße von den Fußstützen und stellen Sie die Sohlen flach auf den Boden.' },
            { fig: null, t: 'Lassen Sie die Person sich „wie zum Verbeugen" nach vorn lehnen. Das Gesäß hebt sich ein wenig. Lässt man sie die Armlehnen drücken, hebt es sich leichter.' },
            { fig: null, t: 'Gehen Sie hinter sie, und im Moment, in dem sich das Gesäß hebt, stützen Sie das Becken (um die Hüftknochen) mit beiden Händen und führen Sie es sanft nach hinten. Es ist ein Gefühl von Schieben, nicht Heben.', c: 'Von hinten unter die Achseln zu greifen und hochzuziehen kann die Schultern verletzen und wird daher zu Hause nicht empfohlen.' },
            { fig: null, t: 'Fällt der Person das Vorlehnen schwer, tun Sie es seitlich, Stück für Stück. Neigen Sie den Körper zu einer Seite, schieben Sie das angehobene Gesäß nach hinten, dann ebenso auf der anderen Seite. Dieses „Gehen auf dem Gesäß" setzt sie jedes Mal etwas tiefer.' },
            { fig: null, t: 'Prüfen Sie zuletzt. Ist kein Spalt zwischen unterem Rücken und Rückenlehne und das Becken aufgerichtet, ist es geschafft. Setzen Sie die Füße auf die Fußstützen zurück.' },
            { fig: null, t: 'Noch eines: richten Sie auch verrutschte Kleidung. Es gibt tatsächlich sehr viele Menschen, deren Hose oder Rock heruntergerutscht ist und deren Unterwäsche oder Windel sichtbar bleibt. Ein Rollstuhl bringt sie nach draußen. So lässt sich die Person beschämen.', c: 'Die Person kann es oft nicht selbst richten und bringt es nicht über sich, etwas zu sagen. Es zu bemerken und still zu richten ist Aufgabe der Pflegeperson. Eine peinliche Erfahrung kann zum Grund für „ich will nicht mehr raus" werden. Ein gepflegtes Äußeres ist ein kleiner Extraschritt, der Person und Sie vor fremden Blicken schützt.' }
          ],
          points: [
            'Das Zurücksetzen kommt mehrmals täglich vor. Denken Sie „sie ist heruntergerutscht", tun Sie es, oft. Das ist selbst Dekubitusprophylaxe.',
            'Haltung und Kleidung. Erst wenn beides sitzt, ist das Zurücksetzen „vollständig".'
          ]
        },
        {
          id: 'kuruma1', title: 'Fahren im Rollstuhl',
          steps: [
            { fig: null, t: 'Prüfen Sie vor dem Fahren zuerst. Sind die Füße auf den Fußstützen? Sind Hände, Kleidung oder eine Decke frei von den Rädern? Fahren mit etwas Eingeklemmtem kann schon nach wenigen Metern zu Verletzung oder Unfall führen.' },
            { fig: null, t: 'Nach der Kontrolle sagen Sie „Wir fahren jetzt", bevor Sie losfahren. Plötzliches Fahren erschreckt sie.' },
            { fig: 'curb_tip', t: 'Bei einer kleinen Stufe drücken Sie den Kipphebel hinten, um die Vorderräder anzuheben, und fahren vorwärts hinauf. Zum Herunterfahren fahren Sie rückwärts und lassen langsam von den Hinterrädern herab.', c: 'Lage und Vorhandensein des Hebels sind je nach Rollstuhl verschieden. Prüfen Sie es beim Ausleihen oder Kauf am echten Gerät.' },
            { fig: null, t: 'Ein steiles Gefälle ist von vornherein ein „zu meidender Weg". Gibt es einen Aufzug oder eine sanfte Rampe, wählen Sie ihn, auch als Umweg.', c: 'Müssen Sie hinunter, fahren Sie rückwärts und langsam. Das Gewicht von Person und Rollstuhl zusammen ist aber mehr, als Sie denken. Gemeinsam zu stürzen, weil Sie es nicht halten, ist ein schwerer Unfall. Dass Sie nicht stürzen, zählt genauso. Sind Sie auch nur leicht unsicher, holen Sie Hilfe.' },
            { fig: null, t: 'Beim Anhalten oder Weggehen ziehen Sie stets die Bremsen an. Und beim Weggehen sagen Sie stets „Warten Sie hier. Ich bin gleich zurück." Unfälle, bei denen die Person aufzustehen versucht, während Sie weg sind, sind sehr häufig.', c: 'Ob „warten Sie hier" bei der Person ankommt, erfordert Urteilsvermögen. Sind Sie auch nur leicht unsicher, vermeiden Sie es ganz, sie im Rollstuhl sitzen zu lassen und wegzugehen.' }
          ]
        }
      ]
    },

    {
      id: 'omutsu', emoji: '🚻', title: 'Windeln wechseln',
      sub: 'Schnell, warm und hautschonend',
      procs: [
        {
          id: 'omu1', title: 'Eine Klebewindel wechseln',
          steps: [
            { fig: null, t: 'Legen Sie sich vor Beginn alles bereit. Eine neue Windel, Saugvorlage, Feuchttücher, Einweghandschuhe und einen Beutel für die gebrauchte Windel. Damit Sie nie zwischendurch weggehen müssen.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: null, t: 'Nach einem Wort an sie senken Sie die Hose und lösen die Klebestreifen der Windel. Halten Sie alles außer dem nötigen Bereich mit Handtuch oder Decke bedeckt.', link: { cat: 'omutsu', proc: 'omu2' } },
            { fig: null, t: 'Drehen Sie den Körper auf die Seite, rollen Sie die gebrauchte Windel nach innen und schieben Sie sie leicht unter den Körper. Das Drehen auf die Seite ist wie beim Umlagern.', c: 'Gibt es ein Bettgitter, stabilisiert es die Lage, ist für Sie beide leichter und hält die Kraft der Person, wenn sie es in Seitenlage hält. Erzwingen Sie es aber nicht. Ist die Person bereit, genügt das.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Wischen Sie von vorn nach hinten (von der Bauch- zur Gesäßseite). Besonders bei Frauen ist diese Richtung wichtig, um Harnwegsinfekte zu verhindern.', c: 'Bei starker Verschmutzung reinigt Spülen mit lauwarmem Wasser besser als Wischen und ist hautschonender.' },
            { fig: null, t: 'Rollen Sie die Hälfte der neuen Windel und schieben Sie sie unter den Körper, drehen Sie zurück auf den Rücken, ziehen Sie sie dann auf der anderen Seite heraus und breiten Sie sie aus. Die Mitte der Windel gehört in die Körpermitte.' },
            { fig: 'tape_cross', t: 'Kleben Sie die Streifen überkreuz: die unteren leicht nach oben, die oberen leicht nach unten geneigt. Lassen Sie um den Bauch Platz für ein bis zwei Finger.' },
            { fig: null, t: 'Fahren Sie mit einem Finger an den stehenden Auslaufschutz (die aufgerichteten Ränder an den Beinöffnungen) und stellen Sie ihn nach außen auf. Liegt er nach innen, verursacht er Auslaufen.' },
            { fig: null, t: 'Prüfen Sie die Haut jedes Mal kurz auf Rötung, Wundsein oder Risse. Beunruhigt Sie etwas, sprechen Sie früh mit einer Fachkraft.', m: 'Wenn Kontrakturen die Beine schwer öffnen lassen, erzwingen Sie es nicht. Arbeiten Sie im schmerzfreien Bereich, und am sichersten ist es, sich die Methode von einer Fachkraft zeigen zu lassen, die die Person betreut.' }
          ],
          points: [
            { t: 'Eine Atmosphäre zu schaffen, in der sie nie „Entschuldigung" sagen muss, ist die größte Fähigkeit. Wie man diese Atmosphäre schafft, ist von Mensch zu Mensch verschieden. Es steht auf der nächsten Seite.', link: { cat: 'omutsu', proc: 'omu2' } },
            'Nach dem Stuhlgang schützt ein möglichst rasches Wechseln statt Warten die Haut.',
            'Bei anhaltendem Auslaufen passt öfter als der Sitz die Windel oder Vorlage nicht zum Körper. Fragen Sie ein Geschäft oder eine Fachkraft zur Überprüfung von Größe oder Typ.'
          ]
        },
        {
          id: 'omu2', title: 'Windelwechsel und das Herz',
          steps: [
            { fig: null, t: 'Ausscheidungspflege zeigt den Unterschied im „Herzen" mehr als den Unterschied im Können. Auch wenn Sie schnell und genau sind: fühlt sich die Person elend, ist das nicht die richtige Antwort. Und dies allein ist die Pflege mit der geringsten festen „richtigen Form" und den größten Unterschieden zwischen Menschen.' },
            { fig: null, t: 'Manchen passt es, es schlicht wie eine gewöhnliche Hausarbeit zu tun. Kein Aufheben zu machen macht die Scham am kleinsten.' },
            { fig: null, t: 'Anderen passt leichtes Plaudern besser. Die Stimmung „das ist keine Mühe und keine Last" kommt an, und das Gefühl der Entschuldigung löst sich auf.', c: 'Was passt, sagt Ihnen die Person. Ihr Gesichtsausdruck, wie viel sie spricht, die Anspannung im Körper, wie oft sie „Entschuldigung" sagt. Bei einer unpassenden Art nimmt dies zu. Nimmt es zu, ist das ein Zeichen, Ihr Vorgehen zu ändern.' },
            { fig: null, t: 'Bei jedem Stil gibt es ein gemeinsames „nicht tun". Nicht das Gesicht verziehen. Keine Bemerkung zu Geruch oder Menge. Nicht drängen. Fehler nicht vorwerfen. Das ist für alle gleich.' },
            { fig: null, t: 'Sich vorab zu überlegen, was man erwidert, wenn sie „Entschuldigung" sagt, macht es leichter. „Wir sind quitt." „Sie haben mich als Baby auch gewickelt." Es gibt Worte, die gerade wirken, weil Sie Familie sind.', c: 'Ein Scherz kann manche aber verletzen. Ob sie gut lacht, ist Ihre Lehrmeisterin; beobachten Sie die Reaktion der Person.' }
          ],
          points: [
            'Eine Windel ist nicht immer „die einzige Option". Gibt es noch einen Weg, mit Toilette oder Toilettenstuhl auszuscheiden, schützt das Würde und Körperkraft der Person. Ob überhaupt Windeln, ist ein wichtiges Thema, das eine Fachkraft-Beratung wert ist.',
            'Die Handgriffe sitzen nach ein, zwei Wochen. Herzen zu verbinden ist ein Herantasten, das ewig weitergeht. Es wird Tage geben, an denen es nicht klappt, und das ist natürlich.'
          ]
        }
      ]
    },

    {
      id: 'shokuji', emoji: '🍚', title: 'Hilfe beim Essen',
      sub: 'Eine Haltung ohne Verschlucken und ein ruhiges Tempo',
      procs: [
        {
          id: 'shoku1', title: 'Haltung ohne Verschlucken und wie man hilft',
          steps: [
            { fig: null, t: 'Beginnen Sie erst, wenn sie ganz wach sind. Schläfriges Essen führt dazu, dass Nahrung in die Luftröhre gelangt (Aspiration).', c: 'Waschen Sie die Hände, bevor Sie Essen berühren. Saubere Nägel und Hände schützen die Person direkt vor Infektion.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: 'meal_posture', t: 'Auf einem Stuhl lassen Sie sie weit hinten sitzen, die Sohlen auf dem Boden. Leicht nach vorn, mit angezogenem Kinn, ist die Haltung, die am wenigsten Verschlucken verursacht.', c: 'Hebt sich das Kinn, öffnet sich die Luftröhre gerade und Nahrung gelangt leichter hinein. Den Kopf nach hinten zu neigen und Essen hineinzugießen ist gefährlich.' },
            { fig: 'bed_up', t: 'Im Bett richten Sie den Oberkörper auf (mindestens 30 Grad, ideal 60 bis 90). Legen Sie ein Kissen hinter den Kopf, um das Kinn anzuziehen.' },
            { fig: null, t: 'Halten Sie jeden Bissen klein. Führen Sie den Löffel von unten heran und bestätigen Sie das Schlucken vor dem nächsten Bissen. Hebt und senkt sich der Adamsapfel, ist das das Zeichen für einen Schluck.', m: 'Bei einer Lähmung führen Sie den Löffel zum Mundwinkel auf der stärkeren Seite. Auf der gelähmten Seite ist Nahrung schwer zu kauen und bleibt unbemerkt zurück.' },
            { fig: null, t: 'Bei allem zu helfen ist nicht die einzige richtige Antwort. Sie helfen bei der Suppe, und die Person isst die festen Speisen mit Stäbchen oder Löffel. Eine Form „halb und halb" ist auch eine gute Art. Je mehr sie selbst isst, desto mehr bleiben ihre Kraft und die Freude am Essen erhalten.' },
            { fig: null, t: 'Auch wenn Sie helfen: können Sie sich mit der Person verständigen, lassen Sie sie haben, was sie will, in der Reihenfolge, die sie will. Aber wie man nachfragt, ist verschieden. Manche wollen jeden Bissen angesagt, manche grob sagen und es Ihnen überlassen, manche alles überlassen.', c: 'Manche finden „jedes Mal gefragt zu werden" lästig. Welche Art zu fragen angenehm ist, kann nur die Person entscheiden. Beobachten Sie die Reaktion und finden Sie die Form dieser Person.' },
            { fig: null, t: 'Für jemanden, der sich an Wasser oder Tee leicht verschluckt, gibt es Andickungsmittel. Die passende Dicke ist verschieden, sprechen Sie daher mit einer Logopädin (Fachkraft für Schlucken) oder einer Ärztin oder Pflegekraft.' },
            { fig: null, t: '30 Minuten bis eine Stunde nach dem Essen halten Sie den Körper aufrecht. Sofortiges Hinlegen kann Verschlucken an dem verursachen, was aus dem Magen zurückkommt.' },
            { fig: null, t: 'Prüfen Sie zuletzt, ob keine Nahrung im Mund bleibt. Sie bleibt gern in den Wangen und am Gaumen.', m: 'Bei einer Lähmung bleibt sie besonders in der Wange auf der gelähmten Seite. Auch die Person bemerkt es nicht, also schauen Sie bewusst nach.' }
          ],
          points: [
            { t: 'Mehr Verschlucken, Mahlzeiten dauern zu lang. Das ist vielleicht kein schlechtes Helfen, sondern ein Zeichen, dass sich die Schluckkraft verändert hat. Es ist wichtig, darum steht es auf der nächsten Seite.', link: { cat: 'shokuji', proc: 'shoku2' } }
          ],
          ng: [
            'Essen hineingeben und dabei eine Antwort verlangen (Sprechen öffnet die Luftröhre)',
            'Sie drängen. Bissen groß machen',
            'Den Kopf nach hinten neigen und hineingießen'
          ]
        },
        {
          id: 'shoku2', title: 'Wenn das Essen langsamer wird',
          steps: [
            { fig: null, t: 'Hilfe beim Essen ist nicht bloß eine Aufgabe. Die tägliche Mahlzeit ist der vertrauteste Gesundheitscheck und für die Person die größte Freude. Gerade darum ist „es wird langsamer" ein wichtiges Zeichen, das Sie nicht übersehen dürfen.' },
            { fig: null, t: 'Denken Sie zuerst an vorübergehende Ursachen. Unwohlsein, Verstopfung, ein Mundgeschwür, schlecht sitzende Prothese, gedrückte Stimmung. Passt etwas und erholt es sich in ein paar Tagen, müssen Sie sich nicht zu sehr sorgen.' },
            { fig: null, t: 'Zu beachten ist, wenn es lange anhält. Keine körperliche Krankheit und kein seelischer Grund sind zu finden, doch es dauert, sie verschlucken sich, halten Essen im Mund. Das kann ein Zeichen sein, dass die ganze Fähigkeit „kauen, mit der Zunge nach hinten schieben, den Schluck timen" selbst schwächer wird. Es tritt auch auf, wenn Demenz die Hirnfunktion verändert.' },
            { fig: null, t: 'Diese Einschätzung ist tatsächlich auch für Ärzte und Pflegekräfte schwer. Eine Schluck-Fachkraft (Logopädin) bemerkt es oft, sagen Sie daher Ihrer Ärztin oder Beratungsstelle klar: „Ich möchte, dass eine Schluck-Fachkraft nachsieht."', c: 'Über häusliche Reha oder eine Klinikambulanz sind mitunter eine Schluckuntersuchung oder -abklärung möglich.' },
            { fig: null, t: 'Und hier das Wichtigste, ehrlich gesagt. „Solange sie durch den Mund essen können" ist nicht immer das Ziel. Für jemanden mit geschwächtem Schlucken erreicht das Essen selbst ein Stadium mit Risiko für Lungenentzündung oder Ersticken. Dann kann „durch den Mund, notfalls mit Zwang" nicht die richtige Antwort heißen.' },
            { fig: null, t: 'Darüber hinaus gibt es Optionen wie Ernährung über Nase oder Magen (Sondenernährung, PEG-Sonde) oder eine Infusion. Diese Worte sind vielleicht schon zu hören schwer. Doch das ist kein „Aufgeben", sondern medizinische Versorgung, um die Person vor Lungenentzündung und Ersticken zu schützen.', c: 'Besprechen Sie es gut mit der Ärztin, vorsichtig. Aber es ist auch eine Lage, in der man die Entscheidung besser nicht zu lange aufschiebt. Eine späte Entscheidung kann Person und Sie in die Enge treiben.' }
          ],
          points: [
            'Diese Entscheidung ist nicht von der Familie allein zu tragen. Vielmehr ist es ein Bereich, den die Familie nicht allein entscheiden darf. Stets gemeinsam mit einer Fachkraft.',
            'Ihr Bemerken „die Art, wie sie isst, hat sich verändert" als die Person, die täglich am nächsten hinsieht, ist genau die Information, die eine Fachkraft am meisten braucht.'
          ]
        }
      ]
    },

    {
      id: 'koukuu', emoji: '🦷', title: 'Mundpflege',
      sub: 'Vorbeugung gegen Lungenentzündung beginnt im Mund',
      procs: [
        {
          id: 'kou1', title: 'Zähneputzen und Mundpflege',
          steps: [
            { fig: null, t: 'Den Mund sauber zu halten ist die beste Vorbeugung gegen Lungenentzündung (Aspirationspneumonie) bei älteren Menschen. Machen Sie es nach den Mahlzeiten zur Gewohnheit.' },
            { fig: null, t: 'Ist die Person bereit, lassen Sie sie selbst die Zähne putzen. Das ist selbst gute Reha. Sie putzt aber oft nicht gründlich genug, daher ist die Endkontrolle Ihre Aufgabe.', c: 'Nutzen Sie Worte, die die Endkontrolle nicht unangenehm machen. Etwas wie „Sie haben gut geputzt. Zeigen Sie mir zum Schluss nur die hinteren" geht leichter hinein, weil es die Mühe zuerst anerkennt.' },
            { fig: null, t: 'Die Haltung ist wie beim Essen. Leicht nach vorn, mit angezogenem Kinn. Damit Wasser und Schmutz während der Pflege nicht die Kehle hinunterlaufen.', link: { cat: 'shokuji', proc: 'shoku1' } },
            { fig: null, t: 'Nehmen Sie Prothesen heraus und reinigen Sie sie mit einer Prothesenbürste. Nutzen Sie keine gewöhnliche Zahnpasta; das Schleifmittel zerkratzt Prothesen. Nachts nehmen Sie sie heraus und legen sie in Wasser oder Reiniger.' },
            { fig: null, t: 'Für jemanden, der nicht spülen kann, wischen Sie sanft mit einer fast wasserlosen Schwammbürste oder mit feuchter Gaze um einen Finger.' },
            { fig: null, t: 'Reinigen Sie sanft nicht nur die Zähne, sondern auch Zunge, Gaumen und Wangeninnenseiten. Versuchen Sie nicht, festsitzenden Schmutz auf einmal zu entfernen.', m: 'Bei einer Lähmung sammelt sich Schmutz zwischen Wange und Zahnfleisch auf der gelähmten Seite, achten Sie dort bewusst und sanft.' },
            { fig: null, t: 'Es muss nicht jedes Mal perfekt sein. Halten Sie aber vor dem Hinlegen das Minimum. Prothese herausnehmen. Im Mund gebliebene Nahrung entfernen. Nur diese zwei, jeden Abend ohne Ausnahme.', c: 'Im Schlaf kann Zurückgebliebenes unbemerkt in die Luftröhre fließen, und eine Lungenentzündung beginnt leise. Unsichtbar, aber lebensbedrohlich, die größte in der Mundpflege verborgene Gefahr.' },
            { fig: null, t: 'Anhaltende Blutung, ein Mundgeschwür, Schmerz, schlecht sitzende Prothese. Dann fragen Sie eine Zahnärztin. Es gibt auch die Möglichkeit eines „Zahnarzt-Hausbesuchs".' }
          ],
          points: [
            'An Tagen, an denen sie sich sträubt, müssen Sie nicht Perfektion anstreben. Halten Sie aber „Prothese herausnehmen und Essensreste entfernen vor dem Schlafen" als tägliches Minimum.',
            'Der Mund ist ein besonders privater Körperteil. Auch lebensschützende Pflege verletzt das Herz, wenn sie erzwungen wird. Leben und Herz zählen gleich viel. Fehlt eines, entfernt man sich vom Glück.'
          ]
        }
      ]
    },

    {
      id: 'kigae', emoji: '👕', title: 'Anziehen',
      sub: 'Die Regel: von der stärkeren Seite zuerst ausziehen',
      procs: [
        {
          id: 'kigae1', title: 'Ein Oberteil wechseln (vorn zu öffnen)',
          steps: [
            { fig: 'datsuken', t: 'Ist eine Seite durch Lähmung oder Schmerz schwer beweglich, gilt die Regel: beim Ausziehen von der stärkeren Seite beginnen, beim Anziehen von der schwer beweglichen (betroffenen) Seite.', c: 'Ziehen Sie nicht kräftig an einer Hand oder einem Arm. Das kann die Schulter verletzen oder die Haut blau werden lassen.' },
            { fig: null, t: 'Ausziehen. Streifen Sie erst den Arm auf der stärkeren Seite aus dem Ärmel. Dann ziehen Sie die schwer bewegliche Seite langsam heraus.' },
            { fig: null, t: 'Anziehen. Führen Sie zuerst den Arm auf der schwer beweglichen Seite hindurch. Es geht leicht, wenn Sie den Ärmel raffen und der Hand entgegenkommen.', c: 'Bleibt ein Finger im Ärmel hängen und geht nicht durch, erzwingen Sie es nicht. Weiterdrücken mit hängengebliebenem Nagel kann den Nagel abreißen, eine schwere Verletzung. Das passiert auch Fachkräften. Ziehen Sie ihn einmal zurück, raffen Sie den Ärmel neu und versuchen Sie es erneut.', m: 'Wenn eine Kontraktur den Ellbogen nicht strecken lässt, versuchen Sie nicht, den Arm zu strecken; raffen Sie stattdessen die Kleidung darüber. Weiter, dehnbarer Stoff ist viel leichter.' },
            { fig: null, t: 'Nachdem es bis zur Schulter sitzt, lassen Sie den Arm auf der stärkeren Seite hindurchführen. Lassen Sie sie tun, was sie kann.' },
            { fig: null, t: 'Glätten Sie zuletzt die Falten unter Rücken und Gesäß. Auf Falten zu liegen verursacht Druckgeschwüre.' }
          ],
          points: [
            'Die Kleiderwahl ist auch Teil der Pflegetechnik. Nur vorn zu öffnen, weit und dehnbar zu machen, macht das Anziehen um ein Vielfaches leichter.',
            'Nicht nur beim Anziehen, sondern auch nach Transfer oder Rollstuhl oder nach der Toilette verrutscht Kleidung leicht. Heruntergerutschte Hose, hochgeschobener Saum. Bemerken und still richten. Verrutschte Kleidung zu richten ist eine Grundlage der Pflege, die die Würde der Person schützt.',
            'Anziehen ist auch eine wertvolle Gelegenheit, den ganzen Körper zu sehen. Hautrötung, blaue Flecken, Schwellungen, Wunden. Können Sie beim Helfen natürlich ein Auge darauf haben, ist das schon gute Pflege.'
          ]
        },
        {
          id: 'kigae2', title: 'Eine Hose wechseln (im Liegen)',
          steps: [
            { fig: null, t: 'Zuerst ein Punkt zur Haltung. Das Anziehen des Unterkörpers ist die Pflege, bei der die Scham am meisten hervortritt. Auch ohne Demenz ist Ablehnung oder Unkooperativität natürlich.', c: 'Kurz gesagt, es ist die Aufrichtigkeit Ihrer Worte und Art. Nennen Sie den Zweck „nach dem Wechseln fühlen Sie sich frisch", decken Sie mit einem Handtuch, schauen Sie nicht hin, wo Sie nicht müssen, und seien Sie zügig. Verlieren Sie hier das Vertrauen, kann sie den Wechsel selbst verweigern. Eine Pflege, die Würde und Hygiene zugleich schützt.' },
            { fig: null, t: 'Führen Sie das schwer bewegliche Bein zuerst hindurch. Raffen Sie es der Reihe nach hoch: Knöchel, Knie, Oberschenkel.', c: 'Bleibt ein Zeh im Saum hängen, ist Kraft verboten. Abgerissene Nägel sind eine klassische Anzieh-Verletzung. Ziehen Sie ihn einmal zurück, raffen Sie den Saum neu und führen Sie ihn hindurch.' },
            { fig: null, t: 'Kann die Person die Hüfte anheben, lassen Sie sie die Knie aufstellen und das Gesäß heben. In diesem Moment ziehen Sie die Hose bis zur Taille hoch.' },
            { fig: null, t: 'Kann sie die Hüfte nicht heben, neigen Sie den Körper abwechselnd zur Seite und ziehen eine Seite nach der anderen hoch. Das Drehen auf die Seite ist wie beim Umlagern.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Richten Sie die Taillenlage und die Falten, und Sie sind fertig.' }
          ]
        }
      ]
    },

    {
      id: 'seishiki', emoji: '🛁', title: 'Körper waschen und baden',
      sub: 'Warm, sicher und sauber',
      procs: [
        {
          id: 'sei1', title: 'Den Körper waschen (Waschung im Bett)',
          steps: [
            { fig: null, t: 'Wärmen Sie zuerst das Zimmer (Richtwert 22 bis 24°C / 72 bis 75°F). Kälte verspannt den Körper und hebt den Blutdruck.' },
            { fig: null, t: 'Wringen Sie das Tuch in recht heißem Wasser aus, etwa 55 bis 60°C (130 bis 140°F), dann hat es beim Auflegen genau die richtige Wärme. Prüfen Sie die Temperatur vorher an Ihrer eigenen Armbeuge.' },
            { fig: null, t: 'Legen Sie nur den Teil frei, den Sie waschen, und halten Sie den Rest mit einem Badetuch bedeckt. Rücksicht auf die Kälte und die Scham.' },
            { fig: 'wipe_direction', t: 'Wischen Sie die Gliedmaßen vom fernen Ende zur Körpermitte (Hand zur Schulter, Fuß zum Oberschenkel). Das folgt der Fließrichtung des Blutes.' },
            { fig: null, t: 'Die Reihenfolge ist Gesicht, Arme, Brust, Bauch, Beine, Rücken, Gesäß, von den saubereren Bereichen zuerst. Nehmen Sie nach dem Wischen die Feuchtigkeit sofort mit einem trockenen Tuch auf. Feucht gelassen verursacht es Auskühlung und Hautprobleme.', m: 'Eine kontrakte Handfläche, die Achseln und die Ellenbeugen sammeln Schweiß und Schmutz. Zwingen Sie sie nicht auf; wischen Sie sanft so weit, wie sie sich schmerzfrei öffnen.' },
            { fig: null, t: 'Es muss nicht jeden Tag der ganze Körper sein. Es aufzuteilen, heute Oberkörper und morgen Unterkörper, ermüdet weder die Person noch Sie.' }
          ],
          points: [
            'Waschen und Baden sind Musterbeispiele oft abgelehnter Pflege. An Tagen der Ablehnung drängen Sie nicht; heute nur Gesicht und Hände, morgen die Füße, ist in Ordnung. Sauberkeit eher in Wochen als in Tagen zu denken ist etwa richtig.'
          ]
        },
        {
          id: 'sei2', title: 'Sicher baden',
          steps: [
            { fig: null, t: 'Zuerst etwas zum Wissen. Ein Bad ist nicht „ein Ereignis, das nur guttut". Es kostet Kraft. Es ist lästig. Es ist peinlich. Sie wollen keine Last sein. Sie haben kein Vertrauen in ihren Körper. Es gibt viele Gründe abzulehnen, und alle sind natürlich.', c: 'Auch gesunde Menschen haben Tage mit „heute mag ich nicht baden". Versteht man das nicht, führt es zur falschen Pflege des Zwingens. An Tagen der Ablehnung lassen Sie einen Ausweg: nur den Körper waschen, nur ein Fußbad, oder ein anderer Tag.' },
            { fig: null, t: 'Wärmen Sie im Winter Umkleide und Bad zuerst. Ein plötzlicher Temperaturunterschied schwankt den Blutdruck stark und verursacht Kollaps (Temperaturschock).' },
            { fig: null, t: 'Richtwert: Wasser nicht heißer als 41°C (106°F) und höchstens 10 Minuten baden. Lange Bäder in heißem Wasser sind am gefährlichsten.', m: 'Die gelähmte Seite spürt Hitze schlecht und ist der Ort, an dem Verbrennungen unbemerkt bleiben. Gießen Sie Dusche oder Wasser Stück für Stück, von der nicht betroffenen Seite beginnend.' },
            { fig: null, t: 'Vermeiden Sie Baden auf leeren Magen, direkt nach einer Mahlzeit oder nach Alkohol.' },
            { fig: null, t: 'Der Moment des Übersteigens der Wannenkante ist der wahrscheinlichste Sturz. Nutzen Sie Haltegriffe, eine Wannenstufe und eine Antirutschmatte.', c: 'Hilfsmittel wie Haltegriffe und Duschstühle lassen sich mitunter über eine Pflegeberatung ausleihen oder günstig beschaffen. Fragen Sie eine Fachkraft.' },
            { fig: null, t: 'Lassen Sie sie während des Bades nicht aus den Augen. Wärmt sich der Körper im Wasser, ändern sich Durchblutung und Blutdruck, das Bewusstsein kann trüben, und sie können sogar wie im Schlaf das Bewusstsein verlieren. Ertrinken in der Wanne passiert so, ganz leise.', c: 'Bleiben Sie, wenn möglich, gemeinsam im Bad oder in der Umkleide. Plaudern Sie angenehm, während sie sich langsam aufwärmt. Das ist für Sie beide am beruhigendsten.' }
          ],
          points: [
            'Wird das Bad zu Hause schwer, lassen viele Familien einen Tagespflegedienst nur das Baden übernehmen. Das ist kein Pfusch, sondern eine gute Wahl für die Sicherheit.'
          ]
        }
      ]
    },

    {
      id: 'hokou', emoji: '🚶', title: 'Gehen begleiten und Stürze verhindern',
      sub: 'Die Wohnung sturzsicher zu machen ist die halbe Arbeit',
      procs: [
        {
          id: 'hok1', title: 'Wie man beim Gehen begleitet',
          steps: [
            { fig: 'walk_position', t: 'Die begleitende Person steht leicht hinter und seitlich der schwächeren Seite der Person (der Seite mit Lähmung). Die Position, um sie beim Schwanken sofort zu stützen.' },
            { fig: null, t: 'Zu wissen, warum Menschen stürzen, verändert die Art zu stützen. Die meisten Stürze beginnen mit „der Fuß hebt sich weniger als erwartet, und sie stolpern" oder „die Sohle landet nicht flach und der Knöchel knickt um". Dann geschieht der Sturz, weil ein Ausgleichsschritt nicht rechtzeitig kommt.', c: 'Umgekehrt: können Sie diesen schwankenden Moment nur stützen, vermeiden Sie den schlimmsten Sturz. Bereit zu sein, „diesen einen Schritt jederzeit zu stützen", das ist die vorderste Aufgabe der Pflegeperson.' },
            { fig: null, t: 'Statt Händchenhalten lässt leichtes Stützen unter der Achsel oder an der Hüfte Sie sie auffangen, wenn sie zusammensackt. Lassen Sie die Person einen Handlauf oder Stock halten.', m: 'Bei jemandem mit einer Beinorthese (einem Hilfsmittel fürs Gehen) legen Sie sie nicht nach eigenem Gutdünken an; folgen Sie genau dem, was eine Reha-Fachkraft gezeigt hat. Halten Sie den Stock in der Hand auf der nicht betroffenen Seite.' },
            { fig: null, t: 'Drängen Sie sie nicht. Der eine Satz „langsam ist gut" ist die beste Sturzprophylaxe.' }
          ]
        },
        {
          id: 'hok2', title: 'Stürze in der Wohnung verhindern',
          steps: [
            { fig: null, t: 'Verringern Sie Gefahren am Boden. Kabel, aufgerollte Matten, herumliegende Zeitungen oder Tüten, kleine Stufen. Die meisten Stürze passieren an solchen Stellen in der Wohnung.' },
            { fig: null, t: 'Setzen Sie auf dem Weg zur Toilette bei Nacht ein Licht in Fußhöhe. Ein kleines Bewegungsmelder-Licht ist praktisch.' },
            { fig: null, t: 'Pantoffeln rutschen leicht weg, weil die Ferse nicht gehalten wird, daher sind Hausschuhe, die die Ferse umschließen, sicherer.' },
            { fig: null, t: 'Ein Handlauf oder stabiles Möbel zum Festhalten an oft passierten Stellen gibt Sicherheit. Achten Sie auch auf die Gewohnheit, sich an wackligen Möbeln festzuhalten.' }
          ],
          points: [
            'Für das Anbringen von Handläufen und das Beseitigen von Stufen lassen sich mitunter öffentliche Zuschüsse nutzen. Fragen Sie eine örtliche Pflegeberatung.'
          ]
        },
        {
          id: 'hok3', title: 'Einen sturzsicheren Körper bauen: Übungen im Sitzen',
          steps: [
            { fig: null, t: 'Sturzprophylaxe ist nicht nur Gehübung. Kleine Übungen im Sitzen, aufgebaut, wachsen „die Kraft, den Fuß zu heben" und „die Kraft, flach zu landen". Erzwingen Sie nichts; auch beim Fernsehen ist es gut.' },
            { fig: null, t: 'Oberschenkelheben. Im Stuhl sitzend heben Sie einen Oberschenkel langsam und senken ihn. Wechselnd. Das hält die Kraft, den Fuß zu heben, und verringert Stolpern.' },
            { fig: null, t: 'Knöchelkreisen. Heben Sie den Fuß etwas und kreisen Sie den Knöchel langsam, in beide Richtungen. Ein geschmeidiger Knöchel hält das Schwanken beim Landen aus.' },
            { fig: null, t: 'Zehen- und Fersenheben. Sitzend halten Sie die Ferse am Boden und heben die Zehen. Dann halten Sie die Zehen unten und heben die Ferse. Die Kraft, die Sohle flach zu landen, tragen diese Muskeln von Schienbein und Wade.' },
            { fig: null, t: 'Die Zahl der Wiederholungen genügt bei „so viele, wie angenehm enden". Ein wenig täglich wirkt besser als viel ab und zu. An Tagen der Ablehnung ist eine Pause in Ordnung.' }
          ],
          points: [
            'Diese Übung braucht kein Gerät und kein Geld. Sie ist die billigste Versicherung, um „sicher und froh weiterzugehen".'
          ]
        }
      ]
    },

    {
      id: 'futon', emoji: '🛌', title: 'Pflege auf dem Futon',
      sub: 'Tipps für die Pflege vom Boden und die Option Bett',
      procs: [
        {
          id: 'futon1', title: 'Wenn Sie auf einem Futon pflegen',
          steps: [
            { fig: null, t: 'Zuerst der wichtige Schluss. Wird die Pflege voraussichtlich andauern, empfehlen wir dringend, ein elektrisches Pflegebett zu leihen oder aufzustellen. Ob Sie auf Hüfthöhe pflegen können, verändert alles, sowohl die Last auf Ihren Rücken als auch die Sicherheit der Person.', c: 'Vielerorts lässt sich solches Hilfsmittel über eine Pflegeversicherung oder Unterstützungsprogramme für einen kleinen monatlichen Beitrag mieten. Fragen Sie eine örtliche Pflegeberatung.' },
            { fig: null, t: 'Dennoch, für alle, die auch heute Nacht auf einem Futon pflegen, hier Tipps für den Boden. Pflege auf einem Futon ist nicht „unmöglich"; nur die Art, den Körper einzusetzen, unterscheidet sich etwas von einem Bett.' },
            { fig: 'kneel_assist', t: 'Beim Helfen vom Boden stehen Sie nicht und beugen sich im Rücken. Ein Knie auf dem Boden, das andere aufgestellt: ein „Kniestand" ist die Grundhaltung. Senken Sie den eigenen Körper und gehen Sie nah an die Person.', c: 'Ein Kniestand wackelt weniger vor und zurück als beide Knie am Boden und lässt mehr Kraft einsetzen.' },
            { fig: null, t: 'Drehen zur Seite und Windelwechsel selbst sind wie im Bett (Knie aufstellen, zu sich kippen). Nur Ihre Haltung unterscheidet sich. Ziehen Sie im Kniestand mit dem ganzen Körper, nicht mit Armkraft.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Das Aufstehen vom Boden geht in der Reihenfolge: auf dem Rücken, auf die Seite, auf alle viere, in den Kniestand, dann Stehen. Statt gerade hochzurichten, ist es für Sie beide viel leichter, die Person „über alle viere" bewegen zu lassen.', c: 'Zur Stütze beim Aufstehen kann stabiles niedriges Möbel (etwa ein solider Stuhl) als Handlauf dienen.' },
            { fig: null, t: 'Die Schwäche eines Futons ist, dass eine druckverteilende Pflegematratze schwer nutzbar ist. Bei jemandem, der zu Druckgeschwüren neigt, halten Sie bewusst das Umlagerungsintervall kürzer. Ein dünner, harter Futon braucht besondere Vorsicht.', link: { cat: 'taii', proc: 'taii2' } },
            { fig: null, t: 'Und noch einmal. Tägliches Futon-Aufheben und Pflege am Boden nutzen Ihren Rücken sicher ab. Solange Sie noch „mir geht es gut" denken, beginnen Sie, sich nach einem Bett zu erkundigen. Ihr Rücken ist das wichtigste Werkzeug der Pflege.' }
          ],
          points: [
            'Futon oder Bett ist nicht besser oder schlechter, sondern eine Wahl des Lebensstils. Aber es macht einen klaren Unterschied für den Verschleiß am Körper der Pflegeperson.',
            'Beim Wechsel zu einem Bett achten Sie auch auf die Gefühle der Person. „Leih mir das für meinen Rücken" statt „für dich" wird oft leichter angenommen.'
          ]
        }
      ]
    },

    {
      id: 'kobetsu', emoji: '🩺', title: 'Bei Krankheit oder Behinderung',
      sub: 'Wenn Sie diese Grundlagen nicht unverändert verwenden dürfen',
      procs: [
        {
          id: 'kobetsu1', title: 'Wenn Sie „persönliche Anleitung" brauchen',
          steps: [
            { fig: null, t: 'Die Anleitungen dieser App sind die „allgemeinen" Grundlagen der Pflege für einen erwachsenen Körper. Doch je nach Krankheit oder Behinderung kann dieselbe Methode Verletzung verursachen. Prüfen Sie ab den nächsten Seiten, ob etwas zutrifft. Trifft eines zu, nehmen Sie diese App nur als Anhalt und lassen Sie sich unbedingt die zur Person passende Art zeigen.' },
            { fig: 'no_pull', t: 'Menschen mit brüchigen Knochen. Schwere Osteoporose, lange Bettruhe, Glasknochenkrankheit und Ähnliches. Sie können schon bei leichter Kraft brechen, daher muss tragende und ziehende Pflege unter persönlicher Anleitung erfolgen.', c: 'Geben Sie niemals Pflege, die an Arm oder Bein zieht, bei niemandem. Besonders gefährlich bei brüchigen Knochen.' },
            { fig: null, t: 'Menschen mit steifen, schwer beweglichen Gelenken (Kontrakturen). Sie zum Strecken zu zwingen schadet Gelenk und Haut. Der „schmerzfrei bewegliche Bereich" ist verschieden, daher ist es am sichersten, sich von einer Fachkraft persönlich anleiten zu lassen.' },
            { fig: null, t: 'Menschen mit einer fortschreitenden Krankheit. Muskeldystrophie, ALS und Ähnliches. Der Körper verändert sich stetig, sodass die gestrige richtige Antwort heute zur Gefahr wird. Überprüfen Sie die Methode regelmäßig mit einer Fachkraft. Es gibt auch Krankheiten, bei denen die Überlastung der Muskeln selbst dem Körper schadet.' },
            { fig: null, t: 'Menschen mit schwerer körperlicher und geistiger Behinderung. Körperverformung, leicht auskugelnde Hüften, schwache Atmung; jeder Körper ist völlig verschieden. Ein Bereich, in dem selbst Fachkräfte individuell zugeschnittene Übung brauchen. Selbstgemachte Methoden sind verboten.' },
            { fig: null, t: 'Menschen mit medizinischen Geräten wie Beatmung, Tracheostoma, Ernährung über Nase oder Magen oder Heim-Sauerstoff. Für Haltung und Bewegung gibt es medizinische Regeln. Die Anweisungen von Ärztin und Pflegekraft haben Vorrang vor allem.' },
            { fig: null, t: 'Menschen, denen eine Ärztin Bewegungseinschränkungen genannt hat. Herzkrankheit, nach einem Bruch, während der Dialyse und so weiter. Klären Sie die Einzelheiten der Einschränkungen, bevor Sie die Pflege festlegen.' },
            { fig: null, t: 'Persönliche Anleitung können Sie bei der Ärztin, einem Pflegedienst, Fachkräften der häuslichen Reha (Physio- und Ergotherapeuten) oder, bei einer Behinderung, einer Fachberatung erbitten. Sagen Sie „bitte zeigen Sie mir, wie es zu Hause geht", und man zeigt Ihnen die zur Person passende Art, im echten Zimmer und Bett.' }
          ],
          points: [
            'Persönliche Anleitung zu holen ist keine Übertreibung. Familien zu zeigen, wie es zu Hause geht, ist ein wichtiger Teil der Arbeit einer Fachkraft.',
            '„Worauf muss ich bei dieser Person achten?" Diese Frage ist die beste Frage.'
          ]
        }
      ]
    }
  ],

  danger: [
    {
      id: 'chissoku', emoji: '🆘', title: 'Ersticken (verlegter Atemweg)', sub: 'Wenn kein Laut kommt, zählt jede Sekunde',
      fig: 'choking_back', cpr: true,
      when: [
        'Plötzliche Not während einer Mahlzeit, kein Laut und kein Husten möglich',
        'Beide Hände am Hals (das Zeichen für Ersticken)',
        'Die Farbe verschlechtert sich rasch'
      ],
      act: [
        'Kann er einen Laut oder Husten, lassen Sie ihn zuerst kräftig husten. Ein Husten ist die stärkste Kraft zum Ausstoßen',
        'Kann er nicht husten, beugen Sie ihn vor und schlagen Sie 4 bis 5 Mal fest mit dem Handballen zwischen die Schulterblätter (Rückenschläge)',
        'Kommt es nicht heraus, umfassen Sie ihn von hinten, ballen Sie eine Faust knapp über dem Nabel und stoßen Sie rasch nach innen und oben (Bauchstöße). Wechseln Sie mit Rückenschlägen ab',
        'Führen Sie bei einer Schwangeren oder einem Säugling keine Bauchstöße durch (nur Rückenschläge)',
        'Suchen Sie nach Bauchstößen stets ärztliche Hilfe. Die inneren Organe müssen auf Verletzung geprüft werden'
      ],
      call: [
        'Die Blockade kommt nicht heraus',
        'Er wird schlaff oder reagiert nicht mehr. Rufen Sie sofort den Notruf. Stellen Sie das Telefon auf Lautsprecher, und man führt Sie an'
      ]
    },
    {
      id: 'goen', emoji: '😮‍💨', title: 'Mehr Verschlucken, evtl. Lungenentzündung', sub: 'Lungenentzündung bei älteren Menschen beginnt leise',
      when: [
        'Verschlucken bei Mahlzeiten hat gegenüber früher zugenommen',
        'Mehr Schleim nach dem Essen. Eine gurgelnde Stimme',
        'Irgendwie wenig Energie. Der Appetit ist gesunken. Leichtes Fieber hält an'
      ],
      act: [
        'Lungenentzündung bei älteren Menschen zeigt oft keinen klaren Husten oder kein hohes Fieber. „Irgendwie anders als sonst" kann das einzige Zeichen sein',
        { t: 'Überprüfen Sie die Esshaltung und die Position des Kinns', link: { cat: 'shokuji', proc: 'shoku1' } },
        'Notieren Sie die Veränderungen. Schon „das Verschlucken hat zugenommen" zu sagen ist für die Ärztin wichtige Information'
      ],
      see: [
        'Wenn zunehmendes Verschlucken oder leichtes Fieber anhält. Sprechen Sie früh mit Ihrer Hausärztin'
      ],
      call: [
        'Das Atmen sieht schwer aus. Atmen mit den Schultern',
        'Lippen oder Gesicht sehen schlecht in der Farbe aus. Er ist schlaff'
      ]
    },
    {
      id: 'tentou', emoji: '🩹', title: 'Ein Sturz oder Fall aus dem Bett', sub: 'Ziehen Sie sie nicht hastig hoch',
      when: [
        'Wenn Sie feststellen, dass sie gestürzt oder gefallen ist (auch während Sie weg waren)'
      ],
      act: [
        'Ziehen Sie sie nicht hastig hoch. Prüfen Sie zuerst, ob sie bei Bewusstsein ist, ob starker Schmerz besteht und ob die Gliedmaßen verformt aussehen',
        'Kann vor starkem Schmerz nicht bewegen, ein Bein sieht falsch geformt oder gedreht aus. Dann kann ein Bruch vorliegen, rufen Sie einen Rettungswagen, ohne sie zu bewegen',
        'Ist keine größere Auffälligkeit da, richten Sie sie langsam auf und beobachten Sie den Tag über',
        'Bei einem Kopfstoß beobachten Sie 24 bis 48 Stunden, auch wenn sie im Moment gesund wirkt. Wer blutverdünnende Medikamente nimmt, braucht besondere Vorsicht'
      ],
      call: [
        'Kein Bewusstsein. Benommen und reagiert seltsam',
        'Nach einem Kopfstoß: Erbrechen, ein Krampfanfall oder verwaschene Sprache',
        'Kann vor starkem Schmerz nicht bewegen. Ein Knochen ist deutlich verformt'
      ]
    },
    {
      id: 'dassui', emoji: '🌡️', title: 'Fieber oder keine Flüssigkeit', sub: 'Ältere Menschen bemerken Durst schwer',
      when: [
        'Ein trockener Mund. Rissige Lippen',
        'Seltener Wasserlassen. Dunklere Farbe',
        'Schlaff. Schläfrig und träge in der Reaktion'
      ],
      act: [
        'Ältere Menschen spüren Durst schwer und werden unbemerkt exsikkiert. Es passiert nicht nur im Sommer, sondern auch im Winter und bei Fieber',
        'Kann sie trinken, geben Sie Flüssigkeit Stück für Stück, oft. Eine orale Rehydratationslösung mit Salz und Zucker ist geeignet',
        'Prüfen Sie auch die Zimmertemperatur. Ist sie in einem heißen Zimmer zu warm angezogen'
      ],
      see: [
        'Fieber hält an. Sie kann nur wenig Flüssigkeit nehmen. Sprechen Sie früh mit Ihrer Hausärztin'
      ],
      call: [
        'Sie nimmt gar keine Flüssigkeit. Sie erbricht gleich nach dem Trinken',
        'Schlaff und reagiert seltsam. Ein Krampfanfall'
      ]
    },
    {
      id: 'jokusou', emoji: '🔴', title: 'Rotes Gesäß oder Fersen (Druckgeschwür)', sub: 'Das Zeichen ist „Rötung, die auf Druck nicht verschwindet"',
      when: [
        'Rötung, wo Knochen hervorstehen (Gesäßmitte, Fersen, Schultern, Hinterkopf)',
        'Rötung, die auf leichten Fingerdruck nicht weiß wird',
        'Eine Blase, sich schälende Haut oder eine dunkle Verfärbung'
      ],
      act: [
        { t: 'Rötung, die auf Druck nicht weiß wird, ist der Beginn eines Druckgeschwürs. Lagern Sie so, dass kein Gewicht auf dieser Stelle ruht', link: { cat: 'taii', proc: 'taii1' } },
        'Massieren, reiben oder trocknen Sie es nicht mit einem Föhn. Das schädigt das Innere der Haut und macht es schlimmer',
        'Bei einer Wunde ist das alte „trockne es, damit es heilt" nicht der heutige Standard. Heutige Wundversorgung beruht auf „mäßig feucht halten". Trocknen Sie sie nicht nach eigenem Ermessen aus',
        'Eitert es jedoch oder besteht Infektionssorge, kann Feuchthalten schaden. Klären Sie die Behandlungsmethode selbst stets mit einer Pflegekraft oder Ärztin',
        'Dünner werden oder weniger essen ist ein großes Warnzeichen für Druckgeschwüre. Die Ernährung wieder aufzubauen ist auch Teil der Behandlung',
        'Bei Rötung in der Windel ist es wichtig, Druckgeschwür von Wundsein zu unterscheiden. Tragen Sie nicht eigenmächtig weiter Salbe auf'
      ],
      see: [
        'Es gibt eine Blase, sich schälende Haut oder dunkle Verfärbung (ein fortgeschrittenes Druckgeschwür). Zeigen Sie es einer Pflegekraft oder Ärztin',
        'Wenn die Rötung nach mehreren Tagen nicht verschwindet'
      ]
    },
    {
      id: 'fast', emoji: '⚡', title: 'Zeichen eines Schlaganfalls (FAST)', sub: 'Nicht abwarten. Es ist ein Rennen gegen die Zeit',
      fig: 'fast_signs',
      when: [
        'Face (Gesicht). Bitten Sie sie zu lächeln, hebt sich ein Mundwinkel nicht',
        'Arm. Werden beide Arme nach vorn gehoben, sinkt einer ab',
        'Speech (Sprache). Verwaschene Sprache. Worte kommen nicht',
        'Trifft auch nur eines zu, ist es ein Rennen gegen die Time (Zeit)'
      ],
      act: [
        'Notieren Sie die Startzeit (die letzte Zeit, in der sie gesund war). Wichtige Information für die Wahl der Behandlung',
        'Lagern Sie sie bequem und drehen Sie das Gesicht zur Seite, falls sie erbrechen könnte',
        'Geben Sie kein Essen, kein Getränk und keine Medizin in den Mund'
      ],
      call: [
        'Bemerken Sie die Zeichen, warten Sie nicht ab; rufen Sie sofort den Notruf. Schlaganfall ist eine Krankheit, bei der „je früher man das Krankenhaus erreicht, desto leichter die Folgeschäden"'
      ]
    },
    {
      id: 'ishiki', emoji: '🚨', title: 'Keine Reaktion beim Ansprechen', sub: 'Im Zweifel rufen, das ist die richtige Antwort',
      cpr: true,
      when: [
        'Keine Reaktion, auch wenn Sie sie ansprechen oder leicht an die Schulter tippen'
      ],
      act: [
        'Rufen Sie sofort den Notruf. Stellen Sie auf Lautsprecher und handeln Sie, während Sie der Anleitung folgen',
        'Prüfen Sie, ob eine normale Atmung da ist (Brust und Bauch etwa 10 Sekunden beobachten)',
        'Ist Atmung da, drehen Sie den Körper auf die Seite und heben das Kinn leicht (damit Erbrochenes nicht die Kehle verlegt)',
        'Ist keine normale Atmung da, folgen Sie der telefonischen Anleitung und beginnen Sie mit der Herzdruckmassage (Reanimation)'
      ],
      call: [
        'Bei diesem Punkt ist „im Zweifel rufen" die richtige Antwort. War es doch nicht so ernst, ist das das beste Ergebnis'
      ]
    }
  ],

  cpr: {
    open: '❤️ Wie man eine Herzdruckmassage macht und der Rhythmus',
    title: 'Herzdruckmassage (Reanimation)',
    intro: 'Das ist für eine Person, die nicht reagiert und nicht normal atmet. Im Zweifel: beginnen.',
    firstTitle: 'Zuallererst',
    first: 'Rufen Sie die örtliche Notrufnummer und stellen Sie auf Lautsprecher. Die Leitstelle sagt Ihnen am Telefon, was zu tun ist. Diese Anleitung hat Vorrang. Nutzen Sie diese Seite als Ergänzung dazu.',
    stepsTitle: 'So geht es',
    steps: [
      'Legen Sie sie auf den Rücken auf einen festen Boden. Auf einem weichen Bett entweicht die Druckkraft',
      'Legen Sie den Ballen einer Hand auf die Brustmitte und die andere Hand darauf',
      'Strecken Sie die Ellbogen und drücken Sie gerade nach unten mit Ihrem Körpergewicht, fest genug, um die Brust etwa 5 cm (2 Zoll) einzudrücken',
      'Bei jedem Druck lösen, bis die Brust ihre ursprüngliche Höhe erreicht. Halten Sie die Hände auf der Brust',
      'In einem Tempo von 100 bis 120 pro Minute mit möglichst wenigen Pausen fortfahren, bis der Rettungswagen kommt',
      'Beatmung ist nicht zwingend. Weiterzudrücken ist das Wichtigste',
      'Wechseln Sie bei Ermüdung ohne Zögern. Kommt ein AED (automatischer Defibrillator), schalten Sie ihn ein und folgen der Sprachansage'
    ],
    metroStart: 'Rhythmus abspielen (110 pro Minute)',
    metroStop: 'Rhythmus stoppen',
    metroHint: 'Drücken Sie einmal pro Ton. Alle 30 Töne ertönt ein höherer Ton',
    note: 'Die Kraft kann eine Rippe brechen, doch das Leben hat Vorrang. Vielerorts ist eine in gutem Glauben und ohne grobe Fahrlässigkeit geleistete Hilfe vor Haftung geschützt (Grundsatz der Hilfeleistung). Bitte zögern Sie nicht.'
  },

  self: [
    {
      id: 'koshicare', emoji: '💪', title: 'Bevor und nachdem Sie sich den Rücken verletzen', sub: 'Ihr Körper ist das wichtigste Werkzeug der Pflege',
      secs: [
        { h: 'Pflege ist „Arbeit für den Rücken"', body: [
          'Selbst bei Pflegekräften sind Rückenschmerzen die häufigste Berufskrankheit. Verletzt sich ein ungeschulter Angehöriger den Rücken, ist das nicht, weil Sie schwach sind. Es ist nur natürlich.',
          'Gerade darum machen Sie die Seite „Den Rücken schützen" im Technik-Tab zur Gewohnheit, jedes Mal.'
        ], ref: { cat: 'koshi', proc: 'koshi1' }},
        { h: 'Mit Umgebung und Hilfsmitteln schützen', body: [
          'Bei einem höhenverstellbaren Bett heben Sie es zur Pflege auf etwa Ihre eigene Hüfthöhe. Pflege in niedriger Position ist eine Hauptursache für Rückenschmerzen.',
          'Es gibt Hilfen, die die Kraft auf Geräte verlagern, etwa Gleittücher und Aufstehgriffe. Sie lassen sich oft über eine Pflegeberatung ausleihen, also fragen Sie.'
        ]},
        { h: 'Wenn Sie sich doch verletzen', body: [
          'Machen Sie nicht weiter, während Sie den Schmerz aushalten. Verschlimmert er sich, können Sie die Pflege selbst nicht fortsetzen.',
          'Starker Schmerz oder Schmerz mit Taubheit im Bein sollte früh untersucht werden.'
        ]}
      ]
    },
    {
      id: 'kakae', emoji: '🌧️', title: 'Tragen Sie es nicht allein', sub: 'Ruhen ist keine Flucht, sondern eine Fähigkeit',
      secs: [
        { h: 'Das sind Zeichen Ihrer Grenze', body: [
          'Nachts nicht schlafen können. Kein Appetit. Zorn flammt bei Kleinigkeiten auf. Tränen kommen. Sie haben die Person angefahren. Sie wünschten, Sie könnten verschwinden.',
          'Trifft auch nur eines zu, ist es nicht, dass „Sie schwach sind", sondern ein Signal Ihres Körpers, dass „Sie Ruhe brauchen".'
        ]},
        { h: 'Ruhen ist keine Flucht, sondern eine Fähigkeit', body: [
          'Um Pflege fortzusetzen, brauchen Sie Zeit weg von ihr. Sich die Pflege abnehmen zu lassen, um zu ruhen, heißt „Verhinderungspflege (Respite)" und ist weltweit selbstverständlich eingerichtet.',
          'Stundenweise Betreuung, Übernachtungsbetreuung, Hilfe, die zu Ihnen nach Hause kommt. Welche Optionen Ihre Gegend hat, sagt Ihnen eine Pflegeberatung.'
        ]},
        { h: 'Es ist in Ordnung, es auszusprechen', body: [
          'Zu sagen „die Pflege ist schwer" heißt nicht, dass Sie die Person nicht mehr mögen.',
          'Ein Ort, um mit Familien in gleicher Lage zu reden (Angehörigengruppen und Treffen), kann eine überraschende Erleichterung sein, allein weil man verstanden wird.'
        ]}
      ]
    },
    {
      id: 'makaseru', emoji: '🤝', title: 'Überlassen Sie Fachkräften, was Sie nicht können', sub: 'Es ist keine Flucht, sondern ein Schutz für Sie beide',
      secs: [
        { h: 'Sie dürfen abgeben, bevor eine Verletzung geschieht', body: [
          'Je mehr eine Familie aus gutem Willen pflegt, desto tiefer macht sie sich nach einem Unfall Vorwürfe. Die Reue „hätte ich es nur nicht erzwungen" ist schwer genug, das Herz zu brechen.',
          'Darum sagt diese App es immer wieder. Überlassen Sie, was schwer ist, was Sie unsicher macht, Fachkräften, bevor ein Unfall geschieht. Das ist keine Niederlage, sondern die klügste Entscheidung, die Sie und die Person schützt.'
        ]},
        { h: 'Familienpflege ist nicht immer das Beste', body: [
          'Sie müssen nicht glauben „Familienpflege ist das Beste". Zum Beispiel finden viele Menschen Toilette oder Baden mit jemand anderem (einer Fachkraft) unbeschwerter als mit der Familie.',
          'Auch für die Würde der Person gibt es gewiss Situationen, in denen die Hand einer Fachkraft besser ist.'
        ]},
        { h: 'So viel Sie abgeben, so sehr werden Sie wieder Familie', body: [
          'Tragen Sie die ganze Pflege, werden Sie ganz zur „Pflegeperson", und Ihre Zeit als Tochter, Sohn, Frau oder Mann verschwindet.',
          'Für jede Stunde, die Sie einer Fachkraft überlassen, können Sie wieder „Familie" werden. Zeit, gemeinsam Tee zu trinken und zu lachen, ist vielleicht wertvoller als jede Pflegetechnik.'
        ]}
      ]
    },

    {
      id: 'soudan', emoji: '🗺️', title: 'Wissen, wohin Sie sich wenden können', sub: 'Bevor Sie in Not sind, lernen Sie einfach die Stellen',
      secs: [
        { h: 'Bevor Sie wirklich feststecken', body: [
          'Der Trick ist, zu lernen, wohin man sich wenden kann, solange man noch gesund ist, statt erst zu suchen, wenn man wirklich feststeckt.'
        ]},
        { h: 'Hier sind Stellen, an die Sie sich wenden können', body: [
          'Eine örtliche allgemeine Beratungsstelle für ältere Menschen (vielerorts gibt es eine Stelle oder ein Zentrum, wo man sich, oft kostenlos, zur Pflege beraten lassen kann).',
          'Eine Pflegeberatung (Ihr Ratgeber, wenn Sie einen Pflegedienst nutzen).',
          'Ihre Hausärztin, ein ambulanter Pflegedienst (Körper und Medizin). Ein Zahnarzt-Hausbesuch, ein Apotheker (Mund und Medikamente).',
          'Für die Pflege eines Angehörigen mit Behinderung kann eine Fachberatung Ihr Ratgeber sein.',
          'Eine Angehörigen- oder Pflegegruppe in gleicher Lage (Herzensangelegenheiten).'
        ]},
        { h: 'Ein Tipp fürs gute Beraten', body: [
          'Es ist in Ordnung, im Zustand „ich weiß nicht einmal, was mich bedrückt" zu bleiben. „Ich habe Mühe, weiß aber nicht, wo ich anfangen soll" ist ein guter erster Satz für eine Beratung.'
        ]},
        { h: 'Die Beratungsstelle „Soyogi", die diese App gemacht hat', body: [
          'Soyogi, eine Beratungsstelle für Pflege und Unterstützung. Es ist der private, gemeinnützige Dienst, der diese App macht.',
          'Wenn es schwer ist, zu öffentlichen Stellen zu gehen, oder Sie nur nachts Zeit haben, können Sie sich anonym online (in einem Metaversum) beraten lassen. Diese Beratung ist ein japanischsprachiger Dienst (1000 Yen pro 30 Minuten; eine Buchung geht reibungsloser).'
        ], link: { href: 'https://soyogi.hp.peraichi.com/top', label: '🍃 Die Soyogi-Website besuchen' }}
      ]
    },
    {
      id: 'kanpeki', emoji: '🍵', title: 'Streben Sie nicht nach Perfektion', sub: 'Mit 60 Punkten durchhalten schlägt mit 100 zusammenzubrechen',
      secs: [
        { h: 'Mit 60 Punkten durchzuhalten ist stärker', body: [
          'Statt jeden Tag perfekte Pflege zu geben und zusammenzubrechen, ist lange durchzuhalten und dabei Ecken abzuschneiden auch für die Person glücklicher.',
          'Fertiggerichte, Einwegartikel, das gelegentliche Auslassen. Alles sind „Fähigkeiten zum Durchhalten".'
        ]},
        { h: 'Vergleichen Sie nicht', body: [
          'Sie müssen sich nicht mit der Pflege eines anderen Haushalts oder der bewundernswerten Pflege im Fernsehen oder in sozialen Medien vergleichen. Die richtige Antwort für Ihr Zuhause ist nur in Ihrem Zuhause.'
        ]},
        { h: '„Ich habe den heutigen Tag geschafft" genügt', body: [
          '„Ich habe irgendwie noch einen Tag geschafft." Das ist eine wirklich große Sache.'
        ]}
      ]
    },
    {
      id: 'kenkou', emoji: '🩺', title: 'Achten Sie auch auf Ihre Gesundheit', sub: 'Damit Sie nicht beide zusammen fallen',
      secs: [
        { h: 'Bricht die Pflegeperson zusammen, fallen Sie beide', body: [
          'Schieben Sie Ihren eigenen Schlaf, Ihre Mahlzeiten und Arztbesuche für chronische Leiden nicht auf. Ihr Körper ist das wichtigste Werkzeug der Pflege.',
          'Lassen Sie Ihre eigenen Vorsorgeuntersuchungen nicht „wegen der Pflege" aus; gehen Sie hin.'
        ]},
        { h: 'Ein kleiner monatlicher Check', body: [
          'Haben Sie zuletzt richtig geschlafen? Lassen Sie Mahlzeiten aus? Halten Sie körperlichen Schmerz aus? Einmal im Monat genügt; fragen Sie sich selbst.'
        ]}
      ]
    }
  ]
};
