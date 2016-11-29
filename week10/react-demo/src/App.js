import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var data = this.props.data
    var onBoardClick = this.props.onBoardClick

    return (
        <table border="1" width="100" height="100">
            {data.map(function (row, rowIndex) {
                return <tr key={rowIndex}>
                    {
                        row.map(function (col, columnIndex) {
                            return <td
                                key={columnIndex}
                                onClick={function (e) {
                                onBoardClick(rowIndex, columnIndex)
                            }}>
                                {col}
                            </td>
                        })
                    }
                </tr>
            })}
        </table>
    );
  }
}

export default App;
