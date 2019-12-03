//javascript code
function showLoop() {
  let a;
  let text = "";

  for (a = 20; a >= 0; a--) {
    console.log(a);
    text += "Nummer " + a + "<br>";
  }
  document.getElementById("loop").innerHTML = text;
}
