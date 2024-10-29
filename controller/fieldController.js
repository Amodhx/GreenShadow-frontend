import {fields} from "../db/db.js";
export default class FieldController{
    getFieldCodes(){
        let ar = ["F01","F02"];
        fields.map(function (field) {
            ar.push(field.field_code);
        });
        return ar;
    }
}