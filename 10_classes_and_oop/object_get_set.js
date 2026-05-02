const User = {
    _email: 'a@aj.com',
    _password: "abc",


    get email(){
        return this.__email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
