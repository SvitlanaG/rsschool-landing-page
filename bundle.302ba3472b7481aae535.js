/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	__webpack_require__.p = "/rsschool-landing-page/";
/******/ 	
/************************************************************************/

;// ./src/assets/software_dev.jpg
const software_dev_namespaceObject = __webpack_require__.p + "assets/software_dev.c9328cff86cd2d145ce3.jpg";
;// ./src/assets/dev_shoulder.jpeg
const dev_shoulder_namespaceObject = __webpack_require__.p + "assets/dev_shoulder.8db9998aa10057e2afb4.jpeg";
;// ./src/assets/dev_distance.jpeg
const dev_distance_namespaceObject = __webpack_require__.p + "assets/dev_distance.13a26eb4176b7d912cf6.jpeg";
;// ./src/assets/dev_finger_flow.jpeg
const dev_finger_flow_namespaceObject = __webpack_require__.p + "assets/dev_finger_flow.7088199e3e5e2b724689.jpeg";
;// ./src/data/catalog.js



var exerciseVariants = {
  single: {
    id: "single",
    multiplier: 1,
    label: {
      en: "One round",
      de: "Eine Runde",
      uk: "Одне коло",
      ru: "Один подход"
    },
    detail: {
      en: "Move through the exercise once at a comfortable pace.",
      de: "Führe die Übung einmal in einem angenehmen Tempo aus.",
      uk: "Виконайте вправу один раз у комфортному темпі.",
      ru: "Выполните упражнение один раз в комфортном темпе."
    }
  },
  "double": {
    id: "double",
    multiplier: 2,
    label: {
      en: "Two rounds",
      de: "Zwei Runden",
      uk: "Два кола",
      ru: "Два подхода"
    },
    detail: {
      en: "Repeat the exercise once, pausing briefly between rounds.",
      de: "Wiederhole die Übung nach einer kurzen Pause ein zweites Mal.",
      uk: "Повторіть вправу після короткої паузи ще один раз.",
      ru: "Повторите упражнение после короткой паузы ещё один раз."
    }
  }
};
var backAlt = {
  en: "Desk worker doing a posture exercise",
  de: "Büroangestellte Person bei einer Haltungsübung",
  uk: "Офісний працівник виконує вправу для постави",
  ru: "Офисный работник выполняет упражнение для осанки"
};
var eyesAlt = {
  en: "Desk worker taking an eye break",
  de: "Büroangestellte Person macht eine Augenpause",
  uk: "Офісний працівник робить перерву для очей",
  ru: "Офисный работник делает перерыв для глаз"
};
var handsAlt = {
  en: "Desk worker resting their hands",
  de: "Büroangestellte Person entspannt ihre Hände",
  uk: "Офісний працівник розслабляє кисті рук",
  ru: "Офисный работник расслабляет кисти рук"
};
var sharedOptions = [exerciseVariants.single, exerciseVariants["double"]];
var exercisePaces = {
  gentle: {
    id: "gentle",
    label: {
      en: "Gentle",
      de: "Sanft",
      uk: "М'який",
      ru: "Мягкий"
    },
    detail: {
      en: "Move slowly and keep each movement small and comfortable.",
      de: "Bewege dich langsam und halte jede Bewegung klein und angenehm.",
      uk: "Рухайтеся повільно, зберігаючи рухи невеликими й комфортними.",
      ru: "Двигайтесь медленно, сохраняя движения небольшими и комфортными."
    }
  },
  steady: {
    id: "steady",
    label: {
      en: "Steady",
      de: "Gleichmäßig",
      uk: "Рівний",
      ru: "Ровный"
    },
    detail: {
      en: "Use a smooth, steady rhythm while staying within a comfortable range.",
      de: "Bewege dich gleichmäßig und bleibe in einem angenehmen Bewegungsbereich.",
      uk: "Рухайтеся плавно й рівномірно в комфортному діапазоні.",
      ru: "Двигайтесь плавно и равномерно в комфортном диапазоне."
    }
  }
};
var sharedPaces = [exercisePaces.gentle, exercisePaces.steady];
var catalogExercises = [{
  id: "neck-release",
  category: "back",
  title: {
    en: "Neck release",
    de: "Nacken lockern",
    uk: "Розслаблення шиї",
    ru: "Расслабление шеи"
  },
  description: {
    en: "A slow, seated reset for a stiff neck and shoulders.",
    de: "Eine langsame Pause im Sitzen für einen steifen Nacken und verspannte Schultern.",
    uk: "Повільне відновлення сидячи для напруженої шиї та плечей.",
    ru: "Медленное восстановление сидя для напряженной шеи и плеч."
  },
  durationMinutes: 2,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "seated-twist",
  category: "back",
  title: {
    en: "Seated twist",
    de: "Drehung im Sitzen",
    uk: "Скручування сидячи",
    ru: "Скручивание сидя"
  },
  description: {
    en: "Create gentle movement through your upper back.",
    de: "Bringe sanfte Bewegung in deinen oberen Rücken.",
    uk: "Додайте м'якого руху верхній частині спини.",
    ru: "Добавьте мягкое движение верхней части спины."
  },
  durationMinutes: 3,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "chair-chest-opener",
  category: "back",
  title: {
    en: "Chair chest opener",
    de: "Brustöffner am Stuhl",
    uk: "Розкриття грудної клітки",
    ru: "Раскрытие грудной клетки"
  },
  description: {
    en: "Counter the rounded posture of a long screen session.",
    de: "Wirke der gerundeten Haltung nach langer Bildschirmzeit entgegen.",
    uk: "Зменште округлення постави після тривалої роботи за екраном.",
    ru: "Уменьшите округление осанки после долгой работы за экраном."
  },
  durationMinutes: 2,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "standing-side-reach",
  category: "back",
  title: {
    en: "Standing side reach",
    de: "Seitliche Streckung im Stehen",
    uk: "Бічне витягування стоячи",
    ru: "Боковое вытягивание стоя"
  },
  description: {
    en: "Lengthen the sides of your body after sitting still.",
    de: "Verlängere die Seiten deines Körpers nach langem Sitzen.",
    uk: "Витягніть боки тіла після тривалого сидіння.",
    ru: "Вытяните боковые части тела после долгого сидения."
  },
  durationMinutes: 4,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "wall-posture",
  category: "back",
  title: {
    en: "Wall-supported posture",
    de: "Haltung an der Wand",
    uk: "Постава біля стіни",
    ru: "Осанка у стены"
  },
  description: {
    en: "Reconnect with a tall, relaxed standing position.",
    de: "Finde zu einer aufrechten, entspannten Haltung zurück.",
    uk: "Поверніться до високого й розслабленого положення стоячи.",
    ru: "Вернитесь к высокому и расслабленному положению стоя."
  },
  durationMinutes: 3,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "shoulder-circles",
  category: "back",
  title: {
    en: "Shoulder circles",
    de: "Schulterkreisen",
    uk: "Кола плечима",
    ru: "Круги плечами"
  },
  description: {
    en: "A simple way to invite more ease into your upper body.",
    de: "Eine einfache Bewegung für mehr Leichtigkeit im Oberkörper.",
    uk: "Простий рух для більшої легкості у верхній частині тіла.",
    ru: "Простое движение для большей легкости в верхней части тела."
  },
  durationMinutes: 2,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "seated-hip-reset",
  category: "back",
  title: {
    en: "Seated hip reset",
    de: "Hüftpause im Sitzen",
    uk: "Відновлення стегон сидячи",
    ru: "Восстановление бедер сидя"
  },
  description: {
    en: "Bring a little movement back to your hips and lower back.",
    de: "Gib Hüften und unterem Rücken wieder etwas Bewegung.",
    uk: "Поверніть трохи руху стегнам і попереку.",
    ru: "Верните немного движения бедрам и пояснице."
  },
  durationMinutes: 4,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "calm-back-stretch",
  category: "back",
  title: {
    en: "Calm back stretch",
    de: "Ruhige Rückenstreckung",
    uk: "Спокійне розтягування спини",
    ru: "Спокойная растяжка спины"
  },
  description: {
    en: "Finish a focused block with a comfortable release.",
    de: "Beende einen konzentrierten Arbeitsblock mit angenehmer Entlastung.",
    uk: "Завершіть зосереджений блок комфортним розслабленням.",
    ru: "Завершите сосредоточенный блок комфортным расслаблением."
  },
  durationMinutes: 3,
  image: software_dev_namespaceObject,
  imageAlt: backAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "distance-gaze",
  category: "eyes",
  title: {
    en: "20-second distance gaze",
    de: "20 Sekunden in die Ferne schauen",
    uk: "20 секунд погляду вдалечінь",
    ru: "20 секунд взгляда вдаль"
  },
  description: {
    en: "Rest your eyes by focusing on a distant point.",
    de: "Entspanne deine Augen, indem du einen entfernten Punkt fokussierst.",
    uk: "Дайте очам відпочити, сфокусувавшись на віддаленій точці.",
    ru: "Дайте глазам отдохнуть, сфокусировавшись на удаленной точке."
  },
  durationMinutes: 1,
  image: dev_distance_namespaceObject,
  imageAlt: eyesAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "slow-blink-reset",
  category: "eyes",
  title: {
    en: "Slow blink reset",
    de: "Ruhige Blinkpause",
    uk: "Спокійне моргання",
    ru: "Спокойное моргание"
  },
  description: {
    en: "Blink gently and let your eyes settle between screen tasks.",
    de: "Blinzle bewusst und entspanne deine Augen zwischen Bildschirmaufgaben.",
    uk: "М'яко поморгайте й розслабте очі між завданнями за екраном.",
    ru: "Мягко поморгайте и расслабьте глаза между задачами за экраном."
  },
  durationMinutes: 2,
  image: dev_distance_namespaceObject,
  imageAlt: eyesAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "near-far-focus",
  category: "eyes",
  title: {
    en: "Near-to-far focus",
    de: "Fokus nah und fern",
    uk: "Фокус поблизу й удалині",
    ru: "Фокус вблизи и вдали"
  },
  description: {
    en: "Shift focus between a nearby object and something across the room.",
    de: "Wechsle den Blick zwischen einem nahen Objekt und einem Punkt im Raum.",
    uk: "Переводьте погляд із близького предмета на точку в іншому кінці кімнати.",
    ru: "Переводите взгляд с близкого предмета на точку в другом конце комнаты."
  },
  durationMinutes: 2,
  image: dev_distance_namespaceObject,
  imageAlt: eyesAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "wrist-finger-flow",
  category: "hands",
  title: {
    en: "Wrist and finger flow",
    de: "Bewegung für Handgelenke und Finger",
    uk: "Рух для зап'ясть і пальців",
    ru: "Движение для запястий и пальцев"
  },
  description: {
    en: "Ease the small muscles that work alongside your keyboard.",
    de: "Entspanne die kleinen Muskeln, die an der Tastatur arbeiten.",
    uk: "Розслабте м'язи, які працюють разом із клавіатурою.",
    ru: "Расслабьте мышцы, которые работают вместе с клавиатурой."
  },
  durationMinutes: 3,
  image: dev_finger_flow_namespaceObject,
  imageAlt: handsAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "finger-fan-curl",
  category: "hands",
  title: {
    en: "Finger fan and curl",
    de: "Finger spreizen und beugen",
    uk: "Розведення та згинання пальців",
    ru: "Разведение и сгибание пальцев"
  },
  description: {
    en: "Spread your fingers wide, then softly curl and release them.",
    de: "Spreize die Finger und beuge und strecke sie anschließend sanft.",
    uk: "Широко розведіть пальці, а потім м'яко зігніть і розслабте їх.",
    ru: "Широко разведите пальцы, затем мягко согните и расслабьте их."
  },
  durationMinutes: 2,
  image: dev_finger_flow_namespaceObject,
  imageAlt: handsAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}, {
  id: "forearm-stretch",
  category: "hands",
  title: {
    en: "Forearm stretch",
    de: "Unterarmdehnung",
    uk: "Розтягування передпліч",
    ru: "Растяжка предплечий"
  },
  description: {
    en: "Lengthen your forearms with gentle wrist stretches.",
    de: "Dehne deine Unterarme mit sanften Bewegungen der Handgelenke.",
    uk: "М'яко розтягніть передпліччя рухами зап'ясть.",
    ru: "Мягко растяните предплечья движениями запястий."
  },
  durationMinutes: 2,
  image: dev_finger_flow_namespaceObject,
  imageAlt: handsAlt,
  options: sharedOptions,
  paceOptions: sharedPaces
}];
;// ./src/index.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;





