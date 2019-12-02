//javascript code
function check() {
  var saldo = document.getElementById("saldo").value;

  if (saldo < 25) {
    document.getElementById("tekst").innerHTML = "niet genoeg saldo.";
  } else {
    document.getElementById("tekst").innerHTML = "Voldoende saldo!";
  }
}
