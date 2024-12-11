import { ChangeEvent, useState } from 'react';
import { FormStateType, Ratings } from '../../types/form-comment';
import FormRating from './components/form-rating';
import { ComentsLenght } from '../../const';

const INITIAL_STATE_FORM: FormStateType = {
  rating: 0,
  review: '',
};

const ratings: Ratings = [
  [1, 'terribly'],
  [2, 'badly'],
  [3, 'not bad'],
  [4, 'good'],
  [5, 'perfect'],
];

function FormComment():JSX.Element{
  const [formData, setFormData] = useState<FormStateType>(INITIAL_STATE_FORM);

  const fieldChangeHandle = (name: string, value: number | string) => {
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (evt:ChangeEvent<HTMLFormElement>)=>{
    evt.preventDefault();
    evt.currentTarget.reset();
    setFormData(INITIAL_STATE_FORM);
  };


  return(
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
      Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratings.map(([value, title]) => (
          <FormRating key={value} value={value} title={title} fieldChangeHandle={fieldChangeHandle}/>
        )
        )}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(({currentTarget}) => {
          fieldChangeHandle(currentTarget.name, currentTarget.value);
        })}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            (formData.review.length <= ComentsLenght.MIN || formData.review.length >= ComentsLenght.MAX) || formData.rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
