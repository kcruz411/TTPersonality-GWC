var kathryn = 0;
var janelle = 0;
var aranna = 0;
var tevani = 0;
var ellen = 0;

var tieK = 0;
var tieJ = 0;
var tieA = 0;
var tieT = 0;
var tieE = 0;

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");
var im = document.getElementById("image");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", isKathryn);
q1a2.addEventListener("click", isJanelle && isAranna && isEllen);
q1a3.addEventListener("click", isTevani);

q2a1.addEventListener("click", isKathryn);
q2a2.addEventListener("click", isJanelle && isAranna);
q2a3.addEventListener("click", isTevani);
q2a4.addEventListener("click", isEllen);
q2a5.addEventListener("click", isNone);

q3a1.addEventListener("click", isKathryn && tieKat);
q3a2.addEventListener("click", isJanelle && tieJan);
q3a3.addEventListener("click", isAranna && tieAra);
q3a4.addEventListener("click", isTevani && tieTev);
q3a5.addEventListener("click", isEllen && tieEll);

q4a1.addEventListener("click", isKathryn);
q4a2.addEventListener("click", isJanelle);
q4a3.addEventListener("click", isAranna);
q4a4.addEventListener("click", isEllen);
q4a5.addEventListener("click", isTevani);

q5a1.addEventListener("click", isKathryn);
q5a2.addEventListener("click", isJanelle);
q5a3.addEventListener("click", isAranna);
q5a4.addEventListener("click", isTevani);
q5a5.addEventListener("click", isEllen);

q6a1.addEventListener("click", isKathryn && isJanelle);
q6a2.addEventListener("click", isAranna && isTevani && isEllen);
// Track dog score and check if quiz is complete

function tieKat()
  {
    tieK += 1;
  }

function tieJan()
  {
    tieJ += 1;
  }

function tieAra()
  {
    tieA += 1;
  }

function tieTev()
  {
    tieT += 1;
  }

function tieEll()
  {
    tieE += 1;
  }

function isKathryn() {
  kathryn += 1; 
  questionCount += 1;
  console.log("Kathryn: " + kathryn);

  if (questionCount >= 5) {
    updateResult();
  }
}

function isEllen() {
  ellen += 1; 
  questionCount += 1;
  console.log("Ellen: " + ellen);

  if (questionCount >= 5) {
    updateResult();
  }
}

function isJanelle() {
  janelle += 1; 
  questionCount += 1;
  console.log("Janelle: " + janelle);

  if (questionCount >= 5) {
    updateResult();
  }
}

function isAranna() {
  aranna += 1; 
  questionCount += 1;
  console.log("Aranna: " + aranna);

  if (questionCount >= 5) {
    updateResult();
  }
}

function isTevani() {
  tevani += 1; 
  questionCount += 1;
  console.log("Tevani: " + tevani);

  if (questionCount >= 5) {
    updateResult();
  }
}

function isNone() {
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

// Update quiz result
function updateResult() {
   if (kathryn > janelle && kathryn > aranna && kathryn > tevani && kathryn > ellen) {
    result.innerHTML = "You're the most like Kathryn!";
    im.innerHTML="<img src=\"kathryn.jpg\" width=\"100px\" height=\"100px\">";
  } 
  else if (janelle > kathryn && janelle > aranna && janelle > tevani && janelle > ellen) {
    result.innerHTML = "You're the most like Janelle!";
    im.innerHTML="<img src=\"janelle.jpg\" width=\"100px\" height=\"100px\">";
  }
  else if (aranna > kathryn && aranna > janelle && aranna > tevani && aranna > ellen) {
    result.innerHTML = "You're the most like Aranna!";
    im.innerHTML="<img src=\"aranna.jpg\" width=\"100px\" height=\"100px\">";
  }
  else if (tevani > kathryn && tevani > janelle && tevani > aranna && tevani > ellen)
  {
    result.innerHTML = "You're the most like Tevani!";
    im.innerHTML="<img src=\"tevani.jpg\" width=\"100px\" height=\"100px\">";
  }
  else if (ellen > kathryn && ellen > aranna && ellen > tevani && ellen > janelle) {
    result.innerHTML = "You're the most like Ellen!";
    im.innerHTML="<img src=\"ellen.jpg\" width=\"100px\" height=\"100px\">";
  }
  else{ //ties
    
  if (tieK > tieJ && tieK > tieA && tieK > tieT && tieK > tieE) {
    result.innerHTML = "You're the most like Kathryn!";
    im.innerHTML="<img src=\"kathryn.jpg\" width=\"100px\" height=\"100px\">";
  } 
  if (tieJ > tieK && tieJ > tieA && tieJ > tieT && tieJ > tieE) {
    result.innerHTML = "You're the most like Janelle!";
     im.innerHTML="<img src=\"janelle.jpg\" width=\"100px\" height=\"100px\">";
  }
  if (tieA > tieJ && tieA > tieK && tieA > tieT && tieA > tieE) {
    result.innerHTML = "You're the most like Aranna!";
    im.innerHTML="<img src=\"aranna.jpg\" width=\"100px\" height=\"100px\">";
  }
  if (tieT > tieJ && tieT > tieA && tieT > tieK && tieT > tieE)
  {
    result.innerHTML = "You're the most like Tevani!";
    im.innerHTML="<img src=\"tevani.jpg\" width=\"100px\" height=\"100px\">";
  }
   if (tieE > tieJ && tieE > tieA && tieE > tieK && tieE > tieT)
  {
    result.innerHTML = "You're the most like Ellen!";
    im.innerHTML="<img src=\"ellen.jpg\" width=\"100px\" height=\"100px\">";
  } 
  }
}