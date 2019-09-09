import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
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
    },
};


export default ({ slice }) =>
<>
    <div className={"skew-c blue"}></div>
    <div className={"carousel-container " + slice.primary.background_color}>
        <h3 className="carousel-header">{slice.primary.title[0].text}</h3>
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .8"
            transitionDuration={500}
            containerClass="Carousel"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
        >
            {slice.fields.map(item => {
                return (
                    <div className="carousel_item">
                        <img className='carousel_image' src={ item.image !== null ? item.image.url : " " }/>
                        <div>{ item.title !== null ? RichText.render(item.title, linkResolver, htmlSerializer) : " " }</div>
                        <div>{item.content !== null ? RichText.render(item.content, linkResolver, htmlSerializer) : " " }</div>
                    </div>
                );
            })}
        </Carousel>
    </div>
    <div className={"skew-cc blue"}></div>
</>