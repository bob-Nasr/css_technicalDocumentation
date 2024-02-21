/*---TEST---*/

// question bank
const Questions = [
  {
    id: 0,
    q: "Which of the following tag is used to embed css in html page?",
    a: [
      { text: "<css>", isCorrect: false },
      { text: "<!DOCTYPE html>", isCorrect: false },
      { text: "<script>", isCorrect: false },
      { text: "<style>", isCorrect: true },
    ],
  },

  {
    id: 1,
    q: "Which of the following CSS selectors are used to specify a group of elements?",
    a: [
      { text: "tag", isCorrect: false, isSelected: false },
      { text: "id", isCorrect: false },
      { text: "class", isCorrect: true },
      { text: "both class and tag", isCorrect: false },
    ],
  },

  {
    id: 2,
    q: "Which of the following CSS property is used to make the text bold?",
    a: [
      { text: "text-decoration: bold", isCorrect: false },
      { text: "font-weight: bold", isCorrect: true },
      { text: "font-style: bold", isCorrect: false },
      { text: "text-align: bold", isCorrect: false },
    ],
  },

  {
    id: 3,
    q: "Which of the following CSS style property is used to specify an italic text?",
    a: [
      { text: "style", isCorrect: false, isSelected: false },
      { text: "font", isCorrect: false },
      { text: "font-style", isCorrect: true },
      { text: "@font-face", isCorrect: false },
    ],
  },

  {
    id: 4,
    q: "Which of the following function defines a linear gradient as a CSS image?",
    a: [
      { text: "gradient()", isCorrect: false, isSelected: false },
      { text: "linear-gradient()", isCorrect: true },
      { text: "grayscale()", isCorrect: false },
      { text: "image()", isCorrect: false },
    ],
  },

  {
    id: 5,
    q: "Which of the following is not the property of the CSS box model?",
    a: [
      { text: "margin", isCorrect: false, isSelected: false },
      { text: "color", isCorrect: true },
      { text: "width", isCorrect: false },
      { text: "height", isCorrect: false },
    ],
  },

  {
    id: 6,
    q: "Which of the following CSS property sets the shadow for a box element?",
    a: [
      { text: "set-shadow", isCorrect: false, isSelected: false },
      { text: "box-shadow", isCorrect: true },
      { text: "shadow", isCorrect: false },
      { text: "canvas-shadow", isCorrect: false },
    ],
  },
];

// Iterate
function iterate(id) {
  // display result
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // get question
  const question = document.getElementById("question");
  // display question
  question.innerText = Questions[id].q;

  // get options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");
  // display options
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // get option value T/F
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  op1.style.backgroundColor = "#f3aa92";
  op1.style.color = "#fefefe";
  op2.style.backgroundColor = "#f3aa92";
  op2.style.color = "#fefefe";
  op3.style.backgroundColor = "#f3aa92";
  op3.style.color = "#fefefe";
  op4.style.backgroundColor = "#f3aa92";
  op4.style.color = "#fefefe";

  var selected = "";

  // if op1 -> op4 is selected
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#f65868";
    op1.style.color = "black";
    op2.style.backgroundColor = "#f3aa92";
    op2.style.color = "#fefefe";
    op3.style.backgroundColor = "#f3aa92";
    op3.style.color = "#fefefe";
    op4.style.backgroundColor = "#f3aa92";
    op4.style.color = "#fefefe";
    selected = op1.value;
  });
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#f3aa92";
    op1.style.color = "#fefefe";
    op2.style.backgroundColor = "#f65868";
    op2.style.color = "black";
    op3.style.backgroundColor = "#f3aa92";
    op3.style.color = "#fefefe";
    op4.style.backgroundColor = "#f3aa92";
    op4.style.color = "#fefefe";
    selected = op2.value;
  });
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#f3aa92";
    op1.style.color = "#fefefe";
    op2.style.backgroundColor = "#f3aa92";
    op2.style.color = "#fefefe";
    op3.style.backgroundColor = "#f65868";
    op3.style.color = "black";
    op4.style.backgroundColor = "#f3aa92";
    op4.style.color = "#fefefe";
    selected = op3.value;
  });
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#f3aa92";
    op1.style.color = "#fefefe";
    op2.style.backgroundColor = "#f3aa92";
    op2.style.color = "#fefefe";
    op3.style.backgroundColor = "#f3aa92";
    op3.style.color = "#fefefe";
    op4.style.backgroundColor = "#f65868";
    op4.style.color = "black";
    selected = op4.value;
  });

  // grab evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "lightgreen";
    } else if (selected == "false") {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    } else {
      result[0].innerHTML = "Choose an option";
      result[0].style.color = "black";
    }
  });
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

iterate("0");

next.addEventListener("click", () => {
  if (id < Questions.length) {
    id = Math.floor(Math.random() * Questions.length);
    iterate(id);
    console.log(id);
  }
});
