import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

// Serve static files from the dist folder
app.use("/static/*", serveStatic({ root: "./dist" }));

export default {
  fetch: app.fetch,
};
