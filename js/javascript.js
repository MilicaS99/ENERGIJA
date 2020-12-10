function naVrh() {
  window.onscroll(0,0);
}

var brPiksela=window.pageYOffset;

var navbar=document.getElementsByClassName("navbar")[0];

var brPiksela=window.pageYOffset;
window.onscroll = function() {
  var trenPiksela=window.pageYOffset;
  if(brPiksela>trenPiksela) {
    navbar.style.background="rgba(245, 245, 245, 0.800)";
  } else {
    navbar.style.background="rgb(245, 245, 245)";
  }
  brPiksela=trenPiksela;
}

var uslov=false;
function proveraEmail() {
  var pattern1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email=$("#textPolje").val();
  if(pattern1.test(email)) {
    uslov2=true;
  } else {
    uslov2=false;
  };
};

$("#dugmePrijava").click( function() {
  proveraEmail();

  if(uslov) {
    alert("Uspesno ste uneli Vasu email adresu, hvala!")
  } else {
    alert("Uneli ste pogresnu email adresu, molimo Vas pokusajte ponovo.");
  }
});