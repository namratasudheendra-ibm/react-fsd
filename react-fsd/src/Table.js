import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <div className="table">
          <div className="table-header">
          <div className="row">
          <div className="column">Topic</div>
              <div className="column">StartDate</div>
              <div className="column">EndDate</div>
          </div>
          </div>
          <div className="table-body">
           {console.log(items.length)}
          { items.length>5?
           (
           items.slice(items.length-5,items.length).map(item => {
              return (
                <div className="row">
                  <div className="column">{item.topic}</div>
                  <div className="column">{item.startDate}</div>
                  <div className="column">{item.endDate}</div>
                </div>
              );
            })):( 
              items.map(item => {
                 return (
                   <div className="row">
                     <div className="column">{item.topic}</div>
                     <div className="column">{item.startDate}</div>
                     <div className="column">{item.endDate}</div>
                   </div>
                );
              }))
              
            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default Table;