import {equipments, vehicles} from "../db/db.js";
import VehicleApi from "../api/vehicleApi.js";

export class VehicleController{
    vehicleApi = new VehicleApi();
    vehicleList =[];
    async loadValues(){
        await this.vehicleApi.getAllVehicle();
        $("#vehicleSorting").val("All")
        await this.loadTableSorting("All");
    }
    async deleteVehicleValue(vehicleId) {
        await this.vehicleApi.deleteVehicle(vehicleId);
        await this.loadValues();
    }
    async updateVehicleValues(vehicleModel){
        await this.vehicleApi.updateVehicle(vehicleModel);
        await this.loadValues();
    }

    async loadTableSorting(value){
        let sortedVehicleList = []
        if (value == "All"){
            vehicles.map(function (vehicle) {
                sortedVehicleList.push(vehicle);
            });
            this.vehicleList = sortedVehicleList;
            this.loadTable(sortedVehicleList);
        }else {
            vehicles.map(function (vehicle) {
                if (vehicle.status == value){
                    sortedVehicleList.push(vehicle);
                }
            });
            this.vehicleList = sortedVehicleList;
            this.loadTable(sortedVehicleList);

        }
    }
    async getVehicleCodes(){
        let ar = [];
        vehicles.map(function (vehicle) {
            ar.push(vehicle.vehicle_code);
        });
        return ar;
    }
    getVehicleFromIndex(index){
        return this.vehicleList[index];
    }
    async saveData(vehicleValues){
        await this.vehicleApi.saveVehicle(vehicleValues);
        await this.loadValues();

    }
    loadTable(sortedVehicleList) {
        $("#vehicleTblBody").empty();
        sortedVehicleList.map(function (vehicle) {
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