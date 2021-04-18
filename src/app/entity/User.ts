import { IEntry } from "./Entry";

export interface IUser {
    username?: string;
    password?: string;
    firstName: string;
    lastName: string;
    score?: IScoreData;
    entries?: IEntry[];
}

export interface IScoreData {
  id: string;
  beginDate?: Date;
  endDate?: Date;
  absScore: number;
  relScore: number;
  emScore: number;
}
