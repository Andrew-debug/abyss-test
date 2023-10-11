export interface IGraph {
  value: string;
  children: IGraph[];
  parent: IGraph | null;
  depth: number;
  id: string;
}
