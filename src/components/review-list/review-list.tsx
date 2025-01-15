import ReviewItem from '../review-item/review-item';
import { OfferReview } from '../../types/review';
import { sortToDate } from '../../utils';
import { MAX_NUMBER_OF_VISIBLE_REVIEW } from '../../const';

type ReviewListProps ={
  reviews: OfferReview[];
}

function ReviewList({reviews}:ReviewListProps):JSX.Element {
  const reviewsSorted = sortToDate([...reviews]);
  const visibleReviews = reviewsSorted.slice(0, MAX_NUMBER_OF_VISIBLE_REVIEW);

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
