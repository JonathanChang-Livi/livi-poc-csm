import { createContext } from "react"
import { IUserContext } from "../components/user"


const DEFAULT_USER_CONTEXT: IUserContext = {
    user: undefined,
    setUser: () => {}
}

const userContext = createContext<IUserContext>(DEFAULT_USER_CONTEXT)

export default userContext