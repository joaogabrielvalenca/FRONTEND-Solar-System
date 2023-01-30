import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetReturn = planets.map((planet) => {
      const planetDetail = { name: planet.name, image: planet.image };
      return (
        <>
          <p>planetDetail.name</p>
          <img src={ planetDetail.image } alt={ `Planeta ${planetDetail.name}` } />
        </>
      );
    });
    console.log(planetReturn);
    return (
      <>
        <Title />
        <PlanetCard
          planetName={ planetReturn.name }
          planetImage={ planetReturn.image }
        />
      </>
    );
  }
}

export default SolarSystem;
