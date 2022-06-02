import React from 'react'
import styled from 'styled-components'
import { CardMusica } from './CardMusica'
import axios from 'axios'

const ContainerMusica = styled.div`
    display: grid;
    width: 100%;
`

const ContainerAddMusica = styled.div`
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 1px solid black;
`

const ContainerListaMusica = styled.div`
    grid-column: 2/ span 4;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
`

const ContainerCards = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;
`

export class TelaMusicas extends React.Component{
    state = {
        musicas: [],
        nome: "",
        autor: "",
        link: ""
    }

    componentDidMount = () => {
        this.pegarMusicas()
    }

    componentDidUpdate = (prevProps,prevState) => {
        if(prevState !== this.state.musicas){
            this.pegarMusicas()
        }
    }

    pegarMusicas = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            this.setState({musicas: resposta.data.result.tracks})
        }).catch((erro) => {
            alert(erro.message)
        })
    }

    addMusica = () => {
        const body = {
            name: this.state.nome,
            artist: this.state.autor,
            url: this.state.link
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body, {
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            alert("Música Adicionada")
        }).catch((erro) => {
            alert(erro.message)
        })
    }

    rmMusica = (idTrack) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${idTrack}`, {
            headers : {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            alert("Música Removida")
        }).catch((erro) => {
            alert(erro.message)
        })
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeAutor = (event) => {
        this.setState({autor: event.target.value})
    }

    onChangeLink = (event) => {
        this.setState({link: event.target.value})
    }

    render(){
        const rendMusicas = this.state.musicas.map((musica) => {
            return(
                <CardMusica
                    id={musica.id}
                    nome={musica.name}
                    autor={musica.artist}
                    link={musica.url}
                    rmMusica={this.rmMusica}
                />
            )
        })
        return(
            <ContainerMusica>
                <ContainerAddMusica>
                    <h2>Adicionar Musica</h2>
                    <input 
                        placeholder='Nome'
                        value={this.state.nome}
                        onChange={this.onChangeNome}
                    />
                    <input 
                        placeholder='Autor'
                        value={this.state.autor}
                        onChange={this.onChangeAutor}
                    />
                    <input 
                        placeholder='Link'
                        value={this.state.link}
                        onChange={this.onChangeLink}
                    />
                    <button onClick={this.addMusica}>Adicionar</button>
                </ContainerAddMusica>
                <ContainerListaMusica>
                    <h2>Músicas</h2>
                    <ContainerCards>
                        {rendMusicas}
                    </ContainerCards>
                    <button onClick={this.props.mudaTela}>Voltar</button>
                </ContainerListaMusica>
            </ContainerMusica>
        )
    }
}