export default function getRatingStarsClass(ratingValue, starNum) {
  if (ratingValue >= starNum) {
    return 'fa fa-star';
  }
  if (ratingValue >= (starNum - 0.5)) {
    return 'fa fa-star-half-o';
  }
  return 'fa fa-star-o';
}
