import React from 'react';
import axios from 'axios';
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
        axios.get('http://localhost:5000/users/')
        .then(response => {
            const datas = response.data;
            for(let data of datas)
            {
                if(data.username==this.state.username){
                    console.log(this.state.password);
                    if(data.password==this.state.password){
                        this.props.history.push("/restaurants/"+this.state.username);
                    }
                    else{
                        alert('username or password is wrong :(');
                        this.props.history.push("/");
                    } 
                }
            }
        })  
    }
    redirectToSignup = () => {
        this.props.history.push("/signup");
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
                    <ButtonComponent type="button" value="SIGN IN" id="submit" onClick={this.redirectToRestaurants}/>
                </form>
                <h5 id="forgot-text">Forgot Password?<a href="#" id="forgot">Click Here</a></h5>
                <h5 id="signup-text">Don't have an account?<a id="signup" onClick={this.redirectToSignup}>Signup</a></h5>   
            </div>
        </div>
        );
    }
    
}

export default LoginComponent;