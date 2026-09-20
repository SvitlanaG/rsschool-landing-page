import "./styles/index.scss";
import heroImage from "./assets/software_dev.jpg";

const THEME_KEY = "health-at-work-theme";
const LANGUAGE_KEY = "health-at-work-language";
const page = document.body.dataset.page;

const labels = {
  en: { home: "Home", exercises: "Exercises", habits: "Healthy habits", about: "About", catalog: "Catalog", theme: "Toggle color theme", language: "Language", footer: "A calmer, healthier workday starts with a two-minute break.", contact: "Contact", email: "hello@healthatwork.example", rights: "Health at Work. Learning project.", eyebrow: "Your desk-break companion", heroTitle: "Feel better by the end of your workday.", heroText: "Short, practical exercises for your back, eyes, wrists, and focus. Built for the moments between meetings and commits.", heroCta: "Explore exercises", heroNote: "Gentle movement for everyday wellbeing. Stop if anything hurts." },
  de: { home: "Startseite", exercises: "Ubungen", habits: "Gesunde Gewohnheiten", about: "Uber uns", catalog: "Katalog", theme: "Farbschema wechseln", language: "Sprache", footer: "Ein ruhigerer, gesunderer Arbeitstag beginnt mit einer Pause von zwei Minuten.", contact: "Kontakt", email: "hello@healthatwork.example", rights: "Health at Work. Lernprojekt.", eyebrow: "Dein Begleiter fur Bildschirmpausen", heroTitle: "Fuhle dich am Ende des Arbeitstags besser.", heroText: "Kurze, praktische Ubungen fur Rucken, Augen, Handgelenke und Fokus. Fur die Zeit zwischen Meetings und Aufgaben.", heroCta: "Ubungen entdecken", heroNote: "Sanfte Bewegung fur das tagliche Wohlbefinden. Hore auf, wenn etwas weh tut." },
  uk: { home: "Головна", exercises: "Вправи", habits: "Здорові звички", about: "Про нас", catalog: "Каталог", theme: "Змінити кольорову тему", language: "Мова", footer: "Спокійніший і здоровіший робочий день починається з двохвилинної перерви.", contact: "Контакти", email: "hello@healthatwork.example", rights: "Health at Work. Навчальний проєкт.", eyebrow: "Ваш помічник для перерв", heroTitle: "Почувайтеся краще наприкінці робочого дня.", heroText: "Короткі практичні вправи для спини, очей, зап'ясть і концентрації. Для моментів між зустрічами та завданнями.", heroCta: "Переглянути вправи", heroNote: "Легкі рухи для щоденного добробуту. Зупиніться, якщо відчуваєте біль." },
  ru: { home: "Главная", exercises: "Упражнения", habits: "Здоровые привычки", about: "О нас", catalog: "Каталог", theme: "Переключить тему", language: "Язык", footer: "Более спокойный и здоровый рабочий день начинается с двухминутного перерыва.", contact: "Контакты", email: "hello@healthatwork.example", rights: "Health at Work. Учебный проект.", eyebrow: "Ваш помощник для перерывов", heroTitle: "Чувствуйте себя лучше к концу рабочего дня.", heroText: "Короткие практичные упражнения для спины, глаз, запястий и концентрации. Для моментов между встречами и задачами.", heroCta: "Посмотреть упражнения", heroNote: "Легкие движения для ежедневного благополучия. Остановитесь, если чувствуете боль." },
};

Object.assign(labels.en, {
  featuredEyebrow: "Start here", featuredTitle: "Three breaks worth making time for.", featuredText: "Choose a small reset that meets you where your body is today.",
  stretchTime: "02 min", stretchTitle: "Seated shoulder reset", stretchText: "Release upper-body tension without leaving your chair.", eyeTime: "01 min", eyeTitle: "20-second distance gaze", eyeText: "Give focused eyes a brief change of scenery.", wristTime: "03 min", wristTitle: "Wrist and finger flow", wristText: "Ease the small muscles that work alongside your keyboard.",
  habitsEyebrow: "Build a kinder rhythm", habitsTitle: "The small habits that carry a workday.", habitsText: "There is no perfect desk setup. These lightweight check-ins help you notice when your body and attention need a reset.",
  habitOneTime: "Every 20 minutes", habitOneTitle: "Look beyond the screen", habitOneText: "Focus on something about 20 feet away for 20 seconds to give your eyes a break.", habitTwoTime: "Once an hour", habitTwoTitle: "Change your position", habitTwoText: "Stand up, take a few steps, or shift your posture before discomfort has a chance to build.", habitThreeTime: "Before deep work", habitThreeTitle: "Set up your space", habitThreeText: "Place your screen at eye level and let your shoulders drop away from your ears.", habitFourTime: "Between tasks", habitFourTitle: "Take a breath on purpose", habitFourText: "Pause for three slow breaths. It is a small transition with a surprisingly large effect.",
});

