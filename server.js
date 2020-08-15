const express = require("express");
const connectDB = require("./config/db")
// const cookieParser = require("cookie-parser");
const usersRoute = require("./routes/users");
const myRouter = require("./routes/products");



const app = express();

//DB Config

connectDB();

app.use(express.json({ extended: false }));
// app.use(cookieParser());
// Routes
app.use("/api/users", usersRoute);
app.use("/api/products", myRouter);
//server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
