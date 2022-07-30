import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            try {
                const movies = await getTrendingMovies();
                setMovies(movies);
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
        <MoviesList movies={movies} />
    );
}
export default Home;