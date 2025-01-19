import { createSelector } from '@reduxjs/toolkit';
import { MAX_VISIBLE_REVIEW, NameSpace } from '../../const';
import { AppState } from '../../types/state';
import { sortToDate } from '../../utils';

export const selectReviews = (state: AppState) => state[NameSpace.Reviews].reviews;
export const selectReviewsLoading = (state: AppState) => state[NameSpace.Reviews].isReviewsLoading;
export const selectReviewsPosting = (state: AppState) => state[NameSpace.Reviews].isReviewPosting;

export const getVisibleReviews = createSelector(
  [selectReviews],
  (reviews) =>
    sortToDate([...reviews]).slice(0, MAX_VISIBLE_REVIEW)
);

