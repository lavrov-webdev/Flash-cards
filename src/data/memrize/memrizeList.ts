import {CardType} from '../../types';
import list1 from "./list1";
import list2 from "./list2";
import list3 from "./list3";

let data: CardType[] = [];

let dataHTML = document.createElement("div")

dataHTML.innerHTML = list1 + list2 + list3;

dataHTML.querySelectorAll('.thing.text-text').forEach((item, index) => {
  let newDataElement: CardType = {
    rus: '',
    en: '',
    id: 0,
  };
  newDataElement.en = item.querySelector('.col_a .text')?.textContent || '';
  newDataElement.rus = item.querySelector('.col_b .text')?.textContent || '';
  if (newDataElement.rus && newDataElement.en) {
    newDataElement.id = index;
    data.push(newDataElement);
  }
});

export default data;
