import {logs} from "../db/db.js";
import {LogModel} from "../model/logModel.js";
export default class LogApi{
    token = localStorage.getItem('jwtToken');

    async saveLog(logModel){
        return new Promise((resolve, reject) => {

            const base64Content = logModel.observe_image.split(",")[1];

            // Convert base64 string to binary data
            const byteCharacters = atob(base64Content);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });




            const fieldString = logModel.fields_list.join(",");
            const cropString = logModel.crops_list.join(",");
            const staffString = logModel.staffs_list.join(",");

            let formData = new FormData();
            formData.append("log_code",logModel.log_code)
            formData.append("log_date",logModel.log_date)
            formData.append("log_details",logModel.log_details)
            formData.append("logType",logModel.logType)
            formData.append("observe_image",blob)
            formData.append("fields_list",fieldString)
            formData.append("crops_list",cropString)
            formData.append("staffs_list",staffString)

            $.ajax({
                url: "http://localhost:5050/api/v1/log/saveLog",
                type: "POST",
                data:formData,
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
    async updateLog(logModel){
        return new Promise((resolve, reject) => {

            const base64Content = logModel.observe_image.split(",")[1];

            // Convert base64 string to binary data
            const byteCharacters = atob(base64Content);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });




            const fieldString = logModel.fields_list.join(",");
            const cropString = logModel.crops_list.join(",");
            const staffString = logModel.staffs_list.join(",");

            let formData = new FormData();
            formData.append("log_code",logModel.log_code)
            formData.append("log_date",logModel.log_date)
            formData.append("log_details",logModel.log_details)
            formData.append("logType",logModel.logType)
            formData.append("observe_image",blob)
            formData.append("fields_list",fieldString)
            formData.append("crops_list",cropString)
            formData.append("staffs_list",staffString)

            $.ajax({
                url: "http://localhost:5050/api/v1/log/updateLog",
                type: "PATCH",
                data:formData,
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been Updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
    async getAllLog(){
        logs.length = 0;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://localhost:5050/api/v1/log/getAllLog",
                type: "GET",
                headers: {
                    "Authorization": "Bearer " + this.token,
                },
                success: function(response) {
                    response.forEach(log => {
                        let imageData = `data:image/jpeg;base64,${log.observe_image}`;
                        logs.push(new LogModel(log.log_code,log.log_date,log.log_details,log.logType,imageData,log.fields_list,log.crops_list,log.staffs_list));
                    });
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
    async deleteLog(logId){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://localhost:5050/api/v1/log/deleteLog/${logId}`,
                type: "DELETE",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Log has been deleted!",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
}