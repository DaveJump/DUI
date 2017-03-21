import React, { Component, PropTypes } from 'react';
require('normalize.css');
require('styles/Tabs.scss');

import TabsNav from 'components/Tabs/TabsNav';
import TabsContent from 'components/Tabs/TabsContent';
import TabsPanel from 'components/Tabs/TabsPanel';

class Tabs extends Component {
  static defaultProps = {
    defaultActiveIndex: 0
  }
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleTabsClick = this.handleTabsClick.bind(this);
    //初始化activeIndex
    let activeIndex;
    if ('activeIndex' in this.props) {
      activeIndex = this.props.activeIndex;
    } else if ('defaultActiveIndex' in this.props) {
      activeIndex = this.props.defaultActiveIndex;
    }
    //初始化state
    this.state = {
      activeIndex,
      prevIndex: activeIndex
    }
  }
  componentWillReceiveProps(nextProp) {
    //如果props传入activeIndex,则直接更新
    if ('activeIndex' in nextProp) {
      this.setState({
        activeIndex: nextProp.activeIndex
      });
    }
  }
  handleTabsClick(activeIndex) {
    let prevIndex = this.state.activeIndex;
    //如果返回的activeIndex与当前的activeIndex不一致，且props中有defaultActiveIndex，则更新
    if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex
      }, () => {
        //更新完后执行props中的回调，暴露当前索引和上一次索引
        this.props.onChange && this.props.onChange({ activeIndex, prevIndex });
      });
    }
  }
  renderTabsNav() {
    const { children } = this.props;
    return (
      <TabsNav
        key="tabNavigation"
        activeIndex={this.state.activeIndex}
        onTabsClick={this.handleTabsClick}
        panels={children}
      />
    );
  }
  renderTabsContent() {
    const { children } = this.props;
    return (
      <TabsContent
        key="panelContainer"
        activeIndex={this.state.activeIndex}
        panels={children}
      />
    );
  }
  render() {
    return (
      <div className="DUI-tabs">
        {this.renderTabsNav()}
        {this.renderTabsContent()}
      </div>
    );
  }
}

export {
  Tabs,
  TabsPanel
}