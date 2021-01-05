import React from'react';
import Tilt from 'react-tilt';
import Photo from'./brain.png';
import './Logo.css';

const Logo = ()=>{
	return (

       <div className='ma4' style ={{'zIndex':'1','position':'relative','margin-Top':'-200px'}}>
	      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
	        <div className="Tilt-inner pa3">
	          <img  alt = 'logo' src={Photo}/>
	        </div>
	      </Tilt>

       </div>

		);
}

export default Logo;