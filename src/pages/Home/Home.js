import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: []
    }

    this.loadFilmes = this.loadFilmes.bind(this);
    
  }

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes() {
    let URL = 'https://sujeitoprogramador.com/r-api/?api=filmes'
    fetch(URL)
    .then((r) => r.json())
    .then((json) => {
      this.setState({filmes: json})
    })
  }

  render() {
    return(
      <div className="container">
        <div className="lista-filmes">
          { this.state.filmes.map((filme) => {
            return(
              <article key={filme.id} className="filme">
                <strong> {filme.nome} </strong>
                <img src= {filme.foto} alt="capa do filme" />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          }) }
        </div>
      </div>
    );
  }
}