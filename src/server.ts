import express from "express";
import { database } from "./database";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await database
    .authenticate()
    .then(() => {
      console.log("Connection to database successful");
    })
    .catch((error) => {
      console.log(`Connection to database failed. Error: ${[error]}`);
    });
  console.log(`Server started successfuly at port ${PORT}`);
});
