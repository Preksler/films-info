import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from "./Home.styled";
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            try {
                const movies = await getTrendingMovies(page);
                if (page === 1) {
                    setMovies(movies.results);
                } else {
                    setMovies((prevMovies) => [...prevMovies, ...movies.results]);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [page]);

    const onLoadMore = () => {
        setPage(page => page + 1);
    }

    if (!movies) {
        return;
    }
    
    return (
        <Container>
            {loading && <Loader />}
            <MoviesList movies={movies} />
            <LoadMoreBtn onLoadMore={onLoadMore} />
        </Container>
    );
}
export default Home;