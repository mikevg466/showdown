import React, { Component } from 'react';
import WinnerList from '../WinnerList';
import { Boxing, Confused } from '../Icons';
import { shuffle } from '../../utils';
import './Brackets.css';

const bracketType = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  DRAW: 'DRAW',
}

class Brackets extends Component{
  constructor(){
    super();

    this.state = {
      bracketArr: [],
      resultArr: [],
      maxBracketCount: 3,
    };
  }

  componentDidMount(){
    // shuffle the incoming items and use as the bracket array
    this.setState({
      bracketArr: shuffle(this.props.items)
    });
  }

  handleClick = itemStr => {
    const bracketArr = this.state.bracketArr.slice();
    const resultArr = this.state.resultArr.slice();

    // push the item to save to the result Array and
    //   remove both items from the bracket Array
    if(itemStr === bracketType.FIRST){
      resultArr.push(bracketArr.pop());
      bracketArr.pop();
    } else if(itemStr === bracketType.SECOND){
      bracketArr.pop();
      resultArr.push(bracketArr.pop());
    } else{
      resultArr.push(bracketArr.pop());
      resultArr.push(bracketArr.pop());
    }

    // if the bracket Array is less than 2, move the
    //  items from the result Array back into the bracket Array and shuffle.
    //  if one item hasn't been acted on, make that item last
    if(bracketArr.length + resultArr.length <= this.state.maxBracketCount){
      this.setState({
        bracketArr: [],
        resultArr: bracketArr.concat(resultArr),
      })
    } else if(bracketArr.length === 0){
      this.setState({
        bracketArr: shuffle(resultArr),
        resultArr: [],
      });
    } else if(bracketArr.length === 1){
      this.setState({
        bracketArr: shuffle(resultArr).concat(bracketArr),
        resultArr: [],
      });
    } else{
      this.setState({ bracketArr, resultArr });
    }
  }

  render(){
    const firstItemIndex = this.state.bracketArr.length - 1;
    const secondItemIndex = this.state.bracketArr.length - 2;

    return (
      <div className="brackets">
        {
          this.state.bracketArr.length >= 2
            ?
              <div className="brackets__content">
                <div className="brackets__content__first-item" onClick={() => this.handleClick(bracketType.FIRST)}>
                  {this.state.bracketArr[firstItemIndex] && this.state.bracketArr[firstItemIndex].component}
                </div>
                <div className="brackets__versus">
                  <div className="versus__logo">
                    <h1>Versus!</h1>
                    <Boxing />
                  </div>
                  <div className="versus__draw" onClick={() => this.handleClick(bracketType.DRAW)}>
                    <Confused />
                    <h2>Draw!</h2>
                  </div>
                </div>
                <div className="brackets__content__second-item" onClick={() => this.handleClick(bracketType.SECOND)}>
                  {this.state.bracketArr[secondItemIndex] && this.state.bracketArr[secondItemIndex].component}
                </div>
              </div>
            :
              this.state.resultArr.length
                ?
                  <WinnerList items={this.state.resultArr} />
                :
                  null
        }
      </div>
    );
  }
}

export default Brackets;
