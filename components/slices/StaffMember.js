import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

export default ({ slice }) =>
  <div>
    {/* <div className={"skew-c " + slice.primary.blade_background_color}></div> */}
    <h2 className="staff_member_header">{RichText.asText(slice.primary.section_title, linkResolver, htmlSerializer)}</h2>
    <div  className="staff">
        {slice.fields.map(item => {
            return (
                <div className="staff_member">
                    <div className="staff_member-image" style={{backgroundImage: `url(${item.staff_image.url})`}}></div>
                    <h3>{ item.full_name !== null ? RichText.render(item.full_name, linkResolver, htmlSerializer) : " " }</h3>
                    <span>{ item.job_title !== null ? RichText.render(item.job_title, linkResolver, htmlSerializer) : " " }</span>
                    <p>{ item.bio !== null ? RichText.render(item.bio, linkResolver, htmlSerializer) : " " }</p>
                </div>
            );
        })}
    </div>
    <div className={"skew-cc " + slice.primary.blade_background_color}></div>
  </div>
