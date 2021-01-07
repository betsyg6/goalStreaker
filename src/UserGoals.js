import react from "react"
import SingleGoal from "./SingleGoal"
import AddGoal from "./AddGoal"

class UserGoals extends react.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <p>UserGoals. This will be attached to the User's home page!</p>
                <p>When you click a goal, you can view the single goal component</p>
                <SingleGoal />
                <p>Add goal here:</p>
                <AddGoal />
            </div>
        )
    }
}

export default UserGoals