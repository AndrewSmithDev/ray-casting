import { Line } from "./line";
import { Ray } from "./ray";
import { radianToVector } from "../core/utils";
import { Vector } from "../types/vector";

export class Particle {
  private rays: Ray[] = [];

  constructor(private pos: Vector) {
    for (let i = 0; i < 360; i += 0.05) {
      this.rays.push(new Ray(this.pos, radianToVector(i)));
    }
  }

  setPos(pos: Vector): void {
    this.pos = pos;
    for (const ray of this.rays) {
      ray.position = this.pos;
    }
  }

  draw(lines: Line[]): void {
    for (const ray of this.rays) {
      ray.draw(lines);
    }
  }
}
