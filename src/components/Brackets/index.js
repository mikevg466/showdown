import React, { Component } from 'react';

class Brackets extends Component{
  constructor(){
    super();

    this.state = {
      itemIndex: 0,
    };
    this.setRandomIdx = this.setRandomIdx.bind(this);
  }

  setRandomIdx(){
    this.setState({
      itemIndex: Math.floor(Math.random() * this.props.items.length)
    });
  }

  componentDidMount(){
    this.setRandomIdx();
  }

  render(){
    const randIdx = Math.floor(Math.random() * this.props.items.length);

    return (
      <div>
        <p>BRACKETS!</p>
        <button onClick={this.setRandomIdx} >RANDOM!</button>
        {
          this.props.items.length
            ? this.props.items[randIdx]
            : null
        }
      </div>
    );
  }
}

export default Brackets;
