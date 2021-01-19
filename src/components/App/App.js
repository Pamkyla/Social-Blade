import React from 'react';

import AppHeader from '../AppHeader';
import AppNav from '../AppNav';
import Statistic from '../Statistic';

import './reset.css';
import './App.css';
import Spreadsheet from '../Spreadsheet';
import Sidebar from '../Sidebar';
import StatisticContext from '../StatisticContext'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';

class App extends React.Component {

  state = {
    Data: []
  };



  componentDidMount() {
    const URL = "http://localhost:4000/getData?streamerNickname=Defloot1";


    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ Data: json });
      console.log(this.state);
    });
  }

  render() {
    const { Data } = this.state;
    const Route = require("react-router-dom").Route;
    return (
      
      <StatisticContext.Provider>
        <Router>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/App" >
            <div className="App">
              <header>
                <AppHeader/>
                <AppNav />
              </header>
              <main className="main">
                <section className="section">
                  <Statistic Data={Data} />
                  <Spreadsheet  Data={Data} />
                </section>
                <aside className="aside">
                  <Sidebar Data={Data} />
                </aside>
              </main>
            </div>
          </Route>
        </Router>
      </StatisticContext.Provider>
    );
  }
}







export default App;