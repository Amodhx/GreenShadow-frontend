export class UserApi{

    async signUp(userModel){
        return new Promise((resolve, reject) => {

            const data = {
                user_id : userModel.user_id,
                email:userModel.email,
                password : userModel.password,
                role : userModel.role
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/auth/signUp",
                type: "POST",
                contentType: "application/json",
                data:JSON.stringify(data),
                success: function() {
                    resolve();
                },
                error: function(xhr, status, error) {
                    switch (xhr.status) {
                        case 400:
                            Swal.fire("Bad Request", "The request was invalid. Please check your input and try again.", "error");
                            break;
                        case 401:
                            Swal.fire("Unauthorized", "You are not authorized to perform this action.", "warning");
                            break;
                        case 403:
                            Swal.fire("Forbidden", "You do not have permission to access this resource.", "error");
                            break;
                        case 404:
                            Swal.fire("Not Found", "The requested resource could not be found.", "info");
                            break;
                        case 500:
                            Swal.fire("Server Error", "An error occurred on the server. Please try again later.", "error");
                            break;
                        default:
                            Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
                            break;
                    }
                    reject(error);
                }
            });
        });
    }

    async signIn(email,password){
        return new Promise((resolve, reject) => {

            const data = {
                email:email,
                password : password,
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/auth/signIn",
                type: "POST",
                contentType: "application/json",
                data:JSON.stringify(data),
                success: function(response) {
                    const token = response.token;
                    if (token) {
                        localStorage.setItem('jwtToken', token);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                error: function(xhr, status, error) {
                    resolve(false);
                }
            });
        });
    }

    async refreshToken(){
        return new Promise((resolve, reject) => {
            let refreshToken = localStorage.getItem('jwtToken');
            $.ajax({
                url: `http://localhost:5050/api/v1/auth/refresh/${refreshToken}`,
                type: "GET",
                success: function(response) {
                    const token = response.token;
                    if (token) {
                        localStorage.setItem('jwtToken', token);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                error: function(xhr, status, error) {
                    console.log(xhr.status)
                    console.log(status)
                    console.log(error)
                    resolve(false);
                }
            });
        });
    }
}