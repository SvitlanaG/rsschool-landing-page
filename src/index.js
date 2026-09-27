import "./styles/index.scss";
import heroImage from "./assets/software_dev.jpg";
import heroImageShoulder from "./assets/dev_shoulder.jpeg";
import heroImageDistance from "./assets/dev_distance.jpeg";
import heroImageFingerFlow from "./assets/dev_finger_flow.jpeg";
import { catalogExercises } from "./data/catalog";

const THEME_KEY = "health-at-work-theme";
const LANGUAGE_KEY = "health-at-work-language";
const page = document.body.dataset.page;

const labels = {
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
    heroText:
      "Short, practical exercises for your back, eyes, wrists, and focus. Built for the moments between meetings and commits.",
    heroCta: "Explore exercises",
    heroNote: "Gentle movement for everyday wellbeing. Stop if anything hurts.",
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
    footer:
      "Ein ruhigerer, gesunderer Arbeitstag beginnt mit einer Pause von zwei Minuten.",
    contact: "Kontakt",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Lernprojekt.",
    eyebrow: "Dein Begleiter fur Bildschirmpausen",
    heroTitle: "Fuhle dich am Ende des Arbeitstags besser.",
    heroText:
      "Kurze, praktische Ubungen fur Rucken, Augen, Handgelenke und Fokus. Fur die Zeit zwischen Meetings und Aufgaben.",
    heroCta: "Ubungen entdecken",
    heroNote:
      "Sanfte Bewegung fur das tagliche Wohlbefinden. Hore auf, wenn etwas weh tut.",
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
    footer:
      "Спокійніший і здоровіший робочий день починається з двохвилинної перерви.",
    contact: "Контакти",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Навчальний проєкт.",
    eyebrow: "Ваш помічник для перерв",
    heroTitle: "Почувайтеся краще наприкінці робочого дня.",
    heroText:
      "Короткі практичні вправи для спини, очей, зап'ясть і концентрації. Для моментів між зустрічами та завданнями.",
    heroCta: "Переглянути вправи",
    heroNote:
      "Легкі рухи для щоденного добробуту. Зупиніться, якщо відчуваєте біль.",
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
    footer:
      "Более спокойный и здоровый рабочий день начинается с двухминутного перерыва.",
    contact: "Контакты",
    email: "hello@healthatwork.example",
    rights: "Health at Work. Учебный проект.",
    eyebrow: "Ваш помощник для перерывов",
    heroTitle: "Чувствуйте себя лучше к концу рабочего дня.",
    heroText:
      "Короткие практичные упражнения для спины, глаз, запястий и концентрации. Для моментов между встречами и задачами.",
    heroCta: "Посмотреть упражнения",
    heroNote:
      "Легкие движения для ежедневного благополучия. Остановитесь, если чувствуете боль.",
  },
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
  habitsText:
    "There is no perfect desk setup. These lightweight check-ins help you notice when your body and attention need a reset.",
  habitOneTime: "Every 20 minutes",
  habitOneTitle: "Look beyond the screen",
  habitOneText:
    "Focus on something about 20 feet away for 20 seconds to give your eyes a break.",
  habitTwoTime: "Once an hour",
  habitTwoTitle: "Change your position",
  habitTwoText:
    "Stand up, take a few steps, or shift your posture before discomfort has a chance to build.",
  habitThreeTime: "Before deep work",
  habitThreeTitle: "Set up your space",
  habitThreeText:
    "Place your screen at eye level and let your shoulders drop away from your ears.",
  habitFourTime: "Between tasks",
  habitFourTitle: "Take a breath on purpose",
  habitFourText:
    "Pause for three slow breaths. It is a small transition with a surprisingly large effect.",
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
  habitsText:
    "Es gibt keinen perfekten Arbeitsplatz. Diese kleinen Checks helfen dir, rechtzeitig eine Pause zu bemerken.",
  habitOneTime: "Alle 20 Minuten",
  habitOneTitle: "Blick vom Bildschirm losen",
  habitOneText:
    "Schau 20 Sekunden lang auf etwas in etwa sechs Metern Entfernung, damit deine Augen pausieren.",
  habitTwoTime: "Einmal pro Stunde",
  habitTwoTitle: "Position verandern",
  habitTwoText:
    "Steh auf, geh ein paar Schritte oder verandere deine Haltung, bevor sich Unwohlsein aufbaut.",
  habitThreeTime: "Vor konzentrierter Arbeit",
  habitThreeTitle: "Arbeitsplatz einrichten",
  habitThreeText:
    "Stelle deinen Bildschirm auf Augenhohe und lass die Schultern von den Ohren sinken.",
  habitFourTime: "Zwischen Aufgaben",
  habitFourTitle: "Bewusst atmen",
  habitFourText:
    "Halte fur drei langsame Atemzuge inne. Dieser kleine Ubergang kann viel bewirken.",
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
  habitsText:
    "Ідеального робочого місця не існує. Ці прості перевірки допоможуть вчасно помітити потребу у перерві.",
  habitOneTime: "Кожні 20 хвилин",
  habitOneTitle: "Подивіться за межі екрана",
  habitOneText:
    "20 секунд дивіться на об'єкт приблизно за шість метрів, щоб дати очам відпочинок.",
  habitTwoTime: "Раз на годину",
  habitTwoTitle: "Змініть положення",
  habitTwoText:
    "Встаньте, зробіть кілька кроків або змініть поставу, перш ніж з'явиться дискомфорт.",
  habitThreeTime: "Перед зосередженою роботою",
  habitThreeTitle: "Налаштуйте простір",
  habitThreeText:
    "Розташуйте екран на рівні очей і опустіть плечі подалі від вух.",
  habitFourTime: "Між завданнями",
  habitFourTitle: "Дихайте свідомо",
  habitFourText:
    "Зробіть паузу для трьох повільних вдихів. Такий перехід має помітний ефект.",
});

