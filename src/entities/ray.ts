import { Line } from "./line";
import { Vector } from "../types/vector";

export class Ray {
  constructor(
    public position: Vector,
    public direction: Vector
  ) {}

  lookAt(direction: Vector): void {
    this.direction.x = direction.x - this.position.x;
    this.direction.y = direction.y - this.position.y;
  }

  draw(lines: Line[]): void {
    const intersection = this.getClosestIntersection(lines);
    if (!intersection) return;

    const ray = new Line(this.position, intersection, 0.005);
    ray.draw();
  }

  private getClosestIntersection(lines: Line[]): Vector | undefined {
    let closestIntersection: Vector | undefined = undefined;
    let closestDistance: number = Infinity;

    for (const line of lines) {
      const intersection = this.getIntersection(line);
      if (intersection) {
        const distance = Math.hypot(
          this.position.x - intersection.x,
          this.position.y - intersection.y
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIntersection = intersection;
        }
      }
    }

    return closestIntersection;
  }

  private getIntersection(line: Line): Vector | undefined {
    // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    const x1 = line.start.x;
    const y1 = line.start.y;
    const x2 = line.end.x;
    const y2 = line.end.y;

    const x3 = this.position.x;
    const y3 = this.position.y;
    const x4 = this.position.x + this.direction.x;
    const y4 = this.position.y + this.direction.y;

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator === 0) return undefined;

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

    if (t > 0 && t < 1 && u > 0) {
      return {
        x: x1 + t * (x2 - x1),
        y: y1 + t * (y2 - y1),
      };
    }

    return undefined;
  }
}
