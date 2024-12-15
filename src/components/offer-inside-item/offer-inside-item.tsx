type OfferInsideItemProps ={
  offerInside: string;
}

function OfferInsideItem({offerInside}:OfferInsideItemProps):JSX.Element {

  return(
    <li className="offer__inside-item">{offerInside}</li>
  );
}

export default OfferInsideItem;
