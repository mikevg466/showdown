import React, { Component } from 'react';

class Brackets extends Component{
  constructor(){
    super();

    this.state = {

    };
  }

  render(){
    return (
      <div>
        <p>BRACKETS!</p>
        {
          this.props.items[0]
        }
      </div>
    );
  }
}

export default Brackets;
