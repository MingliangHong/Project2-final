import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
const Moviecontext = createContext({
    movies:[],
    filterer:[],
    activeGenre: [],
    activeSort: String,
    setSortactive: ()=>{},
    setMovies:()=>{},
    setFiltered:()=>{},
    fetchPopular:()=>{},
    setActiveGenre:()=>{},
    fetchSearch:()=>{},
    fetchNowPlaying:()=>{},
    fetchTopRated:()=>{},
    setLang:()=>{},
});
export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const [activeSort,setActiveSort]=useState();
    const { t } = useTranslation();

    const fetchPopular = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US&page=1`
      );
      const result = await data.json();
      setMovies(result.results);
      setFiltered(result.results);
      setActiveGenre(0);
      setActiveSort("Popular");
    };
  
    const fetchNowPlaying = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US&page=1`
      );
      const movies = await data.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      setActiveGenre(0);
      setActiveSort("Date");
    };
  
    const fetchTopRated = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US&page=1`
      );
      const movies = await data.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      setActiveGenre(0);
      setActiveSort("Rate");
    };
    
    const fetchSearch = async (query) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US&query=${query}&page=1&include_adult=false`
      );
      const movies = await data.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      setActiveGenre(0);
    };
  
    return (
      <Moviecontext.Provider
        value={{
            filtered,
            movies,
            activeGenre,
            setMovies,
            setFiltered,
            fetchPopular,
            setActiveGenre,
            fetchSearch,
            fetchNowPlaying,
            fetchTopRated,
        }}
      >
        { children }
      </Moviecontext.Provider>
    );
}
export default Moviecontext;