const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const userRouter = require("./routers/user.js");
const imageRouter = require("./routers/image.js");

const jsonParser = express.json();

app.use(jsonParser);
app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(port, () => console.log("listening on port " + port));
