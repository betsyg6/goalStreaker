import React, { Component } from 'react';
import DisplayGoal from './DisplayGoal';
import { withFirebase } from '../../Firebase';
//material ui
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AuthUserContext } from '../../Session';

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
			const goalsObject = snapshot.val();

			const goalsList = Object.keys(goalsObject).map((key) => ({
				...goalsObject[key],
				uid: key,
			}));

			let userId = this.props.firebase.auth.currentUser.uid;

			let myObj = goalsList.find((obj) => obj.uid === userId);
			const myList = Object.keys(myObj).map((key) => {
				return {
					...myObj[key],
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
		console.log(goals);
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
		{goals.map((goal) => {
			if (goal.title) {
				return (
					<ListItem
						key={goals.indexOf(goal)}
						button
						onClick={() => currentGoalClick(goal.goalId)}
					>
						<ListItemText
							primary={`Title: ${goal.title}, Completion: ${goal.daysCompleted}/${goal.totalDays}`}
						/>
					</ListItem>
				);
			}
		})}

		<DisplayGoal currentGoal={currentGoal} />
	</>
);

export default withFirebase(ListGoals);
