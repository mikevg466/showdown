import React, { Component } from 'react';

class Brackets extends Component{
  constructor(){
    super();

    this.state = {
      firstItemIndex: 0,
      secondItemIndex: 1,
      maxBracketCount: 1,
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

    console.log('First Item Idx ===> ', firstItemIndex);
    console.log('Second Item Idx ===> ', secondItemIndex);


    return (
      <div>
        <p>BRACKETS!</p>
        <button onClick={this.setRandomIdx} >RANDOM!</button>
        {
          (items.length && items.length > maxBracketCount)
            ? (
                <div>
                  <div onClick={() => this.handleClick(secondItemIndex)}>
                    {this.props.items[firstItemIndex] && this.props.items[firstItemIndex].component}
                  </div>
                  <div onClick={() => this.handleClick(firstItemIndex)}>
                    {this.props.items[secondItemIndex] && this.props.items[secondItemIndex].component}
                  </div>
                </div>
              )
            : (
                <ul>
                  {items.map(item => (<li>{item.name}</li>))}
                </ul>
            )
        }
      </div>
    );
  }
}

export default Brackets;
