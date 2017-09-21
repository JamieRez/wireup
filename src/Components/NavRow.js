import React, {Component} from 'react';
import '../styles/NavRow.css';

export class NavRow extends Component {
    render(){
        return(
            <div id='rowDiv'>
                <div className={'rowBtn'}>Wire Up</div>
                <div className={'rowBtn'}>About</div>
                <div className={'rowBtn'}>Contact</div>
                <div className={'rowBtn'}>FAQ</div>
            </div>
        )
    }
}