Object.assign(labels.ru, {
  featuredEyebrow: "Начните здесь",
  featuredTitle: "Три перерыва, для которых стоит найти время.",
  featuredText:
    "Выберите короткое восстановление, которое подходит вашему телу сегодня.",
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
  habitsText:
    "Идеального рабочего места не существует. Эти простые проверки помогут вовремя заметить потребность в перерыве.",
  habitOneTime: "Каждые 20 минут",
  habitOneTitle: "Посмотрите дальше экрана",
  habitOneText:
    "20 секунд смотрите на объект примерно в шести метрах, чтобы дать глазам отдохнуть.",
  habitTwoTime: "Раз в час",
  habitTwoTitle: "Смените положение",
  habitTwoText:
    "Встаньте, сделайте несколько шагов или измените позу до появления дискомфорта.",
  habitThreeTime: "Перед сосредоточенной работой",
  habitThreeTitle: "Настройте пространство",
  habitThreeText:
    "Расположите экран на уровне глаз и опустите плечи подальше от ушей.",
  habitFourTime: "Между задачами",
  habitFourTitle: "Дышите осознанно",
  habitFourText:
    "Сделайте паузу для трех медленных вдохов. Такой переход дает заметный эффект.",
});

Object.assign(labels.en, {
  howEyebrow: "Keep it simple",
  howTitle: "A break that fits inside a real workday.",
  howText:
    "No special equipment, no complicated routine. Just a little more care between the things you already need to do.",
  stepOneTitle: "Choose your reset",
  stepOneText:
    "Find an exercise for the part of your body that needs attention.",
  stepTwoTitle: "Follow the pace",
  stepTwoText:
    "Use the short instructions and move only within a comfortable range.",
  stepThreeTitle: "Return with intention",
  stepThreeText:
    "Notice how you feel, then come back to your work with a clearer head.",
});
Object.assign(labels.de, {
  howEyebrow: "Einfach halten",
  howTitle: "Eine Pause, die in den echten Arbeitstag passt.",
  howText:
    "Keine besondere Ausrustung, keine komplizierte Routine. Nur etwas mehr Achtsamkeit zwischen den Dingen, die du ohnehin tust.",
  stepOneTitle: "Deinen Reset wahlen",
  stepOneText:
    "Finde eine Ubung fur den Teil deines Korpers, der Aufmerksamkeit braucht.",
  stepTwoTitle: "Dem Tempo folgen",
  stepTwoText:
    "Nutze die kurzen Anweisungen und bewege dich nur in einem angenehmen Bereich.",
  stepThreeTitle: "Bewusst zuruckkehren",
  stepThreeText:
    "Nimm wahr, wie du dich fuhlst, und kehre mit einem klareren Kopf zur Arbeit zuruck.",
});
Object.assign(labels.uk, {
  howEyebrow: "Зробіть простіше",
  howTitle: "Перерва, що вміщується у реальний робочий день.",
  howText:
    "Без спеціального обладнання та складних вправ. Лише трохи більше турботи між справами, які ви вже виконуєте.",
  stepOneTitle: "Оберіть відновлення",
  stepOneText: "Знайдіть вправу для тієї частини тіла, якій потрібна увага.",
  stepTwoTitle: "Дотримуйтесь темпу",
  stepTwoText:
    "Користуйтеся короткими інструкціями та рухайтеся лише у комфортному діапазоні.",
  stepThreeTitle: "Поверніться свідомо",
  stepThreeText:
    "Зверніть увагу на самопочуття і поверніться до роботи з яснішою думкою.",
});
Object.assign(labels.ru, {
  howEyebrow: "Сделайте проще",
  howTitle: "Перерыв, который помещается в реальный рабочий день.",
  howText:
    "Без специального оборудования и сложных упражнений. Просто чуть больше заботы между делами, которые вы уже выполняете.",
  stepOneTitle: "Выберите восстановление",
  stepOneText: "Найдите упражнение для той части тела, которой нужно внимание.",
  stepTwoTitle: "Следуйте темпу",
  stepTwoText:
    "Используйте короткие инструкции и двигайтесь только в комфортном диапазоне.",
  stepThreeTitle: "Вернитесь осознанно",
  stepThreeText:
    "Обратите внимание на самочувствие и вернитесь к работе с более ясной головой.",
});

