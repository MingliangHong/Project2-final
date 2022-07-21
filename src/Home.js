import { useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Each from "./Each";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Moviecontext from "./Moviecontext";
import { useTranslation } from "react-i18next";
const responsive  = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
  }
const Home = () => {
    const {lang} = useContext(Moviecontext);
    const [newmovies, setNewmovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const { t } = useTranslation();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US`)
        .then((res) => res.json())
        .then(data => {
            setNewmovies(data.results)
        })
    },[t])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US`)
        .then((res) => res.json())
        .then(data => {
          setMovies(data.results)
        })
    },[t])

    return (
        <div className="content">
            <div className="typehead">
                <h1>{t("New & upcoming")}</h1>
                <Link to = "/movies" className="more"> {t("More")} </Link>
            </div>
            <Carousel  responsive={responsive}>
                {newmovies.map((each)=>
                <Each key= {each.id}{...each}></Each>)}
            </Carousel>
            <div className="typehead">
                <h1>{t("Popular")}</h1>
                <Link to = "/movies" className="more"> {t("More")} </Link>
            </div>
            <Carousel responsive={responsive}>
                {movies.map((each)=>
                <Each key= {each.id}{...each}></Each>)}
            </Carousel>
        </div>
    );
}
 
export default Home;