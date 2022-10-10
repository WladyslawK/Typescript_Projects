import React, {ChangeEvent, useState} from 'react';

export const UseMemo = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(5)

    const changeAHandler = (e: ChangeEvent<HTMLInputElement>) => setA(+e.currentTarget.value)
    const changeBHandler = (e: ChangeEvent<HTMLInputElement>) => setB(Number(e.currentTarget.value))

    let resultA = 1
    let resultB = 1

    for(let i = 1; i <= a; i++){
        resultA = resultA * i
    }

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
};
