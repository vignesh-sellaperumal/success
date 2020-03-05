import React from 'react';
import logo from '../resources/images/background.jpg';
import logo2 from '../resources/images/logo.png';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
class LoginComponent extends React.Component{
    
    constructor()
    {
        super();
        this.state = {
            username:'',
            password:''
        }
    }
    updateUserName(newname){
        this.setState({username:newname});
    }
    updatePassword(newname){
        this.setState({password:newname});
    }
    redirectToRestaurants = () => {
        this.props.history.push("/restaurants");
    }
    render(){
        return(
            <div class="flex-Container">
            <div class="left-container">
            <img src={logo} alt="Food Image" id="Food"/>
            </div> 
            <div class="right-container">
                <img src={logo2} alt="FOODIE Icon" id="Logo"/>
                <h1 id="sign">Sign In</h1>
                <form action="#" method="POST">                   
                    <InputComponent type="text" name="username" placeholder="Username" className="middle" value={this.state.username} onChange={(event) => this.updateUserName(event.target.value)}/>     
                    <InputComponent type="password" name="password" placeholder="Password" className="middle" value={this.state.password} onChange={(event) => this.updatePassword(event.target.value)}/> 
                    <ButtonComponent type="button" value="LOGIN" id="submit" onClick={this.redirectToRestaurants}/>
                </form>
                <h5 id="forgot-text">Forgot Password?<a href="#" id="forgot">Click Here</a></h5>   
            </div>
        </div>
        );
    }
    
}

export default LoginComponent;