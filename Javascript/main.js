document.getElementById("bamako").onclick = function () {
  falseFunction();
};
document.getElementById("yaounde").onclick = function () {
  trueFunction();
};
document.getElementById("abidjan").onclick = function () {
  falseFunction();
};

function falseFunction() {
  document.getElementById("responseQ1").innerHTML = "Faux";
}

function trueFunction() {
  document.getElementById("responseQ1").innerHTML = "Vrai";
}

/*document.getElementById("abidjan").addEventListener("click", myFunctionRep3);
function myFunctionRep3() {
  document.getElementById("response").innerHTML = "Faux";
}*/

document.getElementById("response").onclick = validate;
function validate() {
  var checkboxes = document.getElementsByName("true");
  var checkboxChecked = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked && checkboxes[i].value === "true") {
      checkboxChecked.push(checkboxes[i]);
    } else if (checkboxes[i].checked && checkboxes[i].value === "false") {
      checkboxChecked.length - 1;
    }
  }
  console.log("taille : " + checkboxChecked.length);
  if (checkboxChecked.length === 2) {
    document.getElementById("responseQ2").innerHTML = "Vrai";
  } else {
    document.getElementById("responseQ2").innerHTML = "Faux";
  }
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
