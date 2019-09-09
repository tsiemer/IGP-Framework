import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
let PrismicDOM = require('prismic-dom');


export default ({ slice }) =>
<>
  <div className={"skew-c " + slice.primary.blade_background_color}></div>
    <div className={"blade " + slice.primary.blade_background_color}>

    {slice.primary.image_side === "right" 
      ? 
      <>
        <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
            <h3 className={ "subtitle " + slice.primary.cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
            <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
            <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
            {slice.primary.cta_button !== null ? (<a className={"cta_button " + slice.primary.cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>) : " "}
        </div>

        {/* <iframe style="overflow-y:auto; overflow-x:hidden; border-radius:6px; -webkit-border-radius:6px; -moz-border-radius:6px; border:3px solid #00d191; background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -webkit-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -moz-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -o-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -ms-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%); padding: 0 0 21px 0px;" src="https://www.coworker.com/widget-review/4/11399" id="widget01" width="300" height="414" frameborder="0"></iframe> */}
        
        {/* { slice.primary.code !== null ? slice.primary.code[0].text : <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> } */}
      </>
      : 
      <>
        { slice.primary.code !== null ? <p> { slice.primary.code[0].text } </p> : <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> }

        <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
            <h3 className={"subtitle " + slice.primary.cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
            <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
            <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
            {slice.primary.cta_button !== null ? (<a className={"cta_button " + slice.primary.cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>) : " "}
        </div> 
      </>
    }
  </div>
  <div className={"skew-cc " + slice.primary.blade_background_color}></div>
</>