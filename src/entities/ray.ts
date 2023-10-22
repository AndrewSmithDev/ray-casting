import { Line } from "./line";
import { Vector } from "../types/vector";

/**
 * A ray is a line segment that starts at a position and points in a direction. The ray is
 * responsible for casting itself against the walls and drawing itself.
 */
export class Ray {
  /**
   * Creates a new Ray. The ray is responsible for casting itself against the walls.
   *
   * @param position the position of the ray
   * @param direction the direction of the ray is pointing
   */
  constructor(
    public position: Vector,
    public direction: Vector
  ) {}

  /**
   * Updates the direction of the ray to look at the position
   *
   * @param position the position to look at
   */
  lookAt(position: Vector): void {
    this.direction.x = position.x - this.position.x;
    this.direction.y = position.y - this.position.y;
  }

  /**
   * Casts the ray against the lines
   *
   * @param walls the walls to cast the ray against
   */
  draw(walls: Line[]): void {
    const intersection = this.getClosestIntersection(walls);
    if (!intersection) return;

    const ray = new Line(this.position, intersection, 0.005);
    ray.draw();
  }

  /**
   * Returns the closest intersection between the ray and the walls. If there is no intersection,
   * undefined is returned.
   *
   * @param walls the walls to cast the ray against
   * @returns the position of the closest intersection between the ray and the walls
   */
  private getClosestIntersection(walls: Line[]): Vector | undefined {
    let closestIntersection: Vector | undefined = undefined;
    let closestDistance: number = Infinity;

    for (const wall of walls) {
      const intersection = this.getIntersection(wall);
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

  /**
   * Returns the intersection between the ray and the line. If there is no intersection, undefined
   *
   * @param line the line to check for intersection
   * @returns the position of the intersection between the ray and the line
   */
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
