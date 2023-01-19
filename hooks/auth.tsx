import { NextRequest } from "next/server";
import { useCallback } from "react";
import { IShareState, useShareState } from "../components/provider";

// export const AuthState: ShareStateProps = {
//     token: '',
//     update: () => {}
// }

const key = 'auth-token'

export const AuthState = (req: NextRequest): IShareState => {
    const cookie = req.cookies.get(key)
    let token = undefined
    if (cookie) {
        token = cookie.value
    }

    // const [auth, updateAuth] = useState<string | undefined>(token)

    const update = useCallback((token: string): void => {
        req.cookies.set(key, token)
    }, [])

    return {
        key,
        value: token,
        update
    }
}

export const useAuthState = () => {
    return useShareState(key)

}