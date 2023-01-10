import React, {useState} from "react";
import {FilterHomeWork} from './FilterHomeWork'


export type FilterType = "All" | "ruble" | "dollar"
export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    let [filter, setFilter] = useState<FilterType>("All")

     let currentMoney = money
if (filter === "dollar"){
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
}
if (filter === "ruble"){
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
}
    const onClickFilterHandler = (nameButton: FilterType) => {
       setFilter(nameButton)
     }

    return (

        <FilterHomeWork currentMoney={currentMoney}
                        onClickFilterHandler={onClickFilterHandler}/>
        // <>
        //     <ul>
        //         {currentMoney .map((objFromMoneyArr, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{objFromMoneyArr.banknote}</span>
        //                     <span>{objFromMoneyArr.nominal}</span>
        //                     <span>{objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: "35px"}}>
        //         <button onClick={()=>onClickFilterHandler( "All")}>ALL</button>
        //         <button onClick={()=>onClickFilterHandler( "dollar")}>Dollar</button>
        //         <button onClick={()=>onClickFilterHandler( "ruble")}>Ruble</button>
        //     </div>
        // </>
    )
}


