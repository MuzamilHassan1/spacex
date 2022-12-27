import './App.css';
import { useState ,useEffect } from 'react';
import Button from '@mui/material/Button';

const QUERY = `{
  launches(limit: 100) {
    mission_name
  }
}`

function App() {
  const [spaceData, setSpaceData] = useState([]);

  useEffect(()=>{
    fetch('https://api.spacex.land/graphql/',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY})
    }).then(resp => resp.json())
    .then(data => setSpaceData(data.data.launches))
  },[]);

  return (
    <div className="App">
      Hello World
      {spaceData.map((d) => <li key={d.mission_name.toString()}>{d.mission_name}</li>)}
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
