import StaffController from "../../controller/staffController.js";
import StaffModel from "../../model/staffModel.js";
import {fields, staff} from "../../db/db.js";
import FieldController from "../../controller/fieldController.js";
import EquipmentController from "../../controller/equipmentController.js";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const sriLankaContactRegex = /^(?:\+94|0)?7[0-9]\d{7}$/;
let staff_Id;
let staff_Controller = new StaffController();
let field_controller = new FieldController();
let equipment_Controller = new EquipmentController();
let fieldsCodes = [];
let equipmentsCodes = [];
let staffModel;

$("#staffBtn").on('click', () => {
    // $("#sectionDetails").css({
    //     display:"none"
    // });
    // $("#dashBoard").css({
    //     display:"none"
    // });
    // $("#cropDetails").css({
    //     display:"block"
    // })
    // $("#staffDetails").css({
    //     display:"none"
    // })
    console.log("A")
})

$("#addStaffBtn").on('click', () => {
    valuesIndex = -1;
    setStaffAddFromButtons();
    $("#popup").addClass("show");
})
$("#staffCanselBtn").on('click', () => {
    let vl = $("#staffCanselBtn").text();
    if (vl == "Cansel") {
        clearAllStaffAddFields();
        $("#popup").removeClass("show");
    } else {
        staff_Controller.deleteStaffValue(staff_Id);
        clearAllStaffAddFields();
        $("#popup").removeClass("show");

        // Todo
        alert("Staff Deleted !");
    }

})
$("#staffNextBtn").on('click', () => {
    let firstName = $("#first_name").val();
    let lastName = $("#last_name").val();
    let designation = $("#designation").val();
    let gender = $("#gender").val();
    let joinedDate = $("#joined_date").val();
    let dob = $("#dob").val();
    let homeNumber = $("#homeNumber").val();
    let homeLane = $("#homeLane").val();
    let mainCity = $("#mainCity").val();
    let mainState = $("#mainState").val();
    let postalCode = $("#postalCode").val();
    let contactNumber = $("#contact_number").val();
    let email = $("#email").val();
    let role = $("#role").val();

    let vl = $("#staffNextBtn").text();
    if (vl == "Next") {
        if (firstName != "" &&
            lastName != "" &&
            designation != "" &&
            gender != "" &&
            joinedDate != "" &&
            dob != "" &&
            homeNumber != "" &&
            homeLane != "" &&
            mainCity != "" &&
            mainState != "" &&
            postalCode != "" &&
            contactNumber != "" &&
            email != "" &&
            role != "") {

            if (validateEmail(email)) {
                if (validateContactNumber(contactNumber)) {

                     staffModel = new StaffModel(
                        "",
                        firstName,
                        lastName,
                        designation,
                        gender,
                        joinedDate,
                        dob,
                        homeNumber,
                        homeLane,
                        mainCity,
                        mainState,
                        postalCode,
                        contactNumber,
                        email,
                        role
                    );

                    setComboBoxValues();
                    $("#staffSetEquipmentAndFieldsPopup").removeClass('hide');
                    // staff_Controller.saveStaffValues(staffModel);
                    clearAllStaffAddFields();
                    $("#popup").removeClass("show");
                } else {
                    alert("Invalid Contact Number");
                }
            } else {
                alert("Invalid Email");
            }

        } else {
            alert("Add Values Hutto mulinma !!");
        }
    } else {
        if (validateEmail(email)) {
            if (validateContactNumber(contactNumber)) {
                let staffModel = new StaffModel(
                    staff_Id,
                    firstName,
                    lastName,
                    designation,
                    gender,
                    joinedDate,
                    dob,
                    homeNumber,
                    homeLane,
                    mainCity,
                    mainState,
                    postalCode,
                    contactNumber,
                    email,
                    role
                );

                staff_Controller.updateStaffValues(staffModel);
                clearAllStaffAddFields();
                $("#popup").removeClass("show");

                //             Todo
                alert("Staff Updated Successfully !!!");
            }
        }
    }
})

