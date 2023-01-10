import React from 'react';

export type NewTopCarsType = {
    topCars: TopCarsType[]
}
type TopCarsType = {
    manufac: string,
    model: string
}
export const TopCars = (props: NewTopCarsType) => {
    return (
        <table>
            {props.topCars.map((objTopCars, index: number) => {
                return (
                    <tr>
                        <th>{index + 1}{objTopCars.manufac}</th>
                        <td>{objTopCars.model}</td>
                    </tr>

                )
            })}
        </table>
    );
};


