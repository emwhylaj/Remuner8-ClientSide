import React, { createContext, useReducer } from "react";
import { mainReducer } from "./reducers/mainReducer";

const initialState = {};

export const AppStore = createContext({});

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const events = {};

	return (
		<AppContext.Provider value={{ state, events }}>
			{children}
		</AppContext.Provider>
	);
};
