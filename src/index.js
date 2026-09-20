import "./styles/index.scss";

const THEME_KEY = "health-at-work-theme";
const LANGUAGE_KEY = "health-at-work-language";
const page = document.body.dataset.page;

const labels = {
  en: { home: "Home", exercises: "Exercises", habits: "Healthy habits", about: "About", catalog: "Catalog", theme: "Toggle color theme", language: "Language", footer: "A calmer, healthier workday starts with a two-minute break.", contact: "Contact", email: "hello@healthatwork.example", rights: "Health at Work. Learning project." },
  de: { home: "Startseite", exercises: "Ubungen", habits: "Gesunde Gewohnheiten", about: "Uber uns", catalog: "Katalog", theme: "Farbschema wechseln", language: "Sprache", footer: "Ein ruhigerer, gesunderer Arbeitstag beginnt mit einer Pause von zwei Minuten.", contact: "Kontakt", email: "hello@healthatwork.example", rights: "Health at Work. Lernprojekt." },
  uk: { home: "Головна", exercises: "Вправи", habits: "Здорові звички", about: "Про нас", catalog: "Каталог", theme: "Змінити кольорову тему", language: "Мова", footer: "Спокійніший і здоровіший робочий день починається з двохвилинної перерви.", contact: "Контакти", email: "hello@healthatwork.example", rights: "Health at Work. Навчальний проєкт." },
  ru: { home: "Главная", exercises: "Упражнения", habits: "Здоровые привычки", about: "О нас", catalog: "Каталог", theme: "Переключить тему", language: "Язык", footer: "Более спокойный и здоровый рабочий день начинается с двухминутного перерыва.", contact: "Контакты", email: "hello@healthatwork.example", rights: "Health at Work. Учебный проект." },
};

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

function pagePlaceholder() {
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

document.querySelector("#app").innerHTML = `${sharedHeader()}${pagePlaceholder()}${sharedFooter()}`;

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
