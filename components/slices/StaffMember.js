import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

export default ({ slice }) =>
  <div className="staff_member">
    {slice.fields.map(item => {
        return (
            <>
                <div className="staff_member-image" style={{backgroundImage: `url(${item.staff_image.url})`}}></div>
                <h3>{ RichText.render(item.full_name, linkResolver, htmlSerializer) }</h3>
                <span>{ RichText.render(item.job_title, linkResolver, htmlSerializer) }</span>
                {/* <p>{ RichText.render(item.bio, linkResolver, htmlSerializer) }</p> */}
            </>
        );
    })}
  </div>
