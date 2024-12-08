
import classNames from 'classnames';

type BookmarkButtonType = {
  isFavorite: boolean;
}

function BookmarkButton ({isFavorite}:BookmarkButtonType):JSX.Element {
  const buttonClass = classNames('place-card__bookmark-button', {'place-card__bookmark-button--active':isFavorite}, 'button');

  return (
    <button className={buttonClass} type="button">
      <svg className='place-card__bookmark-icon' width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">${isFavorite ? 'In Bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
