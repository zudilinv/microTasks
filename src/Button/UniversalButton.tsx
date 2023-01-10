import React from 'react';
import {callbackify} from "util";

type UniversalButtonTape = {
    name: string
    callback:() => void
}

export const UniversalButton = (props:UniversalButtonTape) => {
    const onClickHandler = () => {
      props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

