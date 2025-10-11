var Customer3 = /** @class */ (function () {
    // parameter properties shortcut. Much simpler and defines everything.
    function Customer3(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var myCustomer3 = new Customer3("Martin", "Dixon");
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
