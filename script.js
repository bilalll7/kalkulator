function Hitung() {
  var angka_1 = parseFloat(document.getElementById("angka1").value);
  var angka_2 = parseFloat(document.getElementById("angka2").value);
  var operator = document.getElementById("operator").value;
  var hasil;

  if (operator == "tambah") {
    hasil = angka_1 + angka_2;
  } else if (operator == "kurang") {
    hasil = angka_1 - angka_2;
  } else if (operator == "kali") {
    hasil = angka_1 * angka_2;
  } else if (operator == "bagi") {
    hasil = angka_1 / angka_2;
  }

  document.getElementById("hasil").value = hasil;
}
