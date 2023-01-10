import React from "react";
import {FilterType} from "./Filter";

export type NewMoneyType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (filter: FilterType) => void
}

type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}


export const FilterHomeWork = (props:NewMoneyType) => {

    return (
        <>
            <>
                <ul>
                    {props.currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{marginLeft: "35px"}}>
                    <button onClick={()=>props.onClickFilterHandler( "All")}>ALL</button>
                    <button onClick={()=>props.onClickFilterHandler( "dollar")}>Dollar</button>
                    <button onClick={()=>props.onClickFilterHandler( "ruble")}>Ruble</button>
                </div>
            </>
        </>
    );
};




