import { graphics } from "../core/graphics";
import { Vector } from "../types/vector";

export class Line {
  constructor(
    public start: Vector,
    public end: Vector,
    private readonly alpha = 1
  ) {}

  draw(): void {
    graphics.lineStyle({
      width: 1,
      color: 0xffffff,
      alpha: this.alpha,
    });
    graphics.moveTo(this.start.x, this.start.y);
    graphics.lineTo(this.end.x, this.end.y);
  }
}
