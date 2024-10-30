import {fields, staff} from "../db/db.js";
import {FieldModel} from "../model/fieldModel.js";
export default class FieldController{

    loadData(){
    //     ToDO: Get data from database

    }
    getFieldCodes(){
        let ar = ["F01","F02"];
        fields.map(function (field) {
            ar.push(field.field_code);
        });
        return ar;
    }

    loadCards(){
        fields.push(new FieldModel("A","A","A",2,2,2,2,2,2,2))

        // Todo:Check how loading cards
        $("#fieldCardSection").empty();
        fields.map(function (field) {
            var value =
                `<div class="card text-white" style="background-color: #2b2b2b; border: 1px solid gray;">
                    <!-- Image Carousel with Fixed Height -->
                    <div id="fieldImageCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/download.jpeg" class="d-block w-100 fixed-image" alt="Field Image 1">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/download%20(1).jpeg" class="d-block w-100 fixed-image" alt="Field Image 2">
                            </div>
                        </div>
                        <!-- Carousel Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#fieldImageCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#fieldImageCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Field Details</h5>
                        <p class="card-text"><strong>Name:</strong> Field Name</p>
                        <p class="card-text"><strong>Location:</strong> Field Location</p>
                        <p class="card-text"><strong>Extent Size:</strong> Extent Size Of Field</p>
                        <p class="card-text"><strong>Crop:</strong> Crop Info</p>
                        <p class="card-text"><strong>Staff:</strong> Staff Info</p>
                        <p class="card-text"><strong>Log:</strong> Log Info</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-success flex-grow-1 me-2">Update</button>
                            <button class="btn btn-danger flex-grow-1">Delete</button>
                        </div>
                    </div>
                </div>`

            $("#fieldCardSection").append(value);
        });
    }
}