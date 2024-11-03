import FieldController from "../../controller/fieldController.js";
import {VehicleController} from "../../controller/vehicleController.js";
import EquipmentController from "../../controller/equipmentController.js";
import StaffModel from "../../model/staffModel.js";
import StaffController from "../../controller/staffController.js";
import {CropController} from "../../controller/cropController.js";
import {FieldModel} from "../../model/fieldModel.js";
import {CropModel} from "../../model/cropModel.js";
import {EquipmentModel} from "../../model/equipmentModel.js";
import {VehicleModel} from "../../model/vehicleModel.js";
import {LogController} from "../../controller/logController.js";
import {LogModel} from "../../model/logModel.js";


$(".userIcon ").on('click',()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to leave the system?!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log Out!"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace('index.html');
            Swal.fire({
                title: "Log Outed!",
                text: "You log out the system",
                icon: "success"
            });
        }
    });
})
// staff js start
$("#dashBoardBtn").on('click', () => {
    $("#dashBoardBtn").addClass('active');
    $("#staffBtn").removeClass('active');
    $("#fieldBtn").removeClass('active');
    $("#cropBtn").removeClass('active');
    $("#equipmentBtn").removeClass('active');
    $("#vehicleBtn").removeClass('active');
    $("#logsBtn").removeClass('active');
    $("#logsSection").css({
        display: "none"
    })
    $("#dashBoardSection").css({
        display: "block"
    })
    $("#staffSection").css({
        display: "none"
    })
    $("#fieldSection").css({
        display: "none"
    })
    $("#cropSection").css({
        display: "none"
    })
    $("#equipmentSection").css({
        display: "none"
    })
    $("#vehicleSection").css({
        display: "none"
    })


})
$("#staffBtn").on('click', () => {
    $("#dashBoardBtn").removeClass('active');
    $("#staffBtn").addClass('active');
    $("#fieldBtn").removeClass('active');
    $("#cropBtn").removeClass('active');
    $("#equipmentBtn").removeClass('active');
    $("#vehicleBtn").removeClass('active');
    $("#logsBtn").removeClass('active');
    $("#logsSection").css({
        display: "none"
    })
    $("#dashBoardSection").css({
        display: "none"
    })
    $("#staffSection").css({
        display: "block"
    })
    $("#fieldSection").css({
        display: "none"
    })
    $("#cropSection").css({
        display: "none"
    })
    $("#equipmentSection").css({
        display: "none"
    })
    $("#vehicleSection").css({
        display: "none"
    })

    staff_controller.loadValues();

})
$("#fieldBtn").on('click', () => {
    $("#dashBoardBtn").removeClass('active');
    $("#staffBtn").removeClass('active');
    $("#fieldBtn").addClass('active');
    $("#cropBtn").removeClass('active');
    $("#equipmentBtn").removeClass('active');
    $("#vehicleBtn").removeClass('active');
    $("#logsBtn").removeClass('active');
    $("#logsSection").css({
        display: "none"
    })
    $("#dashBoardSection").css({
        display: "none"
    })
    $("#staffSection").css({
        display: "none"
    })
    $("#fieldSection").css({
        display: "block"
    })
    $("#cropSection").css({
        display: "none"
    })
    $("#equipmentSection").css({
        display: "none"
    })
    $("#vehicleSection").css({
        display: "none"
    })

    field_controller.loadCards();

})
$("#cropBtn").on('click', () => {
    $("#dashBoardBtn").removeClass('active');
    $("#staffBtn").removeClass('active');
    $("#fieldBtn").removeClass('active');
    $("#cropBtn").addClass('active');
    $("#equipmentBtn").removeClass('active');
    $("#vehicleBtn").removeClass('active');
    $("#logsBtn").removeClass('active');
    $("#logsSection").css({
        display: "none"
    })
    $("#dashBoardSection").css({
        display: "none"
    })
    $("#staffSection").css({
        display: "none"
    })
    $("#fieldSection").css({
        display: "none"
    })
    $("#cropSection").css({
        display: "block"
    })
    $("#equipmentSection").css({
        display: "none"
    })
    $("#vehicleSection").css({
        display: "none"
    })
    crop_controller.loadCards();

})
$("#equipmentBtn").on('click', () => {
    $("#dashBoardBtn").removeClass('active');
    $("#staffBtn").removeClass('active');
    $("#fieldBtn").removeClass('active');
    $("#cropBtn").removeClass('active');
    $("#equipmentBtn").addClass('active');
    $("#vehicleBtn").removeClass('active');
    $("#logsBtn").removeClass('active');
    $("#logsSection").css({
        display: "none"
    })


    $("#dashBoardSection").css({
        display: "none"
    })
    $("#staffSection").css({
        display: "none"
    })
    $("#fieldSection").css({
        display: "none"
    })
    $("#cropSection").css({
        display: "none"
    })
    $("#equipmentSection").css({
        display: "block"
    })
    $("#vehicleSection").css({
        display: "none"
    })

    equipment_controller.loadTable();

})
$("#vehicleBtn").on('click', () => {
    $("#dashBoardBtn").removeClass('active');
    $("#staffBtn").removeClass('active');
    $("#fieldBtn").removeClass('active');
    $("#cropBtn").removeClass('active');
    $("#equipmentBtn").removeClass('active');
    $("#vehicleBtn").addClass('active');
    $("#logsBtn").removeClass('active');
    $("#logsSection").css({
        display: "none"
    })

    $("#dashBoardSection").css({
        display: "none"
    })
    $("#staffSection").css({
        display: "none"
    })
    $("#fieldSection").css({
        display: "none"
    })
    $("#cropSection").css({
        display: "none"
    })
    $("#equipmentSection").css({
        display: "none"
    })
    $("#vehicleSection").css({
        display: "block"
    })
    vehicle_controller.loadTable();

});
$("#logsBtn").on('click', () => {
    $("#dashBoardBtn").removeClass('active');
    $("#staffBtn").removeClass('active');
    $("#fieldBtn").removeClass('active');
    $("#cropBtn").removeClass('active');
    $("#equipmentBtn").removeClass('active');
    $("#vehicleBtn").removeClass('active');
    $("#logsBtn").addClass('active');

    $("#dashBoardSection").css({
        display: "none"
    })
    $("#staffSection").css({
        display: "none"
    })
    $("#fieldSection").css({
        display: "none"
    })
    $("#cropSection").css({
        display: "none"
    })
    $("#equipmentSection").css({
        display: "none"
    })
    $("#vehicleSection").css({
        display: "none"
    })
    $("#logsSection").css({
        display: "block"
    })
    log_controller.loadCards();
})
$("#addNewStaffBtn").on('click', () => {
    loadOptionsValues();
    staffTblSelectIndex = -1;
    setStaffAddFromButtons();
});
let field_controller = new FieldController();
let vehicle_controller = new VehicleController();
let equipment_controller = new EquipmentController();
let staff_controller = new StaffController();
let crop_controller = new CropController();
let log_controller = new LogController();
let field_options;
let vehicle_options;
let equipment_options;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const sriLankaContactRegex = /^(?:\+94|0)?7[0-9]\d{7}$/;
let staffTblSelectIndex = -1;
let selectedStaffDataStaff_id;

