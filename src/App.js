import './App.css';
import axios from "./axios.config";
import LineChrarts1 from "./Components/LineCharts1"
import React from "react";
import ReactDOM from "react-dom";




function App() {
  let d1=new Array()
  let d2=new Array()
  function getdata(){

    axios
    .get("")
    .then((response) => {

      for(let i=4;i>=0;i--){
        d1[i]=response.data[4-i].Temperature
        d2[i]=response.data[4-i].humidity
      }
    })
    .catch((error) => {
      console.log(error)
    });
    console.log(d1)
    
    const element=(
      <div className="App">
        <div className='container'>
          <div className='Charts1'>
            <LineChrarts1 data={d1} label="溫度"/>
          </div>
          <div className='Charts2'>
            <LineChrarts1 data={d2} label="濕度"/>
          </div>
        </div>
      {/* <div className='Text'>
        <p>溫度：</p>
        <p>濕度：</p>
      </div> */}
    </div>
      )
    ReactDOM.hydrate(element,document.getElementById('root'));
  }
  setInterval(getdata,1000)
  window.onload=getdata();

  return (
    <div className="App">
      <div className='container'>
      <div className='Charts1'>
        <LineChrarts1 data={d1} label="溫度"/>
      </div>
      <div className='Charts2'>
        <LineChrarts1 data={d2} label="濕度"/>
      </div>
      </div>
      {/* <div className='Text'>
        <p>溫度：</p>
        <p>濕度：</p>
      </div> */}
    </div>
  );
}

export default App;


