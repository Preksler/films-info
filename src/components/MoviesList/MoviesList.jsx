import PropType from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieImage, MovieName } from "./MoviesList.styled";
import NoPoster from "../../images/no-poster.jpg";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
            {movies.map(movie => (
                <CardWrapper key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.poster_path ? (
                            <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="200" />
                        ) : (
                            <MovieImage src={NoPoster} alt={movie.title} width="200" />
                        )}
                        <MovieName>{movie.title}</MovieName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    );
};

MoviesList.propTypes = {
    movies: PropType.arrayOf(PropType.shape({
        id: PropType.number.isRequired,
        title: PropType.string.isRequired,
        poster_path: PropType.string.isRequired,
    })).isRequired,
}