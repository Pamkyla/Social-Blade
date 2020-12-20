import React from 'react';

import AppHeader from '../AppHeader';
import AppNav from '../AppNav/AppNav';
import Statistic from '../Statistic/Statistic';

import './reset.css';
import './App.css';
import Spreadsheet from '../Spreadsheet/Spreadsheet';
import Sidebar from '../Sidebar/Sidebar';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header>
          <AppHeader />
          <AppNav />
        </header>
        <main className="main">
          <section className="section">
            <Statistic />
            <Spreadsheet />
          </section>
          <aside className="aside">
            <Sidebar />
          </aside>
        </main>
      </div>
    );
  }
}







export default App;