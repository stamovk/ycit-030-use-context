import React, { useContext, useEffect, useMemo, useState } from "react"

// export function AppPropDrilling() {
//     const [state, setState] = useState(3)

//     return <Level1 num={state} />
// }

// function Level1(props) {
//     return <Level2 num={props.num} />
// }

// function Level2(props) {
//     return <Level3 num={props.num} />
// }

// function Level3(props) {
//     return <div>YAY! {props.num}</div>
// }

// Now using useContext

let myOtherState = "blabla"

const numContext = React.createContext(null)

export function AppUseContext() {
    const [state, setState] = useState(3)

    const { Provider } = numContext

    useEffect(() => {
        myOtherState = "changed to something else"

        setTimeout(() => {
            setState(55)
        }, 2000)
    }, [])

    return (
        <Provider value={state}>
            <SideComponent />
            <Level1 num={state} />
        </Provider>
    )
}

function SideComponent() {
    console.log("Hi, I'm the side component and I rerendered")

    return <div>Side component</div>
}

function Level1() {
    console.log("Hi, I'm level 1 and I rerendered")

    return (
        <div>
            {myOtherState}
            <Level2 />
        </div>
    )
}

function Level2() {
    return <Level3 />
}

function Level3() {
    console.log("Hi, I'm level 3 and I rerendered")

    const num = useContext(numContext)

    return <div>YAY! {num}</div>
}
