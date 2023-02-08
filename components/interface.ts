export interface IShareState<T> {
    current: T
    update: (value: T) => void
}