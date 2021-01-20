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
				data: [
					currentGoal.daysCompleted,
					currentGoal.totalDays - currentGoal.daysCompleted,
				],
				backgroundColor: ['#f5b942', '#f542bf'],
			},
		],
	};

	return (
		<div>
			{currentGoal.title ? (
				<>
					<h1>Currently Viewing: {currentGoal.title}</h1>
					<Doughnut data={data} />
				</>
			) : (
				<h1>Select a Goal or Add a Goal!</h1>
			)}
		</div>
	);
};

export default DisplayGoal;
