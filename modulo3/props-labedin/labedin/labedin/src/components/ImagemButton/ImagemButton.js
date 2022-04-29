import React from 'react';
// import './ImagemButton.css'
import styled from 'styled-components'

const ImagemBotao = styled.img`
    width: 30px;
    margin-right: 10px;
`

const DivImagemBotao = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

function ImagemButton(props) {
    return (
        <DivImagemBotao>
            <ImagemBotao src={ props.imagem }/>
            <p>{ props.texto }</p>
        </DivImagemBotao>

    )
}

export default ImagemButton;