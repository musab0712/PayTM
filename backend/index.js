const express = require("express");
const cors = require("cors");

const mainRouters = require("./routes/index");
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouters);

app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
