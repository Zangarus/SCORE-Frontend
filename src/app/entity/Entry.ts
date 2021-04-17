export enum TravelType {
    FOOT,
    BIKE,
    CAR,
    TRAIN,
    PLANE
}

export interface IEntry {
    distance: number;
    travelType: TravelType;
}