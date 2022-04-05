/* Début Question_1
Click sur les differentes réponses déclenchement de la fonction Vrai ou Faux correspondante*/
document.getElementById("bamako").onclick = function () {
  falseFunction();
};
document.getElementById("yaounde").onclick = function () {
  trueFunction();
};
document.getElementById("abidjan").onclick = function () {
  falseFunction();
};

/*Affichage de la réponse en fonction du choix de radio button*/
function falseFunction() {
  document.getElementById("respContainerQ1").style.backgroundColor = "red";
  document.getElementById("responseQ1").innerHTML = "FAUX";
  document.getElementById("responseQ1").style.color = "white";
  document.getElementById("responseQ1").style.fontSize = 20;
}

function trueFunction() {
  document.getElementById("respContainerQ1").style.backgroundColor = "green";
  document.getElementById("responseQ1").innerHTML = "VRAI";
  document.getElementById("responseQ1").style.color = "white";
  document.getElementById("responseQ1").style.fontSize = 20;
}

/* Debut Question2
valaidate() collecte et compte l'ensemble des valeurs d'input à true et false.
Il fait une boucle et effectue une ajout ou un retrait en fonction du checkbox à true ou à false*/

document.getElementById("response").onclick = validate;
function validate() {
  var checkboxes = document.getElementsByName("input");
  var checkboxChecked = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked && checkboxes[i].value === "true") {
      checkboxChecked.push(checkboxes[i]);
    }else if (checkboxes[i].checked && checkboxes[i].value === "false") {
      checkboxChecked.pop();
    }
  }

/* cette condition affiche la réponse en fonction du  quota de checkbox atteint ou pas */
if(checkboxChecked.length === 2){
  document.getElementById("respContainerQ2").style.backgroundColor = "green";
  document.getElementById("responseQ2").innerHTML = "VRAI";
  document.getElementById("responseQ2").style.color = "white";
  document.getElementById("responseQ2").style.fontSize = 20;
} else{
  document.getElementById("respContainerQ2").style.backgroundColor = "red";
  document.getElementById("responseQ2").innerHTML = "FAUX";
  document.getElementById("responseQ2").style.color = "white";
  document.getElementById("responseQ2").style.fontSize = 20;
}

}



/*affiche les differentes déclarations d'elements*/
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

/*Implémentaion de la condition if statement*/

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
//declarationExo();
//ifcondition();
