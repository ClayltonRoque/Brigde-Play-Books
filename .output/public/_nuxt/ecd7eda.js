(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5,7],{472:function(t,e,o){var content=o(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(97).default)("2d57ce54",content,!0,{sourceMap:!1})},473:function(t,e,o){"use strict";o(472)},474:function(t,e,o){var l=o(96)((function(i){return i[1]}));l.push([t.i,".play-book-button-save{bottom:1rem;position:absolute;right:.5rem}",""]),l.locals={},t.exports=l},475:function(t,e,o){"use strict";o.r(e);var l=o(0),n=o(136),r=Object(l.c)({__name:"FbButtonSaveBook",props:{book:{type:Object,required:!0}},setup:function(t){var e=t,o=Object(n.a)();return{__sfc:!0,saveBooks:o.saveBooks,alreadyfavorite:o.alreadyfavorite,removeBook:o.removeBook,props:e}}}),c=(o(473),o(69)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c,o=t._self._setupProxy;return e("div",{staticClass:"play-book-button-save mt-2"},[o.alreadyfavorite(o.props.book)?e("button",{staticClass:"button is-brand-red is-align-content-center is-size-6",on:{click:function(t){return o.removeBook(o.props.book)}}},[t._v("\n    Remover\n    "),e("font-awesome-icon",{staticClass:"pl-1",attrs:{icon:"fa-solid fa-heart-circle-xmark"}})],1):e("button",{staticClass:"button is-align-content-center is-size-6",on:{click:function(t){return o.saveBooks(o.props.book)}}},[t._v("\n    Favoritar\n    "),e("font-awesome-icon",{staticClass:"pl-1",attrs:{icon:"fa-solid fa-heart-circle-plus"}})],1)])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,o){t.exports=o.p+"img/no-image.2703cfb.png"},477:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var l=o(25);function n(t){return{imageThumbnail:Object(l.b)((function(){var e,o,l,n;return(null===(e=t.volumeInfo)||void 0===e||null===(o=e.imageLinks)||void 0===o?void 0:o.thumbnail)&&(null===(l=t.volumeInfo)||void 0===l||null===(n=l.imageLinks)||void 0===n?void 0:n.smallThumbnail)}))}}},479:function(t,e,o){var content=o(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(97).default)("330cbc84",content,!0,{sourceMap:!1})},482:function(t,e,o){t.exports=o.p+"img/no-search.3552b23.png"},483:function(t,e,o){"use strict";o(479)},484:function(t,e,o){var l=o(96)((function(i){return i[1]}));l.push([t.i,".play-books-no-page .no-page-content{padding-top:10rem}@media screen and (max-width:768px){.play-books-no-page .no-page-content .no-page{margin:.5rem;text-align:center}}.play-books-no-page .no-page-content .no-page{align-items:center;display:flex;flex-direction:column;justify-content:center}.play-books-no-page .no-page-content .no-page img{opacity:.3}.play-books-no-page .no-page-content .no-page .title{font-weight:700;opacity:.5}.play-books-no-page .no-page-content .no-page .subtitle{opacity:.5}",""]),l.locals={},t.exports=l},486:function(t,e,o){"use strict";o.r(e);var l=[function(){var t=this._self._c;this._self._setupProxy;return t("figure",[t("img",{attrs:{src:o(482)}})])}],n=o(0),r=o(25),c=Object(n.c)({__name:"FbNoPageContent",props:{title:{type:String,required:!0},notfound:{type:String,required:!0}},setup:function(t){var e=t,o=Object(r.h)();return{__sfc:!0,nuxtContext:o,props:e,goToHome:function(){o.redirect("/")}}}}),d=(o(483),o(69)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c,o=t._self._setupProxy;return e("div",{staticClass:"play-books-no-page"},[e("div",{staticClass:"no-page-content"},[e("div",{staticClass:"no-page"},[t._m(0),t._v(" "),"true"===o.props.notfound?e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[e("button",{staticClass:"button is-ghost has-text-brand-blue button-details is-size-6 is-uppercase",on:{click:o.goToHome}},[t._v("\n          Página não encontrada, voltar para home!\n        ")])]):e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("\n        "+t._s(o.props.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("\n        Pesquise e navegue pela lista de livros do Google Play Books\n      ")])])])])}),l,!1,null,null,null);e.default=component.exports},487:function(t,e,o){var content=o(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(97).default)("921f87e0",content,!0,{sourceMap:!1})},490:function(t,e,o){"use strict";o(487)},491:function(t,e,o){var l=o(96)((function(i){return i[1]}));l.push([t.i,".play-books-details-card{border:1px solid #112131}.play-books-details-card:hover{border-color:#00acee}.play-books-details-card .card-header{justify-content:space-between}.play-books-details-card .card-header-title{border-bottom:2px solid #00acee}.play-books-details-card .button-icon{align-items:center;display:flex;height:18px;width:18px}.play-books-details-card .button-details{align-items:center;display:flex}.play-books-details-card .preview{padding:7px 16px}.play-books-details-card .preview:hover{color:#00acee!important;-webkit-text-decoration:underline;text-decoration:underline}.play-books-details-card img{background-position:50%;background-repeat:no-repeat;background-size:cover;border:1px solid #112131;border-radius:10px;height:200px;max-width:150px;transition:all .2s;width:100%}.play-books-details-card img:hover{border-color:#00acee}.play-books-details-card img:disabled{opacity:0;transform:scale(0)}.play-books-details-card img:hover{opacity:1;transform:scale(1.1)}.play-books-details-card .media .media-content{overflow:hidden}@media(max-width:380px){.play-books-details-card .media{flex-wrap:wrap;gap:1rem}}",""]),l.locals={},t.exports=l},495:function(t,e,o){var content=o(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(97).default)("6ad83a70",content,!0,{sourceMap:!1})},497:function(t,e,o){"use strict";o.r(e);var l=o(0),n=o(25),r=o(477),c=Object(l.c)({__name:"FbDeitailsCard",props:{details:{type:Object,required:!0}},setup:function(t){var e=t,o=Object(n.h)().nuxt2Context,l=Object(r.a)(e.details).imageThumbnail;return{__sfc:!0,nuxt2Context:o,props:e,imageThumbnail:l,goToPrev:function(){var t,e=null===(t=o.from)||void 0===t?void 0:t.fullPath;o.redirect(e||"/")}}}}),d=(o(490),o(69)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c,l=t._self._setupProxy;return e("div",{staticClass:"play-books-details-card card is-desktop has-base-profile"},[e("div",{staticClass:"card-content"},[e("header",{staticClass:"card-header pb-2"},[e("button",{staticClass:"button is-ghost has-text-brand-blue button-details is-size-6 is-uppercase",on:{click:l.goToPrev}},[t._v("\n        voltar\n      ")]),t._v(" "),e("a",{staticClass:"preview has-text-brand-blue button-details preview is-size-6 is-uppercase",attrs:{href:l.props.details.volumeInfo.previewLink,target:"_blank"}},[t._v("\n        preview\n      ")])]),t._v(" "),e("header",{staticClass:"card-header mb-4"},[e("p",{staticClass:"title is-size-3 has-text-base-title card-header-title px-0"},[t._v("\n        "+t._s(l.props.details.volumeInfo.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"media mt-5"},[e("div",{staticClass:"media-left mr-5"},[l.imageThumbnail?e("figure",[e("img",{attrs:{src:l.imageThumbnail}})]):e("figure",[e("img",{attrs:{src:o(476)}})])]),t._v(" "),e("div",{staticClass:"media-content"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("Autor")]),t._v(" "),l.props.details.volumeInfo.authors&&l.props.details.volumeInfo.authors.length?e("div",{staticClass:"subtitle has-text-base-subtitle"},[e("p",[t._v(t._s(l.props.details.volumeInfo.authors[0]))])]):e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("authors")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("Editora")]),t._v(" "),l.props.details.volumeInfo.publisher&&l.props.details.volumeInfo.publisher.length?e("div",{staticClass:"subtitle has-text-base-subtitle"},[e("p",[t._v("\n                  "+t._s(l.props.details.volumeInfo.publisher)+"\n                ")])]):e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("publisher")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("\n                Categorias\n              ")]),t._v(" "),l.props.details.volumeInfo.categories&&l.props.details.volumeInfo.categories.length?e("div",{staticClass:"subtitle has-text-base-subtitle"},[e("p",[t._v(t._s(l.props.details.volumeInfo.categories[0]))])]):e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("categories")])])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("Idioma")]),t._v(" "),l.props.details.volumeInfo.language&&l.props.details.volumeInfo.language.length?e("div",{staticClass:"subtitle has-text-base-subtitle"},[e("p",[t._v(t._s(l.props.details.volumeInfo.language))])]):e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("language")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("\n                Publicado em\n              ")]),t._v(" "),l.props.details.volumeInfo.publishedDate&&l.props.details.volumeInfo.publishedDate.length?e("div",{staticClass:"subtitle has-text-base-subtitle"},[e("p",[t._v(t._s(l.props.details.volumeInfo.publishedDate))])]):e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("\n                publisherDate\n              ")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-5 has-text-base-title pb-2"},[t._v("Páginas")]),t._v(" "),l.props.details.volumeInfo.pageCount?e("div",{staticClass:"subtitle has-text-base-subtitle"},[e("p",[t._v(t._s(l.props.details.volumeInfo.pageCount))])]):e("p",{staticClass:"subtitle has-text-base-subtitle"},[t._v("pageCount")])])])])])]),t._v(" "),e("div",[e("FbButtonSaveBook",{staticClass:"is-align-content-center is-size-6",attrs:{book:l.props.details}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FbButtonSaveBook:o(475).default})},501:function(t,e,o){"use strict";o(495)},502:function(t,e,o){var l=o(96)((function(i){return i[1]}));l.push([t.i,".play-books-details{margin-bottom:8rem;top:86px}.play-books-details .books-details-container{border:0;margin:0 auto;max-width:52rem;width:100%}.play-books-details .books-details-container .details-content{display:flex;flex-direction:column;gap:1rem;padding:2.5rem 2rem}.play-books-details .books-details-container .details-content p{line-height:160%!important}.play-books-details .books-details-container .no-page-content{padding-top:10rem}.play-books-details .books-details-container .no-page-content .no-page{align-items:center;display:flex;flex-direction:column;justify-content:center}.play-books-details .books-details-container .no-page-content .no-page img{opacity:.3}.play-books-details .books-details-container .no-page-content .no-page .title{font-weight:700;opacity:.5}.play-books-details .books-details-container .no-page-content .no-page .subtitle{opacity:.5}",""]),l.locals={},t.exports=l},506:function(t,e,o){"use strict";o.r(e);o(21),o(33);var l=o(0),n=o(25),r=Object(l.c)({__name:"_id",setup:function(t){var e=Object(n.i)(),o=Object(n.h)().$store,l=e.params,details=Object(n.e)(),r=Object(n.g)("https://www.googleapis.com/books/v1/volumes/".concat(l.id)),data=r.data,c=r.pending;return c&&(o.dispatch("siteData/block"),details.value=data,o.dispatch("siteData/unBlock")),{__sfc:!0,route:e,$store:o,params:l,details:details,data:data,pending:c}}}),c=(o(501),o(69)),component=Object(c.a)(r,(function(){var t,e,o=this,l=o._self._c,n=o._self._setupProxy;return l("section",{staticClass:"play-books-details container"},[n.details?l("div",{staticClass:"books-details-container px-5"},[n.details?l("div",[l("FbDeitailsCard",{attrs:{details:n.details}})],1):o._e(),o._v(" "),l("div",{staticClass:"details-content"},[l("p",{staticClass:"title is-size-5 has-text-base-title pb-2",domProps:{innerHTML:o._s(null===(t=n.details)||void 0===t?void 0:t.volumeInfo.title)}}),o._v(" "),l("div",{staticClass:"subtitle has-text-base-subtitle",domProps:{innerHTML:o._s(null===(e=n.details)||void 0===e?void 0:e.volumeInfo.description)}})])]):l("div",[l("FbNoPageContent",{attrs:{title:"Página não encontrada, voltar para home!",notfound:"true"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FbDeitailsCard:o(497).default,FbNoPageContent:o(486).default})}}]);