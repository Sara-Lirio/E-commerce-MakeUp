import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../Buttons/primary'
import InputMain from '../Inputs/InputMain'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { IoIosClose } from "react-icons/io";

const ContainerModal = styled.section`
    font-family: var(--font-overpass);
    text-transform:uppercase;

    header {
        display:flex;
        justify-content: space-between;
        padding: 1em 1em 1em 4em;
    }

    h2 {
        color:#d6a1a4;
        font-size: 30px;
        letter-spacing: 2px;
        text-align:center;
        padding: 1em 0 0 4em;
    }

    main {
        padding: 1em 3em;
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        height: 11em
    }
    
    .esqueciSenha {
        font-size:12px;
        border-bottom: 1px solid var(--grafite-color);
        margin-left: 20em;
        text-align:center;
        margin-top: 1em
    }

    footer {
        display:flex;
        flex-direction: column;
        align-items:center;
    }

    p{
        font-size:13px;
        margin:2em;
        color: var(--grafite-color)
    }
    

`


export interface ModalProps {
    show?: any
    onHide?: () => void
    onClick?: () => void
}

const Login = ({ show, onHide, onClick }: ModalProps) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("submit", { user, password });
        if (user === 'sara@gmail.com' && password === '123') {
            alert("Login afetuado com sucesso")
        } else {
            alert("Usuário ou senha inválido(s)")
        }
    }

    return (

        <Modal show={show} onHide={onHide} >
            <ContainerModal>
                <header>
                    <h2>Login</h2>
                    <IoIosClose size={35} onClick={onClick}/>
                </header>
                <main>
                <InputMain textLabel='E-mail'
                        tipo='primario' type='email'
                        placeholder='seuemail@email.com.br'
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />
                    <InputMain textLabel='Senha'
                        tipo='primario' type='password'
                        placeholder='********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className='esqueciSenha'>Esqueci minha senha</p>
                </main>
                <footer>
                <ButtonPrimary text='Login'
                    onClick={handleLogin} />
             
                    <p>Não possue conta?
                        <Link to='/cadastre-se'
                            className='linkCadastre'
                        > Cadastre-se</Link>
                    </p> 
                </footer>
            </ContainerModal>
        </Modal>
    )
}

export default Login