let selected_fields = [];
let selected_vehicle = [];
let selected_equipments = [];

let selected_fieldsToAddContainers = [];
let selected_vehicleToAddContainers = [];
let selected_equipmentsToAddContainers = [];

function loadOptionsValues() {
    field_options = field_controller.getFieldCodes();
    vehicle_options = vehicle_controller.getVehicleCodes();
    equipment_options = equipment_controller.getEquipmentCodes();
}

// Add Field
// jQuery to add a new dropdown with predefined options and a remove button
$('#addStaffFieldButton').on('click', function () {
    loadFieldContainer();
});

function loadFieldContainer() {
    // Create a new div to hold the select and remove button
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="staffFieldList form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Field</option>`);
    field_options.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalStaffField').append($fieldContainer);
}

$('#addStaffVehicleButton').on('click', function () {
    loadVehicleContainer();
});

function loadVehicleContainer() {
    // Create a new div to hold the select and remove button
    const $vehicleContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="staffVehicleList form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Vehicle</option>`);
    vehicle_options.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $vehicleContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $vehicleContainer.append($newSelect).append($removeButton);


    // Append the new field container to the additionalStaffField
    $('#additionalStaffVehicle').append($vehicleContainer);
}


//Add Equipment
// jQuery to add a new dropdown with predefined options and a remove button
$('#addStaffEquipmentButton').on('click', function () {
    loadEquipmentContainer();
});

function loadEquipmentContainer() {
    // Create a new div to hold the select and remove button
    const $equipmentContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="staffEquipmentList form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Equipment</option>`);
    equipment_options.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $equipmentContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $equipmentContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalStaffEquipment').append($equipmentContainer);
}

function setSelectedFields() {
    $('.staffFieldList').each(function () {
        $(this).val(selected_fieldsToAddContainers.shift())
    });
}

function setSelectedEquipments() {
    $('.staffEquipmentList').each(function () {
        $(this).val(selected_equipmentsToAddContainers.shift())
    });
}

function setSelectedVehicles() {
    $('.staffVehicleList').each(function () {
        $(this).val(selected_vehicleToAddContainers.shift())
    });
}

$("#btnSaveStaffDetails").on('click', () => {
    let v = $("#btnSaveStaffDetails").text();
    selected_equipments = [];
    selected_fields = [];
    selected_vehicle = [];
    let staffModel;
    $('.staffFieldList').each(function () {
        selected_fields.push($(this).val()); // Add the selected value to the array
    });
    $('.staffVehicleList').each(function () {
        selected_vehicle.push($(this).val()); // Add the selected value to the array
    });
    $('.staffEquipmentList').each(function () {
        selected_equipments.push($(this).val()); // Add the selected value to the array
    });

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let designation = $("#designation").val();
    let gender = $("#gender").val();
    let joinedDate = $("#joinedDate").val();
    let dob = $("#dob").val();
    let homeNumber = $("#addressLine01").val();
    let homeLane = $("#addressLine02").val();
    let mainCity = $("#addressLine03").val();
    let mainState = $("#addressLine04").val();
    let postalCode = $("#addressLine05").val();
    let contactNumber = $("#ContactNo").val();
    let email = $("#emailStaff").val();
    let role = $("#roleStaff").val();
    if (v == "Save Field") {
        //     save

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
                        role,
                        selected_fields,
                        "",
                        selected_equipments,
                        selected_vehicle
                    );
                    staff_controller.saveStaffValues(staffModel);
                    $('#newStaffModal').modal('hide');
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    clearStaffAddModelFields();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Invalid Contact Number",
                    });
                }

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have to add values first!",
            });
        }
    } else {
        //     Todo:Update
        let staffModel = new StaffModel(
            selectedStaffDataStaff_id,
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
            role,
            selected_fields,
            "",
            selected_equipments,
            selected_vehicle
        );
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                staff_controller.updateStaffValues(staffModel);
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

        $('#newStaffModal').modal('hide');
        clearStaffAddModelFields();
        alert("staff Updated !!!!");
    }


})

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

