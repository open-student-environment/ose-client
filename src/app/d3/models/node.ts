export class Node implements d3.SimulationNodeDatum {
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  linkCount?: number;
  color?: string | number;
  size?: number;
  indicators?: any;

  id: string;
  name?: string;
  type?: string;
  grade?: string;
  school?: string;
  location?: string;

  constructor(id: string, color: string, size: number) {
    this.id = id;
    this.color = color;
    this.size = size;
  }

}
