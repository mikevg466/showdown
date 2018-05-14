import React, { Component } from 'react';
import Brackets from '../Brackets';
import HotOrNot from '../HotOrNot';
import Item from '../Item';
import { AmericanChinese } from '../../images';

const modes = {
  BRACKETS: 'BRACKETS',
  HOTORNOT: 'HOTORNOT',
};

class Content extends Component{
  constructor(){
    super();

    this.state = {
      mode: '',
      itemList: [
        <Item image={<AmericanChinese />} name="American Chinese" />,
      ],
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode){
    this.setState({ mode });
  }

  render(){
    return (
      <div>
        <button onClick={() => this.changeMode(modes.BRACKETS)} >Brackets</button>
        <button onClick={() => this.changeMode(modes.HOTORNOT)} >HotOrNot</button>
        {
          this.state.mode === modes.BRACKETS
            ? <Brackets items={this.state.itemList} />
            : this.state.mode === modes.HOTORNOT
              ? <HotOrNot />
              : null
        }
      </div>
    );
  }
}

export default Content;
