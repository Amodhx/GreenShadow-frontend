import {equipments, staff} from "../db/db.js";
import StaffModel from "../model/staffModel.js";

export default class StaffController {

    loadValues() {

        // Todo:Get Data From Database
        // console.log("B")
        // staff.push(new StaffModel("a", "a", "a", "a", "a", "a", "a",
        //     "a", "a", "a", "a",
        //     "a", "a", "a", "a"));
        // this.loadTable()
    }
    updateStaffValues(staffModel){
        this.updateStaffById(staffModel.staff_id,staffModel);
        this.loadTable();
    }

     updateStaffById(staffIdToUpdate, newValues) {
        for (const staffObj of staff) {
            console.log(staff)
            console.log(newValues)
            if (staffObj.staff_id === staffIdToUpdate) {
                staffObj.first_name = newValues.first_name;
                staffObj.last_name = newValues.last_name;
                staffObj.designation = newValues.designation;
                staffObj.gender = newValues.gender;
                staffObj.joined_date = newValues.joined_date;
                staffObj.dob = newValues.dob;
                staffObj.address_line_01 = newValues.address_line_01;
                staffObj.address_line_02 = newValues.address_line_02;
                staffObj.address_line_03 = newValues.address_line_03;
                staffObj.address_line_04 = newValues.address_line_04;
                staffObj.address_line_05 = newValues.address_line_05;
                staffObj.contact_number = newValues.contact_number;
                staffObj.email = newValues.email;
                staffObj.role = newValues.role;
                staffObj.fields_list = newValues.fields_list;
                staffObj.equipments_list = newValues.equipments_list;
                staffObj.vehicles_list =newValues.vehicles_list;
                break;
            }
        }
    }

    deleteStaffValue(staffId) {
        //     Todo: Delete Staff Values From Database

        this.deleteStaffByIdFromArray(staffId);
        this.loadTable();

    }

     deleteStaffByIdFromArray(staffIdToDelete) {
        for (let i = staff.length - 1; i >= 0; i--) {
            if (staff[i].staff_id === staffIdToDelete) {
                staff.splice(i, 1);
            }
        }
    }
    getStaffIds(){
        let ar = ["S01","S02"];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }


    saveStaffValues(staffValues) {
        // Todo: You have to save this staff values and get data from database . if not error ekak enw staff_id eke mkd staff_id ek generate krnne backend eken
        staffValues.staff_id = "S01";
        staff.push(staffValues);
        this.loadTable()
    }

    getTabelRowValues(index) {
        return staff[index];
    }

    loadTable() {
        this.loadValues();
        $("#staffTblBody").empty();
        staff.map(function (staff) {
            var value =
                ` <tr>
                        <td class="staffIdTableValue">${staff.staff_id}</td>
                        <td class="staffFirstNameTableValue">${staff.first_name}</td>
                        <td class="staffLastNameTableValue">${staff.last_name}</td>
                        <td class="staffDestinationTableValue">${staff.designation}</td>
                        <td class="staffGenderTableValue">${staff.gender}</td>
                        <td class="staffJoinedDateTableValue">${staff.joined_date}</td>
                        <td class="staffDOBTableValue">${staff.dob}</td>
                        <td class="staffAddressTableValue">${staff.address_line_01 + ", " + staff.address_line_02 + ", " + staff.address_line_03 + ", " + staff.address_line_04 + ", " + staff.address_line_05}</td>
                        <td class="staffContactNumberTableValue">${staff.contact_number}</td>
                        <td class="staffEmailTableValue">${staff.email}</td>
                        <td class="staffRoleTableValue">${staff.role}</td>
                        <th class="staffFieldsTableValue">${staff.fields_list}</th>
                        <th class="staffEquipmetnsTableValue">${staff.equipments_list}</th>
                        <th class="staffEquipmentsVehicleValue">${staff.vehicles_list}</th>
                        </tr>`

            $("#staffTblBody").append(value);
        });
    }
}