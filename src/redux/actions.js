import { COLOR_THEME } from "./constants.js";

export function themeChange(payload) {
	return function (dispatch) {
		dispatch({ type: COLOR_THEME, payload: payload });
	};
}
