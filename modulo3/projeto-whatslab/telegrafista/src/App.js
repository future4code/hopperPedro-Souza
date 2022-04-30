import React, { Component } from 'react';
import {Principal} from './componentes/Principal'
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

class App extends Component {

  render() {

    return (
      <Main>
        <Principal/>
      </Main>
    );
  }
}

export default App;
