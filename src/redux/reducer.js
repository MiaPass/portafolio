import { COLOR_THEME } from "./constants.js";

const initialState = {
	colorTheme: {},
};

export default function reducer(state = initialState, { type, payload }) {
	state = initialState;
	switch (type) {
		case COLOR_THEME:
			return {
				...state,
				colorTheme: payload,
			};

		default:
			return state;
	}
}
