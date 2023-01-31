import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

class SolarSystem extends React.Component {
  render() {
    const planetReturn = planets.map((planet) => {
      const planetDetail = { name: planet.name, image: planet.image };
      console.log(planetDetail.image, planetDetail.name);
      return (
        <li key={ planetDetail.name }>
          {planetDetail.name}
        </li>
      );
    });
    return (
      <div data-testid="solar-system">
        <Title
          headline="Planetas"
        />
        <PlanetCard
          planetName={ planetReturn[0] }
          planetImage={ MercurioImg }
        />
        <PlanetCard
          planetName={ planetReturn[1] }
          planetImage={ VenusImg }
        />
        <PlanetCard
          planetName={ planetReturn[2] }
          planetImage={ TerraImg }
        />
        <PlanetCard
          planetName={ planetReturn[3] }
          planetImage={ MarteImg }
        />
        <PlanetCard
          planetName={ planetReturn[4] }
          planetImage={ JupiterImg }
        />
        <PlanetCard
          planetName={ planetReturn[5] }
          planetImage={ SaturnoImg }
        />
        <PlanetCard
          planetName={ planetReturn[6] }
          planetImage={ Uranoimg }
        />
        <PlanetCard
          planetName={ planetReturn[7] }
          planetImage={ Netunoimg }
        />
      </div>
    );
  }
}

export default SolarSystem;
