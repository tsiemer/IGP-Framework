import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

export default ({ slice }) =>
  <div className="carousel">
    {slice.fields.map(item => {
        return (
            <>
                <div className="carousel_image" style={{backgroundImage: `url(${item.image.url})`}}></div>
                <div>{ RichText.render(item.content, linkResolver, htmlSerializer) }</div>
            </>
        );
    })}
  </div>
