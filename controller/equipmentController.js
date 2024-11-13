import {equipments, fields, staff} from "../db/db.js";
import EquipmentApi from "../api/equipmentApi.js";
export default class EquipmentController{
    equipmentApi = new EquipmentApi();

    async loadValues(){
        // Todo:getDataFromBackend
        await this.equipmentApi.getAllEquipment();
        await this.loadTable();
    }
    async getEquipmentCodes(){
        let ar = [];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }
    async saveEquipment(equipmentModel){
        await this.equipmentApi.saveEquipment(equipmentModel);
        await this.loadValues();
    }
    async deleteEquipmentValue(equipmentId) {
        //     Todo: Delete Staff Values From Database
        await this.equipmentApi.deleteEquipment(equipmentId);
        await this.loadValues();

    }
    getEquipmentFromIndex(index){
        return equipments[index];
    }
    async updateEquipmentValues(equipmentModel){
        await this.equipmentApi.updateEquipment(equipmentModel);
        await this.loadValues();
    }
    loadTable(){
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