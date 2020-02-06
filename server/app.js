const express = require("express");
const socket = require("socket.io");

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
	console.log("Server is listening on port", port);
});

const io = socket(server);

io.on("connection", socket => {
	console.log("Has new connection!");

	socket.on("disconnect", () => {
		console.log("Client is disconnect");
	});
});
