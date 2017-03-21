import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, TabsPanel } from './DUI/Tabs';

{/*<Tabs defaultActiveIndex="0" onChange={()=>{}}>
  <TabPanel order="0" tabTitle="11">Lorem ipsum dolor sit amet11111</TabPanel>
  <TabPanel order="1" tabTitle="22">Lorem ipsum dolor sit amet22222</TabPanel>
  <TabPanel order="2" tabTitle="33">Lorem ipsum dolor sit amet33333</TabPanel>
</Tabs>*/}

const MyTabs = () => (
  <div>
    <Tabs>
      <TabsPanel order="0" tabTitle="11">Lorem ipsum dolor sit amet11111</TabsPanel>
      <TabsPanel order="1" tabTitle="22">Lorem ipsum dolor sit amet22222</TabsPanel>
      <TabsPanel order="2" tabTitle="33">Lorem ipsum dolor sit amet33333</TabsPanel>
    </Tabs>
  </div>
);

// Render the main component into the dom
ReactDOM.render(<MyTabs />, document.getElementById('app'));
