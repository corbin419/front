import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import '../App.css'

export default class LineCharts1 extends Component {

	chartRef = React.createRef();
	componentDidMount() {
		console.log(this.props);
		const { data } =this.props;
		// const data1 = this.props.data;
		console.log(data);
		const ctx = this.chartRef.current.getContext("2d");
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["1st", "2nd", "3rd", "4th", "5th",],
				datasets: [{ 
					data: this.props.data1	,
					label: "溫度",
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