import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className="home">
            <Link to="/table"><button className="btn btn-info">Book your table</button></Link>
        </div>
    )
}


export default Home;