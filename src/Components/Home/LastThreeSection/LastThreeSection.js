import React from 'react';
import Achievements from '../Achievements/Achievements';
import DedicatedTeam from '../DedicatedTeam/DedicatedTeam';
import Footer from '../Footer/Footer';


const LastThreeSection = () => {
    return (  
        <div className='work-background'>
            <Achievements></Achievements>
            <DedicatedTeam></DedicatedTeam>
            <Footer></Footer>
        </div>
        
    );
};

export default LastThreeSection;