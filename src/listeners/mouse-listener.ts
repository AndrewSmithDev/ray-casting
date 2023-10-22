import { Container } from "pixi.js";
import { Vector } from "../types/vector";

export class MouseListener {
  private readonly mouseposition: Vector = { x: 0, y: 0 };

  constructor(private readonly stage: Container) {
    this.stage.addEventListener("pointermove", (e) =>
      this.updateMousePosition(e.global.x, e.global.y)
    );
  }

  private updateMousePosition(x: number, y: number) {
    this.mouseposition.x = x;
    this.mouseposition.y = y;
  }

  public getMousePosition(): Vector {
    return this.mouseposition;
  }
}
