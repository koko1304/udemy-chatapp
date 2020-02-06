import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
	componentWillMount() {
		const socketURL = process.env.NODE_ENV === "production" ? "https://legendchat.herokuapp.com/" : "http://localhost:3000";

		const socket = io(socketURL);
	}

	render() {
		return <h1>Chat App</h1>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
