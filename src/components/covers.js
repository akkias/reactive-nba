import React from 'react';
import Slider from "react-slick";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const generateCover = ({slides}) => {
  if(slides) {
    return (
      <Slider {...settings}>
        {slides.map(function(item){
            return (
              <div key={item.id}>
                <div className="item_slider" 
                    style={{background:`url(/images/covers/${item.cover})`}}>
                    <div className="caption">
                        <h4>{item.topic}</h4>
                        <p>{item.title}</p>
                    </div>
                </div>
              </div>
            )  
        })}
      </Slider>
    )
  }
}

const Covers = (props) => {
  return(
      <div>
          {generateCover(props)}
      </div>
  )
}

export default Covers;