Object.assign(labels.en, {
  catalogEyebrow: "Exercise library",
  catalogTitle: "Make room for a better workday.",
  catalogText:
    "Pick a short, desk-friendly movement that matches what you need right now.",
  categoryBack: "Back & posture",
  categoryEyes: "Eyes & focus",
  categoryHands: "Hands & wrists",
  showMore: "Show more exercises",
  exerciseImage: "Desk worker doing a workplace exercise",
});
Object.assign(labels.de, {
  catalogEyebrow: "Ubungsbibliothek",
  catalogTitle: "Mach Platz fur einen besseren Arbeitstag.",
  catalogText:
    "Wahle eine kurze, schreibtischfreundliche Bewegung, die zu deinem Bedarf passt.",
  categoryBack: "Rucken & Haltung",
  categoryEyes: "Augen & Fokus",
  categoryHands: "Hande & Handgelenke",
  showMore: "Mehr Ubungen zeigen",
  exerciseImage: "Buroangestellte Person bei einer Ubung am Arbeitsplatz",
});
Object.assign(labels.uk, {
  catalogEyebrow: "Бібліотека вправ",
  catalogTitle: "Знайдіть місце для кращого робочого дня.",
  catalogText:
    "Оберіть короткий рух для робочого місця, який відповідає вашим потребам зараз.",
  categoryBack: "Спина й постава",
  categoryEyes: "Очі й концентрація",
  categoryHands: "Руки й зап'ястя",
  showMore: "Показати більше вправ",
  exerciseImage: "Офісний працівник виконує вправу на робочому місці",
});
Object.assign(labels.ru, {
  catalogEyebrow: "Библиотека упражнений",
  catalogTitle: "Найдите место для лучшего рабочего дня.",
  catalogText:
    "Выберите короткое движение для рабочего места, которое отвечает вашим потребностям сейчас.",
  categoryBack: "Спина и осанка",
  categoryEyes: "Глаза и концентрация",
  categoryHands: "Руки и запястья",
  showMore: "Показать больше упражнений",
  exerciseImage: "Офисный работник выполняет упражнение на рабочем месте",
});

