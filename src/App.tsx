import React, {useState} from "react";
import "./App.css";
// import {Header} from "./Header/Header";
// import {NewComponent} from "./NewComponent";
// import {TopCars} from "./TopCars";
// import {Button} from "./Button/Button";
// import {UniversalButton} from "./Button/UniversalButton";
// import {Hoock} from "./Hoock";
import {Filter} from "./Filter";


function App() {
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    );
    const topCars = [
        {manufac: "BMW", model: "X5"},
        {manufac: "Mersedes", model: "MLS"},
        {manufac: "Audi", model: "Q7"}
    ]

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("I'm stupid button")
    }

    return (

        <>
            {/*<Button/>*/}
            {/*<Header title={"NEW HEADER"}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<TopCars topCars={topCars}/>*/}
            {/*<UniversalButton name="MyYouTubeChanel-1" callback={() => Button1Foo("Vasya", 21)}/>*/}
            {/*<UniversalButton name="MyYouTubeChanel-2" callback={() => Button2Foo("Ivan")}/>*/}
            {/*<UniversalButton name="Stupid button" callback={Button3Foo}/>*/}
            {/*<Hoock/>*/}
            <Filter />
        </>
    );
}

export default App;
