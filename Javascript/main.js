const element1 = document.getElementById("bamako");
const element2 = document.getElementById("yaounde");
const element3 = document.getElementById("abidjan");

element1.addEventListener("click", myFunctionRep1);
function myFunctionRep1() {
  document.getElementById("response").innerHTML = "Faux";
}

element2.addEventListener("click", myFunctionRep2);
function myFunctionRep2() {
  document.getElementById("response").innerHTML = "Vrai";
}

element3.addEventListener("click", myFunctionRep3);
function myFunctionRep3() {
  document.getElementById("response").innerHTML = "Faux";
}

function declarationExo() {
  let age = 43;
  let fullname = "Olivier WAFFO";
  let status = false;
  let schoolPlace = "Ecole Protestante Marie Coker";
  console.log(typeof age);
  console.log(typeof fullname);
  console.log(typeof status);
  console.log(typeof schoolPlace);
  console.log(age);
  console.log(fullname);
  console.log(status);
  console.log(schoolPlace);
  age = age + 1;
  status = true;
  console.log(age);
  console.log(status);
}

//declarationExo();

function ifcondition() {
  let temperature = 25;
  if (temperature >= 10 && temperature <= 20) {
    console.log("Mettre un Pull");
  } else if (temperature < 10) {
    console.log("Mettre un Manteau");
  } else {
    console.log("Mettre seulemnt un Tee-shirt");
  }
}
//ifcondition();
