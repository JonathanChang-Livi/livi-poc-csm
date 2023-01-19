import { NextRequest } from "next/server";
import React, { createContext, useContext } from "react";
import { AuthState } from "../hooks/auth";
import { UserState } from "../hooks/user";

export interface ProviderProps {
    children: React.ReactNode
    request: NextRequest
}

export interface IShareState {
    key: string
    value: any
    update: (value: any) => void
}

export interface ShareState {
    shareStates: IShareState[]
}

const AllContext = (req: NextRequest): ShareState => {
    return {
        shareStates: [
            AuthState(req),
            UserState(req)
        ]
    }
}

const DEFAULT_STATE: ShareState = {
    shareStates: []
}

const ShareStateContext = createContext(DEFAULT_STATE)

export const ShareStateProvider = ({ children, request }: ProviderProps) => {
    return (
        <ShareStateContext.Provider value={AllContext(request)}>
            {children}
        </ShareStateContext.Provider>
    )
}

export const useShareState = (key?: string) => {
    const states = useContext(ShareStateContext).shareStates
    if (!key) {
        return states
    }

    const find = states.find(x => x.key === key)
    if(!find){
        return undefined
    }

    return find
}