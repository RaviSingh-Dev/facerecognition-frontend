import React,{useState} from 'react';

const SignIn = ({onRouteChange,loadUser})=>{
	const [signInEmail, setsignInEmail] = useState('');
	const [signInPassword, setsignInPassword] = useState('');

	const onEmailChange=(event)=>{
		setsignInEmail(event.target.value);
	}
  const onPasswordChange=(event)=>{
		setsignInPassword(event.target.value);
	}

  const onSubmitSignIn=()=>{
		fetch('https://frozen-woodland-42742.herokuapp.com/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
		    email:signInEmail,
		    password:signInPassword
			})
		})
		 .then(response => response.json())
         .then(user => {
           if (user.id) {
	         loadUser(user)
	         onRouteChange('home');
        }
      })
         console.log(signInEmail)
  }
	

	return(

	<div className='sign' style={{'marginTop':'-22px'}}>
		<article className=" mw6 center shadow-10 bg-transparent br3 pa3 pa4-ns mv3 ba b--black-10 " style={{position:"relative", 'zIndex':'1'}}>
	        <main className="pa4 black-80 mt4" style={{'zIndex':'1'}}>
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0 sign">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			          onChange={onEmailChange} 
			          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			          onChange={onPasswordChange} 
			          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={()=>onRouteChange('register')}  className="f6 link dim black db pointer">Register</p>
			    </div>
			  </div>
			</main>

		</article>
	</div>	


		);
}

export default SignIn;