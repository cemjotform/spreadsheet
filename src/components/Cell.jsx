import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({
  type,
  value,
}) => (
  <td>
    {`${value}|${type}`}
  </td>
);

Cell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
};

Cell.defaultProps = {
  value: '',
  type: 'text',
};

export default Cell;
