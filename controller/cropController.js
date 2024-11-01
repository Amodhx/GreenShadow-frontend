import {crops, equipments, fields} from "../db/db.js";
import {CropModel} from "../model/cropModel.js";

export class CropController {
    loadData() {
        //     ToDO: Get data from database


    }
    getCropFromIndex(index){
        return crops[index];
    }
    deleteCropValues(cropCode){
        this.deleteCropByIdFromArray(cropCode);
        this.loadCards();

    }
    deleteCropByIdFromArray(cropIdToDelete) {
        for (let i = crops.length - 1; i >= 0; i--) {
            if (crops[i].crop_code === cropIdToDelete) {
                crops.splice(i, 1);
            }
        }
    }
    getCropCodes(){
        let ar = ["C01","C02"];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }
    saveCrop(cropModel){
        crops.push(cropModel);
        this.loadCards();
    }

    updateCropValues(cropModel){
        this.updateCropById(cropModel.crop_code,cropModel);
        this.loadCards();
    }
    updateCropById(cropIdToUpdate, newValues) {
        for (const cropObj of crops) {
            if (cropObj.crop_code === cropIdToUpdate) {
                cropObj.crop_common_name = newValues.crop_common_name;
                cropObj.crop_scientific_name = newValues.crop_scientific_name;
                cropObj.category = newValues.category;
                cropObj.season = newValues.season;
                cropObj.crop_image = newValues.crop_image;
                cropObj.field_code = newValues.field_code;
                break;
            }
        }
    }

    loadCards() {
        this.loadData(); // Todo:Check how loading cards
        $("#cropCardSection").empty();
        crops.map(function (crop,index) {
            var value =
                ` <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card text-white" style="background-color: #2b2b2b; border: 1px solid gray; width: 310px">
                            <img src="${crop.crop_image}" height="175px"  class="card-img-top" alt="Crop Image">
                            <div class="card-body">
                                <h5 class="card-title">${crop.crop_common_name}</h5>
                                <p class="card-text"><strong>Scientific Name: </strong>${crop.crop_scientific_name}</p>
                                <p class="card-text"><strong>Category: </strong>${crop.category}</p>
                                <p class="card-text"><strong>Crop Season: </strong>${crop.season}</p>
                                <p class="card-text"><strong>Field ID: </strong>${crop.field_code}</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btnCropUpdate btn btn-success flex-grow-1 me-2" data-index="${index}">Update</button>
                                    <button class="btnCropDelete btn btn-danger flex-grow-1" data-index="${index}">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            $("#cropCardSection").append(value);
        });
    }
}