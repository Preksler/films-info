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

    function getAvatarPatch(avatar) {
        if (!avatar) {
            return NoPhoto;
        }
    
        if (avatar.length > 40) {
            const avatarImg = avatar.slice(1);
            return avatarImg;
        } 

        if (avatar.length < 40) {
            return `https://image.tmdb.org/t/p/w500${avatar}`;
        }
    }

    function readMore(text) {
        if (text.length > 500) {
            return text.slice(0, 500) + "...";
        }
        return text;
    }

    return (
        <Container>
            {movie.results.length > 0 ? (
            <>
                {movie.results.map(({ id, author, content, author_details: {avatar_path} }) => (
                    <ReviewWrapper key={id}>
                        <AutorName>{author}</AutorName>
                        <ContentWrapper>
                            <Avatar src={getAvatarPatch(avatar_path)} alt={author} />
                            <AutorContent>{readMore(content)}</AutorContent>
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