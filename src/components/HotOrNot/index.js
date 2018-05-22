import React, { Component } from 'react';
import WinnerList from '../WinnerList';
import { shuffle } from '../../utils';
import { Dislike, Like } from '../Icons';
import './HotOrNot.css';

const clickType = {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE',
};

class HotOrNot extends Component{
  constructor(){
    super();

    this.state = {
      bracketArr: [],
      resultArr: [],
    };
  }

  componentDidMount(){
    this.setState({
      bracketArr: shuffle(this.props.items),
    })
  }

  handleClick = type => {
    const bracketArr = this.state.bracketArr.slice();
    const resultArr = this.state.resultArr.slice();
    const curItem = bracketArr.pop();
    if(type === clickType.LIKE){
      resultArr.push(curItem);
    }
    this.setState({
      bracketArr,
      resultArr,
    });
  }

  render(){
    const { bracketArr, resultArr } = this.state;
    return (
      <div className="hot-or-not">
        {
          bracketArr.length
            ?
              <div className="hot-or-not__content">
                <div className="hot-or-not__item">
                  { bracketArr.length && bracketArr[bracketArr.length - 1].component }
                </div>
                <div className="hot-or-not__divider">
                </div>
                <div className="hot-or-not__click-types">
                  <div
                    className="click-type__like"
                    onClick={() => this.handleClick(clickType.LIKE)}
                  >
                    <Like />
                  </div>
                  <div
                    className="click-type__dislike"
                    onClick={() => this.handleClick(clickType.DISLIKE)}
                  >
                    <Dislike />
                  </div>
                </div>
              </div>
            :
              resultArr.length
                ?
                  <WinnerList items={resultArr} />
                :
                  null
        }
      </div>
    );
  }
}

export default HotOrNot;
