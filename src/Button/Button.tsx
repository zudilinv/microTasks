import React from 'react';



export const Button = () => {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     return(
    //         console.log('Hello, I am Vasya!')
    //     )
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     return(
    //         console.log('Hello, I am Ivan!')
    //     )
    // }

    const onClickHandler = (name:string) => {
        return(
            console.log(name)
        )
    }

    return (
        <div>
            {/*/!*<button onClick={(event) => {console.log('hello')}}>MyYouTubeChanel</button>*!/*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}
            {/*/!*Если нужно что-то передать('Ivan') то скобки и слева(event:) и справа('Ivan')*!/*/}


        </div>
    );
};