$("#tableStaff").on('click', 'tr', function () {
    clearStaffAddModelFields();
    staffTblSelectIndex = $(this).index();
    let staffValues = staff_controller.getTabelRowValues(staffTblSelectIndex);
    selectedStaffDataStaff_id = staffValues.staff_id;
    $("#firstName").val(staffValues.first_name);
    $("#lastName").val(staffValues.last_name);
    $("#designation").val(staffValues.designation);
    $("#gender").val(staffValues.gender);
    $("#joinedDate").val(staffValues.joined_date);
    $("#dob").val(staffValues.dob);
    $("#addressLine01").val(staffValues.address_line_01);
    $("#addressLine02").val(staffValues.address_line_02);
    $("#addressLine03").val(staffValues.address_line_03);
    $("#addressLine04").val(staffValues.address_line_04);
    $("#addressLine05").val(staffValues.address_line_05);
    $("#ContactNo").val(staffValues.contact_number);
    $("#emailStaff").val(staffValues.email);
    $("#roleStaff").val(staffValues.role);
    selected_fields = staffValues.fields_list;
    selected_equipments = staffValues.equipments_list;
    selected_vehicle = staffValues.vehicles_list;
    selected_fieldsToAddContainers = selected_fields.slice();
    selected_equipmentsToAddContainers = selected_equipments.slice();
    selected_vehicleToAddContainers = selected_vehicle.slice();

    for (let i = 0; i < selected_vehicle.length; i++) {
        loadVehicleContainer();
    }
    for (let i = 0; i < selected_fields.length; i++) {
        loadFieldContainer();
    }
    for (let i = 0; i < selected_equipments.length; i++) {
        loadEquipmentContainer();
    }
    setSelectedVehicles();
    setSelectedFields();
    setSelectedEquipments();
    setStaffAddFromButtons();
    $('#newStaffModal').modal('show');


})

function clearStaffAddModelFields() {
    selected_vehicle = [];
    selected_fields = [];
    selected_equipments = [];
    $("#firstName").val("");
    $("#lastName").val("");
    $("#designation").val("");
    $("#gender").val("");
    $("#joinedDate").val("");
    $("#dob").val("");
    $("#addressLine01").val("");
    $("#addressLine02").val("");
    $("#addressLine03").val("");
    $("#addressLine04").val("");
    $("#addressLine05").val("");
    $("#ContactNo").val("");
    $("#emailStaff").val("");
    $("#roleStaff").val("");

    $("#additionalStaffEquipment").empty();
    $("#additionalStaffVehicle").empty();
    $("#additionalStaffField").empty();
}

function setStaffAddFromButtons() {
    if (staffTblSelectIndex > -1) {
        $("#btnCloseStaffDetails").text("Delete");
        $("#btnCloseStaffDetails").css({
            backgroundColor: "red",
            color: "white"
        })
        $("#btnSaveStaffDetails").text("Update");
    } else {
        $("#btnCloseStaffDetails").text("Cansel");
        $("#btnCloseStaffDetails").css({
            backgroundColor: "#d3d3d3",
            color: "black"
        })
        $("#btnSaveStaffDetails").text("Save Field");
    }
}

$("#btnCloseStaffDetails").on('click', () => {
    let vl = $("#btnCloseStaffDetails").text();
    if (vl === "Delete") {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                staff_controller.deleteStaffValue(selectedStaffDataStaff_id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    } else {
        clearStaffAddModelFields();
    }
})


//Staff Js File end


function previewImage(inputId, previewId) {
    const input = $('#' + inputId)[0];
    const preview = $('#' + previewId);

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.attr('src', e.target.result);
            preview.removeClass('d-none');
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        preview.addClass('d-none').attr('src', '#');
    }
}

// Optional: Add change event listener instead of inline `onchange` in HTML
$('#fieldImage1').on('change', function () {
    previewImage('fieldImage1', 'preview1');
});
$('#fieldImage2').on('change', function () {
    previewImage('fieldImage2', 'preview2');
});


let staff_optionsToSaveField;
let equipment_optionsToSaveFiled;
let crop_optionToSaveField;
let selected_staffOptionsToSaveField = [];
let selected_equipmentOptionsToSaveField = [];
let selected_cropOptionsToSaveField = [];
let selected_staffOptionsToUpdateFieldAddContainer = [];
let selected_equipmentOptionsToUpdateFieldAddContainer = [];
let selected_cropOptionsToUpdateFieldAddContainer = [];
let fieldSaveUpdateIndex = -1;
let filedIdToUpdate;


function loadStaffContainerWhenFieldSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="staffListSaveField form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Staff</option>`);
    staff_optionsToSaveField.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalFieldStaff').append($fieldContainer);
}

function setSelectedStaffToUpdateField() {
    $('.staffListSaveField').each(function () {
        $(this).val(selected_staffOptionsToUpdateFieldAddContainer.shift())
    });
}

function setSelectedEquipmentsToUpdateField() {
    $('.EquipmentListSaveField').each(function () {
        $(this).val(selected_equipmentOptionsToUpdateFieldAddContainer.shift())
    });
}

function setSelectedCropsToUpdateField() {
    $('.cropListSaveField').each(function () {
        $(this).val(selected_cropOptionsToUpdateFieldAddContainer.shift())
    });
}

function loadEquipmentContainerWhenFieldSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="EquipmentListSaveField form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Equipments</option>`);
    equipment_optionsToSaveFiled.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalEquipmentStaff').append($fieldContainer);
}

function loadCropContainerWhenFieldSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="cropListSaveField form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Crops</option>`);
    crop_optionToSaveField.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalFieldCrop').append($fieldContainer);
}

$("#addNewFieldBtn").on('click', () => {
    fieldSaveUpdateIndex = -1;
    setFieldModelBtn();
    equipment_optionsToSaveFiled = equipment_controller.getEquipmentCodes();
    crop_optionToSaveField = crop_controller.getCropCodes();
    staff_optionsToSaveField = staff_controller.getStaffIds();
})

$("#addFieldStaffBtn").on('click', () => {
    loadStaffContainerWhenFieldSave();
})
$("#addFieldCropBtn").on('click', () => {
    loadCropContainerWhenFieldSave();
})
$("#addFieldEquipmentBtn").on('click', () => {
    loadEquipmentContainerWhenFieldSave();
})


$("#btnSaveFieldDetails").on('click', () => {
    selected_staffOptionsToSaveField = [];
    selected_equipmentOptionsToSaveField = [];
    selected_cropOptionsToSaveField = [];
    let fieldName = $("#fieldName").val();
    let fieldLocation = $("#fieldLocation").val();
    let extendSize = $("#extentSize").val();
    let image1 = $('#preview1').attr('src');
    let image2 = $('#preview2').attr('src');
    $('.staffListSaveField').each(function () {
        selected_staffOptionsToSaveField.push($(this).val()); // Add the selected value to the array
    });
    $('.EquipmentListSaveField').each(function () {
        selected_equipmentOptionsToSaveField.push($(this).val()); // Add the selected value to the array
    });
    $('.cropListSaveField').each(function () {
        selected_cropOptionsToSaveField.push($(this).val()); // Add the selected value to the array
    });

    let field_model = new FieldModel(",", fieldName, fieldLocation, extendSize, selected_staffOptionsToSaveField, selected_cropOptionsToSaveField, image1, image2, "", selected_equipmentOptionsToSaveField);

    let btnText = $("#btnSaveFieldDetails").text();
    if (btnText === "Save Field") {
        if (fieldName != "" && fieldLocation != "" && extendSize != "" && image1 != "" && image2 != "") {
            field_controller.saveData(field_model);
            $('#newFieldModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            clearFieldAddModalFields();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have Add Values First!",
            });
        }

    } else {
        //     Todo: Update
        field_model.field_code = filedIdToUpdate;
        field_controller.updateFiledValues(field_model);
        console.log("MainWindo" + field_model)
        $('#newFieldModal').modal('hide');
        Swal.fire({
            icon: "success",
            title: "Your Field Was Updated!",
            showConfirmButton: false,
            timer: 1500
        });
        clearFieldAddModalFields();

    }


})

function clearFieldAddModalFields() {
    selected_staffOptionsToSaveField = [];
    selected_equipmentOptionsToSaveField = [];
    selected_cropOptionsToSaveField = [];
    $("#fieldName").val("");
    $("#fieldLocation").val("");
    $("#extentSize").val("");
    $("#additionalEquipmentStaff").empty();
    $("#additionalFieldCrop").empty();
    $("#additionalFieldStaff").empty();
    $('#fieldImage1').val('');  // Clear the file input
    $('#fieldImage2').val('');  // Clear the file input
    $('#preview1').attr('src', '#').addClass('d-none');
    $('#preview2').attr('src', '#').addClass('d-none');

}

$("#btnCloseFieldDetails").on('click', () => {
    clearFieldAddModalFields();
})

$(document).on("click", ".btnFieldDelete", function () {
    const index = $(this).data("index");
    let filedModel = field_controller.getFieldFromIndex(index);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            let idTodelete = filedModel.field_code;
            field_controller.deleteFieldValues(idTodelete);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });

})
$(document).on("click", ".btnFieldUpdate", function () {
    clearFieldAddModalFields();
    const index = $(this).data("index");
    fieldSaveUpdateIndex = index;
    setFieldModelBtn();
    let fieldModel = field_controller.getFieldFromIndex(index);
    setIdToUpdateField(fieldModel);

    selected_staffOptionsToSaveField = fieldModel.staff_list;
    selected_equipmentOptionsToSaveField = fieldModel.equipments_list;
    selected_cropOptionsToSaveField = fieldModel.crop_list;

    selected_staffOptionsToUpdateFieldAddContainer = selected_staffOptionsToSaveField.slice();
    selected_equipmentOptionsToUpdateFieldAddContainer = selected_equipmentOptionsToSaveField.slice();
    selected_cropOptionsToUpdateFieldAddContainer = selected_cropOptionsToSaveField.slice();

    for (let i = 0; i < selected_staffOptionsToSaveField.length; i++) {
        loadStaffContainerWhenFieldSave();
    }
    for (let i = 0; i < selected_equipmentOptionsToSaveField.length; i++) {
        loadEquipmentContainerWhenFieldSave();
    }
    for (let i = 0; i < selected_cropOptionsToSaveField.length; i++) {
        loadCropContainerWhenFieldSave();
    }
    setSelectedEquipmentsToUpdateField();
    setSelectedCropsToUpdateField();
    setSelectedStaffToUpdateField();

    $("#fieldName").val(fieldModel.field_name);
    $("#fieldLocation").val(fieldModel.field_location);
    $("#extentSize").val(fieldModel.extent_size);
    $('#preview1').attr('src', fieldModel.field_image_01).removeClass('d-none');
    $('#preview2').attr('src', fieldModel.field_image_02).removeClass('d-none');
    $('#newFieldModal').modal('show');

});

