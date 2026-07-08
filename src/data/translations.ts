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
      logo: "Zoo",
      navHome: "Главная",
      navMap: "Карта",
      navAnimals: "Животные",
      navNews: "События",
      navFaq: "Инфо",
      ctaBuyTicket: "Купить билет"
    },
    hero: {
      title: "Природа в самом сердце города",
      subtitle: "Zoo в Кишинёве — живой ботанический маршрут, где крупные животные, прогулочные зоны и практичная карта собраны в одном visitor-guide.",
      ctaPrimary: "Купить билет",
      ctaSecondary: "Спланировать визит",
      hoursLabel: "Часы работы",
      hoursValue: "Вт–Вс 09:00–20:00",
      addressLabel: "Адрес",
      addressValue: "bd. Dacia 50/7, Chișinău",
      priceLabel: "Билеты",
      priceValue: "от 5 MDL"
    },
    quickInfo: {
      sectionTitle: "Практично перед прогулкой",
      card1Title: "Билеты без суеты",
      card1Text: "Оставьте заявку на билет заранее и начните визит с главного входа Zoo без лишней навигации.",
      card2Title: "Карта под рукой",
      card2Text: "Откройте схему Zoo, чтобы найти животных, вход, кафе, детскую зону и медпункт.",
      card3Title: "Часы и ориентиры",
      card3Text: "Парк работает со вторника по воскресенье. Понедельник — санитарный день.",
      card4Title: "Семейный маршрут",
      card4Text: "Короткие остановки, понятные карточки животных и зоны отдыха помогают спланировать прогулку с детьми."
    },
    mapSection: {
      title: "Интерактивная карта Zoo",
      subtitle: "Ориентируйтесь по спокойной схеме: животные, вход, кафе, детская зона и медпункт доступны в один клик.",
      legendAnimal: "Животное",
      legendEntry: "Вход / выход",
      legendCafe: "Кафе / еда",
      legendKids: "Детская зона",
      legendFirstAid: "Медпункт",
      clickMarkerTip: "Выберите маркер на карте, чтобы открыть короткую карточку с полезной информацией.",
      resetZoom: "Сбросить масштаб",
      viewInDetail: "Открыть карточку",
      popupClose: "Закрыть",
      interactiveGuideTip: "Карта удобна для телефона во время прогулки по Zoo."
    },
    featuredAnimals: {
      title: "Жители Zoo",
      subtitle: "Редкие и знакомые виды в формате editorial wildlife cards: фото, биом, короткий факт и быстрый переход в QR-карточку.",
      latNameLabel: "Латинское название",
      biomeLabel: "Биом",
      ctaDetail: "Открыть карточку",
      detailsTitle: "Карточка животного"
    },
    news: {
      title: "События и обновления",
      subtitle: "Небольшие анонсы для посетителей: лекции, семейные активности и сезонные новости Zoo.",
      readMore: "Подробнее",
      items: [
        {
          date: "08 ИЮЛЯ 2026",
          tag: "Лекторий",
          title: "Вечерняя прогулка с зоологом",
          desc: "Короткий маршрут о том, как ведут себя крупные хищники в спокойные вечерние часы."
        },
        {
          date: "12 ИЮЛЯ 2026",
          tag: "Семьи",
          title: "День диких кошек",
          desc: "Познавательные станции для детей и родителей рядом с карточками тигра, рыси и леопарда."
        },
        {
          date: "15 ИЮЛЯ 2026",
          tag: "Наука",
          title: "Как Zoo заботится о редких видах",
          desc: "Зоологи расскажут о рационе, среде обитания и спокойном наблюдении за животными."
        }
      ]
    },
    trust: {
      title: "Городской сад с живым характером",
      subtitle: "Zoo — это не только прогулка, но и бережное отношение к животным, растениям и посетителям.",
      desc1: "Маршруты, вольеры и зелёные зоны собраны так, чтобы посетитель быстро понял, куда идти, что смотреть и где сделать паузу.",
      desc2: "Карточки животных, карта и практичная информация помогают провести визит спокойно: без перегруженного меню и лишних экранов.",
      stat1Number: "09:00",
      stat1Label: "начало работы со вторника по воскресенье",
      stat2Number: "10+",
      stat2Label: "животных в каталоге Zoo",
      stat3Number: "3",
      stat3Label: "языка интерфейса"
    },
    faq: {
      title: "Частые вопросы",
      subtitle: "Коротко о правилах, билетах, доступности и подготовке к визиту.",
      items: [
        {
          q: "Можно ли кормить животных самостоятельно?",
          a: "Нет. У каждого животного есть рацион, составленный специалистами. Еда посетителей может навредить здоровью животных."
        },
        {
          q: "Как использовать билет с телефона?",
          a: "Покажите электронный билет или предварительную заявку на входе. Сотрудник Zoo подскажет следующий шаг."
        },
        {
          q: "Подходит ли Zoo для семей с детьми?",
          a: "Да. В маршруте предусмотрены короткие остановки, детская зона, понятная карта и карточки животных, которые легко читать на телефоне."
        },
        {
          q: "Где находится Zoo?",
          a: "Zoo находится в Кишинёве по адресу bd. Dacia 50/7. Перед визитом проверьте часы работы и санитарные дни."
        }
      ]
    },
    footer: {
      desc: "Zoo — городской ботанический visitor-guide в Кишинёве: животные, карта, практичная информация и спокойный маршрут для всей семьи.",
      colNavTitle: "Навигация",
      colContactTitle: "Контакты",
      colSupportTitle: "Поддержка",
      supportText: "Если у вас есть вопросы о визите, используйте официальные телефоны или email Zoo.",
      copyright: "© 2026 Zoo.",
      allRightsReserved: "Все права защищены."
    },
    qrCard: {
      close: "Закрыть",
      warningTitle: "Правила безопасности",
      feedingTimeTitle: "Кормление",
      rangeTitle: "Ареал",
      scannedTip: "QR-карточка открыта. Сохраните её на время прогулки по Zoo.",
      tabAbout: "Описание",
      tabHabitat: "Ареал и питание"
    }
  },
  ro: {
    header: {
      logo: "Zoo",
      navHome: "Acasă",
      navMap: "Hartă",
      navAnimals: "Animale",
      navNews: "Evenimente",
      navFaq: "Info",
      ctaBuyTicket: "Cumpără bilet"
    },
    hero: {
      title: "Natura în inima orașului",
      subtitle: "Zoo din Chișinău este un ghid botanic pentru vizitatori: animale, hartă practică și informații clare pentru o plimbare liniștită.",
      ctaPrimary: "Cumpără bilet",
      ctaSecondary: "Planifică vizita",
      hoursLabel: "Program",
      hoursValue: "Mar–Dum 09:00–20:00",
      addressLabel: "Adresă",
      addressValue: "bd. Dacia 50/7, Chișinău",
      priceLabel: "Bilete",
      priceValue: "de la 5 MDL"
    },
    quickInfo: {
      sectionTitle: "Practic înainte de plimbare",
      card1Title: "Bilete fără grabă",
      card1Text: "Trimiteți o solicitare pentru bilet și începeți vizita de la intrarea principală Zoo.",
      card2Title: "Harta la îndemână",
      card2Text: "Deschideți schema Zoo pentru animale, intrare, cafenea, zona copiilor și punct medical.",
      card3Title: "Program și repere",
      card3Text: "Parcul este deschis de marți până duminică. Luni este zi sanitară.",
      card4Title: "Traseu pentru familie",
      card4Text: "Opriri scurte, fișe clare despre animale și zone de odihnă pentru o vizită comodă cu copiii."
    },
    mapSection: {
      title: "Harta interactivă Zoo",
      subtitle: "Orientați-vă pe o schemă calmă: animale, intrare, cafenea, zona copiilor și punct medical sunt la un clic distanță.",
      legendAnimal: "Animal",
      legendEntry: "Intrare / ieșire",
      legendCafe: "Cafenea / mâncare",
      legendKids: "Zona copiilor",
      legendFirstAid: "Punct medical",
      clickMarkerTip: "Alegeți un marker de pe hartă pentru a deschide o fișă scurtă cu informații utile.",
      resetZoom: "Resetează zoom",
      viewInDetail: "Deschide fișa",
      popupClose: "Închide",
      interactiveGuideTip: "Harta este comodă pe telefon în timpul plimbării prin Zoo."
    },
    featuredAnimals: {
      title: "Locuitorii Zoo",
      subtitle: "Specii rare și cunoscute prezentate ca editorial wildlife cards: fotografie, biom, fapt scurt și acces rapid la fișa QR.",
      latNameLabel: "Denumire latină",
      biomeLabel: "Biom",
      ctaDetail: "Deschide fișa",
      detailsTitle: "Fișa animalului"
    },
    news: {
      title: "Evenimente și noutăți",
      subtitle: "Anunțuri scurte pentru vizitatori: lecții, activități de familie și știri sezoniere Zoo.",
      readMore: "Detalii",
      items: [
        {
          date: "08 IULIE 2026",
          tag: "Lecție",
          title: "Plimbare de seară cu zoologul",
          desc: "Un traseu scurt despre comportamentul prădătorilor mari în orele liniștite de seară."
        },
        {
          date: "12 IULIE 2026",
          tag: "Familii",
          title: "Ziua felinelor sălbatice",
          desc: "Stații educative pentru copii și părinți lângă fișele tigrului, râsului și leopardului."
        },
        {
          date: "15 IULIE 2026",
          tag: "Știință",
          title: "Cum are grijă Zoo de speciile rare",
          desc: "Zoologii vor explica dieta, habitatul și observarea calmă a animalelor."
        }
      ]
    },
    trust: {
      title: "Grădină urbană cu caracter viu",
      subtitle: "Zoo înseamnă plimbare, grijă pentru animale, plante și vizitatori.",
      desc1: "Traseele, incintele și zonele verzi sunt organizate astfel încât vizitatorul să înțeleagă rapid unde merge și ce poate vedea.",
      desc2: "Fișele animalelor, harta și informațiile practice ajută la o vizită liniștită, fără meniuri încărcate.",
      stat1Number: "09:00",
      stat1Label: "deschidere de marți până duminică",
      stat2Number: "10+",
      stat2Label: "animale în catalogul Zoo",
      stat3Number: "3",
      stat3Label: "limbi de interfață"
    },
    faq: {
      title: "Întrebări frecvente",
      subtitle: "Pe scurt despre reguli, bilete, accesibilitate și pregătirea vizitei.",
      items: [
        {
          q: "Pot hrăni animalele singur?",
          a: "Nu. Fiecare animal are o dietă pregătită de specialiști. Mâncarea vizitatorilor poate afecta sănătatea animalelor."
        },
        {
          q: "Cum folosesc biletul de pe telefon?",
          a: "Prezentați biletul electronic sau cererea preliminară la intrare. Echipa Zoo vă va indica următorul pas."
        },
        {
          q: "Zoo este potrivit pentru familii cu copii?",
          a: "Da. Traseul include opriri scurte, zonă pentru copii, hartă clară și fișe despre animale ușor de citit pe telefon."
        },
        {
          q: "Unde se află Zoo?",
          a: "Zoo se află în Chișinău, bd. Dacia 50/7. Verificați programul și zilele sanitare înainte de vizită."
        }
      ]
    },
    footer: {
      desc: "Zoo este un visitor-guide botanic urban în Chișinău: animale, hartă, informații practice și traseu calm pentru familie.",
      colNavTitle: "Navigare",
      colContactTitle: "Contacte",
      colSupportTitle: "Suport",
      supportText: "Pentru întrebări despre vizită, folosiți telefoanele sau emailurile oficiale Zoo.",
      copyright: "© 2026 Zoo.",
      allRightsReserved: "Toate drepturile rezervate."
    },
    qrCard: {
      close: "Închide",
      warningTitle: "Reguli de siguranță",
      feedingTimeTitle: "Hrănire",
      rangeTitle: "Areal",
      scannedTip: "Fișa QR este deschisă. Păstrați-o în timpul plimbării prin Zoo.",
      tabAbout: "Descriere",
      tabHabitat: "Areal și hrană"
    }
  },
  en: {
    header: {
      logo: "Zoo",
      navHome: "Home",
      navMap: "Map",
      navAnimals: "Animals",
      navNews: "Events",
      navFaq: "Info",
      ctaBuyTicket: "Buy Ticket"
    },
    hero: {
      title: "Nature in the Heart of the City",
      subtitle: "Zoo in Chisinau is a botanical visitor guide: animals, a practical map, and clear information for a calm city walk.",
      ctaPrimary: "Buy Ticket",
      ctaSecondary: "Plan Your Visit",
      hoursLabel: "Hours",
      hoursValue: "Tue–Sun 09:00–20:00",
      addressLabel: "Address",
      addressValue: "50/7 Dacia Blvd, Chisinau",
      priceLabel: "Tickets",
      priceValue: "from 5 MDL"
    },
    quickInfo: {
      sectionTitle: "Practical Before the Walk",
      card1Title: "Tickets without friction",
      card1Text: "Send a ticket request in advance and start from the main Zoo entrance without extra navigation.",
      card2Title: "Map in your hand",
      card2Text: "Open the Zoo plan to find animals, entrance, cafe, playground, and medical help.",
      card3Title: "Hours and cues",
      card3Text: "The park is open Tuesday through Sunday. Monday is a sanitary day.",
      card4Title: "Family route",
      card4Text: "Short stops, clear animal cards, and rest areas help families plan an easy walk."
    },
    mapSection: {
      title: "Interactive Zoo Map",
      subtitle: "Use a calm internal plan: animals, entrance, cafe, playground, and medical help are one click away.",
      legendAnimal: "Animal",
      legendEntry: "Entry / exit",
      legendCafe: "Cafe / food",
      legendKids: "Playground",
      legendFirstAid: "Medical help",
      clickMarkerTip: "Choose a marker on the map to open a short practical card.",
      resetZoom: "Reset zoom",
      viewInDetail: "Open card",
      popupClose: "Close",
      interactiveGuideTip: "The map is designed for phone use during your Zoo walk."
    },
    featuredAnimals: {
      title: "Zoo Residents",
      subtitle: "Rare and familiar species presented as editorial wildlife cards: image, biome, short fact, and quick QR profile access.",
      latNameLabel: "Latin name",
      biomeLabel: "Biome",
      ctaDetail: "Open card",
      detailsTitle: "Animal profile"
    },
    news: {
      title: "Events and Updates",
      subtitle: "Short visitor updates: talks, family activities, and seasonal Zoo news.",
      readMore: "Read more",
      items: [
        {
          date: "08 JULY 2026",
          tag: "Talk",
          title: "Evening walk with a zoologist",
          desc: "A short route about how large predators behave during calmer evening hours."
        },
        {
          date: "12 JULY 2026",
          tag: "Families",
          title: "Wild cats day",
          desc: "Educational stations for children and parents near tiger, lynx, and leopard cards."
        },
        {
          date: "15 JULY 2026",
          tag: "Science",
          title: "How Zoo cares for rare species",
          desc: "Zoologists explain diet, habitat, and calm animal observation."
        }
      ]
    },
    trust: {
      title: "A City Garden with Living Character",
      subtitle: "Zoo is a walk, but also care for animals, plants, and visitors.",
      desc1: "Routes, enclosures, and green zones are organized so visitors quickly understand where to go, what to see, and where to pause.",
      desc2: "Animal cards, the map, and practical information support a calm visit without overloaded menus or extra screens.",
      stat1Number: "09:00",
      stat1Label: "opening Tuesday through Sunday",
      stat2Number: "10+",
      stat2Label: "animals in the Zoo catalog",
      stat3Number: "3",
      stat3Label: "interface languages"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Short answers about rules, tickets, accessibility, and visit planning.",
      items: [
        {
          q: "Can I feed the animals myself?",
          a: "No. Each animal has a specialist diet. Visitor food can damage animal health."
        },
        {
          q: "How do I use a phone ticket?",
          a: "Show your electronic ticket or preliminary request at the entrance. The Zoo team will guide the next step."
        },
        {
          q: "Is Zoo suitable for families with children?",
          a: "Yes. The route includes short stops, a playground, a clear map, and animal cards that are easy to read on a phone."
        },
        {
          q: "Where is Zoo located?",
          a: "Zoo is located in Chisinau at 50/7 Dacia Blvd. Check opening hours and sanitary days before your visit."
        }
      ]
    },
    footer: {
      desc: "Zoo is an urban botanical visitor guide in Chisinau: animals, map, practical information, and a calm route for the whole family.",
      colNavTitle: "Navigation",
      colContactTitle: "Contacts",
      colSupportTitle: "Support",
      supportText: "For visit questions, use the official Zoo phones or emails.",
      copyright: "© 2026 Zoo.",
      allRightsReserved: "All rights reserved."
    },
    qrCard: {
      close: "Close",
      warningTitle: "Safety rules",
      feedingTimeTitle: "Feeding",
      rangeTitle: "Range",
      scannedTip: "QR card opened. Keep it during your Zoo walk.",
      tabAbout: "Description",
      tabHabitat: "Range and feeding"
    }
  }
};

