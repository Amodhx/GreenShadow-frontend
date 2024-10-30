 export class FieldModel{
    get field_code() {
        return this._field_code;
    }

    set field_code(value) {
        this._field_code = value;
    }

    get field_name() {
        return this._field_name;
    }

    set field_name(value) {
        this._field_name = value;
    }

    get field_location() {
        return this._field_location;
    }

    set field_location(value) {
        this._field_location = value;
    }

    get extent_size() {
        return this._extent_size;
    }

    set extent_size(value) {
        this._extent_size = value;
    }

    get staff_list() {
        return this._staff_list;
    }

    set staff_list(value) {
        this._staff_list = value;
    }

    get crop_list() {
        return this._crop_list;
    }

    set crop_list(value) {
        this._crop_list = value;
    }

    get field_image_01() {
        return this._field_image_01;
    }

    set field_image_01(value) {
        this._field_image_01 = value;
    }

    get field_image_02() {
        return this._field_image_02;
    }

    set field_image_02(value) {
        this._field_image_02 = value;
    }

    get logs_list() {
        return this._logs_list;
    }

    set logs_list(value) {
        this._logs_list = value;
    }

    get equipments_list() {
        return this._equipments_list;
    }

    set equipments_list(value) {
        this._equipments_list = value;
    }
    constructor(field_code, field_name, field_location, extent_size, staff_list, crop_list, field_image_01, field_image_02, logs_list, equipments_list) {
        this._field_code = field_code;
        this._field_name = field_name;
        this._field_location = field_location;
        this._extent_size = extent_size;
        this._staff_list = staff_list;
        this._crop_list = crop_list;
        this._field_image_01 = field_image_01;
        this._field_image_02 = field_image_02;
        this._equipments_list = equipments_list;
        this._logs_list = logs_list;
    }
}