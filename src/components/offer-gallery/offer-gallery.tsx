import { MAX_IMAGES_OFFER_COUNT } from '../../const';
import { SelectedRentalOffer } from '../../types/offer';
import GalleryItem from '../gallery-item/gallery-item';

type OfferGalleryProps ={
  chosenOffer: SelectedRentalOffer;
}

function OfferGallery({chosenOffer}:OfferGalleryProps) {

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {chosenOffer.images.slice(0,MAX_IMAGES_OFFER_COUNT).map((item)=> <GalleryItem key={item} src={item}/>) }
      </div>
    </div>
  );
}

export default OfferGallery;
