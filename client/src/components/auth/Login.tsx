import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header'
import { connect } from 'react-redux';
import axios from 'axios';
import { register } from '../../actions/auth';

interface LoginProps {
    login: string
}

interface CreateAccountState  {
    email: '',
    password: '',
}

class Login extends React.Component<LoginProps,CreateAccountState> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        console.log('success')
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <Header />
                <div className="create-account-container">

                    <div className="form-container">

                        <form id="form" className=" form" onSubmit={event => this.onSubmit(event)}>
                            <h2 className="create-account-header">Sign In</h2>

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

                            <button type="submit">Login</button>
                        </form>
                        <div className="create-account">
                            Don't have an account?
                            <Link to="/create">Sign Up</Link>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default connect(null, { register })(Login);