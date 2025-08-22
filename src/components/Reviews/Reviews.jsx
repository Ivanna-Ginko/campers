import React from 'react'
import css from './Reviews.module.css'
import starIcon from '../../assets/icons/star.svg'
import { useOutletContext } from 'react-router-dom';


const Reviews = () => {

    const outletContext = useOutletContext();
    const reviews = outletContext?.reviews

    return (
    <ul className={css.reviewsWrapper}>
      {reviews.map((review, index) => (
        <li className={css.reviewItem} key={index}>
          <div className={css.box}>
                <div className={css.avatar}>
                    {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p className={css.reviewerName}>{review.reviewer_name}</p>
                    <div className={css.stars}>
                        {Array.from({ length: review.reviewer_rating }).map((_, i) => (
                        <img key={i} src={starIcon} alt="star" className={css.star} />
                        ))}
                    </div>
                </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews