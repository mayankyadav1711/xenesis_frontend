import React from 'react';
import { Link } from 'react-router-dom';
import './SolarSystem.scss'; // Import the corresponding CSS file

const SolarSystem = () => {
  return (
    <div className="solar-syst">
      <div className="sun"></div>
      <div className="mercury"></div>
      <div className="venus"></div>
      <div className="earth"></div>
      <div className="mars"></div>
      <div className="jupiter"></div>
      <div className="saturn"></div>
      <div className="uranus"></div>
      <div className="neptune"></div>
      <div className="pluto"></div>
      <div className="asteroids-belt"></div>
    </div>
  );
};

export default SolarSystem;
