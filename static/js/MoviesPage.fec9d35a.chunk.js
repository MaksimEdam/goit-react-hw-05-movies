(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{44:function(e,t,a){"use strict";var n=a(42),r=a.n(n),c=a(43),i=a(47),o=a.n(i);function s(e){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get(t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}o.a.defaults.baseURL="https://api.themoviedb.org/3",o.a.defaults.params={api_key:"5c841683b693f172a27449c1327aa5b5"};var l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s("/movie/".concat(t,"/reviews?")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={fetchMovies:s,fetchMovieTrending:function(){return s("/trending/movie/day?")},fetchMovieSearchQuery:function(e){return s("/search/movie?&query=".concat(e))},fetchMovieDescription:function(e){return s("/movie/".concat(e,"?&language=en-US"))},fetchMovieCast:function(e){return s("/movie/".concat(e,"/credits?&language=en-US"))},fetchMovieReviews:l};t.a=f},48:function(e,t,a){e.exports={imageGalleryItem:"moviesList_imageGalleryItem__hjDHj",imageGalleryItemImage:"moviesList_imageGalleryItemImage__1hy5R"}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(0);var n=a(1),r=a(6),c=a(48),i=a.n(c),o=a(2);var s=function(e){var t=e.movie,a=t.id,c=t.title,s=Object(n.f)().pathname,u="/"===s?"/movies":s;return Object(o.jsx)("li",{className:i.a.imageGalleryItem,children:Object(o.jsxs)(r.b,{to:"".concat(u,"/").concat(a),children:[Object(o.jsx)("img",{className:i.a.imageGalleryItemImage,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title,width:"300"}),c]})})}},78:function(e,t,a){e.exports={imageGallery:"MoviesPage_imageGallery__3OEWk"}},83:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a.n(n),c=a(43),i=a(5),o=a(0),s=a(79),u=a(80),l=a(2),f=function(e){var t=e.onSubmit,a=Object(o.useState)(""),n=Object(i.a)(a,2),r=n[0],c=n[1];return Object(l.jsx)("header",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),c("")):Object(u.a)("Enter your query!")},children:[Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)(s.a,{})}),Object(l.jsx)("input",{type:"text",autoComplete:"off",value:r,autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target.value;c(t.toLowerCase())}})]})})},m=a(44),p=a(1),h=a(49),v=a(9),b=a(78),j=a.n(b);t.default=function(){var e=Object(p.g)(),t=Object(o.useState)([]),a=Object(i.a)(t,2),n=a[0],s=a[1],u=Object(o.useState)(""),b=Object(i.a)(u,2),O=b[0],g=b[1],d=Object(o.useState)(!1),y=Object(i.a)(d,2),x=y[0],w=y[1];Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.fetchMovieSearchQuery(O);case 3:t=e.sent,a=t.results,s(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}O&&(w(!0),function(){e.apply(this,arguments)}())}),[O]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{onSubmit:function(t){g(t),e("?query=".concat(t))}}),Object(l.jsx)("button",{onClick:function(){return e("/")},children:"GO BACK"}),x&&Object(l.jsx)(v.a,{}),Object(l.jsx)("ul",{className:j.a.imageGallery,children:n.map((function(e){return Object(l.jsx)(h.a,{movie:e},e.id)}))})]})}}}]);
//# sourceMappingURL=MoviesPage.fec9d35a.chunk.js.map