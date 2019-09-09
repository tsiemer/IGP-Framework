import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navigation from './Navigation'
import '../../stylesheets/main.scss'



export default props => (
  <StaticQuery
    query={graphql`
      {
        prismic {
          allNavigations{
             edges{
              node{
                display_name
                logo
                nav{
                  ... on PRISMIC_NavigationNavNav_item {
                    label
                    primary{
                      link{
                        _linkType
                      }
                      label
                    }
                    fields{
                      sub_nav_link{
                        _linkType
                      }
                      sub_nav_link_label
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={ data => <Layout data={ data } { ...props }/> }
  />
)

const Layout = ( props ) => {
  if(typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

	return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Helmet>
      <Navigation data={props.data.prismic.allNavigations}></Navigation>
      <main>
        { props.children }
      </main>
      <Footer/>
    </Fragment>
	)
}
