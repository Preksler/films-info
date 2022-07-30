import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/moviesApi";
import { Container, ReviewWrapper, AutorName, AutorContent, NoReviews } from "./Reviews.styled";

const Reviews = () => {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        try {
            getReviews(movieId).then(movie => setMovie(movie));
        } catch (error) {
            console.log(error);
        }
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
                        <AutorContent>{review.content}</AutorContent>
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