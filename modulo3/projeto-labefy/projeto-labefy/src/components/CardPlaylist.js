import React from 'react'

export class CardPlaylist extends React.Component{
    render(){
        return(
            <div className='playlist card'>
                <p>{this.props.nome}</p>
                <button onClick={() => this.props.mudaTela(this.props.id)}>Detalhes</button>
                <button onClick={() => this.props.removerPlaylist(this.props.id)}>Remover</button>
            </div>
        )
    }
}