import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const Each = ({title,poster_path,vote_average,id}) => {
    return (
        <div className="each">
        <Link className="slicklink" 
        to={{
            pathname:`/detailpage/${id}`,
            state: {id}
        }}>
            <img className="poster" src ={API_IMG+poster_path}></img>
            <h4>{title}</h4>
            <h4>{vote_average}<FcLike/></h4>
        </Link>
        </div>
    );
}
export default Each;