export type TGraphNode = {
  value: string;
  children: { [key: symbol]: TGraphNode };
  id: any;
  parent: TGraphNode | null;
  depth: number;
};