function setIdToUpdateField(fieldModel) {
    filedIdToUpdate = fieldModel.field_code;
}

function setFieldModelBtn() {
    if (fieldSaveUpdateIndex > -1) {
        $("#btnSaveFieldDetails").text("Update");
    } else {
        $("#btnSaveFieldDetails").text("Save Field");
    }
}


//field JS END

let field_optionsToSaveCrop;
let cropSaveUpdateIndex = -1;
let selected_fieldsToSaveCrop = [];
let selected_fieldOptionsToUpdateCrop = [];
let cropIdToUpdate;

$("#addNewCropBtn").on('click', () => {
    cropSaveUpdateIndex = -1;
    setAddCropModelButtons();
    field_optionsToSaveCrop = field_controller.getFieldCodes();
})
$("#addFieldToCropSaveBtn").on('click', () => {
    loadFieldContainerWhenCropSave();
})

function loadFieldContainerWhenCropSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="fieldListToSaveCrop form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Fields</option>`);
    field_optionsToSaveCrop.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalCropField').append($fieldContainer);
}

function clearAddCropModelFields() {
    selected_fieldsToSaveCrop = [];
    $("#cropCommonName").val("");
    $("#cropScientificName").val("");
    $("#cropCategory").val("");
    $("#cropSeason").val("");
    $('#preview3').attr('src', '#').addClass('d-none');
    $('#cropImage').val("");
    $('#additionalCropField').empty();
}

$("#btnCloseCropDetails").on('click', () => {
    clearAddCropModelFields();
})

$('#cropImage').on('change', function () {
    previewImage('cropImage', 'preview3');
});

$("#btnSaveCropDetails").on('click', () => {


    selected_fieldsToSaveCrop = [];
    let cropCommonName = $("#cropCommonName").val();
    let cropScientificName = $("#cropScientificName").val();
    let cropCategory = $("#cropCategory").val();
    let cropSeason = $("#cropSeason").val();
    let cropImage = $('#preview3').attr('src');
    $('.fieldListToSaveCrop').each(function () {
        selected_fieldsToSaveCrop.push($(this).val()); // Add the selected value to the array
    });

    let cropModel = new CropModel("", cropCommonName, cropScientificName, cropImage, cropCategory, cropSeason, selected_fieldsToSaveCrop, "");
    if (cropCommonName != "" && cropScientificName != "" && cropCategory != "" && cropSeason != "") {
        let vl = $("#btnSaveCropDetails").text();
        if (vl == "Save Crop") {
            crop_controller.saveCrop(cropModel);
            $('#newCropModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddCropModelFields();
        } else {
            cropModel.crop_code = cropIdToUpdate;
            crop_controller.updateCropValues(cropModel);
            $('#newCropModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your Field Was Updated!",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddCropModelFields();
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have Add Values First!",
        });
    }

})

function setAddCropModelButtons() {
    if (cropSaveUpdateIndex > -1) {
        $("#btnSaveCropDetails").text("Update");
    } else {
        $("#btnSaveCropDetails").text("Save Crop");
    }
}

$(document).on("click", ".btnCropDelete", function () {
    const index = $(this).data("index");
    let cropModel = crop_controller.getCropFromIndex(index);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            let idToDelete = cropModel.crop_code;
            crop_controller.deleteCropValues(idToDelete);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });

})

function setSelectedFieldToUpdatedCrop() {
    $('.fieldListToSaveCrop').each(function () {
        $(this).val(selected_fieldOptionsToUpdateCrop.shift())
    });
}

function setIdToUpdateCrop(cropModel) {
    cropIdToUpdate = cropModel.crop_code;
}

$(document).on("click", ".btnCropUpdate", function () {
    clearAddCropModelFields();
    const index = $(this).data("index");
    cropSaveUpdateIndex = index;
    setAddCropModelButtons();
    let cropModel = crop_controller.getCropFromIndex(index);
    setIdToUpdateCrop(cropModel);
    selected_fieldsToSaveCrop = cropModel.field_code;
    selected_fieldOptionsToUpdateCrop = selected_fieldsToSaveCrop.slice();
    for (let i = 0; i < selected_fieldsToSaveCrop.length; i++) {
        loadFieldContainerWhenCropSave();
    }
    setSelectedFieldToUpdatedCrop();
    $("#cropCommonName").val(cropModel.crop_common_name);
    $("#cropScientificName").val(cropModel.crop_scientific_name);
    $("#cropCategory").val(cropModel.category);
    $("#cropSeason").val(cropModel.season);
    $('#preview3').attr('src', cropModel.crop_image).removeClass('d-none');
    $('#newCropModal').modal('show');

});


//crop crud over;

let field_optionsToSaveEquipment;
let staff_optionsToSaveEquipment;
let equipmentSaveUpdateIndex = -1;
let selected_fieldsToSaveEquipment = [];
let selected_StaffToSaveEquipment = [];
let selected_StaffOptionsToUpdateEquipment = [];
let selected_fieldOptionsToUpdateEquipment = [];
let equipmentIdToUpdate;

$("#addNewEquipmentBtn").on('click', () => {
    equipmentSaveUpdateIndex = -1;
    setEquipmentModelButtons();
    staff_optionsToSaveEquipment = staff_controller.getStaffIds();
    field_optionsToSaveEquipment = equipment_controller.getEquipmentCodes();
})

$("#addFieldToEquipmentSaveBtn").on('click', () => {
    loadFieldContainerWhenEquipmentSave();
})
$("#addStaffToEquipmentSaveBtn").on('click', () => {
    loadStaffContainerWhenEquipmentSave();
})

