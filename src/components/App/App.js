import React from 'react';

import './reset.css';
import './App.css';
import StatisticContext from '../../services/StatisticContext'
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../LoginPage';
import StreamersPage from '../StreamersPage';
import MainPage from '../MainPage/MainPage';

class App extends React.Component {

  state = {
    Data: [],
    nickname: 'Defloot1'
  };

  render() {
    const nickname = this.state.nickname;
    const Route = require("react-router-dom").Route;

    let changeNickname = (nickname) => {
      this.setState({ nickname: `${nickname}` });
    }

    return (

      <StatisticContext.Provider>
        <Router>

          <Route path="/" exact>
            <LoginPage changeNickname = {changeNickname}/>
          </Route>

          <Route path="/admin">
            <StreamersPage changeNickname = {changeNickname} />
          </Route>

          <Route path="/main" >
            <MainPage nickname={nickname} />
          </Route>

        </Router>
      </StatisticContext.Provider>
    );
  }
}







export default App;