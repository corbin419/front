import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import '../App.css'

export default class LineCharts2 extends Component {

	chartRef = React.createRef();
	componentDidMount() {
		const { data } =this.props;
		console.log(data);
		const ctx = this.chartRef.current.getContext("2d");
		
		var temperatureChart = new Chart(ctx,{
			type: "line",
			data: {
			  labels: ['','','','',''],
			  datasets: [{
				  label: "溫度",
				  backgroundColor: "rgb(255, 99, 132)",
				  borderColor: "rgb(255, 99, 132)",
				  data: [0,0,0,0,0],
			  }]
			},
			options: {
			  responsive: true,
			  plugins: {
				legend: {
				  position: "top",
				},
				title: {
				  display: true,
				  text: "溫度表",
				},
			  },
			},
		  })
	}
	render() {
		return (
			<div className='Charts'>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
	}
}