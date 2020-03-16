import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {email: '', password: ''};
    }

    onFormSubmit = (event) => {

        event.preventDefault();

        let data = {
            password: this.state.password,
            username: this.state.email
        };

        console.log(data);

        axios.post('https://api.gii.gl/auth/login', data)
          .then(function (response) {
            // let token = response.data.token;
            // localStorage.setItem('token', token);
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
    render() {
        return (
            <div className="login-form text-left col-md-4">
                <form onSubmit={this.onFormSubmit }>
                    <header className="title text-center"><strong>Log in</strong></header>  
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                    <div className="create-account-link">Don't have an account? <a href='/'>Create your account</a> </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;