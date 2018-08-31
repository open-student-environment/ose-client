export class Node implements d3.SimulationNodeDatum {
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  linkCount?: number;
  color?: string;

  id: string;

  constructor(id: string) {
    this.id = id;
  }

}
