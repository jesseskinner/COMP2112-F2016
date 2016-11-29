import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// use an array of arrays for the tic-tac-toe data
var data = [
    ["", "", "O"],
    ["X", "", ""],
    ["", "", ""]
]

function onBoardClick(rowIndex, columnIndex) {
    data[rowIndex][columnIndex] = 'X'

    render()
}

function render() {
    ReactDOM.render(
      <App data={data} onBoardClick={onBoardClick}/>,
      document.getElementById('root')
    );
}

render()
