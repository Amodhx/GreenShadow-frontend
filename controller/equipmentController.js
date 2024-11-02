import {equipments, fields, staff} from "../db/db.js";
import {EquipmentModel} from "../model/equipmentModel.js";
export default class EquipmentController{


    loadValues(){

        // Todo:getDataFromBackend

    }
    getEquipmentCodes(){
        let ar = ["E01","E02"];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }
    saveEquipment(equipmentModel){
        equipmentModel.equipment_id =  "E01";
        equipments.push(equipmentModel);
        this.loadTable()
    }
    deleteEquipmentValue(equipmentId) {
        //     Todo: Delete Staff Values From Database

        this.deleteEquipmentByIdFromArray(equipmentId);
        this.loadTable();

    }

    deleteEquipmentByIdFromArray(equipmentIdToDelete) {
        for (let i = equipments.length - 1; i >= 0; i--) {
            if (equipments[i].equipment_id === equipmentIdToDelete) {
                equipments.splice(i, 1);
            }
        }
    }
    getEquipmentFromIndex(index){
        return equipments[index];
    }
    updateEquipmentValues(equipmentModel){
        this.updateValueFromId(equipmentModel.equipment_id,equipmentModel);
        this.loadTable();
    }
    updateValueFromId(equipmentId,equipmentModel){
        for (const equipmentObj of equipments) {
            if (equipmentObj.equipment_id === equipmentId) {
                equipmentObj.equipment_name = equipmentModel.equipment_name;
                equipmentObj.type = equipmentModel.type;
                equipmentObj.count = equipmentModel.count;
                equipmentObj.status = equipmentModel.status;
                equipmentObj.staff_id = equipmentModel.staff_id;
                equipmentObj.field_code = equipmentModel.field_code;
                break;
            }
        }
    }
    loadTable(){
        this.loadValues();
        $("#equipmentTblBody").empty();
        equipments.map(function (equipment) {
            var value =
                ` <tr>
                        <td>${equipment.equipment_id}</td>
                        <td>${equipment.equipment_name}</td>
                        <td>${equipment.type}</td>
                        <td>${equipment.count}</td>
                        <td>${equipment.status}</td>
                        <td>${equipment.staff_id}</td>
                        <td>${equipment.field_code}</td>
                        </tr>`

            $("#equipmentTblBody").append(value);
        });
    }
}