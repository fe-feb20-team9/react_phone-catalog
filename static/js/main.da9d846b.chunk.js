(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=a(4),m=a(8),i=a(12),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_GOOD":return e.filter((function(e){return t.goodId!==e.id}));case"INIT_GOOD":return t.goods;default:return e}},u=function(e){return e.goods},E=function(e){return e.goods.filter((function(e){return"phone"===e.type}))},d=function(e){return e.goods.filter((function(e){return"tablet"===e.type}))},p=Object(i.b)({goods:s}),_=Object(i.c)(p),v=a(19),f=a.n(v),C=a(25),N=a(2),g=function(){return e="/products",fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api/").concat(e,".json")).then((function(e){return e.json()}));var e},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"Nav__wrapper"},l.a.createElement("ul",{className:"Nav__list"},l.a.createElement("li",null,l.a.createElement(o.c,{to:"/",exact:!0,className:"Logo"})),["home","phones","tablets","accessories"].map((function(e){return l.a.createElement("li",null,l.a.createElement(o.c,{to:"".concat(e),exact:!0,className:"Nav__item link",activeClassName:"Nav__item--active",key:e},e))})))))},b=(a(38),function(){return l.a.createElement("div",null,"Favorites")}),w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{className:"actions__item actions-favorites",to:"/Favorites"},l.a.createElement("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.62852 0.631356C10.1584 0.411782 10.7264 0.298767 11.3 0.298767C11.8737 0.298767 12.4416 0.411782 12.9716 0.631356C13.5015 0.85093 13.983 1.17276 14.3885 1.57846C14.7941 1.98392 15.1158 2.46531 15.3353 2.99513C15.5549 3.52505 15.6679 4.09304 15.6679 4.66665C15.6679 5.24026 15.5549 5.80825 15.3353 6.33817C15.1158 6.86805 14.794 7.34947 14.3884 7.75496C14.3883 7.755 14.3884 7.75492 14.3884 7.75496L8.49502 13.6483C8.22165 13.9217 7.77844 13.9217 7.50507 13.6483L1.61174 7.75496C0.792668 6.93589 0.33252 5.82499 0.33252 4.66665C0.33252 3.50831 0.792668 2.39741 1.61174 1.57834C2.43081 0.759273 3.54171 0.299124 4.70005 0.299124C5.85839 0.299124 6.96928 0.759273 7.78835 1.57834L8.00005 1.79003L8.21162 1.57846C8.21166 1.57842 8.21158 1.5785 8.21162 1.57846C8.61711 1.17281 9.09865 0.850909 9.62852 0.631356ZM13.3983 2.56818C13.1228 2.29255 12.7957 2.0739 12.4357 1.92472C12.0756 1.77555 11.6898 1.69877 11.3 1.69877C10.9103 1.69877 10.5245 1.77555 10.1644 1.92472C9.80441 2.0739 9.4773 2.29255 9.2018 2.56818L8.49502 3.27496C8.22165 3.54833 7.77844 3.54833 7.50507 3.27496L6.7984 2.56829C6.24189 2.01177 5.48708 1.69912 4.70005 1.69912C3.91301 1.69912 3.15821 2.01177 2.60169 2.56829C2.04517 3.12481 1.73252 3.87961 1.73252 4.66665C1.73252 5.45369 2.04517 6.20849 2.60169 6.76501L8.00005 12.1634L13.3984 6.76501C13.674 6.48951 13.8928 6.16229 14.042 5.80227C14.1911 5.44224 14.2679 5.05635 14.2679 4.66665C14.2679 4.27695 14.1911 3.89106 14.042 3.53103C13.8928 3.17101 13.6739 2.84367 13.3983 2.56818Z",fill:"#333333"}))))},O=function(){return l.a.createElement("div",null,"Cart")},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{className:"actions__item actions-cart",to:"/Cart"},l.a.createElement("svg",{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.46683 0.933323C2.59273 0.765453 2.79032 0.666656 3.00016 0.666656H11.0002C11.21 0.666656 11.4076 0.765453 11.5335 0.933323L13.5335 3.59999C13.62 3.71539 13.6668 3.85574 13.6668 3.99999V13.3333C13.6668 13.8638 13.4561 14.3725 13.081 14.7475C12.706 15.1226 12.1973 15.3333 11.6668 15.3333H2.3335C1.80306 15.3333 1.29436 15.1226 0.919282 14.7475C0.54421 14.3725 0.333496 13.8638 0.333496 13.3333V3.99999C0.333496 3.85574 0.380281 3.71539 0.466829 3.59999L2.46683 0.933323ZM3.3335 1.99999L1.66683 4.22221V13.3333C1.66683 13.5101 1.73707 13.6797 1.86209 13.8047C1.98712 13.9298 2.15669 14 2.3335 14H11.6668C11.8436 14 12.0132 13.9298 12.1382 13.8047C12.2633 13.6797 12.3335 13.5101 12.3335 13.3333V4.22221L10.6668 1.99999H3.3335Z",fill:"#313237"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.333496 4.00001C0.333496 3.63182 0.631973 3.33334 1.00016 3.33334H13.0002C13.3684 3.33334 13.6668 3.63182 13.6668 4.00001C13.6668 4.3682 13.3684 4.66668 13.0002 4.66668H1.00016C0.631973 4.66668 0.333496 4.3682 0.333496 4.00001Z",fill:"#313237"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.33366 6C4.70185 6 5.00033 6.29848 5.00033 6.66667C5.00033 7.1971 5.21104 7.70581 5.58611 8.08088C5.96118 8.45595 6.46989 8.66667 7.00033 8.66667C7.53076 8.66667 8.03947 8.45595 8.41454 8.08088C8.78961 7.70581 9.00033 7.1971 9.00033 6.66667C9.00033 6.29848 9.2988 6 9.66699 6C10.0352 6 10.3337 6.29848 10.3337 6.66667C10.3337 7.55072 9.98247 8.39857 9.35735 9.02369C8.73223 9.64881 7.88438 10 7.00033 10C6.11627 10 5.26842 9.64881 4.6433 9.02369C4.01818 8.39857 3.66699 7.55072 3.66699 6.66667C3.66699 6.29848 3.96547 6 4.33366 6Z",fill:"#313237"}))))},k=(a(39),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Header"},l.a.createElement(h,null),l.a.createElement("div",{className:"Header__actions"},l.a.createElement(w,null),l.a.createElement(y,null))))}),T=a(26),x=a.n(T),L=(a(55),a(56),a(57),function(){var e={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return l.a.createElement(x.a,e,l.a.createElement("div",null,l.a.createElement("div",{className:"Slider__image image1"})),l.a.createElement("div",null,l.a.createElement("div",{className:"Slider__image image2"})),l.a.createElement("div",null,l.a.createElement("div",{className:"Slider__image image3"})),l.a.createElement("div",null,l.a.createElement("div",{className:"Slider__image image4"})),l.a.createElement("div",null,l.a.createElement("div",{className:"Slider__image image5"})),l.a.createElement("div",null,l.a.createElement("div",{className:"Slider__image image6"})))}),F=(a(58),function(e){var t=e.good,a=t.id,n=t.name,r=t.imageUrl,c=t.price,o=t.discount,m=t.screen,i=t.capacity,s=t.ram;return l.a.createElement("li",{className:"Card__item",key:a},l.a.createElement("div",null,l.a.createElement("img",{src:"./".concat(r),alt:n,className:"Card__img"}),l.a.createElement("h3",{className:"Card__title"},n),l.a.createElement("div",{className:"price__wrapper"},l.a.createElement("span",{className:"Card__discount"}," ","$","".concat(c-c*o/100)),l.a.createElement("span",{className:"Card__price"}," ","$",c)),l.a.createElement("ul",{className:"Card__parameters"},l.a.createElement("li",{className:"parameters__item"},l.a.createElement("p",null,"screen:"),l.a.createElement("p",{className:"parameters__value"},m)),l.a.createElement("li",{className:"parameters__item"},l.a.createElement("p",null,"capacity:"),l.a.createElement("p",{className:"parameters__value"},i)),l.a.createElement("li",{className:"parameters__item"},l.a.createElement("p",null,"ram:"),l.a.createElement("p",{className:"parameters__value"},s)))),l.a.createElement("div",{className:"cartFavorites__wrapper"},l.a.createElement("button",{type:"button",className:"btn__addToCart btn__addToCart-link"},"Add to cart"),l.a.createElement("button",{type:"button",className:"btn__Favorites-link"})))}),j=function(){var e=Object(m.c)(u);return l.a.createElement("div",null,l.a.createElement("div",{className:"slider-btn-wrapper"},l.a.createElement("button",{type:"button",className:"btn-prev"},"prev"),l.a.createElement("button",{type:"button",className:"btn-next"},"next")),l.a.createElement("div",{className:"Card"},l.a.createElement("ul",{className:"Card__list"},e.filter((function(e){return 0!==e.discount})).map((function(e){return l.a.createElement(F,{good:e})})))))},H=function(){return l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement("h1",{className:"block__title"}," Hot prices"),l.a.createElement(j,null))},S=(a(59),function(e){var t=e.goods;return l.a.createElement("div",{className:"Card"},l.a.createElement("ul",{className:"Card__list"},t.map((function(e){return l.a.createElement(F,{good:e})}))))}),R=function(){var e=Object(m.c)(E);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Phones"),l.a.createElement(S,{goods:e}))},I=function(){var e=Object(m.c)(d);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," Tablets"),l.a.createElement(S,{goods:e}))},B=(a(60),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Accessories"),l.a.createElement("div",{className:"out-of-stock"}))}),M=(a(61),function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return l.a.createElement("footer",{className:"footer"},l.a.createElement(o.c,{to:"/",exact:!0,className:"Logo footer__logo"}),l.a.createElement("nav",{className:"footer__wrapper"},l.a.createElement("ul",{className:"footer__list"},["GITHUB","CONTACTS","RIGHTS"].map((function(e){return l.a.createElement("li",null,l.a.createElement(o.c,{to:"/",exact:!0,className:"Nav__item link",activeClassName:"Nav__item--active",key:e},e))})))),l.a.createElement("div",{className:"footer__top-button-container"},l.a.createElement("p",{className:"footer__paragraph"},"Back to top"),l.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__top-button",onClick:e})))}),Z=(a(62),function(){var e=Object(C.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),D=function(){var e=Object(m.b)();return Object(n.useEffect)((function(){Z().then((function(t){e({type:"INIT_GOOD",goods:t})}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(N.d,null,l.a.createElement(N.b,{path:"/",exact:!0,component:H}),l.a.createElement(N.b,{path:"/phones",exact:!0,component:R}),l.a.createElement(N.b,{path:"/tablets",component:I}),l.a.createElement(N.b,{path:"/accessories",component:B}),l.a.createElement(N.b,{path:"/Favorites",component:b}),l.a.createElement(N.b,{path:"/Cart",component:O}),l.a.createElement(N.a,{from:"/home",to:"/"}),l.a.createElement(N.b,{path:"/",component:function(){return l.a.createElement("h1",null,"NOT FOUND")}})),l.a.createElement(M,null))},G=function(){return l.a.createElement(m.a,{store:_},l.a.createElement(o.a,null,l.a.createElement(D,null)))};c.a.render(l.a.createElement(G,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.da9d846b.chunk.js.map