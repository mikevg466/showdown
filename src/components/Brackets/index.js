import React, { Component } from 'react';
import { Boxing, Winner } from '../Icons';
import { shuffle } from '../../utils';
import './Brackets.css';

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
    if(itemStr === 'first'){
      resultArr.push(bracketArr.pop());
      bracketArr.pop();
    } else{
      bracketArr.pop();
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
                <div className="brackets__content__first-item" onClick={() => this.handleClick('first')}>
                  {this.state.bracketArr[firstItemIndex] && this.state.bracketArr[firstItemIndex].component}
                </div>
                <div className="brackets__versus">
                  <h1>Versus!</h1>
                  <Boxing />
                </div>
                <div className="brackets__content__second-item" onClick={() => this.handleClick('second')}>
                  {this.state.bracketArr[secondItemIndex] && this.state.bracketArr[secondItemIndex].component}
                </div>
              </div>
            :
              this.state.resultArr.length
                ?
                  <div className="brackets__winners">
                    <h1>Winners!</h1>
                    <div className="brackets__winners__icon">
                      <Winner />
                    </div>
                    <div className="brackets__winners__names">
                      {this.state.resultArr.map(item => (<p key={item.name}>{`- ${item.name}`}</p>))}
                    </div>
                  </div>
                :
                  null
        }
      </div>
    );
  }
}

export default Brackets;
