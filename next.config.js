/* eslint-disable */
const withSize = require("next-size");
const withSass = require("@zeit/next-sass");

module.exports = withSize(
  withSass({
    exportPathMap: async function(defaultPathMap) {
      return {
        "/": { page: "/" }
        // '/about': { page: '/about' },
        // '/readme.md': { page: '/readme' },
        // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
      };
    }
  })
);