var THEME_KEY = "health-at-work-theme";
var LANGUAGE_KEY = "health-at-work-language";
var page = document.body.dataset.page;
var labels = {
  en: {
    home: "Home",
    exercises: "Exercises",
    habits: "Healthy habits",
    about: "How it works",
    catalog: "Catalog",
    previousExercise: "Previous exercise",
    nextExercise: "Next exercise",
    showExercise: "Show exercise",
    exerciseDetails: "Exercise details",
    sessionLength: "Session length",
    rounds: "Rounds",
    pace: "Pace",
    closeModal: "Close exercise details",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    theme: "Toggle color theme",
    language: "Language",
    footer: "A calmer, healthier workday starts with a two-minute break.",
    contact: "Contact",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Learning project.",
    eyebrow: "Your desk-break companion",
    heroTitle: "Feel better by the end of your workday.",
    heroText: "Short, practical exercises for your back, eyes, wrists, and focus. Built for the moments between meetings and commits.",
    heroCta: "Explore exercises",
    heroNote: "Gentle movement for everyday wellbeing. Stop if anything hurts."
  },
  de: {
    home: "Startseite",
    exercises: "Ubungen",
    habits: "Gesunde Gewohnheiten",
    about: "So funktioniert es",
    catalog: "Katalog",
    previousExercise: "Vorherige Übung",
    nextExercise: "Nächste Übung",
    showExercise: "Übung anzeigen",
    exerciseDetails: "Übungsdetails",
    sessionLength: "Dauer",
    rounds: "Durchgänge",
    pace: "Tempo",
    closeModal: "Übungsdetails schließen",
    menuOpen: "Navigation öffnen",
    menuClose: "Navigation schließen",
    theme: "Farbschema wechseln",
    language: "Sprache",
    footer: "Ein ruhigerer, gesunderer Arbeitstag beginnt mit einer Pause von zwei Minuten.",
    contact: "Kontakt",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Lernprojekt.",
    eyebrow: "Dein Begleiter fur Bildschirmpausen",
    heroTitle: "Fuhle dich am Ende des Arbeitstags besser.",
    heroText: "Kurze, praktische Ubungen fur Rucken, Augen, Handgelenke und Fokus. Fur die Zeit zwischen Meetings und Aufgaben.",
    heroCta: "Ubungen entdecken",
    heroNote: "Sanfte Bewegung fur das tagliche Wohlbefinden. Hore auf, wenn etwas weh tut."
  },
  uk: {
    home: "Головна",
    exercises: "Вправи",
    habits: "Здорові звички",
    about: "Як це працює",
    catalog: "Каталог",
    previousExercise: "Попередня вправа",
    nextExercise: "Наступна вправа",
    showExercise: "Показати вправу",
    exerciseDetails: "Деталі вправи",
    sessionLength: "Тривалість",
    rounds: "Кола",
    pace: "Темп",
    closeModal: "Закрити деталі вправи",
    menuOpen: "Відкрити меню навігації",
    menuClose: "Закрити меню навігації",
    theme: "Змінити кольорову тему",
    language: "Мова",
    footer: "Спокійніший і здоровіший робочий день починається з двохвилинної перерви.",
    contact: "Контакти",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Навчальний проєкт.",
    eyebrow: "Ваш помічник для перерв",
    heroTitle: "Почувайтеся краще наприкінці робочого дня.",
    heroText: "Короткі практичні вправи для спини, очей, зап'ясть і концентрації. Для моментів між зустрічами та завданнями.",
    heroCta: "Переглянути вправи",
    heroNote: "Легкі рухи для щоденного добробуту. Зупиніться, якщо відчуваєте біль."
  },
  ru: {
    home: "Главная",
    exercises: "Упражнения",
    habits: "Здоровые привычки",
    about: "Как это работает",
    catalog: "Каталог",
    previousExercise: "Предыдущее упражнение",
    nextExercise: "Следующее упражнение",
    showExercise: "Показать упражнение",
    exerciseDetails: "Описание упражнения",
    sessionLength: "Длительность",
    rounds: "Подходы",
    pace: "Темп",
    closeModal: "Закрыть описание упражнения",
    menuOpen: "Открыть меню навигации",
    menuClose: "Закрыть меню навигации",
    theme: "Переключить тему",
    language: "Язык",
    footer: "Более спокойный и здоровый рабочий день начинается с двухминутного перерыва.",
    contact: "Контакты",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Учебный проект.",
    eyebrow: "Ваш помощник для перерывов",
    heroTitle: "Чувствуйте себя лучше к концу рабочего дня.",
    heroText: "Короткие практичные упражнения для спины, глаз, запястий и концентрации. Для моментов между встречами и задачами.",
    heroCta: "Посмотреть упражнения",
    heroNote: "Легкие движения для ежедневного благополучия. Остановитесь, если чувствуете боль."
  }
};
Object.assign(labels.en, {
  featuredEyebrow: "Start here",
  featuredTitle: "Three breaks worth making time for.",
  featuredText: "Choose a small reset that meets you where your body is today.",
  stretchTime: "02 min",
  stretchTitle: "Seated shoulder reset",
  stretchText: "Release upper-body tension without leaving your chair.",
  eyeTime: "01 min",
  eyeTitle: "20-second distance gaze",
  eyeText: "Give focused eyes a brief change of scenery.",
  wristTime: "03 min",
  wristTitle: "Wrist and finger flow",
  wristText: "Ease the small muscles that work alongside your keyboard.",
  habitsEyebrow: "Build a kinder rhythm",
  habitsTitle: "The small habits that carry a workday.",
  habitsText: "There is no perfect desk setup. These lightweight check-ins help you notice when your body and attention need a reset.",
  habitOneTime: "Every 20 minutes",
  habitOneTitle: "Look beyond the screen",
  habitOneText: "Focus on something about 20 feet away for 20 seconds to give your eyes a break.",
  habitTwoTime: "Once an hour",
  habitTwoTitle: "Change your position",
  habitTwoText: "Stand up, take a few steps, or shift your posture before discomfort has a chance to build.",
  habitThreeTime: "Before deep work",
  habitThreeTitle: "Set up your space",
  habitThreeText: "Place your screen at eye level and let your shoulders drop away from your ears.",
  habitFourTime: "Between tasks",
  habitFourTitle: "Take a breath on purpose",
  habitFourText: "Pause for three slow breaths. It is a small transition with a surprisingly large effect."
});
Object.assign(labels.de, {
  featuredEyebrow: "Hier beginnen",
  featuredTitle: "Drei Pausen, fur die sich Zeit lohnt.",
  featuredText: "Wahle eine kleine Pause, die zu deinem Korper heute passt.",
  stretchTime: "02 Min.",
  stretchTitle: "Schulterpause im Sitzen",
  stretchText: "Lose Verspannungen im Oberkorper direkt am Stuhl.",
  eyeTime: "01 Min.",
  eyeTitle: "20 Sekunden in die Ferne",
  eyeText: "Gib konzentrierten Augen einen kurzen Szenenwechsel.",
  wristTime: "03 Min.",
  wristTitle: "Fluss fur Handgelenke und Finger",
  wristText: "Entspanne die kleinen Muskeln, die an der Tastatur arbeiten.",
  habitsEyebrow: "Ein guterer Rhythmus",
  habitsTitle: "Kleine Gewohnheiten fur den Arbeitstag.",
  habitsText: "Es gibt keinen perfekten Arbeitsplatz. Diese kleinen Checks helfen dir, rechtzeitig eine Pause zu bemerken.",
  habitOneTime: "Alle 20 Minuten",
  habitOneTitle: "Blick vom Bildschirm losen",
  habitOneText: "Schau 20 Sekunden lang auf etwas in etwa sechs Metern Entfernung, damit deine Augen pausieren.",
  habitTwoTime: "Einmal pro Stunde",
  habitTwoTitle: "Position verandern",
  habitTwoText: "Steh auf, geh ein paar Schritte oder verandere deine Haltung, bevor sich Unwohlsein aufbaut.",
  habitThreeTime: "Vor konzentrierter Arbeit",
  habitThreeTitle: "Arbeitsplatz einrichten",
  habitThreeText: "Stelle deinen Bildschirm auf Augenhohe und lass die Schultern von den Ohren sinken.",
  habitFourTime: "Zwischen Aufgaben",
  habitFourTitle: "Bewusst atmen",
  habitFourText: "Halte fur drei langsame Atemzuge inne. Dieser kleine Ubergang kann viel bewirken."
});
Object.assign(labels.uk, {
  featuredEyebrow: "Почніть тут",
  featuredTitle: "Три перерви, для яких варто знайти час.",
  featuredText: "Оберіть коротке відновлення, що пасує вашому тілу сьогодні.",
  stretchTime: "02 хв",
  stretchTitle: "Відновлення плечей сидячи",
  stretchText: "Зніміть напругу у верхній частині тіла, не встаючи зі стільця.",
  eyeTime: "01 хв",
  eyeTitle: "20 секунд погляду вдалечінь",
  eyeText: "Дайте зосередженим очам коротку зміну виду.",
  wristTime: "03 хв",
  wristTitle: "Рух для зап'ясть і пальців",
  wristText: "Розслабте малі м'язи, які працюють разом із клавіатурою.",
  habitsEyebrow: "Створіть добріший ритм",
  habitsTitle: "Малі звички, що підтримують робочий день.",
  habitsText: "Ідеального робочого місця не існує. Ці прості перевірки допоможуть вчасно помітити потребу у перерві.",
  habitOneTime: "Кожні 20 хвилин",
  habitOneTitle: "Подивіться за межі екрана",
  habitOneText: "20 секунд дивіться на об'єкт приблизно за шість метрів, щоб дати очам відпочинок.",
  habitTwoTime: "Раз на годину",
  habitTwoTitle: "Змініть положення",
  habitTwoText: "Встаньте, зробіть кілька кроків або змініть поставу, перш ніж з'явиться дискомфорт.",
  habitThreeTime: "Перед зосередженою роботою",
  habitThreeTitle: "Налаштуйте простір",
  habitThreeText: "Розташуйте екран на рівні очей і опустіть плечі подалі від вух.",
  habitFourTime: "Між завданнями",
  habitFourTitle: "Дихайте свідомо",
  habitFourText: "Зробіть паузу для трьох повільних вдихів. Такий перехід має помітний ефект."
});
Object.assign(labels.ru, {
  featuredEyebrow: "Начните здесь",
  featuredTitle: "Три перерыва, для которых стоит найти время.",
  featuredText: "Выберите короткое восстановление, которое подходит вашему телу сегодня.",
  stretchTime: "02 мин",
  stretchTitle: "Восстановление плеч сидя",
  stretchText: "Снимите напряжение в верхней части тела, не вставая со стула.",
  eyeTime: "01 мин",
  eyeTitle: "20 секунд взгляда вдаль",
  eyeText: "Дайте сосредоточенным глазам короткую смену вида.",
  wristTime: "03 мин",
  wristTitle: "Движение для запястий и пальцев",
  wristText: "Расслабьте малые мышцы, работающие вместе с клавиатурой.",
  habitsEyebrow: "Создайте более добрый ритм",
  habitsTitle: "Маленькие привычки для рабочего дня.",
  habitsText: "Идеального рабочего места не существует. Эти простые проверки помогут вовремя заметить потребность в перерыве.",
  habitOneTime: "Каждые 20 минут",
  habitOneTitle: "Посмотрите дальше экрана",
  habitOneText: "20 секунд смотрите на объект примерно в шести метрах, чтобы дать глазам отдохнуть.",
  habitTwoTime: "Раз в час",
  habitTwoTitle: "Смените положение",
  habitTwoText: "Встаньте, сделайте несколько шагов или измените позу до появления дискомфорта.",
  habitThreeTime: "Перед сосредоточенной работой",
  habitThreeTitle: "Настройте пространство",
  habitThreeText: "Расположите экран на уровне глаз и опустите плечи подальше от ушей.",
  habitFourTime: "Между задачами",
  habitFourTitle: "Дышите осознанно",
  habitFourText: "Сделайте паузу для трех медленных вдохов. Такой переход дает заметный эффект."
});
Object.assign(labels.en, {
  howEyebrow: "Keep it simple",
  howTitle: "A break that fits inside a real workday.",
  howText: "No special equipment, no complicated routine. Just a little more care between the things you already need to do.",
  stepOneTitle: "Choose your reset",
  stepOneText: "Find an exercise for the part of your body that needs attention.",
  stepTwoTitle: "Follow the pace",
  stepTwoText: "Use the short instructions and move only within a comfortable range.",
  stepThreeTitle: "Return with intention",
  stepThreeText: "Notice how you feel, then come back to your work with a clearer head."
});
Object.assign(labels.de, {
  howEyebrow: "Einfach halten",
  howTitle: "Eine Pause, die in den echten Arbeitstag passt.",
  howText: "Keine besondere Ausrustung, keine komplizierte Routine. Nur etwas mehr Achtsamkeit zwischen den Dingen, die du ohnehin tust.",
  stepOneTitle: "Deinen Reset wahlen",
  stepOneText: "Finde eine Ubung fur den Teil deines Korpers, der Aufmerksamkeit braucht.",
  stepTwoTitle: "Dem Tempo folgen",
  stepTwoText: "Nutze die kurzen Anweisungen und bewege dich nur in einem angenehmen Bereich.",
  stepThreeTitle: "Bewusst zuruckkehren",
  stepThreeText: "Nimm wahr, wie du dich fuhlst, und kehre mit einem klareren Kopf zur Arbeit zuruck."
});
Object.assign(labels.uk, {
  howEyebrow: "Зробіть простіше",
  howTitle: "Перерва, що вміщується у реальний робочий день.",
  howText: "Без спеціального обладнання та складних вправ. Лише трохи більше турботи між справами, які ви вже виконуєте.",
  stepOneTitle: "Оберіть відновлення",
  stepOneText: "Знайдіть вправу для тієї частини тіла, якій потрібна увага.",
  stepTwoTitle: "Дотримуйтесь темпу",
  stepTwoText: "Користуйтеся короткими інструкціями та рухайтеся лише у комфортному діапазоні.",
  stepThreeTitle: "Поверніться свідомо",
  stepThreeText: "Зверніть увагу на самопочуття і поверніться до роботи з яснішою думкою."
});
Object.assign(labels.ru, {
  howEyebrow: "Сделайте проще",
  howTitle: "Перерыв, который помещается в реальный рабочий день.",
  howText: "Без специального оборудования и сложных упражнений. Просто чуть больше заботы между делами, которые вы уже выполняете.",
  stepOneTitle: "Выберите восстановление",
  stepOneText: "Найдите упражнение для той части тела, которой нужно внимание.",
  stepTwoTitle: "Следуйте темпу",
  stepTwoText: "Используйте короткие инструкции и двигайтесь только в комфортном диапазоне.",
  stepThreeTitle: "Вернитесь осознанно",
  stepThreeText: "Обратите внимание на самочувствие и вернитесь к работе с более ясной головой."
});
Object.assign(labels.en, {
  catalogEyebrow: "Exercise library",
  catalogTitle: "Make room for a better workday.",
  catalogText: "Pick a short, desk-friendly movement that matches what you need right now.",
  categoryBack: "Back & posture",
  categoryEyes: "Eyes & focus",
  categoryHands: "Hands & wrists",
  showMore: "Show more exercises",
  exerciseImage: "Desk worker doing a workplace exercise"
});
Object.assign(labels.de, {
  catalogEyebrow: "Ubungsbibliothek",
  catalogTitle: "Mach Platz fur einen besseren Arbeitstag.",
  catalogText: "Wahle eine kurze, schreibtischfreundliche Bewegung, die zu deinem Bedarf passt.",
  categoryBack: "Rucken & Haltung",
  categoryEyes: "Augen & Fokus",
  categoryHands: "Hande & Handgelenke",
  showMore: "Mehr Ubungen zeigen",
  exerciseImage: "Buroangestellte Person bei einer Ubung am Arbeitsplatz"
});
Object.assign(labels.uk, {
  catalogEyebrow: "Бібліотека вправ",
  catalogTitle: "Знайдіть місце для кращого робочого дня.",
  catalogText: "Оберіть короткий рух для робочого місця, який відповідає вашим потребам зараз.",
  categoryBack: "Спина й постава",
  categoryEyes: "Очі й концентрація",
  categoryHands: "Руки й зап'ястя",
  showMore: "Показати більше вправ",
  exerciseImage: "Офісний працівник виконує вправу на робочому місці"
});
Object.assign(labels.ru, {
  catalogEyebrow: "Библиотека упражнений",
  catalogTitle: "Найдите место для лучшего рабочего дня.",
  catalogText: "Выберите короткое движение для рабочего места, которое отвечает вашим потребностям сейчас.",
  categoryBack: "Спина и осанка",
  categoryEyes: "Глаза и концентрация",
  categoryHands: "Руки и запястья",
  showMore: "Показать больше упражнений",
  exerciseImage: "Офисный работник выполняет упражнение на рабочем месте"
});
var durationUnits = {
  en: "min",
  de: "Min.",
  uk: "хв",
  ru: "мин"
};
function formatDuration(minutes, language) {
  return "".concat(String(minutes).padStart(2, "0"), " ").concat(durationUnits[language]);
}
function catalogCardsMarkup(category, language) {
  return catalogExercises.filter(function (exercise) {
    return exercise.category === category;
  }).map(function (exercise, index) {
    return "<article class=\"catalog-card".concat(index > 5 ? " catalog-card--extra" : "", "\" data-exercise-id=\"").concat(exercise.id, "\" data-exercise-category=\"").concat(category, "\" role=\"button\" tabindex=\"0\" aria-haspopup=\"dialog\" aria-controls=\"exercise-modal\"><img src=\"").concat(exercise.image, "\" alt=\"").concat(exercise.imageAlt[language], "\" /><div><p>").concat(formatDuration(exercise.durationMinutes, language), "</p><h2>").concat(exercise.title[language], "</h2><span>").concat(exercise.description[language], "</span></div></article>");
  }).join("");
}
function sharedHeader() {
  return "\n    <header class=\"site-header\">\n      <div class=\"site-header__inner\">\n        <a class=\"brand\" href=\"index.html\" aria-label=\"Health at Work home\">\n          <span class=\"brand__mark\" aria-hidden=\"true\">+</span><span>Health at Work</span>\n        </a>\n        <nav class=\"site-nav\" id=\"primary-navigation\" aria-label=\"Primary navigation\">\n          <ul>\n            <li><a data-label=\"home\" href=\"index.html\">Home</a></li>\n            <li><a data-label=\"exercises\" href=\"index.html#exercises\">Exercises</a></li>\n            <li><a data-label=\"habits\" href=\"index.html#habits\">Healthy habits</a></li>\n            <li><a data-label=\"about\" href=\"index.html#about\">How it works</a></li>\n            <li><a data-label=\"contact\" href=\"index.html#contact\">Contact</a></li>\n            <li><a class=\"site-nav__catalog\" data-label=\"catalog\" href=\"catalog.html\">Catalog</a></li>\n          </ul>\n        </nav>\n        <div class=\"site-tools\">\n          <label class=\"visually-hidden\" for=\"language-select\" data-label=\"language\">Language</label>\n          <select id=\"language-select\" class=\"language-select\" aria-label=\"Language\">\n            <option value=\"en\">EN</option><option value=\"de\">DE</option><option value=\"uk\">UK</option><option value=\"ru\">RU</option>\n          </select>\n          <button class=\"theme-toggle\" type=\"button\" aria-label=\"Toggle color theme\">\n            <span aria-hidden=\"true\">sun</span><span class=\"theme-toggle__track\"><span></span></span><span aria-hidden=\"true\">moon</span>\n          </button>\n          <button class=\"menu-toggle\" type=\"button\" aria-label=\"Open navigation menu\" aria-expanded=\"false\" aria-controls=\"primary-navigation\">\n            <span></span><span></span><span></span>\n          </button>\n        </div>\n      </div>\n    </header>";
}
function sharedFooter() {
  return "\n    <footer class=\"site-footer\" id=\"contact\">\n      <div class=\"site-footer__inner\">\n        <div><a class=\"brand\" href=\"index.html\"><span class=\"brand__mark\" aria-hidden=\"true\">+</span><span>Health at Work</span></a><p data-label=\"footer\">A calmer, healthier workday starts with a two-minute break.</p></div>\n        <div><h2 data-label=\"contact\">Contact</h2><a href=\"mailto:hello@healthatwork.example\" data-label=\"email\">hello@healthatwork.example</a><a href=\"https://github.com/SvitlanaG\" target=\"_blank\" rel=\"noreferrer\">GitHub</a></div>\n        <p class=\"site-footer__rights\" data-label=\"rights\">Health at Work. Learning project.</p>\n      </div>\n    </footer>";
}
function pageContent() {
  if (page === "home") {
    return "\n      <main>\n        <section class=\"hero\" aria-labelledby=\"hero-title\">\n          <div class=\"hero__content\">\n            <p class=\"eyebrow\" data-label=\"eyebrow\">Your desk-break companion</p>\n            <h1 id=\"hero-title\" data-label=\"heroTitle\">Feel better by the end of your workday.</h1>\n            <p class=\"hero__text\" data-label=\"heroText\">Short, practical exercises for your back, eyes, wrists, and focus. Built for the moments between meetings and commits.</p>\n            <a class=\"button button--primary\" href=\"catalog.html\"><span data-label=\"heroCta\">Explore exercises</span><span aria-hidden=\"true\">\u2192</span></a>\n            <p class=\"hero__note\"><span aria-hidden=\"true\">i</span><span data-label=\"heroNote\">Gentle movement for everyday wellbeing. Stop if anything hurts.</span></p>\n          </div>\n          <div class=\"hero__visual\"><img src=\"".concat(software_dev_namespaceObject, "\" alt=\"Developer taking a short break at a desk\" /></div>\n        </section>\n        <section class=\"featured\" id=\"exercises\" aria-labelledby=\"featured-title\">\n          <div class=\"section-heading\">\n            <div><p class=\"eyebrow\" data-label=\"featuredEyebrow\">Start here</p><h2 id=\"featured-title\" data-label=\"featuredTitle\">Three breaks worth making time for.</h2></div>\n            <p data-label=\"featuredText\">Choose a small reset that meets you where your body is today.</p>\n          </div>\n          <div class=\"exercise-carousel\" role=\"region\" aria-roledescription=\"carousel\" aria-label=\"Featured exercises\">\n            <button class=\"carousel-button\" type=\"button\" data-carousel-direction=\"previous\" aria-label=\"Previous exercise\" aria-controls=\"featured-exercises-track\">\u2190</button>\n            <div class=\"exercise-carousel__track\" id=\"featured-exercises-track\" aria-live=\"polite\">\n              <article class=\"exercise-card is-active\" aria-hidden=\"false\"><img src=\"").concat(dev_shoulder_namespaceObject, "\" alt=\"Desk worker stretching their shoulders\" /><div><p data-label=\"stretchTime\">02 min</p><h3 data-label=\"stretchTitle\">Seated shoulder reset</h3><span data-label=\"stretchText\">Release upper-body tension without leaving your chair.</span></div></article>\n              <article class=\"exercise-card\" aria-hidden=\"true\"><img src=\"").concat(dev_distance_namespaceObject, "\" alt=\"Desk worker taking an eye break\" /><div><p data-label=\"eyeTime\">01 min</p><h3 data-label=\"eyeTitle\">20-second distance gaze</h3><span data-label=\"eyeText\">Give focused eyes a brief change of scenery.</span></div></article>\n              <article class=\"exercise-card\" aria-hidden=\"true\"><img src=\"").concat(dev_finger_flow_namespaceObject, "\" alt=\"Desk worker resting their hands\" /><div><p data-label=\"wristTime\">03 min</p><h3 data-label=\"wristTitle\">Wrist and finger flow</h3><span data-label=\"wristText\">Ease the small muscles that work alongside your keyboard.</span></div></article>\n            </div>\n            <button class=\"carousel-button\" type=\"button\" data-carousel-direction=\"next\" aria-label=\"Next exercise\" aria-controls=\"featured-exercises-track\">\u2192</button>\n          </div>\n          <div class=\"carousel-progress\" aria-label=\"Choose an exercise\">\n            <button class=\"is-active\" type=\"button\" aria-current=\"true\" aria-label=\"Show exercise 1\" aria-controls=\"featured-exercises-track\"></button>\n            <button type=\"button\" aria-current=\"false\" aria-label=\"Show exercise 2\" aria-controls=\"featured-exercises-track\"></button>\n            <button type=\"button\" aria-current=\"false\" aria-label=\"Show exercise 3\" aria-controls=\"featured-exercises-track\"></button>\n          </div>\n        </section>\n        <section class=\"habits\" id=\"habits\" aria-labelledby=\"habits-title\">\n          <div class=\"habits__intro\">\n            <p class=\"eyebrow\" data-label=\"habitsEyebrow\">Build a kinder rhythm</p>\n            <h2 id=\"habits-title\" data-label=\"habitsTitle\">The small habits that carry a workday.</h2>\n            <p data-label=\"habitsText\">There is no perfect desk setup. These lightweight check-ins help you notice when your body and attention need a reset.</p>\n          </div>\n          <ol class=\"habits__list\">\n            <li class=\"habit\"><span class=\"habit__number\">01</span><div><p class=\"habit__time\" data-label=\"habitOneTime\">Every 20 minutes</p><h3 data-label=\"habitOneTitle\">Look beyond the screen</h3><p data-label=\"habitOneText\">Focus on something about 20 feet away for 20 seconds to give your eyes a break.</p></div></li>\n            <li class=\"habit\"><span class=\"habit__number\">02</span><div><p class=\"habit__time\" data-label=\"habitTwoTime\">Once an hour</p><h3 data-label=\"habitTwoTitle\">Change your position</h3><p data-label=\"habitTwoText\">Stand up, take a few steps, or shift your posture before discomfort has a chance to build.</p></div></li>\n            <li class=\"habit\"><span class=\"habit__number\">03</span><div><p class=\"habit__time\" data-label=\"habitThreeTime\">Before deep work</p><h3 data-label=\"habitThreeTitle\">Set up your space</h3><p data-label=\"habitThreeText\">Place your screen at eye level and let your shoulders drop away from your ears.</p></div></li>\n            <li class=\"habit\"><span class=\"habit__number\">04</span><div><p class=\"habit__time\" data-label=\"habitFourTime\">Between tasks</p><h3 data-label=\"habitFourTitle\">Take a breath on purpose</h3><p data-label=\"habitFourText\">Pause for three slow breaths. It is a small transition with a surprisingly large effect.</p></div></li>\n          </ol>\n        </section>\n        <section class=\"how-it-works\" id=\"about\" aria-labelledby=\"how-title\">\n          <div class=\"how-it-works__heading\"><p class=\"eyebrow\" data-label=\"howEyebrow\">Keep it simple</p><h2 id=\"how-title\" data-label=\"howTitle\">A break that fits inside a real workday.</h2><p data-label=\"howText\">No special equipment, no complicated routine. Just a little more care between the things you already need to do.</p></div>\n          <ol class=\"steps\">\n            <li><span>01</span><h3 data-label=\"stepOneTitle\">Choose your reset</h3><p data-label=\"stepOneText\">Find an exercise for the part of your body that needs attention.</p></li>\n            <li><span>02</span><h3 data-label=\"stepTwoTitle\">Follow the pace</h3><p data-label=\"stepTwoText\">Use the short instructions and move only within a comfortable range.</p></li>\n            <li><span>03</span><h3 data-label=\"stepThreeTitle\">Return with intention</h3><p data-label=\"stepThreeText\">Notice how you feel, then come back to your work with a clearer head.</p></li>\n          </ol>\n        </section>\n      </main>");
  }
  if (page === "catalog") {
    var cards = catalogCardsMarkup("back", "en");
    return "<main class=\"catalog-page\"><section class=\"catalog-hero\" aria-labelledby=\"catalog-title\"><p class=\"eyebrow\" data-label=\"catalogEyebrow\">Exercise library</p><h1 id=\"catalog-title\" data-label=\"catalogTitle\">Make room for a better workday.</h1><p data-label=\"catalogText\">Pick a short, desk-friendly movement that matches what you need right now.</p></section><section class=\"catalog-content\" aria-label=\"Exercise catalog\"><div class=\"category-tabs\" role=\"tablist\" aria-label=\"Exercise categories\"><button class=\"category-tab is-active\" type=\"button\" role=\"tab\" aria-selected=\"true\" data-category=\"back\" aria-controls=\"catalog-exercises\" data-label=\"categoryBack\">Back & posture</button><button class=\"category-tab\" type=\"button\" role=\"tab\" aria-selected=\"false\" data-category=\"eyes\" aria-controls=\"catalog-exercises\" data-label=\"categoryEyes\">Eyes & focus</button><button class=\"category-tab\" type=\"button\" role=\"tab\" aria-selected=\"false\" data-category=\"hands\" aria-controls=\"catalog-exercises\" data-label=\"categoryHands\">Hands & wrists</button></div><div class=\"catalog-grid\" id=\"catalog-exercises\" role=\"tabpanel\">".concat(cards, "</div><button class=\"show-more\" type=\"button\" data-label=\"showMore\">Show more exercises <span aria-hidden=\"true\">\u2193</span></button></section><dialog class=\"exercise-modal\" id=\"exercise-modal\" aria-labelledby=\"exercise-modal-title\"><div class=\"exercise-modal__content\" id=\"exercise-modal-content\"></div></dialog></main>");
  }
  return "<main class=\"page-placeholder\"><p class=\"eyebrow\">Health at Work</p><h1>Your workday, with more care</h1><p>The first home-page sections will be added next.</p></main>";
}
function applyLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-label]").forEach(function (element) {
    var key = element.dataset.label;
    var text = labels[language][key];
    if (text) element.textContent = text;
  });
  document.querySelector(".theme-toggle").setAttribute("aria-label", labels[language].theme);
  document.querySelectorAll("[data-alt-label]").forEach(function (element) {
    var text = labels[language][element.dataset.altLabel];
    if (text) element.alt = text;
  });
  document.querySelectorAll("[data-exercise-id]").forEach(function (card) {
    var exercise = catalogExercises.find(function (item) {
      return item.id === card.dataset.exerciseId;
    });
    if (!exercise) return;
    card.querySelector("p").textContent = formatDuration(exercise.durationMinutes, language);
    card.querySelector("h2").textContent = exercise.title[language];
    card.querySelector("span").textContent = exercise.description[language];
    card.querySelector("img").alt = exercise.imageAlt[language];
  });
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}
document.querySelector("#app").innerHTML = "".concat(sharedHeader()).concat(pageContent()).concat(sharedFooter());
var savedTheme = localStorage.getItem(THEME_KEY);
var initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(initialTheme);
var languageSelect = document.querySelector("#language-select");
var menuToggle = document.querySelector(".menu-toggle");
var siteNav = document.querySelector(".site-nav");
var currentLanguage = "en";
function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", labels[currentLanguage][isOpen ? "menuClose" : "menuOpen"]);
  siteNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}
