import React from 'react';
import styled from 'styled-components'

const ContainerPequeno = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
`

function CardPequeno(props){
    return(
        <ContainerPequeno>
            <img src={props.imagem}/>
            <h4>{props.nome}</h4>
            <span>{props.conteudo}</span>
        </ContainerPequeno>
    )
}

export default CardPequeno;