const durationUnits = {
  en: "min",
  de: "Min.",
  uk: "хв",
  ru: "мин",
};

function formatDuration(minutes, language) {
  return `${String(minutes).padStart(2, "0")} ${durationUnits[language]}`;
}

function catalogCardsMarkup(category, language) {
  return catalogExercises
    .filter((exercise) => exercise.category === category)
    .map(
      (exercise, index) =>
        `<article class="catalog-card${index > 5 ? " catalog-card--extra" : ""}" data-exercise-id="${exercise.id}" data-exercise-category="${category}" role="button" tabindex="0" aria-haspopup="dialog" aria-controls="exercise-modal"><img src="${exercise.image}" alt="${exercise.imageAlt[language]}" /><div><p>${formatDuration(exercise.durationMinutes, language)}</p><h2>${exercise.title[language]}</h2><span>${exercise.description[language]}</span></div></article>`,
    )
    .join("");
}

function sharedHeader() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="index.html" aria-label="Health at Work home">
          <span class="brand__mark" aria-hidden="true">+</span><span>Health at Work</span>
        </a>
        <nav class="site-nav" id="primary-navigation" aria-label="Primary navigation">
          <ul>
            <li><a data-label="home" href="index.html">Home</a></li>
            <li><a data-label="exercises" href="index.html#exercises">Exercises</a></li>
            <li><a data-label="habits" href="index.html#habits">Healthy habits</a></li>
            <li><a data-label="about" href="index.html#about">How it works</a></li>
            <li><a data-label="contact" href="index.html#contact">Contact</a></li>
            <li><a class="site-nav__catalog" data-label="catalog" href="catalog.html">Catalog</a></li>
          </ul>
        </nav>
        <div class="site-tools">
          <label class="visually-hidden" for="language-select" data-label="language">Language</label>
          <select id="language-select" class="language-select" aria-label="Language">
            <option value="en">EN</option><option value="de">DE</option><option value="uk">UK</option><option value="ru">RU</option>
          </select>
          <button class="theme-toggle" type="button" aria-label="Toggle color theme">
            <span aria-hidden="true">sun</span><span class="theme-toggle__track"><span></span></span><span aria-hidden="true">moon</span>
          </button>
          <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
}

function sharedFooter() {
  return `
    <footer class="site-footer" id="contact">
      <div class="site-footer__inner">
        <div><a class="brand" href="index.html"><span class="brand__mark" aria-hidden="true">+</span><span>Health at Work</span></a><p data-label="footer">A calmer, healthier workday starts with a two-minute break.</p></div>
        <div><h2 data-label="contact">Contact</h2><a href="mailto:hello@healthatwork.example" data-label="email">hello@healthatwork.example</a><a href="https://github.com/SvitlanaG" target="_blank" rel="noreferrer">GitHub</a></div>
        <p class="site-footer__rights" data-label="rights">Health at Work. Learning project.</p>
      </div>
    </footer>`;
}

