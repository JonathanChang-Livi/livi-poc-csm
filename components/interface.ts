export interface IShareState<T> {
    current: T
    getState: () => T
    update: (value: T) => void
}