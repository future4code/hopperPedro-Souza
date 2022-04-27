import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

const Titulos = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Subtitulos = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`

const ContainerSecao = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const SuperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

function App() {
  return (
    <SuperContainer>
      <ContainerSecao>
        <Titulos>Dados pessoais</Titulos>
        <CardGrande 
          imagem="./imgs/fotoPP.jpg" 
          nome="Oi, eu sou o Pedro." 
          descricao="Sou aluno da Labenu e da UFPA. Gosto de gravar vídeos, editar imagens e, de vez em quando, programar um pouco."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </ContainerSecao>

      <ContainerSecao>
        <CardPequeno
          imagem="/"
          nome="Email:"
          conteudo="pedropaulosouzasilvajr@gmail.com"
        />

        <CardPequeno
          imagem="/"
          nome="Endereço:"
          conteudo="Travessa João Pessoa S/N, Centro"
        />
      </ContainerSecao>

      <ContainerSecao>
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande 
          imagem="./imgs/labenu.jpg" 
          nome="Labenu" 
          descricao="Aprendendo com os melhores do mercado." 
        />
        
        <CardGrande 
          imagem="./imgs/UFPA.png" 
          nome="UFPA" 
          descricao="Programando coisas que nunca vão ser utilizadas e editando imagem para uma galera que tá velha demais pra isso." 
        />
      </ContainerSecao>

      <ContainerSecao>
        <Titulos>Minhas redes sociais</Titulos>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerSecao>
    </SuperContainer>
  );
}

export default App;
