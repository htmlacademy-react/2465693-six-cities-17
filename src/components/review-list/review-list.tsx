import ReviewItem from '../review-item/review-item';
import { OfferReview } from '../../types/review';
import { useAppSelector } from '../../hooks';
import { getVisibleReviews } from '../../store/reviews/reviews-selector';

type ReviewListProps ={
  reviews: OfferReview[];
}

function ReviewList({reviews}:ReviewListProps):JSX.Element {
  const visibleReviews = useAppSelector(getVisibleReviews);

  return(
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {visibleReviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>))}
      </ul>
    </>
  );
}

export default ReviewList;
