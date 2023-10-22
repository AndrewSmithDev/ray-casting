import { graphics } from "./core/graphics";
import { MouseListener } from "./listeners/mouse-listener";
import { setupPIXIApplication } from "./core/pixi-setup";
import { World } from "./entities/world";

const width = 800;
const height = 600;
const numberOfWalls = 5;

const app = setupPIXIApplication(width, height, graphics);
const world = new World(width, height, numberOfWalls, graphics);
const mouseListener = new MouseListener(app.stage);

app.ticker.add(() => {
  const mousePos = mouseListener.getMousePosition();
  world.render(mousePos);
});
