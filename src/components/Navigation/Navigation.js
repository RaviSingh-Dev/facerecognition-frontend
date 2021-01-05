import React from 'react';
import '../Logo/Logo.css';
import Tilt from 'react-tilt';
import Photo from'./facerecognition.jpg';




const Navigation = ({onRouteChange,isSignedIn})=>{

		if(isSignedIn){
			return(
			<nav style={{'display':'flex','justifyContent':'flex-end' }}>
			  <p onClick={()=> onRouteChange('signout')} style={{'zIndex':'1','position':'relative'}} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
			)
			} else {
				return(
					<div className='ma4' style ={{'zIndex':'1','position':'relative'}}>
				      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150}} >
				        <div className="Tilt-inner pa3">
				          <img alt='logo' src={Photo}/>
				        </div>
				      </Tilt>

                    </div>
	
				)
				    
		    }

}

export default Navigation;