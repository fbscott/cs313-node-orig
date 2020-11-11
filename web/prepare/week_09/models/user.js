class User {
    constructor(options) {
        // Loop through properties of "options" object and assign them to "this."
        // Same as if each property was mapped individually.
        // E.g.: this.name   = options.name;
        //       this.origin = options.origin;
        //       etc.
        for(var property in options) {
            if(options.hasOwnProperty(property)) {
                // Doesn't work with dot-notation (this.property). Don't know why.?.?
                this[property] = options[property];
            }
        }
    }
}

module.exports = User;

// function getUser() {
//     return 'John Doe';
// }
