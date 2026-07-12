'use strict';
/* Guide de soins (Soyogi) - Contenu français.
   Structure identique à guide.ja.js. Urgences : le numéro local (112 en UE).
   Éléments propres au Japon adaptés ; températures en C (F entre parenthèses). */
window.OUCHI_CONTENT = window.OUCHI_CONTENT || {};
window.OUCHI_CONTENT.fr = {

  tech: [
    {
      id: 'koshi', emoji: '🧍', title: 'Protéger votre dos',
      sub: 'Les bases d\'un soin qui protège le dos, sans soulever',
      procs: [
        {
          id: 'koshi1', title: 'Ne pas soulever, ne pas forcer : 9 bases',
          steps: [
            { fig: 'bm_stance', t: 'Écartez les pieds plus large que les épaules, pliez les genoux et abaissez le bassin. Créez d\'abord une base stable. Cette façon d\'utiliser le corps s\'appelle la « mécanique corporelle », la première chose qu\'apprennent les soignants.', c: 'Rester droit et se plier seulement au niveau du dos est la posture qui fait le plus mal au dos.' },
            { fig: 'bm_close', t: 'Approchez-vous le plus près possible de la personne. Avancez avec les pieds et gardez votre corps près du sien. Plus vous êtes loin, plus la charge sur votre dos se multiplie.' },
            { fig: 'no_twist', t: 'Ne tordez pas le corps. Pour changer de direction, ne pivotez pas à la taille ; déplacez les pieds et tournez tout le corps.' },
            { fig: null, t: 'Ne déplacez pas la personne avec les seuls bras. Utilisez les gros muscles des cuisses et des fessiers. Imaginez bouger en pliant et dépliant les genoux.' },
            { fig: 'slide_move', t: 'Ne soulevez pas, faites glisser. Déplacer à l\'horizontale demande bien moins de force. Un drap de glissement du commerce, ou même un grand sac plastique, aide.', c: 'Une astuce pour protéger vos mains : quand vous glissez une main sous le corps, entrez d\'abord paume vers le bas, puis, une fois assez profond, tournez la paume vers le haut pour tirer la personne vers vous. Si vous entrez paume vers le haut dès le départ, un ongle peut s\'accrocher au drap ou à l\'alèse et se blesser. Utile pour toute tâche où l\'on glisse une main dans un espace étroit, comme faire un lit.' },
            { fig: 'roll_prep', t: 'Rendez la personne compacte. Croisez les bras sur la poitrine et relevez les genoux, et vous pourrez la déplacer avec peu de force.' },
            { fig: 'lever_examples', t: 'Utilisez le levier. Créez un point d\'appui (marqué d\'un triangle), comme un coude ou une hanche, avant de bouger. Pour se redresser, le coude est le pivot. Au bord du lit, la hanche est le pivot et le poids des jambes soulève le haut du corps.' },
            { fig: 'roll_legs_first', t: 'Faites de la gravité une alliée. Utilisez le poids d\'une partie du corps comme moteur. Pour tourner sur le côté par exemple, laissez d\'abord tomber les genoux relevés (1), et le corps suit avec peu de force, entraîné par le poids des jambes (2).' },
            { fig: null, t: 'Laissez la personne faire ce qu\'elle peut. Utiliser la force qui lui reste aide aussi à garder son corps fort.', c: 'Le mot d\'ordre : « laissez la personne utiliser les prises ». Barrières de lit, accoudoirs, mains courantes. Votre travail s\'allège et sa force est préservée : d\'une pierre deux coups.' }
          ],
          points: [
            'Un peu de forcing « à chaque fois » est ce qui casse le dos. Prenez l\'habitude de vérifier votre posture à chaque fois.',
            'Si cela semble impossible seul, faites-le à deux, ou appuyez-vous sur du matériel ou un professionnel. Ce n\'est pas une défaite, c\'est la bonne décision.'
          ]
        }
      ]
    },

    {
      id: 'seiketsu', emoji: '🧼', title: 'Bases de l\'hygiène',
      sub: 'Ongles, lavage des mains, masque. Simple mais la meilleure protection',
      procs: [
        {
          id: 'seiketsu1', title: 'Ongles, mains, masque : protéger les deux',
          steps: [
            { fig: null, t: 'C\'est le socle de tout soin. Sans éclat, mais une technique de premier ordre qui vous protège, vous et la personne, des blessures et des infections.' },
            { fig: null, t: 'Gardez vos propres ongles courts, aux coins arrondis. Les ongles longs griffent la peau de la personne pendant le soin, et s\'accrochent aux draps ou aux vêtements et vous blessent.', c: 'La peau des personnes âgées ou affaiblies est fine, et même une petite griffure peut mener à une infection.' },
            { fig: null, t: 'L\'espace sous les ongles accumule saleté et déchets. Laissés longs, ils deviennent un nid à infections à chaque repas, change et soin de plaie. Garder les ongles courts est en soi une prévention des infections.' },
            { fig: null, t: 'Lavez-vous les mains au savon avant et après le soin. Entre les doigts, autour des ongles, jusqu\'aux poignets. Surtout « après un change » et « avant de toucher la nourriture », à chaque fois.', c: 'Quand vous ne pouvez atteindre un lavabo, le gel hydroalcoolique est pratique. Mais la saleté visible doit être lavée à l\'eau ; le gel ne l\'enlève pas.' },
            { fig: null, t: 'Pour les changes et le contact des plaies, portez des gants jetables. Pour les retirer, roulez le côté sale vers l\'intérieur, jetez-les, et lavez-vous ensuite les mains aussi.' },
            { fig: null, t: 'Un masque n\'est pas un outil réservé aux jours de maladie ; c\'est un équipement de base pendant le soin. Chacun porte des microbes et des virus sans aucun symptôme. Ce qui n\'est rien pour vous en bonne santé peut menacer la vie d\'une personne affaiblie.', c: 'Portez-en un surtout pour les soins où le visage est proche (repas, soins de bouche, changes, soins de plaie). « Seulement quand vous vous sentez mal » ne protège pas assez.' },
            { fig: null, t: 'Gardez aussi les ongles de la personne courts. Cela l\'empêche de se griffer elle-même, et évite que l\'un de vous se blesse pendant le soin.', c: 'Ne coupez pas à domicile un ongle incarné, déformé, épais et dur (mycose de l\'ongle) ou l\'ongle d\'une personne diabétique. Un coupe-ongles ordinaire n\'y arrive souvent pas ; il faut des outils et un savoir-faire, et l\'on se blesse facilement. Laissez cela à un médecin, ou à un infirmier sur prescription médicale.' },
            { fig: null, t: '« Couper les ongles. Se laver les mains. Porter un masque. » Cela ne coûte presque rien, chacun peut commencer aujourd\'hui, et l\'effet est énorme. Faites-en une habitude.' }
          ],
          points: [
            'Si votre santé s\'effondre, le soin s\'arrête. Protéger votre propre corps, c\'est la même chose que protéger la personne aidée.'
          ]
        }
      ]
    },

    {
      id: 'taii', emoji: '🛏️', title: 'Tourner sur le côté (repositionnement)',
      sub: 'Comment changer de position pour prévenir les escarres',
      procs: [
        {
          id: 'taii1', title: 'Du dos vers le côté',
          steps: [
            { fig: null, t: 'Dites toujours à voix haute : « Je vais vous changer de position maintenant. » Être touché brusquement effraie la personne et raidit le corps, ce qui vous rend la tâche difficile à tous les deux.', c: 'Si les os sont fragiles, les articulations raides, ou en cas de maladie évolutive, n\'utilisez pas ce geste tel quel. Détails sur la page ci-dessous.', link: { cat: 'kobetsu', proc: 'kobetsu1' } },
            { fig: 'roll_prep', t: 'Croisez les bras sur la poitrine et relevez les deux genoux. Quand le corps est compact, vous pouvez le tourner avec peu de force.', m: 'Si une paralysie empêche de croiser les bras, poser simplement la main atteinte sur le ventre suffit. Ne forcez pas un bras raide (rétracté) à se croiser.' },
            { fig: 'shift_parts', t: 'Faites tourner le visage vers le côté où vous tournerez. Déplacez le corps à l\'avance vers le bord opposé du lit, pour qu\'il se retrouve au milieu après avoir tourné.', c: 'Déplacez le corps petit à petit, dans l\'ordre : tête, puis épaules et dos, puis hanches, puis jambes. L\'astuce est de ne pas tout bouger d\'un coup.' },
            { fig: 'roll_pull', t: 'Posez les mains sur le genou et l\'épaule (ou la hanche) et basculez doucement vers vous. Tirer vers soi est plus sûr et demande moins de force que pousser.', c: 'Quand vous tournez vers un côté sans barrière, faites très attention aux chutes.', m: 'Avant de tourner, posez le bras atteint sur le ventre pour qu\'il ne soit pas coincé sous le corps. Être allongé sur le côté atteint fait mal remarquer la douleur ou la pression, gardez donc cette position aussi brève que possible.' },
            { fig: 'roll_legs_first', t: 'Si vous manquez de force pour tourner d\'un coup, laissez d\'abord tomber vers vous seulement les genoux relevés (1). Le poids des jambes tourne en premier, et les hanches et le tronc suivent avec peu de force, entraînés par ce poids (2).', c: 'L\'astuce est de faire du poids de la personne et de la gravité vos alliés. Comme cela ne repose pas sur la force des bras, cela aide surtout quand une femme ou une personne âgée fournit le soin.' },
            { fig: null, t: 'Si la personne peut bouger un peu, faites-lui saisir la barrière du lit du côté où elle tourne. Même une petite traction allège beaucoup votre travail, et cela garde la force de son bras : une petite rééducation quotidienne.', c: 'Vérifiez d\'abord que la barrière est bien fixée. Une barrière seulement emboîtée peut se détacher si on tire fort.' },
            { fig: 'roll_cushion', t: 'Placez un coussin contre le dos pour stabiliser la position. Pliez légèrement le genou du dessus et mettez aussi un coussin entre les genoux.' },
            { fig: null, t: 'Vérifiez enfin que les points osseux comme oreilles, épaules, coudes, os des hanches et chevilles n\'appuient pas fort contre quelque chose.' }
          ],
          points: [
            'Ne la tournez pas en tirant sur un bras ou un pantalon ; cela abîme la peau et les articulations. Soutenez le tronc (épaules et hanches) pour tourner.',
            'Vérifiez aussi qu\'aucun drap ni vêtement froissé ne reste sous le corps. Les plis causent des escarres.'
          ]
        },
        {
          id: 'taii2', title: 'Prévenir les escarres : nutrition, temps, endroit',
          steps: [
            { fig: 'nutrition_cushion', t: 'En vérité, le plus grand socle de la prévention des escarres n\'est pas la technique de repositionnement mais la « nutrition ». Une personne maigre et osseuse développe des escarres plus tôt, dans les mêmes conditions. Prenez soin des repas et de l\'état nutritionnel pour garder le coussin de chair qui amortit.', c: 'Un appétit qui diminue est en soi un signe d\'alerte d\'escarre. Parlez de nutrition à un médecin ou un professionnel de la nutrition.' },
            { fig: 'pressure_points', t: 'Les escarres se forment facilement là où les os saillent et appuient sur le lit. L\'arrière de la tête, les épaules, les coudes, le centre des fesses et les talons sont typiques.' },
            { fig: null, t: 'Comme repère, ne la laissez pas plus de 2 à 3 heures dans la même position. Avec un matelas de répartition de pression, ou selon l\'état de la personne, le bon intervalle change.', c: 'Fixez l\'intervalle et la méthode avec un professionnel comme un infirmier ou un coordinateur de soins, pour être tranquille.' },
            { fig: null, t: 'Si vous trouvez une rougeur aux fesses ou aux talons, appuyez doucement avec un doigt. Une rougeur qui ne blanchit pas est le début d\'une escarre. Positionnez de sorte qu\'aucun poids ne repose sur ce point.', c: 'Ne frottez pas et ne massez pas la zone rouge. Cela l\'aggrave.', m: 'Le côté atteint a une sensation émoussée, et la personne ne remarque pas la douleur. Vérifiez surtout souvent la peau du côté atteint.' },
            { fig: 'heel_float', t: 'Pour quelqu\'un dont les talons rougissent facilement, placez un coussin sous les mollets pour soulever légèrement les talons.' },
            { fig: null, t: 'La capacité d\'un matelas ou d\'un coussin à « prévenir les escarres » varie énormément selon le produit. Si une rougeur apparaît à l\'usage, le matériel ne convient peut-être pas. Il vaut la peine de le revoir ou d\'essayer autre chose.', c: 'Le plus rapide pour trouver les points de prévention adaptés est de demander à un médecin, un infirmier ou un professionnel des aides techniques.' }
          ],
          points: [
            'Même si une escarre se forme, ne vous accusez pas avec « notre soin était mauvais ». La morphologie, la constitution et la maladie créent d\'emblée de grandes différences dans la facilité de leur apparition.',
            'Ce qui compte n\'est pas le blâme mais de parler tôt à un professionnel et de passer à une prévention adaptée à la personne.'
          ]
        }
      ]
    },

    {
      id: 'oki', emoji: '🌅', title: 'Se redresser',
      sub: 'Jusqu\'à s\'asseoir au bord du lit',
      procs: [
        {
          id: 'oki1', title: 'Asseoir au bord du lit',
          steps: [
            { fig: null, t: 'Après un mot pour elle, tournez d\'abord le corps sur le côté. Croisez les bras sur la poitrine, pliez les genoux, posez les mains sur le genou et l\'épaule et basculez doucement vers vous. N\'oubliez pas de déplacer le corps vers le bord du lit du côté où elle se lèvera.', m: 'En cas de paralysie, on se redresse en principe avec le côté fort en dessous, car on peut s\'appuyer sur le coude du côté fort.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Toujours sur le côté, faites descendre les deux jambes à partir du genou par-dessus le bord du lit.' },
            { fig: 'situp_seq', t: 'Soutenez les épaules et les hanches, utilisez le poids des jambes et redressez le haut du corps en arc (image 1 à 4). Avec le coude comme pivot (triangle) et l\'appui passant du coude à la paume, elle se redresse avec bien moins de force qu\'en tirant droit vers le haut.', c: 'Avec un lit électrique dont le dossier se relève, relever d\'abord un peu le dos facilite encore. S\'il y a une barrière ou une poignée, laissez la personne la saisir. Mais pour prendre appui en se levant, n\'utilisez qu\'une « poignée d\'aide (barre de lit) » fixe.' },
            { fig: 'sit_edge', t: 'Une fois assise, veillez à ce que toute la plante des pieds repose à plat sur le sol. Avec un lit réglable en hauteur, réglez-le pour que les pieds atteignent le sol.' },
            { fig: null, t: 'Ne lâchez pas tout de suite. Juste après s\'être redressée, la tension peut chuter et provoquer un vertige. Soutenez-la un instant et surveillez son teint et son état.', c: 'Teint pâle, air hébété, sueurs froides. Alors n\'insistez pas ; recouchez-la un moment.' }
          ],
          points: [
            'Si se redresser reste difficile jour après jour, du matériel comme un lit électrique ou des mains courantes le résout souvent. Demandez à un professionnel des aides techniques ou un service de conseil en soin.'
          ]
        }
      ]
    },

    {
      id: 'ijou', emoji: '🪑', title: 'Se lever et transferts',
      sub: 'Du lit au fauteuil roulant. Où arrivent le plus d\'accidents',
      procs: [
        {
          id: 'tachi1', title: 'Aider à se lever',
          steps: [
            { fig: 'stand_prep', t: 'Faites-la avancer sur le siège. Glissez les fesses vers l\'avant du siège.' },
            { fig: 'stand_prep', t: 'Faites reculer un peu les pieds. Avec les chevilles derrière les genoux, se lever est plus facile.', c: 'Attention à ne pas trop reculer. Si les pieds vont trop en arrière, elle peut basculer vers l\'avant au moment de se lever.' },
            { fig: null, t: 'Avec une chaise à accoudoirs, faites-la pousser sur les accoudoirs. Pousser est plus facile pour se lever que tirer, et cela vous soulage aussi. Pousser avec ses propres bras est en soi une petite rééducation quotidienne qui garde la force musculaire.' },
            { fig: 'stand_bow', t: 'Faites-la se pencher en avant « comme pour saluer ». Quand la tête va en avant et en bas, les fesses se soulèvent d\'elles-mêmes. Ne tirez pas droit vers le haut ; cela stoppe le mouvement naturel et rend le lever plus difficile.', c: 'C\'est le point dangereux. Si le salut est trop profond, elle tombe droit en avant. Un accident classique, même chez les soignants. Penchez seulement « le minimum pour soulever les fesses ». Tenez-vous en avant de biais, en position pour la rattraper, avec prudence et lentement.', m: 'Les personnes paralysées, ou affaiblies par un long alitement, peuvent ne pas stopper leur propre élan vers l\'avant. Allez surtout lentement, petit à petit. Ne relâchez pas votre vigilance.' },
            { fig: 'stand_assist', t: 'Passez votre bras autour des hanches de la personne et levez-vous ensemble au rythme du mouvement vers l\'avant. Pliez vos propres genoux et abaissez le bassin, et vous ne vous ferez pas mal au dos.', m: 'Pour quelqu\'un dont le genou atteint flanche facilement, poser votre genou contre son genou atteint le stabilise (évite le flambement).', link: { cat: 'koshi', proc: 'koshi1' } },
            { fig: null, t: 'Juste après le lever, les genoux peuvent flancher. Continuez à soutenir jusqu\'à avoir confirmé qu\'elle tient debout fermement.' }
          ],
          points: [
            'L\'exemple type de « l\'accident qu\'on évite rien qu\'en le connaissant » est la chute en avant. Faites ce geste avec prudence, lentement, sans relâcher votre vigilance.',
            'Si vous craignez de ne pas pouvoir retenir un genou qui flanche, ne forcez pas. C\'est là qu\'interviennent les mains courantes de lever et autres matériels. Ne portez pas cela seul ; parlez à un professionnel.'
          ]
        },
        {
          id: 'ijou1', title: 'Du lit au fauteuil roulant',
          steps: [
            { fig: 'transfer_angle', t: 'Placez le fauteuil du côté le plus facile de la personne (le côté fort en cas de paralysie), à un angle de 20 à 30 degrés par rapport au lit.' },
            { fig: null, t: 'Serrez les deux freins, et relevez ou retirez les repose-pieds.', c: 'Oublier les freins est la première cause d\'accidents de transfert. Prenez l\'habitude de pointer du doigt et de vérifier à chaque fois.' },
            { fig: null, t: 'Faites-la s\'asseoir au bord du lit, reculer les pieds et avancer sur le siège.' },
            { fig: null, t: 'Faites-la se lever penchée en avant « comme pour saluer ». Avancer d\'abord, reculer les pieds. Voir la page ci-dessous pour les détails.', link: { cat: 'ijou', proc: 'tachi1' } },
            { fig: 'pivot_steps', t: 'Une fois debout, pivotez sur les pieds, à petits pas, lentement. Ne tordez pas le corps seul.' },
            { fig: null, t: 'Lui faire tenir l\'accoudoir éloigné du fauteuil fait tourner le corps naturellement. Abaissez les hanches lentement vers le siège.', c: 'Le mot d\'ordre est « laissez la personne utiliser les prises ». Chaque fois qu\'elle utilise l\'accoudoir, la force de ses bras et de son corps est préservée.' },
            { fig: 'sit_deep', t: 'Faites-la se rasseoir bien au fond et posez les pieds sur les repose-pieds. Assise en avant, elle glisse, ce qui est dangereux. La page suivante explique comment la rasseoir correctement.', link: { cat: 'ijou', proc: 'suwari1' } }
          ],
          points: [
            'Si vous sentez même un peu « je risque de ne pas pouvoir la retenir », ne le faites pas seul.',
            'Le transfert d\'une personne qui ne peut pas se tenir debout seule (aide totale) est une autre méthode. Faites-vous montrer en personne par un professionnel ce qui convient à la personne.'
          ]
        },
        {
          id: 'suwari1', title: 'Se rasseoir au fond du fauteuil',
          steps: [
            { fig: 'sit_deep', t: 'Pourquoi c\'est important. Assis en avant, le corps glisse peu à peu, et la pression et le cisaillement se concentrent au centre des fesses (le coccyx). Dans cette posture, les escarres se forment rien qu\'en restant assis.' },
            { fig: null, t: 'Vérifiez d\'abord les deux freins. Retirez les pieds des repose-pieds et posez les plantes à plat au sol.' },
            { fig: null, t: 'Faites la personne se pencher en avant « comme pour saluer ». Les fesses se soulèvent un peu. Lui faire pousser sur les accoudoirs les soulève plus facilement.' },
            { fig: null, t: 'Passez derrière elle, et à l\'instant où les fesses se soulèvent, soutenez le bassin (autour des os des hanches) à deux mains et guidez-le doucement vers l\'arrière. C\'est une sensation de glisser, pas de soulever.', c: 'Passer les mains sous les aisselles par derrière pour la hisser peut blesser les épaules, ce n\'est donc pas recommandé à domicile.' },
            { fig: null, t: 'Si se pencher en avant est difficile, faites-le d\'un côté puis de l\'autre, petit à petit. Inclinez le corps d\'un côté, envoyez la fesse soulevée vers l\'arrière, puis pareil de l\'autre côté. Ce « marcher sur les fesses » la rassoit un peu plus au fond à chaque fois.' },
            { fig: null, t: 'Vérifiez enfin. S\'il n\'y a pas d\'espace entre le bas du dos et le dossier et que le bassin est redressé, c\'est bon. Reposez les pieds sur les repose-pieds.' },
            { fig: null, t: 'Une chose de plus : rajustez aussi les vêtements en désordre. Il y a en réalité beaucoup de personnes dont le pantalon ou la jupe a glissé, laissant voir sous-vêtement ou protection. Un fauteuil roulant l\'emmène dehors. Ainsi, la personne se sent gênée.', c: 'La personne ne peut souvent pas le rajuster elle-même et n\'ose pas le dire. Le remarquer et le rajuster discrètement est le rôle de l\'aidant. Une expérience gênante peut devenir une raison de « je ne veux plus sortir ». Une tenue soignée est un petit geste en plus qui protège la personne et vous des regards.' }
          ],
          points: [
            'Le rasseyage revient plusieurs fois par jour. Quand vous pensez « elle a glissé », faites-le, souvent. C\'est en soi une prévention des escarres.',
            'La posture et les vêtements. Ce n\'est que quand les deux sont en place que le rasseyage est « terminé ».'
          ]
        },
        {
          id: 'kuruma1', title: 'Se déplacer en fauteuil roulant',
          steps: [
            { fig: null, t: 'Avant de rouler, vérifiez d\'abord. Les pieds sont-ils sur les repose-pieds ? Mains, vêtements ou plaid sont-ils dégagés des roues ? Rouler avec quelque chose de coincé peut mener à une blessure ou un accident en quelques mètres.' },
            { fig: null, t: 'Une fois vérifié, dites « Nous roulons » avant de démarrer. Démarrer brusquement l\'effraie.' },
            { fig: 'curb_tip', t: 'Pour une petite marche, appuyez sur la barre de basculement à l\'arrière pour lever les roues avant et montez de face. Pour descendre, allez en arrière et abaissez lentement à partir des roues arrière.', c: 'La position et la présence de la barre diffèrent selon le fauteuil. Vérifiez sur le vrai modèle en l\'empruntant ou en l\'achetant.' },
            { fig: null, t: 'Une descente raide est d\'abord une « voie à éviter ». S\'il y a un ascenseur ou une pente douce, choisissez-le même par un détour.', c: 'Si vous devez descendre, allez en arrière et lentement. Mais le poids combiné d\'une personne et d\'un fauteuil est plus que vous ne l\'imaginez. Tomber ensemble parce que vous ne pouvez pas retenir est un accident grave. Que vous ne tombiez pas compte tout autant. Au moindre doute, appelez de l\'aide.' },
            { fig: null, t: 'Quand vous vous arrêtez ou vous éloignez, serrez toujours les freins. Et en vous éloignant, dites toujours « Attendez ici. Je reviens tout de suite. » Les accidents où la personne tente de se lever en votre absence sont très fréquents.', c: 'Savoir si « attendez ici » passe auprès de la personne demande du discernement. Au moindre doute, évitez tout à fait de la laisser assise dans le fauteuil.' }
          ]
        }
      ]
    },

    {
      id: 'omutsu', emoji: '🚻', title: 'Changer la protection',
      sub: 'Vite, au chaud, en protégeant la peau',
      procs: [
        {
          id: 'omu1', title: 'Changer une protection à adhésifs',
          steps: [
            { fig: null, t: 'Avant de commencer, réunissez tout à portée. Une protection neuve, une couche absorbante, des lingettes, des gants jetables et un sac pour la protection souillée. Pour ne jamais avoir à vous éloigner en cours de route.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: null, t: 'Après un mot pour elle, baissez le pantalon et défaites les adhésifs de la protection. Gardez tout, sauf la zone nécessaire, couvert d\'une serviette ou d\'une couverture.', link: { cat: 'omutsu', proc: 'omu2' } },
            { fig: null, t: 'Tournez le corps sur le côté, roulez la protection souillée vers l\'intérieur et glissez-la légèrement sous le corps. Tourner sur le côté se fait comme pour le repositionnement.', c: 'S\'il y a une barrière de lit, lui faire la tenir sur le côté stabilise la position, est plus facile pour vous deux et aide à garder sa force. Mais ne forcez pas. Si la personne est disposée, cela suffit.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Essuyez d\'avant en arrière (du côté ventre vers le côté fesses). Chez les femmes surtout, ce sens est important pour prévenir les infections urinaires.', c: 'Quand c\'est très souillé, rincer à l\'eau tiède nettoie mieux qu\'essuyer et respecte davantage la peau.' },
            { fig: null, t: 'Roulez la moitié de la protection neuve et glissez-la sous le corps, remettez sur le dos, puis tirez-la de l\'autre côté et déployez-la. Le centre de la protection va au centre du corps.' },
            { fig: 'tape_cross', t: 'Collez les adhésifs en croix : ceux du bas légèrement vers le haut, ceux du haut légèrement vers le bas. Laissez la place d\'un ou deux doigts autour du ventre.' },
            { fig: null, t: 'Passez un doigt le long des barrières anti-fuites (les bords relevés aux ouvertures des jambes) et relevez-les vers l\'extérieur. Couchées vers l\'intérieur, elles causent des fuites.' },
            { fig: null, t: 'À chaque fois, vérifiez vite la peau : rougeur, irritation ou lésion. Si quelque chose vous inquiète, parlez-en tôt à un professionnel.', m: 'Si des rétractions rendent les jambes difficiles à écarter, ne forcez pas. Travaillez dans l\'amplitude sans douleur, et le plus sûr est de vous faire montrer la méthode par un professionnel qui suit la personne.' }
          ],
          points: [
            { t: 'Créer une atmosphère où elle n\'a jamais à dire « pardon » est la plus grande compétence. Comment créer cette atmosphère diffère selon les personnes. C\'est sur la page suivante.', link: { cat: 'omutsu', proc: 'omu2' } },
            'Après une selle, changer au plus vite plutôt qu\'attendre protège la peau.',
            'Quand les fuites persistent, plus souvent que le placement, la protection ou la couche ne convient pas au corps. Demandez à un magasin ou un professionnel de revoir la taille ou le type.'
          ]
        },
        {
          id: 'omu2', title: 'Le change et le cœur',
          steps: [
            { fig: null, t: 'Le soin d\'élimination montre la différence de « cœur » plus que la différence de savoir-faire. Même rapide et précis, si la personne se sent humiliée, ce n\'est pas la bonne réponse. Et c\'est le seul soin sans « forme correcte » fixe, aux plus grandes différences entre les personnes.' },
            { fig: null, t: 'À certains, faire cela sobrement, comme une tâche ménagère ordinaire, convient. Ne pas en faire toute une affaire rend la gêne la plus petite.' },
            { fig: null, t: 'À d\'autres, bavarder un peu convient mieux. L\'ambiance « ce n\'est ni une peine ni un fardeau » passe, et le sentiment de s\'excuser se dissout.', c: 'Ce qui convient, la personne vous le dira. Son visage, combien elle parle, la tension du corps, combien de fois elle dit « pardon ». Avec une façon qui ne convient pas, cela augmente. Quand cela augmente, c\'est le signe de changer d\'approche.' },
            { fig: null, t: 'Quel que soit le style, il y a un « à ne pas faire » commun. Ne pas grimacer. Ne pas commenter l\'odeur ou la quantité. Ne pas presser. Ne pas reprocher les accidents. C\'est pareil pour tous.' },
            { fig: null, t: 'Décider à l\'avance quoi répondre quand elle dit « pardon » facilite les choses. « On est quittes. » « Vous m\'avez changé quand j\'étais bébé. » Il y a des mots qui marchent justement parce que vous êtes de la famille.', c: 'Mais une plaisanterie peut blesser certains. Qu\'elle rie bien est votre maître ; observez la réaction de la personne.' }
          ],
          points: [
            'Une protection n\'est pas toujours « la seule option ». S\'il reste un moyen d\'aller aux toilettes ou sur une chaise percée, cela protège la dignité et la force du corps. Recourir ou non aux protections est un sujet important qui mérite d\'en discuter avec un professionnel.',
            'Les gestes des mains s\'acquièrent en une ou deux semaines. Relier les cœurs est un tâtonnement qui dure toujours. Il y aura des jours où cela ne marche pas, et c\'est naturel.'
          ]
        }
      ]
    },

    {
      id: 'shokuji', emoji: '🍚', title: 'Aider à manger',
      sub: 'Une posture qui évite les fausses routes et un rythme calme',
      procs: [
        {
          id: 'shoku1', title: 'Une posture sans fausse route et comment aider',
          steps: [
            { fig: null, t: 'Ne commencez que lorsqu\'elle est bien réveillée. Manger somnolent mène à ce que la nourriture passe dans la trachée (fausse route).', c: 'Lavez-vous les mains avant de toucher la nourriture. Des ongles et des mains propres protègent directement la personne des infections.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: 'meal_posture', t: 'Sur une chaise, faites-la s\'asseoir bien au fond, les plantes au sol. Légèrement penchée en avant, le menton rentré, est la posture la moins propice aux fausses routes.', c: 'Quand le menton se lève, la trachée s\'ouvre droit et la nourriture y entre plus facilement. Renverser la tête en arrière et verser la nourriture est dangereux.' },
            { fig: 'bed_up', t: 'Au lit, redressez le haut du corps (au moins 30 degrés, idéalement 60 à 90). Mettez un oreiller derrière la tête pour rentrer le menton.' },
            { fig: null, t: 'Gardez chaque bouchée petite. Amenez la cuillère par en dessous et confirmez la déglutition avant la bouchée suivante. Quand la pomme d\'Adam monte et descend, c\'est le signe d\'une déglutition.', m: 'En cas de paralysie, amenez la cuillère au coin de la bouche du côté fort. Du côté atteint, la nourriture se mâche mal et reste sans qu\'elle le remarque.' },
            { fig: null, t: 'Aider à tout n\'est pas la seule bonne réponse. Vous aidez pour la soupe, et la personne mange les plats solides à la fourchette ou à la cuillère. Une forme « moitié-moitié » est aussi une belle façon. Plus elle mange elle-même, plus sa force et le plaisir de manger sont préservés.' },
            { fig: null, t: 'Même quand vous aidez, si vous pouvez communiquer, laissez-la avoir ce qu\'elle veut, dans l\'ordre qu\'elle veut. Mais la façon de demander diffère. Certains veulent chaque bouchée précisée, d\'autres vous disent en gros et vous laissent faire, d\'autres laissent tout faire.', c: 'Certains trouvent « qu\'on leur demande à chaque fois » agaçant. Quelle façon de demander est agréable, seule la personne peut le décider. Observez sa réaction et trouvez la forme de cette personne.' },
            { fig: null, t: 'Pour quelqu\'un qui fait facilement une fausse route à l\'eau ou au thé, il existe un moyen d\'épaissir. L\'épaisseur qui convient diffère, consultez donc un orthophoniste (spécialiste de la déglutition) ou un médecin ou infirmier.' },
            { fig: null, t: '30 minutes à une heure après le repas, gardez le corps redressé. S\'allonger tout de suite peut causer une fausse route avec ce qui remonte de l\'estomac.' },
            { fig: null, t: 'Vérifiez enfin qu\'aucune nourriture ne reste dans la bouche. Elle a tendance à rester dans les joues et au palais.', m: 'En cas de paralysie, elle reste surtout dans la joue du côté atteint. La personne ne le remarque pas non plus, alors regardez délibérément.' }
          ],
          points: [
            { t: 'Plus de fausses routes, des repas qui durent trop. Ce n\'est peut-être pas une mauvaise aide mais un signe que la force de déglutition a changé. C\'est important, donc c\'est sur la page suivante.', link: { cat: 'shokuji', proc: 'shoku2' } }
          ],
          ng: [
            'Mettre la nourriture en demandant une réponse (parler ouvre la trachée)',
            'La presser. Faire de grosses bouchées',
            'Renverser la tête en arrière et verser'
          ]
        },
        {
          id: 'shoku2', title: 'Quand le repas ralentit',
          steps: [
            { fig: null, t: 'Aider à manger n\'est pas qu\'une tâche. Le repas quotidien est le contrôle de santé le plus proche, et pour la personne le plus grand plaisir. C\'est justement pourquoi « ça ralentit » est un signe important à ne pas manquer.' },
            { fig: null, t: 'Pensez d\'abord aux causes passagères. Malaise, constipation, aphte, prothèse mal ajustée, moral en baisse. Si quelque chose colle et se rétablit en quelques jours, inutile de trop s\'inquiéter.' },
            { fig: null, t: 'Ce qui est à surveiller, c\'est quand cela dure longtemps. Aucune maladie du corps ni raison du cœur ne se trouve, pourtant cela prend du temps, elle fait des fausses routes, garde la nourriture en bouche. Cela peut être le signe que tout l\'ensemble « mâcher, envoyer en arrière avec la langue, synchroniser la déglutition » s\'affaiblit. Cela survient aussi quand une démence change le fonctionnement du cerveau.' },
            { fig: null, t: 'Ce jugement est en fait un domaine difficile même pour les médecins et infirmiers. Un spécialiste de la déglutition (orthophoniste) le remarque souvent, dites donc clairement à votre médecin ou service de conseil : « je veux qu\'un spécialiste de la déglutition examine ».', c: 'Via la rééducation à domicile ou une consultation hospitalière, un examen ou un bilan de déglutition est parfois possible.' },
            { fig: null, t: 'Et voici le plus important, dit honnêtement. « Tant qu\'elle peut manger par la bouche » n\'est pas toujours le but. Pour quelqu\'un dont la déglutition s\'est affaiblie, manger même atteint un stade à risque de pneumonie ou d\'étouffement. Alors « par la bouche même de force » ne peut être la bonne réponse.' },
            { fig: null, t: 'Au-delà, il existe des options comme se nourrir par le nez ou l\'estomac (nutrition par sonde, gastrostomie) ou une perfusion. Ces mots sont peut-être durs rien qu\'à entendre. Mais ce n\'est pas « renoncer » ; c\'est un soin médical pour protéger la personne de la pneumonie et de l\'étouffement.', c: 'Discutez-en bien avec le médecin, prudemment. Mais c\'est aussi une situation où il vaut mieux ne pas trop reporter la décision. Une décision tardive peut acculer la personne et vous.' }
          ],
          points: [
            'Ce jugement n\'est pas à porter par la famille seule. C\'est même un domaine que la famille ne doit pas décider seule. Toujours avec un professionnel.',
            'Votre remarque « sa façon de manger a changé récemment », en tant que celui qui regarde de plus près chaque jour, est exactement l\'information dont un professionnel a le plus besoin.'
          ]
        }
      ]
    },

    {
      id: 'koukuu', emoji: '🦷', title: 'Soins de bouche',
      sub: 'Prévenir la pneumonie commence dans la bouche',
      procs: [
        {
          id: 'kou1', title: 'Brossage et soin de la bouche',
          steps: [
            { fig: null, t: 'Garder la bouche propre est la meilleure prévention de la pneumonie (pneumopathie d\'inhalation) chez les personnes âgées. Faites-en une habitude après les repas.' },
            { fig: null, t: 'Si la personne est disposée, faites-la se brosser elle-même les dents. C\'est en soi une bonne rééducation. Mais elle ne brosse souvent pas assez bien, donc la vérification finale est votre rôle.', c: 'Employez des mots qui ne rendent pas la vérification finale déplaisante. Quelque chose comme « Vous avez bien brossé. Montrez-moi juste le fond à la fin » passe mieux, en reconnaissant l\'effort d\'abord.' },
            { fig: null, t: 'La posture est la même que pour manger. Légèrement penché en avant, le menton rentré. Pour que l\'eau et la saleté ne descendent pas dans la gorge pendant le soin.', link: { cat: 'shokuji', proc: 'shoku1' } },
            { fig: null, t: 'Retirez les prothèses et nettoyez-les avec une brosse à prothèses. N\'utilisez pas de dentifrice ordinaire ; l\'abrasif raye les prothèses. La nuit, retirez-les et faites-les tremper dans l\'eau ou un nettoyant.' },
            { fig: null, t: 'Pour quelqu\'un qui ne peut pas se rincer, essuyez doucement avec une brossette-éponge presque sans eau, ou avec une gaze humide enroulée autour d\'un doigt.' },
            { fig: null, t: 'Nettoyez doucement non seulement les dents mais aussi la langue, le palais et l\'intérieur des joues. N\'essayez pas d\'enlever la saleté incrustée d\'un coup.', m: 'En cas de paralysie, la saleté s\'accumule entre la joue et la gencive du côté atteint, soyez-y attentif et doux.' },
            { fig: null, t: 'Ce n\'est pas grave si ce n\'est pas parfait à chaque fois. Mais gardez le minimum avant de se coucher. Retirer les prothèses. Enlever la nourriture restée en bouche. Rien que ces deux, chaque soir sans faute.', c: 'Pendant le sommeil, ce qui reste en bouche peut passer sans qu\'on le remarque dans la trachée, et une pneumonie commence en silence. Invisible mais menaçant la vie, le plus grand danger caché des soins de bouche.' },
            { fig: null, t: 'Saignement persistant, aphte, douleur, prothèse mal ajustée. Alors consultez un dentiste. Il existe aussi un système de « dentiste à domicile ».' }
          ],
          points: [
            'Les jours où elle résiste, inutile de viser la perfection. Mais gardez juste « retirer les prothèses et enlever les restes de nourriture avant le coucher » comme minimum quotidien.',
            'La bouche est une partie du corps particulièrement intime. Même un soin qui protège la vie blesse le cœur s\'il devient forcé. La vie et le cœur comptent autant. Si l\'un manque, on s\'éloigne du bonheur.'
          ]
        }
      ]
    },

    {
      id: 'kigae', emoji: '👕', title: 'S\'habiller',
      sub: 'La règle : déshabiller d\'abord le côté fort',
      procs: [
        {
          id: 'kigae1', title: 'Changer un haut (vêtement ouvert devant)',
          steps: [
            { fig: 'datsuken', t: 'Quand un côté est difficile à bouger à cause d\'une paralysie ou d\'une douleur, la règle est : déshabiller en commençant par le côté fort, habiller en commençant par le côté difficile à bouger (atteint).', c: 'Ne tirez pas fort sur une main ou un bras. Cela peut blesser l\'épaule ou faire un bleu.' },
            { fig: null, t: 'Déshabiller. Sortez d\'abord le bras du côté fort de la manche. Puis sortez lentement le côté difficile à bouger.' },
            { fig: null, t: 'Habiller. Passez d\'abord le bras du côté difficile à bouger. Cela passe facilement si vous froncez la manche et allez à la rencontre de la main.', c: 'Quand un doigt s\'accroche dans la manche et ne passe pas, ne forcez pas. Pousser avec un ongle accroché peut arracher l\'ongle, une blessure grave. Cela arrive même aux professionnels. Reculez-le doucement, refroncez la manche, et réessayez.', m: 'Quand une rétraction empêche le coude de se tendre, n\'essayez pas de tendre le bras ; froncez plutôt le vêtement par-dessus. Un tissu ample et extensible est bien plus facile.' },
            { fig: null, t: 'Une fois enfilé jusqu\'à l\'épaule, faites passer le bras du côté fort. Laissez-la faire ce qu\'elle peut.' },
            { fig: null, t: 'Lissez enfin les plis sous le dos et les fesses. S\'allonger sur des plis cause des escarres.' }
          ],
          points: [
            'Le choix des vêtements fait aussi partie de la technique de soin. Les rendre ouverts devant, amples et extensibles rend l\'habillage bien plus facile.',
            'Pas seulement en s\'habillant, mais aussi après un transfert ou un fauteuil, ou après les toilettes, les vêtements se dérangent facilement. Pantalon glissé, ourlet retroussé. Le remarquer et le rajuster discrètement. Rajuster les vêtements en désordre est une base du soin qui protège la dignité de la personne.',
            'S\'habiller est aussi une précieuse occasion de voir tout le corps. Rougeur de la peau, bleus, œdème, plaies. Si vous pouvez naturellement y avoir l\'œil en aidant, c\'est déjà un bon soin.'
          ]
        },
        {
          id: 'kigae2', title: 'Changer un pantalon (en position allongée)',
          steps: [
            { fig: null, t: 'D\'abord un point d\'état d\'esprit. Habiller le bas du corps est le soin où la gêne ressort le plus. Même sans démence, être refusé ou peu coopératif est naturel.', c: 'En somme, c\'est la sincérité de vos mots et de votre attitude. Dites le but « vous vous sentirez frais après le change », couvrez d\'une serviette, ne regardez pas là où ce n\'est pas nécessaire, et soyez rapide. Perdez la confiance ici et elle peut refuser le change lui-même. Un soin qui protège dignité et hygiène à la fois.' },
            { fig: null, t: 'Passez d\'abord la jambe difficile à bouger. Remontez dans l\'ordre : cheville, genou, cuisse.', c: 'Si un orteil s\'accroche à l\'ourlet, la force est interdite. Les ongles arrachés sont une blessure classique de l\'habillage. Reculez-le une fois, refroncez l\'ourlet, et passez-le.' },
            { fig: null, t: 'Pour quelqu\'un qui peut soulever les hanches, faites-lui plier les genoux et lever les fesses. À ce moment, remontez le pantalon jusqu\'à la taille.' },
            { fig: null, t: 'Pour quelqu\'un qui ne peut pas soulever les hanches, inclinez le corps d\'un côté puis de l\'autre en alternance et remontez un côté à la fois. Tourner sur le côté se fait comme pour le repositionnement.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Ajustez la position de la taille et les plis, et c\'est fini.' }
          ]
        }
      ]
    },

    {
      id: 'seishiki', emoji: '🛁', title: 'Faire la toilette et le bain',
      sub: 'Au chaud, en sécurité et proprement',
      procs: [
        {
          id: 'sei1', title: 'Faire la toilette (au lit)',
          steps: [
            { fig: null, t: 'Chauffez d\'abord la pièce (visez 22 à 24°C / 72 à 75°F). Le froid raidit le corps et fait monter la tension.' },
            { fig: null, t: 'Essorez le linge dans une eau assez chaude, environ 55 à 60°C (130 à 140°F), et il aura juste la bonne chaleur au contact de la peau. Vérifiez la température au préalable sur l\'intérieur de votre propre bras.' },
            { fig: null, t: 'Ne découvrez que la partie que vous lavez et gardez le reste couvert d\'un drap de bain. Égard à la fois pour le froid et pour la gêne.' },
            { fig: 'wipe_direction', t: 'Essuyez les membres de l\'extrémité vers le centre du corps (main vers l\'épaule, pied vers la cuisse). Cela suit le sens de la circulation du sang.' },
            { fig: null, t: 'L\'ordre est visage, bras, poitrine, ventre, jambes, dos, fesses, des zones les plus propres d\'abord. Après avoir essuyé, reprenez l\'humidité aussitôt avec un linge sec. Laissée humide, elle cause refroidissement et problèmes de peau.', m: 'Une paume rétractée, les aisselles et l\'intérieur des coudes accumulent sueur et saleté. Ne les ouvrez pas de force ; essuyez doucement jusqu\'où cela s\'ouvre sans douleur.' },
            { fig: null, t: 'Ce n\'est pas grave si ce n\'est pas tout le corps chaque jour. Le diviser, haut du corps aujourd\'hui et bas demain, ne fatigue ni la personne ni vous.' }
          ],
          points: [
            'Toilette et bain sont des exemples types de soins souvent refusés. Les jours de refus, n\'insistez pas ; juste le visage et les mains aujourd\'hui, les pieds demain, convient. Penser la propreté en semaines plutôt qu\'en jours est à peu près juste.'
          ]
        },
        {
          id: 'sei2', title: 'Se baigner en sécurité',
          steps: [
            { fig: null, t: 'D\'abord, une chose à savoir. Un bain n\'est pas « un événement qui ne fait que du bien ». Cela demande de l\'énergie. C\'est pénible. C\'est gênant. Elle ne veut pas être un fardeau. Elle manque de confiance en son corps. Les raisons de refuser sont nombreuses, et toutes naturelles.', c: 'Même les gens en bonne santé ont des jours de « je n\'ai pas le courage de me laver aujourd\'hui ». Ne pas le comprendre mène au soin erroné de forcer. Les jours de refus, laissez une échappatoire : juste la toilette, juste un bain de pieds, ou un autre jour.' },
            { fig: null, t: 'En hiver, chauffez d\'abord le vestiaire et la salle de bain. Un écart de température soudain fait fortement varier la tension et provoque un malaise (choc thermique).' },
            { fig: null, t: 'Repère : eau pas plus chaude que 41°C (106°F) et bain de 10 minutes au maximum. Les longs bains chauds sont les plus dangereux.', m: 'Le côté atteint sent mal la chaleur et c\'est là que les brûlures passent inaperçues. Versez la douche ou l\'eau petit à petit, en commençant par le côté non atteint.' },
            { fig: null, t: 'Évitez de se baigner à jeun, juste après un repas ou après avoir bu de l\'alcool.' },
            { fig: null, t: 'Le moment d\'enjamber le bord de la baignoire est la chute la plus probable. Utilisez des mains courantes, un rehausseur de baignoire et un tapis antidérapant.', c: 'Du matériel comme des mains courantes et des chaises de douche peut parfois s\'emprunter ou s\'obtenir à bas prix via un service de conseil en soin. Demandez à un professionnel.' },
            { fig: null, t: 'Pendant le bain, ne la quittez pas des yeux. Quand le corps se réchauffe dans l\'eau, la circulation et la tension changent, la conscience peut se troubler, et elle peut même perdre connaissance comme en s\'endormant. La noyade dans le bain arrive ainsi, en silence.', c: 'Si possible, restez ensemble dans la salle de bain ou le vestiaire. Bavardez agréablement pendant qu\'elle se réchauffe lentement. C\'est le plus rassurant pour vous deux.' }
          ],
          points: [
            'Quand le bain à la maison devient difficile, beaucoup de familles font assurer juste le bain par un service de jour. Ce n\'est pas bâcler ; c\'est un bon choix pour la sécurité.'
          ]
        }
      ]
    },

    {
      id: 'hokou', emoji: '🚶', title: 'Accompagner la marche et prévenir les chutes',
      sub: 'Rendre le logement sûr contre les chutes, c\'est la moitié du travail',
      procs: [
        {
          id: 'hok1', title: 'Comment accompagner la marche',
          steps: [
            { fig: 'walk_position', t: 'L\'accompagnant se place légèrement en arrière et sur le côté du côté faible de la personne (le côté paralysé). La position pour la soutenir aussitôt si elle vacille.' },
            { fig: null, t: 'Savoir pourquoi on tombe change la façon de soutenir. La plupart des chutes commencent par « le pied ne se lève pas autant que prévu et on trébuche » ou « la plante ne se pose pas à plat et la cheville se tord ». Puis la chute arrive parce qu\'un pas de rattrapage ne vient pas à temps.', c: 'Autrement dit : si vous pouvez juste soutenir cet instant de vacillement, vous évitez la pire chute. Être prêt à « soutenir ce pas à tout moment », c\'est la première mission de l\'aidant.' },
            { fig: null, t: 'Plutôt que de tenir la main, soutenir légèrement sous l\'aisselle ou aux hanches permet de la rattraper si elle s\'effondre. Faites tenir à la personne une main courante ou une canne.', m: 'Pour quelqu\'un qui porte une orthèse de jambe (un dispositif d\'aide à la marche), ne la posez pas à votre façon ; suivez exactement ce qu\'un professionnel de la rééducation a montré. Tenez la canne dans la main du côté non atteint.' },
            { fig: null, t: 'Ne la pressez pas. La seule phrase « doucement, ça va » est la meilleure prévention des chutes.' }
          ]
        },
        {
          id: 'hok2', title: 'Prévenir les chutes dans le logement',
          steps: [
            { fig: null, t: 'Réduisez les dangers au sol. Câbles électriques, tapis qui rebiquent, journaux ou sacs qui traînent, petites marches. La plupart des chutes arrivent à ces endroits dans le logement.' },
            { fig: null, t: 'Mettez une lumière au niveau du sol sur le chemin des toilettes la nuit. Une petite veilleuse à détecteur de mouvement est pratique.' },
            { fig: null, t: 'Les pantoufles glissent facilement car le talon n\'est pas tenu, donc des chaussons couvrant le talon sont plus sûrs.' },
            { fig: null, t: 'Une main courante ou un meuble stable à saisir aux endroits souvent traversés rassure. Surveillez aussi l\'habitude de s\'accrocher à des meubles branlants.' }
          ],
          points: [
            'Pour la pose de mains courantes et la suppression des marches, des aides publiques sont parfois mobilisables. Renseignez-vous auprès d\'un service local de conseil en soin.'
          ]
        },
        {
          id: 'hok3', title: 'Bâtir un corps résistant aux chutes : exercices assis',
          steps: [
            { fig: null, t: 'La prévention des chutes n\'est pas que la marche. De petits exercices assis, accumulés, développent « la force de lever le pied » et « la force de se poser à plat ». Ne forcez pas ; même devant la télé, c\'est bien.' },
            { fig: null, t: 'Lever de cuisse. Assis sur une chaise, levez lentement une cuisse et abaissez-la. En alternance. Cela garde la force de lever le pied et réduit les faux pas.' },
            { fig: null, t: 'Rotation de cheville. Levez un peu le pied et faites tourner la cheville lentement, dans les deux sens. Une cheville souple encaisse le vacillement à l\'atterrissage.' },
            { fig: null, t: 'Lever des orteils et des talons. Assis, gardez le talon au sol et levez les orteils. Puis gardez les orteils au sol et levez le talon. La force de poser la plante à plat, ce sont ces muscles du tibia et du mollet qui la portent.' },
            { fig: null, t: 'Le nombre de répétitions suffit à « autant qu\'on termine agréablement ». Un peu chaque jour agit mieux que beaucoup de temps en temps. Les jours de refus, une pause convient.' }
          ],
          points: [
            'Cet exercice ne demande ni matériel ni argent. C\'est l\'assurance la moins chère pour « continuer à marcher en sécurité et avec plaisir ».'
          ]
        }
      ]
    },

    {
      id: 'futon', emoji: '🛌', title: 'Soin sur un futon',
      sub: 'Astuces pour le soin au sol et l\'option du lit',
      procs: [
        {
          id: 'futon1', title: 'Quand vous soignez sur un futon',
          steps: [
            { fig: null, t: 'D\'abord la conclusion importante. Si le soin risque de durer, nous recommandons vivement d\'emprunter ou d\'installer un lit médicalisé électrique. Pouvoir soigner à hauteur de hanche change tout, tant la charge sur votre dos que la sécurité de la personne.', c: 'En de nombreux endroits, un tel matériel se loue pour une faible somme mensuelle via une assurance dépendance ou des dispositifs d\'aide. Renseignez-vous auprès d\'un service local de conseil en soin.' },
            { fig: null, t: 'Cela dit, pour tous ceux qui soignent encore ce soir sur un futon, voici des astuces pour le sol. Le soin sur un futon n\'est pas « impossible » ; seule la façon d\'utiliser le corps diffère un peu d\'un lit.' },
            { fig: 'kneel_assist', t: 'Pour aider depuis le sol, ne restez pas debout à vous pencher au niveau du dos. Un genou au sol, l\'autre relevé : le « demi-agenouillement » est la posture de base. Abaissez votre corps et rapprochez-vous de la personne.', c: 'Un demi-agenouillement vacille moins d\'avant en arrière que les deux genoux au sol et laisse mettre plus de force.' },
            { fig: null, t: 'Tourner sur le côté et changer la protection se font comme au lit (relever les genoux, basculer vers soi). Seule votre posture diffère. En demi-agenouillement, tirez avec tout le corps, pas avec la force des bras.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Se relever du sol se fait dans l\'ordre : sur le dos, sur le côté, à quatre pattes, en demi-agenouillement, puis debout. Plutôt que de la redresser droit, faire bouger la personne « en passant par quatre pattes » est bien plus facile pour vous deux.', c: 'Pour soutenir au moment de se lever, un meuble bas stable (une chaise solide par exemple) peut servir de main courante.' },
            { fig: null, t: 'La faiblesse d\'un futon est qu\'un matelas médical de répartition de pression est difficile à utiliser. Pour quelqu\'un sujet aux escarres, gardez délibérément l\'intervalle de repositionnement plus court. Un futon fin et dur demande une attention particulière.', link: { cat: 'taii', proc: 'taii2' } },
            { fig: null, t: 'Et une fois encore. Le pliage quotidien du futon et le soin au sol usent votre dos, c\'est certain. Tant que vous pensez encore « ça va », commencez à vous renseigner sur un lit. Votre dos est l\'outil le plus important du soin.' }
          ],
          points: [
            'Futon ou lit n\'est pas mieux ou pire mais un choix de vie. Mais cela fait une nette différence pour l\'usure du corps de l\'aidant.',
            'En passant à un lit, tenez compte aussi des sentiments de la personne. Demander « prête-le-moi pour mon dos » plutôt que « pour toi » est souvent mieux accepté.'
          ]
        }
      ]
    },

    {
      id: 'kobetsu', emoji: '🩺', title: 'En cas de maladie ou de handicap',
      sub: 'Quand vous ne devez pas utiliser ces bases telles quelles',
      procs: [
        {
          id: 'kobetsu1', title: 'Quand il faut des « conseils personnalisés »',
          steps: [
            { fig: null, t: 'Les gestes de cette application sont les bases « générales » du soin pour un corps adulte. Mais selon la maladie ou le handicap, la même méthode peut causer une blessure. À partir des pages suivantes, vérifiez si quelque chose s\'applique. Si oui, gardez cette application comme simple repère et faites-vous impérativement montrer la façon adaptée à la personne.' },
            { fig: 'no_pull', t: 'Personnes aux os fragiles. Ostéoporose sévère, alitement prolongé, maladie des os de verre, etc. Elles peuvent se fracturer même à faible force, donc le soin qui porte et tire doit se faire sous conseils personnalisés.', c: 'Ne donnez jamais un soin qui tire sur un bras ou une jambe, pour personne. C\'est particulièrement dangereux avec des os fragiles.' },
            { fig: null, t: 'Personnes aux articulations raides et difficiles à bouger (rétractions). Les forcer à se tendre abîme l\'articulation et la peau. L\'« amplitude sans douleur » diffère selon la personne, donc le plus sûr est de se faire montrer en personne par un professionnel.' },
            { fig: null, t: 'Personnes atteintes d\'une maladie évolutive. Myopathie, SLA, etc. Le corps change sans cesse, si bien que la bonne réponse d\'hier devient le danger d\'aujourd\'hui. Revoyez la méthode régulièrement avec un professionnel. Il y a aussi des maladies où trop solliciter les muscles nuit au corps.' },
            { fig: null, t: 'Personnes en situation de polyhandicap. Déformation du corps, hanches qui se luxent facilement, respiration faible ; chaque corps est complètement différent. Un domaine où même les professionnels ont besoin d\'un apprentissage adapté à chacun. Les méthodes improvisées sont interdites.' },
            { fig: null, t: 'Personnes utilisant du matériel médical comme respirateur, trachéotomie, alimentation par le nez ou l\'estomac, ou oxygène à domicile. Il y a des règles médicales pour la posture et les mouvements. Les instructions du médecin et de l\'infirmier priment sur tout.' },
            { fig: null, t: 'Personnes à qui un médecin a indiqué des restrictions de mouvement. Maladie cardiaque, après une fracture, pendant la dialyse, etc. Vérifiez le détail des restrictions avant de décider du soin.' },
            { fig: null, t: 'Vous pouvez demander des conseils personnalisés au médecin, à un infirmier à domicile, aux spécialistes de la rééducation à domicile (kinésithérapeutes et ergothérapeutes) ou, pour une personne handicapée, à un coordinateur d\'accompagnement. Dites « montrez-moi comment faire à la maison », et on vous montrera la façon adaptée à la personne, dans la vraie chambre et le vrai lit.' }
          ],
          points: [
            'Demander des conseils personnalisés n\'est pas exagéré. Montrer aux familles comment faire à la maison est une part importante du travail d\'un professionnel.',
            '« Dans le cas de cette personne, à quoi dois-je faire attention ? » Cette question est la meilleure question.'
          ]
        }
      ]
    }
  ],

  danger: [
    {
      id: 'chissoku', emoji: '🆘', title: 'Étouffement (voies aériennes obstruées)', sub: 'Quand aucun son ne sort, chaque seconde compte',
      fig: 'choking_back', cpr: true,
      when: [
        'Détresse soudaine pendant un repas, incapable d\'émettre un son ou de tousser',
        'Se saisir la gorge à deux mains (le signe de l\'étouffement)',
        'Le teint se dégrade rapidement'
      ],
      act: [
        'S\'il peut émettre un son ou tousser, faites-le d\'abord tousser fort. La toux est la force la plus puissante pour expulser',
        'S\'il ne peut pas tousser, penchez-le en avant et frappez fermement 4 à 5 fois entre les omoplates avec le talon de la main (claques dans le dos)',
        'Si cela ne sort pas, entourez-le de vos bras par derrière, faites un poing juste au-dessus du nombril et poussez vite vers l\'intérieur et le haut (compressions abdominales). Alternez avec les claques dans le dos',
        'Ne faites pas de compressions abdominales sur une femme enceinte ou un nourrisson (claques dans le dos seulement)',
        'Après des compressions abdominales, consultez toujours ensuite. Les organes internes doivent être vérifiés'
      ],
      call: [
        'L\'obstruction ne sort pas',
        'Il devient mou ou ne répond plus. Appelez aussitôt les secours. Mettez le téléphone sur haut-parleur et on vous guidera'
      ]
    },
    {
      id: 'goen', emoji: '😮‍💨', title: 'Plus de fausses routes, peut-être une pneumonie', sub: 'La pneumonie du sujet âgé commence en silence',
      when: [
        'Les fausses routes pendant les repas ont augmenté par rapport à avant',
        'Plus de glaires après manger. Une voix gargouillante',
        'Une énergie en baisse. L\'appétit a chuté. Une fièvre légère persiste'
      ],
      act: [
        'La pneumonie du sujet âgé ne montre souvent ni toux nette ni forte fièvre. « Un peu différent d\'habitude » peut être le seul signe',
        { t: 'Revoyez la posture au repas et la position du menton', link: { cat: 'shokuji', proc: 'shoku1' } },
        'Notez les changements. Dire juste « les fausses routes ont augmenté » est une information importante pour le médecin'
      ],
      see: [
        'Quand des fausses routes accrues ou une fièvre légère persistent. Parlez-en tôt à votre médecin traitant'
      ],
      call: [
        'La respiration semble difficile. Respirer avec les épaules',
        'Les lèvres ou le visage ont mauvaise couleur. Il est mou'
      ]
    },
    {
      id: 'tentou', emoji: '🩹', title: 'Une chute, ou tomber du lit', sub: 'Ne le relevez pas précipitamment',
      when: [
        'Quand vous constatez qu\'elle est tombée (y compris pendant votre absence)'
      ],
      act: [
        'Ne la relevez pas précipitamment. Vérifiez d\'abord si elle est consciente, s\'il y a une forte douleur et si les membres semblent déformés',
        'Ne peut pas bouger tant la douleur est forte, une jambe a une forme ou un angle anormal. Alors il peut y avoir une fracture, appelez une ambulance sans la bouger',
        'S\'il n\'y a pas d\'anomalie majeure, relevez-la lentement et surveillez la journée',
        'Si elle s\'est cogné la tête, surveillez 24 à 48 heures même si elle semble bien sur le moment. Une personne sous anticoagulants demande une attention particulière'
      ],
      call: [
        'Pas de conscience. Hébétée et répondant bizarrement',
        'Après un coup à la tête : vomissements, convulsion ou parole embrouillée',
        'Ne peut pas bouger tant la douleur est forte. Un os est nettement déformé'
      ]
    },
    {
      id: 'dassui', emoji: '🌡️', title: 'Fièvre, ou ne peut pas boire', sub: 'Les personnes âgées perçoivent mal la soif',
      when: [
        'Une bouche sèche. Des lèvres gercées',
        'Uriner moins souvent. Couleur plus foncée',
        'Molle. Somnolente et lente à réagir'
      ],
      act: [
        'Les personnes âgées sentent mal la soif et se déshydratent sans le remarquer. Cela arrive non seulement en été mais aussi en hiver et lors de fièvre',
        'Si elle peut boire, donnez à boire petit à petit, souvent. Un soluté de réhydratation orale avec sel et sucre convient',
        'Vérifiez aussi la température de la pièce. Est-elle trop couverte dans une pièce chaude'
      ],
      see: [
        'La fièvre persiste. Elle ne peut boire qu\'un peu. Voyez tôt votre médecin traitant'
      ],
      call: [
        'Elle ne prend aucun liquide. Elle vomit juste après avoir bu',
        'Molle et réagissant bizarrement. Une convulsion'
      ]
    },
    {
      id: 'jokusou', emoji: '🔴', title: 'Fesses ou talons rouges (escarre)', sub: 'Le signe est « une rougeur qui ne s\'efface pas à la pression »',
      when: [
        'Rougeur là où les os saillent (centre des fesses, talons, épaules, arrière de la tête)',
        'Rougeur qui ne blanchit pas à une légère pression du doigt',
        'Une cloque, une peau qui pèle ou une décoloration foncée'
      ],
      act: [
        { t: 'Une rougeur qui ne blanchit pas à la pression est le début d\'une escarre. Couchez-la de sorte qu\'aucun poids ne repose sur ce point', link: { cat: 'taii', proc: 'taii1' } },
        'Ne massez pas, ne frottez pas et ne séchez pas au sèche-cheveux. Cela abîme l\'intérieur de la peau et l\'aggrave',
        'S\'il y a une plaie, l\'ancien « sécher pour guérir » n\'est pas le standard actuel. Le soin de plaie actuel repose sur « garder modérément humide ». Ne la séchez pas de votre propre chef',
        'Toutefois, si cela suppure ou en cas de crainte d\'infection, garder humide peut nuire. Confirmez toujours la méthode elle-même avec un infirmier ou un médecin',
        'Maigrir ou manger moins est un signe d\'alerte majeur d\'escarre. Refaire la nutrition fait aussi partie du traitement',
        'Pour une rougeur dans la protection, distinguer escarre et irritation compte. N\'appliquez pas de pommade en continu de votre propre chef'
      ],
      see: [
        'Il y a une cloque, une peau qui pèle ou une décoloration foncée (une escarre avancée). Montrez-la à un infirmier ou un médecin',
        'Quand la rougeur ne s\'efface pas après plusieurs jours'
      ]
    },
    {
      id: 'fast', emoji: '⚡', title: 'Signes d\'un AVC (FAST)', sub: 'Ne pas attendre. C\'est une course contre le temps',
      fig: 'fast_signs',
      when: [
        'Face (visage). Quand vous lui demandez de sourire, un coin de la bouche ne se lève pas',
        'Arm (bras). Quand les deux bras sont levés devant, l\'un s\'affaisse',
        'Speech (parole). Parole embrouillée. Les mots ne viennent pas',
        'Si un seul s\'applique, c\'est une course contre le Time (temps)'
      ],
      act: [
        'Notez l\'heure de début (la dernière fois qu\'elle allait bien). Information importante pour le choix du traitement',
        'Couchez-la dans une position confortable et tournez le visage sur le côté si elle risque de vomir',
        'Ne mettez ni nourriture, ni boisson, ni médicament dans la bouche'
      ],
      call: [
        'Dès que vous remarquez les signes, n\'attendez pas ; appelez aussitôt les secours. L\'AVC est une maladie où « plus tôt on arrive à l\'hôpital, plus légères sont les séquelles »'
      ]
    },
    {
      id: 'ishiki', emoji: '🚨', title: 'Aucune réponse à l\'appel', sub: 'Dans le doute, appelez ; c\'est la bonne réponse',
      cpr: true,
      when: [
        'Aucune réponse même en l\'appelant ou en tapotant légèrement l\'épaule'
      ],
      act: [
        'Appelez aussitôt les secours. Mettez sur haut-parleur et agissez en suivant les consignes',
        'Vérifiez s\'il y a une respiration normale (regardez la poitrine et le ventre bouger environ 10 secondes)',
        'S\'il y a une respiration, tournez le corps sur le côté et levez légèrement le menton (pour que les vomissures n\'obstruent pas la gorge)',
        'S\'il n\'y a pas de respiration normale, suivez les consignes téléphoniques et commencez les compressions thoraciques (réanimation)'
      ],
      call: [
        'Pour ce point, « appeler dans le doute » est la bonne réponse. Si ce n\'était finalement pas si grave, c\'est le meilleur résultat'
      ]
    }
  ],

  cpr: {
    open: '❤️ Comment faire les compressions thoraciques et le rythme',
    title: 'Compressions thoraciques (réanimation)',
    intro: 'C\'est pour une personne qui ne répond pas et ne respire pas normalement. Dans le doute, commencez.',
    firstTitle: 'Avant tout',
    first: 'Appelez le numéro des secours de votre pays et mettez sur haut-parleur. Le régulateur vous dira quoi faire au téléphone. Ces consignes priment. Utilisez cette page en appui.',
    stepsTitle: 'Comment faire',
    steps: [
      'Couchez-la sur le dos sur un sol ferme. Sur un lit mou, la force de poussée s\'échappe',
      'Posez le talon d\'une main au centre de la poitrine et l\'autre main par-dessus',
      'Tendez les coudes et poussez droit vers le bas avec le poids du corps, assez fort pour enfoncer la poitrine d\'environ 5 cm (2 pouces)',
      'À chaque poussée, relâchez jusqu\'à ce que la poitrine retrouve sa hauteur d\'origine. Gardez les mains sur la poitrine',
      'À un rythme de 100 à 120 par minute, continuez avec le moins de pauses possible jusqu\'à l\'arrivée de l\'ambulance',
      'La respiration artificielle n\'est pas indispensable. Continuer à pousser est le plus important',
      'Fatigué, relayez sans hésiter. À l\'arrivée d\'un DAE (défibrillateur automatisé), allumez-le et suivez les consignes vocales'
    ],
    metroStart: 'Jouer le rythme (110 par minute)',
    metroStop: 'Arrêter le rythme',
    metroHint: 'Poussez une fois à chaque battement. Un ton plus aigu retentit tous les 30 battements',
    note: 'La force peut casser une côte, mais la vie prime. En de nombreux endroits, un secours porté de bonne foi et sans faute grave est protégé (assistance à personne en danger). N\'hésitez pas, s\'il vous plaît.'
  },

  self: [
    {
      id: 'koshicare', emoji: '💪', title: 'Avant et après vous être fait mal au dos', sub: 'Votre corps est l\'outil le plus important du soin',
      secs: [
        { h: 'Le soin est un « travail pour le dos »', body: [
          'Même chez les soignants, le mal de dos est la première maladie professionnelle. Si un proche non formé se fait mal au dos, ce n\'est pas parce que vous êtes faible. C\'est tout naturel.',
          'C\'est justement pourquoi faites de la page « Protéger votre dos » de l\'onglet Gestes une habitude, à chaque fois.'
        ], ref: { cat: 'koshi', proc: 'koshi1' }},
        { h: 'Protéger avec l\'environnement et le matériel', body: [
          'Avec un lit réglable en hauteur, montez-le à environ votre propre hauteur de hanche pour soigner. Le soin en position basse est une cause majeure de mal de dos.',
          'Il existe des aides qui reportent la force sur le matériel, comme les draps de glissement et les mains courantes de lever. Elles s\'empruntent souvent via un service de conseil en soin, alors demandez.'
        ]},
        { h: 'Si vous vous faites tout de même mal', body: [
          'Ne continuez pas en endurant la douleur. Si elle empire, vous ne pourrez plus poursuivre le soin lui-même.',
          'Une forte douleur, ou une douleur avec engourdissement de la jambe, doit être vue tôt.'
        ]}
      ]
    },
    {
      id: 'kakae', emoji: '🌧️', title: 'Ne portez pas cela seul', sub: 'Se reposer n\'est pas fuir, c\'est une compétence',
      secs: [
        { h: 'Ce sont des signes de votre limite', body: [
          'Ne pas dormir la nuit. Pas d\'appétit. La colère éclate pour un rien. Les larmes viennent. Vous avez rudoyé la personne. Vous voudriez disparaître.',
          'Si un seul sonne juste, ce n\'est pas que « vous êtes faible » mais un signal de votre corps disant « vous avez besoin de repos ».'
        ]},
        { h: 'Se reposer n\'est pas fuir, c\'est une compétence', body: [
          'Pour continuer le soin, il faut du temps loin de lui. Se faire relayer pour se reposer s\'appelle « accueil de répit », et c\'est mis en place comme une évidence partout dans le monde.',
          'Garde de quelques heures, garde de nuit, aide qui vient chez vous. Quelles options existent dans votre région, un service de conseil en soin peut vous le dire.'
        ]},
        { h: 'On a le droit de le dire à voix haute', body: [
          'Dire « le soin est dur » ne signifie pas que vous en êtes venu à ne plus aimer la personne.',
          'Un lieu pour parler avec des familles dans la même situation (groupes d\'aidants et rencontres) peut être un soulagement surprenant, rien que d\'être compris.'
        ]}
      ]
    },
    {
      id: 'makaseru', emoji: '🤝', title: 'Confiez aux professionnels ce que vous ne pouvez pas', sub: 'Ce n\'est pas fuir, c\'est une façon de vous protéger tous les deux',
      secs: [
        { h: 'Vous pouvez passer la main avant qu\'un accident arrive', body: [
          'Plus une famille soigne par bonne volonté, plus elle se blâme profondément après un accident. Le regret « si seulement je n\'avais pas forcé » est assez lourd pour briser le cœur.',
          'Alors cette application le répète encore et encore. Confiez ce qui est difficile, ce dont vous doutez, aux professionnels avant qu\'un accident arrive. Ce n\'est pas une défaite, c\'est la décision la plus sage qui vous protège, vous et la personne.'
        ]},
        { h: 'Le soin par la famille n\'est pas toujours le meilleur', body: [
          'Vous n\'avez pas à croire « le soin par la famille est le meilleur ». Par exemple, beaucoup trouvent les toilettes ou le bain plus à l\'aise avec quelqu\'un d\'autre (un professionnel) qu\'avec la famille.',
          'Pour la dignité de la personne aussi, il y a bien des situations où la main d\'un professionnel vaut mieux.'
        ]},
        { h: 'Plus vous passez la main, plus vous redevenez famille', body: [
          'Si vous portez tout le soin, vous devenez entièrement « l\'aidant », et votre temps de fille, fils, épouse ou époux disparaît.',
          'Pour chaque heure confiée à un professionnel, vous pouvez redevenir « famille ». Le temps de boire un thé et rire ensemble vaut peut-être plus que n\'importe quelle technique de soin.'
        ]}
      ]
    },

    {
      id: 'soudan', emoji: '🗺️', title: 'Savoir vers qui vous tourner', sub: 'Avant d\'être en difficulté, apprenez juste les lieux',
      secs: [
        { h: 'Avant d\'être vraiment coincé', body: [
          'L\'astuce est d\'apprendre vers qui se tourner tant qu\'on va encore bien, plutôt que de chercher une fois vraiment coincé.'
        ]},
        { h: 'Voici des lieux vers qui vous tourner', body: [
          'Un service local d\'information pour les personnes âgées (en bien des endroits, un guichet ou un centre où l\'on peut se renseigner sur le soin, souvent gratuitement).',
          'Un coordinateur de soins (votre conseiller si vous utilisez un service d\'aide).',
          'Votre médecin traitant, un infirmier à domicile (le corps et le médical). Un dentiste à domicile, un pharmacien (la bouche et les médicaments).',
          'Pour le soin d\'un proche en situation de handicap, un coordinateur d\'accompagnement peut être votre conseiller.',
          'Un groupe d\'aidants ou de familles dans la même situation (les affaires du cœur).'
        ]},
        { h: 'Une astuce pour bien se confier', body: [
          'Il est acceptable de rester dans l\'état « je ne sais même pas ce qui me tracasse ». « Je galère, mais je ne sais pas par où commencer » est une belle première phrase pour se confier.'
        ]},
        { h: 'Le service de conseil « Soyogi » qui a fait cette app', body: [
          'Soyogi, un service de conseil en soin et accompagnement. C\'est le service privé à but non lucratif qui réalise cette application.',
          'Quand il est difficile d\'aller aux guichets publics, ou que vous n\'avez de temps que le soir, vous pouvez vous confier anonymement en ligne (dans un métavers). Ce conseil est un service en langue japonaise (1000 yens par 30 minutes ; une réservation est plus fluide).'
        ], link: { href: 'https://soyogi.hp.peraichi.com/top', label: '🍃 Voir le site de Soyogi' }}
      ]
    },
    {
      id: 'kanpeki', emoji: '🍵', title: 'Ne visez pas la perfection', sub: 'Tenir à 60 points vaut mieux que s\'effondrer à 100',
      secs: [
        { h: 'Tenir à 60 points est plus fort', body: [
          'Plutôt que de donner chaque jour un soin parfait et de s\'effondrer, tenir longtemps en coupant quelques coins est aussi plus heureux pour la personne.',
          'Plats tout prêts, objets jetables, l\'impasse occasionnelle. Tout cela est « des compétences pour tenir ».'
        ]},
        { h: 'Ne comparez pas', body: [
          'Vous n\'avez pas à comparer avec le soin d\'un autre foyer, ni avec le soin admirable à la télé ou sur les réseaux. La bonne réponse pour votre foyer n\'est que dans votre foyer.'
        ]},
        { h: '« J\'ai tenu aujourd\'hui » suffit', body: [
          '« J\'ai tenu encore une journée, tant bien que mal. » C\'est une chose vraiment formidable.'
        ]}
      ]
    },
    {
      id: 'kenkou', emoji: '🩺', title: 'Surveillez aussi votre santé', sub: 'Pour ne pas tomber tous les deux ensemble',
      secs: [
        { h: 'Si l\'aidant s\'effondre, vous tombez tous les deux', body: [
          'Ne remettez pas à plus tard votre sommeil, vos repas et le suivi de vos maladies chroniques. Votre corps est l\'outil le plus important du soin.',
          'Ne sautez pas vos propres bilans de santé « à cause du soin » ; allez-y.'
        ]},
        { h: 'Un petit bilan mensuel', body: [
          'Avez-vous bien dormi ces derniers temps ? Sautez-vous des repas ? Endurez-vous une douleur physique ? Une fois par mois suffit ; posez-vous la question.'
        ]}
      ]
    }
  ]
};
