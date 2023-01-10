import React from 'react';

export type NewComponentTape = {
    // students: Array<StudentType>  или
    students: StudentType[]
}
type StudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentTape) => {


    return (
        <ul>
            {props.students.map((objFromStudArr) => {

                return (
                    <li key={objFromStudArr.id}>
                        {objFromStudArr.name} age: {objFromStudArr.age}
                    </li>
                )
            })}
        </ul>
    );
};

