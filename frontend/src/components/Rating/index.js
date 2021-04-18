import React from 'react';
import PropTypes from 'prop-types';
import getRatingStarsClass from './getRatingStarClass';
import styles from './Rating.module.scss';

export default function Rating(props) {
  const { rating, reviewsNum } = props;
  return (
    <>
      <div className={styles.Rating}>
        <span><i className={getRatingStarsClass(rating, 1)} /></span>
        <span><i className={getRatingStarsClass(rating, 2)} /></span>
        <span><i className={getRatingStarsClass(rating, 3)} /></span>
        <span><i className={getRatingStarsClass(rating, 4)} /></span>
        <span><i className={getRatingStarsClass(rating, 5)} /></span>
        <span>{` ${reviewsNum} Reviews`}</span>
      </div>
    </>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewsNum: PropTypes.number.isRequired,
};
