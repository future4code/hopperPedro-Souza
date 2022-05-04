import React from 'react';
import styled from 'styled-components';
import {Etapa1} from './Etapa1.js';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 380px;
    gap: 20px;
    padding: 20px 0;
`

export class Formulario extends React.Component{
    render(){
        return(
            <Form>
                <Etapa1/>
                <button>Próxima Etapa</button>
            </Form>
        )
    }
}