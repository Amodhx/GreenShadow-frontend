export class CropModel{
    get crop_code() {
        return this._crop_code;
    }

    set crop_code(value) {
        this._crop_code = value;
    }

    get crop_common_name() {
        return this._crop_common_name;
    }

    set crop_common_name(value) {
        this._crop_common_name = value;
    }

    get crop_scientific_name() {
        return this._crop_scientific_name;
    }

    set crop_scientific_name(value) {
        this._crop_scientific_name = value;
    }

    get crop_image() {
        return this._crop_image;
    }

    set crop_image(value) {
        this._crop_image = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get season() {
        return this._season;
    }

    set season(value) {
        this._season = value;
    }

    get field_code() {
        return this._field_code;
    }

    set field_code(value) {
        this._field_code = value;
    }

    get logs_list() {
        return this._logs_list;
    }

    set logs_list(value) {
        this._logs_list = value;
    }

    constructor(crop_code, crop_common_name, crop_scientific_name, crop_image, category, season, field_code, logs_list) {
        this._crop_code = crop_code;
        this._crop_common_name = crop_common_name;
        this._crop_scientific_name = crop_scientific_name;
        this._crop_image = crop_image;
        this._category = category;
        this._season = season;
        this._field_code = field_code;
        this._logs_list = logs_list;
    }
}