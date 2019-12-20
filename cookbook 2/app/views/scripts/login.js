<script>
  function validateForm() {
    var Name= document.getElementByID("Name").value;
    var usr= document.getElementByID("usr").value;
    var pword= document.getElementByID("pword").value;
    var Email= document.getElementByID("Email").value;
    var error= document.getElementByID("error").value;
    var text;

    error.style.padding = "10px";

    if ((usr == usr) && (pword == pword)) {
      return true;
    }

    if (Name == Name){
      return true;
    }

    if (Email.indexOf("@") == -1){
      text = "Enter a valid Email";
      error.innerHTML = text;
      return false;
    }
    else {
      alert ("Login was unsuccessful, please check your username and or password");
      return false;
    }
    alert ("Thank You for Submitting")
    return true;
  }
</script>
