export interface PartType {
    id: number | string;
    name: string;
    status: string;
  }

export interface IStore {
  PARTS: PartType[]
}