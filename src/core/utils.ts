import { Vector } from "../types/vector";

export function radianToVector(radian: number): Vector {
  return {
    x: Math.cos(radian),
    y: Math.sin(radian),
  };
}
