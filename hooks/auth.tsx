import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { IShareState } from "../components/interface";

// export const AuthState: ShareStateProps = {
//     token: '',
//     update: () => {}
// }

const key = 'auth-token'

// export const AuthState = (): IShareState => {
//     const cookie = getCookie(key)
//     let token = undefined
//     if (cookie) {
//         token = cookie.toString()
//     }

//     // const [auth, updateAuth] = useState<string | undefined>(token)

//     const update = useCallback((token: string): void => {
//         setCookie(key, token)
//     }, [])

//     return {
//         key,
//         value: token,
//         update
//     }
// }

// const useAuthState = () => {
//     const states = useContext(ShareStateContext).shareStates

//     const find = states.find(x => x.key === key)
//     if (!find) {
//         return undefined
//     }

//     return find

// }


const useAuthState = create<IShareState<string>>((set) => {
    const cookie = getCookie(key)
    let current = undefined
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

export default useAuthState