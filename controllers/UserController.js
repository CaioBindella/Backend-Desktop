const { UserData: UserModel} = require("../models/services")

const UserController = {
    create: async(req, res) => {
        try {
            
            const User = {
                username: req.body.username,
                password: req.body,password,
                email: req.body.email
            }

            const response = await UserModel.create(User);

            res.status(201).json( {response, msg: "Usuario criado com sucesso!"});

        } catch (error) {
            console.log(error)
        }
    }
} 


module.exports = UserController;