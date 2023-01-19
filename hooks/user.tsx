import { getCookie, setCookie } from "cookies-next";
import { useContext } from "react";
import { IShareState, ShareStateContext } from "../components/provider";

const key = 'user-info'

interface UserInfo {
    username: string
    accBalance: string
}

export const UserState = (): IShareState => {
    const cookie = getCookie(key)
    let user: UserInfo | undefined = undefined
    if (cookie) {
        user = JSON.parse(cookie.toString())
    }

    // const [auth, updateAuth] = useState<string | undefined>(token)

    const update = (user: UserInfo): void => {
        setCookie(key, user)
    }

    return {
        key,
        value: user,
        update
    }
}

const useUserState = () => {
    const states = useContext(ShareStateContext).shareStates

    const find = states.find(x => x.key === key)
    if (!find) {
        return undefined
    }

    return find
}

export default useUserState