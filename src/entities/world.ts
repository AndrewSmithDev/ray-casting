import * as PIXI from "pixi.js";
import { Line } from "./line";
import { Particle } from "./particle";
import { Vector } from "../types/vector";
import { WallFactory } from "../factories/wall-factor";

export class World {
  private readonly graphics: PIXI.Graphics;
  private readonly walls: Line[];
  private readonly particle: Particle;

  constructor(width: number, height: number, numberOfWalls: number, graphics: PIXI.Graphics) {
    this.graphics = graphics;
    this.particle = new Particle({ x: width / 2, y: height / 2 });
    this.walls = WallFactory.createWalls(width, height, numberOfWalls);
  }

  render(mousePos: Vector) {
    this.graphics.clear();
    this.walls.forEach((wall) => wall.draw());
    this.particle.setPos({ x: mousePos.x, y: mousePos.y });
    this.particle.draw(this.walls);
  }
}
