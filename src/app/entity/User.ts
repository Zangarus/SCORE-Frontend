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
  readonly beginDate?: Date;
  readonly endDate?: Date;
  readonly absScore: number;
  readonly relScore: number;
  readonly emScore: number;
}
