import React from 'react';
import './Filme-info.css';

export default class Filme extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filme: []
    }
  }

 componentDidMount() {
   const { id } = this.props.match.params
   let URL = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
   fetch(URL)
   .then((r) => r.json())
   .then((json) => {
     this.setState({filme: json})
   })
 }
  render() {
    return(
      <div className="filme-info">
        <h1> {this.state.filme.nome} </h1>
        <img src= {this.state.filme.foto} alt="capa do filme" />
        {this.state.filme.length !== 0 && //RENDERIZAÇÃO CONDICIONAL 
          <h3>Sinopse</h3>
        }
        {this.state.filme.sinopse}
      </div>
    );
  }
}