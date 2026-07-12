'use strict';
/* Guía de cuidados (Soyogi) - Contenido en español.
   Estructura idéntica a guide.ja.js. Emergencias: el número local
   (varía; España 112, México/varios 911). Temperaturas en C (F entre paréntesis). */
window.OUCHI_CONTENT = window.OUCHI_CONTENT || {};
window.OUCHI_CONTENT.es = {

  tech: [
    {
      id: 'koshi', emoji: '🧍', title: 'Proteger la espalda',
      sub: 'Lo básico de un cuidado que protege la espalda, sin levantar',
      procs: [
        {
          id: 'koshi1', title: 'No levantar, no forzar: 9 bases',
          steps: [
            { fig: 'bm_stance', t: 'Separe los pies más que los hombros, doble las rodillas y baje la cadera. Cree primero una base estable. Esta forma de usar el cuerpo se llama «mecánica corporal», lo primero que aprenden los cuidadores.', c: 'Estar erguido y doblarse solo por la espalda es la postura que más daña la espalda.' },
            { fig: 'bm_close', t: 'Acérquese lo más posible a la persona. Avance con los pies y mantenga su cuerpo cerca del suyo. Cuanto más lejos esté, más se multiplica la carga sobre su espalda.' },
            { fig: 'no_twist', t: 'No gire el tronco. Para cambiar de dirección, no rote por la cintura; mueva los pies y gire todo el cuerpo.' },
            { fig: null, t: 'No mueva a la persona solo con los brazos. Use los grandes músculos de muslos y glúteos. Imagine moverse doblando y estirando las rodillas.' },
            { fig: 'slide_move', t: 'No levante, deslice. Mover en horizontal cuesta mucha menos fuerza. Una sábana deslizante del comercio, o incluso una bolsa de plástico grande, ayuda.', c: 'Un truco para proteger sus manos: al meter una mano bajo el cuerpo, entre primero con la palma hacia abajo y, cuando esté bastante adentro, gire la palma hacia arriba para atraer a la persona. Si entra con la palma hacia arriba desde el principio, una uña puede engancharse en la sábana o el protector y lastimarse. Útil en cualquier tarea en la que se mete la mano en un hueco estrecho, como hacer la cama.' },
            { fig: 'roll_prep', t: 'Haga a la persona compacta. Cruce los brazos sobre el pecho y levante las rodillas, y podrá moverla con poca fuerza.' },
            { fig: 'lever_examples', t: 'Use la palanca. Cree un punto de apoyo (marcado con un triángulo), como un codo o una cadera, antes de mover. Para incorporarse, el codo es el pivote. En el borde de la cama, la cadera es el pivote y el peso de las piernas eleva el tronco.' },
            { fig: 'roll_legs_first', t: 'Haga de la gravedad su aliada. Use el peso de una parte del cuerpo como motor. Al girar de lado, por ejemplo, deje caer primero las rodillas levantadas (1), y el cuerpo sigue con poca fuerza, arrastrado por el peso de las piernas (2).' },
            { fig: null, t: 'Deje que la persona haga lo que pueda. Usar la fuerza que le queda también ayuda a mantener su cuerpo fuerte.', c: 'El lema: «deje que la persona use los agarres». Barandillas de cama, reposabrazos, pasamanos. Su trabajo se aligera y se conserva su fuerza: dos pájaros de un tiro.' }
          ],
          points: [
            'Un poco de sobreesfuerzo «cada vez» es lo que rompe la espalda. Tome la costumbre de revisar su postura cada vez.',
            'Si le parece imposible solo, hágalo entre dos, o apóyese en material o en un profesional. Eso no es una derrota, es la decisión correcta.'
          ]
        }
      ]
    },

    {
      id: 'seiketsu', emoji: '🧼', title: 'Higiene básica',
      sub: 'Uñas, lavado de manos, mascarilla. Simple pero la mayor protección',
      procs: [
        {
          id: 'seiketsu1', title: 'Uñas, manos, mascarilla: proteger a ambos',
          steps: [
            { fig: null, t: 'Esta es la base de todo cuidado. No es vistosa, pero es una técnica de primer nivel que los protege a usted y a la persona de lesiones e infecciones.' },
            { fig: null, t: 'Mantenga sus propias uñas cortas, con las esquinas redondeadas. Las uñas largas arañan la piel de la persona durante el cuidado, y se enganchan en sábanas o ropa y lo lastiman a usted.', c: 'La piel de las personas mayores o debilitadas es fina, y hasta un pequeño arañazo puede provocar una infección.' },
            { fig: null, t: 'El espacio bajo las uñas acumula suciedad y restos. Si están largas, se convierten en foco de infección en cada comida, cambio de pañal y cura de herida. Mantener las uñas cortas es, en sí, prevención de infecciones.' },
            { fig: null, t: 'Lávese las manos con jabón antes y después del cuidado. Entre los dedos, alrededor de las uñas, hasta las muñecas. Sobre todo «después de un cambio de pañal» y «antes de tocar comida», cada vez.', c: 'Cuando no pueda llegar a un lavabo, el gel hidroalcohólico es práctico. Pero la suciedad visible debe lavarse con agua; el gel no la quita.' },
            { fig: null, t: 'Para los cambios de pañal y tocar heridas, use guantes desechables. Al quitarlos, enrolle la parte sucia hacia dentro, tírelos, y después lávese también las manos.' },
            { fig: null, t: 'Una mascarilla no es una herramienta solo para días de enfermedad; es equipo básico durante el cuidado. Todos llevamos gérmenes y virus sin ningún síntoma. Lo que a usted, sano, no le afecta puede ser mortal para una persona debilitada.', c: 'Úsela sobre todo en cuidados con el rostro cercano (comida, higiene bucal, cambios de pañal, curas). «Solo cuando se sienta mal» no protege lo suficiente.' },
            { fig: null, t: 'Mantenga también cortas las uñas de la persona. Evita que se arañe a sí misma y que cualquiera de los dos se lastime durante el cuidado.', c: 'No corte en casa una uña encarnada, deformada, gruesa y dura (hongo en la uña) ni la uña de alguien con diabetes. Un cortaúñas común a menudo no puede; hacen falta herramientas y destreza, y es fácil lastimarse. Déjelo en manos de un médico, o de un enfermero por indicación médica.' },
            { fig: null, t: '«Cortar las uñas. Lavarse las manos. Ponerse mascarilla.» Cuesta casi nada, cualquiera puede empezar hoy, y el efecto es enorme. Conviértalo en un hábito.' }
          ],
          points: [
            'Si su salud se derrumba, el cuidado se detiene. Proteger su propio cuerpo es lo mismo que proteger a la persona cuidada.'
          ]
        }
      ]
    },

    {
      id: 'taii', emoji: '🛏️', title: 'Girar de lado (cambios posturales)',
      sub: 'Cómo cambiar de posición para prevenir las úlceras por presión',
      procs: [
        {
          id: 'taii1', title: 'De boca arriba a de lado',
          steps: [
            { fig: null, t: 'Diga siempre en voz alta: «Voy a cambiarle de posición ahora». Ser tocado de repente asusta a la persona y tensa el cuerpo, lo que les dificulta a ambos.', c: 'Si los huesos son frágiles, las articulaciones están rígidas o hay una enfermedad progresiva, no use este procedimiento tal cual. Detalles en la página de abajo.', link: { cat: 'kobetsu', proc: 'kobetsu1' } },
            { fig: 'roll_prep', t: 'Cruce los brazos sobre el pecho y levante ambas rodillas. Con el cuerpo compacto, puede girarlo con poca fuerza.', m: 'Si una parálisis impide cruzar los brazos, basta con apoyar la mano afectada sobre el vientre. No fuerce a cruzar un brazo rígido (con contractura).' },
            { fig: 'shift_parts', t: 'Haga que gire la cara hacia el lado al que va a girar. Desplace el cuerpo de antemano hacia el borde opuesto de la cama, para que quede en el centro tras girar.', c: 'Desplace el cuerpo poco a poco, en orden: cabeza, luego hombros y espalda, luego cadera, luego piernas. El truco es no moverlo todo de golpe.' },
            { fig: 'roll_pull', t: 'Ponga las manos en la rodilla y el hombro (o la cadera) e incline suavemente hacia usted. Atraer hacia sí es más seguro y requiere menos fuerza que empujar.', c: 'Al girar hacia un lado sin barandilla, tenga mucho cuidado con las caídas.', m: 'Antes de girar, coloque el brazo afectado sobre el vientre para que no quede atrapado bajo el cuerpo. Estar sobre el lado afectado hace difícil que la persona note dolor o presión, así que manténgalo lo más breve posible.' },
            { fig: 'roll_legs_first', t: 'Si le falta fuerza para girarla de golpe, deje caer hacia usted primero solo las rodillas levantadas (1). El peso de las piernas gira primero, y la cadera y el tronco siguen con poca fuerza, arrastrados por ese peso (2).', c: 'El truco es hacer del peso de la persona y de la gravedad sus aliados. Como no depende de la fuerza de los brazos, ayuda sobre todo cuando cuida una mujer o una persona mayor.' },
            { fig: null, t: 'Si la persona puede moverse aunque sea un poco, hágale agarrar la barandilla de la cama del lado al que gira. Hasta un pequeño tirón aligera mucho su trabajo, y conserva la fuerza de su brazo: una pequeña rehabilitación diaria.', c: 'Compruebe primero que la barandilla esté bien fija. Una barandilla solo encajada puede soltarse si se tira fuerte.' },
            { fig: 'roll_cushion', t: 'Coloque un cojín contra la espalda para estabilizar la postura. Doble ligeramente la rodilla de arriba y ponga también un cojín entre las rodillas.' },
            { fig: null, t: 'Compruebe por último que los puntos óseos como orejas, hombros, codos, huesos de la cadera y tobillos no presionen con fuerza contra algo.' }
          ],
          points: [
            'No la gire tirando de un brazo o del pantalón; daña la piel y las articulaciones. Sostenga el tronco (hombros y cadera) para girar.',
            'Compruebe también que no queden sábanas ni ropa arrugadas bajo el cuerpo. Las arrugas causan úlceras por presión.'
          ]
        },
        {
          id: 'taii2', title: 'Prevenir las úlceras: nutrición, tiempo, lugar',
          steps: [
            { fig: 'nutrition_cushion', t: 'En realidad, la mayor base de la prevención de úlceras no es la técnica de cambio postural sino la «nutrición». Una persona delgada y huesuda desarrolla úlceras antes, en las mismas condiciones. Cuide las comidas y el estado nutricional para conservar el acolchado de carne que amortigua.', c: 'Un apetito que disminuye es en sí una señal de alerta de úlcera. Hable de nutrición con un médico o un profesional de la nutrición.' },
            { fig: 'pressure_points', t: 'Las úlceras se forman fácilmente donde los huesos sobresalen y presionan la cama. La nuca, los hombros, los codos, el centro de las nalgas y los talones son típicos.' },
            { fig: null, t: 'Como referencia, no la deje más de 2 a 3 horas en la misma posición. Con un colchón que reparte la presión, o según el estado de la persona, el intervalo adecuado cambia.', c: 'Fije el intervalo y el método junto a un profesional como un enfermero o un coordinador de cuidados, para mayor tranquilidad.' },
            { fig: null, t: 'Si encuentra enrojecimiento en nalgas o talones, presione suavemente con un dedo. Un enrojecimiento que no se vuelve blanco es el comienzo de una úlcera. Coloque a la persona de modo que no recaiga peso en ese punto.', c: 'No frote ni masajee la zona roja. La empeora.', m: 'El lado afectado tiene la sensibilidad disminuida, y la persona no nota el dolor. Revise la piel del lado afectado especialmente a menudo.' },
            { fig: 'heel_float', t: 'Para alguien cuyos talones se enrojecen con facilidad, ponga un cojín bajo las pantorrillas para elevar un poco los talones.' },
            { fig: null, t: 'La capacidad de un colchón o cojín para «prevenir úlceras» varía enormemente según el producto. Si aparece enrojecimiento con el uso, quizá el material no le convenga. Vale la pena revisarlo o probar otro.', c: 'Lo más rápido para hallar los puntos de prevención adecuados es preguntar a un médico, un enfermero o un profesional de productos de apoyo.' }
          ],
          points: [
            'Aunque se forme una úlcera, no se culpen con «nuestro cuidado fue malo». La complexión, la constitución y las enfermedades crean desde el inicio grandes diferencias en la facilidad con que aparecen.',
            'Lo que importa no es la culpa, sino hablar pronto con un profesional y pasar a una prevención adecuada a la persona.'
          ]
        }
      ]
    },

    {
      id: 'oki', emoji: '🌅', title: 'Incorporarse',
      sub: 'Hasta sentarse en el borde de la cama',
      procs: [
        {
          id: 'oki1', title: 'Sentar en el borde de la cama',
          steps: [
            { fig: null, t: 'Tras una palabra para ella, gire primero el cuerpo de lado. Cruce los brazos sobre el pecho, doble las rodillas, ponga las manos en la rodilla y el hombro e incline suavemente hacia usted. No olvide desplazar el cuerpo al borde de la cama del lado por el que se levantará.', m: 'Con parálisis, lo básico es incorporarse con el lado fuerte hacia abajo, porque puede apoyarse en el codo del lado fuerte.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Aún de lado, baje ambas piernas desde la rodilla por el borde de la cama.' },
            { fig: 'situp_seq', t: 'Sostenga hombros y cadera, use el peso de las piernas y levante el tronco en arco (imagen 1 a 4). Con el codo como pivote (triángulo) y cambiando el apoyo del codo a la palma, se incorpora con mucha menos fuerza que tirando recto hacia arriba.', c: 'Con una cama eléctrica cuyo respaldo se eleva, subir un poco la espalda primero facilita más. Si hay barandilla o asidero, deje que la persona lo agarre. Pero para cargar el peso al levantarse, use solo un «asidero de ayuda (barra de cama)» fijo.' },
            { fig: 'sit_edge', t: 'Una vez sentada, procure que toda la planta de los pies repose plana en el suelo. Con una cama de altura regulable, ajústela para que los pies lleguen al suelo.' },
            { fig: null, t: 'No la suelte enseguida. Justo después de incorporarse, la tensión puede bajar y causar mareo. Sosténgala un momento y observe su color y estado.', c: 'Color pálido, mirada aturdida, sudor frío. Entonces no insista; recuéstela un rato.' }
          ],
          points: [
            'Si incorporarse sigue difícil día tras día, material como una cama eléctrica o pasamanos suele resolverlo. Pregunte a un profesional de productos de apoyo o a un servicio de orientación en cuidados.'
          ]
        }
      ]
    },

    {
      id: 'ijou', emoji: '🪑', title: 'Levantarse y transferencias',
      sub: 'De la cama a la silla de ruedas. Donde más accidentes ocurren',
      procs: [
        {
          id: 'tachi1', title: 'Ayudar a levantarse',
          steps: [
            { fig: 'stand_prep', t: 'Hágala avanzar en el asiento. Deslice las nalgas hacia el borde delantero del asiento.' },
            { fig: 'stand_prep', t: 'Haga retroceder un poco los pies. Con los tobillos detrás de las rodillas, levantarse es más fácil.', c: 'Cuidado con retroceder demasiado. Si los pies van muy atrás, puede irse hacia delante al levantarse.' },
            { fig: null, t: 'Con una silla con reposabrazos, hágala empujar los reposabrazos. Empujar es más fácil para levantarse que tirar, y también la alivia a usted. Empujar con sus propios brazos es en sí una pequeña rehabilitación diaria que conserva la fuerza muscular.' },
            { fig: 'stand_bow', t: 'Hágala inclinarse hacia delante «como al hacer una reverencia». Cuando la cabeza va hacia delante y abajo, las nalgas se elevan solas. No tire recto hacia arriba; detiene el movimiento natural y dificulta el levantarse.', c: 'Este es el punto peligroso. Si la inclinación es muy profunda, cae recta hacia delante. Un accidente clásico incluso entre cuidadores. Inclínese solo «lo mínimo para que se eleven las nalgas». Colóquese en diagonal delante, en posición de atraparla, con cuidado y despacio.', m: 'Las personas con parálisis, o debilitadas por un largo encamamiento, pueden no frenar su propio impulso hacia delante. Vaya sobre todo despacio, poco a poco. No baje la guardia.' },
            { fig: 'stand_assist', t: 'Pase su brazo alrededor de la cadera de la persona y levántense juntos al ritmo del movimiento hacia delante. Doble sus propias rodillas y baje la cadera, y no se hará daño en la espalda.', m: 'Para alguien cuya rodilla afectada cede fácilmente, apoyar su rodilla contra la rodilla afectada la estabiliza (evita que ceda).', link: { cat: 'koshi', proc: 'koshi1' } },
            { fig: null, t: 'Justo después de levantarse, las rodillas pueden ceder. Siga sosteniendo hasta confirmar que está de pie con firmeza.' }
          ],
          points: [
            'El ejemplo por excelencia de «un accidente que se evita solo con conocerlo» es la caída hacia delante. Haga este procedimiento con cuidado, despacio, sin bajar la guardia.',
            'Si teme no poder sostener una rodilla que cede, no lo fuerce. Aquí entran los pasamanos de ayuda y otro material. No lo cargue solo; hable con un profesional.'
          ]
        },
        {
          id: 'ijou1', title: 'De la cama a la silla de ruedas',
          steps: [
            { fig: 'transfer_angle', t: 'Coloque la silla en el lado más fácil de la persona (el lado fuerte si hay parálisis), en un ángulo de 20 a 30 grados respecto a la cama.' },
            { fig: null, t: 'Ponga ambos frenos, y suba o retire los reposapiés.', c: 'Olvidar los frenos es la primera causa de accidentes en las transferencias. Tome la costumbre de señalar con el dedo y comprobar cada vez.' },
            { fig: null, t: 'Hágala sentarse en el borde de la cama, retroceder los pies y avanzar en el asiento.' },
            { fig: null, t: 'Hágala levantarse inclinada hacia delante «como al hacer una reverencia». Avanzar primero, retroceder los pies. Vea la página de abajo para los detalles.', link: { cat: 'ijou', proc: 'tachi1' } },
            { fig: 'pivot_steps', t: 'Ya de pie, pivote sobre los pies, a pasitos, despacio. No gire solo el tronco.' },
            { fig: null, t: 'Hacerle sujetar el reposabrazos lejano de la silla gira el cuerpo con naturalidad. Baje la cadera despacio hacia el asiento.', c: 'El lema es «deje que la persona use los agarres». Cada vez que usa el reposabrazos, se conserva la fuerza de sus brazos y su cuerpo.' },
            { fig: 'sit_deep', t: 'Hágala volver a sentarse bien al fondo y ponga los pies en los reposapiés. Sentada hacia delante, se desliza, lo cual es peligroso. La página siguiente explica cómo reacomodarla correctamente.', link: { cat: 'ijou', proc: 'suwari1' } }
          ],
          points: [
            'Si siente aunque sea un poco «puede que no pueda sostenerla», no lo haga solo.',
            'La transferencia de alguien que no puede tenerse en pie solo (ayuda total) es otro método. Haga que un profesional la vea en persona y le enseñe la forma que conviene a la persona.'
          ]
        },
        {
          id: 'suwari1', title: 'Reacomodar al fondo de la silla',
          steps: [
            { fig: 'sit_deep', t: 'Por qué importa. Sentada hacia delante, el cuerpo se desliza poco a poco, y la presión y el roce se concentran en el centro de las nalgas (el coxis). En esta postura, las úlceras se forman solo con estar sentada.' },
            { fig: null, t: 'Compruebe primero ambos frenos. Quite los pies de los reposapiés y ponga las plantas planas en el suelo.' },
            { fig: null, t: 'Haga que la persona se incline hacia delante «como al hacer una reverencia». Las nalgas se elevan un poco. Hacerle empujar los reposabrazos las eleva con más facilidad.' },
            { fig: null, t: 'Pase detrás de ella y, en el instante en que las nalgas se elevan, sostenga la pelvis (alrededor de los huesos de la cadera) con ambas manos y guíela suavemente hacia atrás. Es una sensación de deslizar, no de levantar.', c: 'Meter las manos bajo las axilas por detrás para izarla puede dañar los hombros, así que no se recomienda en casa.' },
            { fig: null, t: 'Si inclinarse hacia delante le cuesta, hágalo de lado a lado, poco a poco. Incline el cuerpo a un lado, envíe hacia atrás la nalga elevada, y luego igual del otro lado. Este «caminar sobre las nalgas» la asienta un poco más al fondo cada vez.' },
            { fig: null, t: 'Compruebe por último. Si no hay hueco entre la zona lumbar y el respaldo y la pelvis está erguida, está bien. Vuelva a poner los pies en los reposapiés.' },
            { fig: null, t: 'Una cosa más: acomode también la ropa desordenada. Hay en realidad muchísimas personas cuyo pantalón o falda se ha bajado, dejando a la vista la ropa interior o el pañal. Una silla de ruedas la lleva fuera de casa. Así, la persona se avergüenza.', c: 'La persona a menudo no puede acomodarlo ella misma ni se atreve a decirlo. Notarlo y acomodarlo con discreción es tarea del cuidador. Una experiencia vergonzosa puede volverse motivo de «ya no quiero salir». Un aspecto cuidado es un pequeño paso extra que protege a la persona y a usted de las miradas ajenas.' }
          ],
          points: [
            'Reacomodar surge varias veces al día. Cuando piense «se ha deslizado», hágalo, a menudo. Eso es, en sí, prevención de úlceras.',
            'La postura y la ropa. Solo cuando ambas están en su sitio el reacomodo está «completo».'
          ]
        },
        {
          id: 'kuruma1', title: 'Desplazarse en silla de ruedas',
          steps: [
            { fig: null, t: 'Antes de moverse, compruebe primero. ¿Están los pies en los reposapiés? ¿Están manos, ropa o manta libres de las ruedas? Moverse con algo atrapado puede llevar a una lesión o accidente en pocos metros.' },
            { fig: null, t: 'Una vez comprobado, diga «Nos movemos» antes de arrancar. Arrancar de repente la asusta.' },
            { fig: 'curb_tip', t: 'Para un escalón pequeño, pise la barra de inclinación trasera para levantar las ruedas delanteras y suba de frente. Para bajar, vaya de espaldas y descienda despacio desde las ruedas traseras.', c: 'La posición y la existencia de la barra difieren según la silla. Compruébelo en el modelo real al alquilar o comprar.' },
            { fig: null, t: 'Una bajada empinada es, de entrada, un «camino a evitar». Si hay un ascensor o una rampa suave, elíjalo aunque sea un rodeo.', c: 'Si debe bajar, vaya de espaldas y despacio. Pero el peso combinado de una persona y una silla es más de lo que imagina. Caer juntos por no poder sostener es un accidente grave. Que usted no caiga importa igual. Ante la menor duda, pida ayuda.' },
            { fig: null, t: 'Al detenerse o alejarse, ponga siempre los frenos. Y al alejarse, diga siempre «Espere aquí. Vuelvo enseguida». Los accidentes en que la persona intenta levantarse mientras usted no está son muy frecuentes.', c: 'Saber si «espere aquí» llega a la persona requiere criterio. Ante la menor duda, evite del todo dejarla sentada en la silla y alejarse.' }
          ]
        }
      ]
    },

    {
      id: 'omutsu', emoji: '🚻', title: 'Cambiar el pañal',
      sub: 'Rápido, con calor y protegiendo la piel',
      procs: [
        {
          id: 'omu1', title: 'Cambiar un pañal con adhesivos',
          steps: [
            { fig: null, t: 'Antes de empezar, reúna todo a mano. Un pañal nuevo, un empapador, toallitas, guantes desechables y una bolsa para el pañal sucio. Para no tener que alejarse a mitad.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: null, t: 'Tras una palabra para ella, baje el pantalón y suelte los adhesivos del pañal. Mantenga todo, salvo la zona necesaria, cubierto con una toalla o manta.', link: { cat: 'omutsu', proc: 'omu2' } },
            { fig: null, t: 'Gire el cuerpo de lado, enrolle el pañal sucio hacia dentro e introdúzcalo ligeramente bajo el cuerpo. Girar de lado se hace como en el cambio postural.', c: 'Si hay barandilla, hacerle sujetarla de lado estabiliza la postura, es más fácil para ambos y ayuda a conservar su fuerza. Pero no la fuerce. Si la persona está dispuesta, con eso basta.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Limpie de delante hacia atrás (del lado del vientre al de las nalgas). Sobre todo en mujeres, este sentido importa para prevenir infecciones urinarias.', c: 'Cuando está muy sucio, enjuagar con agua tibia limpia mejor que frotar y respeta más la piel.' },
            { fig: null, t: 'Enrolle la mitad del pañal nuevo e introdúzcalo bajo el cuerpo, vuelva a ponerla boca arriba, luego sáquelo por el otro lado y extiéndalo. El centro del pañal va al centro del cuerpo.' },
            { fig: 'tape_cross', t: 'Pegue los adhesivos cruzados: los de abajo un poco hacia arriba, los de arriba un poco hacia abajo. Deje espacio para uno o dos dedos alrededor del vientre.' },
            { fig: null, t: 'Pase un dedo por las barreras antifugas (los bordes levantados de las aberturas de las piernas) y levántelas hacia fuera. Si quedan hacia dentro, causan fugas.' },
            { fig: null, t: 'Cada vez, revise rápido la piel: enrojecimiento, escozor o heridas. Si algo le preocupa, hable pronto con un profesional.', m: 'Si las contracturas dificultan abrir las piernas, no las fuerce. Trabaje en el rango sin dolor, y lo más seguro es que le muestre el método un profesional que atiende a la persona.' }
          ],
          points: [
            { t: 'Crear un ambiente en el que nunca tenga que decir «perdón» es la mayor habilidad. Cómo crear ese ambiente difiere según la persona. Está en la página siguiente.', link: { cat: 'omutsu', proc: 'omu2' } },
            'Tras una deposición, cambiar cuanto antes en lugar de esperar protege la piel.',
            'Cuando las fugas persisten, más que la colocación, el pañal o el empapador no se ajusta al cuerpo. Pregunte en una tienda o a un profesional por revisar la talla o el tipo.'
          ]
        },
        {
          id: 'omu2', title: 'El cambio de pañal y el corazón',
          steps: [
            { fig: null, t: 'El cuidado de la eliminación muestra la diferencia de «corazón» más que la de destreza. Aunque sea rápido y preciso, si la persona se siente humillada, esa no es la respuesta correcta. Y este es el único cuidado sin una «forma correcta» fija, con las mayores diferencias entre personas.' },
            { fig: null, t: 'A algunos les conviene hacerlo con sencillez, como una tarea doméstica cualquiera. No hacer de ello un drama reduce al mínimo la vergüenza.' },
            { fig: null, t: 'A otros les conviene más charlar un poco. El ambiente de «esto no es molestia ni carga» llega, y el sentimiento de disculpa se disuelve.', c: 'Cuál conviene, la persona se lo dirá. Su expresión, cuánto habla, la tensión del cuerpo, cuántas veces dice «perdón». Con una forma que no le conviene, esto aumenta. Cuando aumenta, es señal de cambiar de enfoque.' },
            { fig: null, t: 'Sea cual sea el estilo, hay un «no hacer» común. No poner mala cara. No comentar el olor ni la cantidad. No meter prisa. No reprochar los accidentes. Esto es igual para todos.' },
            { fig: null, t: 'Decidir de antemano qué responder cuando diga «perdón» ayuda. «Estamos en paz.» «Usted me cambió cuando era bebé.» Hay palabras que funcionan justamente porque son familia.', c: 'Pero una broma puede herir a algunos. Que ría bien es su maestra; observe la reacción de la persona.' }
          ],
          points: [
            'Un pañal no es siempre «la única opción». Si aún queda una forma de eliminar con el inodoro o una silla-orinal, eso protege la dignidad y la fuerza del cuerpo. Recurrir o no a los pañales es un tema importante que merece hablarlo con un profesional.',
            'Los gestos de las manos se dominan en una o dos semanas. Unir los corazones es un tanteo que continúa para siempre. Habrá días en que no salga bien, y es natural.'
          ]
        }
      ]
    },

    {
      id: 'shokuji', emoji: '🍚', title: 'Ayudar a comer',
      sub: 'Una postura que evita atragantarse y un ritmo tranquilo',
      procs: [
        {
          id: 'shoku1', title: 'Postura sin atragantarse y cómo ayudar',
          steps: [
            { fig: null, t: 'Empiece solo cuando esté bien despierta. Comer somnolienta lleva a que la comida entre en la tráquea (aspiración).', c: 'Lávese las manos antes de tocar la comida. Unas uñas y manos limpias protegen directamente a la persona de infecciones.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: 'meal_posture', t: 'En una silla, hágala sentarse bien al fondo, con las plantas en el suelo. Un poco inclinada hacia delante, con el mentón recogido, es la postura que menos favorece atragantarse.', c: 'Cuando el mentón sube, la tráquea se abre recta y la comida entra con más facilidad. Echar la cabeza atrás y verter la comida es peligroso.' },
            { fig: 'bed_up', t: 'En la cama, incorpore el tronco (al menos 30 grados, idealmente 60 a 90). Ponga una almohada tras la cabeza para recoger el mentón.' },
            { fig: null, t: 'Mantenga cada bocado pequeño. Acerque la cuchara desde abajo y confirme la deglución antes del siguiente bocado. Cuando la nuez sube y baja, esa es la señal de una deglución.', m: 'Con parálisis, acerque la cuchara a la comisura de la boca del lado fuerte. En el lado afectado, la comida se mastica mal y queda sin que lo note.' },
            { fig: null, t: 'Ayudar en todo no es la única respuesta correcta. Usted ayuda con la sopa, y la persona come los platos sólidos con cubiertos. Una forma «a medias» es también válida. Cuanto más come ella sola, más se conservan su fuerza y el placer de comer.' },
            { fig: null, t: 'Aun cuando ayude, si puede comunicarse, deje que tenga lo que quiere, en el orden que quiere. Pero la forma de preguntar difiere. Algunos quieren cada bocado indicado, otros decir a grandes rasgos y dejárselo a usted, otros dejarlo todo.', c: 'A algunos les molesta «que les pregunten cada vez». Qué forma de preguntar es cómoda, solo la persona puede decidirlo. Observe su reacción y encuentre la forma de esa persona.' },
            { fig: null, t: 'Para quien se atraganta con facilidad con agua o té, hay una forma de espesar. El espesor que conviene difiere, así que consulte a un logopeda (especialista en deglución) o a un médico o enfermero.' },
            { fig: null, t: 'De 30 minutos a una hora tras comer, mantenga el cuerpo incorporado. Acostarse enseguida puede causar atragantamiento con lo que vuelve del estómago.' },
            { fig: null, t: 'Compruebe por último que no quede comida en la boca. Tiende a quedar en las mejillas y en el paladar.', m: 'Con parálisis, queda sobre todo en la mejilla del lado afectado. La persona tampoco lo nota, así que mire a propósito.' }
          ],
          points: [
            { t: 'Más atragantamientos, comidas que duran demasiado. Puede que no sea una mala ayuda, sino una señal de que la fuerza para tragar ha cambiado. Es importante, por eso está en la página siguiente.', link: { cat: 'shokuji', proc: 'shoku2' } }
          ],
          ng: [
            'Meter la comida pidiendo respuesta (hablar abre la tráquea)',
            'Meterle prisa. Hacer bocados grandes',
            'Echar la cabeza atrás y verter'
          ]
        },
        {
          id: 'shoku2', title: 'Cuando la comida empieza a costar',
          steps: [
            { fig: null, t: 'Ayudar a comer no es solo una tarea. La comida diaria es el control de salud más cercano y, para la persona, el mayor placer. Justo por eso «está costando más» es una señal importante que no debe pasar por alto.' },
            { fig: null, t: 'Piense primero en causas pasajeras. Malestar, estreñimiento, una llaga en la boca, prótesis mal ajustada, ánimo bajo. Si algo encaja y se recupera en unos días, no hace falta preocuparse en exceso.' },
            { fig: null, t: 'Lo que hay que vigilar es cuando continúa mucho tiempo. No se halla ni enfermedad del cuerpo ni razón del ánimo, y sin embargo cuesta, se atraganta, retiene la comida en la boca. Puede ser señal de que todo el conjunto «masticar, enviar atrás con la lengua, coordinar la deglución» se debilita. También ocurre cuando una demencia cambia el funcionamiento del cerebro.' },
            { fig: null, t: 'Este juicio es, en realidad, un terreno difícil incluso para médicos y enfermeros. Un especialista en deglución (logopeda) suele notarlo, así que diga con claridad a su médico o servicio de orientación: «quiero que un especialista en deglución lo evalúe».', c: 'Mediante la rehabilitación a domicilio o una consulta hospitalaria, a veces es posible una prueba o valoración de la deglución.' },
            { fig: null, t: 'Y aquí lo más importante, dicho con honestidad. «Mientras pueda comer por la boca» no siempre es la meta. Para quien tiene la deglución debilitada, comer en sí llega a una etapa con riesgo de neumonía o asfixia. Entonces «por la boca aunque sea a la fuerza» no puede llamarse la respuesta correcta.' },
            { fig: null, t: 'Más allá existen opciones como nutrirse por la nariz o el estómago (nutrición por sonda, gastrostomía) o un gotero. Estas palabras quizá duelan solo con oírlas. Pero esto no es «rendirse»; es atención médica para proteger a la persona de la neumonía y la asfixia.', c: 'Háblelo bien con el médico, con cuidado. Pero es también una situación en la que conviene no aplazar demasiado la decisión. Una decisión tardía puede acorralar a la persona y a usted.' }
          ],
          points: [
            'Este juicio no es para que lo cargue la familia sola. Es más, es un terreno que la familia no debe decidir sola. Siempre junto a un profesional.',
            'Que usted note «últimamente su forma de comer ha cambiado», como quien mira más de cerca cada día, es justo la información que un profesional más necesita.'
          ]
        }
      ]
    },

    {
      id: 'koukuu', emoji: '🦷', title: 'Higiene bucal',
      sub: 'Prevenir la neumonía empieza en la boca',
      procs: [
        {
          id: 'kou1', title: 'Cepillado y cuidado de la boca',
          steps: [
            { fig: null, t: 'Mantener la boca limpia es la mejor prevención de la neumonía (neumonía por aspiración) en las personas mayores. Conviértalo en un hábito tras las comidas.' },
            { fig: null, t: 'Si la persona está dispuesta, hágala cepillarse ella misma. Eso es en sí buena rehabilitación. Pero a menudo no se cepilla lo bastante bien, así que la revisión final es su tarea.', c: 'Use palabras que no hagan desagradable la revisión final. Algo como «Se ha cepillado bien. Solo enséñeme el fondo al final» entra mejor, reconociendo el esfuerzo primero.' },
            { fig: null, t: 'La postura es la misma que para comer. Un poco inclinada hacia delante, con el mentón recogido. Para que el agua y la suciedad no bajen por la garganta durante el cuidado.', link: { cat: 'shokuji', proc: 'shoku1' } },
            { fig: null, t: 'Quite las prótesis y límpielas con un cepillo para prótesis. No use pasta de dientes normal; el abrasivo raya las prótesis. Por la noche, quítelas y déjelas en agua o en limpiador.' },
            { fig: null, t: 'Para quien no puede enjuagarse, limpie con suavidad con un cepillo-esponja casi sin agua, o con una gasa húmeda enrollada en un dedo.' },
            { fig: null, t: 'Limpie con suavidad no solo los dientes sino también la lengua, el paladar y el interior de las mejillas. No intente quitar de golpe la suciedad adherida.', m: 'Con parálisis, la suciedad se acumula entre la mejilla y la encía del lado afectado, esté atento ahí y sea suave.' },
            { fig: null, t: 'No pasa nada si no es perfecto cada vez. Pero mantenga el mínimo antes de acostarse. Quitar las prótesis. Retirar la comida que quede en la boca. Solo estas dos, cada noche sin falta.', c: 'Durante el sueño, lo que queda en la boca puede pasar sin notarse a la tráquea, y una neumonía empieza en silencio. Invisible pero mortal, el mayor peligro oculto de la higiene bucal.' },
            { fig: null, t: 'Sangrado persistente, una llaga, dolor, prótesis mal ajustada. Entonces consulte a un dentista. Existe también el sistema de «dentista a domicilio».' }
          ],
          points: [
            'Los días en que se resiste, no hace falta buscar la perfección. Pero mantenga solo «quitar las prótesis y retirar los restos de comida antes de dormir» como mínimo diario.',
            'La boca es una parte del cuerpo especialmente íntima. Incluso un cuidado que protege la vida hiere el corazón si se vuelve forzado. La vida y el corazón valen lo mismo. Si falta uno, uno se aleja de la felicidad.'
          ]
        }
      ]
    },

    {
      id: 'kigae', emoji: '👕', title: 'Vestirse',
      sub: 'La regla: desvestir primero por el lado fuerte',
      procs: [
        {
          id: 'kigae1', title: 'Cambiar una prenda de arriba (abierta por delante)',
          steps: [
            { fig: 'datsuken', t: 'Cuando un lado es difícil de mover por parálisis o dolor, la regla es: desvestir empezando por el lado fuerte, vestir empezando por el lado difícil de mover (afectado).', c: 'No tire con fuerza de una mano o un brazo. Puede dañar el hombro o dejar un moretón en la piel.' },
            { fig: null, t: 'Desvestir. Saque primero el brazo del lado fuerte de la manga. Luego saque despacio el lado difícil de mover.' },
            { fig: null, t: 'Vestir. Pase primero el brazo del lado difícil de mover. Entra fácil si frunce la manga y va al encuentro de la mano.', c: 'Cuando un dedo se engancha en la manga y no pasa, no lo fuerce. Empujar con una uña enganchada puede arrancar la uña, una lesión grave. Les pasa incluso a los profesionales. Retírelo con suavidad, vuelva a fruncir la manga e inténtelo de nuevo.', m: 'Cuando una contractura impide estirar el codo, no intente estirar el brazo; frunza más bien la prenda por encima. Un tejido amplio y elástico es mucho más fácil.' },
            { fig: null, t: 'Una vez puesta hasta el hombro, hágale pasar el brazo del lado fuerte. Deje que haga lo que pueda.' },
            { fig: null, t: 'Alise por último las arrugas bajo la espalda y las nalgas. Acostarse sobre arrugas causa úlceras por presión.' }
          ],
          points: [
            'La elección de la ropa también es parte de la técnica de cuidado. Solo con hacerla abierta por delante, holgada y elástica, vestir se vuelve mucho más fácil.',
            'No solo al vestir, sino también tras una transferencia o la silla de ruedas, o tras el baño, la ropa se desordena con facilidad. Pantalón bajado, dobladillo subido. Notarlo y acomodarlo con discreción. Acomodar la ropa desordenada es una base del cuidado que protege la dignidad de la persona.',
            'Vestir es también una valiosa ocasión de ver todo el cuerpo. Enrojecimiento de la piel, moretones, hinchazón, heridas. Si puede echar un vistazo con naturalidad mientras ayuda, eso ya es un buen cuidado.'
          ]
        },
        {
          id: 'kigae2', title: 'Cambiar el pantalón (acostada)',
          steps: [
            { fig: null, t: 'Primero, un punto de actitud. Vestir la mitad inferior es el cuidado donde más aflora la vergüenza. Aun sin demencia, que se resista o no colabore es natural.', c: 'En resumen, es la sinceridad de sus palabras y su trato. Diga el propósito «se sentirá fresca tras el cambio», cubra con una toalla, no mire donde no hace falta, y sea rápido. Si pierde la confianza aquí, puede rechazar el cambio mismo. Un cuidado que protege dignidad e higiene a la vez.' },
            { fig: null, t: 'Pase primero la pierna difícil de mover. Suba en orden: tobillo, rodilla, muslo.', c: 'Si un dedo del pie se engancha en el dobladillo, la fuerza está prohibida. Las uñas arrancadas son una lesión clásica al vestir. Retírelo una vez, vuelva a fruncir el dobladillo, y páselo.' },
            { fig: null, t: 'Para quien puede levantar la cadera, hágale doblar las rodillas y elevar las nalgas. En ese momento, suba el pantalón hasta la cintura.' },
            { fig: null, t: 'Para quien no puede levantar la cadera, incline el cuerpo de lado a lado alternando y suba un lado cada vez. Girar de lado se hace como en el cambio postural.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Ajuste la posición de la cintura y las arrugas, y ya está.' }
          ]
        }
      ]
    },

    {
      id: 'seishiki', emoji: '🛁', title: 'Asear el cuerpo y bañarse',
      sub: 'Con calor, con seguridad y con limpieza',
      procs: [
        {
          id: 'sei1', title: 'Asear el cuerpo (en la cama)',
          steps: [
            { fig: null, t: 'Caliente primero la habitación (apunte a 22 a 24°C / 72 a 75°F). El frío tensa el cuerpo y sube la tensión.' },
            { fig: null, t: 'Escurra la toalla en agua bastante caliente, unos 55 a 60°C (130 a 140°F), y tendrá justo el calor adecuado al llegar a la piel. Compruebe la temperatura antes en la cara interna de su propio brazo.' },
            { fig: null, t: 'Descubra solo la parte que asea y mantenga el resto cubierto con una toalla de baño. Atención tanto al frío como a la vergüenza.' },
            { fig: 'wipe_direction', t: 'Asee las extremidades desde el extremo hacia el centro del cuerpo (mano al hombro, pie al muslo). Sigue el sentido de la circulación de la sangre.' },
            { fig: null, t: 'El orden es cara, brazos, pecho, vientre, piernas, espalda, nalgas, de las zonas más limpias primero. Tras asear, recoja la humedad enseguida con una toalla seca. Dejada húmeda, causa enfriamiento y problemas de piel.', m: 'Una palma con contractura, las axilas y la cara interna de los codos acumulan sudor y suciedad. No las abra a la fuerza; asee con suavidad hasta donde se abran sin dolor.' },
            { fig: null, t: 'No hace falta todo el cuerpo cada día. Dividirlo, hoy la mitad superior y mañana la inferior, no cansa ni a la persona ni a usted.' }
          ],
          points: [
            'El aseo y el baño son ejemplos por excelencia de cuidados a menudo rechazados. Los días de rechazo, no insista; hoy solo la cara y las manos, mañana los pies, está bien. Pensar la limpieza en semanas más que en días es más o menos lo justo.'
          ]
        },
        {
          id: 'sei2', title: 'Bañarse con seguridad',
          steps: [
            { fig: null, t: 'Primero, algo que saber. Un baño no es «un acto que solo sienta bien». Cuesta energía. Es fastidioso. Es vergonzoso. No quiere ser una carga. Le falta confianza en su cuerpo. Las razones para negarse son muchas, y todas naturales.', c: 'Hasta las personas sanas tienen días de «hoy no me apetece bañarme». No entenderlo lleva al cuidado erróneo de forzar. Los días de rechazo, deje una salida: solo asearla, solo un baño de pies, u otro día.' },
            { fig: null, t: 'En invierno, caliente primero el vestidor y el baño. Un cambio brusco de temperatura oscila mucho la tensión y provoca un colapso (choque térmico).' },
            { fig: null, t: 'Referencia: agua no más caliente que 41°C (106°F), y bañarse hasta 10 minutos. Los baños largos en agua caliente son los más peligrosos.', m: 'El lado afectado siente mal el calor y es donde las quemaduras pasan inadvertidas. Vierta la ducha o el agua poco a poco, empezando por el lado no afectado.' },
            { fig: null, t: 'Evite bañarse con el estómago vacío, justo después de comer o tras beber alcohol.' },
            { fig: null, t: 'El momento de pasar por encima del borde de la bañera es la caída más probable. Use pasamanos, un escalón de bañera y una alfombrilla antideslizante.', c: 'Material como pasamanos y sillas de ducha a veces se puede alquilar u obtener barato mediante un servicio de orientación en cuidados. Pregunte a un profesional.' },
            { fig: null, t: 'Durante el baño, no le quite el ojo. Cuando el cuerpo se calienta en el agua, la circulación y la tensión cambian, la conciencia puede nublarse, y puede incluso perder el conocimiento como al dormirse. El ahogamiento en la bañera ocurre así, en silencio.', c: 'Si puede, quédese junto a ella en el baño o el vestidor. Charle a gusto mientras se calienta despacio. Es lo más tranquilizador para ambos.' }
          ],
          points: [
            'Cuando el baño en casa se vuelve difícil, muchas familias encargan solo el baño a un servicio de día. No es hacer las cosas a medias; es una buena elección por seguridad.'
          ]
        }
      ]
    },

    {
      id: 'hokou', emoji: '🚶', title: 'Acompañar la marcha y prevenir caídas',
      sub: 'Hacer la casa segura contra caídas es la mitad del trabajo',
      procs: [
        {
          id: 'hok1', title: 'Cómo acompañar la marcha',
          steps: [
            { fig: 'walk_position', t: 'Quien acompaña se coloca algo detrás y al lado del lado débil de la persona (el lado con parálisis). La posición para sostenerla de inmediato si se tambalea.' },
            { fig: null, t: 'Saber por qué se cae cambia la forma de sostener. La mayoría de las caídas empiezan con «el pie no se levanta tanto como se espera y se tropieza» o «la planta no se posa plana y el tobillo se tuerce». Luego la caída ocurre porque un paso de recuperación no sale a tiempo.', c: 'Dicho de otro modo: si puede sostener ese instante de tambaleo, evita la peor caída. Estar listo para «sostener ese paso en cualquier momento» es la primera misión del cuidador.' },
            { fig: null, t: 'Más que agarrar la mano, sostener con suavidad bajo la axila o en la cadera le permite atraparla si se desploma. Haga que la persona sujete un pasamanos o un bastón.', m: 'Para quien usa una férula de pierna (un dispositivo que ayuda a caminar), no la coloque a su manera; siga exactamente lo que enseñó un profesional de la rehabilitación. Sujete el bastón con la mano del lado no afectado.' },
            { fig: null, t: 'No la apresure. La sola frase «despacio está bien» es la mejor prevención de caídas.' }
          ]
        },
        {
          id: 'hok2', title: 'Prevenir caídas dentro de casa',
          steps: [
            { fig: null, t: 'Reduzca los peligros del suelo. Cables, alfombras levantadas, periódicos o bolsas por medio, escalones pequeños. La mayoría de las caídas ocurren en estos puntos de la casa.' },
            { fig: null, t: 'Ponga una luz a ras de suelo en el camino al baño de noche. Una lucecita con sensor de movimiento es práctica.' },
            { fig: null, t: 'Las zapatillas se salen con facilidad porque no sujetan el talón, así que un calzado de casa que cubra el talón es más seguro.' },
            { fig: null, t: 'Tener un pasamanos o un mueble estable donde agarrarse en los sitios de paso frecuente da tranquilidad. Vigile también la costumbre de agarrarse a muebles que se tambalean.' }
          ],
          points: [
            'Para instalar pasamanos y eliminar escalones a veces se pueden usar ayudas públicas. Pregunte en un servicio local de orientación en cuidados.'
          ]
        },
        {
          id: 'hok3', title: 'Formar un cuerpo firme: ejercicios sentado',
          steps: [
            { fig: null, t: 'La prevención de caídas no es solo caminar. Pequeños ejercicios sentado, acumulados, hacen crecer «la fuerza para levantar el pie» y «la fuerza para posarse plano». No fuerce; incluso viendo la tele está bien.' },
            { fig: null, t: 'Elevación de muslo. Sentado en una silla, levante despacio un muslo y bájelo. Alternando. Conserva la fuerza para levantar el pie y reduce los tropiezos.' },
            { fig: null, t: 'Giro de tobillo. Levante un poco el pie y gire el tobillo despacio, en ambos sentidos. Un tobillo flexible aguanta el tambaleo al posarse.' },
            { fig: null, t: 'Elevación de puntas y de talones. Sentado, mantenga el talón en el suelo y levante las puntas. Luego mantenga las puntas y levante el talón. La fuerza para posar la planta plana la sostienen estos músculos de la espinilla y la pantorrilla.' },
            { fig: null, t: 'El número de repeticiones basta con «cuantas terminen a gusto». Un poco cada día funciona mejor que mucho de vez en cuando. Los días de rechazo, un descanso está bien.' }
          ],
          points: [
            'Este ejercicio no requiere material ni dinero. Es el seguro más barato para «seguir caminando con seguridad y con gusto».'
          ]
        }
      ]
    },

    {
      id: 'futon', emoji: '🛌', title: 'Cuidado en el futón (colchón en el suelo)',
      sub: 'Trucos para el cuidado desde el suelo y la opción de la cama',
      procs: [
        {
          id: 'futon1', title: 'Cuando cuida en un futón',
          steps: [
            { fig: null, t: 'Primero la conclusión importante. Si es probable que el cuidado continúe, recomendamos encarecidamente alquilar o instalar una cama articulada eléctrica. Poder cuidar a la altura de la cadera lo cambia todo, tanto la carga sobre su espalda como la seguridad de la persona.', c: 'En muchos lugares, ese material se puede alquilar por una pequeña cuota mensual mediante un seguro de dependencia o programas de ayuda. Pregunte en un servicio local de orientación en cuidados.' },
            { fig: null, t: 'Dicho esto, para todos los que aún esta noche cuidan en un futón, aquí van trucos para el suelo. Cuidar en un futón no es «imposible»; solo la forma de usar el cuerpo difiere un poco de una cama.' },
            { fig: 'kneel_assist', t: 'Al ayudar desde el suelo, no se quede de pie doblándose por la espalda. Una rodilla en el suelo, la otra levantada: la «media rodilla» es la postura básica. Baje su cuerpo y acérquese a la persona.', c: 'La media rodilla se tambalea menos hacia delante y atrás que con ambas rodillas en el suelo y permite aplicar más fuerza.' },
            { fig: null, t: 'Girar de lado y cambiar el pañal se hacen igual que en la cama (levantar las rodillas, inclinar hacia usted). Solo difiere su postura. En media rodilla, tire con todo el cuerpo, no con la fuerza de los brazos.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Levantarse del suelo va en orden: boca arriba, de lado, a cuatro patas, a media rodilla, luego de pie. Más que izarla recta, hacer que la persona se mueva «pasando por cuatro patas» es mucho más fácil para ambos.', c: 'Para el apoyo al levantarse, un mueble bajo estable (una silla sólida, por ejemplo) puede servir de pasamanos.' },
            { fig: null, t: 'La debilidad de un futón es que un colchón de cuidados que reparte la presión es difícil de usar. Para quien es propenso a úlceras, mantenga a propósito el intervalo de cambios más corto. Un futón fino y duro requiere especial atención.', link: { cat: 'taii', proc: 'taii2' } },
            { fig: null, t: 'Y una vez más. Recoger el futón a diario y cuidar desde el suelo desgastan su espalda, sin duda. Mientras aún piensa «estoy bien», empiece a informarse sobre una cama. Su espalda es la herramienta más importante del cuidado.' }
          ],
          points: [
            'Futón o cama no es mejor o peor sino una elección de vida. Pero marca una clara diferencia en el desgaste del cuerpo del cuidador.',
            'Al cambiar a una cama, tenga en cuenta también los sentimientos de la persona. Pedir «préstamela por mi espalda» en lugar de «por ti» suele aceptarse más fácilmente.'
          ]
        }
      ]
    },

    {
      id: 'kobetsu', emoji: '🩺', title: 'Cuando hay enfermedad o discapacidad',
      sub: 'Cuando no debe usar estas bases tal cual',
      procs: [
        {
          id: 'kobetsu1', title: 'Cuando debe recibir «indicaciones personalizadas»',
          steps: [
            { fig: null, t: 'Los procedimientos de esta app son las bases «generales» del cuidado para un cuerpo adulto. Pero según la enfermedad o discapacidad, el mismo método puede causar lesiones. Desde las páginas siguientes, compruebe si algo aplica. Si aplica, tome esta app solo como referencia y hágase enseñar sin falta la forma adecuada a la persona.' },
            { fig: 'no_pull', t: 'Personas con huesos frágiles. Osteoporosis grave, largo encamamiento, huesos de cristal, etc. Pueden fracturarse incluso con poca fuerza, así que el cuidado que carga y tira debe hacerse bajo indicaciones personalizadas.', c: 'Nunca dé un cuidado que tire de un brazo o una pierna, con nadie. Es especialmente peligroso con huesos frágiles.' },
            { fig: null, t: 'Personas con articulaciones rígidas y difíciles de mover (contracturas). Forzarlas a estirarse daña la articulación y la piel. El «rango que se mueve sin dolor» difiere según la persona, así que lo más seguro es hacerse enseñar en persona por un profesional.' },
            { fig: null, t: 'Personas con una enfermedad progresiva. Distrofia muscular, ELA, etc. El cuerpo cambia sin cesar, de modo que la respuesta correcta de ayer se vuelve el peligro de hoy. Revise el método con regularidad con un profesional. También hay enfermedades en las que sobrecargar los músculos daña el cuerpo.' },
            { fig: null, t: 'Personas con discapacidad grave física e intelectual. Deformidad del cuerpo, caderas que se luxan con facilidad, respiración débil; cada cuerpo es completamente distinto. Un terreno donde incluso los profesionales necesitan un aprendizaje adaptado a cada uno. Los métodos improvisados están prohibidos.' },
            { fig: null, t: 'Personas que usan equipos médicos como respirador, traqueotomía, alimentación por nariz o estómago, u oxígeno domiciliario. Hay reglas médicas para la postura y el movimiento. Las indicaciones del médico y del enfermero priman sobre todo.' },
            { fig: null, t: 'Personas a quienes un médico ha indicado limitar el movimiento. Enfermedad del corazón, tras una fractura, durante la diálisis, etc. Confirme el detalle de las limitaciones antes de decidir el cuidado.' },
            { fig: null, t: 'Puede pedir indicaciones personalizadas al médico, a un enfermero a domicilio, a los especialistas de la rehabilitación a domicilio (fisioterapeutas y terapeutas ocupacionales) o, para una persona con discapacidad, a un coordinador de apoyo. Diga «enséñeme cómo hacerlo en casa», y le mostrarán la forma adecuada a la persona, en la habitación y la cama reales.' }
          ],
          points: [
            'Pedir indicaciones personalizadas no es exagerar. Enseñar a las familias cómo hacerlo en casa es una parte importante del trabajo de un profesional.',
            '«En el caso de esta persona, ¿a qué debo prestar atención?» Esa pregunta es la mejor pregunta.'
          ]
        }
      ]
    }
  ],

  danger: [
    {
      id: 'chissoku', emoji: '🆘', title: 'Atragantamiento (vía aérea obstruida)', sub: 'Cuando no puede emitir sonido, cada segundo cuenta',
      fig: 'choking_back', cpr: true,
      when: [
        'Angustia súbita durante una comida, incapaz de emitir sonido o toser',
        'Se lleva ambas manos a la garganta (la señal del atragantamiento)',
        'El color empeora rápidamente'
      ],
      act: [
        'Si puede emitir sonido o toser, hágala toser fuerte primero. La tos es la fuerza más potente para expulsar',
        'Si no puede toser, inclínela hacia delante y golpee con firmeza 4 a 5 veces entre los omóplatos con el talón de la mano (golpes en la espalda)',
        'Si no sale, rodéela con los brazos por detrás, cierre un puño justo encima del ombligo y empuje rápido hacia dentro y arriba (compresiones abdominales). Alterne con los golpes en la espalda',
        'No haga compresiones abdominales a una embarazada ni a un lactante (solo golpes en la espalda)',
        'Tras compresiones abdominales, acuda siempre después a consulta. Hay que revisar los órganos internos'
      ],
      call: [
        'La obstrucción no sale',
        'Se queda flácida o deja de responder. Llame de inmediato a emergencias. Ponga el teléfono en altavoz y le guiarán'
      ]
    },
    {
      id: 'goen', emoji: '😮‍💨', title: 'Más atragantamientos, quizá neumonía', sub: 'La neumonía del mayor empieza en silencio',
      when: [
        'Los atragantamientos en las comidas han aumentado respecto a antes',
        'Más flema tras comer. Una voz con gorgoteo',
        'Poca energía en general. El apetito ha bajado. Persiste algo de fiebre'
      ],
      act: [
        'La neumonía del mayor a menudo no muestra tos clara ni fiebre alta. «Algo distinto de lo habitual» puede ser la única señal',
        { t: 'Revise la postura al comer y la posición del mentón', link: { cat: 'shokuji', proc: 'shoku1' } },
        'Anote los cambios. Decir solo «los atragantamientos han aumentado» es información importante para el médico'
      ],
      see: [
        'Cuando persisten los atragantamientos o algo de fiebre. Hable pronto con su médico de cabecera'
      ],
      call: [
        'La respiración parece difícil. Respira con los hombros',
        'Los labios o la cara tienen mal color. Está flácida'
      ]
    },
    {
      id: 'tentou', emoji: '🩹', title: 'Una caída, o caer de la cama', sub: 'No la incorpore con prisa',
      when: [
        'Cuando descubre que se ha caído (incluido mientras usted no estaba)'
      ],
      act: [
        'No la incorpore con prisa. Compruebe primero si está consciente, si hay dolor fuerte y si los miembros se ven deformados',
        'No puede moverse por dolor fuerte, una pierna tiene forma o ángulo raro. Entonces puede haber fractura, llame a una ambulancia sin moverla',
        'Si no hay anomalía mayor, incorpórela despacio y vigile durante el día',
        'Si se golpeó la cabeza, vigile 24 a 48 horas aunque parezca bien en el momento. Quien toma anticoagulantes requiere especial atención'
      ],
      call: [
        'Sin conciencia. Aturdida y respondiendo raro',
        'Tras un golpe en la cabeza: vómito, convulsión o habla enredada',
        'No puede moverse por dolor fuerte. Un hueso está claramente deformado'
      ]
    },
    {
      id: 'dassui', emoji: '🌡️', title: 'Fiebre, o no puede beber', sub: 'Las personas mayores perciben mal la sed',
      when: [
        'Boca seca. Labios agrietados',
        'Orina menos veces. Color más oscuro',
        'Flácida. Somnolienta y lenta al responder'
      ],
      act: [
        'Las personas mayores sienten mal la sed y se deshidratan sin notarlo. Ocurre no solo en verano sino también en invierno y con fiebre',
        'Si puede beber, dé líquido poco a poco, a menudo. Un suero de rehidratación oral con sal y azúcar es adecuado',
        'Compruebe también la temperatura de la habitación. ¿Va demasiado abrigada en una habitación caliente?'
      ],
      see: [
        'La fiebre persiste. Solo puede tomar poco líquido. Vea pronto a su médico de cabecera'
      ],
      call: [
        'No toma ningún líquido. Vomita justo después de beber',
        'Flácida y respondiendo raro. Una convulsión'
      ]
    },
    {
      id: 'jokusou', emoji: '🔴', title: 'Nalgas o talones rojos (úlcera por presión)', sub: 'La señal es «enrojecimiento que no cede al presionar»',
      when: [
        'Enrojecimiento donde sobresalen huesos (centro de las nalgas, talones, hombros, nuca)',
        'Enrojecimiento que no se vuelve blanco con una leve presión del dedo',
        'Una ampolla, piel que se pela o una decoloración oscura'
      ],
      act: [
        { t: 'Un enrojecimiento que no se vuelve blanco al presionar es el comienzo de una úlcera. Acuéstela de modo que no recaiga peso en ese punto', link: { cat: 'taii', proc: 'taii1' } },
        'No masajee, ni frote, ni seque con secador. Daña el interior de la piel y lo empeora',
        'Si hay herida, el antiguo «secar para curar» no es el estándar actual. La cura actual se basa en «mantener moderadamente húmedo». No la seque por su cuenta',
        'Sin embargo, si supura o hay temor de infección, mantener húmedo puede ser contraproducente. Confirme siempre el método mismo con un enfermero o un médico',
        'Adelgazar o comer menos es una gran señal de alerta de úlcera. Recomponer la nutrición también es parte del tratamiento',
        'Ante un enrojecimiento dentro del pañal, distinguir úlcera de irritación importa. No siga aplicando pomada por su cuenta'
      ],
      see: [
        'Hay una ampolla, piel que se pela o decoloración oscura (una úlcera avanzada). Muéstrela a un enfermero o un médico',
        'Cuando el enrojecimiento no cede tras varios días'
      ]
    },
    {
      id: 'fast', emoji: '⚡', title: 'Señales de un ictus (FAST)', sub: 'No espere a ver. Es una carrera contra el tiempo',
      fig: 'fast_signs',
      when: [
        'Face (cara). Al pedirle que sonría, una comisura de la boca no se levanta',
        'Arm (brazo). Al levantar ambos brazos al frente, uno cae',
        'Speech (habla). Habla enredada. No salen las palabras',
        'Si aplica aunque sea uno, es una carrera contra el Time (tiempo)'
      ],
      act: [
        'Anote la hora de inicio (la última vez que estuvo bien). Información importante para elegir el tratamiento',
        'Acuéstela en una posición cómoda y gire la cara de lado si pudiera vomitar',
        'No ponga comida, bebida ni medicina en la boca'
      ],
      call: [
        'En cuanto note las señales, no espere; llame de inmediato a emergencias. El ictus es una enfermedad en la que «cuanto antes se llega al hospital, más leves son las secuelas»'
      ]
    },
    {
      id: 'ishiki', emoji: '🚨', title: 'No responde al llamarla', sub: 'En la duda, llame; esa es la respuesta correcta',
      cpr: true,
      when: [
        'No responde ni al llamarla ni al darle un toque suave en el hombro'
      ],
      act: [
        'Llame de inmediato a emergencias. Ponga el altavoz y actúe siguiendo las indicaciones',
        'Compruebe si hay respiración normal (mire moverse el pecho y el vientre unos 10 segundos)',
        'Si hay respiración, gire el cuerpo de lado y levante un poco el mentón (para que el vómito no obstruya la garganta)',
        'Si no hay respiración normal, siga las indicaciones telefónicas y comience las compresiones torácicas (reanimación)'
      ],
      call: [
        'En este punto, «llamar en la duda» es la respuesta correcta. Si al final no era tan grave, ese es el mejor resultado'
      ]
    }
  ],

  cpr: {
    open: '❤️ Cómo hacer las compresiones torácicas y el ritmo',
    title: 'Compresiones torácicas (reanimación)',
    intro: 'Es para una persona que no responde y no respira con normalidad. En la duda, empiece.',
    firstTitle: 'Antes de nada',
    first: 'Llame al número de emergencias de su zona y ponga el altavoz. El operador le dirá qué hacer por teléfono. Esas indicaciones priman. Use esta página como apoyo.',
    stepsTitle: 'Cómo hacerlo',
    steps: [
      'Acuéstela boca arriba sobre un suelo firme. En una cama blanda, la fuerza de la compresión se escapa',
      'Ponga el talón de una mano en el centro del pecho y la otra mano encima',
      'Estire los codos y presione recto hacia abajo con el peso del cuerpo, con fuerza suficiente para hundir el pecho unos 5 cm (2 pulgadas)',
      'En cada compresión, suelte hasta que el pecho recupere su altura original. Mantenga las manos en el pecho',
      'A un ritmo de 100 a 120 por minuto, continúe con las mínimas pausas posibles hasta que llegue la ambulancia',
      'La respiración artificial no es imprescindible. Seguir comprimiendo es lo más importante',
      'Si se cansa, releve sin dudar. Cuando llegue un DEA (desfibrilador automático), enciéndalo y siga las indicaciones de voz'
    ],
    metroStart: 'Reproducir el ritmo (110 por minuto)',
    metroStop: 'Detener el ritmo',
    metroHint: 'Comprima una vez con cada pulso. Un tono más agudo suena cada 30 pulsos',
    note: 'La fuerza puede romper una costilla, pero la vida es lo primero. En muchos lugares, quien socorre de buena fe y sin negligencia grave está protegido de responsabilidad (protección del buen samaritano). Por favor, no dude.'
  },

  self: [
    {
      id: 'koshicare', emoji: '💪', title: 'Antes y después de lesionarse la espalda', sub: 'Su cuerpo es la herramienta más importante del cuidado',
      secs: [
        { h: 'El cuidado es «trabajo para la espalda»', body: [
          'Incluso en los cuidadores, el dolor de espalda es la primera enfermedad laboral. Si un familiar sin formación se lesiona la espalda, no es porque usted sea débil. Es de lo más natural.',
          'Justo por eso, haga de la página «Proteger la espalda» de la pestaña Técnicas un hábito, cada vez.'
        ], ref: { cat: 'koshi', proc: 'koshi1' }},
        { h: 'Proteger con el entorno y el material', body: [
          'Con una cama de altura regulable, súbala hasta cerca de la altura de su propia cadera al cuidar. Cuidar en posición baja es una causa mayor de dolor de espalda.',
          'Hay ayudas que trasladan la fuerza al material, como sábanas deslizantes y pasamanos de ayuda. A menudo se pueden alquilar mediante un servicio de orientación en cuidados, así que pregunte.'
        ]},
        { h: 'Si aun así se lesiona', body: [
          'No siga aguantando el dolor. Si empeora, no podrá continuar el cuidado mismo.',
          'Un dolor fuerte, o un dolor con hormigueo en la pierna, debe verse pronto.'
        ]}
      ]
    },
    {
      id: 'kakae', emoji: '🌧️', title: 'No lo cargue solo', sub: 'Descansar no es huir, es una destreza',
      secs: [
        { h: 'Estas son señales de su límite', body: [
          'No dormir de noche. Sin apetito. La ira estalla por nada. Vienen las lágrimas. Le contestó mal a la persona. Desearía desaparecer.',
          'Si aunque sea una suena cierta, no es que «usted sea débil» sino una señal de su cuerpo de que «necesita descanso».'
        ]},
        { h: 'Descansar no es huir, es una destreza', body: [
          'Para continuar el cuidado, hace falta tiempo lejos de él. Que alguien le releve para descansar se llama «cuidado de respiro», y está establecido como algo natural en todo el mundo.',
          'Atención de unas horas, atención de noche, ayuda que va a su casa. Qué opciones hay en su zona, un servicio de orientación en cuidados puede decírselo.'
        ]},
        { h: 'Está bien decirlo en voz alta', body: [
          'Decir «el cuidado es duro» no significa que haya llegado a no querer a la persona.',
          'Un lugar para hablar con familias en la misma situación (grupos de cuidadores y encuentros) puede ser un alivio sorprendente, solo por sentirse comprendido.'
        ]}
      ]
    },
    {
      id: 'makaseru', emoji: '🤝', title: 'Confíe a los profesionales lo que no puede', sub: 'No es huir, es un diseño que los protege a ambos',
      secs: [
        { h: 'Puede ceder el paso antes de que ocurra una lesión', body: [
          'Cuanto más cuida una familia por buena voluntad, más se culpa a fondo tras un accidente. El arrepentimiento de «si no lo hubiera forzado» pesa lo bastante para romper el corazón.',
          'Por eso esta app lo repite una y otra vez. Confíe a los profesionales lo difícil, aquello de lo que no está seguro, antes de que ocurra un accidente. No es una derrota, es la decisión más sabia que los protege a usted y a la persona.'
        ]},
        { h: 'El cuidado familiar no siempre es lo mejor', body: [
          'No tiene que creer «el cuidado familiar es lo mejor». Por ejemplo, muchos se sienten más a gusto en el aseo o el baño con otra persona (un profesional) que con la familia.',
          'También por la dignidad de la persona, hay situaciones en que la mano de un profesional es mejor.'
        ]},
        { h: 'Cuanto más ceda, más vuelve a ser familia', body: [
          'Si carga con todo el cuidado, se vuelve del todo «el cuidador», y su tiempo como hija, hijo, esposa o esposo desaparece.',
          'Por cada hora que confía a un profesional, puede volver a ser «familia». El tiempo de tomar un té y reír juntos quizá valga más que cualquier técnica de cuidado.'
        ]}
      ]
    },

    {
      id: 'soudan', emoji: '🗺️', title: 'Saber a quién acudir', sub: 'Antes de estar en apuros, aprenda solo los lugares',
      secs: [
        { h: 'Antes de quedar realmente atascado', body: [
          'El truco es aprender a quién acudir mientras aún está bien, en vez de buscar solo una vez atascado del todo.'
        ]},
        { h: 'Aquí hay lugares a los que acudir', body: [
          'Un servicio local de información para personas mayores (en muchas zonas hay una oficina o centro donde consultar sobre el cuidado, a menudo gratis).',
          'Un coordinador de cuidados (su asesor si usa un servicio de ayuda).',
          'Su médico de cabecera, un enfermero a domicilio (el cuerpo y lo médico). Un dentista a domicilio, un farmacéutico (la boca y los medicamentos).',
          'Para el cuidado de un familiar con discapacidad, un coordinador de apoyo puede ser su asesor.',
          'Un grupo de cuidadores o familias en la misma situación (los asuntos del corazón).'
        ]},
        { h: 'Un truco para consultar bien', body: [
          'Está bien quedarse en el estado de «ni siquiera sé qué me preocupa». «Estoy en apuros, pero no sé por dónde empezar» es una buena primera frase para consultar.'
        ]},
        { h: 'El servicio de orientación «Soyogi» que hizo esta app', body: [
          'Soyogi, un servicio de orientación en cuidado y apoyo. Es el servicio privado sin ánimo de lucro que crea esta aplicación.',
          'Cuando es difícil ir a las oficinas públicas, o solo tiene tiempo de noche, puede consultar de forma anónima en línea (en un metaverso). Esta orientación es un servicio en idioma japonés (1000 yenes por 30 minutos; reservar es más fluido).'
        ], link: { href: 'https://soyogi.hp.peraichi.com/top', label: '🍃 Ver el sitio web de Soyogi' }}
      ]
    },
    {
      id: 'kanpeki', emoji: '🍵', title: 'No busque la perfección', sub: 'Aguantar con 60 puntos vale más que caer con 100',
      secs: [
        { h: 'Aguantar con 60 puntos es más fuerte', body: [
          'En vez de dar cada día un cuidado perfecto y caer, aguantar mucho tiempo recortando algún detalle también es más feliz para la persona.',
          'Comida preparada, utensilios desechables, la escapada ocasional. Todo son «destrezas para aguantar».'
        ]},
        { h: 'No compare', body: [
          'No tiene que compararse con el cuidado de otra casa, ni con el cuidado admirable de la tele o las redes. La respuesta correcta para su casa solo está en su casa.'
        ]},
        { h: '«Hoy pude» basta', body: [
          '«Otro día que, de un modo u otro, pude.» Eso es algo realmente grande.'
        ]}
      ]
    },
    {
      id: 'kenkou', emoji: '🩺', title: 'Vigile también su salud', sub: 'Para no caer los dos juntos',
      secs: [
        { h: 'Si el cuidador cae, caen los dos', body: [
          'No posponga su propio sueño, sus comidas ni las revisiones de sus enfermedades crónicas. Su cuerpo es la herramienta más importante del cuidado.',
          'No se salte sus propias revisiones de salud «por el cuidado»; vaya a hacérselas.'
        ]},
        { h: 'Una pequeña revisión mensual', body: [
          '¿Ha dormido bien últimamente? ¿Se salta comidas? ¿Aguanta dolor físico? Una vez al mes basta; pregúnteselo.'
        ]}
      ]
    }
  ]
};
