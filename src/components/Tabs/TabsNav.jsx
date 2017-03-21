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
          onClick: this.props.onTabsClick.bind(this, order)
        };
      }

      let ref = {};
      if (activeIndex === order) {
        ref.ref = 'activeTab';
      }

      return (
        <div
          role="tab"
          key={`tabsNav-${order}`}
          className={tabsNavClassName}
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order}
          {...events}
          {...ref}
        >
          {child.props.tabTitle}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="tabsNavList">
        {this.getTabs()}
      </div>
    );
  }
}