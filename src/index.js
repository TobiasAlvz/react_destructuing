import React from 'react';
import ReactDOM from 'react-dom';
import cars from './cars';
const [honda, tesla] = cars; 

ReactDOM.render (
    
  <table>
    <thead>
      <tr>
        <th>Modelo</th>
        <th>Cor</th>
        <th>Velocidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{honda.model}</td>
        <td>{honda.color}</td>
        <td>{honda.speed.max} km/h</td>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{tesla.color}</td>
        <td>{tesla.speed.max} km/h</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById ('root')
);
