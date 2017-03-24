import React, { Component, PropTypes } from 'react';

export default class TabsContent extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    classPrefix: PropTypes.string,
    panels: PropTypes.node
  };
  getTabsPanels() {
    const { activeIndex, panels, classPrefix } = this.props;

    return React.Children.map(panels, child => {
      if (typeof child == 'undefined') return;

      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        key: `tabsPanels-${order}`,
        classPrefix,
        isActive,
        children: child.props.children
      });
    });
  }
  render() {
    const { classPrefix } = this.props;
    return (
      <div className={`${classPrefix}-panelList`}>
        {this.getTabsPanels()}
      </div>
    );
  }
}