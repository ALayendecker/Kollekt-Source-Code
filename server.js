const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const routes = require("./routes");
//connect to database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  console.log("hit 3001");
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}!`);
});
