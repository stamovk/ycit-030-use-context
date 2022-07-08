import produce from "immer"

export function BetterCard(props) {
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
                            const newArrayOfUsers = produce((draft) => {
                                const foundUser = draft.find(
                                    (el) => el.email === email
                                )

                                foundUser.isAdmin = e.target.checked // Now it's good because it's inside IMMER
                            }, users)

                            setUsers(newArrayOfUsers)
                        }}
                    />
                </>
            )}
        </div>
    )
}
