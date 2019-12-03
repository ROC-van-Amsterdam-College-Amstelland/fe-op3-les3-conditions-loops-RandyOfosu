//javascript code
function bereken() {
  const getal1 = parseInt(document.getElementById("getal1").value);
  const getal2 = parseInt(document.getElementById("getal2").value);
  let operator = document.getElementById("operator").value;

  if (operator == "+") {
    document.getElementById("antwoord").innerHTML = getal1 + getal2;
  }
  if (operator == "-") {
    document.getElementById("antwoord").innerHTML = getal1 - getal2;
  }
}
