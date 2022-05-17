import React from 'react';
import styled from 'styled-components';
import {Etapa1} from './Etapa1.js';
import {Etapa2} from './Etapa2.js';
import {Etapa3} from './Etapa3.js';
import {Obrigado} from './Obrigado.js';

/* eslint-disable */

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 480px;
    gap: 20px;
    padding: 20px 0;
`

export class Formulario extends React.Component{
    state = {
        contador: 0
    }

    onClickContador = () => {
        this.setState({contador: this.state.contador + 1})
    }

    render(){
        switch(this.state.contador){
            case 0:
                return(
                    <Form>
                        <Etapa1/>
                        <button onClick={this.onClickContador}>Próxima Etapa</button>
                    </Form>
                )
                break;
            case 1:
                return(
                    <Form>
                        <Etapa2/>
                        <button onClick={this.onClickContador}>Próxima Etapa</button>
                    </Form>
                )
                break;
            case 2:
                return(
                    <Form>
                        <Etapa3/>
                        <button onClick={this.onClickContador}>Próxima Etapa</button>
                    </Form>
                )
                break;
            case 3:
                return(
                    <Form>
                        <Obrigado/>
                    </Form>
                )
        }
    }
}