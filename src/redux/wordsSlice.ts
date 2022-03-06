import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data";
import _ from "lodash";
import { CardType, OrderType, SpaceName } from "../types";
import * as LSHelpoers from '../helpers/localStorage'

type WordSliceType = {
	memrizeSpace: SpaceType;
	noteSpace: SpaceType;
};

type ActionType<T> = PayloadAction<{ space: SpaceName } & T>

const initialSpace = {
	originList: [] as CardType[],
	difficults: [] as number[],
	order: "default" as OrderType,
	selectedGroups: [] as number[],
  onlyDifficult: false,
};

export type SpaceType = typeof initialSpace;

const initialState: WordSliceType = {
	memrizeSpace: { ...initialSpace, originList: data, difficults: LSHelpoers.getItem('memrizeSpace-difficults') || [] },
	noteSpace: initialSpace,
};

const wordsSlice = createSlice({
	name: "words",
	initialState,
	reducers: {
		toggleDifficult (state, action: ActionType<{id: number}>) {
      const newDifficults = _.xor(state[action.payload.space].difficults, [action.payload.id]);
      state[action.payload.space].difficults  = newDifficults;
      LSHelpoers.setItem(`${action.payload.space}-difficults`, newDifficults);
		},
    toggleOnlyDifficult (state, action: ActionType<{}>) {
      state[action.payload.space].onlyDifficult = !state[action.payload.space].onlyDifficult;
    },
    changeOrder (state, action: ActionType<{order: OrderType}>) {
      state[action.payload.space].order = action.payload.order;
    },
    toggleSelectedGroups (state, action: ActionType<{groupid: number}>) {
      state[action.payload.space].selectedGroups = _.xor(state[action.payload.space].selectedGroups, [action.payload.groupid]);
    }
	},
});

export const {changeOrder, toggleDifficult, toggleSelectedGroups, toggleOnlyDifficult} = wordsSlice.actions

export default wordsSlice.reducer;
