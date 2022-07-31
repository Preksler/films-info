import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searcMovie } from '../../services/moviesApi';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searcParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const SEARCH_NAME = searcParams.get('query') ?? "";

    const { search } = useLocation();

    useEffect(() => {
        if (!search) {
            return;
        }
        async function getMovies() {
            setLoading(true);
            try {
                const movies = await searcMovie(SEARCH_NAME);
                setMovies(movies);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [SEARCH_NAME, search]);

    if (!movies) {
        return;
    }

    const handleInputChange = (query) => {
        setSearchQuery(query);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        async function getMovies() {
            setLoading(true);
            try {
                const movies = await searcMovie(searchQuery);
                setMovies(movies);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
        setSearchParams({ query: searchQuery });
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <SearchBox value={searchQuery} onChange={handleInputChange} />
            </form>
            {loading && <Loader />}
            <MoviesList movies={movies} />
        </main>
    );
}
export default Movies;