import React, { Component } from 'react';
require('normalize.css');
require('styles/Tabs.scss');

export default class Tabs extends Component {
  static defaultProps = {
    classPrefix: 'tabs'
  };
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Welcome to the world of React</h1>
      </div>
    );
  }
}