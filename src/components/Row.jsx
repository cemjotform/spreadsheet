import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = ({ data }) => (
  <tr>
    {data.map(cellData => <Cell {...cellData} />)}
  </tr>
);

Row.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    type: PropTypes.string,
  })),
};

Row.defaultProps = {
  data: [],
};

export default Row;