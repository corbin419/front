import './App.css';
import LineChrarts1 from './Components/LineCharts1';
import LineChrarts2 from './Components/LineCharts2';
import axios from "./axios.config";
import {useState} from "react";




function App() {
  const [data1,reset1] = useState([0,0,0,0,0]);
  const [data2,reset2] = useState([0,0,0,0,0]);
  
  function getdata(){
    axios
    .get("", {})
    .then((response) => {
      let d1=[0,0,0,0,0]
      let d2=[0,0,0,0,0]
      for(let i=4;i>=0;i--){
        d1[4-i]=response.data[i].Temperature
        console.log(123)
        d2[4-i]=response.data[i].Humidity
      }
      console.log(d1)
      reset1(d1)
      reset2(d2)
    })
    .catch((error) => {
    });
  }
  setInterval(getdata(),1000);
  getdata();
  return (
    <div className="App">
      <div className='container'>
      <div className='Charts1'>
        <LineChrarts1 data={data1}/>
      </div>
      <div className='Charts2'>
        <LineChrarts2 data={data2}/>
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

