import React from 'react';
import axios from 'axios';
import Header from './Header'
import { connect } from 'react-redux';
import { register } from '../actions/auth';

interface CreateAccountState  {
    name: '',
    email: '',
    password: '',
    passwordTwo: ''
}

class CreateAccount extends React.Component<any,CreateAccountState> {

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

    render() {
        const {name, email, password, passwordTwo} = this.state;

        return (
            <div>
                <Header />
                <div className="create-account-container">

                    <div className="form-container">

                        <form id="form" className=" form">
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
                                    value={email}/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="passwordOne">Enter Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    // minLength="6"
                                />

                            </div>

                            <div className="form-control">
                                <label htmlFor="passwordTwo">Confirm Password</label>
                                <input type="password" placeholder="Password" name="passwordTwo" value={passwordTwo}/>
                            </div>



                            <button type="submit">Create Account</button>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}
export default CreateAccount;
// export default connect(null, { register })(CreateAccount);