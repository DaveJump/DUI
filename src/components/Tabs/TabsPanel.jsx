import React, { Component, PropTypes } from 'react';

export default class TabsPanel extends Component {
  static propTypes = {
    tabTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool
  };
  render() {
    const { isActive, children } = this.props;
    let className = `tabsPanelUnit${isActive ? ' panelIsActive' : ''}`;
    return (
      <div
        role="tabPanel"
        className={className}
        aria-hidden={!isActive}
      >
        {children}
      </div>
    );
  }
}