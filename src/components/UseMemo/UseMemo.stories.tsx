import {UseMemo} from "./UseMemo";
import React, {ChangeEvent, memo, useMemo, useState} from "react";

export default {
    title: "Use Memo",

}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(5)

    const changeAHandler = (e: ChangeEvent<HTMLInputElement>) => setA(+e.currentTarget.value)
    const changeBHandler = (e: ChangeEvent<HTMLInputElement>) => setB(Number(e.currentTarget.value))

    let resultA = useMemo(()=> {
        let tempResultA = 1
        for(let i = 1; i <= a; i++){
            let fakeValue = 10000000
            for(let j = 0; j < fakeValue; j++){
                let fake = 0
                fake = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    let resultB = 1




    for(let i = 1; i <= b; i++){
        resultB *= i
    }

    return (
        <div>
            <label htmlFor="">A: </label><input onChange={changeAHandler} type="number" value={a.toString()}/>
            <label htmlFor="">B: </label><input onChange={changeBHandler} type="number" value={b.toString()}/>
            <hr/>
            <div>
                For A: {resultA}
            </div>
            <div>
                For B: {resultB}
            </div>
        </div>
    );
}

const NewMessagesCounter = (props: any) => {
    console.log("Counter")
    return (
        <>
            <div>{props.count}</div>
            <button onClick={props.changeCounter}>+</button>
        </>
    )
}

const Users = memo((props: { users: Array<{ id: number, title: string }> }) => {
    console.log("USERS")
    return (
        <div>{props.users.map(user => <div key={user.id}>{user.title}</div>)}</div>
    )
})


export const HelpReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([{ id: 1, title: "Andrew"}, {id: 2, title: "James"}, {id: 3, title: "Bob"}, {id: 4, title: "George"}])

    const changeCounter = () => setCounter(counter + 1)

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