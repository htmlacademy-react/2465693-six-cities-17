import { RentalOffer } from '../../types/offer';
import { capitalizeLetter } from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { getRatingWidth } from '../../utils';
import { CardImageSize } from '../../const';

type OfferCardType = {
  offer: RentalOffer;
  cardType: 'cities' | 'favorites';
  onOfferCardMouseEnter?: () => void;
  onOfferCardMouseLeave?: () => void;
};

function OfferCard({ offer, cardType, onOfferCardMouseEnter, onOfferCardMouseLeave }: OfferCardType): JSX.Element {
  const { title, type, price, previewImage, isFavorite, isPremium, rating } = offer;

  return (
    <article className={`${cardType}__card place-card`} onMouseEnter={onOfferCardMouseEnter} onMouseLeave={onOfferCardMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={CardImageSize[cardType].width}
            height={CardImageSize[cardType].height}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingWidth(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeLetter(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
