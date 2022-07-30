import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searcMovie } from '../../services/moviesApi';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searcParams, setSearchParams] = useSearchParams();
    const SearchName = searcParams.get('query') ?? "";

    const { search } = useLocation();

    useEffect(() => {
        if (!search) {
            return;
        }
        try {
            searcMovie(SearchName).then(movies => setMovies(movies));
        } catch (error) {
            console.log(error);
        }
    }, [SearchName, search]);

    if (!movies) {
        return;
    }

    const handleInputChange = (query) => {
        setSearchQuery(query);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searcMovie(searchQuery).then(movies => setMovies(movies));
        setSearchParams({ query: searchQuery });
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <SearchBox value={searchQuery} onChange={handleInputChange} />
            </form>
            <MoviesList movies={movies} />
        </main>
    );
}
export default Movies;