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
                    console.error("Error: " + error);
                    Swal.fire("Data Fetch Error");
                    console.error("Response:", xhr.responseText);
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