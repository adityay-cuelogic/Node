const mongoose = require("mongoose");
const Connection = require("../createConnection");
const obj = new Connection();
obj.connection();

class EmployeeSchema {
    getSchema() {
        let EmployeeSchema =  mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            name: { type: String, required: true },
            age: { type: Number, required: true },
            Address: { type: String, required: true }
        });
        EmployeeSchema.index({ _id: 1 }); 
        return EmployeeSchema;
    }
}


module.exports = mongoose.model("Employee",new EmployeeSchema().getSchema());