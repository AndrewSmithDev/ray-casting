import * as PIXI from "pixi.js";

/**
 * Sets up the PIXI.Application and adds the PIXI.Graphics to the stage.
 *
 * @param width the width of the canvas
 * @param height the height of the canvas
 * @param graphics the PIXI.Graphics used to draw the game
 * @returns the PIXI.Application
 */
export const setupPIXIApplication = (width: number, height: number, graphics: PIXI.Graphics) => {
  const app = new PIXI.Application<HTMLCanvasElement>({ background: "#222", width, height });
  app.stage.eventMode = "static";
  app.stage.hitArea = app.screen;
  app.stage.addChild(graphics);
  document.body.appendChild(app.view);
  return app;
};
