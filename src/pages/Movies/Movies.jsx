import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searcMovie } from '../../services/moviesApi';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from './Movies.styled';
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const SEARCH_NAME = searchParams.get('query') ?? "";
    const PAGE_NUMBER = searchParams.get('page') ?? 1;
    const [page, setPage] = useState(PAGE_NUMBER);
    const CARD_HEIGHT = 342;

    const { search } = useLocation();

    useEffect(() => {
        if (!search) {
            return;
        }
        async function getMovies() {
            setLoading(true);
            try {
                const movies = await searcMovie(SEARCH_NAME, PAGE_NUMBER);
                if (Number(PAGE_NUMBER) === 1) {
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
    }, [SEARCH_NAME, PAGE_NUMBER, search]);

    useEffect(() => {
        if (movies.length > 0 && Number(page) > 1) {
            window.scrollBy({
                top: CARD_HEIGHT * 2,
                behavior: "smooth"
            });
        }
    }, [movies.length, page]);

    if (!movies) {
        return;
    }

     const onLoadMore = () => {
        setPage(page => page + 1);
        setSearchParams({ query: SEARCH_NAME, page: Number(page) + 1 });
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
                setMovies(movies.results);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
        setSearchParams({ query: searchQuery, page: 1 });
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <SearchBox value={searchQuery} onChange={handleInputChange} />
            </form>
            {loading && <Loader />}
            <MoviesList movies={movies} />
            {movies.length > 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </Container>
    );
}
export default Movies;