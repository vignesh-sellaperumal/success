import React from 'react'
import logo from '../resources/images/logoWhite.png';
import '../styles/HeaderCompon.css';
class HeaderComponent extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div class="Container">
                <div class="top-container">
                    <div class="top-one">
                        <img src={logo} alt="Logo" id="white"/>
                    </div>
                    <div class="top-two">
                        <h3>Hello, {this.props.userName} :) </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;