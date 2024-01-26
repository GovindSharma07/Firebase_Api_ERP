const express = require("express");
const app = express();

app.use(express.json());

app.use("/api",require("./routes/app.routes"));

//Port for running app
const port = process.env.PORT || 4000

app.listen(port, function () {
  console.log("started on ", port)
})
