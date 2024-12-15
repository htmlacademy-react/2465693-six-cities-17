import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { OfferReview } from '../../types/review';
import { NUMBER_NEARBY_OFFER } from '../../const';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferCard from '../../components/offer-card/offer-card';
import { capitalizeLetter, getRatingWidth } from '../../utils';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import { RentalOffer, SelectedRentalOffer } from '../../types/offer';
import FormComment from '../../components/form-comment/form-comment';
import GalleryItem from '../../components/gallery-item/gallery-item';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';

type OfferPageProps = {
  nearbyOffers: RentalOffer[];
  offersIds: SelectedRentalOffer[];
  reviews: OfferReview[];
}

function OfferPage({nearbyOffers, offersIds, reviews}: OfferPageProps): JSX.Element {
  const {id} = useParams();
  const selectedOffer = offersIds.find((offer) => offer.id === id);

  if (typeof selectedOffer === 'undefined') {
    return <NotFoundPage/>;
  }
  const offerWithoutSelected = nearbyOffers.filter((offer) => offer.id !== id);
  const nearPlacesOffer = offerWithoutSelected.slice(0, NUMBER_NEARBY_OFFER);
  const offers = [...offerWithoutSelected.slice(0, NUMBER_NEARBY_OFFER), selectedOffer];

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Предложения</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedOffer.images.map((item)=> <GalleryItem key={item} src={item}/>) }
            </div>
          </div>
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
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList goods={selectedOffer.goods}/>
              </div>
              <OfferHost host={selectedOffer.host} description={selectedOffer.description}/>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                </h2>

                <ReviewList reviews={reviews}/>
                <FormComment/>

              </section>
            </div>
          </div>
          <Map className={'offer__map'} offers={offers} selectedOffer={selectedOffer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearPlacesOffer.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  cardType='near-places'
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