function pageContent() {
  if (page === "home") {
    return `
      <main>
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero__content">
            <p class="eyebrow" data-label="eyebrow">Your desk-break companion</p>
            <h1 id="hero-title" data-label="heroTitle">Feel better by the end of your workday.</h1>
            <p class="hero__text" data-label="heroText">Short, practical exercises for your back, eyes, wrists, and focus. Built for the moments between meetings and commits.</p>
            <a class="button button--primary" href="catalog.html"><span data-label="heroCta">Explore exercises</span><span aria-hidden="true">→</span></a>
            <p class="hero__note"><span aria-hidden="true">i</span><span data-label="heroNote">Gentle movement for everyday wellbeing. Stop if anything hurts.</span></p>
          </div>
          <div class="hero__visual"><img src="${heroImage}" alt="Developer taking a short break at a desk" /></div>
        </section>
        <section class="featured" id="exercises" aria-labelledby="featured-title">
          <div class="section-heading">
            <div><p class="eyebrow" data-label="featuredEyebrow">Start here</p><h2 id="featured-title" data-label="featuredTitle">Three breaks worth making time for.</h2></div>
            <p data-label="featuredText">Choose a small reset that meets you where your body is today.</p>
          </div>
          <div class="exercise-carousel" role="region" aria-roledescription="carousel" aria-label="Featured exercises">
            <button class="carousel-button" type="button" data-carousel-direction="previous" aria-label="Previous exercise" aria-controls="featured-exercises-track">←</button>
            <div class="exercise-carousel__track" id="featured-exercises-track" aria-live="polite">
              <article class="exercise-card is-active" aria-hidden="false"><img src="${heroImageShoulder}" alt="Desk worker stretching their shoulders" /><div><p data-label="stretchTime">02 min</p><h3 data-label="stretchTitle">Seated shoulder reset</h3><span data-label="stretchText">Release upper-body tension without leaving your chair.</span></div></article>
              <article class="exercise-card" aria-hidden="true"><img src="${heroImageDistance}" alt="Desk worker taking an eye break" /><div><p data-label="eyeTime">01 min</p><h3 data-label="eyeTitle">20-second distance gaze</h3><span data-label="eyeText">Give focused eyes a brief change of scenery.</span></div></article>
              <article class="exercise-card" aria-hidden="true"><img src="${heroImageFingerFlow}" alt="Desk worker resting their hands" /><div><p data-label="wristTime">03 min</p><h3 data-label="wristTitle">Wrist and finger flow</h3><span data-label="wristText">Ease the small muscles that work alongside your keyboard.</span></div></article>
            </div>
            <button class="carousel-button" type="button" data-carousel-direction="next" aria-label="Next exercise" aria-controls="featured-exercises-track">→</button>
          </div>
          <div class="carousel-progress" aria-label="Choose an exercise">
            <button class="is-active" type="button" aria-current="true" aria-label="Show exercise 1" aria-controls="featured-exercises-track"></button>
            <button type="button" aria-current="false" aria-label="Show exercise 2" aria-controls="featured-exercises-track"></button>
            <button type="button" aria-current="false" aria-label="Show exercise 3" aria-controls="featured-exercises-track"></button>
          </div>
        </section>
        <section class="habits" id="habits" aria-labelledby="habits-title">
          <div class="habits__intro">
            <p class="eyebrow" data-label="habitsEyebrow">Build a kinder rhythm</p>
            <h2 id="habits-title" data-label="habitsTitle">The small habits that carry a workday.</h2>
            <p data-label="habitsText">There is no perfect desk setup. These lightweight check-ins help you notice when your body and attention need a reset.</p>
          </div>
          <ol class="habits__list">
            <li class="habit"><span class="habit__number">01</span><div><p class="habit__time" data-label="habitOneTime">Every 20 minutes</p><h3 data-label="habitOneTitle">Look beyond the screen</h3><p data-label="habitOneText">Focus on something about 20 feet away for 20 seconds to give your eyes a break.</p></div></li>
            <li class="habit"><span class="habit__number">02</span><div><p class="habit__time" data-label="habitTwoTime">Once an hour</p><h3 data-label="habitTwoTitle">Change your position</h3><p data-label="habitTwoText">Stand up, take a few steps, or shift your posture before discomfort has a chance to build.</p></div></li>
            <li class="habit"><span class="habit__number">03</span><div><p class="habit__time" data-label="habitThreeTime">Before deep work</p><h3 data-label="habitThreeTitle">Set up your space</h3><p data-label="habitThreeText">Place your screen at eye level and let your shoulders drop away from your ears.</p></div></li>
            <li class="habit"><span class="habit__number">04</span><div><p class="habit__time" data-label="habitFourTime">Between tasks</p><h3 data-label="habitFourTitle">Take a breath on purpose</h3><p data-label="habitFourText">Pause for three slow breaths. It is a small transition with a surprisingly large effect.</p></div></li>
          </ol>
        </section>
        <section class="how-it-works" id="about" aria-labelledby="how-title">
          <div class="how-it-works__heading"><p class="eyebrow" data-label="howEyebrow">Keep it simple</p><h2 id="how-title" data-label="howTitle">A break that fits inside a real workday.</h2><p data-label="howText">No special equipment, no complicated routine. Just a little more care between the things you already need to do.</p></div>
          <ol class="steps">
            <li><span>01</span><h3 data-label="stepOneTitle">Choose your reset</h3><p data-label="stepOneText">Find an exercise for the part of your body that needs attention.</p></li>
            <li><span>02</span><h3 data-label="stepTwoTitle">Follow the pace</h3><p data-label="stepTwoText">Use the short instructions and move only within a comfortable range.</p></li>
            <li><span>03</span><h3 data-label="stepThreeTitle">Return with intention</h3><p data-label="stepThreeText">Notice how you feel, then come back to your work with a clearer head.</p></li>
          </ol>
        </section>
      </main>`;
  }

  if (page === "catalog") {
    const cards = catalogCardsMarkup("back", "en");
    return `<main class="catalog-page"><section class="catalog-hero" aria-labelledby="catalog-title"><p class="eyebrow" data-label="catalogEyebrow">Exercise library</p><h1 id="catalog-title" data-label="catalogTitle">Make room for a better workday.</h1><p data-label="catalogText">Pick a short, desk-friendly movement that matches what you need right now.</p></section><section class="catalog-content" aria-label="Exercise catalog"><div class="category-tabs" role="tablist" aria-label="Exercise categories"><button class="category-tab is-active" type="button" role="tab" aria-selected="true" data-category="back" aria-controls="catalog-exercises" data-label="categoryBack">Back & posture</button><button class="category-tab" type="button" role="tab" aria-selected="false" data-category="eyes" aria-controls="catalog-exercises" data-label="categoryEyes">Eyes & focus</button><button class="category-tab" type="button" role="tab" aria-selected="false" data-category="hands" aria-controls="catalog-exercises" data-label="categoryHands">Hands & wrists</button></div><div class="catalog-grid" id="catalog-exercises" role="tabpanel">${cards}</div><button class="show-more" type="button" data-label="showMore">Show more exercises <span aria-hidden="true">↓</span></button></section><dialog class="exercise-modal" id="exercise-modal" aria-labelledby="exercise-modal-title"><div class="exercise-modal__content" id="exercise-modal-content"></div></dialog></main>`;
  }

  return `<main class="page-placeholder"><p class="eyebrow">Health at Work</p><h1>Your workday, with more care</h1><p>The first home-page sections will be added next.</p></main>`;
}

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-label]").forEach((element) => {
    const key = element.dataset.label;
    const text = labels[language][key];
    if (text) element.textContent = text;
  });
  document
    .querySelector(".theme-toggle")
    .setAttribute("aria-label", labels[language].theme);
  document.querySelectorAll("[data-alt-label]").forEach((element) => {
    const text = labels[language][element.dataset.altLabel];
    if (text) element.alt = text;
  });
  document.querySelectorAll("[data-exercise-id]").forEach((card) => {
    const exercise = catalogExercises.find((item) => item.id === card.dataset.exerciseId);
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

document.querySelector("#app").innerHTML =
  `${sharedHeader()}${pageContent()}${sharedFooter()}`;

const savedTheme = localStorage.getItem(THEME_KEY);
const initialTheme =
  savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
applyTheme(initialTheme);

const languageSelect = document.querySelector("#language-select");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
let currentLanguage = "en";

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    labels[currentLanguage][isOpen ? "menuClose" : "menuOpen"],
  );
  siteNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

window.matchMedia("(min-width: 769px)").addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});

