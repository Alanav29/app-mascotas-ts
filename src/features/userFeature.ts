import { createSlice } from "@reduxjs/toolkit";

type userSignedState = {
	_id: string;
	email: string;
	token: string;
	name: string;
	isAdmin: boolean;
};

type userState = {
	user: {
		value: userSignedState | false;
	};
};

export const userFeature = createSlice({
	name: "user",
	initialState: {
		value: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setUser } = userFeature.actions;

export const selectUser = (state: userState) => state.user.value;

export default userFeature.reducer;
