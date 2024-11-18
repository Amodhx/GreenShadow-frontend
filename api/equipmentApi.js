import {equipments} from "../db/db.js";
import {EquipmentModel} from "../model/equipmentModel.js";

export default class EquipmentApi{
    token = localStorage.getItem('jwtToken');


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
            console.log(data)
            $.ajax({
                url: "http://localhost:5050/api/v1/equipment/saveEquipment",
                type: "POST",
                contentType: "application/json",
                data:JSON.stringify(data),
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
                    console.log(response)
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
                contentType: "application/json",
                data:JSON.stringify(data),
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
                        equipments.push(new EquipmentModel(equipment.equipment_id,equipment.equipment_name,equipment.type,equipment.count,equipment.status,equipment.staff_id_list,equipment.field_code_list));
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