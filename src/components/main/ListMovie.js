export default function ListMovie({ movies = [], type = "" }) {
  return (
    <>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              {type === "watched" && (
                <>
                  <p>
                    <span>🎬</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </>
              )}

              {type === "movie" && (
                <p>
                  <span>📅</span>
                  <span>{movie.Year}</span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
