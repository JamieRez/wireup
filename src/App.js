import React, { Component } from 'react';
import './styles/App.css';
import {Navbar} from './Components/Navbar';
import {Jumbo} from './Components/Jumbo';
import {NavRow} from './Components/NavRow';

export class App extends Component {
  render() {
    return (
        <div>
            <NavRow/>
            <Jumbo />
        </div>
    );
  }
}
