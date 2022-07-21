import React,{useState,useEffect} from "react";
import { useContext } from "react";
import Moviecontext from "./Moviecontext";
import Categorylist from "./Categorylist";
import { useTranslation } from "react-i18next";
const Moviefilter = () => {
    const {t} = useTranslation();
    const {
        setActiveGenre,
        activeGenre,
        setFiltered,
        movies,
        filtered,
      } = useContext(Moviecontext);
    
    useEffect(() => {
        if (activeGenre === 0) {
          setFiltered(movies);
        } else {
          const filtered = movies.filter((movie) =>
            movie.genre_ids.includes(activeGenre)
          );
          setFiltered(filtered);
        }
    }, [activeGenre]);
    return (
        <div className="buttongroup">
            {Categorylist.map((genre) => (
                <button
                    key={genre.id}
                    className="button"
                    onClick={() => setActiveGenre(genre.id)}
                >
                    {t(genre.name)}
                </button>
            ))}
        </div>
    );
}
 
export default Moviefilter;