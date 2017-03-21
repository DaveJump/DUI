import React, { Component, PropTypes } from 'react';

export default class TabsNav extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    panels: PropTypes.node
  };
  getTabs() {
    const { panels, activeIndex } = this.props;

    return React.Children.map(panels, child => {
      if (typeof child == 'undefined') return;

      const order = parseInt(child.props.order, 10);

      let tabsNavClassName = `tabsNavUnit${activeIndex === order ? ' tabIsActive' : ''}`;

      let events = {};
      if (!child.props.disabled) {
        events = {
          onClick: this.props.onTabsClick(order)
        };
      }

      let ref = {};
      if (activeIndex === order) {
        ref.ref = 'activeTab';
      }

      return (
        <li
          role="tab"
          key={`tabsNav-${order}`}
          className={tabsNavClassName}
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order}
          {...events}
          {...ref}
        >
          {child.props.tabTitle}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="tabsNavList">
        <ul>{this.getTabs()}</ul>
      </div>
    );
  }
}