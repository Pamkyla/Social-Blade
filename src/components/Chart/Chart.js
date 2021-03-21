// import React from 'react';

// import { LineChart } from 'react-chartkick'
// import 'chart.js'

// class Chart extends React.Component {
//   state = {}

//   componentDidMount() {
//     const element = this.props;
//     let url = element.url.url;
//     const URL = `http://localhost:4000/bitlyUrl?bitlyUrl=${url}`;
//     fetch(URL).then(res => res.json()).then(json => {
//       this.setState({ data: json });
//     });
//   }

//   render() {
//     function Clicks() {
//       for (let i = 0; i < state.data.length; i++) {
//         this.state.data.clicks[i];
//         return
//       }
//     }
//     return (
//       <LineChart data={this.state.data.clicks} />
//     );
//   }
// }

// export default Chart;
import React, { PureComponent } from 'react';
import './Chart.css'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import StatsService from '../../services/StatsService';

export default class Chart extends PureComponent {

service = new StatsService();

state = [];


  
  render() {

    const element = this.props;
    let service = this.service;
    async function getClick () {
      const url_data = await service.getClicks(`${element.url.url}`);
      let data = [ url_data ];
      console.log([data[0].clicks]);
      return ([data[0].clicks]);
    }
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={getClick()}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

