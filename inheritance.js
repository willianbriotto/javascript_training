function Profession(_profession) {
    this._profession = _profession; 
}

function Person(_firstName, _lastName, _age, _profession) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._age = _age;
    this._profe = new Profession(_profession);

    this.print = function() {
        console.log("Name: "+ this._firstName + " " + this._lastName + 
                    " Age: "+ this._age + " Profession: "+ this._profe._profession);//Wow, this is bad =D
    }  
}

var _person = new Person("Willian", "Briotto", 21, "Programmer");
_person.print();
