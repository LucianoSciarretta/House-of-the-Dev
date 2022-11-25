const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/db");

const routes = require("./routes/index");



app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());


app.use(morgan("tiny"));


app.use("/api", routes);

const PORT = 3001;

db.sync({ force: false }).then(() => {
  console.log("DB CONNECTED");
  app.listen(PORT, () => {
    console.log("Server listen at port 3001");
  });
});
