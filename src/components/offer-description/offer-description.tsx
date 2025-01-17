import { AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/auth/auth-selector';
import { selectReviews } from '../../store/reviews/reviews-selector';
import { SelectedRentalOffer } from '../../types/offer';
import { capitalizeLetter, getRatingWidth } from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import FormComment from '../form-comment/form-comment';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferHost from '../offer-host/offer-host';
import OfferInsideList from '../offer-inside-list/offer-inside-list';
import ReviewList from '../review-list/review-list';

type OfferDescriptionProps ={
  chosenOffer: SelectedRentalOffer;
}

function OfferDescription({chosenOffer}:OfferDescriptionProps) {
  const reviews = useAppSelector(selectReviews);
  const isAuthorization = useAppSelector(selectAuthorizationStatus);

  return (
    <>
      <OfferGallery chosenOffer={chosenOffer}/>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {chosenOffer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {chosenOffer.title}
            </h1>
            <BookmarkButton isFavorite={chosenOffer.isFavorite} pageType={'offer'}/>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${getRatingWidth(chosenOffer.rating)}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{chosenOffer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalizeLetter(chosenOffer.type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {chosenOffer.bedrooms} {chosenOffer.bedrooms < 2 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
                  Max {chosenOffer.maxAdults } {chosenOffer.maxAdults < 2 ? 'Adult' : 'Adults'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{chosenOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <OfferInsideList goods={chosenOffer.goods}/>
          <OfferHost host={chosenOffer.host} description={chosenOffer.description}/>

          <section className="offer__reviews reviews">
            <ReviewList reviews={reviews}/>
            {(isAuthorization === AuthorizationStatus.Auth && chosenOffer.id)
            && <FormComment offerId={chosenOffer.id}/>}

          </section>
        </div>
      </div>
    </>
  );
}

export default OfferDescription;
