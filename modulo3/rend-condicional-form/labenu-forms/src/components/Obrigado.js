import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class Obrigado extends React.Component{
    render(){
        return(
            <Lista>
                <h3>O formulário acabou!</h3>
                <p>Muito obrigado por participar, entraremos em contato.</p>
            </Lista>
        )
    }
}