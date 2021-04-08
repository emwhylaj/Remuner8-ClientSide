import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
	<AppProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AppProvider>,
	rootElement
);
