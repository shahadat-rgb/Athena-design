import React from 'react';
import './OurWork.css'
import group65 from "../../../Illustration/Group 65@2x.png"
import group66 from "../../../Illustration/Group 66@2x.png"
import group67 from "../../../Illustration/Group 67@2x.png"
import group68 from "../../../Illustration/Group 68@2x.png"
const OurWork = () => {
    return (
      <div className="work-background background">                                                                                                                                                                                                ">
            <div className='container text-center' style={{paddingBottom:'70px'}}>
            <h2 className='pt-5 pb-3'>What we do</h2>
            <p className='text-secondary'>Our main focus is to make the User Experience very</p>
            <p  className='text-secondary pb-4'>simple and easy. Simplicity is our Strength.</p>
          <div className="row p-4">
          <div className="col-md-3 work-radius">
              <img style={{height:'60px'}} src={group65} alt=""/>
              <h4 className='mt-3'>Experience Design</h4>
              <p className='mt-2'>The point of using Lorem Ipsum is that it has a more- <br/> orless normal</p>
              
          </div>
          <div className="col-md-3 work-radius">
          <img style={{height:'60px'}} src={group66} alt=""/>
          <h4 className='mt-3'>Interface Design</h4>
          <p className='mt-2'>The point of using Lorem Ipsum is that it has a more- <br/> orless normal</p>
          </div>
          <div className="col-md-3 work-radius">
          <img style={{height:'60px'}} src={group67} alt=""/>
          <h4 className='mt-3'>Prototyping</h4>
          <p className='mt-2'>The point of using Lorem Ipsum is that it has a more- <br/> orless normal</p>
          </div>
          <div className="col-md-3 work-radius">
          <img style={{height:'60px'}} src={group68} alt=""/>
          <h4 className='mt-3'> Illustration</h4>
          <p className='mt-2'>The point of using Lorem Ipsum is that it has a more- <br/> orless normal</p>
          </div>
          </div>
        </div>
      </div>
    );
};

export default OurWork;