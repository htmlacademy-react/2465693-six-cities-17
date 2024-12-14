
import classNames from 'classnames';
import { BookmarkButtonSize } from '../../const';

type BookmarkButtonProps = {
  isFavorite: boolean;
  pageType: 'place-card' | 'offer';
}

function BookmarkButton ({isFavorite, pageType}:BookmarkButtonProps):JSX.Element {
  const buttonClass = classNames(`${pageType}__bookmark-button`, {[`${pageType}__bookmark-button--active`]:isFavorite}, 'button');

  return (
    <button className={buttonClass} type="button">
      <svg className='place-card__bookmark-icon' width={BookmarkButtonSize[pageType].width} height={BookmarkButtonSize[pageType].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">${isFavorite ? 'In Bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
