import React, { createContext } from "react";
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

export const ShareStateContext = createContext(DEFAULT_STATE)

export const ShareStateProvider = ({ children }: ProviderProps) => {
    return (
        <ShareStateContext.Provider value={allContext}>
            {children}
        </ShareStateContext.Provider>
    )
}

export default ShareStateProvider