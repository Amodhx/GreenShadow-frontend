import StaffController from "../../controller/staffController.js";
import StaffModel from "../../model/staffModel.js";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const sriLankaContactRegex = /^(?:\+94|0)?7[0-9]\d{7}$/;


$("#staffBtn").on('click',()=>{
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

$("#addStaffBtn").on('click',()=>{
    $("#popup").addClass("show");
})
$("#staffCanselBtn").on('click',()=>{
    clearAllStaffAddFields();
    $("#popup").removeClass("show");
})
$("#staffSaveBtn").on('click',()=>{
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
    let postalCode =$("#postalCode").val();
    let contactNumber = $("#contact_number").val();
    let email = $("#email").val();
    let role = $("#role").val();

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
        role !=""){

            if (validateEmail(email)){
                if (validateContactNumber(contactNumber)){
                    let staffModel = new StaffModel(
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

                    let staffController = new StaffController();
                    staffController.saveStaffValues(staffModel);
                    clearAllStaffAddFields();
                    $("#popup").removeClass("show");
                }else {
                    alert("Invalid Contact Number");
                }
            }else {
                alert("Invalid Email");
            }

    }else {
        alert("Add Values Hutto mulinma !!");
    }
})

function validateEmail(email){
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validateContactNumber(contact){
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


