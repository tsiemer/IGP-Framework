import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
let PrismicDOM = require('prismic-dom');


export default ({ slice }) =>
<>
  <div className={"skew-c " + slice.primary.blade_background_color}></div>
    <div className={"parallax-blade blade " + slice.primary.blade_background_color}>
        
        <div id="bubble-one" className="bubble one sizeOne"> <img src={slice.primary.bubble_one.url}/> </div>
        <div id="bubble-two" className="bubble three sizeThree "> <img src={slice.primary.bubble_two.url}/> </div>
        <div id="bubble-three" className="bubble five sizeFour"> <img src={slice.primary.bubble_five.url}/> </div>
        <div id="bubble-four" className="bubble seven sizeThree"> <img src={slice.primary.bubble_three.url}/> </div>
        <div id="bubble-five" className="bubble nine sizeFour"> <img src={slice.primary.bubble_seven.url}/> </div>
        <div id="bubble-six" className="bubble eleven sizeTwo"> <img src={slice.primary.bubble_eight.url}/> </div>
        <div id="bubble-seven" className="bubble thirteen sizeFour"> <img src={slice.primary.bubble_ten.url}/> </div>

        <div className="content-container">
            <h1>{ RichText.asText(slice.primary.title) }</h1>
            <p> { RichText.asText(slice.primary.content) } </p>
        </div>
        
        <div id="bubble-eight" className="bubble twelve sizeTwo"> <img src={slice.primary.bubble_nine.url}/> </div>
        <div id="bubble-nine" className="bubble six sizeFour"> <img src={slice.primary.bubble_twelve.url}/> </div>
        <div id="bubble-ten" className="bubble four sizeThree"> <img src={slice.primary.bubble_four.url}/> </div>
        <div id="bubble-eleven" className="bubble two sizeOne"> <img src={slice.primary.bubble_thirteen.url}/> </div> 
        <div id="bubble-twelve" className="bubble eight sizeThree"> <img src={slice.primary.bubble_six.url}/> </div>
        <div id="bubble-thirteen" className="bubble ten sizeFour"> <img src={slice.primary.bubble_eleven.url}/> </div>

    
    </div>
  <div className={"skew-cc " + slice.primary.blade_background_color}></div>
</>