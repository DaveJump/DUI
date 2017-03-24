import React, { Component, PropTypes } from 'react';

export default class TabsPanel extends Component {
  static propTypes = {
    tabTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    classPrefix: PropTypes.string,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool
  };
  render() {
    const { isActive, children, classPrefix } = this.props;
    let className = `${classPrefix}-panelUnit${isActive ? ' isActive' : ''}`;
    return (
      <div
        role="tabsPanel"
        className={className}
        aria-hidden={!isActive}
      >
        {children}
      </div>
    );
  }
}