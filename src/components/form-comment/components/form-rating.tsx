type FormRatingType = {
  value: number;
  title: string;
  fieldChangeHandle: (name: string, value: number) => void;
}

function FormRating({value, title, fieldChangeHandle}: FormRatingType):JSX.Element {

  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={({currentTarget}) => fieldChangeHandle(currentTarget.name, value)}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default FormRating;
