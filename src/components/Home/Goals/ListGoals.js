//this is a component that will display a list of the user's goals (currently modeled after admin, because it will be sort of similar data fetching from firebase)

import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class ListGoals extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			goals: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });

		this.props.firebase.goals().on('value', (snapshot) => {
			//users are objects when retrieved from firebase, must restructure as an array so it's easier to display
			const goalsObject = snapshot.val();
			const goalsList = Object.keys(goalsObject).map((key) => ({
				...goalsObject[key],
				uid: key,
			}));

			this.setState({
				goals: goalsList,
				loading: false,
			});
		});
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
			<li key={goal.uid}>
				<span>
					<strong>Title:</strong> {goal.title}
				</span>
				<span>
					<strong>Days Completed:</strong> {goal.daysCompleted}
				</span>
				<span>
					<strong>Total Days:</strong> {goal.totalDays}
				</span>
			</li>
		))}
	</ul>
);

export default withFirebase(ListGoals);
