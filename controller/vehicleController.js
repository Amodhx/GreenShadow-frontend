import {vehicles} from "../db/db.js";

export class VehicleController{
    getVehicleCodes(){
        let ar = ["V01","V02"];
        vehicles.map(function (field) {
            ar.push(field.field_code);
        });
        return ar;
    }
}