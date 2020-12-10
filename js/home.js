var index = 0;
prikazi();

function prikazi() {
  var i;
  var slajdovi = document.getElementsByClassName("slajdovi");
  //premota sve slike na pocetku da im display bude none
  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";
  }
  //index je na pocetku 1
  index++;
  //ako je indeks veci od broja slajdova, vrati ga na 1
  if (index > slajdovi.length) {
      index = 1;
    }
//u suprotnom prikazi slajd sa tim indeksom
  slajdovi[index-1].style.display = "grid";
  //ponavljaj funkciju na svakih 3000milisekudni
  setTimeout(prikazi, 3000); 
}


