  var uslov1=false;
  var uslov2=false;
  
  function proveriIme() {
    var pattern = /^[a-zA-Z]*$/;
    var ime=$("#kontaktIme").val();
    if(pattern.test(ime)) {
      uslov1=true;
    } else {
      uslov1=false;
    };
  };

  function proveraEmail() {
    var pattern1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email=$("#kontaktEmail").val();
    if(pattern1.test(email)) {
      uslov2=true;
    } else {
      uslov2=false;
    };
  };


$("#posaljiDugme").click(function() {

  proveriIme();
  proveraEmail();
  if(uslov1==true && uslov2==true) {
    alert("Uspešno ste uneli podatke! Hvala!");
  } else {
    alert("Uneli ste pogrešne podatke, molimo Vas pokušajte ponovo.");
  };
});

