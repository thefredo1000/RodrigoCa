module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet'],

  siteMetadata: {
    title: 'I like Google fonts'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Press Start 2P cursive',
          'source sans pro\:300,400,400i,700' // you can also specify font weights and styles
        ]
      }
    }
  ]
}
