import produce from "immer"
import { useContext } from "react"
import { usersContext } from "../UsersProvider"

export function BestCard(props) {
    const { name, email, isAdmin, allowCheckbox } = props

    const { updateIsAdminForBestCard } = useContext(usersContext)

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
                            updateIsAdminForBestCard(email, e.target.checked)
                        }}
                    />
                </>
            )}
        </div>
    )
}
