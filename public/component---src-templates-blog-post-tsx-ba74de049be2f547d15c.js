(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),l=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+s+d+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=o.default.createElement(O,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),d):d})),O=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var Q=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,Q=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:R?1:0,transition:Q?"opacity "+b+"ms":"none"},d),C="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},Q&&N,d,A),z={title:t,alt:this.state.isVisible?"":a,style:V,className:f,itemProp:y};if(p){var M=p,D=g(p);return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:D.maxWidth?D.maxWidth+"px":null,maxHeight:D.maxHeight?D.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},o.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),C&&o.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},Q&&N)}),D.base64&&o.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:D.base64,spreadProps:z,imageVariants:M,generateSources:j}),D.tracedSVG&&o.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:D.tracedSVG,spreadProps:z,imageVariants:M,generateSources:v}),this.state.isVisible&&o.default.createElement("picture",null,S(M),o.default.createElement(O,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},D,{imageVariants:M}))}}))}if(m){var H=m,T=g(m),k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete k.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},C&&o.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},Q&&N)}),T.base64&&o.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:z,imageVariants:H,generateSources:j}),T.tracedSVG&&o.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:z,imageVariants:H,generateSources:v}),this.state.isVisible&&o.default.createElement("picture",null,S(H),o.default.createElement(O,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:H}))}}))}return null},t}(o.default.Component);Q.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});Q.propTypes={resolutions:B,sizes:C,fixed:c.default.oneOfType([B,c.default.arrayOf(B)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=Q;t.default=N},FSNe:function(e,t,a){},cZrw:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return y}));var r=a("q1tI"),i=a.n(r),n=a("vOnD"),s=a("oTeT"),d=a("9eSz"),l=a.n(d),o=a("rB5o"),c=n.a.div.withConfig({displayName:"bio__Content",componentId:"sc-137rv77-0"})(["display:flex;margin-bottom:",";"],Object(o.a)(2.5)),u=Object(r.forwardRef)((function(e,t){return i.a.createElement(l.a,Object.assign({},e,{ref:t}))})),A=Object(n.a)(u).withConfig({displayName:"bio__Avatar",componentId:"sc-137rv77-1"})(["border-radius:100%;margin-bottom:0;margin-right:",";min-width:50px;"],Object(o.a)(.5)),f=function(){var e=s.data,t=e.site.siteMetadata.author;return i.a.createElement(c,null,i.a.createElement(A,{fixed:e.avatar.childImageSharp.fixed,alt:t,imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,t),i.a.createElement("br",null),"Software engineer"))},g=a("9Dj+"),p=a("gRv6"),m=a("H8eV"),h=(a("FSNe"),n.a.p.withConfig({displayName:"blog-post__Date",componentId:"sc-1jbsnju-0"})(["display:block;",";margin-bottom:",";margin-top:",";"],Object(o.b)(-.2),Object(o.a)(1),Object(o.a)(-1))),b=n.a.hr.withConfig({displayName:"blog-post__Divider",componentId:"sc-1jbsnju-1"})(["margin-bottom:",";"],Object(o.a)(1)),E=n.a.ul.withConfig({displayName:"blog-post__PostNavigator",componentId:"sc-1jbsnju-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0;"]),y=(t.default=function(e){var t=e.data,a=t.markdownRemark,r=a.excerpt,n=a.frontmatter,s=a.html,d=t.site.siteMetadata.title,l=e.pageContext,o=l.previous,c=l.next;return i.a.createElement(g.a,{location:e.location,title:d},i.a.createElement(m.a,{title:n.title,description:n.description||r}),i.a.createElement(h,null,n.date),i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),i.a.createElement(b,null),i.a.createElement(f,null),i.a.createElement(E,null,i.a.createElement("li",null,o&&i.a.createElement(p.a,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(p.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))},"1763272984")},oTeT:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAdxz+jFdEwt0a6jZ/8QAGhABAQEBAAMAAAAAAAAAAAAAAgEDABMiMv/aAAgBAQABBQLc3xnFHpezLqsWuYjEk9T9nv/EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwEr/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIREFESMUH/2gAIAQEABj8CpenLqsKWtjUCpJlksf/EABkQAAMBAQEAAAAAAAAAAAAAAAABESExQf/aAAgBAQABPyF3ipIkzHWlFhxStCKSb130eVropN7MyGc6z//aAAwDAQACAAMAAAAQ+wAD/8QAGBEAAgMAAAAAAAAAAAAAAAAAARARIUH/2gAIAQMBAT8QBqUwr//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQIBAT8QgsUYv//EAB0QAQADAQACAwAAAAAAAAAAAAEAESExQVFhccH/2gAIAQEAAT8QswpQulPUwwotR81+wrVZ8Q+Fyj016I9igDqhtD91DglJjSZyoODKIsxcA4HDLi3kDwZ//9k=","width":50,"height":50,"src":"/static/9f110218213621ceb6579308015a1dd8/99438/me.jpg","srcSet":"/static/9f110218213621ceb6579308015a1dd8/99438/me.jpg 1x,\\n/static/9f110218213621ceb6579308015a1dd8/aba1d/me.jpg 1.5x,\\n/static/9f110218213621ceb6579308015a1dd8/b315d/me.jpg 2x"}}},"site":{"siteMetadata":{"author":"Yas Ito"}}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-ba74de049be2f547d15c.js.map