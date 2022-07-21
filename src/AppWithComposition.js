import React, { useEffect, useState } from "react"

let myOtherState = "blabla"

export function AppWithComposition() {
    const [state, setState] = useState(3)

    useEffect(() => {
        myOtherState = "changed to something else"

        setTimeout(() => {
            setState(55)
        }, 2000)
    }, [])

    return (
        <div>
            {myOtherState}
            <Level1>
                <Level2>
                    <Level3>
                        <div>YAY! {state}</div>{" "}
                    </Level3>
                </Level2>
            </Level1>
        </div>
    )
}

function Level1(props) {
    return (
        <div>
            Hi from Level1
            {props.children}
        </div>
    )
}

function Level2(props) {
    return (
        <div>
            Hi from Level2
            {props.children}
        </div>
    )
}

function Level3(props) {
    console.log("Hi, I'm level 3 and I rerendered")

    return (
        <div>
            Hi from Level3
            {props.children}
        </div>
    )
}
