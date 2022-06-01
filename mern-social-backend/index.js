import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import 'dotenv/config';
import AuthRoute from "./Routes/AuthRoute.js";

// Routes

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}`)
    )
  ).catch((err) => console.log(err));


  // usage of routes
  app.use('/auth', AuthRoute);