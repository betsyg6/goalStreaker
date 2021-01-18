//this is a component that will display a list of the user's goals (currently modeled after admin, because it will be sort of similar data fetching from firebase)

import React, { Component } from 'react';
import DisplayGoal from './DisplayGoal';
import { withFirebase } from '../../Firebase';
//material ui
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ListGoals extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			currentGoal: {},
			goals: [{ title: 'Cook', daysCompleted: 5, totalDays: 15 }],
		};
		this.currentGoalClick = this.currentGoalClick.bind(this);
	}

	componentDidMount() {
		this.setState({ loading: true });

		this.props.firebase.goals().on('value', (snapshot) => {
			//users are objects when retrieved from firebase, must restructure as an array so it's easier to display
			const goalsObject = snapshot.val();

			const goalsList = Object.keys(goalsObject).map((key) => ({
				...goalsObject[key],
			}));

			const myGoals = goalsList[0];

			const myList = Object.keys(myGoals).map((key) => {
				return {
					...myGoals[key],
					goalId: key,
				};
			});

			this.setState({
				goals: myList,
				loading: false,
			});
		});
	}

	componentWillUnmount() {
		this.props.firebase.goals().off();
	}

	currentGoalClick(id) {
		let currentGoal = this.state.goals.find((obj) => obj.goalId === id);
		this.setState({
			currentGoal,
		});
	}

	render() {
		const { goals, loading, currentGoal } = this.state;
		return (
			<div>
				<h1>All Goals</h1>
				{loading && <div>Loading...</div>}
				<GoalList
					goals={goals}
					currentGoalClick={this.currentGoalClick}
					currentGoal={currentGoal}
				/>
			</div>
		);
	}
}

const GoalList = ({ goals, currentGoalClick, currentGoal }) => (
	<>
		{goals.map((goal) => (
			<ListItem
				key={goal.goalId}
				button
				onClick={() => currentGoalClick(goal.goalId)}
			>
				<ListItemText
					primary={`Title: ${goal.title}, Completion: ${goal.daysCompleted}/${goal.totalDays}`}
				/>
			</ListItem>
		))}

		<DisplayGoal currentGoal={currentGoal} />
	</>
);

export default withFirebase(ListGoals);
