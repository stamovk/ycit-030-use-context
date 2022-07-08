export function BadCard(props) {
    const { name, email, isAdmin, users, setUsers, allowCheckbox } = props

    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{email}</p>
            {allowCheckbox && (
                <>
                    <label htmlFor="is-admin">Is admin?</label>
                    <input
                        name="is-admin"
                        type={"checkbox"}
                        checked={isAdmin}
                        onChange={() => {}}
                        onClick={(e) => {
                            console.log(e.target.checked)

                            const foundUser = users.find(
                                (el) => el.email === email
                            )

                            foundUser.isAdmin = e.target.checked // BAD because we are mutating the previous state

                            // setUsers(users)
                            setUsers([...users]) // Tricked react by re-spreading the objects into a new array

                            // foundUser.isAdmin = false // <-- we see that it does mutate the object, but why doesn't React react

                            console.log("found user", foundUser)
                        }}
                    />
                </>
            )}
        </div>
    )
}
