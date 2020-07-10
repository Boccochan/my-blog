// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-tsx": () => import("/home/yasuhiro/develop/my-blog/src/templates/blog-post.tsx" /* webpackChunkName: "component---src-templates-blog-post-tsx" */),
  "component---cache-dev-404-page-js": () => import("/home/yasuhiro/develop/my-blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("/home/yasuhiro/develop/my-blog/src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("/home/yasuhiro/develop/my-blog/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/yasuhiro/develop/my-blog/.cache/data.json")

