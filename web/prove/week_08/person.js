class Person {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    
    greeting() { // shorthand for:   greeting = function() {
                 // also acceptable: greeting = () => {
        return `<h1>Hello, ${this.name}. Welcome to ${this.course}.</h1>`;
    }
}

module.exports = Person;
