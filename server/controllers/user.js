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

    static show(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => res.status(200).send(user));
    }

    static store(req, res) {
        const { first_name, last_name, username, email, password, confirm_password } = req.body;
        var user_password = req.body.password;
            console.log(req.body);
        // var user_confirm_password = req.body.confirm_password;
        if(password === confirm_password){
            return res.status(200).send({
                message: 'Passwords do match.'
            }); 
        } else {
            return res.status(400).send({
                message: 'Passwords do not match.'
            }); 
        }
    }

    static register(req, res) {
        const { first_name, last_name, username, email, password, confirm_password } = req.body
        if(password === confirm_password){
            return User
            .create({
                first_name,
                last_name,
                username,
                email,
                password
            })
            .then(userData => res.status(201).send({
                success: true,
                message: 'User ${username} successfully created',
                userData
            }));
        } else {
            return res.status(400).send({
                message: 'Passwords do not match.'
            });
        }
    }
    static edit(req, res) {
        return User
        .findAll()
        .then(users => res.status(200).send(users));
    }
    static update(req, res) {
    const { name, username, email, password, confirm_password } = req.body
        if(password === confirm_password){
            return User
            .findById(req.params.userId)
            .then((user) => {
                user.update({
                    name:   name || user.name,
                    username: username || user.username,
                    email: email || user.email,
                    password: password || user.password
                }).then((updatedUser) => {
                    res.status(200).send({
                        message: 'User ${username} updated successfully',
                        data: {
                            name:   name || user.name,
                            username: username || user.username,
                            email: email || user.email,
                        }
                    })
                })
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        } else {
            return res.status(400).send({
                message: 'Passwords do not match.'
            });
        }
    }

    static delete(req, res) {
        return User
        .findById(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(400).send({
                    message: 'User not found'
                });
            }
            return user
                .destroy()
                .then(() => res.status(200).send({
                    message: 'User successfully deleted'
                }))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }    
}

export default Users;