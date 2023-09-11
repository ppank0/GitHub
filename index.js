const ru = document.getElementById('ru');
const en = document.getElementById('en');

ru.addEventListener('click', function() {
  ru.classList.add('ru-clicked');
  en.classList.remove('en-clicked');
  translateTo('ru')
});

en.classList.add('en-clicked');
en.addEventListener('click', function() {
  en.classList.add('en-clicked');
  ru.classList.remove('ru-clicked');
  translateTo('en')
});

const preHeaderText = document.getElementById('pre-header_text');
const preHeaderPink = document.getElementById('pre-header_pink');
const headerTitle = document.getElementById('header-title');
const enrollNowBtn = document.getElementById('btn-enroll_now');
const learnTitle = document.getElementById('learn-title');
const learnP = document.getElementById('learn-p');
const watchBtn = document.getElementById('watch-btn');
const enrollBtn2 = document.getElementById('btn-enroll_now-2');
const microText = document.getElementById('micro-text');
const guestsText = document.getElementById('guests-text');
const coinsText =document.getElementById('coins-text');
const joyceTitle = document.getElementById('joyce-title');
const editingTitle = document.getElementById('editing-title');
const translations = {
    en: {
      preHeaderText: 'A Webflow template for video courses.',
      preHeaderPink: 'See all templates >',
      headerTitle: 'LAUNCH A SUCCESSFUL PODCAST',
      enrollNowBtn: 'Enroll Now',
      learnTitle: 'Learn How To Launch a Successful Podcast',
      learnP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      watchBtn: 'Watch Trailer',
      enrollBtn2: 'Enroll Now',
      microText: 'Learn what the best gear is and where to get it',
      guestsText: 'How to find guests for your episodes',
      coinsText: 'And how to finally make some money',
      joyceTitle: 'Learn with Joyce and Rob, your podcast teachers',
      editingTitle: 'Get the editing skills you need to thrive',
    },
    ru: {
      preHeaderText: 'Шаблон Webflow для видеокурсов.',
      preHeaderPink: 'Просмотреть все шаблоны >',
      headerTitle: 'ЗАПУСТИТЕ УСПЕШНЫЙ ПОДКАСТ',
      enrollNowBtn: 'Регистрация',
      learnTitle: 'Узнайте, как запустить успешный подкаст',
      learnP: '',
      watchBtn: 'Смотрите Трейлер',
      enrollBtn2: 'Регистрация',
      microText: 'Узнайте, какое оборудование является лучшим и где его можно приобрести',
      guestsText: 'Как найти гостей для ваших эпизодов',
      coinsText: 'И как, наконец, заработать немного денег',
      joyceTitle: 'Учитесь вместе с Джойс и Робом, вашими преподавателями подкастов',
      editingTitle: 'Развивайте свои навыки редактирования, чтобы достичь успеха.'
    }
  };

  function translateTo(language) {
    preHeaderText.textContent = translations[language].preHeaderText;
    preHeaderPink.textContent = translations[language].preHeaderPink;
    headerTitle.textContent = translations[language].headerTitle;
    enrollNowBtn.textContent = translations[language].enrollNowBtn;
    learnTitle.textContent = translations[language].learnTitle;
    watchBtn.textContent = translations[language].watchBtn;
    enrollBtn2.textContent = translations[language].enrollBtn2;
    microText.textContent = translations[language].microText;
    guestsText.textContent = translations[language].guestsText;
    coinsText.textContent = translations[language].coinsText;
    joyceTitle.textContent = translations[language].joyceTitle;
    editingTitle.textContent = translations[language].editingTitle;
  }