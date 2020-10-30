import React from 'react';
import Profile from './Profile'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }

  addProfile = (event) => {
    event.preventDefault();
    let newProfile = event.target.name.value;
    let currentProfiles = this.state.profiles;
    currentProfiles.push(newProfile);
    console.log(newProfile, currentProfiles);
    this.setState({
      profiles: currentProfiles
    })

  }
  
  render(){
    return (
      <div>
          {/* Display the full list of Profiles */}
        {/* Add a form to add a new profile to the list  */}
        <Profile addProfile={this.addProfile} /> {
          this.state.profiles.map((profile) => {
            return (
              <h1 key={profile.id} firstName ={profile.firstName} lastName ={profile.lastName}>
                {profile}
              </h1>
            )
          })
        }
      </div>
    );
  }
}

export default App;
