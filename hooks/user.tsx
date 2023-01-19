import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { IShareState } from "../components/interface";

const key = 'user-info'

interface UserInfo {
    username: string
    accBalance: string
}

// export const UserState = (): IShareState => {
//     const cookie = getCookie(key)
//     let user: UserInfo | undefined = undefined
//     if (cookie) {
//         user = JSON.parse(cookie.toString())
//     }

//     // const [auth, updateAuth] = useState<string | undefined>(token)

//     const update = useCallback((user: UserInfo): void => {
//         setCookie(key, user)
//     }, [])

//     return {
//         key,
//         value: user,
//         update
//     }
// }

// const useUserState = () => {
//     const states = useContext(ShareStateContext).shareStates

//     const find = states.find(x => x.key === key)
//     if (!find) {
//         return undefined
//     }

//     return find
// }

const useUserState = create<IShareState<UserInfo>>((set) => {
    const cookie = getCookie(key)
    let current: UserInfo = {
        username: '',
        accBalance: ''
    }
    if (cookie) {
        current = JSON.parse(cookie.toString())
    }
    return {
        current,
        update: (value) => {
            setCookie(key, value)
            set({ current: value })
        }
    }
})

export default useUserState