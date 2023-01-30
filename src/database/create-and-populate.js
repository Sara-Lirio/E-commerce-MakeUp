import sqlite3 from "sqlite3";
sqlite3.verbose()

import {
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'
const filePath = dirname(fileURLToPath(
    import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath)

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "id_Usuario" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "endereco" varchar(64),
    "complemento" varchar(64) ,
    "cep" varchar(64),
    "email" varchar(64),
    "celular" varchar(64),
    "senha" varchar(64),
    "cpf" varchar(64),
    "enderecoEntrega" varchar(64),
    "complementoEntrega" varchar(64) ,
    "cepEntrega" varchar(64)
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (id_Usuario, nome, endereco, complemento, cep, email, celular, senha, 
    cpf,  enderecoEntrega, complementoEntrega, cepEntrega )
VALUES 
    (1, 'Sara Lirio', 'R. Ana Maria 757', 'Casas', "11533-170", 'saraeliza@gmail.com', '(21) 99778-6663', 'aB@aQ34526',
    '40760585857', 'R. Ana Maria 757', 'Casas', "11533-170")
`

function criaTabelaUsuario() {
    db.run(USUARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de usuários");
    })
}

function populaTabelaUsuario() {
    db.run(ADD_USUARIOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    })
}


db.serialize(() => {
    criaTabelaUsuario();
    populaTabelaUsuario();
})