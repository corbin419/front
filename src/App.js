import './App.css';
import axios from "./axios.config";
import LineChrarts1 from "./Components/LineCharts1"
import LineChrarts2 from "./Components/LineCharts2"
import React,{useState,useEffect,Component} from "react";
import Chart from 'chart.js/auto';

var ctx_live = document.getElementById("myChart");
var liveChart = new Chart(ctx_live, {
  type: 'line',
  data: {
      labels: ["","","","","",],
      datasets: [{
          data: [0,0,0,0,0,],
          borderWidth: 1,
          borderColor:'#00c0ef',
          label: '溫度',
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
              }
          }]
      }
  }
});


function App() {

  function getdata(){

    axios
    .get("",{})
    .then((response) => { 
      console.log(response)
      for(let i=0;i<5;i++){
        liveChart.data.datasets[0].data[4-i] = response.data[i].Temperature
        liveChart.data.labels[4-i] = response.data[i].Time
      }
      liveChart.update()
    }) 
    .catch((error) => { 
      console.log(error)
    });

  } 

  setInterval(getdata,1000)
 
 
  return (
    <div className="App">
      <div className='container'>
        <div className='Charts1'>
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
        <div className='Charts2'>
          <canvas id="myChart2" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;


