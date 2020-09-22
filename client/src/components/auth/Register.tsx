import React from 'react';
import axios from 'axios';
import Header from '../Header'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {setAlert} from "../../actions/alert";

interface CreateAccountState  {
    name: '',
    email: '',
    password: '',
    passwordTwo: ''
}

class Register extends React.Component<any,CreateAccountState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordTwo: ''
        }
    }

    onChange(event: any) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    async onSubmit (event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(this.state.password !== this.state.passwordTwo) {
            this.props.setAlert('Passwords do not match!', 'danger');
           console.log('Passwords do not match');
        } else {
            console.log('success')
        }
    }

    render() {
        const {name, email, password, passwordTwo} = this.state;

        return (
            <div>
                <Header />
                <div className="create-account-container">

                    <div className="form-container">

                        <form id="form" className=" form" onSubmit={event => this.onSubmit(event)}>
                            <h2 className="create-account-header">Register With Us</h2>
                            <div className="form-control">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={(event:any) => this.onChange(event)}
                                    required
                                />

                            </div>

                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(event:any) => this.onChange(event)}
                                    value={email}
                                    required
                                />

                            </div>

                            <div className="form-control">
                                <label htmlFor="passwordOne">Enter Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(event:any) => this.onChange(event)}
                                    value={password}
                                    // minLength="6"
                                />

                            </div>

                            <div className="form-control">
                                <label htmlFor="passwordTwo">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="passwordTwo"
                                    onChange={(event:any) => this.onChange(event)}
                                    value={passwordTwo}/>
                            </div>

                            <button type="submit">Create Account</button>
                        </form>
                        <div className="create-account">
                            Already have an account?
                            <Link to="/">Sign In</Link>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default connect(null, { setAlert })(Register);