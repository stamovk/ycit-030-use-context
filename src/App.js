import produce from "immer"
import { useCallback, useContext, useEffect, useState } from "react"
import { BadCard } from "./components/BadCard"
import { BestCard } from "./components/BestCard"
import { BetterCard } from "./components/BetterCard"
import { usersContext } from "./UsersProvider"

export function App() {
    const { users, setUsers } = useContext(usersContext)

    return (
        <div className="App">
            BEST
            <form>
                <label htmlFor="user-name">User name</label>
                <input name="user-name" type={"text"} />
                <label htmlFor="user-email">User email</label>
                <input name="user-email" type={"text"} />
                <input
                    type={"submit"}
                    onClick={(e) => {
                        e.preventDefault()
                        const name =
                            document.getElementsByName("user-name")[0].value
                        const email =
                            document.getElementsByName("user-email")[0].value

                        const newUsers = [
                            { name, email, isAdmin: false },
                            ...users,
                        ]

                        setUsers(newUsers)

                        // This mutates and does not create a new array. With no new array, react thinks there is no work to be done because the "before pointer" and the "after pointer" are the same pointer to the array
                        // users.unshift({ name, email, isAdmin: false })
                        // setUsers(users)
                    }}
                />
            </form>
            {users.map((user) => {
                return (
                    <BestCard
                        key={`user-${user.email}`}
                        {...user}
                        allowCheckbox
                    />
                )
            })}
            <hr />
            {users
                .filter((el) => el.isAdmin)
                .map((user) => {
                    return (
                        <BestCard
                            key={`user-readonly-${user.email}`}
                            {...user}
                        />
                    )
                })}
        </div>
    )
}
