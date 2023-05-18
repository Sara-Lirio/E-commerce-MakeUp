import React from 'react'
import styled from 'styled-components'
import { HiOutlineUserCircle } from "react-icons/hi2";

export interface AccountProps {
    account?: string,
    stateAccount?: string,
    onClick?: () => void
}

const ContainerUserField = styled.div`
    display:flex;
    font-family: var(--font-overpass);
    text-transform: uppercase;
    color: var(--grafite-color);
    cursor:pointer;
    font-size: 1.5em;
   
    h3 {
        letter-spacing: .2em;
        font-weight: 500;
        font-size: 10px;
        padding-left:.8em;
        margin-bottom: 0;
    }

    h3:hover {
        color: var(--bege-color);
    }

    p {
        font-size: 6.2px;
        letter-spacing: .11em;
        padding-left: 1.4em;
    }

   .linkUser{
        text-decoration: none;
        color: var(--grafite-color)
   }

   @media (min-width: 425px) and (max-width: 767px) {
        padding-left: 2em;
   }

   @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 7em;
    }
}
`

const UserField = ({ account, stateAccount, onClick }: AccountProps) => {
    return (
        <ContainerUserField>
            <HiOutlineUserCircle className='userPhoto' />

            <div onClick={onClick}>
                <h3>{account}</h3>
                <p>{stateAccount}</p>
            </div>

        </ContainerUserField>
    )
}

export default UserField