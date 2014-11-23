function Person() {}

Person.prototype._firstName = "Willian"
Person.prototype._lastName = "Briotto"
Person.prototype._age = 21

Person.prototype.setNewInformations = function(_firstName, _lastName, _age) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._age = _age;
}

Person.prototype.print = function() {
    console.log("Name: "+this._firstName+" "+this._lastName+" Age: "+this._age);
}

_person = new Person();
_person.print();

_person.setNewInformations("Felipe", "Santana", 25);
_person.print();
