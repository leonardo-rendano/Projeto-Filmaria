import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <Link to="/">Filmaria</Link>
      </div>
    );
  }
}