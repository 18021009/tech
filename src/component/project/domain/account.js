class Account {
    constructor({ id, userName, email, password }) {
        this.userName = userName;
        this.id = id;
        this.email = email;
        this.password = this.passwordEncode(password);
    }
    passwordEncode(password) {
        return 'st';
    }
}

console.log(new Account({}));

module.exports = Account;