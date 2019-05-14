import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {

  const divStyle = {
    backgroundColor: hex,
  };

  return (
    <dl style={divStyle}>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>red: {rgb.red}</dd>
      <dd>green: {rgb.green}</dd>
      <dd>blue: {rgb.blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.object.isRequired
};

export default Color;

