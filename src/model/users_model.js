import Dao from "../DAO/usersDAO.js"

export default class UsersModel {
    
    // add novo usuario no bd
    addNovoUsuario = async (usuario) => {
        const dao = new Dao()
        return await dao.insereUsuario(usuario)
    }

    // pegar todos os hospedes
    pegaUsuarios = async () => {
        const dao = new Dao()
        return await dao.pegaTodosUsuarios()
    }

    pegaUmUsuarioEmail = async (email) => {
        const dao = new Dao()
        const usuarioAtual = await dao.pegaEmail(email)

        if (usuarioAtual) {
            const usuarioBuscado = {
                "email": usuarioAtual.email
            }
            return await dao.pegaEmail(email, usuarioBuscado)
        } else {
            throw new Error("Usuário não encontrado")
        }   
    }

    pegaUsuarioId = async (id_Usuario) => {
        const dao = new Dao()
        return await dao.pegaUsuarioId(id_Usuario)
    }
    
    deletaUmUsuario = async (id_Usuario) => {
        const dao = new Dao()
        const usersModel = new UsersModel()
        const usuarioAtual = await usersModel.pegaUsuarioId(id_Usuario)

        if (usuarioAtual) {
            const usuarioDeletado = {
                "email": usuarioAtual.email
            }
            return await dao.deletaUsuario(id_Usuario, usuarioDeletado)
        } else {
            throw new Error("Usuario não encontrado")
        }        
    }

    atualizaUmUsuario = async (id_Usuario, novosDados) => {
        const dao = new Dao()
        const usersModel = new UsersModel()
        const usuarioAtual = await usersModel.pegaUsuarioId(id_Usuario)
        console.log(usuarioAtual)

        if (usuarioAtual) {
            const usuarioAtualizado = {
                "nome": novosDados.nome || usuarioAtual.nome,
                "endereco": novosDados.endereco || usuarioAtual.endereco,
                "complemento": novosDados.complemento || usuarioAtual.complemento,
                "cep": novosDados.cep || usuarioAtual.cep,
                "email": novosDados.email || usuarioAtual.email,
                "celular": novosDados.celular || usuarioAtual.celular,
                "senha": novosDados.senha || usuarioAtual.senha,
                "cpf": novosDados.cpf || usuarioAtual.cpf,
                "enderecoEntrega": novosDados.enderecoEntrega || usuarioAtual.enderecoEntrega,
                "complementoEntrega": novosDados.complementoEntrega || usuarioAtual.complementoEntrega,
                "cepEntrega": novosDados.cepEntrega || usuarioAtual.cepEntrega
            }
            return await dao.atualizaUsuario(id_Usuario, usuarioAtualizado)
        } else {
            throw new Error("Usuario não encontrado")
        }        
    }
}

