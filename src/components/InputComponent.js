import React from 'react'
import '../styles/InputCompon.css';
class InputComponent extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} className={this.props.className} value={this.props.value} onChange={(event) => this.props.onChange(event)}/>
        );
    }
}

export default InputComponent;