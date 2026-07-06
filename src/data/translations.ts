export interface TranslationSet {
  header: {
    logo: string;
    navHome: string;
    navMap: string;
    navAnimals: string;
    navNews: string;
    navFaq: string;
    ctaBuyTicket: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    hoursLabel: string;
    hoursValue: string;
    addressLabel: string;
    addressValue: string;
    priceLabel: string;
    priceValue: string;
  };
  quickInfo: {
    sectionTitle: string;
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    card3Title: string;
    card3Text: string;
    card4Title: string;
    card4Text: string;
  };
  mapSection: {
    title: string;
    subtitle: string;
    legendAnimal: string;
    legendEntry: string;
    legendCafe: string;
    legendKids: string;
    legendFirstAid: string;
    clickMarkerTip: string;
    resetZoom: string;
    viewInDetail: string;
    popupClose: string;
    interactiveGuideTip: string;
  };
  featuredAnimals: {
    title: string;
    subtitle: string;
    latNameLabel: string;
    biomeLabel: string;
    ctaDetail: string;
    detailsTitle: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
    items: Array<{
      date: string;
      tag: string;
      title: string;
      desc: string;
    }>;
  };
  trust: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    desc: string;
    colNavTitle: string;
    colContactTitle: string;
    colSupportTitle: string;
    supportText: string;
    copyright: string;
    allRightsReserved: string;
  };
  qrCard: {
    close: string;
    warningTitle: string;
    feedingTimeTitle: string;
    rangeTitle: string;
    scannedTip: string;
    tabAbout: string;
    tabHabitat: string;
  };
}

