import {crops} from "../db/db.js";
import {CropModel} from "../model/cropModel.js";
import {UserApi} from "./userApi.js";
export default class CropApi{
    token = localStorage.getItem('jwtToken');

    async saveCrop(cropModel){
        return new Promise((resolve, reject) => {

            const base64Content = cropModel.crop_image.split(",")[1];

            // Convert base64 string to binary data
            const byteCharacters = atob(base64Content);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });

            const fieldList = cropModel.field_code.join(",")
            const logList = cropModel.logs_list.join(",")

            let formData = new FormData();
            formData.append("crop_code",cropModel.crop_code)
            formData.append("crop_common_name",cropModel.crop_common_name)
            formData.append("crop_scientific_name",cropModel.crop_scientific_name)
            formData.append("crop_image",blob)
            formData.append("category",cropModel.category)
            formData.append("season",cropModel.season)
            formData.append("field_code_list",fieldList || [])
            formData.append("logs_list",logList || [])

             $.ajax({
                url: "http://localhost:5050/api/v1/crop/saveCrop",
                type: "POST",
                data:formData,
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    "Authorization": "Bearer " + this.token
                },
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
    async updateCrop(cropModel){
        return new Promise((resolve, reject) => {
            const user_api = new UserApi();
            const base64Content = cropModel.crop_image.split(",")[1];

            // Convert base64 string to binary data
            const byteCharacters = atob(base64Content);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });

            const fieldList = cropModel.field_code.join(",")
            const logList = cropModel.logs_list.join(",")

            let formData = new FormData();
            formData.append("crop_code",cropModel.crop_code)
            formData.append("crop_common_name",cropModel.crop_common_name)
            formData.append("crop_scientific_name",cropModel.crop_scientific_name)
            formData.append("crop_image",blob)
            formData.append("category",cropModel.category)
            formData.append("season",cropModel.season)
            formData.append("field_code_list",fieldList || [])
            formData.append("logs_list",logList || [])

            $.ajax({
                url: "http://localhost:5050/api/v1/crop/updateCrop",
                type: "PATCH",
                data:formData,
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function() {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been Updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resolve();
                },
                error: async function (xhr, status, error) {

                    if (xhr.status === 401 || xhr.status === 403) {
                        try {
                            const newToken = await user_api.refreshToken();
                            if (newToken) {
                                makeRequest(newToken);
                            } else {
                                Swal.fire("Unauthorized", "Please login again.", "warning");
                                reject("Token refresh failed");
                            }
                        } catch (err) {
                            Swal.fire("Error", "Unable to refresh token. Please login again.", "error");
                            reject(err);
                        }
                    } else {
                        switch (xhr.status) {
                            case 400:
                                Swal.fire("Bad Request", "The request was invalid. Please check your input and try again.", "error");
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
                        reject(xhr.responseText);
                    }
                }
            });
        });
    }

    async getAllCrops(){
        crops.length = 0;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://localhost:5050/api/v1/crop/getAllCrop",
                type: "GET",
                headers: {
                    "Authorization": "Bearer " + this.token,
                },
                success: function(response) {
                    response.forEach(crop => {
                        let imageData1 = `data:image/jpeg;base64,${crop.crop_image}`;
                        crops.push(new CropModel(crop.crop_code,crop.crop_common_name,crop.crop_scientific_name,imageData1,crop.category,crop.season,crop.field_code_list,crop.logs_list))
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

    async deleteCrop(crop_code){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://localhost:5050/api/v1/crop/deleteCrop/${crop_code}`,
                type: "DELETE",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
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