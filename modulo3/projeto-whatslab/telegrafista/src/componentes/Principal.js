import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 380px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100%;
    background-color: #d2b68c;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px 30px 10px;
    height: 100vh;
    justify-content: flex-end;
`

const Balao = styled.p`
    background-color: floralwhite;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
`

const Titulo = styled.p`
    font-size: 40px;
    font-weight: bold;
    align-self: center;
`

const Entrada = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
`

const Usuario = styled.input`
    width: 100px;
`

const Mensagem = styled.input`
    width: 210px;
`

export class Principal extends React.Component{
    state = {
        mensagens: [],
        inputUsuario: "",
        inputMensagem: ""
    }
    
    
    
    adicionaMensagem = () => {
        const novaMensagem = {
          usuario: this.state.inputUsuario,
          mensagem: this.state.inputMensagem
        };
    
        const novasMensagens = [...this.state.mensagens, novaMensagem];
    
        this.setState({mensagens: novasMensagens});
    
        this.setState({inputUsuario: ""});
        this.setState({inputMensagem: ""});
    }
    
    onChangeInputUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }
    
    onChangeInputMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    }
    
    render(){
        const listaDeMensagens = this.state.mensagens.map( (mensagens) => {
            return(
                <Balao>
                  {mensagens.usuario}: {mensagens.mensagem}
                </Balao>
            );
        });
      
        return (
            <Container>
                <Titulo>Telegrafista</Titulo>
              <Lista>
                {listaDeMensagens}
              </Lista>
              <Entrada>
                <Usuario
                  value={this.state.inputUsuario}
                  onChange={this.onChangeInputUsuario}
                  placeholder={"Usuário"}
                />
                <Mensagem
                  value={this.state.inputMensagem}
                  onChange={this.onChangeInputMensagem}
                  placeholder={"Mensagem"}
                />
                <button onClick={this.adicionaMensagem}>Enviar</button>
              </Entrada>
            </Container>
        );
    }
}