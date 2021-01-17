//this is a component that will display a list of the user's goals (currently modeled after admin, because it will be sort of similar data fetching from firebase)

import React, { Component } from 'react';

import { withFirebase } from '../../Firebase';

class ListGoals extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			goals: [{ title: 'Cook', daysCompleted: 5, totalDays: 15 }],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });

		// this.props.firebase.goals().on('value', (snapshot) => {
		// 	//users are objects when retrieved from firebase, must restructure as an array so it's easier to display
		// 	const goalsObject = snapshot.val();
		// 	const goalsList = Object.keys(goalsObject).map((key) => ({
		// 		...goalsObject[key],
		// 		uid: key,
		// 	}));

		// 	this.setState({
		// 		goals: goalsList,
		// 		loading: false,
		// 	});
		// });
	}

	componentWillUnmount() {
		this.props.firebase.goals().off();
	}

	render() {
		const { goals, loading } = this.state;
		return (
			<div>
				<h1>View All Goals</h1>
				{loading && <div>Loading...</div>}
				<GoalList goals={goals} />
			</div>
		);
	}
}

const GoalList = ({ goals }) => (
	<ul>
		{goals.map((goal) => (
			<li key={goals.indexOf(goal)}>
				<span>
					<strong>Title:</strong> {goal.title}
				</span>
				<span>
					<strong>Completion:</strong> {goal.daysCompleted}/{goal.totalDays}
				</span>
			</li>
		))}
	</ul>
);

export default withFirebase(ListGoals);
