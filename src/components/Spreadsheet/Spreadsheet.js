import React from 'react';
import SpreadsheetItem from '../SpreadsheetItem';

import './Spreadsheet.css';

class Spreadsheet extends React.Component {
    render() {
        const data = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
        const elements = data.map((element) => {
            return (
                <tr key={element} className="spreadsheet_item">
                    <SpreadsheetItem
                        element={element}
                    />
                </tr>
            );
        });

        return (
            <>
            <table>
                <caption>YOUTUBE STATS SUMMARY / USER STATISTICS FOR CS:GO BEST MOMENTS (2020-12-06 - 2020-12-19)</caption>
                <tr>
                    <th>DATE</th>
                    <th>SUBSCRIBERS</th>
                    <th>VIDEO VIEWS</th>
                    <th>ESTIMATED EARNINGS</th>
                </tr>
                <tbody className="Spreadsheet">
                    {elements}
                </tbody>
                <tr className="spreadsheet_item_sum">
                    <td>Daily Averages </td>
                    <td>+334</td>
                    <td>+173,815</td>
                    <td>$43  -  $695 </td>
                </tr>
                <tr className="spreadsheet_item_sum">
                <td>Daily Averages </td>
                    <td>+334</td>
                    <td>+173,815</td>
                    <td>$43  -  $695 </td>
                </tr>
                <tr className="spreadsheet_item_sum">
                <td>Daily Averages </td>
                    <td>+334</td>
                    <td>+173,815</td>
                    <td>$43  -  $695 </td>
                </tr>

            </table>
                <button className="share_btn">See Full Monthly Statistics</button>
                <button className="share_btn">See Full Monthly Statistics</button>
                <button className="share_btn">See Full Monthly Statistics</button>
            </>
        );
    }
}

export default Spreadsheet;