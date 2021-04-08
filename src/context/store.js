import React, { createContext, useReducer } from "react";
import mainReducer from "./mainReducer";

const initialState = {
	username: "",
	token: "",
};

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const storeToken = payload => dispatch({ type: "STORE_TOKEN", payload });

	const events = { storeToken };

	return (
		<AppContext.Provider value={{ state, events }}>
			{children}
		</AppContext.Provider>
	);
};
