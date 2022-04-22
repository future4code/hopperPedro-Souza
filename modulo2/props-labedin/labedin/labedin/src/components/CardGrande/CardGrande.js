import React from 'react';
// import './CardGrande.css'
import styled from 'styled-components'

const TituloNome = styled.h4`
    margin-bottom: 15px;
`

const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

function CardGrande(props) {
    return (
        <ContainerGrande>
            <Imagem src={ props.imagem } />
            <DivConteudo>
                <TituloNome>{ props.nome }</TituloNome>
                <p>{ props.descricao }</p>
            </DivConteudo>
        </ContainerGrande>
    )
}

export default CardGrande;