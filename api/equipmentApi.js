import {equipments} from "../db/db.js";
import {EquipmentModel} from "../model/equipmentModel.js";

export default class EquipmentApi{
    token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJNQU5BR0VSIn1dLCJzdWIiOiJhbXhkaGFhYWFzYWFkZGFzZGRkbmFuYWFhYWFzZGRpdHNoYUBnbWFpbC5jb20iLCJpYXQiOjE3MzEyNjAyMjQsImV4cCI6MTczMjUxMTg2MH0.bFEw5jWifz1ZulO0vMwjDqRrxd6YRapTM-rUZu41dNM";


    async saveEquipment(equipmentModel){
        return new Promise((resolve, reject) => {
            const data = {
                equipment_id: equipmentModel.equipment_id,
                equipment_name: equipmentModel.equipment_name,
                type: equipmentModel.type,
                count: equipmentModel.count,
                status: equipmentModel.status,
                staff_id_list: equipmentModel.staff_id,
                field_code_list: equipmentModel.field_code
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/equipment/saveEquipment",
                type: "POST",
                data:JSON.stringify(data),
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    contentType: "application/json",
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
    async updateEquipment(equipmentModel){
        return new Promise((resolve, reject) => {

            const data = {
                equipment_id: equipmentModel.equipment_id,
                equipment_name: equipmentModel.equipment_name,
                type: equipmentModel.type,
                count: equipmentModel.count,
                status: equipmentModel.status,
                staff_id_list: equipmentModel.staff_id,
                field_code_list: equipmentModel.field_code
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/equipment/updateEquipment",
                type: "PATCH",
                data:JSON.stringify(data),
                processData: false,  // Prevents jQuery from processing data as a query string
                contentType: false,
                headers: {
                    contentType: "application/json",
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
    async deleteEquipment(equipmentId){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://localhost:5050/api/v1/equipment/deleteEquipment/${equipmentId}`,
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
    async getAllEquipment(){
        equipments.length = 0;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://localhost:5050/api/v1/equipment/getAllEquipment",
                type: "GET",
                headers: {
                    "Authorization": "Bearer " + this.token,
                },
                success: function(response) {
                    response.forEach(equipment => {
                        equipments.push(new EquipmentModel(equipment.equipment_id,equipment.equipment_name,equipment.type,equipment.count,equipment.status,equipment.staff_id,equipment.field_code));
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
}