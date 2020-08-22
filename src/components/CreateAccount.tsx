import React from 'react';
import Header from './Header'

export default class CreateAccount extends React.Component<{},{}> {

    render() {
        return (
            <div className="container">
                <Header />
                <form className="form flex">
                    <label id="email">Email</label>
                    <input type="email" />
                    <input type="password" />
                    <input type="password" />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}