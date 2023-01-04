class User{
    userName;
    email;
    password;
    role;

    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getUserName() {
        return this.userName;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getRole() {
        return this.role;
    }

    setRole(role) {
        this.role = role;
    }
}