/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");

var quizQuestions = [{
  question: 'In what year internet officially was invented?',
  a: '1981',
  b: '1983',
  c: '1985',
  d: '1987',
  correct: 'B'
}, {
  question: 'In what year first website was launched?',
  a: '1985',
  b: '1987',
  c: '1989',
  d: '1991',
  correct: 'D'
}, {
  question: 'Who invented first computer?',
  a: 'Vint Cerf',
  b: 'Tim Berners-Lee',
  c: 'Charles Babbage',
  d: 'Bob Kahn',
  correct: 'C'
}, {
  question: 'What was the most popular programming language in 2020?',
  a: 'C#',
  b: 'JavaScript',
  c: 'Java',
  d: 'Python',
  correct: 'D'
}, {
  question: 'What is the most common domain extension?',
  a: '.com',
  b: '.net',
  c: '.org',
  d: '.us',
  correct: 'A'
}]; // questions and answers array

var quizBlock = document.getElementById('quiz-block'); //quiz element DIV

var startBtn = document.getElementById('start'); // start quiz button

var result = document.querySelector('.result');
var nextButton = document.querySelector('.quiz__next-btn'); //next question button

var answers = document.querySelectorAll('.answer'); // radio buttons

var questionEl = document.getElementById('question'); // question text element

var answA = document.querySelector('.answer-a');
var answB = document.querySelector('.answer-b');
var answC = document.querySelector('.answer-c');
var answD = document.querySelector('.answer-d'); //answers text elements

var shuffledQuestions = quizQuestions.sort(function () {
  return Math.random() - 0.5;
}); //shuffling questions

var currentQuestionIndex = 0;
var score = 0;

function showResults() {
  quizBlock.classList.remove('show');
  result.innerText = "Your result is ".concat(score, " score(s) from ").concat(quizQuestions.length, " possible");
  result.classList.add('show');
} // show results block at the end


function checkFirstRadio() {
  answers.item(0).checked = true;
} // moving check to frist radio button


function checkAnswer(el) {
  if (el === shuffledQuestions[currentQuestionIndex].correct) {
    score++;
  }
} //check if answer is correct


function getSelected() {
  answers.forEach(function (answersEl) {
    if (answersEl.checked) {
      var selectedAnswer = answersEl.getAttribute('value');
      checkAnswer(selectedAnswer);
      checkFirstRadio();
    }
  });
} // getting checked answer


function showQuestion(currQstn) {
  questionEl.innerText = currQstn.question;
  answA.innerText = currQstn.a;
  answB.innerText = currQstn.b;
  answC.innerText = currQstn.c;
  answD.innerText = currQstn.d;
} // questions refreshing


nextButton.addEventListener('click', function () {
  getSelected();
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  } else {
    showResults();
  }
}); // next question on click

startBtn.addEventListener('click', function (e) {
  quizBlock.classList.add('show');
  e.target.classList.add('hide');
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}); // start quiz on click
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map