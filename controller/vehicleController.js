import {equipments, vehicles} from "../db/db.js";
import VehicleApi from "../api/vehicleApi.js";

export class VehicleController{
    vehicleApi = new VehicleApi();
    async loadValues(){
        await this.vehicleApi.getAllVehicle();
        await this.loadTable();
    }
    async deleteVehicleValue(vehicleId) {
        await this.vehicleApi.deleteVehicle(vehicleId);
        await this.loadValues();
    }
    async updateVehicleValues(vehicleModel){
        await this.vehicleApi.updateVehicle(vehicleModel);
        await this.loadValues();
    }
    async getVehicleCodes(){
        let ar = [];
        vehicles.map(function (vehicle) {
            ar.push(vehicle.vehicle_code);
        });
        return ar;
    }
    getVehicleFromIndex(index){
        return vehicles[index];
    }
    async saveData(vehicleValues){
        await this.vehicleApi.saveVehicle(vehicleValues);
        await this.loadValues();

    }
    loadTable() {
        $("#vehicleTblBody").empty();
        vehicles.map(function (vehicle) {
            var value =
                ` <tr>
                        <td>${vehicle.vehicle_code}</td>
                        <td>${vehicle.licence_plate_number}</td>
                        <td>${vehicle.vehicle_category}</td>
                        <td>${vehicle.fuelType}</td>
                        <td>${vehicle.status}</td>
                        <td>${vehicle.staff_id}</td>
                        <td>${vehicle.remarks}</td>
                        </tr>`

            $("#vehicleTblBody").append(value);
        });
    }
}