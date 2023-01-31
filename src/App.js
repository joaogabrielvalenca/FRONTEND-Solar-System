import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
// import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title />
        <SolarSystem />
        <Missions />
        {/* <Title headline="planetas" /> */}
        <PlanetCard
          planetName="Earth"
          planetImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIafnJOJoWEWE4CZuzrcfW0wAYVKNTH3j6EKv0YjbVQ&s"
        />
      </>
    );
  }
}

export default App;
