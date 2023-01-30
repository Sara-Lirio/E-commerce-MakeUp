import db from "../database/db-sqlite.js"

export default class Dao {

    insereUsuario = (user) => {
        const INSERE_USUARIO = `
        INSERT INTO USUARIOS (nome, endereco, complemento, cep, email, celular, senha, 
            cpf,  enderecoEntrega, complementoEntrega, cepEntrega)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_USUARIO,
                user.nome, user.endereco, user.complemento, user.cep,
                user.email, user.celular, user.senha, user.cpf, user.enderecoEntrega,
                user.complementoEntrega, user.cepEntrega,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(user)
                }
            )
        })
    }

    pegaTodosUsuarios = () => {
        const PEGA_USUARIO = `
        SELECT * FROM USUARIOS
        `
        return new Promise((resolve, reject) => {
            db.all(PEGA_USUARIO, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

    pegaEmail = (email) => {
        const PEGA_USUARIO = `
        SELECT * FROM USUARIOS
        WHERE email = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_USUARIO, email, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

    pegaUsuarioId = (id_Usuario) => {
        const PEGA_USUARIO = `
        SELECT * FROM USUARIOS
        WHERE id_Usuario = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_USUARIO, id_Usuario, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

    deletaUsuario = (id_Usuario) => {
        const DELETA_USUARIO = `
        DELETE FROM USUARIOS
        WHERE id_Usuario = ?
        `
        return new Promise((resolve, reject) => {
            db.run(DELETA_USUARIO, id_Usuario, (error) => {
                if (error)
                    reject(error)
                else
                    resolve(`Usuario com ID = ${id_Usuario} deletado`)
            })
        })
    }

    atualizaUsuario = (id_Usuario, novoUsuario) => {
        const ATUALIZA_USUARIO = `
        UPDATE USUARIOS
        SET nome = ?, endereco = ? , complemento = ?, cep = ?, email = ?,
        celular = ?, senha = ?, cpf = ?,  enderecoEntrega = ?, 
        complementoEntrega = ?, cepEntrega = ?
        WHERE id_Usuario = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_USUARIO,
                novoUsuario.nome, novoUsuario.endereco, novoUsuario.complemento,
                novoUsuario.cep, novoUsuario.email, novoUsuario.celular,
                novoUsuario.senha, novoUsuario.cpf, novoUsuario.enderecoEntrega,
                novoUsuario.complementoEntrega, novoUsuario.cepEntrega,
                id_Usuario,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(novoUsuario)
                }
            )
        })
    }
}