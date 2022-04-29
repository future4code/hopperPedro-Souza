import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const AdicionaPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`

class App extends React.Component {

  state = {
    vetor: [
      {
        nomeUsuario: "Paula",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Pedro",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Paulo",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ],

    valorInputNome: "",
    valorInputLinkPerfil: "",
    valorInputLinkFoto: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputLinkPerfil,
      fotoPost: this.state.valorInputLinkFoto
    };

    const novosPosts = [novoPost, ...this.state.vetor];

    this.setState({vetor: novosPosts});

    this.setState({valorInputNome: "" });
    this.setState({valorInputLinkPerfil: "" });
    this.setState({valorInputLinkFoto: "" });
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value});
  }

  onChangeInputPerfil = (event) => {
    this.setState({valorInputLinkPerfil: event.target.value});
  }

  onChangeInputFoto = (event) => {
    this.setState({valorInputLinkFoto: event.target.value});
  }

  render() {

    const componentesPost = this.state.vetor.map((item) => {
      return(
        <Post
          nomeUsuario = {item.nomeUsuario}
          fotoUsuario = {item.fotoUsuario}
          fotoPost = {item.fotoPost}
       />
      );
    });

    return (
        /* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
          
        <Post
          nomeUsuario={'Paulo'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        /> */
      <MainContainer>
        <h1>Adicionar Post</h1>
        <AdicionaPost>
          <input
            value={this.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder='Nome'
          />
          <input
            value={this.valorInputLinkPerfil}
            onChange={this.onChangeInputPerfil}
            placeholder='Link Foto Perfil'
          />
          <input
            value={this.valorInputLinkFoto}
            onChange={this.onChangeInputFoto}
            placeholder='Link Foto Post'
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </AdicionaPost>
        {componentesPost}
      </MainContainer>
    );
  }
}

export default App;
