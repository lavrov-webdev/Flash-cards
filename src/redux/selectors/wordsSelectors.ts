import shuffleArray from "shuffle-array";
import { RootState } from "../";
import { SpaceName } from "../../types";

export const getFilteredWords = (state: RootState) => {
	const { difficults, originList, order, selectedGroups, onlyDifficult } =
		state.words[state.words.actualSpace];
	let orderedList = originList;

	if (onlyDifficult) orderedList = orderedList.filter((i) => difficults.includes(i.id));

	if (selectedGroups.length != 0) {
		orderedList = orderedList.filter((_, index) =>
			selectedGroups.includes(Math.trunc(index / 100) + 1)
		);
	}

	switch (order) {
		case "random":
			orderedList = shuffleArray(orderedList, { copy: true });
			break;
		case "reverse":
			orderedList = [...orderedList].reverse();
			break;
	}
	return orderedList;
};

export const getDifficults = (state: RootState) => {
  const { difficults, originList } = state.words[state.words.actualSpace];
  return originList.filter(i => difficults.includes(i.id));
}