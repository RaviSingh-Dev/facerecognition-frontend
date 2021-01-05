import React from 'react';


const Rank=({name,entries})=>{

	return(
		 <div style={{'marginTop':'60px'}}>

	      <div className='white f3'>
	        {`${name}, your insertion count is ...`}
	      </div>
	      <div className='white f1'>
	       {entries}
	      </div>

	     </div>



		);
}
export default Rank;