import {crops, equipments, fields} from "../db/db.js";
import CropApi from "../api/cropApi.js";

export class CropController {
    cropApi = new CropApi();


    async loadData() {
        await this.cropApi.getAllCrops();
        await this.loadCards();
        //     ToDO: Get data from database


    }
    getCropFromIndex(index){
        return crops[index];
    }
    async deleteCropValues(cropCode){
        await this.cropApi.deleteCrop(cropCode);
        await this.loadData();

    }
    getCropCodes(){
        let ar = [];
        equipments.map(function (eq) {
            ar.push(eq.equipment_id);
        });
        return ar;
    }
    async saveCrop(cropModel){
        await this.cropApi.saveCrop(cropModel);
        await this.loadData();
    }

    async updateCropValues(cropModel){
        await this.cropApi.updateCrop(cropModel);
        await this.loadData();
    }

    loadCards() { // Todo:Check how loading cards
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