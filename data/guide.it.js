'use strict';
/* Guida all'assistenza (Soyogi) - Contenuto italiano.
   Struttura identica a guide.ja.js. Emergenze: numero locale (112 in UE).
   Elementi specifici del Giappone adattati; temperature in C (F tra parentesi). */
window.OUCHI_CONTENT = window.OUCHI_CONTENT || {};
window.OUCHI_CONTENT.it = {

  tech: [
    {
      id: 'koshi', emoji: '🧍', title: 'Proteggere la schiena',
      sub: 'Le basi di un\'assistenza che protegge la schiena, senza sollevare',
      procs: [
        {
          id: 'koshi1', title: 'Non sollevare, non sforzare: 9 basi',
          steps: [
            { fig: 'bm_stance', t: 'Allarga i piedi più delle spalle, piega le ginocchia e abbassa il bacino. Crea prima una base stabile. Questo modo di usare il corpo si chiama «meccanica corporea», la prima cosa che imparano gli assistenti.', c: 'Stare dritti e piegarsi solo con la schiena è la postura che fa più male alla schiena.' },
            { fig: 'bm_close', t: 'Avvicinati il più possibile alla persona. Fai un passo con i piedi e tieni il tuo corpo vicino al suo. Più sei lontano, più il carico sulla tua schiena si moltiplica.' },
            { fig: 'no_twist', t: 'Non torcere il corpo. Per cambiare direzione, non ruotare in vita; sposta i piedi e gira tutto il corpo.' },
            { fig: null, t: 'Non spostare la persona con le sole braccia. Usa i grandi muscoli di cosce e glutei. Immagina di muoverti piegando e distendendo le ginocchia.' },
            { fig: 'slide_move', t: 'Non sollevare, fai scivolare. Muovere in orizzontale richiede molta meno forza. Un telo ad alto scorrimento in commercio, o anche un grande sacchetto di plastica, aiuta.', c: 'Un trucco per proteggere le mani: quando infili una mano sotto il corpo, entra prima con il palmo verso il basso e, una volta abbastanza in profondità, gira il palmo verso l\'alto per attirare la persona. Se entri con il palmo verso l\'alto fin dall\'inizio, un\'unghia può impigliarsi nel lenzuolo o nella traversa e ferirsi. Utile in ogni compito in cui si infila una mano in uno spazio stretto, come rifare il letto.' },
            { fig: 'roll_prep', t: 'Rendi la persona compatta. Incrocia le braccia sul petto e alza le ginocchia, e potrai spostarla con poca forza.' },
            { fig: 'lever_examples', t: 'Usa la leva. Crea un punto d\'appoggio (segnato con un triangolo), come un gomito o un\'anca, prima di muovere. Per mettersi seduti, il gomito è il perno. Al bordo del letto, l\'anca è il perno e il peso delle gambe solleva il tronco.' },
            { fig: 'roll_legs_first', t: 'Rendi la gravità tua alleata. Usa il peso di una parte del corpo come motore. Girando sul fianco, per esempio, lascia cadere prima le ginocchia sollevate (1), e il corpo segue con poca forza, trascinato dal peso delle gambe (2).' },
            { fig: null, t: 'Lascia che la persona faccia ciò che può. Usare la forza che le resta aiuta anche a mantenere forte il suo corpo.', c: 'Il motto: «lascia che la persona usi gli appigli». Sponde del letto, braccioli, corrimano. Il tuo lavoro si alleggerisce e la sua forza si conserva: due piccioni con una fava.' }
          ],
          points: [
            'Un po\' di sforzo eccessivo «ogni volta» è ciò che rovina la schiena. Prendi l\'abitudine di controllare la postura ogni volta.',
            'Se ti sembra impossibile da solo, fallo in due, o affidati ad attrezzatura o a un professionista. Non è una sconfitta, è la decisione giusta.'
          ]
        }
      ]
    },

    {
      id: 'seiketsu', emoji: '🧼', title: 'Basi dell\'igiene',
      sub: 'Unghie, lavaggio delle mani, mascherina. Semplice ma la protezione più forte',
      procs: [
        {
          id: 'seiketsu1', title: 'Unghie, mani, mascherina: proteggere entrambi',
          steps: [
            { fig: null, t: 'Questa è la base di ogni assistenza. Non è appariscente, ma è una tecnica di primo livello che protegge te e la persona da lesioni e infezioni.' },
            { fig: null, t: 'Tieni le tue unghie corte, con gli angoli arrotondati. Le unghie lunghe graffiano la pelle della persona durante l\'assistenza, e si impigliano in lenzuola o vestiti e feriscono te.', c: 'La pelle delle persone anziane o debilitate è sottile, e anche un piccolo graffio può portare a un\'infezione.' },
            { fig: null, t: 'Lo spazio sotto le unghie accumula sporco e residui. Se restano lunghe, diventano un focolaio d\'infezione a ogni pasto, cambio e medicazione. Tenere le unghie corte è già prevenzione delle infezioni.' },
            { fig: null, t: 'Lava le mani con il sapone prima e dopo l\'assistenza. Tra le dita, intorno alle unghie, fino ai polsi. Soprattutto «dopo un cambio» e «prima di toccare il cibo», ogni volta.', c: 'Quando non puoi raggiungere un lavandino, il gel igienizzante è pratico. Ma lo sporco visibile va lavato con acqua; il gel non lo rimuove.' },
            { fig: null, t: 'Per i cambi e il contatto con le ferite, usa guanti monouso. Per toglierli, arrotola il lato sporco all\'interno, gettali, e poi lava comunque le mani.' },
            { fig: null, t: 'Una mascherina non è uno strumento solo per i giorni di malattia; è equipaggiamento di base durante l\'assistenza. Tutti portiamo germi e virus senza alcun sintomo. Ciò che a te sano non fa nulla può essere letale per una persona debilitata.', c: 'Indossala soprattutto per l\'assistenza a viso ravvicinato (pasti, igiene orale, cambi, medicazioni). «Solo quando ti senti male» non protegge abbastanza.' },
            { fig: null, t: 'Tieni corte anche le unghie della persona. Evita che si graffi da sola e che uno di voi si ferisca durante l\'assistenza.', c: 'Non tagliare a casa un\'unghia incarnita, deformata, spessa e dura (fungo dell\'unghia) né l\'unghia di chi ha il diabete. Un tagliaunghie comune spesso non ce la fa; servono strumenti e abilità, ed è facile ferirsi. Lascialo a un medico, o a un infermiere su indicazione medica.' },
            { fig: null, t: '«Tagliare le unghie. Lavare le mani. Mettere la mascherina.» Costa quasi nulla, chiunque può iniziare oggi, e l\'effetto è enorme. Fanne un\'abitudine.' }
          ],
          points: [
            'Se la tua salute crolla, l\'assistenza si ferma. Proteggere il tuo corpo è lo stesso che proteggere la persona assistita.'
          ]
        }
      ]
    },

    {
      id: 'taii', emoji: '🛏️', title: 'Girare sul fianco (cambio di posizione)',
      sub: 'Come cambiare posizione per prevenire le piaghe da decubito',
      procs: [
        {
          id: 'taii1', title: 'Dalla posizione supina a quella su un fianco',
          steps: [
            { fig: null, t: 'Di\' sempre ad alta voce: «Ora la cambio di posizione». Essere toccati all\'improvviso spaventa la persona e irrigidisce il corpo, rendendo difficile a entrambi.', c: 'Se le ossa sono fragili, le articolazioni rigide, o c\'è una malattia progressiva, non usare questa procedura così com\'è. Dettagli nella pagina sotto.', link: { cat: 'kobetsu', proc: 'kobetsu1' } },
            { fig: 'roll_prep', t: 'Incrocia le braccia sul petto e alza entrambe le ginocchia. Con il corpo compatto, puoi girarlo con poca forza.', m: 'Se una paralisi impedisce di incrociare le braccia, basta posare la mano colpita sul ventre. Non forzare a incrociarsi un braccio rigido (con contrattura).' },
            { fig: 'shift_parts', t: 'Fai girare il viso verso il lato in cui girerai. Sposta il corpo in anticipo verso il bordo opposto del letto, così che dopo aver girato resti al centro.', c: 'Sposta il corpo poco a poco, in ordine: testa, poi spalle e schiena, poi anche, poi gambe. Il trucco è non muovere tutto insieme.' },
            { fig: 'roll_pull', t: 'Metti le mani sul ginocchio e sulla spalla (o l\'anca) e inclina dolcemente verso di te. Attirare verso sé è più sicuro e richiede meno forza che spingere.', c: 'Girando verso un lato senza sponda, fai molta attenzione alle cadute.', m: 'Prima di girare, posa il braccio colpito sul ventre perché non resti intrappolato sotto il corpo. Stare sul lato colpito rende difficile alla persona notare dolore o pressione, quindi tienilo il più breve possibile.' },
            { fig: 'roll_legs_first', t: 'Se ti manca la forza per girarla in una volta, lascia cadere verso di te prima solo le ginocchia sollevate (1). Il peso delle gambe gira per primo, e anca e tronco seguono con poca forza, trascinati da quel peso (2).', c: 'Il trucco è rendere il peso della persona e la gravità tuoi alleati. Poiché non dipende dalla forza delle braccia, aiuta soprattutto quando assiste una donna o una persona anziana.' },
            { fig: null, t: 'Se la persona può muoversi anche solo un po\', falle afferrare la sponda del letto sul lato verso cui gira. Anche una piccola trazione alleggerisce molto il tuo lavoro, e conserva la forza del suo braccio: una piccola riabilitazione quotidiana.', c: 'Controlla prima che la sponda sia ben fissa. Una sponda solo incastrata può staccarsi se si tira forte.' },
            { fig: 'roll_cushion', t: 'Metti un cuscino contro la schiena per stabilizzare la posizione. Piega leggermente il ginocchio superiore e metti un cuscino anche tra le ginocchia.' },
            { fig: null, t: 'Controlla infine che i punti ossei come orecchie, spalle, gomiti, ossa delle anche e caviglie non premano forte contro qualcosa.' }
          ],
          points: [
            'Non girarla tirando un braccio o i pantaloni; danneggia pelle e articolazioni. Sostieni il tronco (spalle e anche) per girare.',
            'Controlla anche che non restino lenzuola o vestiti stropicciati sotto il corpo. Le pieghe causano piaghe da decubito.'
          ]
        },
        {
          id: 'taii2', title: 'Prevenire le piaghe: nutrizione, tempo, luogo',
          steps: [
            { fig: 'nutrition_cushion', t: 'In verità, la base più grande della prevenzione delle piaghe non è la tecnica di cambio posizione ma la «nutrizione». Una persona magra e ossuta sviluppa piaghe prima, nelle stesse condizioni. Cura i pasti e lo stato nutrizionale per conservare il cuscino di carne che ammortizza.', c: 'Un appetito che cala è già un segnale d\'allarme di piaga. Parla di nutrizione con un medico o un professionista della nutrizione.' },
            { fig: 'pressure_points', t: 'Le piaghe si formano facilmente dove le ossa sporgono e premono sul letto. La nuca, le spalle, i gomiti, il centro dei glutei e i talloni sono tipici.' },
            { fig: null, t: 'Come riferimento, non lasciarla più di 2 o 3 ore nella stessa posizione. Con un materasso che distribuisce la pressione, o a seconda delle condizioni, l\'intervallo giusto cambia.', c: 'Stabilisci intervallo e metodo insieme a un professionista come un infermiere o un coordinatore dell\'assistenza, per stare tranquillo.' },
            { fig: null, t: 'Se trovi un rossore su glutei o talloni, premi delicatamente con un dito. Un rossore che non diventa bianco è l\'inizio di una piaga. Posiziona la persona in modo che nessun peso gravi su quel punto.', c: 'Non sfregare né massaggiare la zona rossa. La peggiora.', m: 'Il lato colpito ha la sensibilità ridotta, e la persona non nota il dolore. Controlla la pelle del lato colpito particolarmente spesso.' },
            { fig: 'heel_float', t: 'Per chi ha i talloni che arrossiscono facilmente, metti un cuscino sotto i polpacci per sollevare un po\' i talloni.' },
            { fig: null, t: 'La capacità di un materasso o cuscino di «prevenire le piaghe» varia enormemente da prodotto a prodotto. Se compare un rossore con l\'uso, l\'attrezzatura forse non è adatta. Vale la pena rivederla o provarne un\'altra.', c: 'Il modo più veloce per trovare i punti di prevenzione adatti è chiedere a un medico, un infermiere o un professionista degli ausili.' }
          ],
          points: [
            'Anche se una piaga si forma, non incolpatevi con «la nostra assistenza è stata scadente». Corporatura, costituzione e malattie creano fin dall\'inizio grandi differenze nella facilità con cui si formano.',
            'Ciò che conta non è la colpa, ma parlare presto con un professionista e passare a una prevenzione adatta alla persona.'
          ]
        }
      ]
    },

    {
      id: 'oki', emoji: '🌅', title: 'Mettersi seduti',
      sub: 'Fino a sedersi sul bordo del letto',
      procs: [
        {
          id: 'oki1', title: 'Far sedere sul bordo del letto',
          steps: [
            { fig: null, t: 'Dopo una parola per lei, gira prima il corpo sul fianco. Incrocia le braccia sul petto, piega le ginocchia, metti le mani sul ginocchio e sulla spalla e inclina dolcemente verso di te. Non dimenticare di spostare il corpo verso il bordo del letto sul lato da cui si alzerà.', m: 'In caso di paralisi, in linea di massima ci si mette seduti con il lato forte in basso, perché ci si può appoggiare sul gomito del lato forte.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Ancora sul fianco, fai scendere entrambe le gambe dal ginocchio oltre il bordo del letto.' },
            { fig: 'situp_seq', t: 'Sostieni spalle e anche, usa il peso delle gambe e solleva il tronco ad arco (figura 1-4). Con il gomito come perno (triangolo) e spostando l\'appoggio dal gomito al palmo, si solleva con molta meno forza che tirando dritto verso l\'alto.', c: 'Con un letto elettrico dallo schienale reclinabile, alzare un po\' prima la schiena facilita ancora. Se c\'è una sponda o una maniglia, falla afferrare alla persona. Ma per caricare il peso alzandosi, usa solo una «maniglia d\'appoggio (barra da letto)» fissa.' },
            { fig: 'sit_edge', t: 'Una volta seduta, fai in modo che l\'intera pianta dei piedi appoggi piatta a terra. Con un letto regolabile in altezza, impostalo perché i piedi raggiungano il pavimento.' },
            { fig: null, t: 'Non lasciarla subito. Appena messa seduta, la pressione può calare e causare capogiro. Sostienila un momento e osserva colore e stato.', c: 'Colore pallido, sguardo confuso, sudore freddo. Allora non insistere; sdraiala di nuovo per un po\'.' }
          ],
          points: [
            'Se mettersi seduti resta difficile giorno dopo giorno, ausili come un letto elettrico o corrimano spesso lo risolvono. Chiedi a un professionista degli ausili o a un servizio di consulenza per l\'assistenza.'
          ]
        }
      ]
    },

    {
      id: 'ijou', emoji: '🪑', title: 'Alzarsi e trasferimenti',
      sub: 'Dal letto alla carrozzina. Dove avvengono più incidenti',
      procs: [
        {
          id: 'tachi1', title: 'Aiutare ad alzarsi',
          steps: [
            { fig: 'stand_prep', t: 'Falla scivolare in avanti sul sedile. Sposta i glutei verso il bordo anteriore del sedile.' },
            { fig: 'stand_prep', t: 'Falle arretrare un po\' i piedi. Con le caviglie dietro le ginocchia, alzarsi è più facile.', c: 'Attenzione a non arretrare troppo. Se i piedi vanno troppo indietro, può sbilanciarsi in avanti al momento di alzarsi.' },
            { fig: null, t: 'Con una sedia con braccioli, falle spingere sui braccioli. Spingere è più facile per alzarsi che tirare, e alleggerisce anche te. Spingere con le proprie braccia è già una piccola riabilitazione quotidiana che conserva la forza muscolare.' },
            { fig: 'stand_bow', t: 'Falla inclinare in avanti «come per un inchino». Quando la testa va avanti e in basso, i glutei si sollevano da soli. Non tirare dritto verso l\'alto; blocca il movimento naturale e rende più difficile alzarsi.', c: 'Questo è il punto pericoloso. Se l\'inchino è troppo profondo, cade dritta in avanti. Un incidente classico anche tra gli assistenti. Inclina solo «il minimo perché i glutei si sollevino». Mettiti di sbieco davanti, in posizione per prenderla, con cautela e lentezza.', m: 'Le persone con paralisi, o debilitate da un lungo allettamento, possono non fermare il proprio slancio in avanti. Va\' soprattutto piano, poco a poco. Non abbassare la guardia.' },
            { fig: 'stand_assist', t: 'Passa il braccio attorno all\'anca della persona e alzatevi insieme al ritmo del movimento in avanti. Piega le tue ginocchia e abbassa il bacino, e non ti farai male alla schiena.', m: 'Per chi ha il ginocchio colpito che cede facilmente, appoggiare il tuo ginocchio contro il suo ginocchio colpito lo stabilizza (evita il cedimento).', link: { cat: 'koshi', proc: 'koshi1' } },
            { fig: null, t: 'Appena alzata, le ginocchia possono cedere. Continua a sostenere finché non hai confermato che sta in piedi saldamente.' }
          ],
          points: [
            'L\'esempio per eccellenza di «un incidente che si evita solo conoscendolo» è la caduta in avanti. Fa\' questa procedura con cautela, lentamente, senza abbassare la guardia.',
            'Se temi di non poter sostenere un ginocchio che cede, non forzare. Qui entrano i corrimano d\'appoggio e altri ausili. Non portarlo da solo; parla con un professionista.'
          ]
        },
        {
          id: 'ijou1', title: 'Dal letto alla carrozzina',
          steps: [
            { fig: 'transfer_angle', t: 'Metti la carrozzina sul lato più facile della persona (il lato forte se c\'è paralisi), a un angolo di 20-30 gradi rispetto al letto.' },
            { fig: null, t: 'Inserisci entrambi i freni, e alza o togli i poggiapiedi.', c: 'Dimenticare i freni è la prima causa di incidenti nei trasferimenti. Prendi l\'abitudine di indicare col dito e controllare ogni volta.' },
            { fig: null, t: 'Falla sedere sul bordo del letto, arretrare i piedi e scivolare in avanti sul sedile.' },
            { fig: null, t: 'Falla alzare inclinata in avanti «come per un inchino». Scivolare avanti, arretrare i piedi prima. Vedi la pagina sotto per i dettagli.', link: { cat: 'ijou', proc: 'tachi1' } },
            { fig: 'pivot_steps', t: 'Una volta in piedi, ruota sui piedi, a piccoli passi, lentamente. Non torcere solo il corpo.' },
            { fig: null, t: 'Farle afferrare il bracciolo lontano della carrozzina fa girare il corpo con naturalezza. Abbassa i fianchi lentamente verso il sedile.', c: 'Il motto è «lascia che la persona usi gli appigli». Ogni volta che usa il bracciolo, si conserva la forza delle braccia e del corpo.' },
            { fig: 'sit_deep', t: 'Falla sedere di nuovo bene in fondo e metti i piedi sui poggiapiedi. Seduta in avanti, scivola giù, cosa pericolosa. La pagina successiva spiega come risistemarla correttamente.', link: { cat: 'ijou', proc: 'suwari1' } }
          ],
          points: [
            'Se senti anche solo un po\' «forse non riesco a sostenerla», non farlo da solo.',
            'Il trasferimento di chi non può stare in piedi da solo (assistenza totale) è un altro metodo. Fa\' che un professionista ti veda di persona e ti insegni il modo adatto alla persona.'
          ]
        },
        {
          id: 'suwari1', title: 'Risistemarsi in fondo alla carrozzina',
          steps: [
            { fig: 'sit_deep', t: 'Perché è importante. Seduta in avanti, il corpo scivola giù poco a poco, e pressione e attrito si concentrano al centro dei glutei (l\'osso sacro). In questa postura, le piaghe si formano già solo stando seduti.' },
            { fig: null, t: 'Controlla prima entrambi i freni. Togli i piedi dai poggiapiedi e appoggia le piante piatte a terra.' },
            { fig: null, t: 'Fa\' che la persona si inclini in avanti «come per un inchino». I glutei si sollevano un po\'. Farle spingere sui braccioli li solleva più facilmente.' },
            { fig: null, t: 'Passa dietro di lei e, nell\'istante in cui i glutei si sollevano, sostieni il bacino (attorno alle ossa delle anche) con entrambe le mani e guidalo dolcemente all\'indietro. È una sensazione di scivolare, non di sollevare.', c: 'Infilare le mani sotto le ascelle da dietro per issarla può ferire le spalle, quindi a casa non è consigliato.' },
            { fig: null, t: 'Se inclinarsi in avanti le è difficile, fallo da un lato e dall\'altro, poco a poco. Inclina il corpo da un lato, manda indietro il gluteo sollevato, poi lo stesso dall\'altro lato. Questo «camminare sui glutei» la fa sedere un po\' più in fondo ogni volta.' },
            { fig: null, t: 'Controlla infine. Se non c\'è spazio tra la zona lombare e lo schienale e il bacino è eretto, va bene. Rimetti i piedi sui poggiapiedi.' },
            { fig: null, t: 'Un\'altra cosa: sistema anche i vestiti in disordine. Ci sono in realtà moltissime persone i cui pantaloni o gonna sono scivolati, lasciando in vista biancheria o pannolone. Una carrozzina la porta fuori casa. Così, la persona prova vergogna.', c: 'La persona spesso non può sistemarlo da sola né osa dirlo. Notarlo e sistemarlo con discrezione è compito dell\'assistente. Un\'esperienza imbarazzante può diventare motivo di «non voglio più uscire». Un aspetto curato è un piccolo passo in più che protegge la persona e te dagli sguardi altrui.' }
          ],
          points: [
            'Risistemarsi capita più volte al giorno. Quando pensi «è scivolata», fallo, spesso. È già prevenzione delle piaghe.',
            'La postura e i vestiti. Solo quando entrambi sono a posto, la risistemazione è «completa».'
          ]
        },
        {
          id: 'kuruma1', title: 'Spostarsi in carrozzina',
          steps: [
            { fig: null, t: 'Prima di muoverti, controlla per prima cosa. I piedi sono sui poggiapiedi? Mani, vestiti o coperta sono liberi dalle ruote? Muoversi con qualcosa incastrato può portare a una lesione o a un incidente in pochi metri.' },
            { fig: null, t: 'Una volta controllato, di\' «Ci muoviamo» prima di partire. Partire all\'improvviso la spaventa.' },
            { fig: 'curb_tip', t: 'Per un piccolo gradino, premi la leva di ribaltamento posteriore per sollevare le ruote anteriori e sali frontalmente. Per scendere, va\' all\'indietro e abbassa lentamente dalle ruote posteriori.', c: 'Posizione e presenza della leva variano da carrozzina a carrozzina. Verifica sul modello reale quando la prendi in prestito o la compri.' },
            { fig: null, t: 'Una discesa ripida è di per sé una «via da evitare». Se c\'è un ascensore o una rampa dolce, sceglilo anche se è un giro più lungo.', c: 'Se devi scendere, va\' all\'indietro e piano. Ma il peso combinato di persona e carrozzina è più di quanto immagini. Cadere insieme perché non riesci a sostenere è un incidente grave. Che tu non cada conta altrettanto. Al minimo dubbio, chiama aiuto.' },
            { fig: null, t: 'Quando ti fermi o ti allontani, inserisci sempre i freni. E allontanandoti, di\' sempre «Aspetti qui. Torno subito». Gli incidenti in cui la persona cerca di alzarsi mentre non ci sei sono molto frequenti.', c: 'Capire se «aspetti qui» arriva alla persona richiede giudizio. Al minimo dubbio, evita del tutto di lasciarla seduta in carrozzina e allontanarti.' }
          ]
        }
      ]
    },

    {
      id: 'omutsu', emoji: '🚻', title: 'Cambiare il pannolone',
      sub: 'In fretta, al caldo, proteggendo la pelle',
      procs: [
        {
          id: 'omu1', title: 'Cambiare un pannolone con adesivi',
          steps: [
            { fig: null, t: 'Prima di iniziare, raduna tutto a portata di mano. Un pannolone nuovo, un\'assorbente, salviette, guanti monouso e un sacchetto per il pannolone sporco. Per non doverti mai allontanare a metà.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: null, t: 'Dopo una parola per lei, abbassa i pantaloni e stacca gli adesivi del pannolone. Tieni tutto, tranne la zona necessaria, coperto con un asciugamano o una coperta.', link: { cat: 'omutsu', proc: 'omu2' } },
            { fig: null, t: 'Gira il corpo sul fianco, arrotola il pannolone sporco all\'interno e infilalo leggermente sotto il corpo. Girare sul fianco si fa come nel cambio posizione.', c: 'Se c\'è una sponda del letto, farla afferrare mentre è sul fianco stabilizza la posizione, è più facile per entrambi e aiuta a conservare la sua forza. Ma non forzare. Se la persona è disposta, basta.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Pulisci da davanti a dietro (dal lato pancia al lato glutei). Nelle donne in particolare, questo verso è importante per prevenire le infezioni urinarie.', c: 'Quando è molto sporco, sciacquare con acqua tiepida pulisce meglio che strofinare ed è più delicato sulla pelle.' },
            { fig: null, t: 'Arrotola metà del pannolone nuovo e infilalo sotto il corpo, rimettila supina, poi tiralo dall\'altro lato e stendilo. Il centro del pannolone va al centro del corpo.' },
            { fig: 'tape_cross', t: 'Attacca gli adesivi incrociati: quelli in basso un po\' verso l\'alto, quelli in alto un po\' verso il basso. Lascia spazio per uno o due dita attorno al ventre.' },
            { fig: null, t: 'Passa un dito lungo le barriere antifuoriuscita (i bordi rialzati alle aperture delle gambe) e sollevale verso l\'esterno. Se restano verso l\'interno, causano fuoriuscite.' },
            { fig: null, t: 'Ogni volta, controlla in fretta la pelle: rossore, irritazione o lesioni. Se qualcosa ti preoccupa, parla presto con un professionista.', m: 'Se le contratture rendono difficile aprire le gambe, non forzarle. Lavora nel raggio senza dolore, ed è più sicuro che il metodo te lo mostri un professionista che segue la persona.' }
          ],
          points: [
            { t: 'Creare un\'atmosfera in cui non deve mai dire «scusa» è la più grande abilità. Come creare quell\'atmosfera cambia da persona a persona. È nella pagina successiva.', link: { cat: 'omutsu', proc: 'omu2' } },
            'Dopo un\'evacuazione, cambiare prima possibile invece di aspettare protegge la pelle.',
            'Quando le fuoriuscite continuano, più della posizione, è il pannolone o l\'assorbente che non si adatta al corpo. Chiedi a un negozio o a un professionista di rivedere taglia o tipo.'
          ]
        },
        {
          id: 'omu2', title: 'Il cambio e il cuore',
          steps: [
            { fig: null, t: 'L\'assistenza all\'evacuazione mostra la differenza di «cuore» più che quella di abilità. Anche se sei rapido e preciso, se la persona si sente umiliata, non è la risposta giusta. Ed è la sola assistenza senza una «forma corretta» fissa, con le maggiori differenze tra le persone.' },
            { fig: null, t: 'Ad alcuni conviene farlo con semplicità, come una qualunque faccenda domestica. Non farne un dramma rende la vergogna minima.' },
            { fig: null, t: 'Ad altri conviene di più chiacchierare un po\'. L\'atmosfera di «questo non è né disturbo né peso» arriva, e il senso di scusa si dissolve.', c: 'Cosa conviene, la persona te lo dirà. La sua espressione, quanto parla, la tensione del corpo, quante volte dice «scusa». Con un modo che non le conviene, questo aumenta. Quando aumenta, è segno di cambiare approccio.' },
            { fig: null, t: 'Qualunque sia lo stile, c\'è un «non fare» comune. Non fare smorfie. Non commentare l\'odore o la quantità. Non mettere fretta. Non rimproverare gli incidenti. Questo è uguale per tutti.' },
            { fig: null, t: 'Decidere in anticipo cosa rispondere quando dice «scusa» aiuta. «Siamo pari.» «Lei mi ha cambiato quando ero piccolo.» Ci sono parole che funzionano proprio perché siete famiglia.', c: 'Ma una battuta può ferire alcuni. Se ride di gusto è la tua maestra; osserva la reazione della persona.' }
          ],
          points: [
            'Un pannolone non è sempre «l\'unica opzione». Se resta un modo di andare in bagno con la toilette o una comoda, questo protegge la dignità e la forza del corpo. Se ricorrere o no ai pannoloni è un tema importante che vale la pena discutere con un professionista.',
            'I gesti delle mani si padroneggiano in una o due settimane. Unire i cuori è un tentativo che continua per sempre. Ci saranno giorni in cui non va bene, ed è naturale.'
          ]
        }
      ]
    },

    {
      id: 'shokuji', emoji: '🍚', title: 'Aiutare a mangiare',
      sub: 'Una postura che evita di andare di traverso e un ritmo calmo',
      procs: [
        {
          id: 'shoku1', title: 'Postura senza andare di traverso e come aiutare',
          steps: [
            { fig: null, t: 'Inizia solo quando è ben sveglia. Mangiare assonnati porta il cibo nella trachea (aspirazione).', c: 'Lava le mani prima di toccare il cibo. Unghie e mani pulite proteggono direttamente la persona dalle infezioni.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: 'meal_posture', t: 'Su una sedia, falla sedere bene in fondo, con le piante a terra. Un po\' inclinata in avanti, con il mento raccolto, è la postura che meno favorisce l\'andare di traverso.', c: 'Quando il mento si alza, la trachea si apre dritta e il cibo vi entra più facilmente. Piegare la testa all\'indietro e versare il cibo è pericoloso.' },
            { fig: 'bed_up', t: 'A letto, solleva il tronco (almeno 30 gradi, idealmente 60-90). Metti un cuscino dietro la testa per raccogliere il mento.' },
            { fig: null, t: 'Tieni ogni boccone piccolo. Porta il cucchiaio dal basso e conferma la deglutizione prima del boccone successivo. Quando il pomo d\'Adamo sale e scende, è il segno di una deglutizione.', m: 'In caso di paralisi, porta il cucchiaio all\'angolo della bocca sul lato forte. Sul lato colpito, il cibo si mastica male e resta senza che se ne accorga.' },
            { fig: null, t: 'Aiutare in tutto non è la sola risposta giusta. Tu aiuti con la minestra, e la persona mangia i piatti solidi con posate. Una forma «a metà» è anch\'essa valida. Più mangia da sola, più si conservano la sua forza e il piacere di mangiare.' },
            { fig: null, t: 'Anche quando aiuti, se riesci a comunicare, lasciale avere ciò che vuole, nell\'ordine che vuole. Ma il modo di chiedere cambia. Alcuni vogliono ogni boccone indicato, altri dirti a grandi linee e lasciartelo, altri lasciare tutto.', c: 'Ad alcuni dà fastidio «essere interrogati ogni volta». Quale modo di chiedere è piacevole, solo la persona può deciderlo. Osserva la sua reazione e trova la forma di quella persona.' },
            { fig: null, t: 'Per chi va facilmente di traverso con acqua o tè, c\'è un modo di addensare. La densità che conviene cambia, quindi consulta un logopedista (specialista della deglutizione) o un medico o infermiere.' },
            { fig: null, t: 'Da 30 minuti a un\'ora dopo mangiato, tieni il corpo eretto. Sdraiarsi subito può far andare di traverso ciò che risale dallo stomaco.' },
            { fig: null, t: 'Controlla infine che non resti cibo in bocca. Tende a restare nelle guance e sul palato.', m: 'In caso di paralisi, resta soprattutto nella guancia sul lato colpito. Nemmeno la persona se ne accorge, quindi guarda apposta.' }
          ],
          points: [
            { t: 'Più episodi di traverso, pasti che durano troppo. Può non essere un aiuto scadente ma un segno che la forza di deglutire è cambiata. È importante, perciò è nella pagina successiva.', link: { cat: 'shokuji', proc: 'shoku2' } }
          ],
          ng: [
            'Mettere il cibo chiedendo una risposta (parlare apre la trachea)',
            'Metterle fretta. Fare bocconi grandi',
            'Piegare la testa all\'indietro e versare'
          ]
        },
        {
          id: 'shoku2', title: 'Quando il mangiare inizia a rallentare',
          steps: [
            { fig: null, t: 'Aiutare a mangiare non è solo un compito. Il pasto quotidiano è il controllo di salute più vicino e, per la persona, il piacere più grande. Proprio per questo «sta rallentando» è un segno importante da non trascurare.' },
            { fig: null, t: 'Pensa prima alle cause passeggere. Malessere, stitichezza, un\'afta, protesi mal adattata, umore basso. Se qualcosa combacia e si riprende in qualche giorno, non serve preoccuparsi troppo.' },
            { fig: null, t: 'Ciò a cui prestare attenzione è quando dura a lungo. Non si trova né malattia del corpo né ragione dell\'animo, eppure ci vuole tempo, va di traverso, trattiene il cibo in bocca. Può essere segno che l\'intero insieme «masticare, spingere indietro con la lingua, sincronizzare la deglutizione» si sta indebolendo. Accade anche quando una demenza cambia il funzionamento del cervello.' },
            { fig: null, t: 'Questo giudizio è in realtà un campo difficile anche per medici e infermieri. Uno specialista della deglutizione (logopedista) spesso se ne accorge, quindi di\' chiaramente al tuo medico o servizio di consulenza: «voglio che uno specialista della deglutizione la valuti».', c: 'Tramite la riabilitazione a domicilio o un ambulatorio ospedaliero, a volte è possibile un esame o una valutazione della deglutizione.' },
            { fig: null, t: 'Ed ecco la cosa più importante, detta con onestà. «Finché può mangiare per bocca» non è sempre l\'obiettivo. Per chi ha la deglutizione indebolita, il mangiare stesso raggiunge uno stadio a rischio di polmonite o soffocamento. Allora «per bocca anche a forza» non può dirsi la risposta giusta.' },
            { fig: null, t: 'Oltre a ciò esistono opzioni come nutrirsi dal naso o dallo stomaco (nutrizione con sonda, gastrostomia) o una flebo. Sono parole forse dolorose solo a sentirle. Ma questo non è «arrendersi»; è assistenza medica per proteggere la persona da polmonite e soffocamento.', c: 'Discutine bene con il medico, con cautela. Ma è anche una situazione in cui è meglio non rimandare troppo la decisione. Una decisione tardiva può mettere alle strette la persona e te.' }
          ],
          points: [
            'Questo giudizio non è da portare alla famiglia da sola. Anzi, è un campo che la famiglia non deve decidere da sola. Sempre insieme a un professionista.',
            'Il tuo notare «ultimamente il suo modo di mangiare è cambiato», come chi guarda più da vicino ogni giorno, è proprio l\'informazione di cui un professionista ha più bisogno.'
          ]
        }
      ]
    },

    {
      id: 'koukuu', emoji: '🦷', title: 'Igiene orale',
      sub: 'Prevenire la polmonite comincia dalla bocca',
      procs: [
        {
          id: 'kou1', title: 'Lavaggio dei denti e cura della bocca',
          steps: [
            { fig: null, t: 'Tenere la bocca pulita è la migliore prevenzione della polmonite (polmonite ab ingestis) nelle persone anziane. Fanne un\'abitudine dopo i pasti.' },
            { fig: null, t: 'Se la persona è disposta, falle lavare i denti da sola. È già una buona riabilitazione. Ma spesso non li lava abbastanza bene, quindi il controllo finale è compito tuo.', c: 'Usa parole che non rendano sgradevole il controllo finale. Qualcosa come «Ha lavato bene. Mi mostri solo il fondo alla fine» entra meglio, riconoscendo prima lo sforzo.' },
            { fig: null, t: 'La postura è la stessa del mangiare. Un po\' inclinata in avanti, con il mento raccolto. Perché acqua e sporco non scendano in gola durante la cura.', link: { cat: 'shokuji', proc: 'shoku1' } },
            { fig: null, t: 'Togli le protesi e puliscile con uno spazzolino per protesi. Non usare dentifricio normale; l\'abrasivo graffia le protesi. La notte, toglile e mettile in acqua o in un detergente.' },
            { fig: null, t: 'Per chi non può sciacquarsi, pulisci con delicatezza con uno spazzolino-spugna quasi senza acqua, o con una garza umida avvolta a un dito.' },
            { fig: null, t: 'Pulisci con delicatezza non solo i denti ma anche la lingua, il palato e l\'interno delle guance. Non provare a togliere lo sporco incrostato in una volta.', m: 'In caso di paralisi, lo sporco si accumula tra guancia e gengiva sul lato colpito, sii attento lì e delicato.' },
            { fig: null, t: 'Va bene se non è perfetto ogni volta. Ma tieni il minimo prima di sdraiarsi. Togliere le protesi. Rimuovere il cibo rimasto in bocca. Solo questi due, ogni sera senza eccezioni.', c: 'Nel sonno, ciò che resta in bocca può scendere inavvertitamente nella trachea, e una polmonite comincia in silenzio. Invisibile ma letale, il pericolo più grande nascosto nell\'igiene orale.' },
            { fig: null, t: 'Sanguinamento persistente, un\'afta, dolore, protesi mal adattata. Allora consulta un dentista. Esiste anche il sistema del «dentista a domicilio».' }
          ],
          points: [
            'Nei giorni in cui si oppone, non serve puntare alla perfezione. Ma tieni solo «togliere le protesi e rimuovere i resti di cibo prima di dormire» come minimo quotidiano.',
            'La bocca è una parte del corpo particolarmente intima. Anche una cura che protegge la vita ferisce il cuore se diventa forzata. Vita e cuore contano allo stesso modo. Se manca uno dei due, ci si allontana dalla felicità.'
          ]
        }
      ]
    },

    {
      id: 'kigae', emoji: '👕', title: 'Vestirsi',
      sub: 'La regola: svestire prima dal lato forte',
      procs: [
        {
          id: 'kigae1', title: 'Cambiare un capo di sopra (aperto davanti)',
          steps: [
            { fig: 'datsuken', t: 'Quando un lato è difficile da muovere per paralisi o dolore, la regola è: svestire iniziando dal lato forte, vestire iniziando dal lato difficile da muovere (colpito).', c: 'Non tirare con forza una mano o un braccio. Può ferire la spalla o lasciare un livido sulla pelle.' },
            { fig: null, t: 'Svestire. Sfila prima il braccio del lato forte dalla manica. Poi sfila lentamente il lato difficile da muovere.' },
            { fig: null, t: 'Vestire. Infila prima il braccio del lato difficile da muovere. Entra facile se arricci la manica e vai incontro alla mano.', c: 'Quando un dito si impiglia nella manica e non passa, non forzare. Spingere con un\'unghia impigliata può strapparla via, una lesione grave. Capita anche ai professionisti. Riportalo indietro con delicatezza, arriccia di nuovo la manica, e riprova.', m: 'Quando una contrattura impedisce di distendere il gomito, non provare a distendere il braccio; arriccia piuttosto il capo sopra. Un tessuto ampio ed elastico è molto più facile.' },
            { fig: null, t: 'Una volta indossato fino alla spalla, falle infilare il braccio del lato forte. Lascia che faccia ciò che può.' },
            { fig: null, t: 'Liscia infine le pieghe sotto la schiena e i glutei. Sdraiarsi sulle pieghe causa piaghe da decubito.' }
          ],
          points: [
            'La scelta dei vestiti è anch\'essa parte della tecnica di assistenza. Solo renderli aperti davanti, comodi ed elastici rende il vestirsi molto più facile.',
            'Non solo vestendo, ma anche dopo un trasferimento o la carrozzina, o dopo il bagno, i vestiti si disordinano facilmente. Pantaloni scivolati, orlo arrotolato. Notarlo e sistemarlo con discrezione. Sistemare i vestiti in disordine è una base dell\'assistenza che protegge la dignità della persona.',
            'Vestire è anche una preziosa occasione di vedere tutto il corpo. Rossore della pelle, lividi, gonfiore, ferite. Se riesci a tenerci l\'occhio con naturalezza mentre aiuti, è già una buona assistenza.'
          ]
        },
        {
          id: 'kigae2', title: 'Cambiare i pantaloni (da sdraiati)',
          steps: [
            { fig: null, t: 'Prima, un punto di atteggiamento. Vestire la parte inferiore è l\'assistenza in cui la vergogna emerge di più. Anche senza demenza, che si opponga o non collabori è naturale.', c: 'In breve, è la sincerità delle tue parole e dei tuoi modi. Di\' lo scopo «si sentirà fresca dopo il cambio», copri con un asciugamano, non guardare dove non serve, e sii rapido. Se perdi la fiducia qui, può rifiutare il cambio stesso. Un\'assistenza che protegge dignità e igiene insieme.' },
            { fig: null, t: 'Infila prima la gamba difficile da muovere. Risali in ordine: caviglia, ginocchio, coscia.', c: 'Se un dito del piede si impiglia nell\'orlo, la forza è vietata. Le unghie strappate sono una lesione classica del vestire. Riportalo indietro una volta, arriccia di nuovo l\'orlo, e infilalo.' },
            { fig: null, t: 'Per chi può sollevare le anche, falle piegare le ginocchia e alzare i glutei. In quel momento, tira i pantaloni fino alla vita.' },
            { fig: null, t: 'Per chi non può sollevare le anche, inclina il corpo da un lato e dall\'altro alternando e tira su un lato alla volta. Girare sul fianco si fa come nel cambio posizione.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Sistema la posizione della vita e le pieghe, ed è fatta.' }
          ]
        }
      ]
    },

    {
      id: 'seishiki', emoji: '🛁', title: 'Lavare il corpo e fare il bagno',
      sub: 'Al caldo, in sicurezza e con pulizia',
      procs: [
        {
          id: 'sei1', title: 'Lavare il corpo (a letto)',
          steps: [
            { fig: null, t: 'Riscalda prima la stanza (punta a 22-24°C / 72-75°F). Il freddo irrigidisce il corpo e alza la pressione.' },
            { fig: null, t: 'Strizza l\'asciugamano in acqua piuttosto calda, circa 55-60°C (130-140°F), e avrà proprio il calore giusto quando arriva sulla pelle. Controlla la temperatura prima sull\'interno del tuo braccio.' },
            { fig: null, t: 'Scopri solo la parte che lavi e tieni il resto coperto con un telo da bagno. Riguardo sia per il freddo sia per la vergogna.' },
            { fig: 'wipe_direction', t: 'Lava gli arti dall\'estremità verso il centro del corpo (mano verso la spalla, piede verso la coscia). Segue il verso della circolazione del sangue.' },
            { fig: null, t: 'L\'ordine è viso, braccia, petto, ventre, gambe, schiena, glutei, dalle zone più pulite per prime. Dopo aver lavato, raccogli subito l\'umidità con un asciugamano asciutto. Lasciata umida, causa raffreddamento e problemi di pelle.', m: 'Un palmo con contrattura, le ascelle e l\'interno dei gomiti accumulano sudore e sporco. Non aprirli a forza; lava con delicatezza fin dove si aprono senza dolore.' },
            { fig: null, t: 'Non serve tutto il corpo ogni giorno. Dividerlo, parte superiore oggi e inferiore domani, non stanca né la persona né te.' }
          ],
          points: [
            'Lavaggio e bagno sono esempi per eccellenza di assistenza spesso rifiutata. Nei giorni di rifiuto, non insistere; oggi solo viso e mani, domani i piedi, va bene. Pensare la pulizia in settimane più che in giorni è più o meno giusto.'
          ]
        },
        {
          id: 'sei2', title: 'Fare il bagno in sicurezza',
          steps: [
            { fig: null, t: 'Prima, qualcosa da sapere. Un bagno non è «un evento che fa solo bene». Costa energia. È una seccatura. È imbarazzante. Non vuole essere di peso. Manca di fiducia nel proprio corpo. Le ragioni per rifiutare sono molte, e tutte naturali.', c: 'Anche le persone sane hanno giorni di «oggi non ho voglia di lavarmi». Non capirlo porta all\'assistenza sbagliata del forzare. Nei giorni di rifiuto, lascia una via d\'uscita: solo lavare il corpo, solo un pediluvio, o un altro giorno.' },
            { fig: null, t: 'In inverno, riscalda prima lo spogliatoio e il bagno. Uno sbalzo di temperatura improvviso oscilla molto la pressione e causa un collasso (shock termico).' },
            { fig: null, t: 'Riferimento: acqua non più calda di 41°C (106°F), e bagno fino a 10 minuti. I bagni lunghi in acqua calda sono i più pericolosi.', m: 'Il lato colpito sente male il calore ed è dove le ustioni passano inosservate. Versa la doccia o l\'acqua poco a poco, iniziando dal lato non colpito.' },
            { fig: null, t: 'Evita il bagno a stomaco vuoto, subito dopo un pasto o dopo aver bevuto alcol.' },
            { fig: null, t: 'Il momento di scavalcare il bordo della vasca è la caduta più probabile. Usa corrimano, un rialzo per vasca e un tappetino antiscivolo.', c: 'Ausili come corrimano e sedie da doccia a volte si possono prendere in prestito o ottenere a basso costo tramite un servizio di consulenza per l\'assistenza. Chiedi a un professionista.' },
            { fig: null, t: 'Durante il bagno, non toglierle gli occhi di dosso. Quando il corpo si scalda nell\'acqua, circolazione e pressione cambiano, la coscienza può annebbiarsi, e può persino perdere conoscenza come addormentandosi. L\'annegamento nella vasca avviene così, in silenzio.', c: 'Se puoi, resta insieme in bagno o nello spogliatoio. Chiacchiera piacevolmente mentre si scalda lentamente. È la cosa più rassicurante per entrambi.' }
          ],
          points: [
            'Quando il bagno in casa diventa difficile, molte famiglie affidano solo il bagno a un servizio diurno. Non è fare le cose a metà; è una buona scelta per la sicurezza.'
          ]
        }
      ]
    },

    {
      id: 'hokou', emoji: '🚶', title: 'Accompagnare il cammino e prevenire le cadute',
      sub: 'Rendere la casa sicura dalle cadute è metà del lavoro',
      procs: [
        {
          id: 'hok1', title: 'Come accompagnare il cammino',
          steps: [
            { fig: 'walk_position', t: 'Chi accompagna sta un po\' dietro e di lato al lato debole della persona (il lato con paralisi). La posizione per sostenerla subito se vacilla.' },
            { fig: null, t: 'Sapere perché si cade cambia il modo di sostenere. La maggior parte delle cadute inizia con «il piede non si alza quanto atteso e si inciampa» o «la pianta non appoggia piatta e la caviglia si storce». Poi la caduta avviene perché un passo di recupero non esce in tempo.', c: 'Detto altrimenti: se riesci a sostenere quell\'istante di vacillamento, eviti la caduta peggiore. Essere pronti a «sostenere quel passo in ogni momento» è il primo compito dell\'assistente.' },
            { fig: null, t: 'Più che tenere la mano, sostenere leggermente sotto l\'ascella o ai fianchi permette di prenderla se crolla. Fa\' che la persona tenga un corrimano o un bastone.', m: 'Per chi usa un tutore alla gamba (un dispositivo che aiuta a camminare), non applicarlo a modo tuo; segui esattamente ciò che un professionista della riabilitazione ha mostrato. Tieni il bastone nella mano del lato non colpito.' },
            { fig: null, t: 'Non metterle fretta. La sola frase «piano va bene» è la migliore prevenzione delle cadute.' }
          ]
        },
        {
          id: 'hok2', title: 'Prevenire le cadute in casa',
          steps: [
            { fig: null, t: 'Riduci i pericoli a terra. Cavi elettrici, tappeti arricciati, giornali o buste in giro, piccoli gradini. La maggior parte delle cadute avviene in questi punti della casa.' },
            { fig: null, t: 'Metti una luce ad altezza pavimento sul percorso verso il bagno di notte. Una lucina con sensore di movimento è pratica.' },
            { fig: null, t: 'Le pantofole si sfilano facilmente perché il tallone non è trattenuto, quindi calzature da casa che coprono il tallone sono più sicure.' },
            { fig: null, t: 'Avere un corrimano o un mobile stabile a cui aggrapparsi nei punti di passaggio frequente rassicura. Osserva anche l\'abitudine di aggrapparsi a mobili traballanti.' }
          ],
          points: [
            'Per l\'installazione di corrimano e l\'eliminazione di gradini a volte si possono usare sussidi pubblici. Informati presso un servizio locale di consulenza per l\'assistenza.'
          ]
        },
        {
          id: 'hok3', title: 'Costruire un corpo saldo: esercizi da seduti',
          steps: [
            { fig: null, t: 'La prevenzione delle cadute non è solo camminare. Piccoli esercizi da seduti, accumulati, fanno crescere «la forza di alzare il piede» e «la forza di appoggiarsi piatti». Non forzare; anche guardando la TV va bene.' },
            { fig: null, t: 'Sollevamento della coscia. Seduta su una sedia, alza lentamente una coscia e abbassala. Alternando. Conserva la forza di alzare il piede e riduce gli inciampi.' },
            { fig: null, t: 'Rotazione della caviglia. Alza un po\' il piede e ruota la caviglia lentamente, in entrambi i sensi. Una caviglia flessibile regge il vacillamento all\'appoggio.' },
            { fig: null, t: 'Sollevamento delle punte e dei talloni. Seduta, tieni il tallone a terra e alza le punte. Poi tieni le punte e alza il tallone. La forza di appoggiare la pianta piatta la sostengono questi muscoli di stinco e polpaccio.' },
            { fig: null, t: 'Il numero di ripetizioni basta a «quante finiscono piacevolmente». Un po\' ogni giorno funziona meglio di molto ogni tanto. Nei giorni di rifiuto, una pausa va bene.' }
          ],
          points: [
            'Questo esercizio non richiede attrezzatura né denaro. È l\'assicurazione più economica per «continuare a camminare in sicurezza e con piacere».'
          ]
        }
      ]
    },

    {
      id: 'futon', emoji: '🛌', title: 'Assistenza sul futon (materasso a terra)',
      sub: 'Consigli per l\'assistenza da terra e l\'opzione del letto',
      procs: [
        {
          id: 'futon1', title: 'Quando assisti su un futon',
          steps: [
            { fig: null, t: 'Prima la conclusione importante. Se è probabile che l\'assistenza continui, raccomandiamo vivamente di noleggiare o installare un letto elettrico per assistenza. Poter assistere all\'altezza dell\'anca cambia tutto, sia il carico sulla tua schiena sia la sicurezza della persona.', c: 'In molti luoghi, tale attrezzatura si può noleggiare per una piccola quota mensile tramite un\'assicurazione per la non autosufficienza o programmi di sostegno. Informati presso un servizio locale di consulenza per l\'assistenza.' },
            { fig: null, t: 'Detto questo, per tutti coloro che anche stanotte assistono su un futon, ecco consigli per il pavimento. Assistere su un futon non è «impossibile»; solo il modo di usare il corpo differisce un po\' da un letto.' },
            { fig: 'kneel_assist', t: 'Quando aiuti da terra, non restare in piedi piegandoti con la schiena. Un ginocchio a terra, l\'altro alzato: la «mezza genuflessione» è la postura base. Abbassa il tuo corpo e avvicinati alla persona.', c: 'La mezza genuflessione vacilla meno avanti e indietro rispetto a entrambe le ginocchia a terra e permette di applicare più forza.' },
            { fig: null, t: 'Girare sul fianco e cambiare il pannolone si fanno come a letto (alzare le ginocchia, inclinare verso di te). Differisce solo la tua postura. In mezza genuflessione, tira con tutto il corpo, non con la forza delle braccia.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Alzarsi da terra va in ordine: supini, sul fianco, a quattro zampe, in mezza genuflessione, poi in piedi. Più che issarla dritta, far muovere la persona «passando per le quattro zampe» è molto più facile per entrambi.', c: 'Per il sostegno nell\'alzarsi, un mobile basso stabile (una sedia robusta, per esempio) può fare da corrimano.' },
            { fig: null, t: 'La debolezza di un futon è che un materasso per assistenza che distribuisce la pressione è difficile da usare. Per chi è incline alle piaghe, tieni apposta l\'intervallo di cambio più breve. Un futon sottile e duro richiede particolare attenzione.', link: { cat: 'taii', proc: 'taii2' } },
            { fig: null, t: 'E ancora una volta. Piegare il futon ogni giorno e assistere da terra logorano la tua schiena, di sicuro. Mentre pensi ancora «sto bene», inizia a informarti su un letto. La tua schiena è lo strumento più importante dell\'assistenza.' }
          ],
          points: [
            'Futon o letto non è meglio o peggio ma una scelta di vita. Ma fa una netta differenza per il logorio del corpo dell\'assistente.',
            'Passando a un letto, considera anche i sentimenti della persona. Chiedere «prestamelo per la mia schiena» invece di «per te» viene spesso accettato più facilmente.'
          ]
        }
      ]
    },

    {
      id: 'kobetsu', emoji: '🩺', title: 'In caso di malattia o disabilità',
      sub: 'Quando non devi usare queste basi così come sono',
      procs: [
        {
          id: 'kobetsu1', title: 'Quando devi ricevere «indicazioni personalizzate»',
          steps: [
            { fig: null, t: 'Le procedure di questa app sono le basi «generali» dell\'assistenza per un corpo adulto. Ma a seconda della malattia o disabilità, lo stesso metodo può causare lesioni. Dalle pagine seguenti, verifica se qualcosa si applica. Se si applica, tieni questa app solo come riferimento e fatti insegnare senza dubbio il modo adatto alla persona.' },
            { fig: 'no_pull', t: 'Persone con ossa fragili. Osteoporosi grave, lungo allettamento, ossa di vetro, ecc. Possono fratturarsi anche con poca forza, quindi l\'assistenza che porta e tira va fatta sotto indicazioni personalizzate.', c: 'Non dare mai un\'assistenza che tira un braccio o una gamba, con nessuno. È particolarmente pericoloso con ossa fragili.' },
            { fig: null, t: 'Persone con articolazioni rigide e difficili da muovere (contratture). Forzarle a distendersi danneggia articolazione e pelle. Il «raggio che si muove senza dolore» differisce da persona a persona, quindi è più sicuro farsi insegnare di persona da un professionista.' },
            { fig: null, t: 'Persone con una malattia progressiva. Distrofia muscolare, SLA, ecc. Il corpo cambia di continuo, così la risposta giusta di ieri diventa il pericolo di oggi. Rivedi il metodo regolarmente con un professionista. Ci sono anche malattie in cui sovraccaricare i muscoli danneggia il corpo.' },
            { fig: null, t: 'Persone con grave disabilità fisica e intellettiva. Deformità del corpo, anche che si lussano facilmente, respirazione debole; ogni corpo è del tutto diverso. Un campo in cui persino i professionisti hanno bisogno di un apprendimento su misura per ciascuno. I metodi improvvisati sono vietati.' },
            { fig: null, t: 'Persone che usano dispositivi medici come ventilatore, tracheotomia, alimentazione dal naso o dallo stomaco, o ossigeno domiciliare. Ci sono regole mediche per postura e movimento. Le indicazioni del medico e dell\'infermiere prevalgono su tutto.' },
            { fig: null, t: 'Persone a cui un medico ha indicato di limitare il movimento. Malattia cardiaca, dopo una frattura, durante la dialisi, ecc. Verifica i dettagli delle limitazioni prima di decidere l\'assistenza.' },
            { fig: null, t: 'Puoi chiedere indicazioni personalizzate al medico, a un infermiere a domicilio, agli specialisti della riabilitazione a domicilio (fisioterapisti e terapisti occupazionali) o, per una persona con disabilità, a un coordinatore del sostegno. Di\' «mi mostri come fare a casa», e ti mostreranno il modo adatto alla persona, nella stanza e nel letto reali.' }
          ],
          points: [
            'Chiedere indicazioni personalizzate non è esagerare. Insegnare alle famiglie come fare a casa è una parte importante del lavoro di un professionista.',
            '«Nel caso di questa persona, a cosa devo fare attenzione?» Questa domanda è la domanda migliore.'
          ]
        }
      ]
    }
  ],

  danger: [
    {
      id: 'chissoku', emoji: '🆘', title: 'Soffocamento (vie aeree ostruite)', sub: 'Quando non riesce a emettere suono, ogni secondo conta',
      fig: 'choking_back', cpr: true,
      when: [
        'Improvvisa difficoltà durante un pasto, incapace di emettere suono o di tossire',
        'Si afferra la gola con entrambe le mani (il segno del soffocamento)',
        'Il colorito peggiora rapidamente'
      ],
      act: [
        'Se riesce a emettere suono o a tossire, fallo tossire forte per prima cosa. La tosse è la forza più potente per espellere',
        'Se non riesce a tossire, inclinalo in avanti e colpisci con decisione 4-5 volte tra le scapole con il palmo della mano (colpi alla schiena)',
        'Se non esce, cingilo con le braccia da dietro, chiudi un pugno appena sopra l\'ombelico e spingi rapido verso l\'interno e l\'alto (compressioni addominali). Alterna con i colpi alla schiena',
        'Non fare compressioni addominali a una donna incinta o a un lattante (solo colpi alla schiena)',
        'Dopo le compressioni addominali, vai sempre poi dal medico. Gli organi interni vanno controllati'
      ],
      call: [
        'L\'ostruzione non esce',
        'Diventa flaccido o smette di rispondere. Chiama subito i soccorsi. Metti il telefono in vivavoce e ti guideranno'
      ]
    },
    {
      id: 'goen', emoji: '😮‍💨', title: 'Più episodi di traverso, forse polmonite', sub: 'La polmonite dell\'anziano inizia in silenzio',
      when: [
        'Gli episodi di traverso durante i pasti sono aumentati rispetto a prima',
        'Più catarro dopo mangiato. Una voce gorgogliante',
        'Poca energia in generale. L\'appetito è calato. Persiste una febbricola'
      ],
      act: [
        'La polmonite dell\'anziano spesso non mostra tosse netta né febbre alta. «Un po\' diverso dal solito» può essere l\'unico segno',
        { t: 'Rivedi la postura al pasto e la posizione del mento', link: { cat: 'shokuji', proc: 'shoku1' } },
        'Annota i cambiamenti. Dire solo «gli episodi di traverso sono aumentati» è un\'informazione importante per il medico'
      ],
      see: [
        'Quando episodi di traverso in aumento o una febbricola persistono. Parlane presto con il tuo medico curante'
      ],
      call: [
        'Il respiro sembra difficile. Respira con le spalle',
        'Labbra o viso hanno un brutto colore. È flaccido'
      ]
    },
    {
      id: 'tentou', emoji: '🩹', title: 'Una caduta, o cadere dal letto', sub: 'Non rialzarla in fretta',
      when: [
        'Quando scopri che è caduta (anche mentre non c\'eri)'
      ],
      act: [
        'Non rialzarla in fretta. Controlla prima se è cosciente, se c\'è dolore forte e se gli arti sembrano deformati',
        'Non riesce a muoversi per il dolore forte, una gamba ha forma o angolazione strana. Allora può esserci una frattura, chiama un\'ambulanza senza muoverla',
        'Se non c\'è anomalia grave, rialzala lentamente e sorveglia per la giornata',
        'Se ha battuto la testa, sorveglia per 24-48 ore anche se al momento sembra a posto. Chi assume anticoagulanti richiede particolare attenzione'
      ],
      call: [
        'Nessuna coscienza. Confusa e risponde in modo strano',
        'Dopo un colpo alla testa: vomito, una convulsione o parola impastata',
        'Non riesce a muoversi per il dolore forte. Un osso è chiaramente deformato'
      ]
    },
    {
      id: 'dassui', emoji: '🌡️', title: 'Febbre, o non riesce a bere', sub: 'Le persone anziane percepiscono male la sete',
      when: [
        'Bocca secca. Labbra screpolate',
        'Urina meno spesso. Colore più scuro',
        'Flaccida. Sonnolenta e lenta a rispondere'
      ],
      act: [
        'Le persone anziane sentono male la sete e si disidratano senza accorgersene. Accade non solo d\'estate ma anche d\'inverno e con la febbre',
        'Se riesce a bere, dai liquidi poco a poco, spesso. Una soluzione reidratante orale con sale e zucchero è adatta',
        'Controlla anche la temperatura della stanza. È troppo coperta in una stanza calda?'
      ],
      see: [
        'La febbre persiste. Riesce a prendere solo poco liquido. Vedi presto il tuo medico curante'
      ],
      call: [
        'Non prende alcun liquido. Vomita subito dopo aver bevuto',
        'Flaccida e risponde in modo strano. Una convulsione'
      ]
    },
    {
      id: 'jokusou', emoji: '🔴', title: 'Glutei o talloni rossi (piaga da decubito)', sub: 'Il segno è «un rossore che non svanisce alla pressione»',
      when: [
        'Rossore dove le ossa sporgono (centro dei glutei, talloni, spalle, nuca)',
        'Rossore che non diventa bianco a una leggera pressione del dito',
        'Una vescica, pelle che si sfalda o una colorazione scura'
      ],
      act: [
        { t: 'Un rossore che non diventa bianco alla pressione è l\'inizio di una piaga. Sdraiala in modo che nessun peso gravi su quel punto', link: { cat: 'taii', proc: 'taii1' } },
        'Non massaggiare, non sfregare e non asciugare con il phon. Danneggia l\'interno della pelle e la peggiora',
        'Se c\'è una ferita, il vecchio «asciugare per guarire» non è lo standard attuale. La cura attuale delle ferite si basa sul «mantenere moderatamente umido». Non asciugarla di tua iniziativa',
        'Tuttavia, se suppura o c\'è timore di infezione, tenere umido può essere controproducente. Conferma sempre il metodo stesso con un infermiere o un medico',
        'Dimagrire o mangiare meno è un grande segnale d\'allarme di piaga. Ricostruire la nutrizione è anch\'essa parte del trattamento',
        'Per un rossore dentro il pannolone, distinguere piaga da irritazione conta. Non continuare ad applicare pomata di tua iniziativa'
      ],
      see: [
        'C\'è una vescica, pelle che si sfalda o colorazione scura (una piaga avanzata). Mostrala a un infermiere o un medico',
        'Quando il rossore non svanisce dopo alcuni giorni'
      ]
    },
    {
      id: 'fast', emoji: '⚡', title: 'Segni di un ictus (FAST)', sub: 'Non aspettare e vedere. È una corsa contro il tempo',
      fig: 'fast_signs',
      when: [
        'Face (viso). Chiedendole di sorridere, un angolo della bocca non si solleva',
        'Arm (braccio). Alzando entrambe le braccia in avanti, uno si abbassa',
        'Speech (parola). Parola impastata. Le parole non vengono',
        'Se se ne applica anche uno solo, è una corsa contro il Time (tempo)'
      ],
      act: [
        'Annota l\'ora d\'inizio (l\'ultima volta che stava bene). Informazione importante per la scelta del trattamento',
        'Sdraiala in una posizione comoda e gira il viso di lato se potrebbe vomitare',
        'Non mettere cibo, bevande o medicine in bocca'
      ],
      call: [
        'Appena noti i segni, non aspettare; chiama subito i soccorsi. L\'ictus è una malattia in cui «prima si arriva in ospedale, più lievi sono le conseguenze»'
      ]
    },
    {
      id: 'ishiki', emoji: '🚨', title: 'Nessuna risposta quando la chiami', sub: 'Nel dubbio, chiama; è la risposta giusta',
      cpr: true,
      when: [
        'Nessuna risposta né chiamandola né dandole un colpetto leggero sulla spalla'
      ],
      act: [
        'Chiama subito i soccorsi. Metti il vivavoce e agisci seguendo le indicazioni',
        'Controlla se c\'è una respirazione normale (guarda muoversi petto e ventre per circa 10 secondi)',
        'Se c\'è respirazione, gira il corpo sul fianco e alza un po\' il mento (perché il vomito non ostruisca la gola)',
        'Se non c\'è respirazione normale, segui le indicazioni telefoniche e inizia le compressioni toraciche (rianimazione)'
      ],
      call: [
        'Per questo punto, «chiamare nel dubbio» è la risposta giusta. Se alla fine non era così grave, è il risultato migliore'
      ]
    }
  ],

  cpr: {
    open: '❤️ Come fare le compressioni toraciche e il ritmo',
    title: 'Compressioni toraciche (rianimazione)',
    intro: 'È per una persona che non risponde e non respira normalmente. Nel dubbio, inizia.',
    firstTitle: 'Prima di tutto',
    first: 'Chiama il numero di emergenza della tua zona e metti il vivavoce. L\'operatore ti dirà cosa fare al telefono. Quelle indicazioni prevalgono. Usa questa pagina come supporto.',
    stepsTitle: 'Come farlo',
    steps: [
      'Sdraiala supina su un pavimento rigido. Su un letto morbido, la forza della spinta si disperde',
      'Metti il palmo di una mano al centro del petto e l\'altra mano sopra',
      'Distendi i gomiti e premi dritto verso il basso con il peso del corpo, con forza sufficiente ad abbassare il petto di circa 5 cm (2 pollici)',
      'A ogni spinta, rilascia finché il petto non torna all\'altezza originale. Tieni le mani sul petto',
      'A un ritmo di 100-120 al minuto, continua con meno pause possibili finché arriva l\'ambulanza',
      'La respirazione artificiale non è indispensabile. Continuare a premere è la cosa più importante',
      'Se ti stanchi, dai il cambio senza esitare. Quando arriva un DAE (defibrillatore automatico), accendilo e segui le indicazioni vocali'
    ],
    metroStart: 'Riproduci il ritmo (110 al minuto)',
    metroStop: 'Ferma il ritmo',
    metroHint: 'Premi una volta a ogni battito. Un tono più acuto suona ogni 30 battiti',
    note: 'La forza può rompere una costola, ma la vita viene prima. In molti luoghi, un soccorso prestato in buona fede e senza colpa grave è protetto da responsabilità (tutela del buon samaritano). Per favore, non esitare.'
  },

  self: [
    {
      id: 'koshicare', emoji: '💪', title: 'Prima e dopo esserti fatto male alla schiena', sub: 'Il tuo corpo è lo strumento più importante dell\'assistenza',
      secs: [
        { h: 'L\'assistenza è «lavoro per la schiena»', body: [
          'Anche tra gli assistenti, il mal di schiena è la prima malattia professionale. Se un familiare senza formazione si fa male alla schiena, non è perché sei debole. È del tutto naturale.',
          'Proprio per questo, fa\' della pagina «Proteggere la schiena» nella scheda Tecniche un\'abitudine, ogni volta.'
        ], ref: { cat: 'koshi', proc: 'koshi1' }},
        { h: 'Proteggere con ambiente e attrezzatura', body: [
          'Con un letto regolabile in altezza, alzalo fino a circa l\'altezza della tua anca quando assisti. Assistere in posizione bassa è una causa importante di mal di schiena.',
          'Ci sono ausili che spostano la forza sull\'attrezzatura, come teli ad alto scorrimento e corrimano d\'appoggio. Spesso si possono prendere in prestito tramite un servizio di consulenza per l\'assistenza, quindi chiedi.'
        ]},
        { h: 'Se ti fai comunque male', body: [
          'Non continuare sopportando il dolore. Se peggiora, non potrai più continuare l\'assistenza stessa.',
          'Un dolore forte, o un dolore con formicolio alla gamba, va visto presto.'
        ]}
      ]
    },
    {
      id: 'kakae', emoji: '🌧️', title: 'Non portarlo da solo', sub: 'Riposare non è fuggire, è un\'abilità',
      secs: [
        { h: 'Questi sono segni del tuo limite', body: [
          'Non dormire di notte. Niente appetito. La rabbia scatta per niente. Vengono le lacrime. Hai sgridato la persona. Vorresti sparire.',
          'Se anche solo uno suona vero, non è che «sei debole» ma un segnale del tuo corpo che «hai bisogno di riposo».'
        ]},
        { h: 'Riposare non è fuggire, è un\'abilità', body: [
          'Per continuare l\'assistenza, serve tempo lontano da essa. Farsi dare il cambio per riposare si chiama «assistenza di sollievo», ed è predisposta come cosa ovvia in tutto il mondo.',
          'Accudimento di poche ore, accudimento notturno, aiuto che viene a casa tua. Quali opzioni ci sono nella tua zona, un servizio di consulenza per l\'assistenza può dirtelo.'
        ]},
        { h: 'Va bene dirlo ad alta voce', body: [
          'Dire «l\'assistenza è dura» non significa che tu sia arrivato a non voler più bene alla persona.',
          'Un luogo per parlare con famiglie nella stessa situazione (gruppi di caregiver e incontri) può essere un sollievo sorprendente, solo per sentirsi compresi.'
        ]}
      ]
    },
    {
      id: 'makaseru', emoji: '🤝', title: 'Affida ai professionisti ciò che non puoi', sub: 'Non è fuggire, è un progetto che protegge entrambi',
      secs: [
        { h: 'Puoi passare la mano prima che avvenga una lesione', body: [
          'Più una famiglia assiste per buona volontà, più si incolpa a fondo dopo un incidente. Il rimpianto di «se non avessi forzato» pesa abbastanza da spezzare il cuore.',
          'Perciò questa app lo ripete ancora e ancora. Affida ai professionisti ciò che è difficile, ciò di cui non sei sicuro, prima che avvenga un incidente. Non è una sconfitta, è la decisione più saggia che protegge te e la persona.'
        ]},
        { h: 'L\'assistenza familiare non è sempre la migliore', body: [
          'Non devi credere «l\'assistenza familiare è la migliore». Per esempio, molti si sentono più a proprio agio in bagno o nel lavaggio con un altro (un professionista) che con la famiglia.',
          'Anche per la dignità della persona, ci sono di certo situazioni in cui la mano di un professionista è meglio.'
        ]},
        { h: 'Quanto più affidi, tanto più torni a essere famiglia', body: [
          'Se porti tutta l\'assistenza, diventi del tutto «l\'assistente», e il tuo tempo come figlia, figlio, moglie o marito scompare.',
          'Per ogni ora che affidi a un professionista, puoi tornare a essere «famiglia». Il tempo di bere un tè e ridere insieme vale forse più di qualsiasi tecnica di assistenza.'
        ]}
      ]
    },

    {
      id: 'soudan', emoji: '🗺️', title: 'Sapere a chi rivolgerti', sub: 'Prima di essere in difficoltà, impara solo i luoghi',
      secs: [
        { h: 'Prima di essere davvero bloccato', body: [
          'Il trucco è imparare a chi rivolgersi mentre stai ancora bene, invece di cercare solo una volta davvero bloccato.'
        ]},
        { h: 'Ecco luoghi a cui rivolgerti', body: [
          'Un servizio locale di informazione per persone anziane (in molte zone c\'è uno sportello o un centro dove informarsi sull\'assistenza, spesso gratis).',
          'Un coordinatore dell\'assistenza (il tuo consulente se usi un servizio di assistenza).',
          'Il tuo medico curante, un infermiere a domicilio (il corpo e il medico). Un dentista a domicilio, un farmacista (la bocca e i farmaci).',
          'Per l\'assistenza a un familiare con disabilità, un coordinatore del sostegno può essere il tuo consulente.',
          'Un gruppo di caregiver o famiglie nella stessa situazione (le questioni del cuore).'
        ]},
        { h: 'Un trucco per confidarti bene', body: [
          'Va bene restare nello stato di «non so nemmeno cosa mi preoccupa». «Sono in difficoltà, ma non so da dove cominciare» è una buona prima frase per confidarsi.'
        ]},
        { h: 'Il servizio di consulenza «Soyogi» che ha fatto questa app', body: [
          'Soyogi, un servizio di consulenza per assistenza e sostegno. È il servizio privato senza scopo di lucro che crea questa applicazione.',
          'Quando è difficile andare agli sportelli pubblici, o hai tempo solo di sera, puoi confidarti in modo anonimo online (in un metaverso). Questa consulenza è un servizio in lingua giapponese (1000 yen ogni 30 minuti; prenotare è più agevole).'
        ], link: { href: 'https://soyogi.hp.peraichi.com/top', label: '🍃 Vedi il sito di Soyogi' }}
      ]
    },
    {
      id: 'kanpeki', emoji: '🍵', title: 'Non puntare alla perfezione', sub: 'Reggere a 60 punti vale più che crollare a 100',
      secs: [
        { h: 'Reggere a 60 punti è più forte', body: [
          'Invece di dare ogni giorno un\'assistenza perfetta e crollare, reggere a lungo tagliando qualche angolo è anche più felice per la persona.',
          'Cibi pronti, oggetti usa e getta, la saltata occasionale. Sono tutte «abilità per reggere».'
        ]},
        { h: 'Non confrontarti', body: [
          'Non devi confrontarti con l\'assistenza di un\'altra casa, né con l\'assistenza ammirevole in TV o sui social. La risposta giusta per la tua casa è solo nella tua casa.'
        ]},
        { h: '«Oggi ce l\'ho fatta» basta', body: [
          '«Anche oggi, in un modo o nell\'altro, ce l\'ho fatta.» È una cosa davvero grande.'
        ]}
      ]
    },
    {
      id: 'kenkou', emoji: '🩺', title: 'Sorveglia anche la tua salute', sub: 'Per non cadere entrambi insieme',
      secs: [
        { h: 'Se l\'assistente crolla, cadete entrambi', body: [
          'Non rimandare il tuo sonno, i tuoi pasti e i controlli delle tue malattie croniche. Il tuo corpo è lo strumento più importante dell\'assistenza.',
          'Non saltare i tuoi controlli di salute «per via dell\'assistenza»; vai a farli.'
        ]},
        { h: 'Un piccolo controllo mensile', body: [
          'Hai dormito bene ultimamente? Salti i pasti? Sopporti un dolore fisico? Una volta al mese basta; chiediti.'
        ]}
      ]
    }
  ]
};
