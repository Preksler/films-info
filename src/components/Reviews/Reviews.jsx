import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/moviesApi";
import { Container, ReviewWrapper, ContentWrapper, AutorName, Avatar, AutorContent, NoReviews } from "./Reviews.styled";
import NoPhoto from "../../images/no-photo.jpg";

const Reviews = () => {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        async function getMovieReviews() {
            try {
                const movie = await getReviews(movieId);
                setMovie(movie);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieReviews();
    }, [movieId]);

    if (!movie) {
        return;
    }

    return (
        <Container>
            {movie.results.length > 0 ? (
            <>
                {movie.results.map(review => (
                    <ReviewWrapper key={review.id}>
                        <AutorName>{review.author}</AutorName>
                        <ContentWrapper>
                            <Avatar src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}` : NoPhoto} alt={review.author} />
                            <AutorContent>{review.content}</AutorContent>
                        </ContentWrapper>
                    </ReviewWrapper>
                ))}
            </>
            ) : (
                    <NoReviews>No reviews :(</NoReviews>
            )}
        </Container>
    );
}
export default Reviews;