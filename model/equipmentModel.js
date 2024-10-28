class EquipmentModel{
    get equipment_id() {
        return this._equipment_id;
    }

    set equipment_id(value) {
        this._equipment_id = value;
    }

    get equipment_name() {
        return this._equipment_name;
    }

    set equipment_name(value) {
        this._equipment_name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get staff_id() {
        return this._staff_id;
    }

    set staff_id(value) {
        this._staff_id = value;
    }

    get field_code() {
        return this._field_code;
    }

    set field_code(value) {
        this._field_code = value;
    }
    constructor(equipment_id, equipment_name, type, status, staff_id, field_code) {
        this._equipment_id = equipment_id;
        this._equipment_name = equipment_name;
        this._type = type;
        this._status = status;
        this._staff_id = staff_id;
        this._field_code = field_code;
    }
}