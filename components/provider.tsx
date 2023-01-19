import React, { createContext, useContext } from "react";
import { AuthState as createAuthState } from "../hooks/auth";
import { UserState as createUserState } from "../hooks/user";

export interface ProviderProps {
    children: React.ReactNode
}

export interface IShareState {
    key: string
    value: any
    update: (value: any) => void
}

export interface ShareState {
    shareStates: IShareState[]
}

const allContext: ShareState = {
    shareStates: [
        createAuthState(),
        createUserState()
    ]
}

const DEFAULT_STATE: ShareState = {
    shareStates: []
}

const ShareStateContext = createContext(DEFAULT_STATE)

export const ShareStateProvider = ({ children }: ProviderProps) => {
    return (
        <ShareStateContext.Provider value={allContext}>
            {children}
        </ShareStateContext.Provider>
    )
}

export const getShareState = (key?: string) => {
    const states = useContext(ShareStateContext).shareStates
    if (!key) {
        return states
    }

    const find = states.find(x => x && x.key === key)
    if (!find) {
        return undefined
    }

    return find
}

export default ShareStateProvider