import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) =>
  <div className="quote-section" style={{width: '100vw', height: '500px', backgroundImage: `url("${slice.primary.portrait_author !== null ? slice.primary.portrait_author.url : ' ' }")`}}>
    <h2> { RichText.asText(slice.primary.quote) } </h2>
    <br/>
    <p>- {slice.primary.name_of_the_author[0].text}</p>
  </div>



// Have staff in shared - depending on the site they are going too would display specific content ( IG, IV, IS, IC, IP )