import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 580px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100%;
    background-color: #d2b68c;
`

const Titulo = styled.p`
    font-size: 40px;
    font-weight: bold;
    align-self: center;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px 30px 10px;
    height: 100vh;
    justify-content: flex-end;
    word-wrap: break-word;
    max-width: 560px;
`

const Balao = styled.p`
    background-color: floralwhite;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    width: fit-content;
    max-width: calc(100% - 10px);
`

const EuBalao = styled.p`
    background-color: skyblue;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    width: fit-content;
    max-width: calc(100% - 10px);
    align-self: end;
`

const Entrada = styled.div`
    display: flex;
`

const Usuario = styled.input`
    width: 180px;
`

const Mensagem = styled.input`
    flex-grow: 1;
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
    
        const addMensagem = [...this.state.mensagens, novaMensagem];
    
        this.setState({mensagens: addMensagem})
    
        this.setState({inputUsuario: ""});
        this.setState({inputMensagem: ""});
    }

    // removeMensagem = (index) => {
    //     const rmMensagem = [...this.state.mensagens].splice(index, 1);
        
    //     this.atualizaMensagens(rmMensagem)
    // }

    // atualizaMensagens = (novasMensagens) => {
    //     this.setState({mensagens: novasMensagens});
    // }
    
    onChangeInputUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }
    
    onChangeInputMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    }

    render(){
        const listaDeMensagens = this.state.mensagens.map( (mensagens,index) => {
            if(mensagens.usuario === "Eu" | mensagens.usuario === "eu" | mensagens.usuario === "EU"){
                return(
                <EuBalao
                    key={this.usuario + this.mensagem} 
                    //onDoubleClick={this.removeMensagem(index)}
                    >{mensagens.mensagem}
                </EuBalao>
                );
            }else{
                return(
                    <Balao
                        key={this.mensagem} 
                        //onDoubleClick={this.removeMensagem(index)}
                        >{mensagens.usuario}: {mensagens.mensagem}
                    </Balao>
                );
            // eslint-disable-next-line
            };
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
                    onKeyPress={(event) => {
                        if(event.key === "Enter"){
                            this.setState(this.adicionaMensagem)
                        }
                    }}
                />
                <Mensagem
                    value={this.state.inputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                    onKeyPress={(event) => {
                        if(event.key === "Enter"){
                            this.setState(this.adicionaMensagem)
                        }
                    }}
                />
                <button 
                    type="submit" 
                    onClick={this.adicionaMensagem}
                >Enviar</button>
              </Entrada>
            </Container>
        );
    }
}