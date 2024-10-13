import {IDj} from "./dj.model";

export interface IEvent {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  date: Date;
  principalLineUp: IDj[];
  lineUp: IDj[]
}
