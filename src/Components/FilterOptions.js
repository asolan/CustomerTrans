import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state={
      customer:'',
      year:'',
      month:''
    }
  }

  
  submitForm=(event)=>{
    event.preventDefault();
    this.props.submitFilter(this.state);
  }
  changeOption =(event)=>{
    this.setState(
      {
        [event.target.name]:event.target.value},
        ()=>{console.log(this.state)}
      )
    }  
  render(){
    
    return(
        <Container>
        <Form onSubmit={this.submitForm}>
          <Form.Row>
            <Form.Group  lg="4" >
              <Form.Label>Customer</Form.Label>
              <Form.Control as="select"
                id="customer"  name="customer" value={this.state.customer} onChange={this.changeOption}>
                {this.props.customerOption.map(function(option) {
                  return ( <option key={option} value={option}>{option}</option> )
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group  lg="2">
              <Form.Label>Year</Form.Label>
              <Form.Control as="select"
              id="year" name="year" value={this.state.year} onChange={this.changeOption}>
              {this.props.yearOption.map(function(option) {
                return ( <option key={option} value={option}>{option}</option> )
              })}
              </Form.Control>
            </Form.Group>
            <Form.Group  lg="2">
              <Form.Label>Month</Form.Label>
                <Form.Control as="select"
                  id="month" name="month" value={this.state.month} onChange={this.changeOption}>
                  {this.props.monthOption.map(function(option) {
                    return ( <option key={option} value={option}>{option}</option> )
                  })}
                </Form.Control>
            </Form.Group>
            <Form.Group  lg="4">
              <Form.Label>&nbsp;</Form.Label>
                <Form.Control as="button" type="submit" width="250" id="submit">
                  Submit
                </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
        </Container>
    )
  }
}

export default FilterOptions;