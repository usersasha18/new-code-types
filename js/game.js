const words = 'апрель август белый большой весна взгляд вкус год город декабрь день дождь друг душа еда жара зима июнь июль книга конец лето линия март месяц море мысль надежда ночь осень ответ память песня путь район река родина рука север сентябрь снег солнце счастье тепло утро февраль холод час человек школа январь яблоко язык яма ясно ящик ячейка ягода язычок язык'.split(' ');
// const words = 'function var let const if else for while return true false null undefined class extends new this super import export async await try catch throw'.split(' ');


const wordsCount = words.length;
const gameTime = 30 * 1000;
window.timer = null;
window.gameStart = null;
window.pauseTime = 0;

function addClass(el,name) {
  el.className += ' '+name;
}
function removeClass(el,name) {
  el.className = el.className.replace(name,'');
}

function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex - 1];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
  document.getElementById('words').innerHTML = '';
  for (let i = 0; i < 200; i++) {
    document.getElementById('words').innerHTML += formatWord(randomWord());
  }
  addClass(document.querySelector('.word'), 'current');
  addClass(document.querySelector('.letter'), 'current');

  document.getElementById('info').innerHTML = (gameTime / 1000) + '';
  window.timer = null;
}

function getWpm() {
  const words = [...document.querySelectorAll('.word')];
  const lastTypedWord = document.querySelector('.word.current');
  const lastTypedWordIndex = words.indexOf(lastTypedWord) + 1;
  const typedWords = words.slice(0, lastTypedWordIndex);
  const correctWords = typedWords.filter(word => {
    const letters = [...word.children];
    const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
    const correctLetters = letters.filter(letter => letter.className.includes('correct'));
    return incorrectLetters.length === 0 && correctLetters.length === letters.length;
  });
  return correctWords.length / gameTime * 60000;
}

function saveWpmToLocalStorage(wpm) {
  // Проверяем, есть ли уже сохраненные данные в localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Добавляем новый результат WPM
  users.push({ wpm: wpm });

  // Сохраняем обновленный список пользователей в localStorage
  localStorage.setItem('users', JSON.stringify(users));
}

function gameOver() {
  clearInterval(window.timer);
  addClass(document.getElementById('game'), 'over');
  const result = getWpm();
  document.getElementById('info').innerHTML = `WPM: ${result}`;

  saveWpmToLocalStorage(result);
}


document.getElementById('game').addEventListener('keyup', (event) => {
    const key = event.key;
    const currentWord = document.querySelector('.word.current')
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== " ";
    const isSpace = key === " "
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;
    
  if (document.querySelector('#game.over')) {
    return;
  }

  if (!window.timer && isLetter) {
    window.timer = setInterval(() => {
      if (!window.gameStart) {
        window.gameStart = (new Date()).getTime();
      }
      const currentTime = (new Date()).getTime();
      const msPassed = currentTime - window.gameStart;
      const sPassed = Math.round(msPassed / 1000);
      const sLeft = Math.round((gameTime / 1000) - sPassed);
      if (sLeft <= 0) {
        gameOver();
        return;
      }
      document.getElementById('info').innerHTML = sLeft + '';
    }, 1000);
  }


    if (isLetter) {
      if (currentLetter) {
        addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
        removeClass(currentLetter, 'current');
        if (currentLetter.nextSibling) {
          addClass(currentLetter.nextSibling, 'current');
        }
      } else {
        const incorrectLetter = document.createElement('span');
        incorrectLetter.innerHTML = key;
        incorrectLetter.className = 'letter incorrect extra';
        currentWord.appendChild(incorrectLetter);
      }
    }

    if (isSpace) {
      if (expected !== ' ') {
        const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
        lettersToInvalidate.forEach(letter => {
          addClass(letter, "incorrect")
        });
      }
      removeClass(currentWord, 'current')
      addClass(currentWord.nextSibling, "current")
      if (currentLetter) {
        removeClass(currentLetter, 'current');
      }
       addClass(currentWord.nextSibling.firstChild, 'current');
    }

    if(isBackspace) {
      if(currentLetter && isFirstLetter) {
          removeClass(currentWord, "current")
          addClass(currentWord.previousSibling, "current")
          removeClass(currentLetter, "current")
          addClass(currentWord.previousSibling.lastChild, 'current')
          removeClass(currentWord.previousSibling.lastChild, "incorrect")
          removeClass(currentWord.previousSibling.lastChild, "correct")
      }
      if (currentLetter && !isFirstLetter) {
        removeClass(currentLetter, 'current');
        addClass(currentLetter.previousSibling, 'current');
        removeClass(currentLetter.previousSibling, 'incorrect');
        removeClass(currentLetter.previousSibling, 'correct');
      }

      if (!currentLetter) {
        addClass(currentWord.lastChild, 'current');
        removeClass(currentWord.lastChild, 'incorrect');
        removeClass(currentWord.lastChild, 'correct');
      }    
    }
    if (currentWord.getBoundingClientRect().top > 350) {
      const words = document.getElementById('words');
      const margin = parseInt(words.style.marginTop || '0px');
      words.style.marginTop = (margin - 35) + 'px';
    }
    // передвижение курсора
    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current')
    const cursor = document.querySelector('#cursor')
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + "px"
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? "left" : "right"]  + "px"
  })

  document.getElementById('newGameBtn').addEventListener('click', () => {
    newGame();
    gameOver();
    window.location.reload()
  });

newGame();