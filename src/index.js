import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import CustomerForm from './Components/CustomerForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      transaction:[
        {firstName:"John", lastName:"Doe", store:"Walmart", amountSpend:120, date: "12/1/2019"}, 
        {firstName:"John", lastName:"Doe", store:"Taget", amountSpend:50, date: "12/1/2019"},
        {firstName:"John", lastName:"Doe", store:"StainMart", amountSpend:90, date: "12/1/2019"},

         {firstName:"John", lastName:"Doe", store:"Walmart", amountSpend:120, date: "11/1/2019"}, 
        {firstName:"John", lastName:"Doe", store:"Taget", amountSpend:70, date: "11/1/2019"},
        {firstName:"John", lastName:"Doe", store:"StainMart", amountSpend:50, date: "11/1/2019"},

        {firstName:"Micheal", lastName:"Taylor", store:"Walmart", amountSpend:120, date: "11/15/2019"},{firstName:"Micheal", lastName:"Taylor", store:"Target", amountSpend:60, date: "11/16/2019"},
        {firstName:"Micheal", lastName:"Taylor", store:"StainMart", amountSpend:30, date: "11/18/2019"},
        {firstName:"Micheal", lastName:"Taylor", store:"Walmart", amountSpend:120, date: "12/15/2019"},{firstName:"Micheal", lastName:"Taylor", store:"Target", amountSpend:80, date: "12/16/2019"},
        {firstName:"Micheal", lastName:"Taylor", store:"StainMart", amountSpend:50, date: "12/18/2019"},
    ]
    };
  }

  render() {
    return (
      <div>
        <CustomerForm data = {this.state.transaction} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
