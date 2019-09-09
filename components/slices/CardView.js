import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import htmlSerializer from '../../utils/htmlSerializer';
// import { Coffee, Bolt } from '@fortawesome/free-solid-svg-icons';


export default ({ slice }) =>
<>
    <div className={"skew-c "}></div>
        <div className={"cardView blade "}>
            {/* <h1 className="section_title">{RichText.render(slice.primary.section_title, linkResolver, htmlSerializer)}</h1> */}
            
            <div className="cards">
                {slice.fields.map(item => {
                    return (
                        <div className="card" style={{textAlign: "center", fontFamily: "sans-serif"}}>
                            <FontAwesomeIcon icon={["fas", `${item.card_icon[0].text}`]} />
                            <h3>{item.card_title[0].text}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    <div className={"skew-cc "}></div>
</>