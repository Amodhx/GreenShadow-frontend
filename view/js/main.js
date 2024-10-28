
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

$("#signInBtn").on('click',()=>{
    let userNameFieldText = $("#userNameField").val();
    let passwordFieldText = $("#passwordField").val();
    if(userNameFieldText != "" && passwordFieldText != ""){
        if(validateEmail(userNameFieldText)){
            checkCredentials(userNameFieldText,passwordFieldText);
        }else{
            alert("Invalid email address!!");
        }
    }

    
});

function validateEmail(email){
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}
function checkCredentials(email,password){
    event.preventDefault();
    window.location.replace('window.html');
}