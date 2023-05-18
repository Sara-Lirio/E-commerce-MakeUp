import React, { useState } from 'react'
import styled from 'styled-components';

import { RiCloseFill } from "react-icons/ri";

const ToastStyle = styled.div` 
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: .6em 1em;
    background-color: var(--grafite-color);
    color: var(--branco-color);
    animation: bg 3s infinite;

    .titleToast {
        font-size: .7rem;
        font-weight: 400;
        font-family: var(--font-overpass);
        width:100%;
        text-align: center;
    }

    @keyframes bg {
        50% {
            color: var(--bege-color);
        }
    }
    
@media (min-width: 1024px) and (max-width: 1280px)  {
    padding: .7em 1.4em;

    .titleToast {
        font-size: .8rem;
    }
}

@media (min-width: 1281px) {
    padding: .6em 3em;
    font-size: 1.2rem;

    .titleToast {
        font-size: .9rem;
    }
}
`

const ToastHeader = () => {
    const [showToast, setShowToast] = useState(true);
    const removeToast = () => {setShowToast(false)};

    return (
        <>
        { showToast && (
            <ToastStyle>
                <h2 className='titleToast'>
                    1ª compra? Ganhe 40% de desconto. #PRIMEIRACOMPRA.
                </h2>
                <RiCloseFill data-testid="btnClose" onClick={removeToast}/>
            </ToastStyle>
        )}
        </>
    )
}

export default ToastHeader