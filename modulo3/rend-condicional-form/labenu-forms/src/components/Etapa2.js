import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <h3>ETAPA 2: Informações do Ensino Superior</h3>
                <Lista>
                    <p>5. Qual Curso?</p>
                    <input/>
                    <p>6. Qual a unidade de ensino?</p>
                    <input/>
                </Lista>
            </div>
        )
    }
}