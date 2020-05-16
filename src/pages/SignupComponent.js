import React from 'react';
import axios from 'axios';
import logo from '../resources/images/background.jpg';
import logo2 from '../resources/images/logo.png';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
class SignupComponent extends React.Component{
    
    constructor()
    {
        super();
        this.state = {
            username:'',
            emailid:'',
            address:'',
            password:'',
            confirmpassword:''
        }
    }
    updateUserName(newname){
        this.setState({username:newname});
    }
    updateEmailId(newname){
        this.setState({emailid:newname});
    }
    updateAddress(newname){
        this.setState({address:newname});
    }
    updatePassword(newname){
        this.setState({password:newname});
    }
    updateConfirmPassword(newname){
        this.setState({confirmpassword:newname});
    }
    redirectToLogin = () => {
        axios.post(
            'http://localhost:5000/users/add',
            { username: this.state.username,
              emailid: this.state.emailid,
              address: this.state.address,
              password: this.state.password },
            { headers: { 'Content-Type': 'application/json' } }
          ).then(res => alert("signed up successfully! :)"));
        this.props.history.replace("/");
    }
    render(){
        return(
            <div class="flex-Container">
            <div class="left-container">
            <img src={logo} alt="Food Image" id="Food"/>
            </div> 
            <div class="right-container">
                <img src={logo2} alt="FOODIE Icon" id="Logo"/>
                <h1 id="sign">Sign UP</h1>
                <form action="#" method="POST">                   
                    <InputComponent type="text" name="username" required placeholder="Username" className="middle" value={this.state.username} onChange={(event) => this.updateUserName(event.target.value)}/>
                    <InputComponent type="email" name="username" required placeholder="E-mail Id" className="middle" value={this.state.emailid} onChange={(event) => this.updateEmailId(event.target.value)}/>
                    <InputComponent type="text" name="username" required placeholder="Address" className="middle" value={this.state.addr} onChange={(event) => this.updateAddress(event.target.value)}/>          
                    <InputComponent type="password" name="password" required placeholder="Password" className="middle" value={this.state.password} onChange={(event) => this.updatePassword(event.target.value)}/> 
                    <InputComponent type="password" name="password" required="true" placeholder="Confirm Password" className="middle" value={this.state.confirmpassword} onChange={(event) => this.updateConfirmPassword(event.target.value)}/> 
                    <ButtonComponent type="button" value="SIGN UP" id="submit" onClick={this.redirectToLogin}/>
                </form>
            </div>
        </div>
        );
    }
}

export default SignupComponent;