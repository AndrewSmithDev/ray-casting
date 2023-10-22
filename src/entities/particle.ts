import { Line } from "./line";
import { Ray } from "./ray";
import { radianToVector } from "../core/utils";
import { Vector } from "../types/vector";

/**
 * A particle is a point in 2D space. The particle is responsible for casting the rays against the
 * walls and drawing the rays.
 */
export class Particle {
  private rays: Ray[] = [];

  /**
   * Creates a new Particle. The particle is responsible for casting the rays against the walls.
   *
   * @param pos the position of the particle
   */
  constructor(private pos: Vector) {
    for (let i = 0; i < 360; i += 0.05) {
      this.rays.push(new Ray(this.pos, radianToVector(i)));
    }
  }

  /**
   * Updates the position of the particle
   *
   * @param pos the new position of the particle
   */
  setPos(pos: Vector): void {
    this.pos = pos;
    for (const ray of this.rays) {
      ray.position = this.pos;
    }
  }

  /**
   * Casts the rays against the lines
   *
   * @param walls the lines that the rays will be casted against
   */
  draw(walls: Line[]): void {
    for (const ray of this.rays) {
      ray.draw(walls);
    }
  }
}
