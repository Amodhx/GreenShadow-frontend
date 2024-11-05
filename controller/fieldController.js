import {fields, staff} from "../db/db.js";
import {FieldModel} from "../model/fieldModel.js";
export default class FieldController{

    loadData(){
    //     ToDO: Get data from database



    }

    saveData(filedValues){
        filedValues.field_code = Math.floor((Math.random() * 10) + 1);
        fields.push(filedValues);
        this.loadCards();

    }
    updateFiledValues(filedModel){
        this.updateFieldById(filedModel.field_code,filedModel);
        this.loadCards();
    }

    updateFieldById(fieldIdToUpdate, newValues) {
        for (const fieldObj of fields) {
            if (fieldObj.field_code === fieldIdToUpdate) {
                fieldObj.field_name = newValues.field_name;
                fieldObj.field_location = newValues.field_location;
                fieldObj.extent_size = newValues.extent_size;
                fieldObj.field_image_01 = newValues.field_image_01;
                fieldObj.field_image_02 = newValues.field_image_02;
                fieldObj.staff_list = newValues.staff_list;
                fieldObj.crop_list = newValues.crop_list;
                fieldObj.equipments_list = newValues.equipments_list;
                break;
            }
        }
    }
    deleteFieldValues(fieldId){
        this.deleteFieldByIdFromArray(fieldId);
        this.loadCards();
    }
    deleteFieldByIdFromArray(fieldIdToDelete) {
        for (let i = fields.length - 1; i >= 0; i--) {
            if (fields[i].field_code === fieldIdToDelete) {
                fields.splice(i, 1);
            }
        }
    }
    getFieldCodes(){
        this.loadData();
        let ar = ["F01","F02"];
        fields.map(function (field) {
            ar.push(field.field_code);
        });
        return ar;
    }

    getFieldFromIndex(index){
        return fields[index];
    }

    loadCards(){
        this.loadData();
        // Todo:Check how loading cards
        $("#fieldCardSection").empty();
        console.log(fields);
        fields.map(function (field,index) {
            var value =
                `<div class="card text-white" style="background-color: #2b2b2b; border: 1px solid gray;">
                    <!-- Image Carousel with Fixed Height -->
                    <div id="${field.field_name}"  class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${field.field_image_01}"  class="d-block w-100 fixed-image" height="175px" alt="Field Image 1">
                            </div>
                            <div class="carousel-item">
                                <img src="${field.field_image_02}" class="d-block w-100 fixed-image" height="175px" alt="Field Image 2">
                            </div>
                        </div>
                        <!-- Carousel Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#${field.field_name}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${field.field_name}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Field Details</h5>
                        <p class="card-text"><strong>Name:</strong>${field.field_name}</p>
                        <p class="card-text"><strong>Location:</strong>${field.field_location}</p>
                        <p class="card-text"><strong>Extent Size:</strong>${field.extent_size}</p>
                        <p class="card-text"><strong>Crop:</strong>${field.crop_list}</p>
                        <p class="card-text"><strong>Staff:</strong>${field.staff_list}</p>
                        <p class="card-text"><strong>Equipments:</strong>${field.equipments_list}</p>
                        <p class="card-text"><strong>Log:</strong>${field.logs_list}</p>
                        <div class="d-flex justify-content-between">
                            <button  class="btnFieldUpdate btn btn-success flex-grow-1 me-2"  data-index="${index}">Update</button>
                            <button class="btnFieldDelete btn btn-danger flex-grow-1" data-index="${index}">Delete</button>
                        </div>
                    </div>
                </div>`

            $("#fieldCardSection").append(value);
        });
    }
}