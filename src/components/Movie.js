import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, img, year, title, genres }) {
  return (
    <div>
      <img src={img} alt={title}></img>
      <h2>{year}</h2>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>
        Genre
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
