import { useCallback, useState } from "react"

type TempUserType = {
    userName: string,
} | undefined

export interface IUserContext {
    user: TempUserType
    setUser: (newCtx: TempUserType) => void
}

const useUserContext = (): IUserContext => {
    const [auth, updateAuth] = useState<TempUserType>(undefined)

    const setUser = useCallback((newCtx: TempUserType): void => {
        updateAuth(newCtx)
    }, [])

    return {
        user: auth,
        setUser
    }
}

export default useUserContext