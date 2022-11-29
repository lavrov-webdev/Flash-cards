import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import memrizeList from "../data/memrize/memrizeList";
import _ from "lodash";
import { CardType, OrderType, SpaceName } from "../types";
import * as LSHelpoers from "../helpers/localStorage";
import notesList from '../data/notesList';

type WordSliceType = {
	memrizeSpace: SpaceType;
	noteSpace: SpaceType;
	actualSpace: SpaceName;
};

const initialSpace = {
	originList: [] as CardType[],
	difficults: [] as number[],
	order: "default" as OrderType,
	selectedGroups: [] as number[],
	onlyDifficult: false,
};

export type SpaceType = typeof initialSpace;

const initialState: WordSliceType = {
	memrizeSpace: {
		...initialSpace,
		originList: memrizeList,
		difficults: LSHelpoers.getItem("memrizeSpace-difficults") || [],
	},
	noteSpace: {
		...initialSpace,
		originList: notesList,
		difficults: LSHelpoers.getItem("noteSpace-difficults") || [],
	},
	actualSpace: "memrizeSpace",
};

const wordsSlice = createSlice({
	name: "words",
	initialState,
	reducers: {
		toggleDifficult(state, action: PayloadAction<number>) {
			const newDifficults = _.xor(state[state.actualSpace].difficults, [
				action.payload,
			]);
			state[state.actualSpace].difficults = newDifficults;
			if (newDifficults.length === 0)
				state[state.actualSpace].onlyDifficult = false;
			LSHelpoers.setItem(`${state.actualSpace}-difficults`, newDifficults);
		},
		toggleOnlyDifficult(state) {
			const newOnlyDifficult = !state[state.actualSpace].onlyDifficult;
			if (newOnlyDifficult) state[state.actualSpace].selectedGroups = [];
			state[state.actualSpace].onlyDifficult = newOnlyDifficult;
		},
		changeOrder(state, action: PayloadAction<OrderType>) {
			state[state.actualSpace].order = action.payload;
		},
		toggleSelectedGroups(state, action: PayloadAction<number>) {
			state[state.actualSpace].selectedGroups = _.xor(
				state[state.actualSpace].selectedGroups,
				[action.payload]
			);
		},
		changeActualSpace(state, action: PayloadAction<SpaceName>) {
			state.actualSpace = action.payload;
		}
	},
});

export const {
	changeOrder,
	toggleDifficult,
	toggleSelectedGroups,
	toggleOnlyDifficult,
	changeActualSpace,
} = wordsSlice.actions;

export default wordsSlice.reducer;
