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
  mapCoordinates: { x: number; y: number }; // Percentage coordinates for custom SVG map
  bgGradient: string; // Beautiful soft editorial backgrounds for cards
}

export const animals: Animal[] = [
  {
    id: "tiger",
    name: {
      ru: "Амурский тигр",
      ro: "Tigrul Siberian",
      en: "Amur Tiger"
    },
    latinName: "Panthera tigris altaica",
    biome: {
      ru: "Тайга",
      ro: "Taiga",
      en: "Taiga"
    },
    biomeColor: "bg-[#4F6942] text-[#F6F1E8]",
    shortFact: {
      ru: "Самый крупный и единственный подвид тигра, приспособившийся к жизни в снегах.",
      ro: "Cea mai mare și singura subspecie de tigru adaptată la viața în zăpadă.",
      en: "The largest tiger subspecies and the only one adapted to survive in harsh snow."
    },
    description: {
      ru: "Величественный хищник северных лесов. Имеет густой мех и слой жира на животе, защищающий от ледяного ветра. Обладает уникальным узором полос, который никогда не повторяется у разных особей.",
      ro: "Un prădător maiestuos al pădurilor nordice. Are o blană deasă și un strat de grăsime pe abdomen care îl protejează de vântul înghețat. Modelul dungilor sale este unic pentru fiecare individ.",
      en: "A majestic predator of northern forests. It possesses a thick coat and a fat layer on its belly to shelter from freezing winds. Its stripe pattern is entirely unique to each individual."
    },
    warning: {
      ru: "Соблюдайте тишину. Хищник обладает исключительным слухом.",
      ro: "Păstrați liniștea. Prădătorul are un auz excepțional.",
      en: "Maintain silence. This predator has exceptionally sensitive hearing."
    },
    feedingTime: {
      ru: "Ежедневно в 14:30",
      ro: "Zilnic la 14:30",
      en: "Daily at 14:30"
    },
    range: {
      ru: "Дальний Восток России, бассейны рек Амур и Уссури",
      ro: "Extremul Orient al Rusiei, bazinele râurilor Amur și Ussuri",
      en: "Russian Far East, Amur and Ussuri river basins"
    },
    mapCoordinates: { x: 30, y: 35 },
    bgGradient: "from-[#D5C29D]/30 to-[#E7F0E1]/30"
  },
  {
    id: "red_panda",
    name: {
      ru: "Красная панда",
      ro: "Panda Roșu",
      en: "Red Panda"
    },
    latinName: "Ailurus fulgens",
    biome: {
      ru: "Горные леса",
      ro: "Păduri de Munte",
      en: "Mountain Forests"
    },
    biomeColor: "bg-[#D77A4A] text-[#F6F1E8]",
    shortFact: {
      ru: "Большую часть жизни проводит на деревьях, питаясь преимущественно бамбуком.",
      ro: "Își petrece cea mai mare parte a vieții în copaci, hrănindu-se în principal cu bambus.",
      en: "Spends most of its life in trees, dining almost exclusively on bamboo."
    },
    description: {
      ru: "Небольшое млекопитающее размером чуть крупнее кошки. Огненно-рыжий окрас служит отличной маскировкой среди лишайников и мхов гималайских лесов. Чрезвычайно миролюбивое и ловкое животное.",
      ro: "Un mamifer mic, puțin mai mare decât o pisică domestică. Blana roșcată oferă un camuflaj excelent printre lichenii și mușchii din Himalaya. Un animal extrem de liniștit și agil.",
      en: "A small mammal slightly larger than a house cat. Its rusty red fur provides outstanding camouflage against the lichens and mosses of Himalayan forests. Extremely peaceful and agile."
    },
    warning: {
      ru: "Не шумите у вольера. Панды очень пугливы.",
      ro: "Nu faceți zgomot lângă incintă. Pandele sunt foarte fricoase.",
      en: "Avoid loud noises. Red pandas are easily startled."
    },
    feedingTime: {
      ru: "Каждый день в 11:00 и 16:00",
      ro: "Zilnic la 11:00 și 16:00",
      en: "Daily at 11:00 and 16:00"
    },
    range: {
      ru: "Восточные Гималаи, высокогорные леса Китая и Непала",
      ro: "Himalaya de Est, pădurile muntoase din China și Nepal",
      en: "Eastern Himalayas, high-altitude forests of China and Nepal"
    },
    mapCoordinates: { x: 45, y: 25 },
    bgGradient: "from-[#E6B39A]/30 to-[#F6F1E8]/30"
  },
  {
    id: "snow_leopard",
    name: {
      ru: "Снежный барс",
      ro: "Leopardul Zăpezilor",
      en: "Snow Leopard"
    },
    latinName: "Panthera uncia",
    biome: {
      ru: "Высокогорье",
      ro: "Munți Înalți",
      en: "High Highlands"
    },
    biomeColor: "bg-[#7A8A99] text-[#F6F1E8]",
    shortFact: {
      ru: "Способен совершать прыжки в длину до 15 метров благодаря мощным задним лапам.",
      ro: "Capabil să sară până la 15 metri lungime datorită picioarelor din spate puternice.",
      en: "Capable of leaping up to 15 meters in length using its powerful hind legs."
    },
    description: {
      ru: "Скрытный и грациозный властелин скалистых круч. Широкие лапы действуют как снегоступы, а длинный пушистый хвост помогает балансировать при прыжках и служит теплым пледом во время сна.",
      ro: "Un stăpân discret și grațios al stâncilor abrupte. Labele late acționează ca rachete de zăpadă, iar coada lungă și stufoasă ajută la echilibru și servește drept pătură caldă în timpul somnului.",
      en: "The elusive and graceful master of rocky crags. Its wide paws act as natural snowshoes, and its long, bushy tail aids in balance and acts as a warm blanket during sleep."
    },
    warning: {
      ru: "Не пытайтесь привлечь внимание криком. Животное ценит покой.",
      ro: "Nu încercați să-i atrageți atenția prin strigăte. Animalul prețuiește liniștea.",
      en: "Do not shout to get its attention. It highly values peace."
    },
    feedingTime: {
      ru: "Вторник и пятница в 15:00",
      ro: "Marți și vineri la 15:00",
      en: "Tuesday and Friday at 15:00"
    },
    range: {
      ru: "Горные системы Центральной Азии (Алтай, Гималаи, Памир)",
      ro: "Sisteme muntoase din Asia Centrală (Altai, Himalaya, Pamir)",
      en: "Mountain systems of Central Asia (Altai, Himalayas, Pamirs)"
    },
    mapCoordinates: { x: 62, y: 18 },
    bgGradient: "from-[#C4D0D9]/30 to-[#E7F0E1]/30"
  },
  {
    id: "lynx",
    name: {
      ru: "Евразийская рысь",
      ro: "Râsul Eurasiatic",
      en: "Eurasian Lynx"
    },
    latinName: "Lynx lynx",
    biome: {
      ru: "Хвойные леса",
      ro: "Păduri Conifere",
      en: "Coniferous Forests"
    },
    biomeColor: "bg-[#5E6B5C] text-[#F6F1E8]",
    shortFact: {
      ru: "Знаменитые кисточки на ушах работают как высокочувствительные антенны-локаторы.",
      ro: "Celebrele ciucuri de pe urechi funcționează ca antene receptoare foarte sensibile.",
      en: "The famous ear tufts act as highly sensitive hearing antennas to locate prey."
    },
    description: {
      ru: "Крупная лесная кошка с характерным коротким хвостом и плотным телосложением. Отлично лазает по деревьям и скалам, бесшумно подкрадываясь к добыче среди лесных завалов.",
      ro: "O pisică de pădure mare, cu o coadă scurtă caracteristică și o constituție robustă. Se cațără excelent în copaci și stânci, apropiindu-se silențios de pradă.",
      en: "A large forest cat with a distinctive short tail and robust build. It is an excellent climber, stalking prey silently through dense woodlands and rocky slopes."
    },
    warning: {
      ru: "Не просовывайте руки за ограждение вольера.",
      ro: "Nu introduceți mâinile prin gardul incintei.",
      en: "Do not put your hands through the protective fencing."
    },
    feedingTime: {
      ru: "Ежедневно в 12:00",
      ro: "Zilnic la 12:00",
      en: "Daily at 12:00"
    },
    range: {
      ru: "Лесная зона Евразии — от Скандинавии до Сибири",
      ro: "Zona forestieră a Eurasiei — de la Scandinavia până în Siberia",
      en: "Forest zones of Eurasia — from Scandinavia to Siberia"
    },
    mapCoordinates: { x: 22, y: 58 },
    bgGradient: "from-[#B9CBB1]/30 to-[#F6F1E8]/30"
  },
  {
    id: "amur_leopard",
    name: {
      ru: "Дальневосточный леопард",
      ro: "Leopardul de Amur",
      en: "Amur Leopard"
    },
    latinName: "Panthera pardus orientalis",
    biome: {
      ru: "Смешанные леса",
      ro: "Păduri Mixte",
      en: "Mixed Forests"
    },
    biomeColor: "bg-[#809E70] text-[#F6F1E8]",
    shortFact: {
      ru: "Самая редкая крупная кошка на планете — в дикой природе осталось чуть более 120 особей.",
      ro: "Cea mai rară pisică mare de pe planetă — au rămas doar puțin peste 120 de indivizi în sălbăticie.",
      en: "The rarest big cat on Earth — with just over 120 individuals remaining in the wild."
    },
    description: {
      ru: "Грациозный и невероятно красивый хищник с ярко-рыжей шерстью и крупными розетками. Обладает исключительным зрением, способностью прыгать на высоту до 3 метров и затаскивать добычу на деревья.",
      ro: "Un prădător grațios și incredibil de frumos, cu blană portocalie strălucitoare și pete mari. Are o vedere excepțională și poate trage prada în copaci.",
      en: "A graceful and beautiful predator with bright ochre fur and large rosettes. It possesses brilliant vision, jumps up to 3 meters high, and drags prey up into trees."
    },
    warning: {
      ru: "Редчайший вид. Проявляйте максимальное уважение к уединению зверя.",
      ro: "Specie extrem de rară. Respectați intimitatea și liniștea felinei.",
      en: "Critically endangered. Respect the privacy and serenity of this animal."
    },
    feedingTime: {
      ru: "Среда и суббота в 14:00",
      ro: "Miercuri și sâmbătă la 14:00",
      en: "Wednesday and Saturday at 14:00"
    },
    range: {
      ru: "Граница России, Китая и Северной Кореи (Приморский край)",
      ro: "Granița dintre Rusia, China și Coreea de Nord (regiunea Primorsky)",
      en: "Borders of Russia, China, and North Korea (Primorsky region)"
    },
    mapCoordinates: { x: 38, y: 50 },
    bgGradient: "from-[#D9CEB4]/30 to-[#E7F0E1]/30"
  },
  {
    id: "brown_bear",
    name: {
      ru: "Бурый медведь",
      ro: "Ursul Brun",
      en: "Brown Bear"
    },
    latinName: "Ursus arctos",
    biome: {
      ru: "Леса",
      ro: "Păduri",
      en: "Forests"
    },
    biomeColor: "bg-[#5C4D3C] text-[#F6F1E8]",
    shortFact: {
      ru: "Несмотря на кажущуюся неуклюжесть, развивает скорость бега до 50 км/ч.",
      ro: "În ciuda aparentei stângăcii, poate atinge viteze de alergare de până la 50 km/h.",
      en: "Despite its bulky look, it can reach running speeds of up to 50 km/h."
    },
    description: {
      ru: "Сильный и всеядный великан тайги. Обладает превосходным обонянием — чувствует запахи за километры. Осенью нагуливает жир перед долгой зимней спячкой в берлоге.",
      ro: "Un uriaș puternic și omnivor al taigalei. Are un simț excelent al mirosului. Toamna acumulează grăsime înainte de hibernarea lungă de iarnă.",
      en: "A powerful, omnivorous giant of the evergreen forest. It has an exceptional sense of smell. In autumn, it bulks up to survive a long winter dormancy."
    },
    warning: {
      ru: "Категорически запрещено бросать пищу в вольер. Это вредит здоровью медведя!",
      ro: "Este strict interzis să aruncați hrană în incintă. Acest lucru dăunează sănătății ursului!",
      en: "Strictly forbidden to throw food into the enclosure. Human food ruins the bear's health!"
    },
    feedingTime: {
      ru: "Ежедневно в 13:00",
      ro: "Zilnic la 13:00",
      en: "Daily at 13:00"
    },
    range: {
      ru: "Лесные массивы Евразии и Северной Америки",
      ro: "Zonele forestiere din Eurasia și America de Nord",
      en: "Forest regions of Eurasia and North America"
    },
    mapCoordinates: { x: 15, y: 40 },
    bgGradient: "from-[#D1C2B0]/30 to-[#F6F1E8]/30"
  },
  {
    id: "peregrine_falcon",
    name: {
      ru: "Сапсан",
      ro: "Șoimul Călător",
      en: "Peregrine Falcon"
    },
    latinName: "Falco peregrinus",
    biome: {
      ru: "Воздушный океан",
      ro: "Cer Deschis",
      en: "Open Skies"
    },
    biomeColor: "bg-[#577080] text-[#F6F1E8]",
    shortFact: {
      ru: "Самое быстрое живое существо на планете — развивает скорость свыше 320 км/ч при пикировании.",
      ro: "Cel mai rapid animal de pe planetă — depășește 320 km/h în timpul picajului.",
      en: "The fastest living creature on Earth — reaching speeds over 320 km/h in high-speed dives."
    },
    description: {
      ru: "Благородный хищник с идеально обтекаемым телом и острыми серповидными крыльями. Специализируется на воздушной охоте. Его невероятно острое зрение способно заметить добычу с высоты более километра.",
      ro: "Un prădător nobil cu un corp aerodinamic și aripi ascuțite în formă de seceră. Specializat în vânătoarea aeriană. Vederea sa incredibilă poate detecta prada de la peste un kilometru.",
      en: "A noble aerial predator with an aerodynamic body and sharp sickle-shaped wings. Specialized in aerial hunting, its acute vision can spot prey from more than a kilometer up."
    },
    warning: {
      ru: "Не используйте фотовспышку у авиария. Это слепит птиц.",
      ro: "Nu folosiți blitzul aparatului foto. Acest lucru orbește păsările.",
      en: "Do not use camera flash. It temporarily blinds the birds."
    },
    feedingTime: {
      ru: "Ежедневно в 10:30",
      ro: "Zilnic la 10:30",
      en: "Daily at 10:30"
    },
    range: {
      ru: "Встречается на всех континентах, кроме Антарктиды",
      ro: "Se găsește pe toate continentele, cu excepția Antarcticii",
      en: "Found across all continents except Antarctica"
    },
    mapCoordinates: { x: 75, y: 32 },
    bgGradient: "from-[#CBDAD5]/30 to-[#F6F1E8]/30"
  },
  {
    id: "wolf",
    name: {
      ru: "Серый волк",
      ro: "Lupul Cenușiu",
      en: "Gray Wolf"
    },
    latinName: "Canis lupus",
    biome: {
      ru: "Степи и леса",
      ro: "Stepe și Păduri",
      en: "Steppes & Forests"
    },
    biomeColor: "bg-[#7A8074] text-[#F6F1E8]",
    shortFact: {
      ru: "Обладает сложной социальной структурой, вожаки руководят стаей с помощью жестов и воя.",
      ro: "Are o structură socială complexă, liderii conduc haita prin gesturi și urlete.",
      en: "Possesses a complex social structure; alpha leaders guide the pack via gestures and howling."
    },
    description: {
      ru: "Умный и выносливый хищник, важнейший санитар леса. Способен без отдыха преодолевать десятки километров в поисках следов. Коммуникация в стае включает богатый диапазон звуков и выразительной мимики.",
      ro: "Un prădător inteligent și rezistent, sanitarul pădurii. Capabil să parcurgă zeci de kilometri fără odihnă. Comunicarea în haită include o gamă largă de sunete și expresii faciale.",
      en: "An intelligent, high-endurance predator and crucial keystone species of the forest. Capable of traveling dozens of kilometers without rest. Pack communications include rich vocalizations and facial cues."
    },
    warning: {
      ru: "Не пытайтесь дразнить стаю свистом или криками.",
      ro: "Nu încercați să provocați haita prin fluierături sau strigăte.",
      en: "Do not whistle or howl to mock the pack."
    },
    feedingTime: {
      ru: "Ежедневно в 15:30",
      ro: "Zilnic la 15:30",
      en: "Daily at 15:30"
    },
    range: {
      ru: "Широко распространен в Северном полушарии",
      ro: "Răspândit pe scară largă în emisfera nordică",
      en: "Widely distributed throughout the Northern Hemisphere"
    },
    mapCoordinates: { x: 50, y: 45 },
    bgGradient: "from-[#CFCFC1]/30 to-[#E7F0E1]/30"
  },
  {
    id: "bison",
    name: {
      ru: "Зубр",
      ro: "Zubrul (Zimbru)",
      en: "European Bison"
    },
    latinName: "Bison bonasus",
    biome: {
      ru: "Широколиственные леса",
      ro: "Păduri de Foioase",
      en: "Broadleaf Forests"
    },
    biomeColor: "bg-[#4D5940] text-[#F6F1E8]",
    shortFact: {
      ru: "Самое тяжелое и крупное наземное млекопитающее Европы, спасенное от полного вымирания.",
      ro: "Cel mai greu și mai mare mamifer terestru din Europa, salvat de la dispariția completă.",
      en: "The heaviest and largest land mammal in Europe, successfully rescued from near extinction."
    },
    description: {
      ru: "Лесной исполин древней Европы. Имеет могучие рога, выразительный горб и густую бороду. Питается травой, листьями, побегами и корой деревьев. Ведет спокойный и неторопливый образ жизни.",
      ro: "Un gigant forestier al Europei antice. Are coarne puternice, o cocoașă proeminentă și o barbă deasă. Se hrănește cu iarbă, frunze, lăstari și scoarță de copac.",
      en: "The forest titan of ancient Europe. It sports massive horns, a powerful hump, and a thick beard. It feeds on grasses, foliage, twigs, and bark, leading a serene, deliberate lifestyle."
    },
    warning: {
      ru: "Не подходите вплотную к ограде при кормлении зверя.",
      ro: "Nu vă apropiați foarte mult de gard în timpul hrănirii.",
      en: "Keep a safe distance from the barrier during feeding demonstrations."
    },
    feedingTime: {
      ru: "Ежедневно в 11:30 и 16:30",
      ro: "Zilnic la 11:30 și 16:30",
      en: "Daily at 11:30 and 16:30"
    },
    range: {
      ru: "Заповедные широколиственные леса Польши, Беларуси, России и Румынии",
      ro: "Pădurile de foioase protejate din Polonia, Belarus, Rusia și România",
      en: "Protected broadleaf forest sanctuaries of Poland, Belarus, Russia, and Romania"
    },
    mapCoordinates: { x: 58, y: 65 },
    bgGradient: "from-[#CCD5C8]/30 to-[#F6F1E8]/30"
  },
  {
    id: "snowy_owl",
    name: {
      ru: "Полярная сова",
      ro: "Bufnița Zăpezilor",
      en: "Snowy Owl"
    },
    latinName: "Bubo scandiacus",
    biome: {
      ru: "Тундра",
      ro: "Tundră",
      en: "Tundra"
    },
    biomeColor: "bg-[#96A0B0] text-[#F6F1E8]",
    shortFact: {
      ru: "Охотится преимущественно днем в отличие от большинства других видов сов.",
      ro: "Vânează în principal în timpul zilei, spre deosebire de majoritatea celorlalte bufnițe.",
      en: "Hunts primarily during the day, unlike most other nocturnal owl species."
    },
    description: {
      ru: "Белоснежная полярная птица с пронзительными желтыми глазами. Ее плотное оперение надежно сохраняет тепло при экстремальных морозах тундры, а бесшумный полет позволяет застать добычу врасплох.",
      ro: "O pasăre polară albă ca zăpada, cu ochi galbeni pătrunzători. Penajul său dens reține căldura chiar și în frigul extrem din tundră, permițându-i un zbor absolut silențios.",
      en: "A snow-white polar bird with piercing yellow eyes. Its exceptionally dense plumage traps body heat in extreme arctic cold, while its silent flight lets it catch prey completely off-guard."
    },
    warning: {
      ru: "Не стучите по стеклу вольера и не кричите.",
      ro: "Nu bateți în geamul incintei și nu țipați.",
      en: "Do not tap on the glass or make loud vocal noises."
    },
    feedingTime: {
      ru: "Ежедневно в 10:00",
      ro: "Zilnic la 10:00",
      en: "Daily at 10:00"
    },
    range: {
      ru: "Круглополярные тундровые зоны Евразии и Северной Америки",
      ro: "Zonele de tundră circumpolară din Eurasia și America de Nord",
      en: "Circumpolar arctic tundra regions of Eurasia and North America"
    },
    mapCoordinates: { x: 80, y: 55 },
    bgGradient: "from-[#DFE5EB]/30 to-[#E7F0E1]/30"
  }
];
