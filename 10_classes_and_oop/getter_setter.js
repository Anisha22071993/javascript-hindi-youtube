class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email
    }
    get password(){
        return `${this._password}anisha`
    }

    set password(value){
        this._password = value
    }
}

const anisha = new User("a@anisha.ai", "abc")
console.log(anisha.email);
