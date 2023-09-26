import { createSlice } from "@reduxjs/toolkit";

type changesCounterState = {
	changesCounter: {
		value: number;
	};
};

export const changesCounterFeature = createSlice({
	name: "changesCounter",
	initialState: {
		value: 0,
	},
	reducers: {
		setChange: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { setChange } = changesCounterFeature.actions;

export const selectChangesCounter = (state: changesCounterState) =>
	state.changesCounter.value;

export default changesCounterFeature.reducer;
