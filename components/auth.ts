import { useCallback, useState } from "react"

type TempAuthType = {
    userName: string,
} | undefined

export interface IAuthContext {
    auth: TempAuthType
    setAuth: (newCtx: TempAuthType) => void
}

const useAuthContext = (): IAuthContext => {
    const [auth, updateAuth] = useState<TempAuthType>(undefined)

    const setAuth = useCallback((newCtx: TempAuthType): void => {
        updateAuth(newCtx)
    }, [])

    return {
        auth,
        setAuth
    }
}

export default useAuthContext