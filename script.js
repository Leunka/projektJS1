function vypocet() {
    var polomer = document.getElementById("polomer").value;
    var objem = vypocetObjemuKoule(polomer);
    document.getElementById("vysledek").innerHTML = "Objem koule je " + objem + " cm³.";
  }

  function vypocetObjemuKoule(polomer) {
    var objem = (4/3) * Math.PI * Math.pow(polomer, 3);
    return objem.toFixed(2);
  }


  function kontrola() {
    var polomerzadany = document.getElementById("polomerzadany").value;
    let vysledekzadany = document.getElementById("vysledekvcm").value;
    let vysledekvypocitany = vypocetObjemuKoule(polomerzadany);
    if (vysledekzadany == vysledekvypocitany) {
        document.getElementById("kontrolaVysledku").innerHTML = "Výsledek je dobře";
      } else {
        document.getElementById("kontrolaVysledku").innerHTML = "Výsledek je špatně";
      }
  }
