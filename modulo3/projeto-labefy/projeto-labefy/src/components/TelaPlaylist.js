import React from 'react'
import styled from 'styled-components'
import { CardPlaylist } from './CardPlaylist'
import axios from 'axios'

const ContainerPlaylist = styled.div`
    display: grid;
    width: 100%;
`

const ContainerCriarPlaylist = styled.div`
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 1px solid black;
`

const ContainerListaPlaylist = styled.div`
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

export class TelaPlaylist extends React.Component{
    state = {
        playlists: [],
        inputPlaylist: ""
    }

    componentDidMount = () => {
        this.pegarPlaylists()
    }

    componentDidUpdate = (prevProps,prevState) => {
        if(prevState !== this.state.playlists){
            this.pegarPlaylists()
        }
    }

    pegarPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            this.setState({playlists: resposta.data.result.list})
        }).catch((erro) => {
            alert("erro.message")
        })
    }

    criarPlaylist = () => {
        const body = {
            name: this.state.inputPlaylist
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            alert("Playlist Adicionada")
        }).catch((erro) => {
            alert(erro.message)
        })
    }

    removerPlaylist = (idPlaylist) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,{
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            alert("Playlist Removida")
        }).catch((erro) => {
            alert(erro.message)
        })
    }

    onChangeInputPlaylist = (event) => {
        this.setState({inputPlaylist: event.target.value})
    }

    render(){
        const rendPlaylists = this.state.playlists.map((playlist) => {
            return( 
                <CardPlaylist 
                    mudaTela={this.props.mudaTela}
                    nome={playlist.name}
                    id={playlist.id}
                    removerPlaylist={this.removerPlaylist}
                />
            )
        })
        return(
            <ContainerPlaylist>
                <ContainerCriarPlaylist>
                    <h2>Criar Playlist</h2>
                    <input 
                        placeholder='Nome'
                        value={this.state.inputPlaylist}
                        onChange={this.onChangeInputPlaylist}
                    />
                    <button
                        onClick={this.criarPlaylist} 
                    >Criar</button>
                </ContainerCriarPlaylist>
                <ContainerListaPlaylist>
                    <h2>Playlists</h2>
                    <ContainerCards>
                        {rendPlaylists}
                    </ContainerCards>
                </ContainerListaPlaylist>
            </ContainerPlaylist>
        )
    }
}