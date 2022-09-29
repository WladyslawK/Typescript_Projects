import React, {useState} from "react";

export default {
    title: "React Memo DEMO"
}

const NewMessagesCounter = (props: any) => {
    return (
        <>
            <div>{props.count}</div>
            <button onClick={props.changeCounter}>+</button>
        </>
    )
}

const UsersOptimized = (props: { users: Array<{ id: number, title: string }> }) => {
    console.log("USERS")
    return (
        <div>{props.users.map(user => <div key={user.id}>{user.title}</div>)}</div>
    )
}

const Users = React.memo(UsersOptimized)


export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([{ id: 1, title: "Andrew"}, {id: 2, title: "James"}, {id: 3, title: "Bob"}, {id: 4, title: "George"}])

    const changeCounter = () => setCounter(counter + 1)

    return (
        <>
            <NewMessagesCounter count={counter} changeCounter={changeCounter}/>
            <Users users={users}/>
        </>
    )
}