function Person(_firstName, _lastName, _birthday, _locality) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._birthday - _birthday;
    this._locality = _locality;

    //Thanks: http://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript
    this.print = function() {
        var _out = "";//Join text
 
        //it does not seem like a good solution, code of repetition! 
        //but if I use the length of a string, returned the string length
        if(Array.isArray(this._firstName)) {
            for(var i = 0; i < this._firstName.length; i++) {
                _out += "Name: "+ this._firstName[i]+" "+ this._lastName[i];
                _out += " Birthday: "+ ((this._birthday[i]) ? this._birthday[i] : "uninformed");
                _out += " Locality: "+ ((this._locality[i]) ? this._locality[i] : "uninformed");
                _out += "\n";
            }
        }
        else {
             _out = "Name: "+ this._firstName+" "+_lastName;
             _out += " Birthday: "+ ((this._birthday) ? this._birthday : "uninformed");
             _out += " Locality: "+ ((this._locality) ? this._locality : "uninformed");
        }
        console.log(_out);
    } 
}

var _myPerson = new Person(["Willian", "Jhon", "Marcos", "Gustavo"],
                           ["Briotto", "Figueiredo", "Souza", "Motovani"],
                           ["22/04/1993", "18/06/1989", "15/12/1986", "16/08/1995"],
                           ["Brazil", "UK", "USA"]);

_myPerson.print();

var _aPerson = new Person("Linus", "Trovals", "xx/xx/xxxx", "Finland")
_aPerson.print();
