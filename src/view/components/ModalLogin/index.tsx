import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../Buttons/primary'
import InputMain from '../Inputs/InputMain'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

const ContainerModal = styled.section`
    h3 {
        color: red
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
        <ContainerModal>
            <Modal show={show} onHide={onHide} >
                <Modal.Header closeButton>
                    <h3>Login</h3>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <ButtonPrimary text='Login'
                    onClick={handleLogin} />
                <Modal.Footer>
                    <p>Não possue conta?
                        <Link to='/cadastre-se'
                            className='linkCadastre'
                        >Cadastre-se</Link>
                    </p>
                </Modal.Footer>
            </Modal>
        </ContainerModal>
    )
}

export default Login