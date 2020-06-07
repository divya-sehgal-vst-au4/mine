import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const img1 = 'https://3.bp.blogspot.com/-SO3L3r-qHuY/VcczHsV2uHI/AAAAAAAAAZI/h-6sB9z3Feg/s1600/Untitled.jpg';
const ambulanceUrl = 'https://5.imimg.com/data5/JA/KE/YX/SELLER-8229651/force-traveller-3350-wb-ac-cardiac-ambulance-500x500.png';
const img3 = 'https://az777500.vo.msecnd.net/images/2397/group-8080214.png';
const Home = () => (
  <div className="Home">
    {/* <div className="container col-8 " /> */}
    <h1>Our Services</h1>
    <div className="row">
      <div className="col-8 ">
        <Link to="/homecare">
          <div className="row card shadow">

            <div className="col-4 ">
              <img className="service-image " width="100%" height="180px" src={img1} alt="" />
            </div>
            <div className="m-1  col-8">
              <h2>Homecare</h2>
              <p>
                We offer nursing, physiotherapy and
                healthy home food cooking services.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-8 ">
        <Link to="/concierge">

          <div className="row card shadow">
            <div className="col-4 ">
              <img className="service-image " width="100%" height="180px" src={ambulanceUrl} alt="" />
            </div>
            <div className="m-1  col-8">
              <h2>Concierge</h2>
              <p>
                We provide ambulance and hearse services within 20km  radius .
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-8 ">
        <Link to="/equipment">
          <div className="row card shadow">
            <div className="col-4 ">
              <img className="service-image " width="100%" height="180px" src={img3} alt="" />
            </div>
            <div className="m-1  col-8">
              <h2>Equipment</h2>
              <p>
                Now, Oxygen Cylinders, pacemakers and wheelchairs can be booked online.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