$("#btnSaveEquipmentDetails").on('click', () => {
    selected_fieldsToSaveEquipment = [];
    selected_StaffToSaveEquipment = [];

    let equipmentName = $("#equipmentName").val();
    let equipmentType = $("#equipmentType").val();
    let equipmentCount = $("#equipmentCount").val();
    let equipmentStatus = $("#equipmentStatus").val();

    $('.fieldListToSaveEquipment').each(function () {
        selected_fieldsToSaveEquipment.push($(this).val()); // Add the selected value to the array
    });
    $('.staffListToSaveEquipment').each(function () {
        selected_StaffToSaveEquipment.push($(this).val()); // Add the selected value to the array
    });

    if (equipmentName != "" && equipmentCount != "" && equipmentType != "" && equipmentStatus != "") {
        let vl = $("#btnSaveEquipmentDetails").text();
        let equipmentModel = new EquipmentModel("", equipmentName, equipmentType, equipmentCount, equipmentStatus, selected_StaffToSaveEquipment, selected_fieldsToSaveEquipment);
        console.log(equipmentModel)
        if (vl == "Save Tool") {
            equipment_controller.saveEquipment(equipmentModel);
            $('#newEquipmentModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddEquipmentModelFields();

        } else {
            //     Todo : Update

            equipmentModel.equipment_id = equipmentIdToUpdate;
            equipment_controller.updateEquipmentValues(equipmentModel);
            $('#newEquipmentModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your Equipment Was Updated!",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddEquipmentModelFields();
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have Add Values First!",
        });
    }

})

$("#btnCloseEquipmentDetails").on('click', () => {
    let vl = $("#btnCloseEquipmentDetails").text();
    if (vl == "Close") {
        clearAddEquipmentModelFields();
    } else {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                equipment_controller.deleteEquipmentValue(equipmentIdToUpdate);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        $('#newEquipmentModal').modal('hide');
        clearAddEquipmentModelFields();


    }
})

function clearAddEquipmentModelFields() {
    selected_fieldsToSaveEquipment = [];
    selected_StaffToSaveEquipment = [];
    $("#equipmentName").val("");
    $("#equipmentType").val("");
    $("#equipmentCount").val("");
    $("#equipmentStatus").val("");
    $("#additionalFieldToEquipment").empty();
    $("#additionalStaffToEquipment").empty();

}

function setEquipmentModelButtons() {
    if (equipmentSaveUpdateIndex > -1) {
        $("#btnCloseEquipmentDetails").text("Delete");
        $("#btnCloseEquipmentDetails").css({
            backgroundColor: "red",
            color: "white"
        })
        $("#btnSaveEquipmentDetails").text("Update");
    } else {
        $("#btnCloseEquipmentDetails").text("Close");
        $("#btnCloseEquipmentDetails").css({
            backgroundColor: "#d3d3d3",
            color: "black"
        })
        $("#btnSaveEquipmentDetails").text("Save Tool");
    }
}

function loadFieldContainerWhenEquipmentSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="fieldListToSaveEquipment form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Fields</option>`);
    field_optionsToSaveEquipment.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalFieldToEquipment').append($fieldContainer);
}

function loadStaffContainerWhenEquipmentSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="staffListToSaveEquipment form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Fields</option>`);
    staff_optionsToSaveEquipment.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalStaffToEquipment').append($fieldContainer);
}

function setSelectedFieldToUpdatedEquipment() {
    $('.fieldListToSaveEquipment').each(function () {
        $(this).val(selected_fieldOptionsToUpdateEquipment.shift())

    });
}

function setSelectedStaffToUpdatedEquipment() {
    $('.staffListToSaveEquipment').each(function () {
        $(this).val(selected_StaffOptionsToUpdateEquipment.shift())

    });
}

$("#equipmentTblBody").on('click', 'tr', function () {
    selected_fieldsToSaveEquipment = [];
    selected_fieldOptionsToUpdateEquipment = [];
    equipmentSaveUpdateIndex = $(this).index();
    setEquipmentModelButtons();
    let equipmentModel = equipment_controller.getEquipmentFromIndex(equipmentSaveUpdateIndex);
    equipmentIdToUpdate = equipmentModel.equipment_id;

    selected_fieldsToSaveEquipment = equipmentModel.field_code;
    selected_fieldOptionsToUpdateEquipment = selected_fieldsToSaveEquipment.slice();
    selected_StaffToSaveEquipment = equipmentModel.staff_id;
    selected_StaffOptionsToUpdateEquipment = selected_StaffToSaveEquipment.slice();
    for (let i = 0; i < selected_fieldsToSaveEquipment.length; i++) {
        loadFieldContainerWhenEquipmentSave();
    }
    for (let i = 0; i < selected_StaffToSaveEquipment.length; i++) {
        loadStaffContainerWhenEquipmentSave();
    }
    setSelectedFieldToUpdatedEquipment();
    setSelectedStaffToUpdatedEquipment();
    $("#equipmentName").val(equipmentModel.equipment_name);
    $("#equipmentType").val(equipmentModel.type);
    $("#equipmentCount").val(equipmentModel.count);
    $("#equipmentStatus").val(equipmentModel.status);

    $('#newEquipmentModal').modal('show');

})


//equipment Js End


let vehicleIndex = -1;
let vehicleIdToUpdate;
let staffIdToAddVehicle;

$("#addNewVehicleBtn").on('click', () => {
    vehicleIndex = -1;
    setVehicleModelButtons();
    staffIdToAddVehicle = staff_controller.getStaffIds();
    setStaffIdComboBoxValues();
})

