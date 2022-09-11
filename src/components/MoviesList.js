import Movie from "./Movie";
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../MovieData";
import {MovieFilterContext} from "./../contexts/MovieFilterContext";

function MoviesList() {
  const {
    data: moviesData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data);



  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Movie Data Failed {error}</b>
      </div>
    );
  }


  return (
    <div className="container movies-list">
      <ReactPlaceHolder
        type="media"
        rows={20}
        className="movieslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {moviesData.map(function (movie) {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                onFavoriteToggle={(doneCallback) => {
                  updateRecord(
                    {
                      ...movie,
                      favorite: !movie.favorite,
                    },
                    doneCallback
                  );
                }}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default MoviesList;
