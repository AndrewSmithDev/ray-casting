import * as PIXI from "pixi.js";
import { Line } from "./line";
import { Particle } from "./particle";
import { Vector } from "../types/vector";
import { WallFactory } from "../factories/wall-factor";

/**
 * The world is responsible for rendering the walls and the particle
 */
export class World {
  private readonly graphics: PIXI.Graphics;
  private readonly walls: Line[];
  private readonly particle: Particle;

  /**
   * Creates a new World. The world is responsible for rendering the walls and the particle.
   *
   * @param width the width of the world
   * @param height the height of the world
   * @param numberOfWalls the number of walls to create
   * @param graphics the PIXI.Graphics used to draw the world
   */
  constructor(width: number, height: number, numberOfWalls: number, graphics: PIXI.Graphics) {
    this.graphics = graphics;
    this.particle = new Particle({ x: width / 2, y: height / 2 });
    this.walls = WallFactory.createWalls(width, height, numberOfWalls);
  }

  /**
   * Renders the world
   *
   * @param mousePos the current position of the mouse
   */
  render(mousePos: Vector) {
    this.graphics.clear();
    this.walls.forEach((wall) => wall.draw());
    this.particle.setPos({ x: mousePos.x, y: mousePos.y });
    this.particle.draw(this.walls);
  }
}
