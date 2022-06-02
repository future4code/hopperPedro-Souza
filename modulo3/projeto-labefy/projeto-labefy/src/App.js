import React, { Component } from 'react';
import { TelaPlaylist } from './components/TelaPlaylist';
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle';
import { TelaMusicas } from './components/TelaMusicas';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

class App extends Component {
  state = {
    tela: 0,
    idDetalhesPlaylist: 0
  }

  mudaTela = (idPlaylist) => {
    this.state.tela===0 ? this.setState({tela:1}) : this.setState({tela:0})
    this.setState({idDetalhesPlaylist: idPlaylist})
  }

  render() {
    return (
      <ContainerApp>
        <h1>Labefy</h1>
        <GlobalStyle/>
        {this.state.tela===0 ? 
          <TelaPlaylist mudaTela={this.mudaTela}/> : 
          <TelaMusicas mudaTela={this.mudaTela} id={this.state.idDetalhesPlaylist}/>
        }
      </ContainerApp>
    );
  }
}

export default App;
