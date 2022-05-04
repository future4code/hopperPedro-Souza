import React, { Component } from 'react';
import {Formulario} from './components/Formulario.js';
import styled from 'styled-components';

const Principal = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

class App extends Component {
  render() {
    return (
      <Principal>
        <Formulario/>
      </Principal>
    );
  }
}

export default App;
