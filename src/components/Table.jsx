import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Table = ({ data }) => (
  <table>
    {data.map(rowData => <Row data={rowData} />)}
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    type: PropTypes.string,
  }))),
};

Table.defaultProps = {
  data: [],
};

export default Table;
