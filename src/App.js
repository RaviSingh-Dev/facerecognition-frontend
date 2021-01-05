import React,{useEffect,useState} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import FaceRecognitionForm from './components/FaceRecognitionForm/FaceRecognitionForm.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import {api} from './api.js';
import './App.css';

const particleOptions = {
                    particles:{
                      number:{
                        value:160,
                        density:{
                            enable:true,
                            value_area:800
                          }
                        }
                      },interactivity:{
                      events:{
                        onhover:{
                        enable:true,
                        mode:"repulse"
                          },
                      onclick:{
                        enable:true,
                        mode:"push"
                      },
                      resize:true
                    }
                  }
                 }

function App() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [box,setBox]= useState([]);
    const auth = window.localStorage.getItem('key');
    const [route,setRoute]=useState(auth?'home':'signin');
    const [isSignedIn,setisSignedIn]=useState(auth);
    const [user,setUser]=useState(auth?JSON.parse(auth):{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''});

    const loadUser=(data)=>{
      setUser({
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined:data.joined
      })
     window.localStorage.setItem('key',JSON.stringify(data));
     }
    
   
    useEffect(() => {
       api.get()
      .then(console.log)
      }, []);


     const calculateFaceLocation= (data)=>{
     console.log(data);
     const clarifaiFaces= data.outputs[0].data.regions.map(i=>i.region_info.bounding_box);
     const image = document.getElementById('inputimage');
     const width =Number(image.width);
     const height = Number(image.height);
      return clarifaiFaces.map(clarifaiFace=>({
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
       ))
  }

    const displayBox =(box)=>{
    setBox(box);
    }

     const onInputChange = (event) => {

        setInput(event.target.value);
         }

    const onButtonSubmit=()=>{

      setImageUrl(input);

      api.post('imageurl',{input})
      .then(response=>{
        if(response.data){
          api.put('image',{id:user.id})
          .then(response=>{
            setUser(prevState => ({...prevState, entries: response.data}))
          })
          .catch(console.log);
  }
      displayBox(calculateFaceLocation(response.data))
         }).catch(err=>console.log(err)); 
       }

    const onRouteChange=(route)=>{
      console.log(route);
      if(route === 'signout'){
        window.localStorage.removeItem('key');
        setisSignedIn(false);
        setImageUrl('');
        } else if(route === 'home'){
        setisSignedIn(true);
      }
      setRoute(route);
    } 

  return (
    <div className="App">
      <Particles className='particles' params={particleOptions}/>
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
       {route === 'home'
       ? <div>
            <Logo/>
            <Rank name={user.name} entries={user.entries}/>
            <ImageLinkForm onInputChange={onInputChange}  onButtonSubmit={onButtonSubmit}/>
            <FaceRecognitionForm box={box} imageUrl={imageUrl}/>
         </div>
       : (route === 'signin'
           ? <SignIn loadUser={loadUser} onRouteChange={onRouteChange}/>
           :(route === 'register' 
            ? <Register loadUser={loadUser}  onRouteChange={onRouteChange}/>
            :(route === 'signout'
              ?<SignIn loadUser={loadUser}  onRouteChange={onRouteChange}/>
              :<div>
                 <h1>error in loading.....</h1>
               </div>
              ) 
            )
         )
      }  
    </div>
  );
}

export default App;