Object.assign(labels.de, {
  featuredEyebrow: "Hier beginnen", featuredTitle: "Drei Pausen, fur die sich Zeit lohnt.", featuredText: "Wahle eine kleine Pause, die zu deinem Korper heute passt.",
  stretchTime: "02 Min.", stretchTitle: "Schulterpause im Sitzen", stretchText: "Lose Verspannungen im Oberkorper direkt am Stuhl.", eyeTime: "01 Min.", eyeTitle: "20 Sekunden in die Ferne", eyeText: "Gib konzentrierten Augen einen kurzen Szenenwechsel.", wristTime: "03 Min.", wristTitle: "Fluss fur Handgelenke und Finger", wristText: "Entspanne die kleinen Muskeln, die an der Tastatur arbeiten.",
  habitsEyebrow: "Ein guterer Rhythmus", habitsTitle: "Kleine Gewohnheiten fur den Arbeitstag.", habitsText: "Es gibt keinen perfekten Arbeitsplatz. Diese kleinen Checks helfen dir, rechtzeitig eine Pause zu bemerken.",
  habitOneTime: "Alle 20 Minuten", habitOneTitle: "Blick vom Bildschirm losen", habitOneText: "Schau 20 Sekunden lang auf etwas in etwa sechs Metern Entfernung, damit deine Augen pausieren.", habitTwoTime: "Einmal pro Stunde", habitTwoTitle: "Position verandern", habitTwoText: "Steh auf, geh ein paar Schritte oder verandere deine Haltung, bevor sich Unwohlsein aufbaut.", habitThreeTime: "Vor konzentrierter Arbeit", habitThreeTitle: "Arbeitsplatz einrichten", habitThreeText: "Stelle deinen Bildschirm auf Augenhohe und lass die Schultern von den Ohren sinken.", habitFourTime: "Zwischen Aufgaben", habitFourTitle: "Bewusst atmen", habitFourText: "Halte fur drei langsame Atemzuge inne. Dieser kleine Ubergang kann viel bewirken.",
});

Object.assign(labels.uk, {
  featuredEyebrow: "Почніть тут", featuredTitle: "Три перерви, для яких варто знайти час.", featuredText: "Оберіть коротке відновлення, що пасує вашому тілу сьогодні.",
  stretchTime: "02 хв", stretchTitle: "Відновлення плечей сидячи", stretchText: "Зніміть напругу у верхній частині тіла, не встаючи зі стільця.", eyeTime: "01 хв", eyeTitle: "20 секунд погляду вдалечінь", eyeText: "Дайте зосередженим очам коротку зміну виду.", wristTime: "03 хв", wristTitle: "Рух для зап'ясть і пальців", wristText: "Розслабте малі м'язи, які працюють разом із клавіатурою.",
  habitsEyebrow: "Створіть добріший ритм", habitsTitle: "Малі звички, що підтримують робочий день.", habitsText: "Ідеального робочого місця не існує. Ці прості перевірки допоможуть вчасно помітити потребу у перерві.",
  habitOneTime: "Кожні 20 хвилин", habitOneTitle: "Подивіться за межі екрана", habitOneText: "20 секунд дивіться на об'єкт приблизно за шість метрів, щоб дати очам відпочинок.", habitTwoTime: "Раз на годину", habitTwoTitle: "Змініть положення", habitTwoText: "Встаньте, зробіть кілька кроків або змініть поставу, перш ніж з'явиться дискомфорт.", habitThreeTime: "Перед зосередженою роботою", habitThreeTitle: "Налаштуйте простір", habitThreeText: "Розташуйте екран на рівні очей і опустіть плечі подалі від вух.", habitFourTime: "Між завданнями", habitFourTitle: "Дихайте свідомо", habitFourText: "Зробіть паузу для трьох повільних вдихів. Такий перехід має помітний ефект.",
});

