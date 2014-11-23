//Create object with function
var _person = {
    firstName: "Willian",
    lastName: "Briotto",
    age: 21,
    showInformations: function() {
        console.log("Name: "+ this.firstName+" "+this.lastName+
                    " " + "Age: "+ this.age);
    }
};

_person.showInformations();