function setStaffIdComboBoxValues() {
    for (let i = 0; i < staffIdToAddVehicle.length; i++) {
        let value = `<option value="${staffIdToAddVehicle[i]}">${staffIdToAddVehicle[i]}</option>`

        $("#staffIdToVehicle").append(value);
    }
}

$("#btnCloseVehicleDetails").on('click', () => {
    let vl = $("#btnCloseVehicleDetails").text();
    if (vl == "Delete") {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                vehicle_controller.deleteVehicleValue(vehicleIdToUpdate);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        $('#newVehicleModal').modal('hide');
        clearAddVehicleFields();
    } else {
        clearAddVehicleFields();
    }

})

function clearAddVehicleFields() {
    $("#licencePlateNumber").val("");
    $("#vehicleCategory").val("");
    $("#vehicleFuelType").val("");
    $("#vehicleStatus").val("");
    $("#staffIdToVehicle").val("");
    $("#specialRemark").val("");
    $("#staffIdToVehicle").empty();
    $("#staffIdToVehicle").append('<option value="" disabled selected>Select Staff Id</option>');
}

function setVehicleModelButtons() {
    if (vehicleIndex > -1) {
        $("#btnCloseVehicleDetails").text("Delete");
        $("#btnCloseVehicleDetails").css({
            backgroundColor: "red",
            color: "white"
        })
        $("#btnSaveVehicleDetails").text("Update");
    } else {
        $("#btnCloseVehicleDetails").text("Close");
        $("#btnCloseVehicleDetails").css({
            backgroundColor: "#d3d3d3",
            color: "black"
        })
        $("#btnSaveVehicleDetails").text("Save Vehicle");
    }
}

$("#btnSaveVehicleDetails").on('click', () => {
    let licencePlateNumber = $("#licencePlateNumber").val();
    let vehicleCategory = $("#vehicleCategory").val();
    let fuelType = $("#vehicleFuelType").val();
    let vehicleStatus = $("#vehicleStatus").val();
    let staff_id = $("#staffIdToVehicle").val();
    let specialRemark = $("#specialRemark").val();
    console.log(vehicleCategory);
    if (licencePlateNumber != "" && vehicleCategory != "" && fuelType != "" && vehicleStatus != "" && staff_id != "") {
        let vehicleModel = new VehicleModel("", licencePlateNumber, vehicleCategory, fuelType, vehicleStatus, staff_id, specialRemark);
        let vl = $("#btnSaveVehicleDetails").text();
        if (vl == "Save Vehicle") {
            vehicle_controller.saveData(vehicleModel);
            $('#newVehicleModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddVehicleFields();
        } else {
            //     Todo: Update Vehicle
            vehicleModel.vehicle_code = vehicleIdToUpdate;
            vehicle_controller.updateVehicleValues(vehicleModel);
            $('#newVehicleModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your Equipment Was Updated!",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddVehicleFields();
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have Add Values First!",
        });
    }
})


$("#vehicleTblBody").on('click', 'tr', function () {
    vehicleIndex = $(this).index();
    setVehicleModelButtons();
    setStaffIdComboBoxValues();
    let vehicleModel = vehicle_controller.getVehicleFromIndex(vehicleIndex);
    vehicleIdToUpdate = vehicleModel.vehicle_code;


    $("#licencePlateNumber").val(vehicleModel.licence_plate_number);
    $("#vehicleCategory").val(vehicleModel.vehicle_category);
    $("#vehicleFuelType").val(vehicleModel.fuelType);
    $("#vehicleStatus").val(vehicleModel.status);
    $("#staffIdToVehicle").val(vehicleModel.staff_id);
    $("#specialRemark").val(vehicleModel.remarks);

    $('#newVehicleModal').modal('show');

})


// vehicle JS End

let logIndex = -1;
let logIdToUpdateDelete;
let staffOptionsToSaveLog;
let fieldOptionsToSaveLog;
let CropOptionsToSaveLog;

let selected_staffOptionsToSaveLog = [];
let selected_fieldOptionsToSaveLog = [];
let selected_cropOptionsToSaveLog = [];

let selected_staffOptionsToUpdateLog = [];
let selected_fieldOptionsToUpdateLog = [];
let selected_cropOptionsToUpdateLog = [];


$("#addNewLogBtn").on('click', () => {
    logIndex = -1;
    setLogModelButtons();
    staffOptionsToSaveLog = staff_controller.getStaffIds();
    fieldOptionsToSaveLog = field_controller.getFieldCodes();
    CropOptionsToSaveLog = crop_controller.getCropCodes();
})

function setLogModelButtons() {
    if (logIndex > -1) {
        $("#btnSaveLogDetails").text("Update");
    } else {
        $("#btnSaveLogDetails").text("Save Log");
    }
}

$('#logImage').on('change', function () {
    previewImage('logImage', 'preview4');
});
$("#btnCloseLogDetails").on('click', () => {
    clearAddLogModelFields();
})

function clearAddLogModelFields() {
    selected_staffOptionsToSaveLog = [];
    selected_fieldOptionsToSaveLog = [];
    selected_cropOptionsToSaveLog = [];
    $('#preview4').attr('src', '#').addClass('d-none');
    $('#logImage').val("");
    $("#logType").val("");
    $("#logRemark").val("");
    $("#additionalStaffToAddLogs").empty();
    $("#additionalFieldToAddLogs").empty();
    $("#additionalCropToAddLogs").empty();
}

$("#addStaffToLogSaveBtn").on('click', () => {
    loadStaffContainerWhenLogSave();
})
$("#addFieldToLogSaveBtn").on('click', () => {
    loadFieldContainerWhenLogsSave();
})
$("#addCropsToLogSaveBtn").on('click', () => {
    loadCropContainerWhenLogsSave();
})

function loadStaffContainerWhenLogSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="staffListToSaveLog form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Staffs</option>`);
    staffOptionsToSaveLog.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalStaffToAddLogs').append($fieldContainer);
}

function loadFieldContainerWhenLogsSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="fieldsListToSaveLog form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Fields</option>`);
    fieldOptionsToSaveLog.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalFieldToAddLogs').append($fieldContainer);
}

function loadCropContainerWhenLogsSave() {
    const $fieldContainer = $('<div class="d-flex align-items-center mt-2"></div>');

    // Create a new select element with options
    const $newSelect = $('<select class="cropListToSaveLog form-control me-2"></select>');
    $newSelect.append(`<option value="">Select Crops</option>`);
    CropOptionsToSaveLog.forEach(function (optionValue) {
        $newSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    });

    // Create a remove button
    const $removeButton = $('<button type="button" class="btn btn-danger">Remove</button>');

    // Add click event to remove the field
    $removeButton.on('click', function () {
        $fieldContainer.remove(); // Remove this container when clicked
    });

    // Append select and remove button to the field container
    $fieldContainer.append($newSelect).append($removeButton);

    // Append the new field container to the additionalStaffField
    $('#additionalCropToAddLogs').append($fieldContainer);
}

$("#btnSaveLogDetails").on('click', () => {
    selected_staffOptionsToSaveLog = [];
    selected_fieldOptionsToSaveLog =[];
    selected_cropOptionsToSaveLog=[];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();

    let date = year + "-" + month + "-" + day;

    let observedImage = $('#preview4').attr('src');
    let logType = $("#logType").val();
    let logDetails = $("#logRemark").val();

    $('.staffListToSaveLog').each(function () {
        selected_staffOptionsToSaveLog.push($(this).val()); // Add the selected value to the array
    });
    $('.fieldsListToSaveLog').each(function () {
        selected_fieldOptionsToSaveLog.push($(this).val()); // Add the selected value to the array
    });
    $('.cropListToSaveLog').each(function () {
        selected_cropOptionsToSaveLog.push($(this).val()); // Add the selected value to the array
    });

    if (logType != "" && logDetails != "") {
        let vl = $("#btnSaveLogDetails").text();

        let logModel = new LogModel("", date, logDetails, logType, observedImage, selected_fieldOptionsToSaveLog, selected_cropOptionsToSaveLog, selected_staffOptionsToSaveLog);
        if (vl == "Save Log") {
            log_controller.saveCrop(logModel);
            $('#newLogModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddLogModelFields();
        } else {
            logModel.log_code = logIdToUpdateDelete;
            log_controller.updateLogValues(logModel);
            $('#newLogModal').modal('hide');
            Swal.fire({
                icon: "success",
                title: "Your Equipment Was Updated!",
                showConfirmButton: false,
                timer: 1500
            });
            clearAddLogModelFields();
        }

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have Add Values First!",
        });
    }

})

$(document).on("click", ".btnLogUpdate", function () {
    clearAddCropModelFields();
    const index = $(this).data("index");
    logIndex = index;
    setLogModelButtons();
    let logModel = log_controller.getLogFromIndex(index);
    logIdToUpdateDelete = logModel.log_code;
    selected_staffOptionsToSaveLog = logModel.staffs_list;
    selected_fieldOptionsToSaveLog = logModel.fields_list;
    selected_cropOptionsToSaveLog = logModel.crops_list;


    selected_staffOptionsToUpdateLog = selected_staffOptionsToSaveLog.slice();
    selected_fieldOptionsToUpdateLog = selected_fieldOptionsToSaveLog.slice();
    selected_cropOptionsToUpdateLog = selected_cropOptionsToSaveLog.slice();

    $('#preview4').attr('src', logModel.observe_image).removeClass('d-none');

    $("#logType").val(logModel.logType);
    $("#logRemark").val(logModel.log_details);


    for (let i = 0; i <selected_staffOptionsToSaveLog.length; i++) {
        loadStaffContainerWhenLogSave();
    }
    for (let i = 0; i < selected_fieldOptionsToSaveLog.length; i++) {
        loadFieldContainerWhenLogsSave();
    }
    for (let i = 0; i < selected_cropOptionsToSaveLog.length; i++) {
        loadCropContainerWhenLogsSave();
    }
    setSelectedFieldToUpdatedLog();
    setSelectedStaffToUpdatedLog();
    setSelectedCropToUpdatedLog();

    $('#newLogModal').modal('show');

});

function setSelectedFieldToUpdatedLog() {
    $('.fieldsListToSaveLog').each(function () {
        $(this).val(selected_fieldOptionsToUpdateLog.shift())
    });
}
function setSelectedStaffToUpdatedLog() {
    $('.staffListToSaveLog').each(function () {
        $(this).val(selected_staffOptionsToUpdateLog.shift())
    });
}
function setSelectedCropToUpdatedLog() {
    $('.cropListToSaveLog').each(function () {
        $(this).val(selected_cropOptionsToUpdateLog.shift())
    });
}
$(document).on("click", ".btnLogDelete", function () {
    const index = $(this).data("index");
    cropSaveUpdateIndex = index;
    let logModel = log_controller.getLogFromIndex(index);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            log_controller.deleteCropValues(logModel.log_code);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
    $('#newLogModal').modal('hide');


});