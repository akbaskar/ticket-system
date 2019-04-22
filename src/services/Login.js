let _singleton = Symbol();
import users from '../../data/User' ;

export default class Login {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');

        console.log(users)
        this.users = users;


    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new Login(_singleton);
        return this[_singleton]
    }


    loginUser(id, password) {
        const result = this.users.find((user) => {
            console.log(user.id, id, user.password, password)
            return user.id === id && user.password === password

        })
        return !!result

    }
}

