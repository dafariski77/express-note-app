const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const endpoint = require("./src/routes/route.js");

const app = express();
const PORT = process.env.PORT || 5000;

// database connection
mongoose.connect(
  "mongodb://dafariski:somepassword@ac-imhxlcf-shard-00-00.fnbjkvv.mongodb.net:27017,ac-imhxlcf-shard-00-01.fnbjkvv.mongodb.net:27017,ac-imhxlcf-shard-00-02.fnbjkvv.mongodb.net:27017/?ssl=true&replicaSet=atlas-1486j6-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("db connect"));

app.use(cors());
app.use(express.json());

// use user endpoint
app.use(endpoint);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
