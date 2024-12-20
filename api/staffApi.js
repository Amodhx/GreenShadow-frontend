import {staff} from "../db/db.js";
import StaffModel from "../model/staffModel.js";

export default class StaffApi{
    token = localStorage.getItem('jwtToken');

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
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resolve();
                },
                error: function(xhr, status, error) {
                    switch (xhr.status) {
                        case 400:
                            Swal.fire("Bad Request", "The request was invalid. Please check your input and try again.", "error");
                            break;
                        case 401:
                            Swal.fire("Unauthorized", "You are not authorized to perform this action.", "warning");
                            break;
                        case 403:
                            Swal.fire("Forbidden", "You do not have permission to access this resource.", "error");
                            break;
                        case 404:
                            Swal.fire("Not Found", "The requested resource could not be found.", "info");
                            break;
                        case 500:
                            Swal.fire("Server Error", "An error occurred on the server. Please try again later.", "error");
                            break;
                        default:
                            Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
                            break;
                    }
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
            console.log(data)

            $.ajax({
                url: "http://localhost:5050/api/v1/staff/updateStaff",
                type: "PATCH",
                data:JSON.stringify(data),
                contentType: "application/json",
                headers: {
                    "Authorization": "Bearer " + this.token
                },
                success: function() {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been Updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resolve();
                },
                error: function(xhr, status, error) {
                    switch (xhr.status) {
                        case 400:
                            Swal.fire("Bad Request", "The request was invalid. Please check your input and try again.", "error");
                            break;
                        case 401:
                            Swal.fire("Unauthorized", "You are not authorized to perform this action.", "warning");
                            break;
                        case 403:
                            Swal.fire("Forbidden", "You do not have permission to access this resource.", "error");
                            break;
                        case 404:
                            Swal.fire("Not Found", "The requested resource could not be found.", "info");
                            break;
                        case 500:
                            Swal.fire("Server Error", "An error occurred on the server. Please try again later.", "error");
                            break;
                        default:
                            Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
                            break;
                    }
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
                    Swal.fire({
                        icon: "success",
                        title: "Your Staff has been deleted!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resolve();
                },
                error: function(xhr, status, error) {
                    switch (xhr.status) {
                        case 400:
                            Swal.fire("Bad Request", "The request was invalid. Please check your input and try again.", "error");
                            break;
                        case 401:
                            Swal.fire("Unauthorized", "You are not authorized to perform this action.", "warning");
                            break;
                        case 403:
                            Swal.fire("Forbidden", "You do not have permission to access this resource.", "error");
                            break;
                        case 404:
                            Swal.fire("Not Found", "The requested resource could not be found.", "info");
                            break;
                        case 500:
                            Swal.fire("Server Error", "An error occurred on the server. Please try again later.", "error");
                            break;
                        default:
                            Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
                            break;
                    }
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
                    switch (xhr.status) {
                        case 400:
                            Swal.fire("Bad Request", "The request was invalid. Please check your input and try again.", "error");
                            break;
                        case 401:
                            Swal.fire("Unauthorized", "You are not authorized to perform this action.", "warning");
                            break;
                        case 403:
                            Swal.fire("Forbidden", "You do not have permission to access this resource.", "error");
                            Swal.fire({
                                title: "The Session expired?",
                                text: "You have to log again to system?",
                                icon: "question"
                            }).then(() => {
                                window.location.replace('index.html');
                                localStorage.removeItem("securityKey")
                                localStorage.removeItem("jwtToken")
                        });
                            break;
                        case 404:
                            Swal.fire("Not Found", "The requested resource could not be found.", "info");
                            break;
                        case 500:
                            Swal.fire("Server Error", "An error occurred on the server. Please try again later.", "error");
                            break;
                        default:
                            Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
                            break;
                    }
                    reject(error);
                }
            });
        });
    }
}