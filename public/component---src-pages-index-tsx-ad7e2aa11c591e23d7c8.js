(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,n){"use strict";n.r(t);var a=n("oOPG"),o=n("q1tI"),i=n.n(o),r=n("9Dj+"),s=n("H8eV"),c=n("wx14"),l=n("Ff2n"),d=n("iuhU"),m=n("kKAo"),g=n("H2TA"),p=o.forwardRef((function(e,t){var n=e.classes,a=e.className,i=e.raised,r=void 0!==i&&i,s=Object(l.a)(e,["classes","className","raised"]);return o.createElement(m.a,Object(c.a)({className:Object(d.a)(n.root,a),elevation:r?8:1,ref:t},s))})),f=Object(g.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p),u=n("R/WZ"),x=o.forwardRef((function(e,t){var n=e.classes,a=e.className,i=e.component,r=void 0===i?"div":i,s=Object(l.a)(e,["classes","className","component"]);return o.createElement(r,Object(c.a)({className:Object(d.a)(n.root,a),ref:t},s))})),y=Object(g.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(x),b=n("gRv6"),w=n("vOnD"),v=n("wb2y"),h=Object(w.a)(b.a).withConfig({displayName:"blog-summary__StyledLink",componentId:"sc-1s8uxo8-0"})(["font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;color:#65ace4;font-weight:bold;box-shadow:none;"]),j=w.a.p.withConfig({displayName:"blog-summary__StyledDesc",componentId:"sc-1s8uxo8-1"})(["font-size:12px;color:gray;margin-top:6px;margin-bottom:6px;"]),E=Object(u.a)({root:{height:160}}),S=function(e){var t=E(),n=e.slug,a=e.title,o=e.date,r=e.description,s=e.excerpt;return i.a.createElement(f,{className:t.root,variant:"outlined"},i.a.createElement(y,null,i.a.createElement("div",null,i.a.createElement(h,{to:n},a)),i.a.createElement("div",null,i.a.createElement("small",null,o)),i.a.createElement(v.a,null),i.a.createElement(j,{dangerouslySetInnerHTML:{__html:r||s}})))},O=[0,1,2,3,4,5,6,7,8,9,10],k=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var N=o.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,i=e.alignItems,r=void 0===i?"stretch":i,s=e.classes,m=e.className,g=e.component,p=void 0===g?"div":g,f=e.container,u=void 0!==f&&f,x=e.direction,y=void 0===x?"row":x,b=e.item,w=void 0!==b&&b,v=e.justify,h=void 0===v?"flex-start":v,j=e.lg,E=void 0!==j&&j,S=e.md,O=void 0!==S&&S,k=e.sm,C=void 0!==k&&k,N=e.spacing,I=void 0===N?0:N,M=e.wrap,W=void 0===M?"wrap":M,G=e.xl,R=void 0!==G&&G,z=e.xs,B=void 0!==z&&z,D=e.zeroMinWidth,H=void 0!==D&&D,J=Object(l.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),U=Object(d.a)(s.root,m,u&&[s.container,0!==I&&s["spacing-xs-".concat(String(I))]],w&&s.item,H&&s.zeroMinWidth,"row"!==y&&s["direction-xs-".concat(String(y))],"wrap"!==W&&s["wrap-xs-".concat(String(W))],"stretch"!==r&&s["align-items-xs-".concat(String(r))],"stretch"!==a&&s["align-content-xs-".concat(String(a))],"flex-start"!==h&&s["justify-xs-".concat(String(h))],!1!==B&&s["grid-xs-".concat(String(B))],!1!==C&&s["grid-sm-".concat(String(C))],!1!==O&&s["grid-md-".concat(String(O))],!1!==E&&s["grid-lg-".concat(String(E))],!1!==R&&s["grid-xl-".concat(String(R))]);return o.createElement(p,Object(c.a)({className:U,ref:t},J))})),I=Object(g.a)((function(e){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return O.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(C(o,2)),width:"calc(100% + ".concat(C(o),")"),"& > $item":{padding:C(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};k.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(N),M=n("ZBNC"),W=n("Ji2X"),G=Object(u.a)((function(e){return Object(M.a)({root:{flexGrow:1}})}));t.default=function(e){var t=a.data,n=i.a.useState(2)[0],o=G(),c=t.site.siteMetadata.title,l=t.allMarkdownRemark.edges;return i.a.createElement(r.a,{location:e.location,title:c},i.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(W.a,{maxWidth:"lg"},i.a.createElement(I,{container:!0,className:o.root,spacing:2},i.a.createElement(I,{item:!0,xs:12},i.a.createElement(I,{container:!0,spacing:n},l.map((function(e){var t=e.node,n=t.frontmatter,a=t.fields;return i.a.createElement(I,{key:a.slug,item:!0,xs:12,sm:6,lg:4},i.a.createElement(S,{slug:a.slug,title:n.title||a.slug,excerpt:t.excerpt,date:n.date,description:n.description}))})))))))}},oOPG:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Yasuhiro\'s blog"}},"allMarkdownRemark":{"edges":[{"node":{"excerpt":"If you don\'t set custom domain, the URL will be something like https://amazing-nobel-819f94.netlify.app. You can use original domain name. I…","fields":{"slug":"/custom-domain/"},"frontmatter":{"date":"July 12, 2020","title":"Use original URL on Netlify","description":"How to set original URL"}}},{"node":{"excerpt":"Installing a plugin Adding plugin to gatsby-config.js You might be better to put \\"gatsby-remark-code-buttons\\" before \\"gatsby-remark-prismjs…","fields":{"slug":"/copy-icon-code/"},"frontmatter":{"date":"July 11, 2020","title":"How to add copy icon to code blocks of markdown for Gatsby with Typescript","description":"I am going to tell you how to add copy icon to code block and apply a style."}}},{"node":{"excerpt":"It\'s easy to deploy Gatsby with Typescript to Netlify. You just need to follow the steps below: Getting gatsby cli and starter kid Creating…","fields":{"slug":"/gatsby-netlify-ts/"},"frontmatter":{"date":"July 10, 2020","title":"Deploy Gatsby with Typescript to Netlify","description":"How to deploy Gatsby with Typescript to Netlify"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ad7e2aa11c591e23d7c8.js.map