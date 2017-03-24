import React, { Component, PropTypes } from 'react';
import 'normalize.css';
import { classPrefix } from 'styles/Tabs.scss';

import TabsNav from './TabsNav';
import TabsContent from './TabsContent';
import TabsPanel from './TabsPanel';

class Tabs extends Component {
  static defaultProps = {
    defaultActiveIndex: 0,
    classPrefix
  }
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    classPrefix: PropTypes.string,
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
    const { children, classPrefix } = this.props;
    return (
      <TabsNav
        key="tabNavigation"
        classPrefix={classPrefix}
        activeIndex={this.state.activeIndex}
        onTabsClick={this.handleTabsClick}
        panels={children}
      />
    );
  }
  renderTabsContent() {
    const { children, classPrefix } = this.props;
    return (
      <TabsContent
        key="panelContainer"
        classPrefix={classPrefix}
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