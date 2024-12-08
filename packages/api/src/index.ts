import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = 3000;
console.log("started");
app.get("/", (req: Request, res: Response) => {
  res.send("Hello0000 World");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
