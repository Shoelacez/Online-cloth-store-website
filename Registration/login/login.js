function checkDetails() {
    //Defining the document itself
    var formsDoc = document.getElementById("DetailsForm")
  
    //Retrieving values from the document
    var firstName = formsDoc.first;
    var password = formsDoc.password;
  
  
    //creating a checker that will check whether all the values were entered correctly
    //if one of the values entered is wrong, this gets changed to false and the form does not get submitted
    var sumbittedSuccessfully = true;
  
    //Passwords checking
    var passwordsCorrect=false;
   
  
  
    //START OF VALIDATION SECTION OF CODE
  
    //CHECKING THAT THE LENGTH OF THE VALUES ENTERED IS AT LEAST 0, THUS MAKING SURE USER HAS ENTERED SOMETHING
    //If it is 0, the error message pops up and the box gets highlighted in red  - setCustomValidity('Please enter ***')
    //Also if it is 0, sumbittedSuccessfully is changed to false, thus the form does not get submitted
    //If used has entered something else, the form gets validated, box gets de-highlighted - setCustomValidity('')
  
    switch (firstName.value.length) {
      case 0:
        firstName.setCustomValidity('Please enter your Username/UserID');
        sumbittedSuccessfully = false;
        break;
      default:
        firstName.setCustomValidity('');
        break;
    }
  

  
    switch (password.value.length) {
      case 0:
        password.setCustomValidity('Please enter your password');
        sumbittedSuccessfully = false;
        break;
      default:
        password.setCustomValidity('');
        if (password.value=="12345678")
        {
            passwordsCorrect=true;
        }
        else
        {
            alert("Wrong Password");
        }
        break;
    }
  
  

  
    
  
  
    //END OF VALIDATION SECTION OF CODE
  
  
    //START OF THE FORM SUBMITION SECTION OF CODE
  
    //if the value of submittedSuccessfully is true = the form gets submitted and the user gets notified
    //if the value of submittedSuccessfully is false = the form does not get submitted
    //there is no need to add "break" after each statement, as "return true" or "return false" act as break statements
    switch (sumbittedSuccessfully && passwordsCorrect) {
      case true:
        alert("Logged in")
        return true;
      case false:
        return false;
    }
    //END OF THE FORM SUBMISSION SECTION OF CODE
  }