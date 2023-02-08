export interface IShareState<T> {
    current: T
    update: (value: T) => void
}

export const getStringOrUndefined = (value: any) => {
    if(value === null){
        return undefined
    }
    return value
}