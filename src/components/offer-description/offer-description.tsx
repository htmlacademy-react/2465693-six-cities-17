import { AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import { SelectedRentalOffer } from '../../types/offer';
import { capitalizeLetter, getRatingWidth } from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import FormComment from '../form-comment/form-comment';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferHost from '../offer-host/offer-host';
import OfferInsideList from '../offer-inside-list/offer-inside-list';
import ReviewList from '../review-list/review-list';

type OfferDescriptionProps ={
  selectedOffer: SelectedRentalOffer;
}

function OfferDescription({selectedOffer}:OfferDescriptionProps) {
  const reviews = useAppSelector((state)=>state.reviews);
  const isAuthorization = useAppSelector((state)=>state.authorizationStatus);

  return (
    <>
      <OfferGallery selectedOffer={selectedOffer}/>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {selectedOffer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {selectedOffer.title}
            </h1>
            <BookmarkButton isFavorite={selectedOffer.isFavorite} pageType={'offer'}/>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${getRatingWidth(selectedOffer.rating)}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalizeLetter(selectedOffer.type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {selectedOffer.bedrooms} {selectedOffer.bedrooms < 2 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer.maxAdults } {selectedOffer.maxAdults < 2 ? 'Adult' : 'Adults'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{selectedOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <OfferInsideList goods={selectedOffer.goods}/>
          <OfferHost host={selectedOffer.host} description={selectedOffer.description}/>

          <section className="offer__reviews reviews">
            <ReviewList reviews={reviews}/>
            {(isAuthorization === AuthorizationStatus.Auth && selectedOffer.id) && <FormComment offerId={selectedOffer.id}/>}

          </section>
        </div>
      </div>
    </>
  );
}

export default OfferDescription;
