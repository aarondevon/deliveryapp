import React from 'react';
import { Link } from 'react-router-dom'

interface LoginProps {
    login: string
}

export default class Login extends React.Component<LoginProps, {}> {
  render() {
    return (
      <div>
          <h1>Idag</h1>
        <div className="login-container">
            <div className="login-form-container">
                <form id="form" className="form">
                    <h2 className="login-header">Login</h2>
                    <div className="login-form-control">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="login-form-control">
                        <label>Password</label>
                        <input type="password"/>
                    </div>

                    <button type="submit">Login</button>
                </form>
                <div className="create-account">
                    <Link to="/create">Create Account</Link>
                </div>

            </div>
        </div>


      </div>
    );
  }
}
