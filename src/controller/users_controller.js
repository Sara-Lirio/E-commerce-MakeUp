import UsersModel from "../model/users_model.js";
import ValidaUsuario from "../services/validaUsuario.js";

const usersController = (app) => {

    const usersModel = new UsersModel()

    app.get('/usuarios', async (req, res) => {
        try {
            const allUsers = await usersModel.pegaUsuarios()
            res.json(
                {
                    'usuarios': allUsers,
                    'erro': false
                }
            )   
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })

    app.get('/users/email/:email', async (req, res) => {
        const email = req.params.email
        const body = req.body
        try {
                const users = await usersModel.pegaUmUsuarioEmail(email)
            res.json(
                {
                    "users": users,
                    "erro": false
                }
            )
                        
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })

    app.post('/usuarios', async (req, res) => {
        const body = req.body
        try {
            const novoUsuario = new ValidaUsuario(body.nome, body.endereco, body.complemento, body.cep,
                body.email, body.celular, body.senha, body.cpf, body.enderecoEntrega,
                body.complementoEntrega, body.cepEntrega)

            await usersModel.addNovoUsuario(novoUsuario)

            res.json(
                {
                    'msg': "Usuario inserido com sucesso",
                    'users': novoUsuario,
                    'erro': false
                }
            )
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })

    app.delete('/usuarios/id/:id_Usuario', async (req, res) => {
        const id_Usuario = req.params.id_Usuario
        try {
            await usersModel.deletaUmUsuario(id_Usuario)
            res.json({
                'mensagem': `Usuario com id ${id_Usuario} foi deletado com sucesso`,
                "erro": false
            })
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })

    app.put('/usuarios/id/:id_Usuario', async (req, res) => {
        const id_Usuario = req.params.id_Usuario
        const body = req.body
        try {
            const usuariosValidados = new ValidaUsuario(body.nome, body.endereco, body.complemento, body.cep,
                body.email, body.celular, body.senha, body.cpf, body.enderecoEntrega,
                body.complementoEntrega, body.cepEntrega)
            await usersModel.atualizaUmUsuario(id_Usuario, usuariosValidados)
            res.json({
                'mensagem': `Usuario com id ${id_Usuario} atualizado com sucesso`,
                "users": usuariosValidados,
                "erro": false
            })
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })

}

export default usersController
