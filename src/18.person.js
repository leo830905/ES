export default class Person {
    constructor(name = "", age = number = 0, gender = "Male") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toJSON() {
        return { name: this.name, age: this.age, gender: this.gender }

    }
    toString() {
        return JSON.stringify(this.toJSON());

    }



}