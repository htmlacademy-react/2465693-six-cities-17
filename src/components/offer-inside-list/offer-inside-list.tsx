import OfferInsideItem from '../offer-inside-item/offer-inside-item';

type OfferInsideListProps = {
  goods:string[];
}

function OfferInsideList({goods}:OfferInsideListProps):JSX.Element {

  return (
    <ul className="offer__inside-list">
      {goods.map((item)=> <OfferInsideItem key={item} offerInside={item}/>)}
    </ul>
  );
}

export default OfferInsideList;
