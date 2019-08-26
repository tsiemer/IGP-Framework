import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layouts' 
import { Blade, Text, StaffMember, Carousel, Quote } from '../components/slices'

// Query for the Page content in Prismic
export const query = graphql`
query PageQuery($uid: String) {
  prismic{
    allPages(uid: $uid){
      edges{
        node{
          _meta{
            id
            uid
            type
          }

          title
          date
        
          body{
            __typename
            ... on PRISMIC_PageBodyBlade{
              type
              label

              primary{
                section_title
                subtitle
                content
                featured_image
                button_color
                image_side
                cta_button_text
                cta_button_color
                blade_background_color

                cta_button{
                  __typename

                  ... on PRISMIC__ExternalLink{
                    url
                  }

                  ... on PRISMIC__FileLink{
                    name
                    url
                    size
                  }

                }
              }
            }

            ... on PRISMIC_PageBodyStaff_member {
              type
              label

              fields{
              	full_name  
                job_title
                staff_image
                bio
              }
            }

            ... on PRISMIC_PageBodyQuote {
              type
              label

              primary{
                quote
                portrait_author
                name_of_the_author
              }
            }
          }
        }
      }
    }
  }
}
`

// Sort and display the different slice options
const PageSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'text': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <Text slice={ slice } /> }
          </div>
        )

        case 'blade': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <Blade slice={ slice } /> }
          </div>
        )

        case 'staff_member' : return (
          <div key={ index }>
            { <StaffMember slice={ slice } /> }
          </div>
        )

        case 'quote' : return (
          <div key={ index }>
            { <Quote slice={ slice } /> }
          </div>
        )

        case 'carousel' : return (
          <div key={ index }>
            { <Carousel slice={ slice } /> }
          </div>
        )

        default: return null;
      }
    })();
    return res;
  })
}

// Display the title, date, and content of the Post
const PageBody = ({ page }) => {
  const titled = page.title.length !== 0 ;

  return (
    <div>
      <div className="container post-header">
        <h1 data-wio-id={ page._meta.id }>
          { titled ? RichText.asText(page.title) : 'Untitled' }
        </h1>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PageSlices slices={ page.body } />
    </div>
  );
}

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismic.allPages.edges.slice(0,1).pop();

  if(!doc) return null;

  return(
    <Layout>
      <PageBody page={ doc.node } />
    </Layout>
  )
}
