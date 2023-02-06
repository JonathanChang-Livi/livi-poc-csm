import { create } from "zustand";
import { IShareState } from "../components/interface";

const key = 'auth-token'

const useAuthState = create<IShareState<string | undefined>>()((set, get) => ({
    current: undefined,
    getState: () => get().current,
    update: (value) => set(() => ({ current: value }))
}))

export default useAuthState