function setupCatalogCategorySwitching() {
  const tabs = [...document.querySelectorAll(".category-tab")];
  const grid = document.querySelector("#catalog-exercises");
  const showMoreButton = document.querySelector(".show-more");
  if (!grid || tabs.length === 0) return;

  let activeCategory = tabs.find((tab) => tab.classList.contains("is-active"))?.dataset.category || "back";
  let expanded = false;

  function updateCardVisibility() {
    const cards = [...grid.querySelectorAll(".catalog-card")];
    const showAll = window.innerWidth > 768 || expanded;
    const visibleCount = showAll ? cards.length : 4;
    cards.forEach((card, index) => {
      card.hidden = index >= visibleCount;
    });
    showMoreButton.hidden = showAll || cards.length <= visibleCount;
  }

  function selectCategory(tab) {
    activeCategory = tab.dataset.category;
    expanded = false;
    tabs.forEach((categoryTab) => {
      const isActive = categoryTab === tab;
      categoryTab.classList.toggle("is-active", isActive);
      categoryTab.setAttribute("aria-selected", String(isActive));
    });
    grid.innerHTML = catalogCardsMarkup(activeCategory, currentLanguage);
    updateCardVisibility();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectCategory(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[nextIndex].focus();
      selectCategory(tabs[nextIndex]);
    });
  });

  showMoreButton.addEventListener("click", () => {
    expanded = true;
    updateCardVisibility();
  });
  window.addEventListener("resize", updateCardVisibility);
  updateCardVisibility();
}

