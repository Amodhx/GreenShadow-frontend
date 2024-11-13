import {crops} from "../db/db.js";
import {CropModel} from "../model/cropModel.js";
export default class CropApi{
    token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJNQU5BR0VSIn1dLCJzdWIiOiJhbXhkaGFhYWFzYWFkZGFzZGRkbmFuYWFhYWFzZGRpdHNoYUBnbWFpbC5jb20iLCJpYXQiOjE3MzEyNjAyMjQsImV4cCI6MTczMjUxMTg2MH0.bFEw5jWifz1ZulO0vMwjDqRrxd6YRapTM-rUZu41dNM";

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