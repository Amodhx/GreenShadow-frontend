import {staff} from "../db/db.js";
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
    saveStaffValues(staffValues){
        // Todo: You have to save this staff values and get data from database . if not error ekak enw staff_id eke mkd staff_id ek generate krnne backend eken
        staff.push(staffValues);
        this.loadTable()
    }


    loadTable(){

        // Todo:check  table loading
        // $("#tableStaff").empty();

        staff.map(function (staff) {

            var value =
                ` <tr>
                        <td>${staff.staff_id}</td>
                        <td>${staff.first_name}</td>
                        <td>${staff.last_name}</td>
                        <td>${staff.designation}</td>
                        <td>${staff.gender}</td>
                        <td>${staff.joined_date}</td>
                        <td>${staff.dob}</td>
                        <td>${staff.address_line_01+", "+staff.address_line_02+", "+staff.address_line_03+", "+staff.address_line_04+", "+staff.address_line_05}</td>
                        <td>${staff.contact_number}</td>
                        <td>${staff.email}</td>
                        <td>${staff.role}</td>
                        </tr>`

            $("#tableStaff").append(value);
        });
    }
}