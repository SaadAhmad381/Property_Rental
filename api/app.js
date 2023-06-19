const mongoose = require("mongoose");
const express = require("express");
const router = require("./src/routes");

const app = express();
app.use(express.json());
app.use("/api", router);
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(
      "mongodb+srv://saadahmad1456:idreesia381@saad.e2vnll1.mongodb.net/propertRental_db"
    )
    .then(() => {
      console.log("DB Connected!!");
    });
}
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
module.exports = app;
