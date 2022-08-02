import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../services/moviesApi";
import { Container, CastWrapper, CastImage, CastName, CastCharacter } from "./Cast.styled";
import NoPhoto from "../../images/no-photo.jpg";

const Cast = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        async function getMovieCast() {
            try {
                const movie = await getCredits(movieId);
                setMovie(movie);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieCast();
    }, [movieId]);

    if (!movie) {
        return;
    }
    
    return (
        <Container>
            {movie && (
                <>
                    {movie.cast.slice(0, 10).map(cast => (
                        <CastWrapper key={cast.id}>
                            <CastImage src={cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : NoPhoto} alt={cast.name} />
                            <CastName>{cast.name}</CastName>
                            {cast.character ? <CastCharacter>{cast.character}</CastCharacter> : <CastCharacter>No character</CastCharacter>}
                        </CastWrapper>
                    ))}
                </>
            )}
        </Container>
    );
}
export default Cast;