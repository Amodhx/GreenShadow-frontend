import {equipments, staff} from "../db/db.js";
import StaffApi from "../api/staffApi.js";

export default class StaffController {
    staffApi = new StaffApi();
    async loadValues() {
        await this.staffApi.getAllStaff();
        await this.loadTable();
    }
    async updateStaffValues(staffModel) {
        await this.staffApi.updateStaff(staffModel);
        await this.loadValues();
    }

    async deleteStaffValue(staffId) {
        await this.staffApi.deleteStaff(staffId);
        await this.loadValues();
    }
    async getStaffIds(){
        let ar = [];
        staff.map(function (eq) {
            ar.push(eq.staff_id);
        });
        return ar;
    }


    async saveStaffValues(staffValues) {
        await this.staffApi.saveStaff(staffValues);
        await this.loadValues();
    }

    getTabelRowValues(index) {
        return staff[index];
    }

    loadTable() {
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