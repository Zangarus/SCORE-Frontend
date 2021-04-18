import { IEntry } from "./Entry";

export interface IUser {
    username?: string;
    password?: string;
    firstName: string;
    lastName: string;
    score?: number;
    entries?: IEntry[];
}
