import produce from "immer"
import { useCallback, useEffect, useState } from "react"
import { BadCard } from "./components/BadCard"
import { BestCard } from "./components/BestCard"
import { BetterCard } from "./components/BetterCard"

const initialUsers = [
    { name: "Bobby", email: "bob@bob.com", isAdmin: false }, // { name: "Bobby", email: "bob@bob.com", isAdmin: false } // This is what happens when you don't use immer
    // { name: "Bobby", email: "bob@bob.com", isAdmin: true }, // { name: "Bobby", email: "bob@bob.com", isAdmin: false } // With IMMER
    { name: "Soheyl", email: "Soheyl@Soheyl.com", isAdmin: false },
    { name: "Claudia", email: "Claudia@Claudia.com", isAdmin: false },
    { name: "Mercy", email: "Mercy@Mercy.com", isAdmin: false },
    { name: "Akram", email: "Akram@Akram.com", isAdmin: false },
    { name: "Konstantin", email: "Konstantin@Konstantin.com", isAdmin: false },
]

export function App() {
    const [users, setUsers] = useState(initialUsers)

    // In the real world, instead of using "initialUsers" we would do the "useEffect-fetch" pattern
    // useEffect(() => {
    //     fetch("/users")
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data))
    // }, [])

    // For the "best" card, we will invent a function with limited capability. And we will pass this function down to the children instead

    // function updateIsAdminForBestCard(email, isChecked) {
    //     const newArrayOfUsers = produce((draft) => {
    //         const foundUser = draft.find((el) => el.email === email)

    //         foundUser.isAdmin = isChecked
    //     }, users)

    //     setUsers(newArrayOfUsers)
    // }

    // You can comment out the useCallback version and uncomment the above version and the app will run the same (~20us slower)

    // To freeze the function reference, we can wrap it in useCallback and pass the users into its dependency array
    const updateIsAdminForBestCard = useCallback(
        function (email, isChecked) {
            const newArrayOfUsers = produce((draft) => {
                const foundUser = draft.find((el) => el.email === email)

                foundUser.isAdmin = isChecked
            }, users)

            setUsers(newArrayOfUsers)
        },
        [users]
    )

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
                        users={users}
                        setUsers={setUsers}
                        updateIsAdminForBestCard={updateIsAdminForBestCard}
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
