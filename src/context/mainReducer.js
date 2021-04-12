const mainReducer = (state, action) => {
	switch (action.type) {
		case "STORE_TOKEN":
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
};

export default mainReducer;
