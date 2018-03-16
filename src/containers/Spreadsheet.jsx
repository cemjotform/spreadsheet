import React from 'react';
import PropTypes from 'prop-types';
import Table from '../components/Table';

const Spreadsheet = ({ data }) => (
  <Table data={data} />
);

Spreadsheet.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    type: PropTypes.string,
  }))),
};

Spreadsheet.defaultProps = {
  data: [[
    { value: 'Test', type: 'text' }
  ]],
};

export default Spreadsheet;

