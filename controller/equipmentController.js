import {equipments, fields, staff} from "../db/db.js";
import EquipmentApi from "../api/equipmentApi.js";
export default class EquipmentController{
    equipmentApi = new EquipmentApi();
    equipmentList;

    async loadValues(){
        $("#equipmentSort").val("All")
        await this.equipmentApi.getAllEquipment();
        await this.loadTableSorting("All");
    }
    async getEquipmentCodes(){
        let ar = [];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }

    async loadTableSorting(value){
        var sortedEquipmentList = [];
        if (value == "All"){
            equipments.map(function (equipment) {
                sortedEquipmentList.push(equipment);
            });
            this.equipmentList = sortedEquipmentList;
            this.loadTable(sortedEquipmentList);
        }else {
            equipments.map(function (equipment) {
                if (equipment.status == value){
                    sortedEquipmentList.push(equipment);
                }
            });
            this.equipmentList = sortedEquipmentList;
            this.loadTable(sortedEquipmentList);
        }

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
        return this.equipmentList[index];
    }
    async updateEquipmentValues(equipmentModel){
        await this.equipmentApi.updateEquipment(equipmentModel);
        await this.loadValues();
    }
    loadTable(sortedEquipmentList){
        $("#equipmentTblBody").empty();
        sortedEquipmentList.map(function (equipment) {
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