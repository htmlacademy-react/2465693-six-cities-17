import ReviewItem from '../review-item/review-item';
import { OfferReview } from '../../types/review';
import { sortToDate } from '../../utils';
import { NUMBER_OF_REVIEW } from '../../const';

type ReviewListProps ={
  reviews: OfferReview[];
}

function ReviewList({reviews}:ReviewListProps):JSX.Element {
  const tenReviews = reviews.slice(0, NUMBER_OF_REVIEW);
  const reviewsSort:OfferReview[] = sortToDate(tenReviews);

  return(
    <ul className="reviews__list">
      {reviewsSort.map((review) => (
        <ReviewItem key={review.id} review={review}/>))}
    </ul>


  );
}

export default ReviewList;
