import {equipments} from "../db/db.js";
export default class EquipmentController{
    getEquipmentCodes(){
        let ar = ["E01","E02"];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }
}