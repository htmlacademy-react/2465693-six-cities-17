import { ONE_STAR_RATING } from './const';

//Функция возвращающая слово с заглавной буквы
const capitalizeLetter = (word: string) => word[0].toUpperCase() + word.slice(1);

//Функция расчета значения ширины рэйтинга
const getRatingWidth = (value: number) => value * ONE_STAR_RATING;

export { capitalizeLetter, getRatingWidth };
