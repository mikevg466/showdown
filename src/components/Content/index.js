import React, { Component } from 'react';
import Brackets from '../Brackets';
import HotOrNot from '../HotOrNot';
import Item from '../Item';
import { cuisineArr } from '../../constants';
import { generateImage } from '../../images/utils';

const modes = {
  BRACKETS: 'BRACKETS',
  HOTORNOT: 'HOTORNOT',
};

class Content extends Component{
  constructor(){
    super();

    this.state = {
      mode: '',
      itemList: [],
    };
    this.changeMode = this.changeMode.bind(this);
  }

  componentDidMount(){
    const promiseArr = cuisineArr.map(cuisine => generateImage(cuisine.image));
    Promise.all(promiseArr)
      .then(ImgComponentArr =>
        ImgComponentArr.map((ImgComponent, idx) => (
          <Item image={<ImgComponent />} name={cuisineArr[idx].name} />
        ))
      )
      .then(itemList => this.setState({ itemList }))
      .catch(console.error.bind(console));
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