function setupExerciseModal() {
  const grid = document.querySelector("#catalog-exercises");
  const modal = document.querySelector("#exercise-modal");
  const content = document.querySelector("#exercise-modal-content");
  if (!grid || !modal || !content) return;

  let previousBodyOverflow = "";
  let bodyWasLocked = false;

  function openExercise(exercise) {
    const renderOptions = (options, group) => options
      .map((option, index) => `<label class="exercise-modal__option"><input type="radio" name="${group}" value="${option.id}" ${index === 0 ? "checked" : ""}><span>${option.label[currentLanguage]}</span></label>`)
      .join("");
    const roundsMarkup = renderOptions(exercise.options, "exercise-variant");
    const paceMarkup = renderOptions(exercise.paceOptions, "exercise-pace");

    content.innerHTML = `<button class="exercise-modal__close" type="button" aria-label="${labels[currentLanguage].closeModal}">×</button><div class="exercise-modal__layout"><img class="exercise-modal__image" src="${exercise.image}" alt="${exercise.imageAlt[currentLanguage]}"><div class="exercise-modal__details"><p class="eyebrow">${labels[currentLanguage].exerciseDetails}</p><h2 id="exercise-modal-title">${exercise.title[currentLanguage]}</h2><p class="exercise-modal__description">${exercise.description[currentLanguage]}</p><fieldset class="exercise-modal__variants"><legend>${labels[currentLanguage].rounds}</legend>${roundsMarkup}</fieldset><fieldset class="exercise-modal__variants"><legend>${labels[currentLanguage].pace}</legend>${paceMarkup}</fieldset><p class="exercise-modal__duration"><strong>${labels[currentLanguage].sessionLength}:</strong> <span data-modal-duration></span></p><p class="exercise-modal__option-detail" data-modal-option-detail></p><p class="exercise-modal__option-detail" data-modal-pace-detail></p></div></div>`;

    function updateSelection() {
      const roundId = content.querySelector('input[name="exercise-variant"]:checked').value;
      const paceId = content.querySelector('input[name="exercise-pace"]:checked').value;
      const round = exercise.options.find((item) => item.id === roundId);
      const pace = exercise.paceOptions.find((item) => item.id === paceId);
      content.querySelector("[data-modal-duration]").textContent = formatDuration(exercise.durationMinutes * round.multiplier, currentLanguage);
      content.querySelector("[data-modal-option-detail]").textContent = round.detail[currentLanguage];
      content.querySelector("[data-modal-pace-detail]").textContent = pace.detail[currentLanguage];
    }

    content.querySelector(".exercise-modal__close").addEventListener("click", () => modal.close());
    content.querySelectorAll('input[name="exercise-variant"], input[name="exercise-pace"]').forEach((input) => {
      input.addEventListener("change", updateSelection);
    });
    updateSelection();
    previousBodyOverflow = document.body.style.overflow;
    bodyWasLocked = true;
    document.body.style.overflow = "hidden";
    modal.showModal();
  }

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".catalog-card");
    if (!card) return;
    const exercise = catalogExercises.find((item) => item.id === card.dataset.exerciseId);
    if (exercise) openExercise(exercise);
  });
  grid.addEventListener("keydown", (event) => {
    const card = event.target.closest(".catalog-card");
    if (!card || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    const exercise = catalogExercises.find((item) => item.id === card.dataset.exerciseId);
    if (exercise) openExercise(exercise);
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", () => {
    if (!bodyWasLocked) return;
    document.body.style.overflow = previousBodyOverflow;
    bodyWasLocked = false;
  });
}

const initialLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
languageSelect.value = initialLanguage;
currentLanguage = initialLanguage;
applyLanguage(initialLanguage);
setupCatalogCategorySwitching();
setupExerciseModal();
setMenuOpen(false);

function setupExerciseCarousel() {
  const carousel = document.querySelector(".exercise-carousel");
  if (!carousel) return null;

  const slides = [...carousel.querySelectorAll(".exercise-card")];
  const progressButtons = [...document.querySelectorAll(".carousel-progress button")];
  const previousButton = carousel.querySelector('[data-carousel-direction="previous"]');
  const nextButton = carousel.querySelector('[data-carousel-direction="next"]');
  let activeIndex = 0;
  let rotationTimer;
  let animationTimer;

  function updateCarouselLabels(language) {
    previousButton.setAttribute("aria-label", labels[language].previousExercise);
    nextButton.setAttribute("aria-label", labels[language].nextExercise);
    progressButtons.forEach((button, index) => {
      button.setAttribute("aria-label", `${labels[language].showExercise} ${index + 1}`);
    });
  }

  function showSlide(nextIndex, direction) {
    if (nextIndex === activeIndex) return;

    window.clearTimeout(animationTimer);
    const currentSlide = slides[activeIndex];
    const nextSlide = slides[nextIndex];
    currentSlide.classList.remove("is-active", "slide-from-next", "slide-from-previous");
    currentSlide.setAttribute("aria-hidden", "true");
    nextSlide.classList.add("is-active", direction === "next" ? "slide-from-next" : "slide-from-previous");
    nextSlide.setAttribute("aria-hidden", "false");
    activeIndex = nextIndex;

    progressButtons.forEach((button, index) => {
      const isActive = index === activeIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });

    animationTimer = window.setTimeout(() => {
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
    const activeProgress = progressButtons[activeIndex];
    activeProgress.classList.remove("is-active");
    void activeProgress.offsetWidth;
    activeProgress.classList.add("is-active");
    if (!document.hidden) {
      rotationTimer = window.setInterval(showNext, 6000);
    }
  }

  previousButton.addEventListener("click", () => {
    showPrevious();
    startRotation();
  });
  nextButton.addEventListener("click", () => {
    showNext();
    startRotation();
  });
  progressButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showSlide(index, index > activeIndex ? "next" : "previous");
      startRotation();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopRotation();
    else startRotation();
  });

  return { updateCarouselLabels, startRotation };
}

const exerciseCarousel = setupExerciseCarousel();
if (exerciseCarousel) {
  exerciseCarousel.updateCarouselLabels(initialLanguage);
  exerciseCarousel.startRotation();
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  );
});

languageSelect.addEventListener("change", (event) => {
  const language = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, language);
  currentLanguage = language;
  applyLanguage(language);
  if (exerciseCarousel) exerciseCarousel.updateCarouselLabels(language);
  setMenuOpen(menuToggle.getAttribute("aria-expanded") === "true");
});
