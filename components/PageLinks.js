import React from 'react'
import { Link } from "gatsby"
import { RichText, Date } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'


const PageSummary = ({ page }) => {
  
  let pageDate = Date(page.date);
  pageDate = pageDate ? 
    new Intl.DateTimeFormat('en-US', {
      month: 'short', 
      day: '2-digit', 
      year: 'numeric'
    }).format(pageDate) :
    '';

  const defaultTitle = "Untitled"
  
  return (
    <div className="page-summary" key={ page.id } >
      <h2>
        <Link to={ linkResolver(page._meta) }>
          { RichText.asText(page.title).length !== 0 ? RichText.asText(page.title) : defaultTitle }
        </Link>
      </h2>
      <p className="blog-page-meta">
        <time>{ pageDate }</time>
      </p>
    </div>
  );
}

export default ({ pages }) => {
  if(!pages) return null;

  
  return(
    <div className="blog-pages container">
      {pages.map((page) => {
        // console.log(page);
        return <PageSummary page={ page.node } key={ page.node._meta.id }/>
      })}
    </div>
  )
}
