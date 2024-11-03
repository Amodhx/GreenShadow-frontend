export class LogModel{
    get log_code() {
        return this._log_code;
    }

    set log_code(value) {
        this._log_code = value;
    }

    get log_date() {
        return this._log_date;
    }

    set log_date(value) {
        this._log_date = value;
    }

    get log_details() {
        return this._log_details;
    }

    set log_details(value) {
        this._log_details = value;
    }

    get logType() {
        return this._logType;
    }

    set logType(value) {
        this._logType = value;
    }

    get observe_image() {
        return this._observe_image;
    }

    set observe_image(value) {
        this._observe_image = value;
    }

    get fields_list() {
        return this._fields_list;
    }

    set fields_list(value) {
        this._fields_list = value;
    }

    get crops_list() {
        return this._crops_list;
    }

    set crops_list(value) {
        this._crops_list = value;
    }

    get staffs_list() {
        return this._staffs_list;
    }

    set staffs_list(value) {
        this._staffs_list = value;
    }

    constructor(log_code, log_date, log_details, logType, observe_image, fields_list, crops_list, staffs_list) {
        this._log_code = log_code;
        this._log_date = log_date;
        this._log_details = log_details;
        this._logType = logType;
        this._observe_image = observe_image;
        this._fields_list = fields_list;
        this._crops_list = crops_list;
        this._staffs_list = staffs_list;
    }
}