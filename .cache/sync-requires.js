const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/home/yasuhiro/develop/my-blog/src/templates/blog-post.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/yasuhiro/develop/my-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/yasuhiro/develop/my-blog/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/yasuhiro/develop/my-blog/src/pages/index.tsx")))
}

