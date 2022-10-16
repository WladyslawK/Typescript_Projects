import {UseMemo} from "./UseMemo";
import React, {ChangeEvent, memo, useCallback, useMemo, useState} from "react";

export default {
    title: "Use Callback",

}


const NewMessagesCounter = memo((props: any) => {
    console.log("Counter")
    return (
        <>
            <div>{props.count}</div>
            <button onClick={props.changeCounter}>+</button>
        </>
    )
})

const Users = memo((props: { users: Array<{ id: number, title: string }> }) => {
    console.log("USERS")
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>{user.title}</div>)
            }
        </div>
    )
})


export const UseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([{ id: 1, title: "Andrew"}, {id: 2, title: "James"}, {id: 3, title: "Bob"}, {id: 4, title: "George"}])

    const changeCounter = useCallback( () => setCounter(counter + 1), [counter])

    const addUserHandler = () => setUsers([...users, {id: Number(new Date()), title: "Sir"}])

    const sortedUsers = useMemo(()=>{
        return users.filter(user => user.title.indexOf('a') > -1)
    }, [users])


    return (
        <>
            <NewMessagesCounter count={counter} changeCounter={changeCounter}/>
            <button onClick={addUserHandler}>addUser</button>
            <Users users={sortedUsers}/>
        </>
    )
}