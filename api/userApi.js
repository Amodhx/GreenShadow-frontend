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
}