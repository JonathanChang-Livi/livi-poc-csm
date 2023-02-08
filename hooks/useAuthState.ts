import { getCookie, setCookie } from "cookies-next"
import { useState } from "react"
import { create } from "zustand"
import { getStringOrUndefined, IShareState } from "../components/interface"

export const key = 'auth-token'

const useAuthState = useState<string | undefined>(undefined)

// const useAuthState = create<IShareState<string | undefined>>()(() => ({
//     current: getStringOrUndefined(getCookie(key)),
//     update: (value) => setCookie(key, value)
// }))

export default useAuthState