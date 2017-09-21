import React, {Component} from 'react';
import '../styles/Jumbo.css';

export class Jumbo extends Component {
    render() {
        return (
            <div id="jumboBorder">
                <div className='jumbo'>
                    <h1 id='title'>WireUp Tutoring</h1>
                    <p id='subtitle'>We at WireUp do our Best to Provide Specialized Tutoring for each of our Clients.</p>
                    <div className='priceContainer'>
                        <div className='priceBox' id='priceBoxRed'>
                            <h1 class='priceTitle'>$25</h1>
                            <p>30 Minute Tutoring Session</p>
                        </div>
                        <div className='priceBox' id='priceBoxGreen'>
                            <h1 class='priceTitle'>$45</h1>
                            <p>60 Minute Tutoring Session</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
