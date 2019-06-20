
function formValidation(){
	var email = document.getElementById("email");
	var pass = document.getElementById("pass");
	if(email.value ==""||pass.value ==""){
		alert("Fields can not be blanked");
		return false;
	}
	var index = email.value.indexOf("@");
    var indexdot = email.value.indexOf(".");
    if(index<1||indexdot>email.value.length-2||indexdot-index<3){
        alert("Invalid Emailaddress.");
        return false;   
    }
    else
    {
    	alert("ThankYou!You are successfully registered.");
    }
}