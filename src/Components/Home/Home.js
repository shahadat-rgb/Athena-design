import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import LastThreeSection from './LastThreeSection/LastThreeSection';
import OurWork from './OurWork/OurWork';
import RunningProjects from './RunningProjects/RunningProjects';


const Home = () => {
    return (
     <div>
      <HeaderMain></HeaderMain>
      <OurWork></OurWork>
      <RunningProjects></RunningProjects>
      <LastThreeSection></LastThreeSection>
    </div>
    );
};

export default Home;