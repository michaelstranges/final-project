import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

class WalkProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Spadina",
      description: "an OK walk",
      walk_time: 4
    }
  }

  componentDidMount(){
    axios.get('https://walkish.localtunnel.me/routes/api/all')
      .then(function(response){
        console.log(response.data)
    })
  }

  render() {
    return (
      <div>
          <aside className = "profile-sidebar">
              <div>
                This is the Walk Profile Page
             </div>
          </aside>
      </div>
    );
  }
}

export default WalkProfilePage;
