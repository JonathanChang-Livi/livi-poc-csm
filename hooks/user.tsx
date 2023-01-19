import { NextRequest } from "next/server";
import { useCallback } from "react";
import { IShareState, useShareState } from "../components/provider";

const key = 'user-info'

interface UserInfo {
    username: string
    accBalance: string
}

export const UserState = (req: NextRequest): IShareState => {
    const cookie = req.cookies.get(key)
    let user: UserInfo | undefined = undefined
    if (cookie) {
        user = JSON.parse(cookie.value)
    }

    // const [auth, updateAuth] = useState<string | undefined>(token)

    const update = useCallback((user: UserInfo): void => {
        req.cookies.set(key, JSON.stringify(user))
    }, [])

    return {
        key,
        value: user,
        update
    }
}

export const useAuthState = () => {
    return useShareState(key)

}