import express from "express";
import cors from "cors";
import { database } from "./database";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(3001, async () => {
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
