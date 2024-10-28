class StaffModel{
    get staff_id() {
        return this._staff_id;
    }

    set staff_id(value) {
        this._staff_id = value;
    }

    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get joined_date() {
        return this._joined_date;
    }

    set joined_date(value) {
        this._joined_date = value;
    }

    get dob() {
        return this._dob;
    }

    set dob(value) {
        this._dob = value;
    }

    get address_line_01() {
        return this._address_line_01;
    }

    set address_line_01(value) {
        this._address_line_01 = value;
    }

    get address_line_02() {
        return this._address_line_02;
    }

    set address_line_02(value) {
        this._address_line_02 = value;
    }

    get address_line_03() {
        return this._address_line_03;
    }

    set address_line_03(value) {
        this._address_line_03 = value;
    }

    get address_line_04() {
        return this._address_line_04;
    }

    set address_line_04(value) {
        this._address_line_04 = value;
    }

    get address_line_05() {
        return this._address_line_05;
    }

    set address_line_05(value) {
        this._address_line_05 = value;
    }

    get contact_number() {
        return this._contact_number;
    }

    set contact_number(value) {
        this._contact_number = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }

    get fields_list() {
        return this._fields_list;
    }

    set fields_list(value) {
        this._fields_list = value;
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

    get vehicles_list() {
        return this._vehicles_list;
    }

    set vehicles_list(value) {
        this._vehicles_list = value;
    }

    constructor(staff_id, first_name, last_name, designation, gender, joined_date, dob, address_line_01, address_line_02, address_line_03, address_line_04, address_line_05, contact_number, email, role, fields_list, logs_list, equipments_list, vehicles_list) {
        this._staff_id = staff_id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._designation = designation;
        this._gender = gender;
        this._joined_date = joined_date;
        this._dob = dob;
        this._address_line_01 = address_line_01;
        this._address_line_02 = address_line_02;
        this._address_line_03 = address_line_03;
        this._address_line_04 = address_line_04;
        this._address_line_05 = address_line_05;
        this._contact_number = contact_number;
        this._email = email;
        this._role = role;
        this._fields_list = fields_list;
        this._logs_list = logs_list;
        this._equipments_list = equipments_list;
        this._vehicles_list = vehicles_list;
    }
}