$("#selectFieldEqFormSaveBtn").on('click', () => {
    staffModel.fields_list = fieldsCodes;
    staffModel.equipments_list = equipmentsCodes;
    staff_Controller.saveStaffValues(staffModel);
    $("#staffSetEquipmentAndFieldsPopup").addClass('hide');
    clearAllAddEquipmentFieldsModelFields();
})

function setComboBoxValues() {
    let fieldCodes = field_controller.getFieldCodes();
    fieldCodes.map(function (code) {
        var vl = `<option>${code}</option>`;

        $("#selectFieldsCombo").append(vl);
    });

    let eqCodes = equipment_Controller.getEquipmentCodes();
    eqCodes.map(function (code) {
        var vl = `<option>${code}</option>`;

        $("#selectEquipmentsCombo").append(vl);
    });
}

$("#addEquipmentBtn").on('click', () => {
    let value = $("#selectEquipmentsCombo").val();
    equipmentsCodes.push(value);
    let vl = `<div class="list-content">${value}</div>`;
    $("#equipmentContainerList").append(vl);


})

$("#addFieldsBtn").on('click', () => {
    let value = $("#selectFieldsCombo").val();
    fieldsCodes.push(value);
    let vl = `<div class="list-content">${value}</div>`;
    $("#fieldContainerList").append(vl);
})


$("#selectFieldEqFormCanselBtn").on('click', () => {
    clearAllAddEquipmentFieldsModelFields();
    $("#staffSetEquipmentAndFieldsPopup").addClass('hide');
});

function clearAllAddEquipmentFieldsModelFields() {
    $("#fieldContainerList").empty();
    $("#equipmentContainerList").empty();
    $("#selectEquipmentsCombo").val("");
    $("#selectFieldsCombo").val("");
    equipmentsCodes.length = 0;
    fieldsCodes.length = 0;
}

function validateEmail(email) {
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validateContactNumber(contact) {
    if (sriLankaContactRegex.test(contact)) {
        return true;
    } else {
        return false;
    }
}

function clearAllStaffAddFields() {
    $("#first_name").val("");
    $("#last_name").val("");
    $("#designation").val("");
    $("#gender").val("");
    $("#joined_date").val("");
    $("#dob").val("");
    $("#homeNumber").val("");
    $("#homeLane").val("");
    $("#mainCity").val("");
    $("#mainState").val("");
    $("#postalCode").val("");
    $("#contact_number").val("");
    $("#email").val("");
    $("#role").val("");
}

let valuesIndex = -1;
$("#tableStaff").on('click', 'tr', function () {
    valuesIndex = $(this).index();
    let staffValues = staff_Controller.getTabelRowValues(valuesIndex);
    staff_Id = staffValues.staff_id;
    $("#first_name").val(staffValues.first_name);
    $("#last_name").val(staffValues.last_name);
    $("#designation").val(staffValues.designation);
    $("#gender").val(staffValues.gender);
    $("#joined_date").val(staffValues.joined_date);
    $("#dob").val(staffValues.dob);
    $("#homeNumber").val(staffValues.address_line_01);
    $("#homeLane").val(staffValues.address_line_02);
    $("#mainCity").val(staffValues.address_line_03);
    $("#mainState").val(staffValues.address_line_04);
    $("#postalCode").val(staffValues.address_line_05);
    $("#contact_number").val(staffValues.contact_number);
    $("#email").val(staffValues.email);
    $("#role").val(staffValues.role);
    setStaffAddFromButtons();
    if (valuesIndex > -1) {

    }


    $("#popup").addClass("show");

})

function setStaffAddFromButtons() {
    if (valuesIndex > -1) {
        $("#staffCanselBtn").text("Delete");
        $("#staffCanselBtn").css({
            backgroundColor: "red",
            color: "white"
        })
        $("#staffNextBtn").text("Update");
    } else {
        $("#staffCanselBtn").text("Cansel");
        $("#staffCanselBtn").css({
            backgroundColor: "#d3d3d3",
            color: "black"
        })
        $("#staffNextBtn").text("Save");
    }
}




