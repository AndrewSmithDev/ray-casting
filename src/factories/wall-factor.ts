import { Line } from "../entities/line";

/**
 * The wall factory is responsible for creating the walls. There are 4 walls that are always
 * created: top, right, bottom, left. After that, the number of walls specified by numberOfWalls is
 * created. The walls are created with a random start and end position. The start and end position
 * are always within the bounds of the world.
 */
export class WallFactory {
  /**
   * Creates the walls.
   *
   * @param width The width of the world.
   * @param height The height of the world.
   * @param numberOfWalls The number of walls to create.
   * @returns The walls.
   */
  public static createWalls(width: number, height: number, numberOfWalls: number): Line[] {
    const walls = [
      new Line({ x: 0, y: -1 }, { x: width, y: -1 }), // top
      new Line({ x: width + 1, y: 0 }, { x: width + 1, y: height }), // right
      new Line({ x: width, y: height }, { x: 0, y: height }), // bottom
      new Line({ x: 0, y: height }, { x: 0, y: 0 }), // left
    ];

    for (let i = 0; i < numberOfWalls; i++) {
      walls.push(
        new Line(
          {
            x: Math.random() * width,
            y: Math.random() * height,
          },
          {
            x: Math.random() * width,
            y: Math.random() * height,
          }
        )
      );
    }

    return walls;
  }
}
