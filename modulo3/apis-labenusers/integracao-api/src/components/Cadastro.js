import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 580px;
    min-width: 380px;
    align-items: center;
    gap: 10px;
    border: 1px solid black;
    padding: 10px;
`

export class Cadastro extends React.Component{
    state = {
        valorInputEmail: "",
        valorInputNome: ""
    }

    cadastrar = () => {
        const body = {
            name: this.state.valorInputNome,
            email: this.state.valorInputEmail
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
                headers: {
                    Authorization: "pedro-souza-hopper"
                }
            }
        ).then((resposta) => {
            console.log(resposta.data)
            alert("Usuário criado com sucesso")
        }).catch((error) => {
            console.log(error.message)
            // alert(error.message)
        })
    }

    onChangeEmail = (event) => {
        this.setState({valorInputEmail: event.target.value})
    }

    onChangeNome = (event) => {
        this.setState({valorInputNome: event.target.value})        
    }

    render(){
        return(
            <div>
                <Formulario>
                    <input 
                        placeholder='Email' 
                        value={this.state.valorInputEmail}
                        onChange={this.onChangeEmail}
                    />
                    <input 
                        placeholder='Nome' 
                        value={this.state.valorInputNome}
                        onChange={this.onChangeNome}
                    />
                    <button onClick={this.cadastrar}>ENVIAR</button>
                    <button onClick={this.props.mudaTela}>Ver a Lista</button>
                </Formulario>
            </div>
        )
    }
}