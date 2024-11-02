export class VehicleModel{
    get vehicle_code() {
        return this._vehicle_code;
    }

    set vehicle_code(value) {
        this._vehicle_code = value;
    }

    get licence_plate_number() {
        return this._licence_plate_number;
    }

    set licence_plate_number(value) {
        this._licence_plate_number = value;
    }

    get vehicle_category() {
        return this._vehicle_category;
    }

    set vehicle_category(value) {
        this._vehicle_category = value;
    }

    get fuelType() {
        return this._fuelType;
    }

    set fuelType(value) {
        this._fuelType = value;
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

    get remarks() {
        return this._remarks;
    }

    set remarks(value) {
        this._remarks = value;
    }
    constructor(vehicle_code, licence_plate_number, vehicle_category, fuelType, status, staff_id, remarks) {
        this._vehicle_code = vehicle_code;
        this._licence_plate_number = licence_plate_number;
        this._vehicle_category = vehicle_category;
        this._fuelType = fuelType;
        this._status = status;
        this._staff_id = staff_id;
        this._remarks = remarks;
    }
}