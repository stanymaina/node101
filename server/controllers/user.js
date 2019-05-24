import model from '../models';

const { User } = model;

class Users {
    static signUp(req, res) {
    const { name, username, email, password } = req.body
        return User
        .create({
            name,
            username,
            email,
            password
        })
        .then(userData => res.status(201).send({
            success: true,
            message: 'User successfully created',
            userData
        }))
    }

    static listUsers(req, res) {
        return User
        .findAll()
        .then(users => res.status(200).send(users));
    }

    static index(req, res) {
        return User
        .findAll()
        .then(users => res.status(200).send(users));
    }
    static create(req, res) {
        return User
        .findAll()
        .then(users => res.status(200).send(users));
    }
    static store(req, res) {
    const { name, username, email, password } = req.body
        return User
        .create({
            name,
            username,
            email,
            password
        })
        .then(userData => res.status(201).send({
            success: true,
            message: 'User successfully created',
            userData
        }))
    }
    static edit(req, res) {
        return User
        .findAll()
        .then(users => res.status(200).send(users));
    }
    static update(req, res) {
    const { name, username, email, password } = req.body
        return User
        .create({
            name,
            username,
            email,
            password
        })
        .then(userData => res.status(201).send({
            success: true,
            message: 'User successfully created',
            userData
        }))
    }
    static delete(req, res) {
        return User
        .findAll()
        .then(users => res.status(200).send(users));
    }    
}

export default Users;