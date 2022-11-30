// Here its were we call our server

//Calling the express npm

const express = require("express");

// choosing a port for the app
const PORT = process.env.PORT || 3001;
const app = express();

// calling the routes to create the app
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
