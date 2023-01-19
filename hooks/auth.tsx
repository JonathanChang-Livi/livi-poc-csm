import { getCookie, setCookie } from "cookies-next";
import { IShareState, getShareState } from "../components/provider";

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

    const update = (token: string): void => {
        setCookie(key, token)
    }

    return {
        key,
        value: token,
        update
    }
}

const useAuthState = () => {
    return getShareState(key)

}

export default useAuthState