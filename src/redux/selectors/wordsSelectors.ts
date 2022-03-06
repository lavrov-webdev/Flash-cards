import shuffleArray from "shuffle-array";
import { RootState } from "../";
import { SpaceName } from "../../types";

export const getFilteredWords = (space: SpaceName) => (state: RootState) => {
	const { difficults, originList, order, selectedGroups, onlyDifficult } =
		state.words[space];
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

export const getDifficults = (space: SpaceName) => (state: RootState) => {
  const { difficults, originList } = state.words[space];
  return originList.filter(i => difficults.includes(i.id));
}