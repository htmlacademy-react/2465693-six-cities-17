import { useEffect} from 'react';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { NUMBER_NEARBY_OFFER} from '../../const';
import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';
import { fetchOfferAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import OfferDescription from '../../components/offer-description/offer-description';
import NearPlaces from '../../components/near-places/near-places';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const selectedOffer = useAppSelector((state) =>state.selectedOffer);
  const nearByOffers = useAppSelector((state) =>state.nearPlaces);
  const nearPlacesOffers = nearByOffers.slice(0, NUMBER_NEARBY_OFFER);
  const isOfferLoadingStatus = useAppSelector((state)=>state.isOfferLoading);
  const isNearPlacesLoadingStatus = useAppSelector((state)=>state.isNearbyLoading);
  const isReviewsLoadingStatus = useAppSelector((state)=>state.isReviewsLoading);

  useEffect(() =>{
    if (id) {
      dispatch(fetchOfferAction(id));
    }
  },[id, dispatch]);

  if (!selectedOffer || isOfferLoadingStatus || isNearPlacesLoadingStatus || isReviewsLoadingStatus) {
    return (
      <LoadingPage />
    );
  }

  const offers = [...nearByOffers.slice(0, NUMBER_NEARBY_OFFER), selectedOffer];

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Предложение</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDescription selectedOffer={selectedOffer}/>
          <Map className={'offer__map'} offers={offers} activeOfferCardId={selectedOffer.id}/>
        </section>
        <NearPlaces nearPlacesOffers={nearPlacesOffers}/>
      </main>
    </div>
  );
}

export default OfferPage;
