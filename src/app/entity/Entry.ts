import { IUser } from "./User";

export enum TravelType {
    Foot = 1,
    Bike,
    eBike,
    Car,
    eCar,
    Plane,
    LocalTrain,
    LongTrain
}

export interface IEntry {
    user: IUser;
    timestamp: Date;
    distance: number;
    travelType: TravelType;
}

export interface Vehicle {
  code: TravelType;
  name: string;
}
