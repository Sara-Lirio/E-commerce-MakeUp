import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiOutlineUserCircle } from "react-icons/hi2";

export interface AccountProps {
    account?: string,
    stateAccount?: string,
    onClick ?: () => void
}

const ContainerUserField = styled.div`
    display:flex;
    font-family: var(--font-overpass);
    text-transform: uppercase;
    border: 1px solid var(--grafite-color);
    border-top: transparent;
    border-bottom: transparent;
    color: var(--grafite-color);
    width: 12.8em;
    height:2em;
    padding: 0 1em;
    cursor:pointer;

    h3 {
        letter-spacing: .2em;
        font-weight: 500;
        font-size: 14px;
        padding-left:.8em;
        margin-bottom: 0;
    }

    h3:hover {
        color: var(--bege-color);
    }

    p {
        font-size: 8.7px;
        letter-spacing: .11em;
        padding-left: 1.4em;
    }

   .linkUser{
        text-decoration: none;
        color: var(--grafite-color)
   }
`

const UserField = ({account, stateAccount, onClick}:AccountProps) => {
    return (
        <ContainerUserField>
            <HiOutlineUserCircle size={30} />
           
            <div onClick={onClick}>
                <h3>{account}</h3>
                <p>{stateAccount}</p>
            </div>
          
        </ContainerUserField>
    )
}

export default UserField