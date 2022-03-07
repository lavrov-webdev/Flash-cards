import { CardType } from '../types';

const text = `
stretching - растяжение
rarely - редко
Is it next to the river? - это рядом с рекой?
renovation - ремонт
connected to art - связанный с искусством

cathedral - собор
temple - храм

works - завод
partially - частично
feels like truth - похоже на правду
sign - знак, подпись
describe - описать
all of them - они все
worst - худший
in childhood (as a child) - в детстве 
admire - восхищаться
main character - главный персонаж 
countryside - деревня, сельская местность
look around - осмотреться
different perspective - другая точка зрения

poor - бедный
poor areas - бедные районы
poverty- бедность

happier than - счастливее чем 
pay attention - обращать внимание

it depends - по-разному 
it depends on - это зависит от тебя

mostly - главным образом

thick - толстый (книга)
thin - тонкий

spicy - пряный
archaic jobs - архаичные работы
citizenship - гражданство
hardworking - трудолюбивый
for now - на данный момент, теперь
independently - независимо, самостоятельно

match - матч, соответствовать
suit - костюм, соответствовать

percent - процент
retry - попробовать снова
describe - описать
I don’t care - мне все равно
especially - особенно
enough - достаточно
convenience - удобство, комфорт
pair - пара
combine - совместить
parcel - посылка
one of them - один из них
character - характер
doesn’t match - не совпадает
one and a half hour - полтора часа
there were - там были
take a picture - сфотографировать
dumplings - пельмени
plot - участок

who - кто, который (уточняем инф о людях)
which - который (информации о предметах, явления или неизвестных животных)
that - который  (с людьми, животными и предметами) всегда можно ставить

changes all the time - все время меняется
to take a break from his work - отдохнуть от работы
citations - цитаты
recall - отзыв
It doesn’t matter - это не имеет значения
give away - отдать
scared - испуганный
they say that - говорят, что…
dried fruits - сухофрукты
raisin - изюм
straw - солома
pear - груша
greens - зелень
plant - растение
soon - скоро
pumpkin seed - тыквенное семечко
arrange - договориться
`;

let list: CardType[] = text.split('\n').map((item, id) => ({
  en: item.split(' - ')[0],
  rus: item.split(' - ')[1],
  id
})).filter(i => i.rus && i.en);

export default list;