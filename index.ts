import express from "express";
import remindersRouter from "./routers/reminders";
const app = express();

app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(8000, () => {
  console.log("Server running in port 8000");
});
