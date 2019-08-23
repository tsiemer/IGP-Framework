const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./utils/linkResolver');
 
registerLinkResolver(linkResolver);