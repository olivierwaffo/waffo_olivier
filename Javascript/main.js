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
ifcondition();
