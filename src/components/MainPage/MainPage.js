import React from 'react';
import Sidebar from './Sidebar';
import Statistic from './Statistic';
import AppHeader from './AppHeader';
import AppNav from './AppNav';
import Spreadsheet from './Spreadsheet';

class MainPage extends React.Component {


    render() {
        const nickname = this.props;
        return (
            <div className="App">
                <header>
                    <AppHeader nickname={nickname} />
                    <AppNav />
                </header>
                <main className="main">
                    <section className="section">
                         <Statistic nickname={nickname} /> 
                        <Spreadsheet nickname={nickname} />
                    </section>
                    <aside className="aside">
                        <Sidebar nickname={nickname} />
                    </aside>
                </main>
            </div>
        )
    }
}

export default MainPage;