Object.assign(labels.ru, {
  featuredEyebrow: "Начните здесь", featuredTitle: "Три перерыва, для которых стоит найти время.", featuredText: "Выберите короткое восстановление, которое подходит вашему телу сегодня.",
  stretchTime: "02 мин", stretchTitle: "Восстановление плеч сидя", stretchText: "Снимите напряжение в верхней части тела, не вставая со стула.", eyeTime: "01 мин", eyeTitle: "20 секунд взгляда вдаль", eyeText: "Дайте сосредоточенным глазам короткую смену вида.", wristTime: "03 мин", wristTitle: "Движение для запястий и пальцев", wristText: "Расслабьте малые мышцы, работающие вместе с клавиатурой.",
  habitsEyebrow: "Создайте более добрый ритм", habitsTitle: "Маленькие привычки для рабочего дня.", habitsText: "Идеального рабочего места не существует. Эти простые проверки помогут вовремя заметить потребность в перерыве.",
  habitOneTime: "Каждые 20 минут", habitOneTitle: "Посмотрите дальше экрана", habitOneText: "20 секунд смотрите на объект примерно в шести метрах, чтобы дать глазам отдохнуть.", habitTwoTime: "Раз в час", habitTwoTitle: "Смените положение", habitTwoText: "Встаньте, сделайте несколько шагов или измените позу до появления дискомфорта.", habitThreeTime: "Перед сосредоточенной работой", habitThreeTitle: "Настройте пространство", habitThreeText: "Расположите экран на уровне глаз и опустите плечи подальше от ушей.", habitFourTime: "Между задачами", habitFourTitle: "Дышите осознанно", habitFourText: "Сделайте паузу для трех медленных вдохов. Такой переход дает заметный эффект.",
});

function sharedHeader() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="index.html" aria-label="Health at Work home">
          <span class="brand__mark" aria-hidden="true">+</span><span>Health at Work</span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          <ul>
            <li><a data-label="home" href="index.html">Home</a></li>
            <li><a data-label="exercises" href="index.html#exercises">Exercises</a></li>
            <li><a data-label="habits" href="index.html#habits">Healthy habits</a></li>
            <li><a data-label="about" href="index.html#about">About</a></li>
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
          <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
}

function sharedFooter() {
  return `
    <footer class="site-footer" id="about">
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
          <div class="exercise-carousel" aria-label="Featured exercises">
            <button class="carousel-button" type="button" aria-label="Previous exercise" disabled>←</button>
            <div class="exercise-carousel__track">
              <article class="exercise-card"><img src="${heroImage}" alt="Desk worker stretching their shoulders" /><div><p data-label="stretchTime">02 min</p><h3 data-label="stretchTitle">Seated shoulder reset</h3><span data-label="stretchText">Release upper-body tension without leaving your chair.</span></div></article>
              <article class="exercise-card"><img src="${heroImage}" alt="Desk worker taking an eye break" /><div><p data-label="eyeTime">01 min</p><h3 data-label="eyeTitle">20-second distance gaze</h3><span data-label="eyeText">Give focused eyes a brief change of scenery.</span></div></article>
              <article class="exercise-card"><img src="${heroImage}" alt="Desk worker resting their hands" /><div><p data-label="wristTime">03 min</p><h3 data-label="wristTitle">Wrist and finger flow</h3><span data-label="wristText">Ease the small muscles that work alongside your keyboard.</span></div></article>
            </div>
            <button class="carousel-button" type="button" aria-label="Next exercise">→</button>
          </div>
          <div class="carousel-progress" aria-hidden="true"><span class="is-active"></span><span></span><span></span></div>
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
      </main>`;
  }

  const title = page === "catalog" ? "Exercise catalog" : "Your workday, with more care";
  const text = page === "catalog" ? "The exercise categories and cards will be added next." : "The first home-page sections will be added next.";
  return `<main class="page-placeholder"><p class="eyebrow">Health at Work</p><h1>${title}</h1><p>${text}</p></main>`;
}

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-label]").forEach((element) => {
    const key = element.dataset.label;
    const text = labels[language][key];
    if (text) element.textContent = text;
  });
  document.querySelector(".theme-toggle").setAttribute("aria-label", labels[language].theme);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

document.querySelector("#app").innerHTML = `${sharedHeader()}${pageContent()}${sharedFooter()}`;

const savedTheme = localStorage.getItem(THEME_KEY);
const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(initialTheme);

const languageSelect = document.querySelector("#language-select");
const initialLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
languageSelect.value = initialLanguage;
applyLanguage(initialLanguage);

document.querySelector(".theme-toggle").addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

languageSelect.addEventListener("change", (event) => {
  const language = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage(language);
});
