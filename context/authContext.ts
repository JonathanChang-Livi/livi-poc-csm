import { createContext } from "react"
import { IAuthContext } from "../components/auth"


const DEFAULT_AUTH_CONTEXT: IAuthContext = {
    auth: undefined,
    setAuth: () => {}
}

const authContext = createContext<IAuthContext>(DEFAULT_AUTH_CONTEXT)

export default authContext