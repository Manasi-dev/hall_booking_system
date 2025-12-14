const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookingRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.SERVER_PORT, () => {
    console.log("Server running");
  });
});
