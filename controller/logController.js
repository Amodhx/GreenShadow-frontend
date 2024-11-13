import {logs} from "../db/db.js";
import LogApi from "../api/logApi.js";
export class LogController{
    logApi = new LogApi();
    async loadValues(){
        await this.logApi.getAllLog();
        await this.loadCards();
    }

    getLogFromIndex(index){
        return logs[index];
    }
    async deleteCropValues(logCode){
        await this.logApi.deleteLog(logCode);
        await this.loadValues();

    }
    async saveCrop(logModel){
        await this.logApi.saveLog(logModel);
        await this.loadValues();
    }
    async updateLogValues(logModel){
        await this.logApi.updateLog(logModel);
        await this.loadValues();
    }
    loadCards(){// Todo:Check how loading cards
        $("#logCardSection").empty();
        logs.map(function (log,index) {
            var value =
                `<div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card text-white" style="background-color: #2b2b2b; border: 1px solid gray; width: 310px">
                            <img src="${log.observe_image}" height="175px" class="card-img-top" alt="Observed Image">
                            <div class="card-body">
                                <h5 class="card-title">${log.logType}</h5>
                                <p class="card-text"><strong>Log Details: </strong>${log.log_details}</p>
                                <p class="card-text"><strong>Log Date: </strong>${log.log_date}</p>
                                <p class="card-text"><strong>Fields </strong>${log.fields_list}</p>
                                <p class="card-text"><strong>Crops </strong>${log.crops_list}</p>
                                <p class="card-text"><strong>Staffs </strong>${log.staffs_list}</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btnLogUpdate btn btn-success flex-grow-1 me-2" data-index="${index}">Update</button>
                                    <button class="btnLogDelete btn btn-danger flex-grow-1" data-index="${index}">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            $("#logCardSection").append(value);
        });
    }
}