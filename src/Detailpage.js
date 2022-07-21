import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from "react-player";
import { useTranslation } from 'react-i18next';
const API_IMG = "https://image.tmdb.org/t/p/w400/";
const API_Video = "https://www.youtube.com/watch?v=";
const API_Backdrop = "https://image.tmdb.org/t/p/original/";
var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
const Detailpage = (props) => {
    const { t } = useTranslation();
    const eachid = useParams().id;
    const [detail,setDetail] = useState([]);
    const [genres,setGenres] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${eachid}?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US`)
        .then((res) => res.json())
        .then(data => {
            setDetail(data)
            setGenres(data.genres)
        })
    },[t])
    const [director, setDirector] = useState("");
    const [stars, setStars] = useState([]);
    function finddirector(detail){
        const crew = [detail.crew];
        for (let i=0; i<Object.keys(crew[0]).length;i++){
          const job = String(crew[0][i].job);
          if (job =="Director"){
            const name = String(crew[0][i].name);
            return name;
          }
        }
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${eachid}/credits?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US`)
        .then((res) => res.json())
        .then(data => {
            setDirector(finddirector(data))
            setStars(data.cast.slice(0,5))
        })
    },[t])

    const[videos,setVideos] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${eachid}/videos?api_key=1ebbd41194eda75f56723678e6ba5aaf&language=${t("lang")}-US`)
        .then((res) => res.json())
        .then(data => {
            setVideos(data.results.slice(0,5))
        })
    },[t])

    const[photos,setPhotos] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${eachid}/images?api_key=1ebbd41194eda75f56723678e6ba5aaf`)
        .then((res) => res.json())
        .then(data => {
            setPhotos(data.backdrops.slice(0,10))
        })
    },[])

    const[reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${eachid}/reviews?api_key=1ebbd41194eda75f56723678e6ba5aaf`)
        .then((res) => res.json())
        .then(data => {
            setReviews(data.results)
        })
    },[])
    
    return (
        <div className="content">
            <Container >
                <Row className='dleftin'>
                    <Col>
                        <h1>{detail.title}</h1>
                        <span>{detail.release_date} / </span>
                        <span> {t("Runtime")}: {detail.runtime} {t("min")} </span>
                        <div>
                        <img src={API_IMG+detail.poster_path}></img>
                        </div>
                    </Col>
                    <Col>
                        <h1 className='ratescore'> {detail.vote_average}</h1>
                        <h5 className='info'>{t("Director")}: {director}</h5>
                        <h5 className='info'>
                            {t("Category")}: {genres.map((genre) => (
                                <span key={genre.id} className="listspan">{genre.name} </span>
                            ))}
                        </h5>
                        <h5 className='info'>
                            {t("Stars")}: {stars.map((star) => (
                                <span key={star.id} className="listspan">{star.name} </span>
                            ))}
                        </h5>
                        <h5 className='detailin'>{t("Summary")}: {detail.overview}</h5>
                        <div>
                            <span className='ratespan'>{t("Rate and Review")}:</span> 
                            <span className='reviewscore'>
                            <input className='ratebox' placeholder=''></input> /10</span>
                            <div>
                                <input className='comment' placeholder='Comments'></input>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <h1 className='detailhead'> {t("Videos")} </h1>
            <Slider {...settings}>
                {videos.map((each)=>
                <ReactPlayer key={each.id}  url={API_Video+each.key}></ReactPlayer>
                )}
            </Slider>
            <h1 className='detailhead'> {t("Photos")} </h1>
            <Slider {...settings}>
                {photos.map((each)=>
                <img key={each.id}  src={API_Backdrop+each.file_path} style={{ width: 500 }}></img>
                )}
            </Slider>
            <h1 className='detailhead'> {t("User Reviews")} </h1>
            {reviews.map((each) => 
            <div key={each.id} className="userreview">
                <h4> {t("Username")}: {each.author}</h4>
                <p> {each.content} </p>
            </div>
            )}
        </div>
    );
}

export default Detailpage;