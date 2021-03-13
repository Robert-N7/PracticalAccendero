import React, { Component } from "react";
import Api from "../axiosApi";

/********************************************************************
*   Signup
* User Signup form
********************************************************************/ 
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        try {
            Api.post('/user/create/', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then((response) => {
                return response
            })
        } catch (error) {
             throw error
        }    
    }

    render() {
        return (
            <div>
                Signup
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Signup;