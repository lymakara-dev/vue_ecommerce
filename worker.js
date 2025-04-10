import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

// API or dynamic route examples:
app.get("/api/hello", (c) => {
  return c.json({ message: "Hello from the API!" });
});

// Serve static files from the dist folder for specific routes
app.use("/static/*", serveStatic({ root: "./dist" }));

export default {
  fetch: app.fetch,
};
