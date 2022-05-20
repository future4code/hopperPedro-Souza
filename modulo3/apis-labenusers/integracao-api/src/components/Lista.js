import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 580px;
    min-width: 380px;
    align-items: center;
    gap: 10px;
    border: 1px solid black;
    padding: 10px;
`

const ItemLista = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    justify-content: space-around;
`
export class Lista extends React.Component{
    state = {
        listaDeUsuario: [
            {id: 1,name: ""}
        ]
    }

    componentDidMount = () => {
        this.pegarLista()
    }

    pegarLista = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            this.setState({listaDeUsuario: resposta.data})
        }).catch((error) => {
            alert(error.message)
        })
    }

    apagarItem= (itemId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${itemId}`
        axios.delete(url, {
            headers: {
                Authorization: "pedro-souza-hopper"
            }
        }).then((resposta) => {
            console.log("Apagado")
            alert("Apagado")
        }).catch((error) => {
            console.log(error.message)
            // alert(error.message)
        })
    }

    render(){
        const renderizarLista = this.state.listaDeUsuario.map((usuario) => {
            return <ItemLista>
                <p>{usuario.name}</p>
                <button onClick={() => this.apagarItem(usuario.id)}>DELETAR</button>
            </ItemLista>
        })
        return(
            <div>
                <ListaUsuarios>
                    {renderizarLista}
                    <button onClick={this.props.mudaTela}>Voltar</button>
                </ListaUsuarios>
            </div>
        )
    }
}