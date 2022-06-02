import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export class CardMusica extends React.Component{
    render(){
        return(
            <div className='musica card'>
                <div>
                    <p>{this.props.nome}</p>
                    <p>{this.props.autor}</p>
                    <ReactAudioPlayer
                        src={this.props.link}
                        autoPlay
                        controls
                    />
                </div>
                <button onClick={() => this.props.rmMusica(this.props.id)}>Remover</button>
            </div>
        )
    }
}