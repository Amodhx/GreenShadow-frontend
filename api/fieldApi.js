import {fields} from "../db/db.js";
import {FieldModel} from "../model/fieldModel.js";
export default class FieldApi {
     token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJNQU5BR0VSIn1dLCJzdWIiOiJhbXhkaGFhYWFzYWFkZGFzZGRkbmFuYWFhYWFzZGRpdHNoYUBnbWFpbC5jb20iLCJpYXQiOjE3MzEyNjAyMjQsImV4cCI6MTczMjUxMTg2MH0.bFEw5jWifz1ZulO0vMwjDqRrxd6YRapTM-rUZu41dNM";


    async  getAllFiledData(){
        fields.length = 0;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://localhost:5050/api/v1/field/getAllField",
                type: "GET",
                headers: {
                    "Authorization": "Bearer " + this.token,
                    "Content-Type": "application/json"
                },
                success: function(response) {
                    response.forEach(field => {
                        let imageData1 = `data:image/jpeg;base64,${field.field_image_01}`;
                        let imageData2 = `data:image/jpeg;base64,${field.field_image_02}`;
                        fields.push(new FieldModel(field.field_code, field.field_name, field.field_location, field.extent_size, field.staff_list, field.crop_list, imageData1, imageData2, field.logs_list, field.equipments_list));
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
    async saveFieldData(fieldModel){
        return new Promise((resolve, reject) => {

            const base64Content1 = fieldModel.field_image_01.split(",")[1];
            const base64Content2 = fieldModel.field_image_01.split(",")[1];

            // Convert base64 string to binary data
            const byteCharacters1 = atob(base64Content1);
            const byteCharacters2 = atob(base64Content2);
            const byteNumbers1 = new Array(byteCharacters1.length);
            const byteNumbers2 = new Array(byteCharacters2.length);

            for (let i = 0; i < byteCharacters1.length; i++) {
                byteNumbers1[i] = byteCharacters1.charCodeAt(i);
            }
            for (let i = 0; i < byteCharacters2.length; i++) {
                byteNumbers2[i] = byteCharacters2.charCodeAt(i);
            }

            const byteArray1 = new Uint8Array(byteNumbers1);
            const byteArray2 = new Uint8Array(byteNumbers2);
            const blob1 = new Blob([byteArray1], { type: 'image/jpeg' });
            const blob2 = new Blob([byteArray2], { type: 'image/jpeg' });




            const staffString = fieldModel.staff_list.join(",");
            const cropString = fieldModel.crop_list.join(",");
            const logsString = fieldModel.logs_list().join(",");
            const equipmentString = fieldModel.equipments_list.join(",");
            let formData = new FormData();
            formData.append("field_code",fieldModel.field_code)
            formData.append("field_name",fieldModel.field_name)
            formData.append("field_location",fieldModel.field_location)
            formData.append("extent_size",fieldModel.extent_size)
            formData.append("staff_list",staffString)
            formData.append("crop_list",cropString)
            formData.append("field_image_01",blob1)
            formData.append("field_image_02",blob2)
            formData.append("logs_list",logsString)
            formData.append("equipments_list",equipmentString)

            $.ajax({
                url: "http://localhost:5050/api/v1/field/saveField",
                type: "POST",
                data:formData,
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
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

    async updateFieldData(fieldModel){
        return new Promise((resolve, reject) => {

            const base64Content1 = fieldModel.field_image_01.split(",")[1];
            const base64Content2 = fieldModel.field_image_01.split(",")[1];

            // Convert base64 string to binary data
            const byteCharacters1 = atob(base64Content1);
            const byteCharacters2 = atob(base64Content2);
            const byteNumbers1 = new Array(byteCharacters1.length);
            const byteNumbers2 = new Array(byteCharacters2.length);

            for (let i = 0; i < byteCharacters1.length; i++) {
                byteNumbers1[i] = byteCharacters1.charCodeAt(i);
            }
            for (let i = 0; i < byteCharacters2.length; i++) {
                byteNumbers2[i] = byteCharacters2.charCodeAt(i);
            }

            const byteArray1 = new Uint8Array(byteNumbers1);
            const byteArray2 = new Uint8Array(byteNumbers2);
            const blob1 = new Blob([byteArray1], { type: 'image/jpeg' });
            const blob2 = new Blob([byteArray2], { type: 'image/jpeg' });




            const staffString = fieldModel.staff_list.join(",");
            const cropString = fieldModel.crop_list.join(",");
            const logsString = fieldModel.logs_list().join(",");
            const equipmentString = fieldModel.equipments_list.join(",");
            let formData = new FormData();
            formData.append("field_code",fieldModel.field_code)
            formData.append("field_name",fieldModel.field_name)
            formData.append("field_location",fieldModel.field_location)
            formData.append("extent_size",fieldModel.extent_size)
            formData.append("staff_list",staffString)
            formData.append("crop_list",cropString)
            formData.append("field_image_01",blob1)
            formData.append("field_image_02",blob2)
            formData.append("logs_list",logsString)
            formData.append("equipments_list",equipmentString)

            $.ajax({
                url: "http://localhost:5050/api/v1/field/saveField",
                type: "PATCH",
                data:formData,
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
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
    async deleteFieldData(field_code){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://localhost:5050/api/v1/field/deleteField/${field_code}`,
                type: "DELETE",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
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