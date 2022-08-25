import React from 'react';
import { auth } from '@trv-ent-web/auth';
import { TdsButton } from '@trv-tds/react';

class AuthExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cookieValues: this.getCookies() };
    auth.initialize(window);

    // prevent redirection for demonstration purposes
    window.onbeforeunload = () => {
      return false;
    };

    this.getCookies = this.getCookies.bind(this);
    this.handleLogInOnClick = this.handleLogInOnClick.bind(this);
    this.handleLogOutOnClick = this.handleLogOutOnClick.bind(this);
  }

  handleLogInOnClick() {
    document.cookie = 'SMSESSION=foo';
    document.cookie = 'TravAuthE=bar';
    document.cookie = 'TravAuthV=foobar';

    this.setState({ cookieValues: this.getCookies() });
  }

  handleLogOutOnClick() {
    auth.logout();
    this.setState({ cookieValues: this.getCookies() });
  }

  getCookies() {
    return document.cookie.split(';');
  }

  render() {
    return (
      <div>
        <p>
          The 'Log In' button manually sets dummy values that mock a user having
          been authenticated.
          <br />
          The 'Log Out' button uses the Auth module to log the user out.
        </p>
        <div>
          Cookie values:
          <pre>{JSON.stringify(this.state.cookieValues, null, 2)}</pre>
        </div>
        <TdsButton id="login" onClick={this.handleLogInOnClick} variant="primary">
          Log In
        </TdsButton>
        <TdsButton id="logout" onClick={this.handleLogOutOnClick} variant="secondary">
          Log Out
        </TdsButton>
      </div>
    );
  }
}

export default AuthExample;
