//this is a component that will display the chart/visual to demonstrate progress towards goal

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: ['Goal Streak', 'Days Left in Streak'],
	datasets: [
		{
			label: 'Goal Streak',
			data: [10, 20],
			backgroundColor: ['#B21F00', '#C9DE00'],
		},
	],
};

const DisplayGoal = () => {
	return (
		<div>
			<p>Current Goal</p>
			<Doughnut data={data} />
		</div>
	);
};

export default DisplayGoal;
