import {UserApi} from "../../api/userApi.js";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const user_api = new UserApi();

$("#signInBtn").on('click',async () => {
    event.preventDefault();
    let userNameFieldText = $("#userNameField").val();
    let passwordFieldText = $("#passwordField").val();
    if (userNameFieldText != "" && passwordFieldText != "") {
        if (validateEmail(userNameFieldText)) {
            let isValid = await checkCredentials(userNameFieldText, passwordFieldText);
            console.log(isValid); // This will wait for the result from `checkCredentials`
            if (isValid) {
                window.location.replace('mainWindow.html');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Invalid Credential",
                });
            }
        } else {
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
async function  checkCredentials(email,password){
    try {
        let result = await user_api.signIn(email, password);
        if (result) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return false;
    }
}