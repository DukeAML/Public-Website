import React from 'react';
import DukeSymbol from '../logo.png';
import DukeSymbol2 from '../logo2.png';
import SearchBar from './SearchBar';
import MenuItem from './MenuItem';


class NavigationBar extends React.Component{
  state={menuItems: [
    'active item',
    'item',
    'item',
    'item',
    'item'],
    selectedMenuIndex: 0
  }

  onMenuSelect = (index) => {
    this.setState({ menuItems: [
      'item',
      'item',
      'item',
      'item',
      'item'
    ]});
    // this.setState({ menuItems[index]: 'active item'});
  }

  render(){
    return (
      <div class="ui secondary pointing menu">
        <MenuItem text='Home' status={this.state.menuItems[0]} />
        <MenuItem text='People' status={this.state.menuItems[1]} />
        <MenuItem text='Research' status={this.state.menuItems[2]} />
        <MenuItem text='News' status={this.state.menuItems[3]} />
        <MenuItem text='About' status={this.state.menuItems[4]} />
        <div class="right menu">
          <label class="ui item">
            Search
          </label>
          <div class="ui search">
            <div class="ui icon input">
              <input class="prompt" type="text" placeholder="Articles..." />
              <i class="search icon"></i>
            </div>
            <div class="results"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;