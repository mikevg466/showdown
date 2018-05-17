import React, { Component } from 'react';
import { Boxing, Winner } from '../Icons';
import './Brackets.css';

class Brackets extends Component{
  constructor(){
    super();

    this.state = {
      firstItemIndex: 0,
      secondItemIndex: 1,
      maxBracketCount: 3,
    };
  }

  getRandomIdx = () => Math.floor(Math.random() * this.props.items.length);

  setRandomIdx = () => {
    let firstItemIndex, secondItemIndex;
    while(this.props.items.length > 1 && firstItemIndex === secondItemIndex){
      firstItemIndex = this.getRandomIdx();
      secondItemIndex = this.getRandomIdx();
    }

    this.setState({
      firstItemIndex,
      secondItemIndex
    });
  }

  componentDidMount(){
    this.setRandomIdx();
  }

  handleClick = removeIdx => {
    this.props.removeItem(removeIdx, this.setRandomIdx);
  }

  render(){
    const { items } = this.props;
    const {
      firstItemIndex,
      secondItemIndex,
      maxBracketCount,
    } = this.state;

    return (
      <div className="brackets">
        {
          (items.length && items.length > maxBracketCount)
            ? (
                <div className="brackets__content">
                  <div className="brackets__content__first-item" onClick={() => this.handleClick(secondItemIndex)}>
                    {this.props.items[firstItemIndex] && this.props.items[firstItemIndex].component}
                  </div>
                  <div className="brackets__versus">
                    <h1>Versus!</h1>
                    <Boxing />
                  </div>
                  <div className="brackets__content__second-item" onClick={() => this.handleClick(firstItemIndex)}>
                    {this.props.items[secondItemIndex] && this.props.items[secondItemIndex].component}
                  </div>
                </div>
              )
            : (
                <div className="brackets__winners">
                  <h1>Winners!</h1>
                  <div className="brackets__winners__icon">
                    <Winner />
                  </div>
                  <div className="brackets__winners__names">
                    {items.map(item => (<p>{`- ${item.name}`}</p>))}
                  </div>
                </div>
            )
        }
      </div>
    );
  }
}

export default Brackets;
