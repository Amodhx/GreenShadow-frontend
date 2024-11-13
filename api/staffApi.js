import {staff} from "../db/db.js";
import StaffModel from "../model/staffModel.js";

export default class StaffApi{
    token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJNQU5BR0VSIn1dLCJzdWIiOiJhbXhkaGFhYWFzYWFkZGFzZGRkbmFuYWFhYWFzZGRpdHNoYUBnbWFpbC5jb20iLCJpYXQiOjE3MzEyNjAyMjQsImV4cCI6MTczMjUxMTg2MH0.bFEw5jWifz1ZulO0vMwjDqRrxd6YRapTM-rUZu41dNM";

    async saveStaff(staffModel){
        return new Promise((resolve, reject) => {

            const data = {
                staff_id: staffModel.staff_id,
                first_name: staffModel.first_name,
                last_name: staffModel.last_name,
                designation: staffModel.designation,
                gender: staffModel.gender,
                joined_date: staffModel.joined_date,
                dob: staffModel.dob,
                address_line_01: staffModel.address_line_01,
                address_line_02: staffModel.address_line_02,
                address_line_03: staffModel.address_line_03,
                address_line_04: staffModel.address_line_04,
                address_line_05: staffModel.address_line_05,
                contact_number: staffModel.contact_number,
                email: staffModel.email,
                role: staffModel.role,
                fields_list: staffModel.fields_list || [],
                logs_list: staffModel.logs_list || [],
                equipments_list: staffModel.equipments_list || [],
                vehicles_list: staffModel.vehicles_list || []
            };

            console.log(JSON.stringify(data));

            $.ajax({
                url: "http://localhost:5050/api/v1/staff/saveStaff",
                type: "POST",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                contentType: "application/json",
                data:JSON.stringify(data),
                success: function() {
                    resolve();
                },
                error: function(xhr, status, error) {
                    console.error("Error: " + error);
                    Swal.fire("Data Fetch Error");
                    console.error("Response:", xhr.responseText);
                    reject(error);
                }
            });
        });
    }
    async updateStaff(staffModel){
        return new Promise((resolve, reject) => {

            const data = {
                staff_id: staffModel.staff_id,
                first_name: staffModel.first_name,
                last_name: staffModel.last_name,
                designation: staffModel.designation,
                gender: staffModel.gender,
                joined_date: staffModel.joined_date,
                dob: staffModel.dob,
                address_line_01: staffModel.address_line_01,
                address_line_02: staffModel.address_line_02,
                address_line_03: staffModel.address_line_03,
                address_line_04: staffModel.address_line_04,
                address_line_05: staffModel.address_line_05,
                contact_number: staffModel.contact_number,
                email: staffModel.email,
                role: staffModel.role,
                fields_list: staffModel.fields_list || [],
                logs_list: staffModel.logs_list || [],
                equipments_list: staffModel.equipments_list || [],
                vehicles_list: staffModel.vehicles_list || []
            };

            $.ajax({
                url: "http://localhost:5050/api/v1/staff/updateStaff",
                type: "PATCH",
                data:JSON.stringify(data),
                contentType: "application/json",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function() {
                    resolve();
                },
                error: function(xhr, status, error) {
                    console.error("Error: " + error);
                    Swal.fire("Data Fetch Error");
                    console.error("Response:", xhr.responseText);
                    reject(error);
                }
            });
        });
    }
    async deleteStaff(staffId){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://localhost:5050/api/v1/staff/deleteStaff/${staffId}`,
                type: "DELETE",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function(response) {
                    resolve();
                },
                error: function(xhr, status, error) {
                    console.error("Error: " + error);

                    Swal.fire("Data Fetch Error");
                    console.error("Response:", xhr.responseText);
                    reject(error);
                }
            });
        });
    }
    async getAllStaff(){
        staff.length = 0;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://localhost:5050/api/v1/staff/getAllStaff",
                type: "GET",
                headers: {
                    "Authorization": "Bearer " + this.token,
                },
                success: function(response) {
                    response.forEach(staffObj => {
                        staff.push(new StaffModel(staffObj.staff_id,staffObj.first_name,staffObj.last_name,staffObj.designation,staffObj.gender,staffObj.joined_date,staffObj.dob,staffObj.address_line_01,staffObj.address_line_02,staffObj.address_line_03,staffObj.address_line_04,staffObj.address_line_05,staffObj.contact_number,staffObj.email,staffObj.role,staffObj.fields_list,staffObj.logs_list,staffObj.equipments_list,staffObj.vehicles_list));
                    });
                    resolve();
                },
                error: function(xhr, status, error) {
                    console.error("Error: " + error);

                    Swal.fire("Data Fetch Error");
                    console.error("Response:", xhr.responseText);
                    reject(error);
                }
            });
        });
    }
}