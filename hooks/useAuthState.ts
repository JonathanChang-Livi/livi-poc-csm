import { getCookie, setCookie } from "cookies-next"
import { create } from "zustand"
import { getStringOrUndefined, IShareState } from "../components/interface"

export const key = 'auth-token'

const useAuthState = create<IShareState<string | undefined>>()(() => ({
    current: getStringOrUndefined(getCookie(key)),
    update: (value) => setCookie(key, value)
}))

export default useAuthState