import React, { useContext, useState } from "react"

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

const numContext = React.createContext(null)

export function AppUseContext() {
    const [state, setState] = useState(3)

    const { Provider } = numContext

    return (
        <Provider value={state}>
            <Level1 num={state} />
        </Provider>
    )
}

function Level1() {
    return <Level2 />
}

function Level2() {
    return <Level3 />
}

function Level3() {
    const num = useContext(numContext)

    return <div>YAY! {num}</div>
}
