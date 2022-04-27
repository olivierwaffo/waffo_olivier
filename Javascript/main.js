/*Start - Form challenge script*/
//validate de formular
document.getElementById("valider").onclick = function () {
  if (
    document.getElementById("tel").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("name").value != "" &&
    document.getElementById("adress").value != ""
  ) {
    document.getElementById("formAlert").classList.remove("w3-red");
    document.getElementById("formAlert").classList.add("w3-green");
    document.getElementById("formAlert").innerHTML =
      "Votre demande a été validé";
  } else {
    document.getElementById("formAlert").classList.remove("w3-green");
    document.getElementById("formAlert").classList.add("w3-red");
    document.getElementById("formAlert").innerHTML =
      "Le formulaire n'est pas complètement renseigné";
  }
};

// check radio button selection
let radioavis = document.getElementById("avis");
let radioreclamation = document.getElementById("reclamation");
radioavis.addEventListener("click", () => {
  document.getElementById("avis").checked = true;
  document.getElementById("reclamation").checked = false;
});

radioreclamation.addEventListener("click", () => {
  document.getElementById("avis").checked = false;
  document.getElementById("reclamation").checked = true;
});

// decoration de l'aspect visuel du formulaire
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
/*End - Form challenge script */

/*Start - QCM challenge script */

// decoration de l'aspect visuel du questionnaire
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

//Start - gestion question 1
/*Affichage de la réponse en fonction du choix de radio button*/
let score = 0;
function falseQ1Function() {
  document.querySelector(".div-qcm").classList.remove("w3-round-xlarge");
  document.querySelector(".div-qcm").style.borderWidth = "3px";
  document.querySelector(".div-qcm").style.borderColor = "blue";
  document.getElementById("respContainerQ1").style.backgroundColor = "red";
  document.getElementById("responseQ1").innerHTML = "FAUX";
  document.getElementById("responseQ1").style.color = "white";
  document.getElementById("responseQ1").style.fontSize = 20;
  document.getElementById("note").innerHTML = score - 1 + "/2";
}

function trueQ1Function() {
  document.querySelector(".div-qcm").classList.add("w3-round-xlarge");
  document.querySelector(".div-qcm").style.borderWidth = "3px";
  document.querySelector(".div-qcm").style.borderColor = "green";
  document.getElementById("respContainerQ1").style.backgroundColor = "green";
  document.getElementById("responseQ1").innerHTML = "VRAI";
  document.getElementById("responseQ1").style.color = "white";
  document.getElementById("responseQ1").style.fontSize = 20;
  document.getElementById("note").innerHTML = score + 1 + "/2";
}
//End - gestion question 1

//Start - gestion question 2

document.getElementById("bamako").onclick = function () {
  falseQ1Function();
};
document.getElementById("yaounde").onclick = function () {
  trueQ1Function();
};
document.getElementById("abidjan").onclick = function () {
  falseQ1Function();
};

//End - gestion question 2

//Start - gestion question 3
function falseQ3Function() {
  document.querySelector(".div-qcm").classList.remove("w3-round-xlarge");
  document.querySelector(".div-qcm").style.borderWidth = "3px";
  document.querySelector(".div-qcm").style.borderColor = "blue";
  document.getElementById("respContainerQ3").style.backgroundColor = "red";
  document.getElementById("responseQ3").innerHTML = "FAUX";
  document.getElementById("responseQ3").style.color = "white";
  document.getElementById("responseQ3").style.fontSize = 20;
  document.getElementById("note").innerHTML = score - 1 + "/2";
}

function trueQ3Function() {
  document.querySelector(".div-qcm").classList.add("w3-round-xlarge");
  document.querySelector(".div-qcm").style.borderWidth = "3px";
  document.querySelector(".div-qcm").style.borderColor = "green";
  document.getElementById("respContainerQ3").style.backgroundColor = "green";
  document.getElementById("responseQ3").innerHTML = "VRAI";
  document.getElementById("responseQ3").style.color = "white";
  document.getElementById("responseQ3").style.fontSize = 20;
  document.getElementById("note").innerHTML = score + 1 + "/2";
}

let rep3 = document.getElementById("pays-select").value;
function Q3_Function() {
  var rep3 = document.getElementById("pays-select").value;
  if (rep3 == "france") {
    document.getElementById("responseQ3").innerHTML = "VRAI";
    trueQ3Function();
  } else {
    document.getElementById("responseQ3").innerHTML = "FAUX";
    falseQ3Function();
  }
}
//End - gestion question 3
/* Debut Question2
valaidate() collecte et compte l'ensemble des valeurs d'input à true et false.
Il fait une boucle et effectue une ajout ou un retrait en fonction du checkbox à true ou à false*/

document.getElementById("btnResp_2").onclick = validate;

function validate() {
  var checkboxes = document.getElementsByName("input");
  var checkboxChecked = [];
  /* cette condition affiche la réponse en fonction du  quota de checkbox atteint ou pas */

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked && checkboxes[i].value === "true") {
      checkboxChecked.push(checkboxes[i]);
    } else if (checkboxes[i].checked && checkboxes[i].value === "false") {
      checkboxChecked.pop();
    }
  }
  if (checkboxChecked.length === 2) {
    document.querySelector(".div-qcm").classList.add("w3-round-xlarge");
    document.querySelector(".div-qcm").style.borderWidth = "3px";
    document.querySelector(".div-qcm").style.borderColor = "green";
    document.getElementById("respContainerQ2").style.backgroundColor = "green";
    document.getElementById("responseQ2").innerHTML = "VRAI";
    document.getElementById("responseQ2").style.color = "white";
    document.getElementById("responseQ2").style.fontSize = 20;
    document.getElementById("note").innerHTML = score + 1 + "/2";
  } else {
    document.querySelector(".div-qcm").classList.remove("w3-round-xlarge");
    document.querySelector(".div-qcm").style.borderWidth = "3px";
    document.querySelector(".div-qcm").style.borderColor = "blue";
    document.getElementById("respContainerQ2").style.backgroundColor = "red";
    document.getElementById("responseQ2").innerHTML = "FAUX";
    document.getElementById("responseQ2").style.color = "white";
    document.getElementById("responseQ2").style.fontSize = 20;
    document.getElementById("note").innerHTML = score - 1 + "/2";
  }
}
/*End - QCM challenge script */
