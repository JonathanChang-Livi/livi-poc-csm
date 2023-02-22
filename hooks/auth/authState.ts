import { create } from "zustand"
import { IShareState } from "../../components/interface"

interface AuthState {
    token: string | undefined
}

const useAuthState = create<IShareState<AuthState>>((set) => ({
    current: {
        token: undefined
    },
    update: (value) => set({ current: value })
}))

export default useAuthState