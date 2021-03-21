import React from 'react';

import { Link } from 'react-router-dom';

import './LoginPage.css';


class LoginPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = { value: ['Ant1ka'] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }



  handleSubmit() {
    let nickname = this.state.value;
    this.props.changeNickname(`${nickname}`);
  }

  render() {



    return (
      <form >
        <label>
          Имя:
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter your name' />
        </label>
        <Link to="/main"><input type="button" value="Submit" onClick={this.handleSubmit} /></Link>
      </form>
    );
  }
}

export default LoginPage;