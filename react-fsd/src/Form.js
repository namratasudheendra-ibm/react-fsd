import React, { Component } from 'react';
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>  
        <form className="form" onSubmit={this.props.handleFormSubmit}>
            <fieldset>
                <div className="field">
           <div className="label">
          <label htmlFor="topic">
         
          Topic:
          <input className="input topic" id="topic" value={this.props.newTopic} 
            type="text" name="topic"
            onChange={this.props.handleInputChange} />
          </label>
          </div>
          </div>
          <div className="field">
          <label className="label" htmlFor="startDate">
          StartDate:
          <input className="input startDate" id="startDate" value={this.props.newStartDate} 
            type="date" name="startDate" 
            onChange={this.props.handleInputChange}  />
          </label>
          </div>
          <div className="field">
          <label className="label" for="endDate">
          EndDate:
          <input className="input endDate" id="endDate" value={this.props.newEndDate} 
            type="date" name="endDate"
            onChange={this.props.handleInputChange} />
          </label>
          </div>
          </fieldset>
          <button type="submit" value="Submit">Insert</button>
          <button type="reset" value="Reset" onClick={this.props.handleReset}>Reset</button>
         
        </form>
      </div>
    );
  }
}

export default Form;