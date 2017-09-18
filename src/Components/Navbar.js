import React, {Component} from 'react';
import '../styles/Navbar.css';

export class Navbar extends Component{

    render() {
        return(
            <div className='navDiv'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }

}
