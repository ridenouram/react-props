import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  buttonStyle = {
    backgroundColor: this.props.color,
    width: '75px',
    height: '75px',
    margin: '10px'
  };

  clickHandler = event => {
    console.log(this.props.color);
  }

  render() {
    return (
      <button type="button" style={this.buttonStyle} onClick={this.clickHandler}>{this.props.color}</button>
    );
  }
}
