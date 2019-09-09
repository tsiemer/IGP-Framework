import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts' 
import { Blade, Text, StaffMember, Carousel, Quote, CardView, ParallaxBlade } from '../components/slices'
import parallaxScrolling from '../javascript/scrolling-effect';


export const query = graphql`
{
  prismic{
    allBlog_homes{
      edges{
        node{
            _meta{
                id
                type
            }
            headline
            description
            image
            header_button {
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
            header_button_text
        
          body{
            ... on PRISMIC_Blog_homeBodyBlade{
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
                text_alignment
                code

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

            ... on PRISMIC_Blog_homeBodyStaff_member{
              type
              label

              primary{
                section_title
                blade_background_color
              }

              fields{
              	full_name  
                job_title
                staff_image
                bio
              }
            }

            ... on PRISMIC_Blog_homeBodyCard_view{
              type
              label

              fields{
              	card_title  
                card_icon
              }
            }

            ... on PRISMIC_Blog_homeBodyCarousel{
              type
              label

              primary{
                title
                background_color
              }

              fields{
                image
                content
                title
                image_side
              }
            }

            ... on PRISMIC_Blog_homeBodyQuote{
              type
              label

              primary{
                quote
                portrait_author
                name_of_the_author
              }
            }

            ... on PRISMIC_Blog_homeBodyParallax_blade{
              type
              label

              primary{
                title
                content
                bubble_one
                bubble_two
                bubble_three
                bubble_four
                bubble_five
                bubble_six
                bubble_seven
                bubble_eight
                bubble_nine
                bubble_ten
                bubble_eleven
                bubble_twelve
                bubble_thirteen
              }
            }
          }
        }
      }
    }
  }
}
`


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

        case 'card_view' : return (
          <div key={ index }>
            { <CardView slice={ slice } /> }
          </div>
        )

        case 'quote' : return (
          <div key={ index }>
            { <Quote slice={ slice } /> }
          </div>
        )

        case 'parallax_blade' : return (
          <div key={ index }>
            { <ParallaxBlade slice={ slice } /> }
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

const PageBody = ({ page }) => {
  return (
    <div className="container">
      <script src={parallaxScrolling}></script>
      <div className="Homepage-Heading" style={{width: '100vw', height: '700px', backgroundImage: `url("${page.image.url}")`}}>
        <h1> { page.headline[0].text }  </h1>
        <p> { page.description[0].text }  </p>
      </div>

      <PageSlices slices={ page.body } />
    </div>
  )
}

export default (props) => {
  return(
    <Layout>
      <PageBody page={ props.data[0].node } />
    </Layout>
  )
}