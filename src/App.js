import React from 'react';
import Routes from './routes';
import './Styles.css';

export default class App extends React.Component {
  render() {
    return(
      <div className="app">
         <Routes />
      </div>
    );
  }
}