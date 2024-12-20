import {equipments, staff} from "../db/db.js";
import StaffApi from "../api/staffApi.js";
import UserModel from "../model/userModel.js";
import UserController from "./userController.js";

export default class StaffController {
    staffApi = new StaffApi();
    user_controller = new UserController();
    staffList ;
    async loadValues() {
        await this.staffApi.getAllStaff();
        $("#staffSortBy").val("All")
        await this.loadTaleSorting("All");
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

    async loadTaleSorting(designation){
        var sortedStaffList = [];
        if (designation == "All"){
            console.log("ALL")
            staff.map(function (staff) {
                sortedStaffList.push(staff);
            });
            this.staffList = sortedStaffList;
            this.loadTable(sortedStaffList);
        }else {
            staff.map(function (staff) {
                if (staff.designation == designation) {
                    sortedStaffList.push(staff);
                }
            });
            this.staffList = sortedStaffList;
            this.loadTable(sortedStaffList);
        }
    }

    async saveStaffValues(staffValues) {
        await this.staffApi.saveStaff(staffValues);
        await this.sendDataToSaveUser(staffValues);
        await this.loadValues();
    }
    async sendDataToSaveUser(staffValues){
        let number = await this.generatePassword();
        let userRole = staffValues.role;

        if (userRole !== "OTHER"){
            let userModel = new UserModel("",staffValues.email,number, userRole);
            this.user_controller.saveUser(userModel);
        }

    }
    async generatePassword() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    getTabelRowValues(index) {
        return this.staffList[index];
    }



    loadTable(sortedStaffList) {
        $("#staffTblBody").empty();
        sortedStaffList.map(function (staff) {
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