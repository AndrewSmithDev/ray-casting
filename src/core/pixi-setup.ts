import * as PIXI from "pixi.js";

export const setupPIXIApplication = (width: number, height: number, graphics: PIXI.Graphics) => {
  const app = new PIXI.Application<HTMLCanvasElement>({ background: "#222", width, height });
  app.stage.eventMode = "static";
  app.stage.hitArea = app.screen;
  app.stage.addChild(graphics);
  document.body.appendChild(app.view);
  return app;
};
