import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const getDetail = async () => {
    const json = await (await fetch(url)).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log(detail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{detail.title_english}</h1>
          <img src={detail.medium_cover_image} alt={detail.title_english} />
          <h2>{detail.year}</h2>
          <h2>Genre</h2>
          <ul>
            {detail.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <h2>Summary</h2>
          <p>
            {detail.description_full
              ? detail.description_full
              : "There is no registered summary."}
          </p>
          <h2>Rating</h2>
          <span>{detail.rating}</span>
          <h2>Runtime</h2>
          <span>
            {Math.floor(detail.runtime / 60)}H {detail.runtime % 60}M
          </span>
          <h2><a href={detail.url}>Download</a></h2>
        </>
      )}
    </div>
  );
}

export default Detail;
