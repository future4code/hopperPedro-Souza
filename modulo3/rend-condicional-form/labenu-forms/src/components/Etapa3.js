import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <h3>ETAPA 3: Informações Gerais de Ensino</h3>
                <Lista>
                    <p>7. Por que você não terminou um curso de graduação?</p>
                    <input/>
                    <p>8. Você fez algum curso complementar?</p>
                    <input/>
                </Lista>
            </div>
        )
    }
}