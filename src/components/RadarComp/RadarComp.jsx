import React from 'react';
import PropTypes from 'prop-types';
import Radar from 'react-d3-radar';

function RadarComp({ data, name }) {
  return (
    <div className="radar">
      <Radar
        width={400}
        height={400}
        padding={80}
        domainMax={4}
        highlighted={null}
        style={{ fill: '#ff0000' }}
        data={data}
      />
      <h2>{name}</h2>
    </div>
  );
}

RadarComp.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string
};

RadarComp.defaultProps = {
  data: {},
  name: ''
};

export default RadarComp;
