import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, TabsPanel } from './DUI/Tabs';

require('./style.scss');

const changeCallback = ({ activeIndex, prevIndex }) => {
  console.log(activeIndex, prevIndex);
}

const MyTabs = () => (
  <div>
    <Tabs onChange={changeCallback}>
      <TabsPanel order="0" tabTitle="BOOKS">Reading "books" makes me happy!</TabsPanel>
      <TabsPanel order="1" tabTitle="MOVIES">Watching "movies" makes me funny!</TabsPanel>
      <TabsPanel order="2" tabTitle="MUSICS">Listening "musics" I will not feel bad!</TabsPanel>
    </Tabs>
  </div>
);

// Render the main component into the dom
ReactDOM.render(<MyTabs />, document.getElementById('app'));
