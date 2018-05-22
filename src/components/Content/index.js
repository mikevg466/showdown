import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Links from '../Links';
import Brackets from '../Brackets';
import HotOrNot from '../HotOrNot';
import Item from '../Item';
import { cuisineArr } from '../../constants';
import { generateImage } from '../../images/utils';

class Content extends Component{
  constructor(){
    super();

    this.state = {
      itemList: [],
    };
  }

  componentDidMount(){
    const promiseArr = cuisineArr.map(cuisine => generateImage(cuisine.image));
    Promise.all(promiseArr)
      .then(ImgComponentArr =>
        ImgComponentArr.map((ImgComponent, idx) => ({
          component: <Item image={<ImgComponent />} name={cuisineArr[idx].name} />,
          name: cuisineArr[idx].name

        }))
      )
      .then(itemList => this.setState({ itemList }))
      .catch(console.error.bind(console));
  }

  removeItem = (itemIdx, callback) => {
    const itemList = this.state.itemList.slice();
    itemList.splice(itemIdx, 1);
    this.setState({ itemList }, callback);
  }

  BracketsRoute = () => <Brackets items={this.state.itemList} removeItem={this.removeItem} />
  HotOrNotRoute = () => <HotOrNot items={this.state.itemList} />

  render(){
    console.log('ItemList ===> ', this.state.itemList);
    return (
      <div>
        <Route exact path="/" component={Links} />
        <Route path="/brackets" component={this.BracketsRoute} />
        <Route path="/hotornot" component={this.HotOrNotRoute} />
      </div>
    );
  }
}

export default Content;
