import produce from "immer"
import React, { useMemo, useState } from "react"

const initialUsers = [
    { name: "Bobby", email: "bob@bob.com", isAdmin: false },
    { name: "Soheyl", email: "Soheyl@Soheyl.com", isAdmin: false },
    { name: "Claudia", email: "Claudia@Claudia.com", isAdmin: false },
    { name: "Mercy", email: "Mercy@Mercy.com", isAdmin: false },
    { name: "Akram", email: "Akram@Akram.com", isAdmin: false },
    { name: "Konstantin", email: "Konstantin@Konstantin.com", isAdmin: false },
]

export const usersContext = React.createContext(null)

export function UsersProvider(props) {
    const [users, setUsers] = useState(initialUsers)

    function updateIsAdminForBestCard(email, isChecked) {
        const newArrayOfUsers = produce((draft) => {
            const foundUser = draft.find((el) => el.email === email)

            foundUser.isAdmin = isChecked
        }, users)

        setUsers(newArrayOfUsers)
    }

    const { Provider } = usersContext

    return (
        <Provider value={{ users, setUsers, updateIsAdminForBestCard }}>
            {props.children}
        </Provider>
    )
}
