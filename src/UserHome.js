import react from "react"
import UserGoals from "./UserGoals"

class UserHome extends react.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <p>If the user is logged in, show this page!</p>
                <p>logged in user's goals:</p>
                <UserGoals />
            </div>
        )
    }
}

export default UserHome