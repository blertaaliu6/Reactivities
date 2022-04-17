import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header,Icon} from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <h2 className="ui header"><Icon className='users' /> <div className="content">Reactivities</div> </h2>
     
      <div role="list" className="ui list">
          {activities.map((activity: any) => (
            <div role="listitem" className="item" key= {activity.id}>
              {activity.title}

              </div>
          ))}
        </div>
            


        
    </div>
  );
}

export default App;