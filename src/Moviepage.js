import React, { useState } from "react";
import Moviefilter from "./Moviefilter";
import { useContext,useEffect } from "react";
import Moviecontext from "./Moviecontext";
import Each from "./Each";
import { useTranslation } from "react-i18next";
const Moviepage = () => {
    const {t} = useTranslation();
    const {
        movies,
        activeSort,
        filtered,
        setMovies,
        setFiltered,
        fetchTopRated,
        fetchNowPlaying,
        fetchPopular,
        setActiveGenre,
    } = useContext(Moviecontext);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US`)
        .then((res) => res.json())
        .then(data => {
          setFiltered(data.results)
          setActiveGenre(0)
        })
    },[t])

    return (
            <div className="content">
                <h1 className="typehead">{t("All Movies")}</h1>
                <h2>{t("Sort by")}</h2>
                <div className="buttongroup">
                    <button 
                    className="button"
                    onClick={() => fetchPopular()}>
                        {t("Popular")}
                    </button>
                    <button 
                    className="button"
                    onClick={() => fetchNowPlaying()}>
                        {t("Now Playing")}
                    </button>
                    <button 
                    className="button"
                    onClick={() => fetchTopRated()}>
                        {t("Top rated")}
                    </button>
                </div>
                <h2>{t("Category")}</h2>
                <Moviefilter></Moviefilter>
                <div className="gridView">
                    {filtered.map((each)=>
                    <Each key= {each.id}{...each}></Each>)}
                </div>
            </div>
    );
}
 
export default Moviepage;