require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

// port & database connection
const port = process.env.PORT;
const dbURI = process.env.MONGO_URI;

// express app
const app = express();

// Global middleware
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/gameplay", requireAuth, (req, res) => res.render("gameplay"));
app.use(authRoutes);
// app.get("/", (req, res) =>
// 	res.json({ msg: `Hello from server on PORT...${port}` })
// );

//connect db and listen for port, note 3 lines after mongoose.connect(dbURI,{} were required due to deprecation for future release
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})

	.then(() => {
		app.listen(port, () => {
			console.log(`MongoDB connected & listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
