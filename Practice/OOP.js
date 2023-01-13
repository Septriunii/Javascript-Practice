//constructor
function Person(firstName, lastName, DoB){
    this.firstName = firstName;
    this.lastName = lastName;
    this.DoB = new Date(DoB);

}
Person.prototype.getBirthYear = function(){
    return this.DoB.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
//instantiate object

const person1 = new Person('Anthony', 'Alabado', '9-4-2000')

console.log(person1.getFullName())
console.log(person1.getBirthYear())


//class
class Persons{
    constructor(lastNames, firstNames, DoBs){
        this.lastNames = lastNames
        this.firstNames = firstNames
        this.DoBs = new Date(DoBs)
    }
    getFullNames(){
        return `${this.firstNames} ${this.lastNames}`

    }
}

const tony = new Persons('Alabado', 'Anthony', '9-4-2000' )

console.log(tony.getFullNames())
 