import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h3>ETAPA 1: Dados Gerais</h3>
                <Lista>
                    <p>1. Nome</p>
                    <input></input>
                    <p>2. Idade</p>
                    <input></input>
                    <p>3. Email</p>
                    <input></input>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
                </Lista>
            </div>
        )
    }
}