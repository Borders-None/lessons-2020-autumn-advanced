let myNumberArray = {
    // The inner array which contains the values
    data: [],
    push: function (number) {
        this.data[this.data.length] = number;
    },
    pop: function () {
        var lastElement = this.data[this.data.length - 1];
        this.data = this.data.splice(0, this.data.length - 1);
        return lastElement;
    },
    forEach: function (callback) {
        for (let i = 0; i < this.data.length; i++) {
            callback(this.data[i], i);
        }
    },
    /*** Implement me */
    filter: function (callback) {
        // Has to return a new array containing only elements for which the callback function returns true.
    },
    /*** Implement me */
    map: function (callback) {
        // Creates a new array cantaining elements from the original array on which the passed transofrom function is performed.
    },
    /*** Implement me */
    find: function (callback) {},
    /***Implement me */
    join: function (joinCharacter) {},
};
