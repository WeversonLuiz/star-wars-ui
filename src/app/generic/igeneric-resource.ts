export interface IgenericResource<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}