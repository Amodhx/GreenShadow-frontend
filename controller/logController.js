import {crops, logs} from "../db/db.js";
export class LogController{

    loadValues(){

    }

    getLogFromIndex(index){
        return logs[index];
    }
    deleteCropValues(logCode){
        this.deleteLogByIdFromArray(logCode);
        this.loadCards();

    }
    deleteLogByIdFromArray(logIdToDelete) {
        for (let i = logs.length - 1; i >= 0; i--) {
            if (logs[i].log_code === logIdToDelete) {
                logs.splice(i, 1);
            }
        }
    }
    saveCrop(logModel){
        logs.push(logModel);
        this.loadCards();
    }
    updateLogValues(logModel){
        this.updateLogById(logModel.log_code,logModel);
        this.loadCards();
    }
    updateLogById(logIdToUpdate, newValues) {
        for (const logObj of logs) {
            if (logObj.log_code === logIdToUpdate) {
                logObj.log_date = newValues.log_date;
                logObj.log_details = newValues.log_details;
                logObj.observe_image = newValues.observe_image;
                logObj.logType = newValues.logType;
                logObj.crops_list = newValues.crops_list;
                logObj.staffs_list = newValues.staffs_list;
                logObj.fields_list = newValues.fields_list;
                break;
            }
        }
    }
    loadCards(){
        this.loadValues(); // Todo:Check how loading cards
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