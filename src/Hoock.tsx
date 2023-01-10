import React, {useState} from "react";

export const Hoock = () => {
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    let [b] = useState(0)
    const onClickHandler2 = () => {
        setA(a=0)
        console.log(b)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>NUM</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    );
};

