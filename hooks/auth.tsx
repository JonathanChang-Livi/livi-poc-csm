import { getCookie, setCookie } from "cookies-next";
import { useCallback, useContext } from "react";
import { IShareState, ShareStateContext } from "../components/provider";

// export const AuthState: ShareStateProps = {
//     token: '',
//     update: () => {}
// }

const key = 'auth-token'

export const AuthState = (): IShareState => {
    const cookie = getCookie(key)
    let token = undefined
    if (cookie) {
        token = cookie.toString()
    }

    // const [auth, updateAuth] = useState<string | undefined>(token)

    const update = useCallback((token: string): void => {
        setCookie(key, token)
    }, [])

    return {
        key,
        value: token,
        update
    }
}

const useAuthState = () => {
    const states = useContext(ShareStateContext).shareStates

    const find = states.find(x => x.key === key)
    if (!find) {
        return undefined
    }

    return find

}

export default useAuthState