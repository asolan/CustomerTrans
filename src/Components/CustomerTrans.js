import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge'

const CustomerTrans =(props)=>{
  console.log(props);
  return( <div>
    <Table responsive> 
      <thead>
          <tr>
              <th colSpan="3" width="450px">&nbsp;</th>
              <th>
                <Badge  variant="primary">
                  Total Customer Rewards : {props.totalRewards}
                </Badge>
              </th>
            </tr>
      </thead>
    </Table>
    <Table  responsive striped bordered hover variant="light"> 
      <thead>
            <tr>
              <th>Transaction</th>
              <th>Date</th>
              <th>Amount Spend</th>
              <th>REWARD</th>
              
            </tr>
        </thead>
      {props.data.map((item,i)=>{
          console.log(item)
          
        return (
          <tbody key = {i} id = {i}>
            <tr>
              <td>{item.store}</td>
              <td>{item.date}</td>
              <td>{item.amountSpend}</td>
              <td>{item.points}</td>
            </tr>
          </tbody>
          );
      })}
    </Table>
      <Table > 
      <thead>
          <tr>
              <th colSpan="3" width="450">&nbsp;</th>
              <th>
                <Badge  variant="info">
                  Total Monthly Rewards : {props.totalMonthlyRewards}
                </Badge>
              </th>
            </tr>
      </thead>
      </Table>
    </div>
    
    )

}
  
export default CustomerTrans;