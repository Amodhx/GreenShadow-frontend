import {vehicles} from "../db/db.js";
import {VehicleModel} from "../model/vehicleModel.js";
export default class VehicleApi{
    token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxbmFzZHNAZ21haWwuY29tIiwiaWF0IjoxNzMxODE2NDAzLCJleHAiOjE3MzI4MTY0MDN9.WPn523qGJZORA57wNPEACNVVr1a7ciD7MoCnZMf8Mik";

    async saveVehicle(vehicleModel){
        return new Promise((resolve, reject) => {
            const data = {
                vehicle_code: vehicleModel.vehicle_code,
                licence_plate_number: vehicleModel.licence_plate_number,
                vehicle_category: vehicleModel.vehicle_category,
                fuelType: vehicleModel.fuelType,
                status: vehicleModel.status,
                staff_id: vehicleModel.staff_id,
                remarks: vehicleModel.remarks
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/vehicle/saveVehicle",
                type: "POST",
                data:JSON.stringify(data),
                contentType: "application/json",
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
    async updateVehicle(vehicleModel){
        return new Promise((resolve, reject) => {
            const data = {
                vehicle_code: vehicleModel.vehicle_code,
                licence_plate_number: vehicleModel.licence_plate_number,
                vehicle_category: vehicleModel.vehicle_category,
                fuelType: vehicleModel.fuelType,
                status: vehicleModel.status,
                staff_id: vehicleModel.staff_id,
                remarks: vehicleModel.remarks
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/vehicle/updateVehicle",
                type: "PATCH",
                data:JSON.stringify(data),
                contentType: "application/json",
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
    async getAllVehicle(){
        vehicles.length = 0;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://localhost:5050/api/v1/vehicle/getAllVehicle",
                type: "GET",
                headers: {
                    "Authorization": "Bearer " + this.token,
                },
                success: function(response) {
                    response.forEach(vehicle => {
                        vehicles.push(new VehicleModel(vehicle.vehicle_code,vehicle.licence_plate_number,vehicle.vehicle_category,vehicle.fuelType,vehicle.status,vehicle.staff_id,vehicle.remarks))
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
    async deleteVehicle(vehicleId){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://localhost:5050/api/v1/vehicle/deleteVehicle/${vehicleId}`,
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