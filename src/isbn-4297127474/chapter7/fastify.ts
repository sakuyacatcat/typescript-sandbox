import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(8000);
