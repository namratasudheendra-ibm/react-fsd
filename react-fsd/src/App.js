import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      topic: '',
      startDate: '',
      endDate: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];
    const topic=this.state.topic;
    const startDate=this.state.startDate;
    const endDate=this.state.endDate;
if(topic!=null && topic!="" && startDate!=null && startDate!="" && endDate!=null && endDate!="")
{
  
    items.push({
      topic: this.state.topic,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });

    this.setState({
      items,
      topic: '',
      startDate: '',
      endDate: ''
    });
   }
   else{
      alert("Invalid values!!")
   }
  };

  handleReset = (e) => {
    this.setState({
      topic: '',
      startDate: '',
      endDate: ''
    });
  }

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newTopic={ this.state.topic }
          newStartDate={ this.state.startDate }
          newEndDate={ this.state.endDate } 
          handleReset={ this.handleReset }/>

        <Table items={ this.state.items }/>
      </div>
    );
  }
}

export default App;