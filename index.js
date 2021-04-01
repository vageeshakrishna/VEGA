const express = require("express");
const app = express();
const indexRoute = require("./routes/indexRoute");

// middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", require("./routes/indexRoute"));

// starting server
app.listen(3000, () => {
  console.log(`Listening on port http://localhost:3000`);
});
