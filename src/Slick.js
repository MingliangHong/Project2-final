import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const responsive  = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
}
function Slick(list) {
    return (
    <Carousel className="carousel" responsive={responsive}>
      {/* <h1>h1</h1>
      <h1>h1</h1>
      <h1>h1</h1>
      <h1>h1</h1>
      <h1>h1</h1> */}
            {list.map((Val) => {
                return (
                  <h1>1</h1>
                    // <div className="card" key={Val.id}>
                    //   <h3>{Val.titel}</h3>
                    //   <h3>{Val.vote_average}</h3>
                    // </div>
                );
            })}
    </Carousel>
    );
}
export default Slick;