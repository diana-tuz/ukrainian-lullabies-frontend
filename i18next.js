import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          aboutUs: "About us",
          lullabiesMuseum: "Lullabies museum",
          traditionalLullabies: "Traditional lullabies",
          singingTogether: "Singing together",
          animatedLullabies: "Animated lullabies",
          search: "Search",
          heroText: "Dive into the wonderful world of Ukrainian lullaby. Here, in every note, the soul of the nation comes to life. Each word engraves genetic bounds with ancients. Discover the unique lullabies world, where melodious words of love and tenderness, encoded for a blessed future, flow from generation to generation.",
          listen: "Listen",
          donate: "Donate",
          popularLullabies: "Popular lullabies",
          achievements: "Our achievements",
          lullabies: "lullabies",
          locations: "locations",
          performers: "performers",
          helpWith: "Help with project development:",
          donateHere: "You can donate here",
          selection: "Lullabies selection",
          ukrainianLullabies: "Ukrainian lullabies",
          lullabySong: "Lullaby song is the first poetic connection between mother and child. It is a tight genetic chain that unites a lot of generations. Child’s national consciousness, their language and worldview, arises from a lullaby.",
          listenToEntireSelection: "Listen to the entire selection",
          theGameUkrainianLullabies: "The game 'Ukrainian lullabies'",
          playEducationalGameWithChatbot: "Let's play an educational game with a chatbot - learn more about Ukrainian lullabies.",
          youCanGuessWhichRegion: "You can guess which region a lullaby comes from by the rhyme or dialect.",
          youCanLearnAboutThePlots: "You can learn about the plots and characters of the lullabies.",
          letsPlay: "Let's play! Come to the game!",
          play: "Play",
          letsPlayQuestion: "Let’s play?",
          termsAndConditions: "Terms and conditions",
          privacy: "Privacy",
          poRegulations: "PO regulations",
          address: "Address:",
          UkraineKyiv: "Ukraine, Kyiv",
          telephone: "Telephone",
          followUsHere: "Follow us here",
          developedBy: "Developed by Baza Trainee Ukraine 2023 © All rights reserved",
          projectPurpose: "The purpose of our project",
          projectDescription:
            "The purpose of our project is to create a media platform where you can explore lullabies from all regions of Ukraine (Ukrainians and national minorities), learn the songs to sing to your child, or create your own lullaby playlist for playback.",
            projectDescription2: "For the implementation of the 'Ukrainian Lullabies' project, scientists from the Research Laboratory of Ethnomusicology of the National Academy of Music of Ukraine and IT volunteers from the 'Baza Trainee Ukraine' platform have joined forces. They presented the project at Hatathon 4.0: Ukraine Heritage Edition, where it became one of the best in the field of preserving intangible cultural heritage. They established the public organization 'Lullaby Museum' and are working together to create a media resource with lullaby songs for mothers, children, and families in Ukraine and abroad.",
          supportUs: "You can support us",
          supportDescription:
            "You can support the development of the 'Ukrainian Lullabies' project and stay up to date with the latest news. Get nice bonuses by subscribing to the project on Patreon or Buy Me a Coffee.",
          supportDescription2: "Your donations will be used to cover the costs of an AWS server for storing unique recordings of Ukrainian authenticity, hosting for the platform, scientific and technical support, legal support for the 'Ukrainian Lullabies' project, as well as funding new expeditions and recordings.",
          supportDescription3:"With respect, the 'Ukrainian Lullabies' project team.",
          ourPartners: "Our partners",
          feedbackForm: "Feedback form",
          contactUs: "If you have any questions/suggestions/wishes - we look forward to hearing from you!",
          name: "Name",
          messageSubject: "Message subject",
          messageText: "Message text",
          sendMessage: "Send a message",
          share: "To share",
          shareLink: "Share a link to the site",
          searchUnavailable: "Search is temporarily unavailable",
          chatBot: "Chat-bot",

          cookies: "By clicking 'Accept All Cookies,' you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.",
          acceptAllCookies: "Accept all cookies",
          cookieSettings: "Cookie settings",

        }
      },
      ua: {
        translations: {
          chatBot: "Чат-бот",

          cookieSettings: "Налаштування cookie",
          acceptAllCookies: " Прийняти всі cookies",
          cookies: "Натискаючи «Прийняти всі файли cookie», ви погоджуєтеся на збереження файлів cookie на вашому пристрої для покращення навігації сайтом, аналізу використання сайту та допомоги в наших маркетингових зусиллях.",
          shareLink: "Поділитися посиланням на сайт",
          searchUnavailable: "Пошук тимчасово недоступний",
          share: "Поділитися",
          aboutUs: "Про нас",
          lullabiesMuseum: "Музей колискових",
          traditionalLullabies: "Традиційні колискові", 
          singingTogether: "Співаємо разом", 
          animatedLullabies: "Колискові в анімаціях",
          search: "Пошук",
          heroText: "Поринь у чарівний світ української колискової. Тут у кожній ноті оживає душа народу, у кожному слові закарбовано генетичний зв’язок з родом. Відкрий для себе неповторний колисковий світ, де від покоління до покоління линуть мелодійні слова любові та ніжності, закодовані на щасливу долю дитини.",
          listen: "Послухати",
          donate: "Задонатити",
          popularLullabies: "Популярні колискові",
          achievements: "Наші напрацювання",
          lullabies: "колискових",
          locations: "локація",
          performers: "виконавців",
          helpWith: "Допоможіть розвитку проєкту:",
          donateHere: "Задонатити можна тут",
          selection: "Підбірка колискових",
          ukrainianLullabies: "Українські колискові",
          lullabySong: "Колискова пісня – це перший поетичний зв’язок матері з дитиною, той міцний генетичний ланцюжок, який єднає між собою багато поколінь. З колискової зароджується національна свідомість дитини, її мова та світогляд.",
          listenToEntireSelection: "Слухати всю підбірку",
          theGameUkrainianLullabies: "Гра 'Українські колискові'",
          playEducationalGameWithChatbot: "Пограйте в пізнавальну гру з чат-ботом - дізнавайтесь більше про рідне.",
          youCanGuessWhichRegion: "Ви можете вгадати за наспівом або діалектом, з якого регіону походить колискова пісня.",
          youCanLearnAboutThePlots: "Ви можете дізнатися про сюжети та персонажів колискових.",
          letsPlay: "Нумо грати! Мерщій до гри!",
          play: "Грати",
          letsPlayQuestion: "Зіграємо?",
          termsAndConditions: "Правила та умови",
          privacy: "Конфіденційність",
          poRegulations: "Статут ГО",
          address:"Адреса:",
          UkraineKyiv: "Україна, Київ",
          telephone: "Телефон",
          followUsHere: "Слідкуй за нами тут",
          developedBy: "Розробка Baza Trainee Ukraine 2023 © Всі права захищені",
          projectPurpose: "Мета нашого проєкту",
          projectDescription:
            "Мета нашого проєкту - створення медіаплатформи, на якій Ви зможете ознайомитися з колисковими піснями з усіх регіонів України (українців та національних меншин), вивчити пісні, щоб співати своїй дитині або створити власний плейлист з колисковими для програвання.",
            projectDescription2:"Для реалізації проєкту 'Українські колискові', науковці з Науково-дослідної лабораторії етномузикології Національної музичної академії України та IT-волонтери з платформи 'Baza Trainee Ukraine' об'єдналися в команду і представили проєкт на Hatathon 4.0: Ukraine Heritage Edition, де він став одним з найкращих у галузі збереження нематеріальної культурної спадщини. Вони створили громадську організацію 'Музей колискової' та разом працюють над створенням медіаресурсу з колисковими піснями для мам, дітей та родин в Україні та за кордоном. З повагою, команда проєкту 'Українські колискові'.",
          supportUs: "Ви можете підтримати нас",
          supportDescription:
            "Ви можете підтримати розвиток проєкту 'Українські колискові' і бути в курсі останніх новин, отримати приємні бонуси, підписавшись на проєкт на Patreon або Buy Me a Coffee.",
          supportDescription2: "Ваші пожертви будуть використані для оплати сервера на AWS для збереження унікальних записів української аутентичності, оплати хостингу для платформи, забезпечення наукової та технічної підтримки, юридичної підтримки проєкту 'Українські колискові', а також для фінансування нових експедицій та записів.",
            supportDescription3: " З повагою, команда проєкту 'Українські колискові'.",
          ourPartners: "Наші партнери",
          feedbackForm: "Форма зворотнього звʼязку",
          contactUs: "Якщо у Вас є питання/пропозиції/побажання - чекаємо Ваших контактів!",
          name: "Імʼя",
          messageSubject: "Тема повідомлення",
          messageText: "Текст повідомлення",
          sendMessage: "Надіслати повідомлення"
        }
      }
    },
  
    lng: 'ua',
    fallbackLng: "en",
    debug: true,
    
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

