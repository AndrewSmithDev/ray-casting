import { Line } from "../entities/line";

export class WallFactory {
  public static createWalls(width: number, height: number, numberOfWalls: number): Line[] {
    const walls = [
      new Line({ x: 0, y: -1 }, { x: width, y: -1 }),
      new Line({ x: width + 1, y: 0 }, { x: width + 1, y: height }),
      new Line({ x: width, y: height }, { x: 0, y: height }),
      new Line({ x: 0, y: height }, { x: 0, y: 0 }),
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