menuToggle.addEventListener("click", function () {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
siteNav.addEventListener("click", function (event) {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
window.matchMedia("(min-width: 769px)").addEventListener("change", function (event) {
  if (event.matches) setMenuOpen(false);
});
function setupCatalogCategorySwitching() {
  var _tabs$find;
  var tabs = _toConsumableArray(document.querySelectorAll(".category-tab"));
  var grid = document.querySelector("#catalog-exercises");
  var showMoreButton = document.querySelector(".show-more");
  if (!grid || tabs.length === 0) return;
  var activeCategory = ((_tabs$find = tabs.find(function (tab) {
    return tab.classList.contains("is-active");
  })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.dataset.category) || "back";
  var expanded = false;
  function updateCardVisibility() {
    var cards = _toConsumableArray(grid.querySelectorAll(".catalog-card"));
    var showAll = window.innerWidth > 768 || expanded;
    var visibleCount = showAll ? cards.length : 4;
    cards.forEach(function (card, index) {
      card.hidden = index >= visibleCount;
    });
    showMoreButton.hidden = showAll || cards.length <= visibleCount;
  }
  function selectCategory(tab) {
    activeCategory = tab.dataset.category;
    expanded = false;
    tabs.forEach(function (categoryTab) {
      var isActive = categoryTab === tab;
      categoryTab.classList.toggle("is-active", isActive);
      categoryTab.setAttribute("aria-selected", String(isActive));
    });
    grid.innerHTML = catalogCardsMarkup(activeCategory, currentLanguage);
    updateCardVisibility();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      return selectCategory(tab);
    });
    tab.addEventListener("keydown", function (event) {
      var nextIndex;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;else if (event.key === "Home") nextIndex = 0;else if (event.key === "End") nextIndex = tabs.length - 1;else return;
      event.preventDefault();
      tabs[nextIndex].focus();
      selectCategory(tabs[nextIndex]);
    });
  });
  showMoreButton.addEventListener("click", function () {
    expanded = true;
    updateCardVisibility();
  });
  window.addEventListener("resize", updateCardVisibility);
  updateCardVisibility();
}
function setupExerciseModal() {
  var grid = document.querySelector("#catalog-exercises");
  var modal = document.querySelector("#exercise-modal");
  var content = document.querySelector("#exercise-modal-content");
  if (!grid || !modal || !content) return;
  var previousBodyOverflow = "";
  var bodyWasLocked = false;
  function openExercise(exercise) {
    var renderOptions = function renderOptions(options, group) {
      return options.map(function (option, index) {
        return "<label class=\"exercise-modal__option\"><input type=\"radio\" name=\"".concat(group, "\" value=\"").concat(option.id, "\" ").concat(index === 0 ? "checked" : "", "><span>").concat(option.label[currentLanguage], "</span></label>");
      }).join("");
    };
    var roundsMarkup = renderOptions(exercise.options, "exercise-variant");
    var paceMarkup = renderOptions(exercise.paceOptions, "exercise-pace");
    content.innerHTML = "<button class=\"exercise-modal__close\" type=\"button\" aria-label=\"".concat(labels[currentLanguage].closeModal, "\">\xD7</button><div class=\"exercise-modal__layout\"><img class=\"exercise-modal__image\" src=\"").concat(exercise.image, "\" alt=\"").concat(exercise.imageAlt[currentLanguage], "\"><div class=\"exercise-modal__details\"><p class=\"eyebrow\">").concat(labels[currentLanguage].exerciseDetails, "</p><h2 id=\"exercise-modal-title\">").concat(exercise.title[currentLanguage], "</h2><p class=\"exercise-modal__description\">").concat(exercise.description[currentLanguage], "</p><fieldset class=\"exercise-modal__variants\"><legend>").concat(labels[currentLanguage].rounds, "</legend>").concat(roundsMarkup, "</fieldset><fieldset class=\"exercise-modal__variants\"><legend>").concat(labels[currentLanguage].pace, "</legend>").concat(paceMarkup, "</fieldset><p class=\"exercise-modal__duration\"><strong>").concat(labels[currentLanguage].sessionLength, ":</strong> <span data-modal-duration></span></p><p class=\"exercise-modal__option-detail\" data-modal-option-detail></p><p class=\"exercise-modal__option-detail\" data-modal-pace-detail></p></div></div>");
    function updateSelection() {
      var roundId = content.querySelector('input[name="exercise-variant"]:checked').value;
      var paceId = content.querySelector('input[name="exercise-pace"]:checked').value;
      var round = exercise.options.find(function (item) {
        return item.id === roundId;
      });
      var pace = exercise.paceOptions.find(function (item) {
        return item.id === paceId;
      });
      content.querySelector("[data-modal-duration]").textContent = formatDuration(exercise.durationMinutes * round.multiplier, currentLanguage);
      content.querySelector("[data-modal-option-detail]").textContent = round.detail[currentLanguage];
      content.querySelector("[data-modal-pace-detail]").textContent = pace.detail[currentLanguage];
    }
    content.querySelector(".exercise-modal__close").addEventListener("click", function () {
      return modal.close();
    });
    content.querySelectorAll('input[name="exercise-variant"], input[name="exercise-pace"]').forEach(function (input) {
      input.addEventListener("change", updateSelection);
    });
    updateSelection();
    previousBodyOverflow = document.body.style.overflow;
    bodyWasLocked = true;
    document.body.style.overflow = "hidden";
    modal.showModal();
  }
  grid.addEventListener("click", function (event) {
    var card = event.target.closest(".catalog-card");
    if (!card) return;
    var exercise = catalogExercises.find(function (item) {
      return item.id === card.dataset.exerciseId;
    });
    if (exercise) openExercise(exercise);
  });
  grid.addEventListener("keydown", function (event) {
    var card = event.target.closest(".catalog-card");
    if (!card || event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    var exercise = catalogExercises.find(function (item) {
      return item.id === card.dataset.exerciseId;
    });
    if (exercise) openExercise(exercise);
  });
  modal.addEventListener("click", function (event) {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", function () {
    if (!bodyWasLocked) return;
    document.body.style.overflow = previousBodyOverflow;
    bodyWasLocked = false;
  });
}
var initialLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
languageSelect.value = initialLanguage;
currentLanguage = initialLanguage;
applyLanguage(initialLanguage);
setupCatalogCategorySwitching();
setupExerciseModal();
setMenuOpen(false);
function setupExerciseCarousel() {
  var carousel = document.querySelector(".exercise-carousel");
  if (!carousel) return null;
  var slides = _toConsumableArray(carousel.querySelectorAll(".exercise-card"));
  var progressButtons = _toConsumableArray(document.querySelectorAll(".carousel-progress button"));
  var previousButton = carousel.querySelector('[data-carousel-direction="previous"]');
  var nextButton = carousel.querySelector('[data-carousel-direction="next"]');
  var activeIndex = 0;
  var rotationTimer;
  var animationTimer;
  function updateCarouselLabels(language) {
    previousButton.setAttribute("aria-label", labels[language].previousExercise);
    nextButton.setAttribute("aria-label", labels[language].nextExercise);
    progressButtons.forEach(function (button, index) {
      button.setAttribute("aria-label", "".concat(labels[language].showExercise, " ").concat(index + 1));
    });
  }
  function showSlide(nextIndex, direction) {
    if (nextIndex === activeIndex) return;
    window.clearTimeout(animationTimer);
    var currentSlide = slides[activeIndex];
    var nextSlide = slides[nextIndex];
    currentSlide.classList.remove("is-active", "slide-from-next", "slide-from-previous");
    currentSlide.setAttribute("aria-hidden", "true");
    nextSlide.classList.add("is-active", direction === "next" ? "slide-from-next" : "slide-from-previous");
    nextSlide.setAttribute("aria-hidden", "false");
    activeIndex = nextIndex;
    progressButtons.forEach(function (button, index) {
      var isActive = index === activeIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });
    animationTimer = window.setTimeout(function () {
      nextSlide.classList.remove("slide-from-next", "slide-from-previous");
    }, 320);
  }
  function showNext() {
    showSlide((activeIndex + 1) % slides.length, "next");
  }
  function showPrevious() {
    showSlide((activeIndex - 1 + slides.length) % slides.length, "previous");
  }
  function stopRotation() {
    window.clearInterval(rotationTimer);
    rotationTimer = undefined;
  }
  function startRotation() {
    stopRotation();
    var activeProgress = progressButtons[activeIndex];
    activeProgress.classList.remove("is-active");
    void activeProgress.offsetWidth;
    activeProgress.classList.add("is-active");
    if (!document.hidden) {
      rotationTimer = window.setInterval(showNext, 6000);
    }
  }
  previousButton.addEventListener("click", function () {
    showPrevious();
    startRotation();
  });
  nextButton.addEventListener("click", function () {
    showNext();
    startRotation();
  });
  progressButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      showSlide(index, index > activeIndex ? "next" : "previous");
      startRotation();
    });
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopRotation();else startRotation();
  });
  return {
    updateCarouselLabels: updateCarouselLabels,
    startRotation: startRotation
  };
}
var exerciseCarousel = setupExerciseCarousel();
if (exerciseCarousel) {
  exerciseCarousel.updateCarouselLabels(initialLanguage);
  exerciseCarousel.startRotation();
}
document.querySelector(".theme-toggle").addEventListener("click", function () {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
languageSelect.addEventListener("change", function (event) {
  var language = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, language);
  currentLanguage = language;
  applyLanguage(language);
  if (exerciseCarousel) exerciseCarousel.updateCarouselLabels(language);
  setMenuOpen(menuToggle.getAttribute("aria-expanded") === "true");
});
/******/ })()
;
//# sourceMappingURL=bundle.302ba3472b7481aae535.js.map