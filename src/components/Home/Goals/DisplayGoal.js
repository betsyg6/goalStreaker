//this is a component that will display the chart/visual to demonstrate progress towards goal
//deploying practice

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DisplayGoal = ({ currentGoal }) => {
	const data = {
		labels: ['Goal Streak', 'Days Left in Streak'],
		datasets: [
			{
				label: 'Goal Streak',
				data: [currentGoal.daysCompleted, currentGoal.totalDays],
				backgroundColor: ['#B21F00', '#C9DE00'],
			},
		],
	};

	return (
		<div>
			<h1>Currently Viewing: {currentGoal.title}</h1>
			<Doughnut data={data} />
		</div>
	);
};

export default DisplayGoal;
