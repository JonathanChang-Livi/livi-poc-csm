import { create } from "zustand";
import { IShareState } from "../components/interface";

const key = 'user-info'

interface UserInfo {
    username: string
    accBalance: string
}

const useUserState = create<IShareState<UserInfo>>((set, get) => {
    // const cookie = getCookie(key)
    let current: UserInfo = {
        username: '',
        accBalance: ''
    }
    // if (cookie) {
    //     current = JSON.parse(cookie.toString())
    // }
    return {
        current,
        getState: () => get().current,
        update: (value) => {
            // setCookie(key, value)
            set(() => ({ current: value }))
        }
    }
})

export default useUserState