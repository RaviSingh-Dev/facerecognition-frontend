import React,{useState} from 'react';

const Register= ({onRouteChange,loadUser})=>{

	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	
   const onNameChange=(event)=>{
		setName(event.target.value);
	}

  const onEmailChange=(event)=>{
		setEmail(event.target.value);
	}

   const onPasswordChange=(event)=>{
		setPassword(event.target.value);
	}

	

const onSubmitSignIn=()=>{

	    fetch('https://frozen-woodland-42742.herokuapp.com/register', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        email: email,
	        password:password,
	        name:name
	      })
	    }).then(response=>response.json())
			 .then(user=>{
				if(user.id){
					loadUser(user)
				    onRouteChange('home');
				}
			    
	           })
		}

	

	return(

		<div className='reg' style={{'marginTop':'-22px'}}>
			<article className="mw6 center shadow-10 bg-transparent br3 pa3 pa4-ns mv3 ba b--black-10 " style={{'zIndex':'1','position':'relative'}}>
		        <main className="pa4 black-80 mt4" style={{'zIndex':'1'}}>
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0 sign">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
				        <input 
				          onChange={onNameChange} 
				          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" 
				          name="Name"  
				          id="Name"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				          onChange={onEmailChange} 
				          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="email" 
				          name="email-address"  
				          id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				          onChange={onPasswordChange} 
				          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="password"
				          name="password" 
				          id="password"/>
				      </div>
				    </fieldset>
				    <div>
				      <input onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
				      <p onClick={()=>onRouteChange('signin')} style={{zIndex:'10',position:'relative',marginTop:'10px',color:'black'}}className='b ph3 pv2 input-reset2 link dim  b--black bg-transparent pointer f6'>Sign In</p>
				    </div>
				  </div>
			    </main>

			</article>
			
		</div>	



		)
}
export default Register;