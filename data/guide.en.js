'use strict';
/* =========================================================
   Home Care Guide (Soyogi) - English content
   Structure must stay identical to guide.ja.js (ids, step counts,
   fig / link / cpr references). Japan-specific items are adapted:
   119 -> your local emergency number; Civil Code 698 -> Good Samaritan
   protections; local systems -> generic terms; temps in C with F.
   ========================================================= */
window.OUCHI_CONTENT = window.OUCHI_CONTENT || {};
window.OUCHI_CONTENT.en = {

  tech: [
    {
      id: 'koshi', emoji: '🧍', title: 'Protect your back',
      sub: 'The basics of care that protects your back, without lifting',
      procs: [
        {
          id: 'koshi1', title: 'Do not lift, do not strain: 9 basics',
          steps: [
            { fig: 'bm_stance', t: 'Set your feet wider than your shoulders, bend your knees, and lower your hips. Build a stable base before you start. This way of using your body is called "body mechanics", the first thing professional carers learn.', c: 'Standing straight and bending only at the waist is the posture most likely to hurt your back.' },
            { fig: 'bm_close', t: 'Get as close to the person as you can. Step in with your feet and keep your body near theirs. The farther away you are, the more the load on your back multiplies.' },
            { fig: 'no_twist', t: 'Do not twist your body. To change direction, do not turn at the waist; step your feet around and turn your whole body.' },
            { fig: null, t: 'Do not move them with your arms alone. Use the big muscles of your thighs and hips. Picture moving by bending and straightening your knees.' },
            { fig: 'slide_move', t: 'Do not lift, slide. Moving horizontally takes far less force. A commercial slide sheet, or even a large plastic bag, can help.', c: 'A tip to protect your hands: when you put a hand under the body, slide it in palm-down first, then once it is deep enough, turn the palm up to draw them toward you. If you go in palm-up from the start, a nail can catch on the sheet or waterproof cover and get hurt. This is useful for any task where you slip a hand into a tight space, such as making a bed.' },
            { fig: 'roll_prep', t: 'Make the person compact. Fold their arms over the chest and bend their knees up, and you can move them with light force.' },
            { fig: 'lever_examples', t: 'Use leverage. Make a support point (marked with a triangle), such as an elbow or a hip, before you move. For sitting up, use the elbow as the pivot. At the edge of the bed, use the hips as the pivot and let the weight of the legs raise the upper body.' },
            { fig: 'roll_legs_first', t: 'Make gravity your ally. Use the weight of one part of the body to drive the movement. For example, when rolling over, drop the raised knees first (1), and the body follows with light force, pulled by the weight of the legs (2).' },
            { fig: null, t: 'Let the person do what they can. Using the strength they still have also helps keep their body strong.', c: 'The motto: "let the person use the things to hold on to." Bed rails, chair armrests, handrails. Your work gets lighter and their strength is kept: two birds with one stone.' }
          ],
          points: [
            'A little overexertion "every single time" is what breaks your back. Make it a habit to check your posture each time.',
            'If it feels impossible alone, do it with two people, or rely on equipment or a professional. That is not defeat; it is the right decision.'
          ]
        }
      ]
    },

    {
      id: 'seiketsu', emoji: '🧼', title: 'Basics of cleanliness',
      sub: 'Nails, handwashing, masks. Plain but the strongest protection',
      procs: [
        {
          id: 'seiketsu1', title: 'Nails, handwashing, masks: protect you both',
          steps: [
            { fig: null, t: 'This is the foundation of all care. It is not flashy, but it is a top-tier skill that protects both you and the person from injury and infection.' },
            { fig: null, t: 'Keep your own nails short, with rounded corners. Long nails scratch the person\'s skin during care, and catch on sheets or clothing and injure you.', c: 'The skin of older or weakened people is thin, and even a small scratch can lead to infection.' },
            { fig: null, t: 'The space under the nails collects dirt and waste. Left long, it becomes a breeding ground for infection at every meal, diaper change, and wound care. Keeping nails short is itself infection prevention.' },
            { fig: null, t: 'Wash your hands with soap before and after care. Between the fingers, around the nails, up to the wrists. Especially "after a diaper change" and "before touching food", every time.', c: 'When you cannot get to a sink, alcohol hand sanitizer is handy. But visible dirt must be washed off with water; sanitizer will not remove it.' },
            { fig: null, t: 'For diaper changes and touching wounds, use disposable gloves. To remove them, roll the dirty side inward, throw them away, and wash your hands afterward too.' },
            { fig: null, t: 'A mask is not a tool for sick days only; it is basic equipment during care. Everyone carries germs and viruses without any symptoms. What is nothing to a healthy you can be life-threatening to a weakened person.', c: 'Wear one especially for face-to-face care (feeding, mouth care, diaper changes, wound care). "Only when you feel unwell" is not enough protection.' },
            { fig: null, t: 'Keep the person\'s nails short too. It prevents them from scratching their own skin, and prevents either of you being hurt during care.', c: 'Do not cut ingrown nails, deformed nails, thick hard nails (nail fungus), or the nails of someone with diabetes at home. Ordinary clippers often cannot cut them; it takes special tools and skill and is easy to injure. Leave it to a doctor, or a nurse acting on a doctor\'s instructions.' },
            { fig: null, t: '"Trim the nails. Wash the hands. Wear a mask." It costs almost nothing, anyone can start today, and the effect is huge. Make it a habit.' }
          ],
          points: [
            'If your health breaks down, the care stops. Protecting your own body is the same as protecting the person you care for.'
          ]
        }
      ]
    },

    {
      id: 'taii', emoji: '🛏️', title: 'Rolling over (repositioning)',
      sub: 'How to change position, to prevent pressure sores',
      procs: [
        {
          id: 'taii1', title: 'From lying on the back to lying on the side',
          steps: [
            { fig: null, t: 'Always say out loud, "I am going to change your position now." Being touched suddenly startles the person and tenses the body, making it hard for you both.', c: 'If bones are fragile, joints are stiff, or there is a progressive illness, do not use this procedure as-is. See the page below for details.', link: { cat: 'kobetsu', proc: 'kobetsu1' } },
            { fig: 'roll_prep', t: 'Fold their arms over the chest and bend both knees up. When the body is compact, you can roll it with light force.', m: 'If paralysis makes folding the arms impossible, just resting the affected hand on the belly is fine. Do not force a stiff (contracted) arm to fold.' },
            { fig: 'shift_parts', t: 'Have them turn their face toward the way they will roll. Move the body in advance to the far edge of the bed, so it ends up in the middle after rolling.', c: 'Shift the body a little at a time in order: head, then shoulders and back, then hips, then legs. The trick is not to move it all at once.' },
            { fig: 'roll_pull', t: 'Place your hands on the knee and shoulder (or hip) and tip them gently toward you. Pulling toward you is safer and needs less force than pushing away.', c: 'When rolling toward a side with no rail, take great care against falls.', m: 'Before rolling, place the affected arm on the belly so it is not trapped under the body. Lying on the affected side is hard for the person to notice pain or pressure, so keep it as brief as possible.' },
            { fig: 'roll_legs_first', t: 'If you lack the strength to roll them at once, first drop only the raised knees toward you (1). The weight of the legs turns first, and the hips and torso follow with light force, pulled by that weight (2).', c: 'The trick is to make the person\'s weight and gravity your allies. Because it does not rely on arm strength, it helps most when a woman or an older person is providing care.' },
            { fig: null, t: 'If the person can move even a little, have them grip the bed rail on the side they are rolling toward. Even a small pull makes your job much lighter, and it keeps their arm strength: a small daily rehab.', c: 'First check that the rail is firmly fixed. A rail that is only slotted in can come loose if pulled hard.' },
            { fig: 'roll_cushion', t: 'Place a cushion against the back to stabilize the posture. Bend the upper knee slightly and put a cushion between the knees too.' },
            { fig: null, t: 'Finally, check that bony points such as the ears, shoulders, elbows, hip bones, and ankles are not pressing hard against anything.' }
          ],
          points: [
            'Do not roll them by pulling on an arm or trousers; it harms the skin and joints. Support the core (shoulders and hips) to roll.',
            'Also check that no wrinkled sheets or clothing are left under the body. Wrinkles cause pressure sores.'
          ]
        },
        {
          id: 'taii2', title: 'Preventing pressure sores: nutrition, timing, place',
          steps: [
            { fig: 'nutrition_cushion', t: 'In truth, the biggest foundation of pressure-sore prevention is not repositioning skill but "nutrition." A thin, bony person develops sores sooner, even in the same conditions. Value meals and nutrition so they keep the padding of flesh that acts as a cushion.', c: 'A shrinking appetite is itself a warning sign for pressure sores. Talk to a doctor or a nutrition professional about nutrition.' },
            { fig: 'pressure_points', t: 'Pressure sores form easily where bones stick out and press on the bed. The back of the head, shoulders, elbows, the center of the buttocks, and the heels are typical.' },
            { fig: null, t: 'A rough guide is not to leave them in the same position for more than 2 to 3 hours. If you use a pressure-relieving mattress, or depending on the person\'s condition, the right interval changes.', c: 'Decide the interval and method together with a professional such as a nurse or care manager for peace of mind.' },
            { fig: null, t: 'If you find redness on the buttocks or heels, press it gently with a finger. Redness that does not turn white is the start of a pressure sore. Position them so no weight rests on that spot.', c: 'Do not rub or massage the red area. It makes it worse.', m: 'The affected side has dulled sensation, and the person may not notice pain. Check the skin on the affected side especially often.' },
            { fig: 'heel_float', t: 'For someone whose heels redden easily, place a cushion under the calves to lift the heels slightly.' },
            { fig: null, t: 'How well a mattress or cushion "prevents pressure sores" varies enormously by product. If redness appears while using one, the equipment may not suit them. It is worth reviewing it or trying something different.', c: 'The fastest way to find the prevention points that suit the person is to ask a doctor, nurse, or assistive-equipment professional.' }
          ],
          points: [
            'Even if a pressure sore does form, do not blame yourselves with "our care was poor." Body shape, constitution, and illness create big differences in how easily they form, from the very start.',
            'What matters is not blame but talking to a professional early and switching to a way of preventing them that suits the person.'
          ]
        }
      ]
    },

    {
      id: 'oki', emoji: '🌅', title: 'Sitting up',
      sub: 'Until they sit on the edge of the bed',
      procs: [
        {
          id: 'oki1', title: 'Have them sit on the edge of the bed',
          steps: [
            { fig: null, t: 'After a word to them, first roll the body onto its side. Fold the arms over the chest, bend the knees, place your hands on the knee and shoulder, and tip them gently toward you. Do not forget to shift the body to the edge of the bed on the side they will get up.', m: 'For someone with paralysis, the basic way is to sit up with the stronger side down, because they can support themselves on the elbow of the stronger side.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Still on their side, lower both legs from the knee down over the edge of the bed.' },
            { fig: 'situp_seq', t: 'Support the shoulders and hips, use the weight of the legs, and raise the upper body in an arc (figure 1 to 4). Using the elbow as the pivot (triangle) and shifting the support from elbow to palm, they rise with far less force than pulling straight up.', c: 'With an electric bed whose backrest rises, raising the back a little first makes it easier still. If there is a rail or assist bar, let the person hold it. But use only a fixed "assist bar (bed handrail)" for putting weight on to stand.' },
            { fig: 'sit_edge', t: 'Once seated, make sure the whole soles of the feet rest flat on the floor. With a height-adjustable bed, set it to a height where the feet reach the floor.' },
            { fig: null, t: 'Do not let go right away. Just after sitting up, blood pressure can drop and cause dizziness. Support them nearby for a moment and watch their color and condition.', c: 'Pale color, a dazed look, cold sweat. At such times do not push on; lay them back down for a while.' }
          ],
          points: [
            'If sitting up stays hard for days on end, equipment such as an electric bed or handrails often solves it. Ask an assistive-equipment professional or a care advice service.'
          ]
        }
      ]
    },

    {
      id: 'ijou', emoji: '🪑', title: 'Standing and transfers',
      sub: 'From bed to wheelchair. Where most accidents happen',
      procs: [
        {
          id: 'tachi1', title: 'Helping someone stand',
          steps: [
            { fig: 'stand_prep', t: 'Have them sit forward on the seat. Slide the buttocks toward the front of the seat.' },
            { fig: 'stand_prep', t: 'Have them draw their feet back a little. With the ankles behind the knees, standing is easier.', c: 'Beware of pulling them back too far. If the feet go too deep, they can pitch forward the moment they stand.' },
            { fig: null, t: 'With a chair that has armrests, have the person push on the armrests. Pushing is easier for standing than pulling something, and it lightens your load too. The person pushing with their own arms is itself a small daily rehab that keeps muscle strength.' },
            { fig: 'stand_bow', t: 'Have them lean forward "as if bowing." As the head goes forward and down, the buttocks lift naturally. Do not pull them straight up; it stops the natural motion and makes standing harder.', c: 'This is the dangerous point. If the bow is too deep, they fall straight forward. It is a classic accident even among care staff. Lean forward only "the minimum to lift the buttocks." Stand at the diagonal front, in a position to catch them if they fall, carefully and slowly.', m: 'People with paralysis, or those weakened from long bed rest, may be unable to stop their own forward momentum. Go especially slowly, little by little. Do not let your guard down.' },
            { fig: 'stand_assist', t: 'Put your arm around the person\'s hips to support them, and rise together in time with the forward-leaning motion. Bend your own knees and lower your hips, and you will not hurt your back.', m: 'For someone whose affected knee buckles easily, resting your knee lightly against their affected knee steadies it (prevents knee buckling).', link: { cat: 'koshi', proc: 'koshi1' } },
            { fig: null, t: 'Just after standing, the knees can buckle. Keep supporting them until you have confirmed they are standing firmly.' }
          ],
          points: [
            'The prime example of "an accident you can prevent just by knowing about it" is a forward fall. Do this procedure carefully, slowly, without letting your guard down.',
            'If you feel afraid that a buckling knee is too much to support, do not force it. This is where standing handrails and other equipment come in. Do not carry it alone; talk to a professional.'
          ]
        },
        {
          id: 'ijou1', title: 'From bed to wheelchair',
          steps: [
            { fig: 'transfer_angle', t: 'Place the wheelchair on the person\'s easier side (the stronger side if there is paralysis), at an angle of 20 to 30 degrees to the bed.' },
            { fig: null, t: 'Lock both brakes, and raise or remove the footrests.', c: 'Forgetting the brakes is the number one cause of transfer accidents. Make it a habit to point and check every time.' },
            { fig: null, t: 'Have them sit on the edge of the bed, draw the feet back, and sit forward on the seat.' },
            { fig: null, t: 'Have them stand leaning forward "as if bowing." Sit forward, draw the feet back first. See the page below for the details.', link: { cat: 'ijou', proc: 'tachi1' } },
            { fig: 'pivot_steps', t: 'Once standing, pivot on the feet, stepping in small steps to turn slowly. Do not twist the body alone.' },
            { fig: null, t: 'Having them hold the far armrest of the wheelchair turns the body naturally. Lower the hips slowly toward the seat.', c: 'The motto is "let the person use the things to hold on to." Every time they use the armrest, the strength of their arms and body is kept.' },
            { fig: 'sit_deep', t: 'Have them sit back deeply and place the feet on the footrests. Left sitting forward, they slide down, which is dangerous. The next page explains how to reseat them properly.', link: { cat: 'ijou', proc: 'suwari1' } }
          ],
          points: [
            'If you feel even slightly that "I may not be able to hold them," do not do it alone.',
            'Transferring someone who cannot stand on their own (full assistance) is a different method. Have a professional watch you in person and teach you the way that suits the person.'
          ]
        },
        {
          id: 'suwari1', title: 'Reseating deeply in the wheelchair',
          steps: [
            { fig: 'sit_deep', t: 'Why it matters. Left sitting forward, the body slides down bit by bit, and pressure and shear concentrate on the center of the buttocks (the tailbone). This posture is how pressure sores form even while just sitting.' },
            { fig: null, t: 'First, check both brakes. Take the feet off the footrests and put the soles flat on the floor.' },
            { fig: null, t: 'Have the person lean forward "as if bowing." The buttocks lift a little. Having them push on the armrests makes them lift more easily.' },
            { fig: null, t: 'Move behind them, and the moment the buttocks lift, support the pelvis (around the hip bones) with both hands and guide it smoothly backward. It is a feeling of sliding, not lifting.', c: 'Reaching in under the armpits from behind to haul them up can hurt the shoulders, so it is not recommended at home.' },
            { fig: null, t: 'If leaning forward is hard for the person, do it side to side a little at a time. Tilt the body to one side, send the lifted buttock backward, then do the same on the other side. Repeating this "walking on the buttocks" seats them a little deeper each time.' },
            { fig: null, t: 'Finally, check. If there is no gap between the lower back and the backrest and the pelvis is upright, it passes. Return the feet to the footrests.' },
            { fig: null, t: 'One more thing: fix any disarranged clothing. There are actually very many people whose trousers or skirt have slipped down, leaving underwear or a diaper showing. A wheelchair takes them outside the home. Left like that, the person feels embarrassed.', c: 'The person often cannot fix it themselves and cannot bring themselves to say so. Noticing and quietly fixing it is the carer\'s job. An embarrassing experience can become a reason for "I do not want to go out anymore." Neat appearance is a small extra step that protects both the person and you from other people\'s eyes.' }
          ],
          points: [
            'Reseating comes up many times a day. When you think "they have slid down," do it, often. That itself is pressure-sore prevention.',
            'Posture and clothing. Only when both are set is the reseating "complete."'
          ]
        },
        {
          id: 'kuruma1', title: 'Moving in the wheelchair',
          steps: [
            { fig: null, t: 'Before moving, check first. Are the feet on the footrests? Are hands, clothing, or a lap blanket clear of the wheels? Moving with something caught can lead to injury or an accident within just a few meters.' },
            { fig: null, t: 'Once you have checked, say "We are moving now" before you start. Moving suddenly startles them.' },
            { fig: 'curb_tip', t: 'For a small step, press the tipping lever at the back to lift the front wheels and go up facing forward. To come down, go backward and lower it slowly from the rear wheels.', c: 'The position and presence of the lever differs by wheelchair. Check on the actual one when you borrow or buy it.' },
            { fig: null, t: 'A steep downhill is a "road to avoid" in the first place. If there is an elevator or a gentle slope, choose it even if it is a detour.', c: 'If you must go down, go backward and slowly. But the combined weight of a person and wheelchair is more than you imagine. Falling together because you cannot hold it is a serious accident. Your not falling matters just as much. If you are even slightly unsure, call for help.' },
            { fig: null, t: 'When you stop or step away, always set the brakes. And when you step away, always say "Wait here. I will be right back." Accidents where the person tries to stand up while you are away are very common.', c: 'Whether "wait here" gets through to the person takes judgment. If you are even slightly unsure, avoid leaving them seated in the wheelchair at all.' }
          ]
        }
      ]
    },

    {
      id: 'omutsu', emoji: '🚻', title: 'Changing diapers',
      sub: 'Quick, warm, and protecting the skin',
      procs: [
        {
          id: 'omu1', title: 'Changing a taped diaper',
          steps: [
            { fig: null, t: 'Before you start, gather everything at hand. A new diaper, absorbent pad, wipes, disposable gloves, and a bag for the soiled diaper. So you never have to step away partway.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: null, t: 'After a word to them, lower the trousers and undo the diaper tapes. Keep everything but the necessary area covered with a towel or blanket.', link: { cat: 'omutsu', proc: 'omu2' } },
            { fig: null, t: 'Roll the body onto its side, roll the soiled diaper inward, and tuck it lightly under the body. Rolling onto the side is the same as in repositioning.', c: 'If there is a bed rail, having the person hold it while on their side steadies the posture, is easier for you both, and helps keep their strength. But do not force it. If the person is willing, that is enough.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Wipe from front to back (from the belly side to the buttock side). For women especially, this direction matters to prevent urinary tract infection.', c: 'When soiling is heavy, rinsing with lukewarm water cleans better than wiping and is gentler on the skin.' },
            { fig: null, t: 'Roll half of the new diaper and tuck it under the body, return them onto their back, then pull it out and spread it on the other side. Make sure the center of the diaper is at the center of the body.' },
            { fig: 'tape_cross', t: 'Fasten the tapes crossing over: the lower ones angled slightly up, the upper ones slightly down. Leave room for one or two fingers around the belly.' },
            { fig: null, t: 'Run a finger along the standing leak guards (the raised edges at the leg openings) to stand them outward. If they lie inward, they cause leaks.' },
            { fig: null, t: 'Each time, give the skin a quick check for redness, soreness, or breaks. If anything concerns you, talk to a professional early.', m: 'If contractures make the legs hard to open, do not force them. Work within the range that opens without pain, and it is safest to be taught the method by a professional who is watching the person.' }
          ],
          points: [
            { t: 'Creating an atmosphere where they never have to say "sorry" is the greatest skill. How to create that atmosphere differs from person to person. It is on the next page.', link: { cat: 'omutsu', proc: 'omu2' } },
            'After a bowel movement, changing as soon as possible rather than waiting protects the skin.',
            'When leaks continue, more often than the fit, the diaper or pad does not suit the body. Ask a shop or a professional about reviewing the size or type.'
          ]
        },
        {
          id: 'omu2', title: 'Diaper changes, and the heart',
          steps: [
            { fig: null, t: 'Toileting care shows the difference in "heart" more than the difference in skill. Even if you are quick and accurate, if the person feels miserable, that is not the right answer. And this alone is the care with the least fixed "correct form" and the greatest differences between people.' },
            { fig: null, t: 'For some people, doing it plainly, like an ordinary chore, suits them. Not making a big deal of it makes the embarrassment smallest.' },
            { fig: null, t: 'For others, some light chatting suits better. The mood of "this is no trouble and no burden" comes across, and the sense of apology melts away.', c: 'Which suits, the person will tell you. Their expression, how much they talk, the tension in the body, how often they say "sorry." With a way that does not suit, these increase. When they increase, it is a sign to change your approach.' },
            { fig: null, t: 'Whatever the style, there is a shared "do not." Do not grimace. Do not comment on the smell or amount. Do not rush. Do not blame mistakes. These are the same for everyone.' },
            { fig: null, t: 'Deciding in advance what to say back when they say "sorry" makes it easier. "We are even." "You changed me when I was a baby, after all." There are words that work precisely because you are family.', c: 'But a joke can wound some people. Whether they laugh well is your teacher; watch the person\'s reaction.' }
          ],
          points: [
            'A diaper is not always "the only option." If there is still a way to toilet with a toilet or a portable commode, that protects the person\'s dignity and bodily strength. Whether to use diapers at all is an important theme worth discussing with a professional.',
            'The hand skills come with a week or two. Connecting hearts is an ongoing feeling-out that continues forever. There will be days it does not go well, and that is natural.'
          ]
        }
      ]
    },

    {
      id: 'shokuji', emoji: '🍚', title: 'Help with eating',
      sub: 'A posture that avoids choking, and an unhurried pace',
      procs: [
        {
          id: 'shoku1', title: 'A choke-free posture, and how to help',
          steps: [
            { fig: null, t: 'Start only after they are fully awake. Eating while drowsy leads to food entering the windpipe (aspiration).', c: 'Wash your hands before touching food. Clean nails and hands directly protect the person from infection.', link: { cat: 'seiketsu', proc: 'seiketsu1' } },
            { fig: 'meal_posture', t: 'In a chair, have them sit well back with the soles on the floor. Slightly forward, with the chin tucked, is the posture least likely to cause choking.', c: 'When the chin lifts, the windpipe opens straight and food enters it more easily. Tilting the head back and pouring food in is dangerous.' },
            { fig: 'bed_up', t: 'In bed, raise the upper body (at least 30 degrees, ideally 60 to 90). Put a pillow behind the head to tuck the chin.' },
            { fig: null, t: 'Keep each mouthful small. Bring the spoon from below, and confirm they have swallowed before the next mouthful. When the Adam\'s apple rises and falls, that is the sign of a swallow.', m: 'For someone with paralysis, bring the spoon to the corner of the mouth on the stronger side. Put on the affected side, food is hard to chew and gets left behind without them noticing.' },
            { fig: null, t: 'Helping with everything is not the only right answer. You help with the soup, and the person eats the solid dishes with chopsticks or a spoon. A "half and half" form is a fine way too. The more they eat by themselves, the more their strength and the joy of eating are kept.' },
            { fig: null, t: 'When you do help, if you can communicate with the person, let them have what they want, in the order they want. But how to check differs by person. Some want each mouthful specified, some want to tell you roughly and leave it to you, some leave it all to you.', c: 'Some find "being asked every time" annoying. Which way of asking is comfortable, only the person can decide. Watch their reaction and find that person\'s form.' },
            { fig: null, t: 'For someone who chokes easily on water or tea, there is a way to add a thickener. The thickness that suits differs by person, so consult a speech and swallowing therapist (speech-language pathologist) or a doctor or nurse.' },
            { fig: null, t: 'For 30 minutes to an hour after eating, keep the body upright. Lying down right away can cause choking on what comes back up from the stomach.' },
            { fig: null, t: 'Finally, check that no food is left in the mouth. It tends to stay inside the cheeks and on the roof of the mouth.', m: 'For someone with paralysis, it stays especially inside the cheek on the affected side. The person does not notice either, so look deliberately.' }
          ],
          points: [
            { t: 'More choking, meals taking too long. That may not be poor helping but a sign that the strength to swallow has changed. It is important, so it is on the next page.', link: { cat: 'shokuji', proc: 'shoku2' } }
          ],
          ng: [
            'Putting food in while asking for a reply (talking opens the windpipe)',
            'Rushing them. Making mouthfuls large',
            'Tilting the head back and pouring it in'
          ]
        },
        {
          id: 'shoku2', title: 'When eating starts to slow down',
          steps: [
            { fig: null, t: 'Help with eating is not just a task. Every day\'s meal is the most familiar health check, and for the person the greatest pleasure. That is exactly why "it is slowing down" is an important sign you must not miss.' },
            { fig: null, t: 'First, consider temporary causes. Feeling unwell, constipation, a mouth ulcer, ill-fitting dentures, low mood. If something fits and it recovers in a few days, you need not worry too much.' },
            { fig: null, t: 'What to watch for is when it continues for a long time. No physical illness and no emotional reason are found, yet it takes time, they choke, they hold food in the mouth. This may be a sign that the whole set of forces, "chewing, sending it back with the tongue, timing the swallow", is weakening itself. It also happens when dementia changes how the brain works.' },
            { fig: null, t: 'This judgment is actually a hard area even for doctors and nurses. A swallowing specialist (speech-language pathologist) often notices, so tell your doctor or advice service clearly, "I want a swallowing specialist to look."', c: 'You can sometimes have a swallowing examination or assessment through home rehabilitation or a hospital outpatient clinic.' },
            { fig: null, t: 'And here is the most important thing, told honestly. "As long as they can eat by mouth" is not always the goal. For someone whose swallowing has weakened, eating itself reaches a stage of risking pneumonia or choking. At that point "by mouth even if forced" cannot be called the right answer.' },
            { fig: null, t: 'Beyond that lie options such as taking nutrition through the nose or stomach (tube feeding, a gastrostomy) or an IV drip. These may be painful words just to hear. But this is not "giving up"; it is medical care to protect the person from pneumonia and choking.', c: 'Discuss it well with the doctor, carefully. But it is also a situation where it is better not to put off the decision too long. A late decision can corner both the person and you.' }
          ],
          points: [
            'This judgment is not for the family to bear alone. Rather, it is an area the family must not decide alone. Always together with a professional.',
            'Your noticing, "the way they eat has changed lately", as the one watching most closely every day, is exactly the information a professional most wants.'
          ]
        }
      ]
    },

    {
      id: 'koukuu', emoji: '🦷', title: 'Mouth care',
      sub: 'Preventing pneumonia starts in the mouth',
      procs: [
        {
          id: 'kou1', title: 'Brushing and caring for the mouth',
          steps: [
            { fig: null, t: 'Keeping the mouth clean is the single best prevention of pneumonia (aspiration pneumonia) in older people. Make it a habit after meals.' },
            { fig: null, t: 'If the person is willing, have them brush their own teeth. That itself is good rehab. But they often do not brush well enough, so the finishing check is your job.', c: 'Use wording that does not make them dislike the finishing check. Something like "You brushed well. Just show me the back at the end" goes in more easily, recognizing their effort first.' },
            { fig: null, t: 'The posture is the same as for eating. Slightly forward, with the chin tucked. This is so water and dirt do not run down the throat during care.', link: { cat: 'shokuji', proc: 'shoku1' } },
            { fig: null, t: 'Take dentures out and clean them with a denture brush. Do not use ordinary toothpaste; the abrasive scratches dentures. At night, take them out and soak them in water or denture cleaner.' },
            { fig: null, t: 'For someone who cannot rinse, gently wipe with a sponge brush holding almost no water, or with damp gauze wrapped around a finger.' },
            { fig: null, t: 'Gently clean not only the teeth but also the tongue, the roof of the mouth, and inside the cheeks. Do not try to remove stuck-on dirt all at once.', m: 'For someone with paralysis, dirt collects between the cheek and gums on the affected side, so be mindful there and gentle.' },
            { fig: null, t: 'It need not be perfect every time. But keep the minimum line before lying down. Take out the dentures. Remove food left in the mouth. Just these two, every night without fail.', c: 'While asleep, what is left in the mouth can flow unnoticed into the windpipe, and pneumonia starts quietly. It is invisible but life-threatening, the greatest danger hidden in mouth care.' },
            { fig: null, t: 'Continued bleeding, a mouth ulcer, pain, ill-fitting dentures. At such times consult a dentist. There is also a system of "home-visit dentistry" that comes to your house.' }
          ],
          points: [
            'On days they resist, you need not aim for perfect. But keep just "take out the dentures and remove leftover food before bed" as the daily minimum.',
            'The mouth is an especially private part of the body. Even care that protects life, if it turns forceful, wounds the heart. Life and heart matter equally. If either is damaged, one moves further from happiness.'
          ]
        }
      ]
    },

    {
      id: 'kigae', emoji: '👕', title: 'Getting dressed',
      sub: 'The rule: undress from the stronger side first',
      procs: [
        {
          id: 'kigae1', title: 'Changing a top (front-opening clothes)',
          steps: [
            { fig: 'datsuken', t: 'When one side is hard to move due to paralysis or pain, the rule is: undress starting from the stronger side, dress starting from the harder-to-move (affected) side.', c: 'Do not pull hard on a hand or arm. It can hurt the shoulder or bruise the skin.' },
            { fig: null, t: 'Undressing. First slip the arm out of the sleeve on the stronger side. Then slip the harder-to-move side out slowly.' },
            { fig: null, t: 'Dressing. First pass the arm through on the harder-to-move side. It goes on easily if you gather the sleeve and reach up to meet the hand.', c: 'When a finger catches in the sleeve and will not go through, do not force it. Pushing on with a nail caught can tear the nail off, a serious injury. It happens even to professionals. Ease it back once, re-gather the sleeve, and try again.', m: 'When a contracture keeps the elbow from straightening, do not try to straighten the arm; gather the clothing and pass it over instead. Loose, stretchy fabric is far easier.' },
            { fig: null, t: 'After it is on up to the shoulder, have them pass the arm through on the stronger side. Let them do what they can.' },
            { fig: null, t: 'Finally, smooth out the wrinkles under the back and buttocks. Lying on wrinkles causes pressure sores.' }
          ],
          points: [
            'Choosing clothes is part of care skill too. Just making them front-opening, loose, and stretchy makes dressing many times easier.',
            'Not only when dressing but also after a transfer or wheelchair, or after the toilet, clothing tends to be disarranged. Slipped trousers, a turned-up hem. Notice and quietly fix it. Fixing disarranged clothing is a basic of care that protects the person\'s dignity.',
            'Dressing is also a valuable chance to see the whole body. Redness of the skin, bruises, swelling, wounds. If you can naturally keep an eye out while helping, that is already good care.'
          ]
        },
        {
          id: 'kigae2', title: 'Changing trousers (while lying down)',
          steps: [
            { fig: null, t: 'First, one point of mindset. Dressing the lower body is the care where embarrassment shows most. Even without dementia, being resisted or met with non-cooperation is natural.', c: 'In short, it is the sincerity of your words and manner. Tell them the purpose, "You will feel fresh once we change," cover with a towel, do not look where you need not, and be quick. Lose their trust here and they may refuse the change itself. It is care that protects dignity and hygiene at the same time.' },
            { fig: null, t: 'Pass the harder-to-move leg through first. Gather it up in order: ankle, knee, thigh.', c: 'If a toe catches in the hem, force is forbidden. Torn nails are a classic dressing injury. Ease it back once, re-gather the hem, and pass it through.' },
            { fig: null, t: 'For someone who can lift their hips, have them bend the knees and raise the buttocks. In that moment, pull the trousers up to the waist.' },
            { fig: null, t: 'For someone who cannot lift their hips, tilt the body side to side alternately and pull up one side at a time. Rolling onto the side is the same as in repositioning.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Adjust the waist position and the wrinkles, and you are done.' }
          ]
        }
      ]
    },

    {
      id: 'seishiki', emoji: '🛁', title: 'Wiping the body and bathing',
      sub: 'Warm, safe, and clean',
      procs: [
        {
          id: 'sei1', title: 'Wiping the body (bed bath)',
          steps: [
            { fig: null, t: 'Warm the room first (aim for 22 to 24°C / 72 to 75°F). Cold tenses the body and raises blood pressure.' },
            { fig: null, t: 'Wring the towel in fairly hot water, around 55 to 60°C (130 to 140°F), and it will be just the right warmth by the time it meets the skin. Check the temperature on the inside of your own arm before applying it.' },
            { fig: null, t: 'Expose only the part you are wiping and keep the rest covered with a bath towel. Care for both the cold and the embarrassment.' },
            { fig: 'wipe_direction', t: 'Wipe the limbs from the far end toward the center of the body (hand to shoulder, foot to thigh). This follows the direction of blood flow.' },
            { fig: null, t: 'The order is face, arms, chest, belly, legs, back, buttocks, from the cleaner areas first. After wiping, take up the moisture at once with a dry towel. Left damp, it causes chilling and skin trouble.', m: 'A contracted palm, the armpits, and the inner elbows collect sweat and dirt. Do not pry them open by force; gently wipe as far as they open without pain.' },
            { fig: null, t: 'It need not be the whole body every day. Splitting it, upper body today and lower body tomorrow, tires neither the person nor you.' }
          ],
          points: [
            'Wiping and bathing are prime examples of care that is often resisted. On days they resist, do not push; just the face and hands today, the feet tomorrow, is fine. Thinking of cleanliness in units of a week rather than a day is about right.'
          ]
        },
        {
          id: 'sei2', title: 'Bathing safely',
          steps: [
            { fig: null, t: 'First, something to know. A bath is not "an event that only feels good." It takes energy. It is a bother. It is embarrassing. They do not want to be a burden. They lack confidence in their body. There are many reasons to resist, and all are natural.', c: 'Even healthy people have days of "I cannot be bothered to bathe today." Not understanding this leads to the mistaken care of forcing them. On days they resist, leave an escape: just wipe the body, just a footbath, or another day.' },
            { fig: null, t: 'In winter, warm the changing room and bathroom first. A sudden temperature difference swings blood pressure sharply and causes collapse (heat shock).' },
            { fig: null, t: 'A guide is water no hotter than 41°C (106°F), and soaking for up to 10 minutes. Long soaks in hot water are the most dangerous.', m: 'The affected side feels heat poorly and is where burns go unnoticed. Pour the shower or water little by little, starting from the non-affected side.' },
            { fig: null, t: 'Avoid bathing on an empty stomach, right after a meal, or after drinking alcohol.' },
            { fig: null, t: 'The moment of stepping over the tub edge is the most likely fall. Use handrails, a bath step, and a non-slip mat.', c: 'Equipment such as handrails and shower chairs can sometimes be borrowed or obtained cheaply through a care advice service. Ask a professional.' },
            { fig: null, t: 'During the bath, do not take your eyes off them. When the body warms in the water, blood flow and blood pressure change, consciousness can dim, and they may even lose consciousness as if falling asleep. Drowning in the tub happens quietly like this.', c: 'If you can, stay together in the bathroom or changing room. Have a pleasant chat while they warm up slowly. That is the most reassuring for you both.' }
          ],
          points: [
            'When the home bath becomes hard, many families ask a day care service to handle just the bath. It is not cutting corners; it is a fine choice for safety.'
          ]
        }
      ]
    },

    {
      id: 'hokou', emoji: '🚶', title: 'Watching over walking and preventing falls',
      sub: 'Making the home fall-proof is half the work',
      procs: [
        {
          id: 'hok1', title: 'How to watch over walking',
          steps: [
            { fig: 'walk_position', t: 'The person supporting stands slightly behind and to the side of the person\'s weaker side (the side with paralysis). It is the position to support them at once if they wobble.' },
            { fig: null, t: 'Knowing why people fall changes how you support them. Most falls begin with "the foot does not lift as much as expected, and they trip" or "the sole does not land flat and the ankle twists." Then the fall happens because a recovery step does not come out in time.', c: 'Put the other way: if you can just support that wobbling moment, you can avoid the worst fall. Being ready to "support that one step at any moment", that is the carer\'s foremost job.' },
            { fig: null, t: 'Rather than holding hands, lightly supporting under the armpit or at the hips lets you catch them if they collapse. Have the person hold a handrail or cane.', m: 'For someone using a leg brace (a device that helps walking), do not fit it your own way; follow exactly what a rehabilitation professional taught. Hold the cane in the hand on the non-affected side.' },
            { fig: null, t: 'Do not rush them. The single phrase "slowly is fine" is the best fall prevention.' }
          ]
        },
        {
          id: 'hok2', title: 'Preventing falls inside the home',
          steps: [
            { fig: null, t: 'Reduce hazards on the floor. Electrical cords, curled-up mats, newspapers or bags left lying about, small steps. Most falls happen at spots like these inside the home.' },
            { fig: null, t: 'Put a light at foot level on the path to the toilet at night. A small motion-sensor light is handy.' },
            { fig: null, t: 'Slippers slip off easily because the heel is not held, so indoor shoes that cover the heel are safer.' },
            { fig: null, t: 'Having a handrail or steady furniture to hold at spots they pass often gives peace of mind. Also watch for a habit of grabbing wobbly furniture.' }
          ],
          points: [
            'Public subsidies can sometimes be used for fitting handrails and removing steps. Ask a local care advice service.'
          ]
        },
        {
          id: 'hok3', title: 'Building a fall-proof body: seated exercises',
          steps: [
            { fig: null, t: 'Fall prevention is not only walking practice. Small seated exercises, built up, grow "the strength to lift the foot" and "the strength to land flat." Do not force it; even while watching TV is fine.' },
            { fig: null, t: 'Thigh lifts. Sitting in a chair, lift one thigh slowly and lower it. Alternate sides. This keeps the strength to lift the foot and reduces tripping.' },
            { fig: null, t: 'Ankle circles. Lift the foot a little and circle the ankle slowly, both directions. A supple ankle can withstand the wobble of landing.' },
            { fig: null, t: 'Toe raises and heel raises. Sitting, keep the heel on the floor and lift the toes. Then keep the toes down and lift the heel. The strength to land the sole flat is supported by these muscles of the shin and calf.' },
            { fig: null, t: 'The number of reps is enough at "as many as end pleasantly." A little every day works better than a lot once in a while. On days the person resists, a rest is fine.' }
          ],
          points: [
            'This exercise needs no equipment and no money. It is the cheapest insurance for "keeping walking safely and happily."'
          ]
        }
      ]
    },

    {
      id: 'futon', emoji: '🛌', title: 'Care on a futon',
      sub: 'Tips for care from the floor, and the option of a bed',
      procs: [
        {
          id: 'futon1', title: 'When you care on a futon',
          steps: [
            { fig: null, t: 'First, the important conclusion. If care is likely to continue, we strongly recommend borrowing or setting up an electric care bed. Whether you can give care at hip height changes everything, both the load on your back and the person\'s safety.', c: 'In many places, such equipment can be rented for a small monthly cost through public care insurance or support programs. Ask a local care advice service.' },
            { fig: null, t: 'That said, for those caring on a futon again tonight, here are tips for the floor. Care on a futon is not "impossible"; only the way you use your body differs a little from a bed.' },
            { fig: 'kneel_assist', t: 'When helping from the floor, do not stand and bend at the waist. Put one knee on the floor and raise the other: a "half-kneel" is the basic posture. Lower your own body and get close to the person.', c: 'A half-kneel wobbles less front to back than both knees down, and lets you use more force.' },
            { fig: null, t: 'Rolling over and diaper changes themselves are the same as on a bed (bend the knees, tip toward you). Only your posture differs. In a half-kneel, pull with your whole body, not your arm strength.', link: { cat: 'taii', proc: 'taii1' } },
            { fig: null, t: 'Getting up from the floor goes in order: on the back, onto the side, onto all fours, into a half-kneel, then standing. Rather than raising them straight up, having the person move "via all fours" too is far easier for you both.', c: 'For support when standing, steady low furniture (a solid chair, for example) can serve as a handrail.' },
            { fig: null, t: 'The weakness of a futon is that a pressure-relieving care mattress is hard to use. For someone prone to pressure sores, be mindful and keep the repositioning interval shorter. A thin, hard futon needs special care.', link: { cat: 'taii', proc: 'taii2' } },
            { fig: null, t: 'And once more. Daily futon lifting and floor-level care wear your back down for certain. While you still think "I am fine," start looking into a bed. Your back is the most important tool in care.' }
          ],
          points: [
            'Futon or bed is not better-or-worse but a choice of lifestyle. But it makes a clear difference to the wear on the carer\'s body.',
            'When changing to a bed, mind the person\'s feelings too. Asking "lend me this for my back," rather than "for your sake," is often accepted more easily.'
          ]
        }
      ]
    },

    {
      id: 'kobetsu', emoji: '🩺', title: 'When there is illness or disability',
      sub: 'When you must not use these basics as-is',
      procs: [
        {
          id: 'kobetsu1', title: 'When you must get "personal guidance"',
          steps: [
            { fig: null, t: 'This app\'s procedures are the "general" basics of care for an adult body. But depending on the illness or disability, the same method can cause injury. From the next pages, check whether any apply. If one applies, keep this app as reference only and be sure to be taught the way that suits the person.' },
            { fig: 'no_pull', t: 'People with fragile bones. Severe osteoporosis, long bed rest, brittle bone disease, and so on. They can fracture even with light force, so carrying and pulling care must be done under personal guidance.', c: 'Never give care that pulls on an arm or leg, for anyone. It is especially dangerous for people with fragile bones.' },
            { fig: null, t: 'People whose joints are stiff and hard to move (contractures). Forcing them to straighten harms the joint and skin. The "range that moves without pain" differs by person, so it is safest to have a professional watch and teach you in person.' },
            { fig: null, t: 'People with a progressive illness. Muscular dystrophy, ALS, and the like. The body keeps changing, so yesterday\'s right answer becomes today\'s danger. Review the method with a professional regularly. There are also illnesses where overusing the muscles itself harms the body.' },
            { fig: null, t: 'People with severe physical and intellectual disability. Body deformity, hips that dislocate easily, weak breathing; each person\'s body is completely different. It is an area where even professionals need training tailored to each individual. Self-taught methods are forbidden.' },
            { fig: null, t: 'People using medical equipment such as a ventilator, tracheostomy, nose or stomach feeding, or home oxygen. There are medical rules for posture and movement. The instructions of the doctor and nurse take priority over everything.' },
            { fig: null, t: 'People told by a doctor to limit movement. Heart disease, after a fracture, during dialysis, and so on. Confirm the details of the limits before deciding how to give care.' },
            { fig: null, t: 'You can ask for personal guidance from the doctor, a home-visit nurse, home-rehabilitation specialists (physiotherapists and occupational therapists), or, for a person with a disability, a support coordinator. Say "please teach me the way to do it at home," and they will teach you the way that suits the person, in the actual room and bed.' }
          ],
          points: [
            'Getting personal guidance is not an overreaction. Teaching families how to do it at home is an important part of a professional\'s job.',
            '"In this person\'s case, what should I watch out for?" This question is the best question.'
          ]
        }
      ]
    }
  ],

  danger: [
    {
      id: 'chissoku', emoji: '🆘', title: 'Choking (blocked airway)', sub: 'When they cannot make a sound, every second counts',
      fig: 'choking_back', cpr: true,
      when: [
        'Sudden distress during a meal, unable to make a sound or cough',
        'Clutching the throat with both hands (the sign of choking)',
        'Color worsening rapidly'
      ],
      act: [
        'If they can make a sound or cough, first let them cough hard. A cough is the strongest force to expel it',
        'If they cannot cough, lean them forward and strike firmly 4 to 5 times between the shoulder blades with the heel of your hand (back blows)',
        'If it does not come out, wrap your arms around them from behind, make a fist just above the navel, and thrust quickly inward and upward (abdominal thrusts). Alternate with back blows',
        'Do not perform abdominal thrusts on a pregnant person or an infant (back blows only)',
        'After abdominal thrusts, always seek medical care afterward. The internal organs need to be checked for injury'
      ],
      call: [
        'The blockage will not come out',
        'They go limp or stop responding. Call emergency services at once. Put the phone on speaker and they will guide you'
      ]
    },
    {
      id: 'goen', emoji: '😮‍💨', title: 'More choking, possibly pneumonia', sub: 'Pneumonia in older people starts quietly',
      when: [
        'Choking during meals has increased compared with before',
        'More phlegm after eating. A gurgling voice',
        'Somehow low energy. Appetite has dropped. A low fever continues'
      ],
      act: [
        'Pneumonia in older people often shows no clear cough or high fever. "Somehow different from usual" can be the only sign',
        { t: 'Review the eating posture and the position of the chin', link: { cat: 'shokuji', proc: 'shoku1' } },
        'Note down the changes. Even just telling the doctor "choking has increased" is important information'
      ],
      see: [
        'When increased choking or a low fever continues. Consult your regular doctor early'
      ],
      call: [
        'Breathing looks hard. Breathing with the shoulders',
        'The lips or face look poor in color. They are limp'
      ]
    },
    {
      id: 'tentou', emoji: '🩹', title: 'A fall, or falling from bed', sub: 'Do not hurriedly pull them up',
      when: [
        'When you find they have fallen or dropped (including while you were away)'
      ],
      act: [
        'Do not hurriedly pull them up. First check whether they are conscious, whether there is severe pain, and whether the limbs look misshapen',
        'Cannot move from severe pain, a leg looks the wrong shape or angle. In such cases there may be a fracture, so call an ambulance without moving them',
        'If there is no major abnormality, raise them slowly and watch them for the day',
        'If they hit their head, watch for 24 to 48 hours even if they seem fine at the time. Someone taking blood-thinning medicine needs special care'
      ],
      call: [
        'No consciousness. Dazed and responding strangely',
        'After a head hit: vomiting, a seizure, or slurred speech',
        'Cannot move from severe pain. A bone is clearly misshapen'
      ]
    },
    {
      id: 'dassui', emoji: '🌡️', title: 'Fever, or cannot take fluids', sub: 'Older people struggle to notice thirst',
      when: [
        'A dry mouth. Chapped lips',
        'Fewer times passing urine. Darker color',
        'Limp. Drowsy and dull to respond'
      ],
      act: [
        'Older people feel thirst poorly and become dehydrated without noticing. It happens not only in summer but also in winter and during fever',
        'If they can drink, give fluids a little at a time, often. An oral rehydration solution with salt and sugar is suitable',
        'Check the room temperature too. Are they overdressed in a hot room'
      ],
      see: [
        'Fever continues. They can take only a little fluid. See your regular doctor early'
      ],
      call: [
        'They will not take any fluid at all. They vomit right after drinking',
        'Limp and responding strangely. A seizure'
      ]
    },
    {
      id: 'jokusou', emoji: '🔴', title: 'Red buttocks or heels (pressure sores)', sub: 'The sign is "redness that does not fade when pressed"',
      when: [
        'Redness where bones stick out (center of the buttocks, heels, shoulders, back of the head)',
        'Redness that does not turn white when pressed lightly with a finger',
        'A blister, peeling skin, or a dark discoloration'
      ],
      act: [
        { t: 'Redness that does not turn white when pressed is the start of a pressure sore. Lay them in a position with no weight on that spot', link: { cat: 'taii', proc: 'taii1' } },
        'Do not massage, rub, or dry it with a hairdryer. It damages the inside of the skin and makes it worse',
        'If there is a wound, the old "dry it to heal it" is not today\'s standard. Current wound care is based on "keeping it moderately moist." Do not dry it out on your own judgment',
        'However, when it is festering or infection is a concern, keeping it moist can backfire. Always confirm the treatment method itself with a nurse or doctor',
        'Getting thin or eating less is a major warning sign for pressure sores. Rebuilding nutrition is part of the treatment too',
        'For redness inside the diaper, telling a pressure sore from a rash matters. Do not keep applying medicine on your own judgment'
      ],
      see: [
        'There is a blister, peeling skin, or dark discoloration (an advanced pressure sore). Show it to a nurse or doctor',
        'When the redness does not fade after several days'
      ]
    },
    {
      id: 'fast', emoji: '⚡', title: 'Signs of a stroke (FAST)', sub: 'Do not wait and see. It is a race against time',
      fig: 'fast_signs',
      when: [
        'Face. When you ask them to smile, one corner of the mouth does not lift',
        'Arm. When both arms are raised forward, one drifts down',
        'Speech. Slurred speech. Words will not come',
        'If even one applies, it is a race against Time'
      ],
      act: [
        'Note the time it started (the last time they were well). It is important information for the choice of treatment',
        'Lay them in a comfortable position, and turn the face to the side if they may vomit',
        'Do not put food, drink, or medicine in the mouth'
      ],
      call: [
        'When you notice the signs, do not wait and see; call emergency services at once. Stroke is an illness where "the sooner you reach the hospital, the lighter the aftereffects"'
      ]
    },
    {
      id: 'ishiki', emoji: '🚨', title: 'No response when called', sub: 'When in doubt, call; that is the right answer',
      cpr: true,
      when: [
        'No response even when you call out or tap the shoulder lightly'
      ],
      act: [
        'Call emergency services at once. Put it on speaker and act while listening to the guidance',
        'Check whether there is normal breathing (watch the chest and belly move for about 10 seconds)',
        'If there is breathing, roll the body onto its side and lift the chin slightly (so vomit does not block the throat)',
        'If there is no normal breathing, follow the phone guidance and start chest compressions (CPR)'
      ],
      call: [
        'For this item, "call when in doubt" is the right answer. If it turned out not to be that serious, that is the best result'
      ]
    }
  ],

  /* CPR (chest compressions) guide. Numbers follow international resuscitation
     guidance: hard (about 5 cm), fast (100 to 120 per min), continuous.
     Start when in doubt. The dispatcher's guidance takes priority. */
  cpr: {
    open: '❤️ How to do chest compressions (CPR), and the rhythm',
    title: 'Chest compressions (CPR)',
    intro: 'This is for a person who is unresponsive and not breathing normally. When in doubt, start.',
    firstTitle: 'First of all',
    first: 'Call your local emergency number and put it on speaker. The dispatcher will teach you what to do over the phone. That guidance takes priority. Use this page as a support to it.',
    stepsTitle: 'How to do it',
    steps: [
      'Lay them on their back on a firm floor. On a soft bed, the pushing force escapes',
      'Place the heel of one hand on the center of the chest and lay the other hand on top',
      'Straighten your elbows and press straight down with your body weight, hard enough to sink the chest about 5 cm (2 inches)',
      'Each time you press, release until the chest returns to its original height. Keep your hands on the chest',
      'At a pace of 100 to 120 per minute, continue with as few pauses as possible until the ambulance arrives',
      'Rescue breaths are not essential. Continuing to press is the most important thing',
      'When tired, swap without hesitation. When an AED (automated defibrillator) arrives, turn it on and follow the voice guidance'
    ],
    metroStart: 'Play the rhythm (110 per minute)',
    metroStop: 'Stop the rhythm',
    metroHint: 'Press once with each beat. A higher tone sounds every 30 beats',
    note: 'The force can crack a rib, but life comes first. In many places, a rescue action taken in good faith without serious negligence is protected from liability (Good Samaritan protections). Please do not hesitate.'
  },

  self: [
    {
      id: 'koshicare', emoji: '💪', title: 'Before and after you hurt your back', sub: 'Your body is the most important tool in care',
      secs: [
        { h: 'Care is "labor for the back"', body: [
          'Even for professional carers, back pain is the number one occupational injury. If an untrained family member hurts their back, it is not because you are weak. It is only natural.',
          'That is exactly why you should make the "Protect your back" page in the Skills tab a habit every time.'
        ], ref: { cat: 'koshi', proc: 'koshi1' }},
        { h: 'Protect it with environment and equipment', body: [
          'With a height-adjustable bed, raise it to about your own hip height when giving care. Care at a low position is a major cause of back pain.',
          'There are aids that shift the force to equipment, such as slide sheets and standing handrails. They can often be borrowed through a care advice service, so ask.'
        ]},
        { h: 'If you do hurt it', body: [
          'Do not keep going while enduring the pain. If it worsens, you become unable to continue the care itself.',
          'Severe pain, or pain with numbness in the leg, should be seen early.'
        ]}
      ]
    },
    {
      id: 'kakae', emoji: '🌧️', title: 'Do not carry it alone', sub: 'Resting is not escape; it is a skill',
      secs: [
        { h: 'These are signs of your limit', body: [
          'Cannot sleep at night. No appetite. Anger flares over small things. Tears come. You snapped at the person. You wish you could disappear.',
          'If even one rings true, it is not that "you are weak" but a signal from your body that "you need rest."'
        ]},
        { h: 'Resting is not escape; it is a skill', body: [
          'To continue care, you need time away from it. Having someone take over the care so you can rest is called "respite care," and it is set up as a matter of course around the world.',
          'Short-hour care, overnight care, help that comes to your home. A care advice service can tell you what options your area has.'
        ]},
        { h: 'It is okay to say it out loud', body: [
          'Saying "care is hard" does not mean you have come to dislike the person.',
          'A place to talk with families in the same position (caregiver groups and gatherings) can be a surprising relief, just from being understood.'
        ]}
      ]
    },
    {
      id: 'makaseru', emoji: '🤝', title: 'Leave to professionals what you cannot do', sub: 'It is not escape; it is a design that protects you both',
      secs: [
        { h: 'You may hand it over before an injury happens', body: [
          'The more a family cares out of good will, the more deeply they blame themselves after an accident. The regret of "if only I had not pushed it" is heavy enough to break the heart.',
          'So this app says it again and again. Leave what is hard, what you are unsure of, to professionals before an accident happens. That is not defeat; it is the wisest decision that protects both you and the person.'
        ]},
        { h: 'Family care is not always best', body: [
          'You do not have to believe "family care is best." For example, many people find toileting or bathing more at ease with someone else (a professional) than with family.',
          'For the person\'s dignity too, there are certainly situations where a professional\'s hand is better.'
        ]},
        { h: 'The more you hand over, the more you return to being family', body: [
          'If you carry all of the care, you become entirely "the carer," and your time as a daughter, son, wife, or husband disappears.',
          'For every hour you leave to a professional, you can return to being "family." Time to drink tea and laugh together may be more precious than any care skill.'
        ]}
      ]
    },

    {
      id: 'soudan', emoji: '🗺️', title: 'Know where you can turn', sub: 'Before you are in trouble, just learn the places',
      secs: [
        { h: 'Before you are truly stuck', body: [
          'The trick is to learn where to turn while you are still well, rather than searching only once you are truly stuck.'
        ]},
        { h: 'Here are places you can turn to', body: [
          'A local general advice service for older people (in many areas there is a public counter or center where you can consult about care, often free).',
          'A care manager (your advisor if you use a public care service).',
          'Your regular doctor, a home-visit nurse (body and medical matters). A home-visit dentist, a pharmacist (mouth and medicine matters).',
          'For caring for a family member with a disability, a support coordinator can be your advisor.',
          'A caregiver or family group in the same position (matters of the heart).'
        ]},
        { h: 'A tip for consulting well', body: [
          'It is fine to stay in the state of "I do not even know what I am troubled about." "I am struggling, but I do not know where to begin" is a fine opening line for a consultation.'
        ]},
        { h: 'The counseling service "Soyogi" that made this app', body: [
          'Soyogi, a care and support counseling service. It is the nonprofit, private service that makes this app.',
          'When it is hard to go to public counters, or you only have time at night, you can consult anonymously online (in a metaverse). This consultation is a Japanese-language service (1,000 yen per 30 minutes; booking is smoother).'
        ], link: { href: 'https://soyogi.hp.peraichi.com/top', label: '🍃 Visit the Soyogi website' }}
      ]
    },
    {
      id: 'kanpeki', emoji: '🍵', title: 'Do not aim for perfect', sub: 'Lasting at 60 points beats collapsing at 100',
      secs: [
        { h: 'Lasting at 60 points is stronger', body: [
          'Rather than giving perfect care every day and collapsing, lasting a long time while cutting some corners is happier for the person too.',
          'Ready-made meals, disposable tools, the occasional skip. All are "skills for lasting."'
        ]},
        { h: 'Do not compare', body: [
          'You do not need to compare with another home\'s care, or the admirable care on TV or social media. The right answer for your home is only in your home.'
        ]},
        { h: '"I got through today" is enough', body: [
          '"I somehow got through another day." That is a truly great thing.'
        ]}
      ]
    },
    {
      id: 'kenkou', emoji: '🩺', title: 'Watch your own health too', sub: 'To prevent you both going down together',
      secs: [
        { h: 'If the carer collapses, you both go down', body: [
          'Do not put off your own sleep, meals, and check-ups for chronic conditions. Your body is the most important tool in care.',
          'Do not skip your own health checks with "because of the care"; go and have them.'
        ]},
        { h: 'A small monthly check', body: [
          'Have you been sleeping properly lately? Are you skipping meals? Are you enduring bodily pain? Once a month is enough; ask yourself.'
        ]}
      ]
    }
  ]
};
