import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { IShareState } from "../components/interface";

const key = 'auth-token'

const getStringOrUndefined = (value: any) => {
    if(value === null){
        return undefined
    }
    return value
}

const useAuthState = create<IShareState<string | undefined>>()(() => ({
    current: getStringOrUndefined(getCookie(key)),
    update: (value) => setCookie(key, value)
}))

export default useAuthState()