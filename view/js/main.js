import {UserApi} from "../../api/userApi.js";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const user_api = new UserApi();


$("#signInBtn").on('click', async () => {
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
            Swal.fire("Bad Request", "The Email was invalid. Please check your input and try again.", "error");
        }
    }


});
$("#resendCode").on('click', async () => {
    let email = localStorage.getItem('emailAddress');
    let numberPromise = await generateRandomNumber();
    localStorage.setItem('securityKey', numberPromise);
    user_api.sendCodeToChangePassword(email, numberPromise);
    setTimer();
    Swal.fire({
        title: "Sent To Mail",
        text: "Check your mail box!",
        icon: "success"
    });
})

function setTimer(){
    let time = 60;

    let countdown = setInterval(function () {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        $("#timer").text(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds));

        if (time <= 0) {
            clearInterval(countdown);
            $("#timer").text("Code was expired resend it");
            localStorage.removeItem('securityKey')
        }

        time--; // Decrement the time
    }, 1000);
}
$("#getEmailAndSendCodeBtn").on('click', async () => {
    event.preventDefault();
    let email = $("#email").val();
    let isEmailValid = validateEmail(email);
    if (isEmailValid) {
        let number = await generateRandomNumber();
        localStorage.setItem('securityKey',number);
        localStorage.setItem('emailAddress',email);
        $('#emailInSecondModel').html(`We sent a code to <b>${email}</b>`);
        $("#loading").removeClass('hidden');
        let newVar = await user_api.sendCodeToChangePassword(email,number);
        $("#loading").addClass('hidden');
        if (newVar){
            $("#forgotPasswordModal").modal('hide');
            $("#passwordResetModal").modal('show');
            setTimer();
        }else {
            Swal.fire("Server Error Try Again later");
            $("#forgotPasswordModal").modal('hide');
        }

    } else {
        Swal.fire({
            title: "Invalid Email",
            text: "The Email was invalid. Please check your input and try again.r",
            icon: "info"
        });
    }
})

function getInputValueAsInteger() {
    const value = $('.code-input input')
        .map(function () {
            return $(this).val(); // Get the value of each input
        })
        .get() // Convert jQuery collection to plain array
        .join(''); // Concatenate the values as a string

    return value ? parseInt(value, 10) : 0; // Convert the concatenated string to an integer
}

$("#secondModelNextBtn").on('click', () => {
    event.preventDefault();
    let inputValueAsInteger = getInputValueAsInteger();
    let code = localStorage.getItem('securityKey');
    if (inputValueAsInteger == code){
        $("#passwordResetModal").modal('hide');
        $("#setNewPasswordModal").modal('show');
    }else {
        Swal.fire({
            title: "Invalid Code",
            text: "Check Again and Enter",
            icon: "info"
        });
    }
})
$("#confirmPasswordInput").on('keyup', () => {
    let password = $("#passwordInput").val();
    let confirmPassword = $("#confirmPasswordInput").val();

    console.log(password + "  " + confirmPassword)
    if (password != confirmPassword) {
        $("#confirmPasswordInput").css({
            boxShadow: "0 0 0 0.25rem rgba(255, 0, 0, 0.25)",
            borderColor: "#dc3545"
        })
    } else {
        $("#confirmPasswordInput").css({
            boxShadow: "0 0 0 0.25rem rgba(0, 123, 255, 0.25)",
            borderColor: "#ced4da"
        })
    }

})
function clearAllFields(){
    $("#passwordInput").val("");
    $("#confirmPasswordInput").val("");
    $("#email").val("");
}
$("#resetPasswordBtn").on('click', async () => {
    let password = $("#passwordInput").val();
    let confirmPassword = $("#confirmPasswordInput").val();
    let email = localStorage.getItem('emailAddress');
    if (password == confirmPassword) {
        let newVar = await user_api.changePassword(email, password);
        if (newVar){
            $("#setNewPasswordModal").modal('hide');
            Swal.fire({
                title: "Changed",
                text: "You password has been changed",
                icon: "success"
            });
            clearAllFields();
        }
    } else {
        Swal.fire({
            title: "Invalid Password",
            text: "Check Again and Enter",
            icon: "info"
        });
    }
})
async function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}
function validateEmail(email) {
    return emailRegex.test(email);
}
async function checkCredentials(email, password) {
    try {
        let result = await user_api.signIn(email, password);
        return !!result;
    } catch (error) {
        return false;
    }
}
