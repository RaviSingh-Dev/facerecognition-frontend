import React from 'react';
import './FaceRecognitionForm.css';

const FaceRecognitionForm =({imageUrl,box=[]})=>{
	console.log(box);

	return(
        <div style={{'marginTop':'-18px'}} className='center'>
          <div className="absolute faceform mt6">
		       <img id ='inputimage' alt ='' src={imageUrl} width='500px' height='auto' />
		       {box.map(b=><div className='bounding-box' style={{top:b.topRow,right:b.rightCol,left:b.leftCol,bottom:b.bottomRow}}></div>)}
		       
	      </div> 
        </div>
        );
}
export default FaceRecognitionForm;