// Form Validation using JavaScript

// Create a function called 'validateform'
function validateform(){  

// Create 3 variables, one for each form field
var name=document.myform.name.value;
var email=document.myform.email.value;
var message=document.myform.message.value;  

// Create an IF statement with 3 sections, one for each form field
// Section 1 - For the NAME field
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;
// Section 2 - For the EMAIL field
}else if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;
//Section 3 - For the MESSAGE field
}else if (message==null || message==""){  
  alert("Message can't be blank");  
  return false;
}

alert("Your message has been sent!");
// Close the 'validateform' function
}