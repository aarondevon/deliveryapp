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
        <form>
          <input type="text" />

          <button type="submit">Login</button>
        </form>
          <div className="create-account">
              <Link to="/create">Create Account</Link>
          </div>

      </div>
    );
  }
}
