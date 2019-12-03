//javascript code
function check() {
  var saldo = document.getElementById("saldo").value;

  if (saldo == 500) {
    document.getElementById("tekst").innerHTML = "Salaris is gestort!";
  } else if (saldo > 500) {
    document.getElementById("tekst").innerHTML = "Bonus gestort!!";
  }
}
