import React, { Component } from 'react';
import '../style.css';

import FilterOptions from './FilterOptions';
import CustomerTrans from './CustomerTrans';
import Alert from 'react-bootstrap/Alert';


class CustomerForm extends Component {
  constructor(props) {
   
    super(props);
    this.state={
      loading:false,
      data:this.props.data,
      customer:[],
      year:[],
      month:["","Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
      filterdItems:[],
      totalMonthlyRewards:0,
      totalRewards:0
    }
  }

  submitFilter=(data)=>{
    
    let filteredItems = this.props.data;

    const customerTrans = filteredItems.map(trans=> {
      let points = 0;
      let over100 = trans.amountSpend - 100;
      if (over100 > 0) {
        // A customer receives 2 points for every dollar spent over $100 in each transaction  
        // plus 1 point for every dollar spent over $50 in each transaction    
        points += (over100 * 2) + 1 * 50;
      }    
      if (trans.amountSpend > 50 && trans.amountSpend < 100 ) {
        // plus 1 point for every dollar spent over $50 in each transaction
        points += (trans.amountSpend * 1) - 50;      
      }
      const month = new Date(trans.date).getMonth();
      return {...trans, points, month};
    });
   
    let  totalRewards =customerTrans.filter(item => {
      let fullName = item.firstName + " " + item.lastName
      return fullName === data.customer
      }
    ).reduce((total, item) => total + item.points,0);

  
   
    filteredItems = customerTrans.filter(item=>{
      let fullYear = (new Date(item.date)).getFullYear();
      let fullName = item.firstName + " " + item.lastName;
      let month = (new Date(item.date)).getMonth() + 1;
      
      return (Date.parse(fullYear) === Date.parse(data.year)) &&
             (fullName === data.customer) &&
             (Date.parse(month) === Date.parse(this.state.month.indexOf(data.month)))
      });
      
    let totalMonthlyRewards=filteredItems.reduce((total,item)=>total+ item.points,0);

    this.setState({filterdItems:[...filteredItems],totalMonthlyRewards,totalRewards})
  }

   componentDidMount(){

    const customerdata = this.props.data
                        .map(custdata => {
                          let fullName=custdata.firstName + " " + custdata.lastName;
                          let year= (new Date(custdata.date)).getFullYear();
                          return {fullName,year};
                        });

           
    let customer = [...new Set(customerdata.map(custdata=>custdata.fullName))];
        customer.unshift("");   
     
      let year = [...new Set(customerdata.map(custdata=>custdata.year))];
      year.unshift(""); 
     
      //simulate the loading...from server..
      setTimeout(()=>{
        this.setState({
          customer:[...customer],
          year:[...year],
          loading:true
        },console.log(this.state.customerdata));
      },1000)
   

   }
   
  render(){
   
   return(<div>
     {
       !this.state.loading ?  <Alert variant="primary">Loading....!!</Alert> :
      <div>
      <h4>Customer Transactions..</h4>
       <FilterOptions 
            data = {this.state.data} 
            customerOption = {this.state.customer} 
            yearOption = {this.state.year}
            monthOption = {this.state.month}
            submitFilter = {this.submitFilter}
        />
        {
         this.state.filterdItems.length !== 0 ?
          <CustomerTrans  
              data = {this.state.filterdItems} 
              totalMonthlyRewards = {this.state.totalMonthlyRewards}
              totalRewards = {this.state.totalRewards} 
          /> :
          <Alert variant="warning">No data Found..!! Please select and submit</Alert>
        }
      </div>
      }
    </div>)
  }
}
  export default CustomerForm;