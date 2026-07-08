export interface Animal {
  id: string;
  name: {
    ru: string;
    ro: string;
    en: string;
  };
  latinName: string;
  biome: {
    ru: string;
    ro: string;
    en: string;
  };
  biomeColor: string;
  shortFact: {
    ru: string;
    ro: string;
    en: string;
  };
  description: {
    ru: string;
    ro: string;
    en: string;
  };
  warning: {
    ru: string;
    ro: string;
    en: string;
  };
  feedingTime: {
    ru: string;
    ro: string;
    en: string;
  };
  range: {
    ru: string;
    ro: string;
    en: string;
  };
  mapCoordinates: { x: number; y: number };
  bgGradient: string;
}

export const animals: Animal[] = [
  {
    id: "tiger",
    name: { ru: "Амурский тигр", ro: "Tigrul Siberian", en: "Amur Tiger" },
    latinName: "Panthera tigris altaica",
    biome: { ru: "Тайга", ro: "Taiga", en: "Taiga" },
    biomeColor: "bg-[#4F6942] text-[#F6F1E8]",
    shortFact: {
      ru: "Самый крупный подвид тигра, приспособленный к жизни в холодных лесах и снегу.",
      ro: "Cea mai mare subspecie de tigru, adaptată la păduri reci și zăpadă.",
      en: "The largest tiger subspecies, adapted to cold forests and snow."
    },
    description: {
      ru: "Величественный хищник северных лесов. Густой мех и мощное телосложение помогают ему переносить морозы, а уникальный рисунок полос не повторяется у разных особей.",
      ro: "Un prădător maiestuos al pădurilor nordice. Blana deasă și corpul puternic îl ajută să reziste frigului, iar modelul dungilor este unic pentru fiecare individ.",
      en: "A majestic predator of northern forests. Its thick coat and powerful body help it withstand cold, and every individual has a unique stripe pattern."
    },
    warning: {
      ru: "Соблюдайте тишину у вольера. У тигра очень чувствительный слух.",
      ro: "Păstrați liniștea lângă incintă. Tigrul are un auz foarte sensibil.",
      en: "Keep quiet near the enclosure. Tigers have very sensitive hearing."
    },
    feedingTime: { ru: "Ежедневно в 14:30", ro: "Zilnic la 14:30", en: "Daily at 14:30" },
    range: { ru: "Дальний Восток России, бассейны рек Амур и Уссури", ro: "Extremul Orient al Rusiei, bazinele râurilor Amur și Ussuri", en: "Russian Far East, Amur and Ussuri river basins" },
    mapCoordinates: { x: 30, y: 35 },
    bgGradient: "from-[#D5C29D]/30 to-[#E7F0E1]/30"
  },
  {
    id: "red_panda",
    name: { ru: "Красная панда", ro: "Panda Roșu", en: "Red Panda" },
    latinName: "Ailurus fulgens",
    biome: { ru: "Горные леса", ro: "Păduri de munte", en: "Mountain Forests" },
    biomeColor: "bg-[#D77A4A] text-[#F6F1E8]",
    shortFact: {
      ru: "Большую часть жизни проводит на деревьях и питается в основном бамбуком.",
      ro: "Își petrece cea mai mare parte a vieții în copaci și se hrănește mai ales cu bambus.",
      en: "Spends most of its life in trees and feeds mostly on bamboo."
    },
    description: {
      ru: "Небольшое и очень ловкое млекопитающее. Рыжая шерсть помогает маскироваться среди мха и лишайников горных лесов.",
      ro: "Un mamifer mic și foarte agil. Blana roșcată îl ajută să se camufleze printre mușchi și licheni în pădurile montane.",
      en: "A small and agile mammal. Its rusty fur helps it blend into moss and lichens in mountain forests."
    },
    warning: {
      ru: "Не шумите у вольера. Красные панды легко пугаются.",
      ro: "Nu faceți zgomot lângă incintă. Pandele roșii se sperie ușor.",
      en: "Avoid loud noises near the enclosure. Red pandas are easily startled."
    },
    feedingTime: { ru: "Ежедневно в 11:00 и 16:00", ro: "Zilnic la 11:00 și 16:00", en: "Daily at 11:00 and 16:00" },
    range: { ru: "Восточные Гималаи, горные леса Китая и Непала", ro: "Himalaya de Est, pădurile montane din China și Nepal", en: "Eastern Himalayas, mountain forests of China and Nepal" },
    mapCoordinates: { x: 45, y: 25 },
    bgGradient: "from-[#E6B39A]/30 to-[#F6F1E8]/30"
  },
  {
    id: "snow_leopard",
    name: { ru: "Снежный барс", ro: "Leopardul zăpezilor", en: "Snow Leopard" },
    latinName: "Panthera uncia",
    biome: { ru: "Высокогорье", ro: "Munți înalți", en: "High Mountains" },
    biomeColor: "bg-[#7A8A99] text-[#F6F1E8]",
    shortFact: {
      ru: "Способен совершать длинные прыжки благодаря мощным задним лапам и длинному хвосту.",
      ro: "Poate face salturi lungi datorită labelor posterioare puternice și cozii lungi.",
      en: "Can make long leaps thanks to powerful hind legs and a long balancing tail."
    },
    description: {
      ru: "Скрытный и грациозный обитатель скал. Широкие лапы помогают передвигаться по снегу, а пушистый хвост служит балансиром и защитой от холода.",
      ro: "Un locuitor discret și grațios al stâncilor. Labele late îl ajută pe zăpadă, iar coada stufoasă oferă echilibru și protecție împotriva frigului.",
      en: "A secretive and graceful mountain cat. Wide paws help on snow, while the bushy tail supports balance and warmth."
    },
    warning: {
      ru: "Не пытайтесь привлечь внимание криком. Барс ценит спокойствие.",
      ro: "Nu încercați să-i atrageți atenția prin strigăte. Leopardul zăpezilor are nevoie de liniște.",
      en: "Do not shout to get its attention. Snow leopards need calm."
    },
    feedingTime: { ru: "Вторник и пятница в 15:00", ro: "Marți și vineri la 15:00", en: "Tuesday and Friday at 15:00" },
    range: { ru: "Горные системы Центральной Азии: Алтай, Гималаи, Памир", ro: "Sisteme montane din Asia Centrală: Altai, Himalaya, Pamir", en: "Mountain systems of Central Asia: Altai, Himalayas and Pamirs" },
    mapCoordinates: { x: 62, y: 18 },
    bgGradient: "from-[#C4D0D9]/30 to-[#E7F0E1]/30"
  },
  {
    id: "lynx",
    name: { ru: "Евразийская рысь", ro: "Râsul eurasiatic", en: "Eurasian Lynx" },
    latinName: "Lynx lynx",
    biome: { ru: "Хвойные леса", ro: "Păduri de conifere", en: "Coniferous Forests" },
    biomeColor: "bg-[#5E6B5C] text-[#F6F1E8]",
    shortFact: {
      ru: "Кисточки на ушах помогают лучше улавливать звуки в лесу.",
      ro: "Ciucurii de pe urechi ajută la perceperea sunetelor în pădure.",
      en: "Its ear tufts help detect sounds in dense woodland."
    },
    description: {
      ru: "Крупная лесная кошка с коротким хвостом и сильным телом. Отлично лазает по деревьям и бесшумно передвигается среди лесных завалов.",
      ro: "O pisică de pădure mare, cu coadă scurtă și corp puternic. Se cațără excelent și se mișcă silențios prin pădure.",
      en: "A large forest cat with a short tail and strong build. It climbs well and moves silently through woodland."
    },
    warning: {
      ru: "Не просовывайте руки за ограждение вольера.",
      ro: "Nu introduceți mâinile prin gardul incintei.",
      en: "Do not put your hands through the enclosure fence."
    },
    feedingTime: { ru: "Ежедневно в 12:00", ro: "Zilnic la 12:00", en: "Daily at 12:00" },
    range: { ru: "Лесная зона Евразии — от Скандинавии до Сибири", ro: "Zona forestieră a Eurasiei — din Scandinavia până în Siberia", en: "Forest zones of Eurasia, from Scandinavia to Siberia" },
    mapCoordinates: { x: 22, y: 58 },
    bgGradient: "from-[#B9CBB1]/30 to-[#F6F1E8]/30"
  },
  {
    id: "amur_leopard",
    name: { ru: "Дальневосточный леопард", ro: "Leopardul de Amur", en: "Amur Leopard" },
    latinName: "Panthera pardus orientalis",
    biome: { ru: "Смешанные леса", ro: "Păduri mixte", en: "Mixed Forests" },
    biomeColor: "bg-[#809E70] text-[#F6F1E8]",
    shortFact: {
      ru: "Одна из самых редких крупных кошек в мире.",
      ro: "Una dintre cele mai rare feline mari din lume.",
      en: "One of the rarest big cats in the world."
    },
    description: {
      ru: "Грациозный хищник с яркой шерстью и крупными розетками. Отличается острым зрением, ловкостью и осторожным поведением.",
      ro: "Un prădător grațios, cu blană luminoasă și pete mari. Se remarcă prin vedere bună, agilitate și comportament prudent.",
      en: "A graceful predator with bright fur and large rosettes. It is known for sharp vision, agility and cautious behavior."
    },
    warning: {
      ru: "Редкий вид. Уважайте спокойствие животного и не шумите у вольера.",
      ro: "Specie rară. Respectați liniștea animalului și nu faceți zgomot lângă incintă.",
      en: "A rare species. Respect the animal's calm and avoid noise near the enclosure."
    },
    feedingTime: { ru: "Среда и суббота в 14:00", ro: "Miercuri și sâmbătă la 14:00", en: "Wednesday and Saturday at 14:00" },
    range: { ru: "Приграничные леса России, Китая и Кореи", ro: "Păduri de frontieră din Rusia, China și Coreea", en: "Border forests of Russia, China and Korea" },
    mapCoordinates: { x: 38, y: 50 },
    bgGradient: "from-[#D9CEB4]/30 to-[#E7F0E1]/30"
  },
  {
    id: "brown_bear",
    name: { ru: "Бурый медведь", ro: "Ursul brun", en: "Brown Bear" },
    latinName: "Ursus arctos",
    biome: { ru: "Леса", ro: "Păduri", en: "Forests" },
    biomeColor: "bg-[#5C4D3C] text-[#F6F1E8]",
    shortFact: {
      ru: "Несмотря на массивность, медведь может быстро бегать на коротких дистанциях.",
      ro: "Deși pare masiv, ursul poate alerga rapid pe distanțe scurte.",
      en: "Despite its size, a bear can run fast over short distances."
    },
    description: {
      ru: "Сильный всеядный обитатель лесов. Обладает отличным обонянием и осенью активно накапливает жир перед зимним периодом.",
      ro: "Un locuitor puternic și omnivor al pădurilor. Are un miros excelent și acumulează grăsime toamna înainte de perioada rece.",
      en: "A strong omnivorous forest resident. It has an excellent sense of smell and builds fat reserves before winter."
    },
    warning: {
      ru: "Не бросайте еду в вольер. Это опасно для здоровья медведя.",
      ro: "Nu aruncați mâncare în incintă. Este periculos pentru sănătatea ursului.",
      en: "Do not throw food into the enclosure. It is dangerous for the bear's health."
    },
    feedingTime: { ru: "Ежедневно в 13:00", ro: "Zilnic la 13:00", en: "Daily at 13:00" },
    range: { ru: "Лесные массивы Евразии и Северной Америки", ro: "Zonele forestiere din Eurasia și America de Nord", en: "Forest regions of Eurasia and North America" },
    mapCoordinates: { x: 15, y: 40 },
    bgGradient: "from-[#D1C2B0]/30 to-[#F6F1E8]/30"
  },
  {
    id: "peregrine_falcon",
    name: { ru: "Сапсан", ro: "Șoimul călător", en: "Peregrine Falcon" },
    latinName: "Falco peregrinus",
    biome: { ru: "Открытое небо", ro: "Cer deschis", en: "Open Skies" },
    biomeColor: "bg-[#577080] text-[#F6F1E8]",
    shortFact: {
      ru: "Одна из самых быстрых птиц в мире при пикировании.",
      ro: "Una dintre cele mai rapide păsări din lume în picaj.",
      en: "One of the fastest birds in the world during a dive."
    },
    description: {
      ru: "Благородная хищная птица с обтекаемым телом и острыми крыльями. Специализируется на охоте в воздухе.",
      ro: "O pasăre răpitoare nobilă, cu corp aerodinamic și aripi ascuțite. Este specializată în vânătoarea aeriană.",
      en: "A noble bird of prey with a streamlined body and sharp wings. It specializes in aerial hunting."
    },
    warning: {
      ru: "Не используйте вспышку у авиария. Это пугает птиц.",
      ro: "Nu folosiți blițul lângă volieră. Acesta sperie păsările.",
      en: "Do not use flash near the aviary. It scares the birds."
    },
    feedingTime: { ru: "Ежедневно в 10:30", ro: "Zilnic la 10:30", en: "Daily at 10:30" },
    range: { ru: "Встречается на всех континентах, кроме Антарктиды", ro: "Se găsește pe toate continentele, cu excepția Antarcticii", en: "Found on every continent except Antarctica" },
    mapCoordinates: { x: 75, y: 32 },
    bgGradient: "from-[#CBDAD5]/30 to-[#F6F1E8]/30"
  },
  {
    id: "wolf",
    name: { ru: "Серый волк", ro: "Lupul cenușiu", en: "Gray Wolf" },
    latinName: "Canis lupus",
    biome: { ru: "Степи и леса", ro: "Stepe și păduri", en: "Steppes & Forests" },
    biomeColor: "bg-[#7A8074] text-[#F6F1E8]",
    shortFact: {
      ru: "Живёт в стае и общается с помощью жестов, поз и звуков.",
      ro: "Trăiește în haită și comunică prin gesturi, posturi și sunete.",
      en: "Lives in packs and communicates through gestures, posture and sounds."
    },
    description: {
      ru: "Умный и выносливый хищник. Волки способны проходить большие расстояния и поддерживают сложные социальные связи в стае.",
      ro: "Un prădător inteligent și rezistent. Lupii pot parcurge distanțe mari și au legături sociale complexe în haită.",
      en: "An intelligent and enduring predator. Wolves can travel long distances and maintain complex social bonds in the pack."
    },
    warning: {
      ru: "Не дразните стаю свистом, криком или имитацией воя.",
      ro: "Nu provocați haita prin fluierături, strigăte sau imitarea urletului.",
      en: "Do not provoke the pack by whistling, shouting or imitating howls."
    },
    feedingTime: { ru: "Ежедневно в 15:30", ro: "Zilnic la 15:30", en: "Daily at 15:30" },
    range: { ru: "Широко распространён в Северном полушарии", ro: "Răspândit pe scară largă în emisfera nordică", en: "Widely distributed across the Northern Hemisphere" },
    mapCoordinates: { x: 50, y: 45 },
    bgGradient: "from-[#CFCFC1]/30 to-[#E7F0E1]/30"
  },
  {
    id: "bison",
    name: { ru: "Зубр", ro: "Zimbrul european", en: "European Bison" },
    latinName: "Bison bonasus",
    biome: { ru: "Широколиственные леса", ro: "Păduri de foioase", en: "Broadleaf Forests" },
    biomeColor: "bg-[#4D5940] text-[#F6F1E8]",
    shortFact: {
      ru: "Самое крупное наземное млекопитающее Европы.",
      ro: "Cel mai mare mamifer terestru din Europa.",
      en: "The largest land mammal in Europe."
    },
    description: {
      ru: "Лесной исполин с мощными рогами, горбом и густой шерстью. Питается травой, листьями, побегами и корой.",
      ro: "Un uriaș al pădurii, cu coarne puternice, cocoașă și blană deasă. Se hrănește cu iarbă, frunze, lăstari și scoarță.",
      en: "A forest giant with strong horns, a hump and thick fur. It feeds on grass, leaves, shoots and bark."
    },
    warning: {
      ru: "Не подходите вплотную к ограждению во время кормления.",
      ro: "Nu vă apropiați foarte mult de gard în timpul hrănirii.",
      en: "Keep a safe distance from the fence during feeding."
    },
    feedingTime: { ru: "Ежедневно в 11:30 и 16:30", ro: "Zilnic la 11:30 și 16:30", en: "Daily at 11:30 and 16:30" },
    range: { ru: "Охраняемые широколиственные леса Европы", ro: "Păduri de foioase protejate din Europa", en: "Protected broadleaf forests of Europe" },
    mapCoordinates: { x: 58, y: 65 },
    bgGradient: "from-[#CCD5C8]/30 to-[#F6F1E8]/30"
  },
  {
    id: "snowy_owl",
    name: { ru: "Полярная сова", ro: "Bufnița zăpezilor", en: "Snowy Owl" },
    latinName: "Bubo scandiacus",
    biome: { ru: "Тундра", ro: "Tundră", en: "Tundra" },
    biomeColor: "bg-[#96A0B0] text-[#F6F1E8]",
    shortFact: {
      ru: "Охотится преимущественно днём, что необычно для многих сов.",
      ro: "Vânează mai ales ziua, lucru neobișnuit pentru multe bufnițe.",
      en: "Hunts mostly during the day, unlike many owl species."
    },
    description: {
      ru: "Белая полярная птица с яркими глазами и плотным оперением. Бесшумный полёт помогает ей незаметно приближаться к добыче.",
      ro: "O pasăre polară albă, cu ochi expresivi și penaj dens. Zborul silențios o ajută să se apropie neobservată de pradă.",
      en: "A white polar bird with striking eyes and dense plumage. Silent flight helps it approach prey unnoticed."
    },
    warning: {
      ru: "Не стучите по стеклу и не кричите рядом с вольером.",
      ro: "Nu bateți în geam și nu strigați lângă incintă.",
      en: "Do not tap on glass or shout near the enclosure."
    },
    feedingTime: { ru: "Ежедневно в 10:00", ro: "Zilnic la 10:00", en: "Daily at 10:00" },
    range: { ru: "Тундровые зоны Евразии и Северной Америки", ro: "Zonele de tundră din Eurasia și America de Nord", en: "Tundra regions of Eurasia and North America" },
    mapCoordinates: { x: 80, y: 55 },
    bgGradient: "from-[#DFE5EB]/30 to-[#E7F0E1]/30"
  }
];
