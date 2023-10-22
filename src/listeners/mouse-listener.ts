import { Container } from "pixi.js";
import { Vector } from "../types/vector";

/**
 * The MouseListener listens to the stage for mouse movement and updates the mouse position.
 */
export class MouseListener {
  private readonly mouseposition: Vector = { x: 0, y: 0 };

  /**
   * Creates a new MouseListener. The MouseListener listens to the stage for mouse movement and
   * updates the mouse position accordingly.
   *
   * @param stage the stage to listen to
   */
  constructor(private readonly stage: Container) {
    this.stage.addEventListener("pointermove", (e) =>
      this.updateMousePosition(e.global.x, e.global.y)
    );
  }

  /**
   * Updates the mouse position
   *
   * @param x the x position of the mouse
   * @param y the y position of the mouse
   */
  private updateMousePosition(x: number, y: number) {
    this.mouseposition.x = x;
    this.mouseposition.y = y;
  }

  /**
   * Returns the mouse position. The x and y coordinates are relative to the stage.
   *
   * @returns the mouse position
   */
  public getMousePosition(): Vector {
    return this.mouseposition;
  }
}
