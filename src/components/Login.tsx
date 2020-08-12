import React from 'react';

export default class Login extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Idag</h1>
        <form>
          <input type="text" />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
