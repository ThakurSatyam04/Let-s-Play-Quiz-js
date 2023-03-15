const questionsArr = [
    {
    'q' : "Which type of JavaScript language is ___",
    'que' : "",
    'a' : "Object-Oriented",
    'b' : "Object-Based",
    'c' : "Assembly-language",
    'd' : "High-level",
    'correct' : "b",
    },
    {
    'q' : " Arrays in JavaScript are defined by which of the following statements?",
    'que' : "",
    'a' : "It is an ordered list of values",
    'b' : "It is an ordered list of objects",
    'c' : "It is an ordered list of string",
    'd' : "It is an ordered list of functions",
    'correct' : "a",
    },
    {
    'q' : "If an array with five elements a=[1,2,3,4,5]; what will do the expression a.length=0",
    'a' : "checks length of array is 0 or not",
    'b' : "deletes all elements",
    'c' : "heterogeneous",
    'd' : "dense",
    'correct' : "b",
    },
    {
    'q' : "Will the following JavaScript code work?",
    'que' : "var js = (function(x) {return x*x;}(10));",
    'a' : "Exception will be thrown",
    'b' : "Memory leak",
    'c' : "Error",
    'd' : "Yes, perfectly",
    'correct' : "d",
    'Explanation' : "For functions expressed as expressions, the function name is optional in Javascript. Sometimes function expressions are defined and used right away."
    },
    {
    'q' : "Which of the following is not javascript data types?",
    'a' : "Null type",
    'b' : "Undefined type",
    'c' : "Number type",
    'd' : "All of the mentioned",
    'correct' : "d",
    'Explanation' : " JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren’t tied to any specific value type, and each variable can be assigned and reassigned to values of all the types."
    },
    {
    'q' : "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    'a' : "Position",
    'b' : "Window",
    'c' : "Location",
    'd' : "Standard",
    'correct' : "b",
    'Explanation' : "All client-side JavaScript features and APIs are accessed through the Window object. It represents a web browser window or frame, and the identifier window can be used to refer to it."
    },
    {
    'q' : "Which of the following can be used to call a JavaScript Code Snippet?",
    'a' : "Function/Method",
    'b' : "Preprocessor",
    'c' : "Triggering Event",
    'd' : "RMI",
    'correct' : "a",
    'Explanation' : " A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others."
    },
    {
    'q' : "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    'a' : "will work perfectly well on a Windows Machine",
    'b' : "will be displayed as JavaScript text on the browser",
    'c' : "will throw errors and exceptions",
    'd' : "must be restricted to a Unix Machine only",
    'correct' : "a",
    'Explanation' : "Because JS can run on a variety of operating systems, an application written for UNIX will run just as well on Windows."
    },
    {
    'q' : "Which of the following scoping type does JavaScript use?",
    'a' : "Sequential",
    'b' : "Segmental",
    'c' : "Lexical",
    'd' : "Literal",
    'correct' : "c",
    'Explanation' : "JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked."
    },
    {
    'q' : "What is the basic difference between JavaScript and Java?",
    'a' : "Functions are considered as fields",
    'b' : "Functions are values, and there is no hard distinction between methods and fields",
    'c' : "Variables are specific",
    'd' : "There is no difference",
    'correct' : "b",
    'Explanation' : "Java is an object-oriented programming language, while JS is an object-oriented scripting language. The main difference between JavaScript and Java is that functions are values, while methods and fields are not clearly defined."
    },
]

let total = questionsArr.length;
let right = 0;
let wrong = 0;

let index = 0;
let quesBox = document.querySelector("[data-quesbox]");
let optionInput = document.querySelectorAll(".option");
// console.log(quesBox);
const getQuestions = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const question = questionsArr[index];
    // console.log(question);
    quesBox.innerText = `${index+1}) ${question.q} ${"\n"} ${question.que}`;
    optionInput[0].nextElementSibling.innerText = question.a;
    optionInput[1].nextElementSibling.innerText = question.b;
    optionInput[2].nextElementSibling.innerText = question.c;
    optionInput[3].nextElementSibling.innerText = question.d;
    // console.log(right);
    // console.log(wrong);
}

let submitBtn = document.querySelector(".btn");

submitBtn.addEventListener('click',()=>{
    const question = questionsArr[index];
    const ans = getAns();
    if(ans == question.correct){
        right++;
    }
    else{
        wrong++;
    }
    // console.log(ans, question.correct)
    index++;
    getQuestions();
    return;
})

const getAns = ()=>{
    let answer;
    optionInput.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
}

const reset = ()=>{
    optionInput.forEach((input)=>{
        input.checked = false;
    })
}

const endQuiz= ()=>{
    document.querySelector(".container").innerHTML = 
    `
    <div style="text-align:center">
    <h3>Thanks for playing the quiz</h3>
    <h2>Your score is</h2><br>
    <h2">${right}/${total}</h2>
    </div>
    `
}

getQuestions();



