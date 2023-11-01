import PropTypes from "prop-types";
function Ratings({ rev, id }) {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <span className="rating rating-sm mr-1">
      {ratings.map((r, idx) =>
        idx + 1 === rev ? (
          <input
            key={idx}
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
        ) : (
          <input
            key={idx}
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
          />
        )
      )}
    </span>
  );
}
Ratings.propTypes = {
  rev: PropTypes.number,
  id: PropTypes.string,
};
export default Ratings;
