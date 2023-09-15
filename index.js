const preHeaderText = document.getElementById('pre-header_text');
const preHeaderPink = document.getElementById('pre-header_pink');
const headerTitle = document.getElementById('header-title');
const enrollNowBtn = document.getElementById('btn-enroll_now');
const learnTitle = document.getElementById('learn-title');
const learnP = document.getElementById('learn-p');
const watchBtn = document.getElementById('watch-btn');
const enrollBtn2 = document.getElementById('btn-enroll_now-2');
const microText = document.getElementById('micro-text');
const microP = document.getElementById('micro-p');
const guestsText = document.getElementById('guests-text');
const guestsP = document.getElementById('guests-p');
const coinsText =document.getElementById('coins-text');
const coinsP = document.getElementById('coins-p');
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
      microP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      guestsText: 'How to find guests for your episodes',
      guestsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      coinsText: 'And how to finally make some money',
      coinsP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      joyceTitle: 'Learn with Joyce and Rob, your podcast teachers',
      editingTitle: 'Get the editing skills you need to thrive',
    },
    ru: {
      preHeaderText: 'Шаблон Webflow для видеокурсов.',
      preHeaderPink: 'Просмотреть все шаблоны >',
      headerTitle: 'ЗАПУСТИТЕ УСПЕШНЫЙ ПОДКАСТ',
      enrollNowBtn: 'Регистрация',
      learnTitle: 'Узнайте, как запустить успешный подкаст',
      learnP: 'Мы знаем, что такое скорбь, сидим вместе, консектируем элиту, занимающуюся решением проблем, связанных с временной нетрудоспособностью и великой скорбью аликвы.',
      watchBtn: 'Смотрите',
      enrollBtn2: 'Регистрация',
      microText: 'Узнайте, какое оборудование является лучшим и где его можно приобрести',
      microP: 'Мы знаем, что такое долг, сидим вместе, консектируем элиту, занимающуюся борьбой с ожирением, и делаем это.',
      guestsText: 'Как найти гостей для ваших эпизодов',
      guestsP: 'Мы знаем, что такое долг, сидим вместе, консектируем элиту, занимающуюся борьбой с ожирением, и делаем это.',
      coinsText: 'И как, наконец, заработать немного денег',
      coinsP: 'Мы знаем, что такое долг, сидим вместе, консектируем элиту, занимающуюся борьбой с ожирением, и делаем это.',
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
    learnP.textContent = translations[language].learnP;
    watchBtn.textContent = translations[language].watchBtn;
    enrollBtn2.textContent = translations[language].enrollBtn2;
    microText.textContent = translations[language].microText;
    microP.textContent = translations[language].microP;
    guestsText.textContent = translations[language].guestsText;
    guestsP.textContent = translations[language].guestsP;
    coinsText.textContent = translations[language].coinsText;
    coinsP.textContent = translations[language].coinsP;
    joyceTitle.textContent = translations[language].joyceTitle;
    editingTitle.textContent = translations[language].editingTitle;
  }


const ru = document.getElementById('ru');
const en = document.getElementById('en');
const button = document.querySelector('.header-button');

window.addEventListener('load', function() {
  // Загрузка темы
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }

  // Загрузка языка
  var savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    setLanguage(savedLanguage);
  }
});

ru.addEventListener('click', function() {
  setLanguage('ru');
});

en.addEventListener('click', function() {
  setLanguage('en');
});

button.addEventListener('click', function() {
  if (button.textContent === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

function setTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    setDarkTheme(root);
    button.textContent = 'dark';
  } else {
    setLightTheme(root);
    button.textContent = 'light';
  }
  localStorage.setItem('theme', theme);
}

function setLanguage(language) {
  if (language === 'ru') {
    ru.classList.add('ru-clicked');
    en.classList.remove('en-clicked');
    translateTo('ru');
  } else {
    en.classList.add('en-clicked');
    ru.classList.remove('ru-clicked');
    translateTo('en');
  }
  localStorage.setItem('language', language);
}

function setDarkTheme(root) {
  root.style.setProperty('--title-color', '#fff')
  root.style.setProperty('--subtitle-color', '#fff')
  root.style.setProperty('--bg-color', '#2c2c2ce3');
  root.style.setProperty('--bg-pre_header-color','#989595');
  root.style.setProperty('--bg-footer-color','#989595')
}

function setLightTheme(root) {
  root.style.setProperty('--title-color', '#000')
  root.style.setProperty('--subtitle-color', '#464646')
  root.style.setProperty('--bg-color', '#fff');
  root.style.setProperty('--bg-pre_header-color', '#ededed')
  root.style.setProperty('--bg-footer-color', '#fbfbfb')
}


///Смена картинки 
var image = document.getElementById('video-img');
const imageChangeBtn = document.querySelector('.learn_button-enroll');
var srcImg2 = "/img/editing_skills.png";
var srcImg1 ="/img/learn_how_to_img.png";
var currentImage = 1;

imageChangeBtn.addEventListener('click', function(){
  if (currentImage === 1) {
    image.src = srcImg2;
    currentImage = 2;
  } else {
    image.src = srcImg1;
    currentImage = 1;
  }
  
});

var audioPlayer = document.getElementById('audioPlayer');
var player = document.getElementById('player-img');
const playerBtnChange = document.querySelector('.learn_button-watch');
var srcPause = "/img/icons/pause-icon.svg";
var srcPlayer ="/img/icons/player.svg";
var currentImage = 1;

playerBtnChange.addEventListener('click', function(){
  if (currentImage === 1) {
    audioPlayer.play();
    player.src = srcPause;
    currentImage = 2;
    playerBtnChange.textContent ='pause';
  } else {
    audioPlayer.pause();
    player.src = srcPlayer;
    currentImage = 1;
    playerBtnChange.textContent = 'play';
  }
  
});