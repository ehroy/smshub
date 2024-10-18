import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import errorHandler from "./middleware/index.js";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
