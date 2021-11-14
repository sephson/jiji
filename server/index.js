require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const connectDB = require("./db/db");
connectDB();
const userRoute = require("./route/users.routes");
const itemRoute = require("./routes/item.routes");
// const uploadRoute = require("./routes/uploadRoute");
// const requestRoute = require("./routes/requestRoute");
const errorHandler = require("./middleware/error");

app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/user", userRoute);
app.use("/api/item", itemRoute);
// app.use("/api/upload", uploadRoute);
// app.use("/api/request", requestRoute);
app.use(errorHandler);

app.listen(5000, () => console.log(`Server is running on 5000`));
