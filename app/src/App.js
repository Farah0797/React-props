
import './App.css';
import { profilePicture, fullName, bio, work } from './data';
import Name from './Profile/Component/FullName';
import Photo from './Profile/Component/ProfilePicture';
import Bioagraphie from './Profile/Component/Bio';
import Profession from './Profile/Component/Profession';
import ButtonCard from './Profile/Component/Button';



function App() {
  const handleName=(name)=>
  {
   alert(name)
  }

  return (

    <body>
    <div className='App'>


      <div className='div1'>
        <br />

<div className='d-flex'>

        <div className='image'>
        <Photo profilePicture={profilePicture} style={{width:'155'}} />
        </div>

        <div className='info'>

          <div className='div3'>
        <Name fullName={fullName} />
      
      <br />
      
      
        <br/><br />
      <Bioagraphie bio={bio} />

      </div>

      <br /> <br />
      <Profession work={work} />
      <br></br>

      <div className='div2'>
      <div class="column"> <span class="followers" style={{color:'purple'}}>Followers</span> <span class="number2">980</span> </div>
      <div class="column"> <span class="rating" style={{color:'purple'}}>Rating</span> <span class="number3">8.9</span> </div>
      </div>


      <br />


      <div className='b'>
      <ButtonCard handleName={handleName} fullName={fullName}/>
      </div>


      </div>

      </div>




      </div>
      <br />


</div>


    </body>
   
  );
}

export default App;
