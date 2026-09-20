import "./styles/index.scss";
import heroImage from "./assets/software_dev.jpg";
import heroImageShoulder from "./assets/dev_shoulder.jpeg";
import heroImageDistance from "./assets/dev_distance.jpeg";
import heroImageFingerFlow from "./assets/dev_finger_flow.jpeg";

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

const catalogExercises = {
  en: [
    [
      "02 min",
      "Neck release",
      "A slow, seated reset for a stiff neck and shoulders.",
    ],
    [
      "03 min",
      "Seated twist",
      "Create gentle movement through your upper back.",
    ],
    [
      "02 min",
      "Chair chest opener",
      "Counter the rounded posture of a long screen session.",
    ],
    [
      "04 min",
      "Standing side reach",
      "Lengthen the sides of your body after sitting still.",
    ],
    [
      "03 min",
      "Wall-supported posture",
      "Reconnect with a tall, relaxed standing position.",
    ],
    [
      "02 min",
      "Shoulder circles",
      "A simple way to invite more ease into your upper body.",
    ],
    [
      "04 min",
      "Seated hip reset",
      "Bring a little movement back to your hips and lower back.",
    ],
    [
      "03 min",
      "Calm back stretch",
      "Finish a focused block with a comfortable release.",
    ],
  ],
  de: [
    [
      "02 Min.",
      "Nacken lockern",
      "Eine langsame Pause im Sitzen fur einen steifen Nacken und Schultern.",
    ],
    [
      "03 Min.",
      "Drehung im Sitzen",
      "Bringe sanfte Bewegung in deinen oberen Rucken.",
    ],
    [
      "02 Min.",
      "Brustoffner am Stuhl",
      "Wirke der gerundeten Haltung nach langer Bildschirmzeit entgegen.",
    ],
    [
      "04 Min.",
      "Seitliche Streckung im Stehen",
      "Verlangere die Seiten deines Korpers nach langem Sitzen.",
    ],
    [
      "03 Min.",
      "Haltung an der Wand",
      "Finde zu einer aufrechten, entspannten Haltung zuruck.",
    ],
    [
      "02 Min.",
      "Schulterkreisen",
      "Eine einfache Bewegung fur mehr Leichtigkeit im Oberkorper.",
    ],
    [
      "04 Min.",
      "Huftpause im Sitzen",
      "Gib Huften und unterem Rucken wieder etwas Bewegung.",
    ],
    [
      "03 Min.",
      "Ruhige Ruckenstreckung",
      "Beende einen konzentrierten Arbeitsblock mit angenehmer Entlastung.",
    ],
  ],
  uk: [
    [
      "02 хв",
      "Розслаблення шиї",
      "Повільне відновлення сидячи для напруженої шиї та плечей.",
    ],
    [
      "03 хв",
      "Скручування сидячи",
      "Додайте м'якого руху верхній частині спини.",
    ],
    [
      "02 хв",
      "Розкриття грудної клітки",
      "Зменште округлення постави після тривалої роботи за екраном.",
    ],
    [
      "04 хв",
      "Бічне витягування стоячи",
      "Витягніть боки тіла після тривалого сидіння.",
    ],
    [
      "03 хв",
      "Постава біля стіни",
      "Поверніться до високого й розслабленого положення стоячи.",
    ],
    [
      "02 хв",
      "Кола плечима",
      "Простий рух для більшої легкості у верхній частині тіла.",
    ],
    [
      "04 хв",
      "Відновлення стегон сидячи",
      "Поверніть трохи руху стегнам і попереку.",
    ],
    [
      "03 хв",
      "Спокійне розтягування спини",
      "Завершіть зосереджений блок комфортним розслабленням.",
    ],
  ],
  ru: [
    [
      "02 мин",
      "Расслабление шеи",
      "Медленное восстановление сидя для напряженной шеи и плеч.",
    ],
    [
      "03 мин",
      "Скручивание сидя",
      "Добавьте мягкое движение верхней части спины.",
    ],
    [
      "02 мин",
      "Раскрытие грудной клетки",
      "Уменьшите округление осанки после долгой работы за экраном.",
    ],
    [
      "04 мин",
      "Боковое вытягивание стоя",
      "Вытяните боковые части тела после долгого сидения.",
    ],
    [
      "03 мин",
      "Осанка у стены",
      "Вернитесь к высокому и расслабленному положению стоя.",
    ],
    [
      "02 мин",
      "Круги плечами",
      "Простое движение для большей легкости в верхней части тела.",
    ],
    [
      "04 мин",
      "Восстановление бедер сидя",
      "Верните немного движения бедрам и пояснице.",
    ],
    [
      "03 мин",
      "Спокойная растяжка спины",
      "Завершите сосредоточенный блок комфортным расслаблением.",
    ],
  ],
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
            <li><a data-label="about" href="index.html#about">How it works</a></li>
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
              <article class="exercise-card"><img src="${heroImageShoulder}" alt="Desk worker stretching their shoulders" /><div><p data-label="stretchTime">02 min</p><h3 data-label="stretchTitle">Seated shoulder reset</h3><span data-label="stretchText">Release upper-body tension without leaving your chair.</span></div></article>
              <article class="exercise-card"><img src="${heroImageDistance}" alt="Desk worker taking an eye break" /><div><p data-label="eyeTime">01 min</p><h3 data-label="eyeTitle">20-second distance gaze</h3><span data-label="eyeText">Give focused eyes a brief change of scenery.</span></div></article>
              <article class="exercise-card"><img src="${heroImageFingerFlow}" alt="Desk worker resting their hands" /><div><p data-label="wristTime">03 min</p><h3 data-label="wristTitle">Wrist and finger flow</h3><span data-label="wristText">Ease the small muscles that work alongside your keyboard.</span></div></article>
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
        <section class="how-it-works" aria-labelledby="how-title">
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
    const cards = catalogExercises.en
      .map(
        ([time, title, text], index) =>
          `<article class="catalog-card${index > 5 ? " catalog-card--extra" : ""}" data-exercise-index="${index}"><img src="${heroImage}" alt="Desk worker doing a workplace exercise" data-alt-label="exerciseImage" /><div><p data-exercise-field="time">${time}</p><h2 data-exercise-field="title">${title}</h2><span data-exercise-field="text">${text}</span></div></article>`,
      )
      .join("");
    return `<main class="catalog-page"><section class="catalog-hero" aria-labelledby="catalog-title"><p class="eyebrow" data-label="catalogEyebrow">Exercise library</p><h1 id="catalog-title" data-label="catalogTitle">Make room for a better workday.</h1><p data-label="catalogText">Pick a short, desk-friendly movement that matches what you need right now.</p></section><section class="catalog-content" aria-label="Exercise catalog"><div class="category-tabs" role="tablist" aria-label="Exercise categories"><button class="category-tab is-active" type="button" role="tab" aria-selected="true" data-label="categoryBack">Back & posture</button><button class="category-tab" type="button" role="tab" aria-selected="false" data-label="categoryEyes">Eyes & focus</button><button class="category-tab" type="button" role="tab" aria-selected="false" data-label="categoryHands">Hands & wrists</button></div><div class="catalog-grid">${cards}</div><button class="show-more" type="button" data-label="showMore">Show more exercises <span aria-hidden="true">↓</span></button></section></main>`;
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
  document.querySelectorAll("[data-exercise-index]").forEach((card) => {
    const [time, title, text] =
      catalogExercises[language][card.dataset.exerciseIndex];
    card.querySelector('[data-exercise-field="time"]').textContent = time;
    card.querySelector('[data-exercise-field="title"]').textContent = title;
    card.querySelector('[data-exercise-field="text"]').textContent = text;
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
const initialLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
languageSelect.value = initialLanguage;
applyLanguage(initialLanguage);

document.querySelector(".theme-toggle").addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  );
});

languageSelect.addEventListener("change", (event) => {
  const language = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage(language);
});
