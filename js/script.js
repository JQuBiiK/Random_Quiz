'use strict';

const questions = [
	{
		question: "Что такое операционная система?",
		answers: [
			"Это просто программа на компьютере, как и другие - Word или Chrome",
			"Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
			"Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
			"Нет такого понятия, есть понятие «файловая система»"],
		correctAnswer: "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
	},
	{
		question: "Является ли Android операционной системой?",
		answers: [
			"Да, это такая же ОС, как и другие, просто для мобильных девайсов",
			"Нет, операционные системы бывают только для ПК",
			"Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные",
			"Это домашняя страничка в настройках вашего браузера",
		],
		correctAnswer: "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
	},
	{
		question: "Что такое процессор компьютера?",
		answers: [
			"Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки",
			"Это общее название всех комплектующих компьютера",
			"Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
			"Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
		],
		correctAnswer: "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
	},
	{
		question: "Какие бывают разрядности у современных процессоров?",
		answers: [
			"32 и 64 бита",
			"12 и 32 бита",
			"15 и 32 бита",
			"86 и 64 бита"
		],
		correctAnswer: "32 и 64 бита",
	},
	{
		question: "Какой тип процессора чаще всего используют мобильные девайсы?",
		answers: [
			"iOS использует Intel, остальные используют AMD",
			"Чаще всего используют Intel",
			"Чаще всего используют AMD",
			"Чаще всего используют ARM"
		],
		correctAnswer: "Чаще всего используют ARM",
	},
	{
		question: "Для чего компьютеру нужна RAM?",
		answers: [
			"Для быстрого доступа к данным",
			"Для долгосрочного хранения данных",
			"Для правильной фрагментации памяти",
			"Для дефрагментации данных"
		],
		correctAnswer: "Для быстрого доступа к данным",
	},
	{
		question: "Чем отличается HDD от SSD?",
		answers: [
			"HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее",
			"HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
			"SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
			"SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее"
		],
		correctAnswer: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
	},
	{
		question: "Как отличаются между собой USB?",
		answers: [
			"Бывают только USB 2.0 и 3.2",
			"Бывают только micro-USB и mini-USB",
			"USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)",
			"USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)"
		],
		correctAnswer: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
	},
	{
		question: "Какой файловой системы не существует?",
		answers: [
			"Fat",
			"NTFS",
			"APFS",
			"BolSFS"
		],
		correctAnswer: "BolSFS",
	},
];

let currentQuestionIndex = 0,
	correctAnswers = 0;

const quizContainer = document.getElementById('quiz-container'),
	  resultContainer = document.getElementById('result-container'),
	  questionContainer = document.getElementById('question-container'),
	  answersContainer = document.getElementById('answers-container'),
	  progressBar = document.querySelector('.progress'),
	  currentQuestionLabel = document.getElementById('current-question'),
	  restartButton = document.getElementById('restart-btn'),
	  progressBarBlock = document.querySelector('#progress-bar'),
	  mainTitle = document.querySelector('h1'),
	  resultTitle = document.getElementById('result-title'),
	  h3_1 = document.getElementById('result-message1'),
	  h3_2 = document.getElementById('result-message2'),
	  totalQustionIndex = document.getElementById('total-question');

function shuffleArray(array) {

	for (let i = array.length - 1; i > 0; i--) {

		const j = Math.floor(Math.random() * (i + 1));

		[array[i], array[j]] = [array[j], array[i]];

	}

	return array;

}

function displayQuestion() {

	const currentQuestion = questions[currentQuestionIndex];

	questionContainer.innerText = currentQuestion.question;

	answersContainer.innerHTML = '';

	const shuffledAnswers = shuffleArray([...currentQuestion.answers]);

	shuffledAnswers.forEach(answer => {

		const answerLabel = document.createElement('label');

		answerLabel.classList.add('answer-label');

		const answerInput = document.createElement('input');

		answerInput.setAttribute('type', 'radio');

		answerInput.setAttribute('name', 'answer');

		answerInput.setAttribute('value', answer);

		answerInput.classList.add('answer-input');

		answerInput.onclick = () => checkAnswer(answer);

		const radioSpan = document.createElement('span');

		radioSpan.classList.add('answer-radio');

		const answerText = document.createElement('span');

		answerText.innerText = answer;

		answerLabel.appendChild(answerInput);

		answerLabel.appendChild(radioSpan);

		answerLabel.appendChild(answerText);

		answersContainer.appendChild(answerLabel);

	});

	currentQuestionLabel.innerText = currentQuestionIndex;

	totalQustionIndex.innerText = questions.length;

}

function checkAnswer(answer) {

	const currentQuestion = questions[currentQuestionIndex];

	const resultItem = document.createElement('div');

	resultItem.classList.add('result-item');

	if (answer === currentQuestion.correctAnswer) {

		correctAnswers++;

		resultItem.classList.add('correct');

	} else {

		resultItem.classList.add('incorrect');

	}

	resultItem.innerHTML = `
	<div class="result-item-question">${currentQuestion.question}</div>
	<div class="result-item-answer">${answer}</div>
	`;

	resultContainer.appendChild(resultItem);

	currentQuestionIndex++;

	if (currentQuestionIndex < questions.length) {

		displayQuestion();

		updateProgressBar();

	} else {

		showResult();

	}
}

function updateProgressBar() {

	const progress = (currentQuestionIndex / questions.length) * 100;

	progressBar.style.width = `${progress}%`;

}

function showResult() {

	questionContainer.innerText = '';

	answersContainer.innerHTML = '';

	progressBarBlock.style.display = 'none';

	quizContainer.classList.add('hidden');

	resultContainer.classList.remove('hidden');

	mainTitle.style.display = 'none';
	
	if (correctAnswers === questions.length) {

		resultTitle.innerText = 'Поздравляем!';

		h3_1.innerText = 'Вы правильно ответили на все вопросы.';

		h3_2.innerText = 'Вы действительно отлично разбираетесь в IT.';

		restartButton.classList.add('hidden');

	} else if (correctAnswers === 0) {

		resultTitle.innerText = 'Упс :(';

		h3_1.innerText = 'Вы неправильно ответили на все вопросы.';

		h3_2.innerText = 'Нужно подучить теорию.';

		restartButton.classList.remove('hidden');

	} else {
		resultTitle.innerText = 'Хороший результат!';

		h3_1.innerText = `Вы ответили правильно на ${correctAnswers} вопросов.`;

		h3_2.innerText = 'Так держать!';

		restartButton.classList.remove('hidden');

	}
}

function restartQuiz() {

	currentQuestionIndex = 0;

	correctAnswers = 0;

	resultContainer.innerHTML = '';

	progressBarBlock.style.display = 'block';

	quizContainer.classList.remove('hidden');

	resultContainer.classList.add('hidden');

	restartButton.classList.add('hidden');

	displayQuestion();

	updateProgressBar();

	mainTitle.style.display = 'block';

	resultTitle.innerText = '';

	h3_1.innerText = '';

	h3_2.innerText = '';

}

window.onload = displayQuestion;