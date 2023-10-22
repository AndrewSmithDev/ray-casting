import { Vector } from "../types/vector";

/**
 * Converts a radian to a vector
 *
 * @param radian the radian to convert to a vector
 * @returns the vector
 */
export function radianToVector(radian: number): Vector {
  return {
    x: Math.cos(radian),
    y: Math.sin(radian),
  };
}
