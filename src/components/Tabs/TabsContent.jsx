import React, { Component, PropTypes } from 'react';

export default class TabsContent extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    panels: PropTypes.node
  };
  getTabsPanels() {
    const { activeIndex, panels } = this.props;

    return React.Children.map(panels, child => {
      if (typeof child == 'undefined') return;

      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        key: `tabsPanels-${order}`,
        isActive,
        children: child.props.children
      });
    });
  }
  render() {
    return (
      <div className="tabsPanels">
        {this.getTabsPanels()}
      </div>
    );
  }
}