import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';
import { BackLink } from '../../components/BackLink/BackLink';
import {
  Container,
  MovieImage,
  MovieName,
  MovieDescription,
  MovieText,
  Wrapper,
  AdditionalList,
  AdditionalText,
  AdditionalLink
} from '../MovieInfo/MovieInfo.styled';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    try {
      getMovieById(movieId).then(movie => setMovie(movie));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (!movie) {
    return;
  }
  
  return (
    <main>
      {movie && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Container>
                <div>
                  <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="300" />
                </div>
                <div>
                  <MovieName>{movie.title} ({new Date(movie.release_date).getFullYear()})</MovieName>
                  <MovieText>User Score: {Math.round((movie.vote_average) * 10)}% </MovieText>
                  <MovieText>Overview</MovieText>
                  <MovieDescription>{movie.overview}</MovieDescription>
                  <MovieText>Ganres</MovieText>
                  <MovieDescription>{movie.genres.map(genre => (genre.name + ' '))}</MovieDescription>
                </div>
              </Container>
            </Suspense>
            <Wrapper>
              <AdditionalText>Additional information</AdditionalText>
              <AdditionalList>
                <AdditionalLink to="cast">Cast</AdditionalLink>
                <AdditionalLink to="reviews">Reviews</AdditionalLink>
              </AdditionalList>
            </Wrapper>
        </div>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
export default MovieInfo;