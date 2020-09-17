import React from 'react';
import Header from './Header'

export default class CreateAccount extends React.Component<{},{}> {

    render() {
        return (
            <div>
                <Header />
                <div className="create-account-container">

                    <div className="form-container">

                        <form id="form" className=" form">
                            <h2 className="create-account-header">Register With Us</h2>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" value="Enter email"/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="passwordOne">Enter Password</label>
                                <input type="password" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="passwordOne">Confirm Password</label>
                                <input type="password" />
                            </div>



                            <button type="submit">Create Account</button>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}