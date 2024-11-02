import {equipments, vehicles} from "../db/db.js";
import {VehicleModel} from "../model/vehicleModel.js";

export class VehicleController{

    loadValues(){

    }
    deleteVehicleValue(equipmentId) {
        //     Todo: Delete Staff Values From Database

        this.deleteVehicleByIdFromArray(equipmentId);
        this.loadTable();

    }

    deleteVehicleByIdFromArray(vehicleIdToDelete) {
        for (let i = vehicles.length - 1; i >= 0; i--) {
            if (vehicles[i].vehicle_code === vehicleIdToDelete) {
                vehicles.splice(i, 1);
            }
        }
    }
    updateVehicleValues(vehicleModel){
        this.updateValueFromId(vehicleModel.vehicle_code,vehicleModel);
        this.loadTable();
    }
    updateValueFromId(vehicleId,vehicleModel){
        for (const vehicleObj of vehicles) {
            if (vehicleObj.vehicle_code === vehicleId) {
                vehicleObj.licence_plate_number = vehicleModel.licence_plate_number;
                vehicleObj.vehicle_category = vehicleModel.vehicle_category;
                vehicleObj.fuelType = vehicleModel.fuelType;
                vehicleObj.status = vehicleModel.status;
                vehicleObj.staff_id = vehicleModel.staff_id;
                vehicleObj.remarks = vehicleModel.remarks;
                break;
            }
        }
    }
    getVehicleCodes(){
        let ar = ["V01","V02"];
        vehicles.map(function (field) {
            ar.push(field.field_code);
        });
        return ar;
    }
    getVehicleFromIndex(index){
        return vehicles[index];
    }
    saveData(vehicleValues){
        vehicleValues.vehicle_code = "F01";
        vehicles.push(vehicleValues);
        this.loadTable();

    }
    loadTable() {
        this.loadValues();
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