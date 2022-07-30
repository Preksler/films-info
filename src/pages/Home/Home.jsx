import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            getTrendingMovies().then(movies => setMovies(movies));
        } catch (error) {
            console.log(error);
        }
    }, []);

    if (!movies) {
        return;
    }
    
    return (
        <MoviesList movies={movies} />
    );
}
export default Home;