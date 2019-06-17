const EmployeeModel =  require("./Models/employee");
const mongoose =  require("mongoose");

class DataOpreations {
    insert(data) {
        const objModel = new EmployeeModel(data);
        
        objModel.save()
        .then(() => console.log("Details got saved" )  )
        .catch(error => console.log("error => ", error.message));
    }

    fetchDataById(id) {
        EmployeeModel.findById(id)
        .then(result => result.length !== 0 ? console.log(result) : console.log("No Result Found")  )
        .catch(error => console.log("error => ", error));
    }

    fetchData(name) {
        EmployeeModel.where({'name': name})
        .then(result => result.length !== 0 ? console.log(result) : console.log("No Result Found")  )
        .catch(error => console.log("error => ", error));
    }

    delete(name) {
        EmployeeModel.deleteOne({'name': name})
        .then(result => console.log(result)  )
        .catch(error => console.log("error => ", error));
    }

    update(field,oldValue,newValue) {
        EmployeeModel.updateOne({'name':oldValue},{$set: { 'name': newValue } } )
        .then(result => console.log("Details got updated")  )
        .catch(error => console.log("error => ", error));
    }
}
//Insert
new DataOpreations().insert({
    _id: new mongoose.Types.ObjectId(),
    name: "yadav",
    age: 27,
    Address: "Cuelogic India 400101"
});



//Fetch data by Id
new DataOpreations().fetchDataById("5d01dfa7a67dcc14c8fa3e92");

// //Fetch data by name
new DataOpreations().fetchData('yadav');

// //Delete data
new DataOpreations().delete('yadav');

// //Update data
new DataOpreations().update('name','yadav','yadav1');