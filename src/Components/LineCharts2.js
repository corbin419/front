import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import '../App.css'

export default class LineCharts2 extends Component {

	chartRef = React.createRef();
	componentDidMount() {
		const { data } =this.props;
		console.log(data);
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["1st", "2nd", "3rd", "4th", "5th"],
				datasets: [{ 
					data: data,
					label: "濕度",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
                    fill:false,
				}
				]
			},
		});
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