class Customer3 {
    // parameter properties shortcut. Much simpler and defines everything.
    constructor(private _firstName: string, private _lastName: string){}

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer3 = new Customer3("Martin", "Dixon");

console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);