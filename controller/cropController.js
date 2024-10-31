import {crops, equipments} from "../db/db.js";
import {CropModel} from "../model/cropModel.js";

export class CropController {
    loadData() {
        //     ToDO: Get data from database


    }
    getCropCodes(){
        let ar = ["C01","C02"];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }

    loadCards() {
        this.loadData();
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        crops.push(new CropModel("A","A","A","a","a","a","a","a"));
        // Todo:Check how loading cards
        $("#cropCardSection").empty();
        crops.map(function (crop) {
            var value =
                ` <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card text-white" style="background-color: #2b2b2b; border: 1px solid gray; width: 310px">
                            <img src="../assets/download%20(1).jpeg" height="175px"  class="card-img-top" alt="Crop Image">
                            <div class="card-body">
                                <h5 class="card-title">${crop.crop_common_name}</h5>
                                <p class="card-text"><strong>Scientific Name: </strong>${crop.crop_scientific_name}</p>
                                <p class="card-text"><strong>Category: </strong>${crop.category}</p>
                                <p class="card-text"><strong>Crop Season: </strong>${crop.season}</p>
                                <p class="card-text"><strong>Field ID: </strong>${crop.field_code}</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-success flex-grow-1 me-2">Update</button>
                                    <button class="btn btn-danger flex-grow-1">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            $("#cropCardSection").append(value);
        });
    }
}