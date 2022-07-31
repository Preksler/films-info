import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            try {
                const movies = await getTrendingMovies();
                setMovies(movies);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, []);

    if (!movies) {
        return;
    }
    
    return (
        <>
            {loading && <Loader />}
            <MoviesList movies={movies} />
        </>
    );
}
export default Home;