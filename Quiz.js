const quizDB =[
    {
        question: "Q1: Javascript is an _______ language?",
        a: "Object Oriented",
        b: "Object Based",
        c: "Procedural",
        d: "None",
        ans: "ans1"
    },
    {
        question: "Q2: Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both var A and B",
        d: "All of the above",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following are closures in Javascript?",
        a: "Function",
        b: "Variable",
        c: "Object",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: " Q4: What keyword is used to declare an asynchronous function in Javascript?",
        a: "async",
        b: "await",
        c: "setTimeout",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q5: Which object in Javascript doesn’t have a prototype?",
        a: "Base Object",
        b: "All objects have a prototype",
        c: "None object have a prototype",
        d: "None of the above",
        ans: "ans1"
    },
];
 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');
 const answers = document.querySelectorAll('.answer');
 const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
 
 const  loadQuestion =() =>{
 const questionList = quizDB[questionCount];
 question.innerText = questionList.question;
 option1.innerText = questionList.a;
 option2.innerText = questionList.b;
 option3.innerText = questionList.c;
 option4.innerText = questionList.d;
 }
 
 loadQuestion();


const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
  });

  return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if( checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;   

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
        }
    else{
        showScore.innerHTML = `
        <h3> You score ${score}/${quizDB.length} </h3>
        <button class ="btn" onclick ="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }    

});
