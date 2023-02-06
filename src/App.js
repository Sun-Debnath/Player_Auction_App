
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import playerData from './fakedata/MOCK_DATA.json'
import Header from './components/Header/Header';
import Auction from './components/Auction/Auction';


function App() {
  // const [plData, setPlData] = useState([]);

  // useEffect( () => {
  //       setPlData(playerData);
  //       console.log(plData);
  //       }, [])


  return (
    <div>
       <Header></Header>
       <Auction></Auction>
       {/* <Auction></Auction> */}
      {/* <h1>{plData.length}</h1>
      <ul>
      {
        
        plData.map(data=>{
          return(
            <div>
              <p>{data.first_name} { data.last_name}</p>
            <img src={data.img} alt="" />
            
            </div> 
          )
        })
      }
      
      </ul> */}
     
    </div>
      
  );
}

export default App;
