import 'views/HomeView/HomeView.scss';
import React from 'react';
import RadarComp from 'components/RadarComp/RadarComp.jsx';
import data from './data.js';

function HomeView() {
  return (
    <div className="radars">
      {data.map(d => (
        <RadarComp key={d.sets[0].label} name={d.sets[0].label} data={d} />
      ))}
    </div>
  );
}

export default HomeView;
