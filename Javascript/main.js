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

//document.querySelector(".form").style.visibility = "hidden";
//document.querySelector(".qcm").style.visibility = "hidden";

document.getElementById("qcm").onclick = function () {
  document.getElementById("qcm").classList.remove("w3-yellow");
  document.getElementById("qcm").classList.remove("w3-text-black");
  document.getElementById("qcm").classList.add("w3-black");
  document.getElementById("qcm").classList.add("w3-text-white");
  document.getElementById("form").classList.add("w3-yellow");
  document.getElementById("form").classList.add("w3-text-black");
  document.getElementById("form").classList.remove("w3-black");
  document.getElementById("form").classList.remove("w3-text-white");
  document.querySelector(".div-qcm").hidden = false;
  document.querySelector(".div-form").hidden = true;
};

document.getElementById("form").onclick = function () {
  document.getElementById("form").classList.add("w3-black");
  document.getElementById("form").classList.add("w3-text-white");
  document.getElementById("form").classList.remove("w3-yellow");
  document.getElementById("form").classList.remove("w3-text-black");
  document.getElementById("qcm").classList.remove("w3-black");
  document.getElementById("qcm").classList.remove("w3-text-white");
  document.getElementById("qcm").classList.add("w3-yellow");
  document.getElementById("qcm").classList.add("w3-text-black");
  document.querySelector(".div-form").hidden = false;
  document.querySelector(".div-qcm").hidden = true;
};

/*Affichage de la réponse en fonction du choix de radio button*/
function falseFunction() {
  document.querySelector(".div-qcm").classList.remove("w3-round-xlarge");
  document.getElementById("respContainerQ1").style.backgroundColor = "red";
  document.getElementById("responseQ1").innerHTML = "FAUX";
  document.getElementById("responseQ1").style.color = "white";
  document.getElementById("responseQ1").style.fontSize = 20;
}

function trueFunction() {
  document.querySelector(".div-qcm").classList.add("w3-round-xlarge");
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
    } else if (checkboxes[i].checked && checkboxes[i].value === "false") {
      checkboxChecked.pop();
    }
  }

  /* cette condition affiche la réponse en fonction du  quota de checkbox atteint ou pas */
  if (checkboxChecked.length === 2) {
    document.querySelector(".div-qcm").classList.add("w3-round-xlarge");
    document.getElementById("respContainerQ2").style.backgroundColor = "green";
    document.getElementById("responseQ2").innerHTML = "VRAI";
    document.getElementById("responseQ2").style.color = "white";
    document.getElementById("responseQ2").style.fontSize = 20;
  } else {
    document.querySelector(".div-qcm").classList.remove("w3-round-xlarge");
    document.getElementById("respContainerQ2").style.backgroundColor = "red";
    document.getElementById("responseQ2").innerHTML = "FAUX";
    document.getElementById("responseQ2").style.color = "white";
    document.getElementById("responseQ2").style.fontSize = 20;
  }
}
