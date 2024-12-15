import { ONE_STAR_RATING } from './const';
import { OfferReview } from './types/review';

//Функция возвращающая слово с заглавной буквы
const capitalizeLetter = (word: string) => word[0].toUpperCase() + word.slice(1);

//Функция расчета значения ширины рэйтинга
const getRatingWidth = (value: number) => Math.round(value) * ONE_STAR_RATING;

//Функция преобразования формата даты
const getDateFormat = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const option: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };

  const formatedDate = date.toLocaleDateString('en-US', option);
  return formatedDate;
};

//сортировка массива объектов по дате
const sortToDate = (unSortedArrey:OfferReview[]) => {
  const sortedArray = unSortedArrey.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedArray;
};

export { capitalizeLetter, getRatingWidth, getDateFormat, sortToDate };
