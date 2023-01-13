import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiOutlineUserCircle } from "react-icons/hi2";

export interface AccountProps {
    account?: string,
    stateAccount?: string,
}

const ContainerUserField = styled.div`
    display:flex;
    font-family: var(--font-overpass);
    text-transform: uppercase;
    border: 1px solid var(--grafite-color);
    border-top: transparent;
    border-bottom: transparent;
    color: var(--grafite-color);
    width: 15.1em;
    padding: 0 1.6em;

    h3 {
        letter-spacing: .2em;
        font-weight: 500;
        font-size:16px;
        padding-left:1em;
    }

    p {
        font-size:10px;
        letter-spacing: .11em;
        padding-left: 1.8em;
    }
`

const UserField = ({account, stateAccount}:AccountProps) => {
    return (
        <ContainerUserField>
            <HiOutlineUserCircle size={30} />
            {/* <Link to='/'> */}
            <div>
                <h3>{account}</h3>
                <p>{stateAccount}</p>
            </div>
            {/* </Link> */}
        </ContainerUserField>
    )
}

export default UserField