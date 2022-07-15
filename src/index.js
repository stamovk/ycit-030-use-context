import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { AppUseContext } from "./AppPropDrillingUseContext"
import { UsersProvider } from "./UsersProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <UsersProvider>
            <AppUseContext />
        </UsersProvider>
    </React.StrictMode>
)