export const translations: Record<"ru" | "ro" | "en", TranslationSet> = {
  ru: {
    header: {
      logo: "Городской Зоопарк",
      navHome: "Главная",
      navMap: "Карта",
      navAnimals: "Животные",
      navNews: "События",
      navFaq: "Инфо",
      ctaBuyTicket: "Купить билет"
    },
    hero: {
      title: "Природа в самом сердце города",
      subtitle: "Современный природный парк и научный центр. Узнайте больше о дикой фауне через интерактивный гид и живое общение.",
      ctaPrimary: "Купить билет",
      ctaSecondary: "Спланировать визит",
      hoursLabel: "Часы работы",
      hoursValue: "[09:00 – 19:00]",
      addressLabel: "Адрес",
      addressValue: "[ул. Лесная, 45]",
      priceLabel: "Стоимость билета",
      priceValue: "[от 350 MDL / 1500 RSD]"
    },
    quickInfo: {
      sectionTitle: "Практическая информация",
      card1Title: "Быстрый вход по QR",
      card1Text: "Покупайте билет онлайн на сайте и проходите без очереди через турникеты с бесконтактным сканером.",
      card2Title: "Аудиогид по парку",
      card2Text: "Отсканируйте QR-код возле любого вольера, чтобы открыть карточку животного и запустить голосовое сопровождение.",
      card3Title: "Природный ботанический сад",
      card3Text: "Более 400 видов редких хвойных и лиственных растений поддерживают естественный микроклимат для наших обитателей.",
      card4Title: "Семейный комфорт",
      card4Text: "Удобные зоны отдыха, детские эко-площадки, комнаты матери и ребенка расположены на всей территории."
    },
    mapSection: {
      title: "Интерактивная карта парка",
      subtitle: "Используйте кастомную схему для навигации. Кликните по маркеру, чтобы узнать подробности о жителе вольера или инфраструктурном объекте.",
      legendAnimal: "Животное",
      legendEntry: "Вход / Выход",
      legendCafe: "Кафе / Еда",
      legendKids: "Детская зона",
      legendFirstAid: "Медпункт",
      clickMarkerTip: "Выберите маркер на карте, чтобы открыть интерактивную мини-карточку.",
      resetZoom: "Сбросить масштаб",
      viewInDetail: "Подробнее",
      popupClose: "Закрыть",
      interactiveGuideTip: "Используйте карту прямо на телефоне во время прогулки."
    },
    featuredAnimals: {
      title: "Наши обитатели",
      subtitle: "Познакомьтесь ближе с редкими видами. Каждая карточка — это документальное свидетельство уникальности дикой природы.",
      latNameLabel: "Латинское название",
      biomeLabel: "Биом / Среда обитания",
      ctaDetail: "Смотреть подробности",
      detailsTitle: "Карточка животного"
    },
    news: {
      title: "События и объявления",
      subtitle: "Свежие новости из жизни парка, расписание лекций и специальные эко-акции.",
      readMore: "Подробнее",
      items: [
        {
          date: "08 ИЮЛЯ 2026",
          tag: "Лекторий",
          title: "Вечерние экскурсии с зоологом: тайны ночных хищников",
          desc: "Уникальная возможность понаблюдать за поведением амурских тигров и снежных барсов в сумерках, когда они наиболее активны."
        },
        {
          date: "12 ИЮЛЯ 2026",
          tag: "Событие",
          title: "День защиты диких кошек: детские квесты и лекции",
          desc: "Экологический праздник с познавательными станциями на территории ботанического сада. Вход для детей до 12 лет бесплатный."
        },
        {
          date: "15 ИЮЛЯ 2026",
          tag: "Наука",
          title: "Программа восстановления популяции дальневосточного леопарда",
          desc: "Наши специалисты подготовили отчёт об успешной адаптации молодых особей. Читайте подробности научной работы."
        }
      ]
    },
    trust: {
      title: "Забота о биоразнообразии",
      subtitle: "Мы не просто демонстрируем дикую природу, мы сохраняем её.",
      desc1: "Наш зоопарк спроектирован по принципу максимального воссоздания естественных экосистем. Мы отказались от тесных решёток в пользу просторных вольеров с ботаническим зонированием, ландшафтным рельефом и водоёмами.",
      desc2: "Все животные получают индивидуальный рацион питания, ветеринарное обслуживание высшего уровня и бережное отношение. Мы активно участвуем в международных программах по сохранению редких и исчезающих видов.",
      stat1Number: "45",
      stat1Label: "гектаров природного ландшафта",
      stat2Number: "120+",
      stat2Label: "видов редких животных",
      stat3Number: "850 тыс",
      stat3Label: "посетителей ежегодно"
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что нужно знать перед тем, как отправиться на прогулку.",
      items: [
        {
          q: "Можно ли кормить животных самостоятельно?",
          a: "Категорически запрещено. У каждого животного есть строго сбалансированный рацион, составленный зоологами. Человеческая пища (особенно хлеб, чипсы и сладости) наносит непоправимый вред их пищеварению и может привести к летальному исходу. Для желающих принять участие проводятся открытые показательные кормления под присмотром специалистов."
        },
        {
          q: "Как работают билеты, купленные онлайн?",
          a: "Электронный билет содержит индивидуальный QR-код. Нет необходимости распечатывать его — просто откройте PDF-файл на экране вашего смартфона и приложите к сканеру на главном турникете. Билет действителен в течение всего выбранного дня."
        },
        {
          q: "Оборудован ли зоопарк для маломобильных граждан?",
          a: "Да, вся территория спроектирована с учётом безбарьерной среды. Все дорожки имеют плавный наклон без резких перепадов высоты, у вольеров и смотровых площадок предусмотрены специальные пандусы. На кассах и информационных стойках вы можете бесплатно взять в аренду механическую кресло-коляску."
        },
        {
          q: "Где можно припарковаться и сколько это стоит?",
          a: "Рядом с главным входом расположена круглосуточная охраняемая муниципальная парковка на [350 мест]. Стоимость парковки составляет [50 MDL / 200 RSD] в час. Для людей с инвалидностью парковочные места предоставляются бесплатно при наличии соответствующего знака на стекле."
        }
      ]
    },
    footer: {
      desc: "Современный ботанико-зоологический комплекс, призванный сохранять уникальные виды дикой природы и формировать бережное отношение к экологии.",
      colNavTitle: "Навигация",
      colContactTitle: "Контакты",
      colSupportTitle: "Поддержка",
      supportText: "Если у вас возникли вопросы или предложения, пишите нам на почту.",
      copyright: "© 2026 Городской Зоопарк.",
      allRightsReserved: "Все права защищены."
    },
    qrCard: {
      close: "Закрыть",
      warningTitle: "Правила безопасности",
      feedingTimeTitle: "Показательное кормление",
      rangeTitle: "Регион обитания",
      scannedTip: "Вы сканировали QR-код вольера. Сохраните эту карточку на время визита.",
      tabAbout: "Описание",
      tabHabitat: "Ареал и питание"
    }
  },
  ro: {
    header: {
      logo: "Grădina Zoologică",
      navHome: "Acasă",
      navMap: "Hartă",
      navAnimals: "Animale",
      navNews: "Evenimente",
      navFaq: "Info",
      ctaBuyTicket: "Cumpără bilet"
    },
    hero: {
      title: "Natura în inima orașului",
      subtitle: "Un parc natural modern și centru științific. Aflați mai multe despre fauna sălbatică prin ghidul nostru interactiv.",
      ctaPrimary: "Cumpără bilet",
      ctaSecondary: "Planifică vizita",
      hoursLabel: "Orele de lucru",
      hoursValue: "[09:00 – 19:00]",
      addressLabel: "Adresa",
      addressValue: "[str. Pădurii, 45]",
      priceLabel: "Prețul biletului",
      priceValue: "[de la 350 MDL / 1500 RSD]"
    },
    quickInfo: {
      sectionTitle: "Informații practice",
      card1Title: "Acces rapid cu QR",
      card1Text: "Cumpărați biletul online pe site și treceți fără rând la turnichete cu scaner contactless.",
      card2Title: "Audioghid în parc",
      card2Text: "Scanați codul QR de lângă orice incintă pentru a deschide fișa animalului și a porni ghidul audio.",
      card3Title: "Grădină botanică naturală",
      card3Text: "Peste 400 de specii de plante rare mențin un microclimat natural optim pentru locuitorii noștri.",
      card4Title: "Confort pentru familie",
      card4Text: "Zone de recreere confortabile, terenuri de joacă ecologice, camere pentru mamă și copil pe tot teritoriul."
    },
    mapSection: {
      title: "Harta interactivă a parcului",
      subtitle: "Utilizați harta personalizată pentru navigare. Faceți clic pe un marker pentru a afla detalii despre animal sau facilități.",
      legendAnimal: "Animal",
      legendEntry: "Intrare / Ieșire",
      legendCafe: "Cafenea / Mâncare",
      legendKids: "Zonă Copii",
      legendFirstAid: "Punct Medical",
      clickMarkerTip: "Selectați un marker de pe hartă pentru a deschide o mini-fișă interactivă.",
      resetZoom: "Resetează zoom",
      viewInDetail: "Detalii",
      popupClose: "Închide",
      interactiveGuideTip: "Folosiți harta direct pe telefon în timpul plimbării."
    },
    featuredAnimals: {
      title: "Locuitorii noștri",
      subtitle: "Cunoașteți mai îndeaproape speciile rare. Fiecare fișă este o dovadă documentară a unicității faunei sălbatice.",
      latNameLabel: "Denumirea latină",
      biomeLabel: "Biom / Habitat",
      ctaDetail: "Vezi detalii",
      detailsTitle: "Fișa animalului"
    },
    news: {
      title: "Evenimente și anunțuri",
      subtitle: "Noutăți din viața parcului, programul prelegerilor și campanii ecologice speciale.",
      readMore: "Citește mai mult",
      items: [
        {
          date: "08 IULIE 2026",
          tag: "Prelegeri",
          title: "Tururi de seară cu zoologul: secretele prădătorilor nocturni",
          desc: "O oportunitate unică de a observa comportamentul tigrilor siberieni și al leoparzilor zăpezilor la amurg, când sunt cei mai activi."
        },
        {
          date: "12 IULIE 2026",
          tag: "Eveniment",
          title: "Ziua felinelor sălbatice: quest-uri și ateliere",
          desc: "Sărbătoare ecologică în grădina botanică cu stații educative. Intrarea liberă pentru copiii sub 12 ani."
        },
        {
          date: "15 IULIE 2026",
          tag: "Știință",
          title: "Programul de refacere a populației leopardului de Amur",
          desc: "Specialiștii noștri au pregătit un raport despre adaptarea reușită a tinerelor exemplare în habitatele protejate."
        }
      ]
    },
    trust: {
      title: "Protejarea biodiversității",
      subtitle: "Nu doar prezentăm natura sălbatică, o salvăm.",
      desc1: "Grădina noastră este proiectată pentru a recrea la maximum ecosistemele naturale. Am renunțat la cuștile înguste în favoarea unor incinte spațioase cu zonare botanică și relief natural.",
      desc2: "Toate animalele beneficiază de o dietă individuală, îngrijire medicală de nivel înalt și atitudine respectuoasă. Participăm activ în programe internaționale de conservare.",
      stat1Number: "45",
      stat1Label: "hectare de peisaj natural",
      stat2Number: "120+",
      stat2Label: "specii de animale rare",
      stat3Number: "850 mii",
      stat3Label: "vizitatori anual"
    },
    faq: {
      title: "Întrebări frecvente",
      subtitle: "Tot ce trebuie să știți înainte de a porni la plimbare.",
      items: [
        {
          q: "Este permisă hrănirea animalelor de către vizitatori?",
          a: "Este strict interzis. Fiecare animal are o dietă echilibrată elaborată de zoologi. Hrana umană le dăunează grav digestia și poate duce la deces. Pentru cei interesați, organizăm hrăniri demonstrative ghidate de specialiști."
        },
        {
          q: "Cum funcționează biletele cumpărate online?",
          a: "Biletul electronic conține un cod QR unic. Nu este nevoie să-l imprimați — doar deschideți fișierul PDF pe ecranul telefonului și aplicați-l la scanerul de la turnichet. Biletul este valabil pe parcursul întregii zile selectate."
        },
        {
          q: "Este grădina zoologică accesibilă persoanelor cu dizabilități?",
          a: "Da, întregul teritoriu este proiectat fără bariere. Aleile au pante line fără denivelări bruște, iar la incinte sunt prevăzute rampe speciale. La info-desk puteți împrumuta gratuit un scaun cu rotile manual."
        },
        {
          q: "Unde pot parca și cât costă?",
          a: "Lângă intrarea principală se află o parcare municipală păzită non-stop de [350 locuri]. Prețul este de [50 MDL / 200 RSD] pe oră. Persoanele cu dizabilități beneficiază de parcare gratuită."
        }
      ]
    },
    footer: {
      desc: "Un complex modern botanic și zoologic, dedicat conservării speciilor rare de faună sălbatică și educării respectului față de ecologie.",
      colNavTitle: "Navigare",
      colContactTitle: "Contacte",
      colSupportTitle: "Suport",
      supportText: "Dacă aveți întrebări sau sugestii, scrieți-ne pe adresa de e-mail.",
      copyright: "© 2026 Grădina Zoologică.",
      allRightsReserved: "Toate drepturile rezervate."
    },
    qrCard: {
      close: "Închide",
      warningTitle: "Reguli de securitate",
      feedingTimeTitle: "Hrănire demonstrativă",
      rangeTitle: "Regiunea de origine",
      scannedTip: "Ați scanat codul QR al incintei. Salvați această fișă pe parcursul vizitei.",
      tabAbout: "Descriere",
      tabHabitat: "Habitat și dietă"
    }
  },
  en: {
    header: {
      logo: "City Zoo",
      navHome: "Home",
      navMap: "Map",
      navAnimals: "Animals",
      navNews: "Events",
      navFaq: "Info",
      ctaBuyTicket: "Buy Ticket"
    },
    hero: {
      title: "Nature in the Heart of the City",
      subtitle: "A modern natural sanctuary and botanical center. Discover wild fauna through our interactive guide and pristine enclosures.",
      ctaPrimary: "Buy Ticket",
      ctaSecondary: "Plan Your Visit",
      hoursLabel: "Opening Hours",
      hoursValue: "[09:00 – 19:00]",
      addressLabel: "Address",
      addressValue: "[45 Lesnaya St.]",
      priceLabel: "Ticket Price",
      priceValue: "[from 350 MDL / 1500 RSD]"
    },
    quickInfo: {
      sectionTitle: "Practical Information",
      card1Title: "Quick QR Entry",
      card1Text: "Purchase tickets online and bypass the queues at the turnstiles using our contactless scanners.",
      card2Title: "Interactive Audio Guide",
      card2Text: "Scan the QR code near any enclosure to instantly open the animal's profile and trigger the audio narration.",
      card3Title: "Lush Botanical Garden",
      card3Text: "Over 400 species of rare trees and flora maintain a natural microclimate tailored for our resident species.",
      card4Title: "Family Comfort",
      card4Text: "Generous rest spots, eco-friendly play areas, and nursing rooms are conveniently situated throughout the grounds."
    },
    mapSection: {
      title: "Interactive Park Map",
      subtitle: "Navigate the sanctuary using our custom map. Click any marker to view localized context about animals or infrastructure.",
      legendAnimal: "Animal",
      legendEntry: "Entry / Exit",
      legendCafe: "Cafe / Food",
      legendKids: "Kids Area",
      legendFirstAid: "First Aid",
      clickMarkerTip: "Select a marker on the map to trigger the interactive informational mini-card.",
      resetZoom: "Reset Scale",
      viewInDetail: "View Details",
      popupClose: "Close",
      interactiveGuideTip: "Keep this interactive map active on your mobile device as you explore."
    },
    featuredAnimals: {
      title: "Primal Encounters",
      subtitle: "Encounter magnificent species in beautifully tailored biomes. Each card is an authentic editorial window into their wild lives.",
      latNameLabel: "Latin Name",
      biomeLabel: "Biome & Habitat",
      ctaDetail: "View Details",
      detailsTitle: "Animal Profile"
    },
    news: {
      title: "Sanctuary Logs & Events",
      subtitle: "Catch latest announcements, evening zoo lectures, and interactive wildlife workshops.",
      readMore: "Read More",
      items: [
        {
          date: "08 JULY 2026",
          tag: "Lectures",
          title: "Twilight Walks with Zoologists: Secrets of Night Predators",
          desc: "A rare window into the nocturnal behaviors of our Siberian Tigers and Snow Leopards during dusk, their peak hour of activity."
        },
        {
          date: "12 JULY 2026",
          tag: "Sanctuary",
          title: "Wild Cat Protection Day: Adventure Quests & Activities",
          desc: "Interactive educational events spread throughout the botanical garden. Admission is entirely free for children under 12."
        },
        {
          date: "15 JULY 2026",
          tag: "Science",
          title: "Amur Leopard Population Recovery Milestones",
          desc: "Our veterinary and research teams published a comprehensive report documenting the stellar adaptation of younger leopards."
        }
      ]
    },
    trust: {
      title: "Pioneering Biodiversity",
      subtitle: "We don't merely display wildlife; we actively preserve it.",
      desc1: "Our sanctuary is engineered from the ground up to reconstruct organic ecosystems. We replaced metal bars with expansive, barrier-free habitats integrated with botanical zoning, rich landscape geology, and fresh watercourses.",
      desc2: "All resident species receive fully customized dietary care, elite-tier veterinary attention, and respectful preservation. We take a leading role in global breeding and survival programs for endangered species.",
      stat1Number: "45",
      stat1Label: "hectares of rich nature reserve",
      stat2Number: "120+",
      stat2Label: "rare resident species",
      stat3Number: "850k",
      stat3Label: "annual visitors supported"
    },
    faq: {
      title: "Frequently Answered Questions",
      subtitle: "Essential details to keep in mind prior to arriving at the gates.",
      items: [
        {
          q: "Are visitors permitted to feed the animals?",
          a: "Strictly forbidden. Each species receives a precise, nutritionally rich diet curated by our team of zoologists. Human snacks (such as bread, fries, or sweets) cause severe digestive distress and can prove fatal. Guided open feeding demonstrations are held daily under direct professional supervision."
        },
        {
          q: "How do online electronic tickets work?",
          a: "Each online ticket is embedded with a unique QR code. There is no requirement to print it — simply display the PDF barcode on your smartphone at the main entrance scanner. Tickets are fully valid for the entire duration of the selected calendar day."
        },
        {
          q: "Is the sanctuary fully accessible for guests with limited mobility?",
          a: "Absolutely. The entire park grounds are optimized for barrier-free movement. Pathways are sloped gently without abrupt steps, and elevated view platforms include safety ramps. Manual wheelchairs are available to rent free of charge at the main information counters."
        },
        {
          q: "Where can I park and what are the fees?",
          a: "A 24-hour guarded municipal parking lot with [350 spaces] is located adjacent to the main gates. Rates are [50 MDL / 200 RSD] per hour. Dedicated spaces for visitors with disabilities are free of charge when a valid tag is displayed."
        }
      ]
    },
    footer: {
      desc: "A progressive botanical and zoological sanctuary dedicated to protecting vulnerable wild species and cultivating a profound respect for our natural environment.",
      colNavTitle: "Navigation",
      colContactTitle: "Contacts",
      colSupportTitle: "Support Service",
      supportText: "Should you have queries or structural proposals, reach out to our team via email.",
      copyright: "© 2026 City Zoo Sanctuary.",
      allRightsReserved: "All rights reserved."
    },
    qrCard: {
      close: "Close",
      warningTitle: "Safety Regulations",
      feedingTimeTitle: "Feeding Demonstration",
      rangeTitle: "Origin Habitat",
      scannedTip: "Enclosure QR Code successfully scanned. Keep this card handy during your visit.",
      tabAbout: "About Species",
      tabHabitat: "Range & Feeding"
    }
  }
};
