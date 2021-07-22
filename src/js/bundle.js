import '../styles/style.scss';

const quizQuestions = [
    {
        question: 'In what year internet officially was invented?',
        a: '1981',
        b: '1983',
        c: '1985',
        d: '1987',
        correct: 'B'
    },

    {
        question: 'In what year first website was launched?',
        a: '1985',
        b: '1987',
        c: '1989',
        d: '1991',
        correct: 'D'
    },
        
    {
        question: 'Who invented first computer?',
        a: 'Vint Cerf',
        b: 'Tim Berners-Lee',
        c: 'Charles Babbage',
        d: 'Bob Kahn',
        correct: 'C'
    },

    {
        question: 'What was the most popular programming language in 2020?',
        a: 'C#',
        b: 'JavaScript',
        c: 'Java',
        d: 'Python',
        correct: 'D'
    },

    {
        question: 'What is the most common domain extension?',
        a: '.com',
        b: '.net',
        c: '.org',
        d: '.us',
        correct: 'A'
    }
];  // questions and answers array

const quizBlock = document.getElementById('quiz-block'); //quiz element DIV

const startBtn = document.getElementById('start'); // start quiz button

const result = document.querySelector('.result');

const nextButton = document.querySelector('.quiz__next-btn'); //next question button

const answers = document.querySelectorAll('.answer'); // radio buttons

const questionEl = document.getElementById('question'); // question text element
const answA = document.querySelector('.answer-a');
const answB = document.querySelector('.answer-b');
const answC = document.querySelector('.answer-c');
const answD = document.querySelector('.answer-d'); //answers text elements

let shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5); //shuffling questions

let currentQuestionIndex = 0;
let score = 0;


function showResults() {
    quizBlock.classList.remove('show');
    result.innerText = `Your result is ${score} score(s) from ${quizQuestions.length} possible`;
    result.classList.add('show');
} // show results block at the end

function checkFirstRadio() {
    answers.item(0).checked = true
} // moving check to frist radio button


function checkAnswer(el) { 
    if(el === shuffledQuestions[currentQuestionIndex].correct) {
        score++;
    }
} //check if answer is correct


function getSelected() {

    answers.forEach((answersEl) => {
        if(answersEl.checked) {
            const selectedAnswer = answersEl.getAttribute('value');
            checkAnswer(selectedAnswer);
            checkFirstRadio();
        }
    })
} // getting checked answer


function showQuestion(currQstn) {

    questionEl.innerText = currQstn.question;
    answA.innerText = currQstn.a;
    answB.innerText = currQstn.b;
    answC.innerText = currQstn.c;
    answD.innerText = currQstn.d;
} // questions refreshing


nextButton.addEventListener('click', () => {

    getSelected();

    currentQuestionIndex++;

    if(currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        showResults();
    }
    
}) // next question on click


startBtn.addEventListener('click', (e) => {
    quizBlock.classList.add('show');
    e.target.classList.add('hide');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}) // start quiz on click