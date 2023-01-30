class ValidaUsuario {
    constructor(nome, endereco, complemento, cep, email, celular, senha,
        cpf, enderecoEntrega, complementoEntrega, cepEntrega) {
        this.nome = ValidaUsuario.validaNome(nome)
        this.endereco = endereco
        this.complemento = complemento
        this.cep = cep
        this.email = ValidaUsuario.validaEmail(email)
        this.celular = ValidaUsuario.validaCelular(celular)
        this.senha = ValidaUsuario.validaSenha(senha)
        this.cpf = cpf
        this.enderecoEntrega = enderecoEntrega
        this.complementoEntrega = complementoEntrega
        this.cepEntrega = cepEntrega
    }

    static validaNome = (nome) => {
        if (nome.length == 0) {
            throw new Error("O campo NOME não pode ficar vazio")
        } else {
            return nome
        }
    }

    static validaCelular = (celular) => {
        const regexT = /^\([1-9]{2}\) 9[1-9]{1}[0-9]{3}\-[0-9]{4}$/

        if (celular) {
            if (regexT.exec(celular)) {
                return celular
            } else {
                throw new Error("Número de celular inválido. Use o formato (xx) xxxxx-xxxx")
            }
        } else {
            throw new Error("Insira um celular no formato (xx) xxxxx-xxxx")
        }

    }

    static validaSenha = (senha) => {

        const regex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/

        if (senha) {
            if (senha.length >= 8) {
                return senha
            } else if (!regex.exec(senha)) {
                throw new Error("A senha precisa ter no minimo 8 e no máximo 15, 1 letra maiscula, 1 letra minuscula, 1 número e 1 caractere especial")
            }
        } else {
            throw new Error("Insira uma senha no minimo 8 e no máximo 15, 1 letra maiscula, 1 letra minuscula, 1 número e 1 caractere especial")
        }

    }

    static validaEmail = (email) => {
        const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/

        if (email) {
            if (regexEmail.exec(email)) {
                return email
            } else {
                throw new Error("Email inválido. Por favor, insira um email válido")
            }
        } else {
            throw new Error("Insira um email")
        }
    }
}

export default ValidaUsuario