const KEY = "d0a76428e2f6028499764394d2b5336e";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
    const data = await res.json();
    return data.results;
}

export async function getMovieById(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
    const data = await res.json();
    return data;
}
    
export async function getCredits(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`);
    const data = await res.json();
    return data;
}

export async function getReviews(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`);
    const data = await res.json();
    return data;
}

export async function searcMovie(query) {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
}