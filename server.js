const express = require("express");
const mongoose = require("mongoose");

const app = express();
const path = require("path");

const connectDB = require("./config/db");
const routes = require("./routes");
require("dotenv").config();
//connect to database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)

// Define API routes here
app.use(routes);
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

if (process.env.NODE_ENV === ".env") {
  app.use(express.static("client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
  app.get("/*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   console.log("hit 3001");
//   res.send("API Running");
// });
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}!`);
});
