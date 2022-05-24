import React, { Component } from 'react';
import { Cadastro } from './components/Cadastro.js';
import { Lista } from './components/Lista.js';
import styled from 'styled-components'

const Aplicacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100vw;
  min-width: 380px;
`

class App extends Component {
  state = {
    tela: 0
  }

  mudaTela = () => {
    switch(this.state.tela){
      case 0:
        this.setState({tela: 1})
        break;
      case 1:
        this.setState({tela: 0})
        break;
      default:
        console.log("Erro")
    }
  }

  render() {
    switch(this.state.tela){
      case 0:
        return (
          <Aplicacao>
            <Cadastro
              mudaTela={this.mudaTela}
            />
          </Aplicacao>
        )
      case 1:
        return (
          <Aplicacao>
            <Lista
              mudaTela={this.mudaTela}
            />
          </Aplicacao>
        )
      default:
        console.log("Erro")
    }
  }
}

export default App;
