// jshint esversion:6
const express = require("express");
// const bodyParser = require('body-parser')
// const { urlencoded } = require('body-parser')
const port = 4000;

const app = express();

// app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	const today = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	// List of Days
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	// Get Current date
	const currentDay = today.getDay();
	let day = "";
	day = daysOfWeek[currentDay + 1];
	// todayDate = today.toLocaleDateString("hi-IN", options);
	// day = today.toLocaleDateString("en-US", options);

	// passing variable kindOfDay for list.ejs w/ ejs's view engine
	res.render("list", { kindOfDay: day });
});

// app.get('/', (req, res) => app.render('index', {foo: 'FOO'}))

app.listen(port, () => console.log(`Server started on port ${port}`));
