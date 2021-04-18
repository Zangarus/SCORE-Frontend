import { IUser } from "./User";

export enum TravelType {
  FOOT,
  BIKE,
  CAR,
  ECAR,
  EBIKE,
  FARTRAIN,
  NEARTRAIN,
  PLANE
}

export interface IEntry {
    user: IUser;
    timestamp: Date;
    distance: number;
    travelType: TravelType;
    passenger: number;
}

export interface Vehicle {
  code: TravelType;
  name: string;
}
