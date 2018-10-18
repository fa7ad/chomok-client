(window.webpackJsonp=window.webpackJsonp||[]).push([[24,26],{238:function(n,e,t){"use strict";t.d(e,"a",function(){return m}),t.d(e,"b",function(){return g});var r=t(227),a=t(89),o=t(21),c=t(1),i=t.n(c),u=t(22);function s(){var n=Object(o.a)(["\n  text-transform: uppercase;\n  font-family: Montserrat, sans-serif;\n  padding: 10px;\n  border: solid 2px #fff;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  transition: all 250ms ease;\n  background-color: transparent;\n  background-size: 100% 200%;\n  background-image: linear-gradient(to bottom, transparent 50%, white 50%);\n\n  &:hover {\n    color: #333;\n    background-position: 0 -100%;\n  }\n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n  text-transform: uppercase;\n  font-family: Montserrat, sans-serif;\n  padding: 10px;\n  border: solid 2px #fff;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  transition: all 250ms ease;\n  background-color: transparent;\n  background-size: 100% 200%;\n  background-image: linear-gradient(to bottom, transparent 50%, white 50%);\n\n  &:hover {\n    color: #333;\n    background-position: 0 -100%;\n  }\n"]);return l=function(){return n},n}function f(){var n=Object(o.a)(["\n  flex-basis: 50%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 300ms ease;\n  @media (max-width: 640px) {\n    flex-basis: 100%;\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(o.a)(["\n  @media (max-width: 640px) {\n    flex-basis: 100%;\n    display: none;\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(o.a)(["\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  h1, h2, h3, h4, h5 {\n    color: #fefefe;\n  }\n"]);return p=function(){return n},n}var b=Object(u.a)(p()),h=Object(u.a)(d()),m=Object(u.c)(function(n){var e=n.dark,t=n.nophone,o=n.className,c=Object(a.a)(n,["dark","nophone","className"]);return i.a.createElement("section",Object.assign({className:Object(u.b)(o,Object(r.a)({},b,e),Object(r.a)({},h,t))},c))})(f()),g=(Object(u.c)("button")(l()),Object(u.a)(s()))},443:function(n,e,t){"use strict";t.r(e);var r=t(78),a=t(79),o=t(81),c=t(80),i=t(82),u=t(21),s=t(1),l=t.n(s),f=t(351),d=t(346),p=t.n(d),b=t(22),h=t(11),m=t(231),g=t(59),j=t(15),O=t(238);function y(){var n=Object(u.a)(["\n  flex-basis: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  h1,\n  h2,\n  h3 {\n    color: #fff;\n  }\n"]);return y=function(){return n},n}var v=Object(b.a)(y()),k=function(n){function e(){var n,t;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=Object(o.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).state={loading:!0,types:[]},t.dict={perc:"Percentage Off",special:"Special Offer",bulk:"Bulk Discount"},t.showOldCode=function(n){fetch("/api/codes/"+n._id+"/"+n.code.type).then(function(n){if(401===n.status)throw new Error("Unauthorized");return n.json()}).then(function(n){if(!n.ok)return console.error("Something went wrong");t.showData(n.data)}).catch(console.error)},t.showData=function(n){return f.a.info({title:"You already got a code!",content:l.a.createElement("div",null,l.a.createElement(p.a,{value:"chomok://"+n.code}),l.a.createElement("pre",null,n.code),l.a.createElement("h3",null,"Type: ",t.dict[n.offertype]))})},t}return Object(i.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){var n=this.props,e=n.style,t=n.zone;return this.state.loading?l.a.createElement(j.a,null):this.state.types.length>0?l.a.createElement(O.a,{style:e,className:v},l.a.createElement("h1",null,"Select an offer type"),this.state.types.map(function(n,e){return l.a.createElement(h.a,{className:O.b,to:"/offer/".concat(t,"/").concat(n.key),key:e},n.caption.toUpperCase())})):l.a.createElement(g.Wrapper,{style:e},l.a.createElement(g.Box,null,l.a.createElement("h1",null,"No offer found!")))}},{key:"componentDidMount",value:function(){var n=this;fetch("/api/offers/dhaka/"+this.props.zone).then(function(n){return n.json()}).then(function(e){if(!e.ok)return n.setState({types:[],loading:!1});if(e.data.code)return n.showOldCode(e.data);var t=e.data.offers,r=Object(m.c)(Object(m.b)(function(n){return n},t));n.setState({loading:!1,types:Object(m.e)(function(e){return{key:e,caption:n.dict[e]}},r)})})}}]),e}(l.a.PureComponent);e.default=k},59:function(n,e,t){"use strict";t.r(e),t.d(e,"Wrapper",function(){return s}),t.d(e,"Box",function(){return l});var r=t(21),a=t(1),o=t.n(a),c=t(22);function i(){var n=Object(r.a)(["\n  background-color: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 0 5px rgba(255, 255, 255, 0.85);\n  border-radius: 5px;\n  padding: 20px;\n  width: 50%;\n  max-width: 480px;\n\n  h1 {\n    font-weight: 900;\n  }\n  h2 {\n    font-weight: 400;\n    text-transform: uppercase;\n  }\n"]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return u=function(){return n},n}var s=Object(c.c)("div")(u()),l=Object(c.c)("div")(i());e.default=function(n){return o.a.createElement(s,{style:n.style},o.a.createElement(l,null,o.a.createElement("h1",null,"404"),o.a.createElement("h2",null,"Page not found!")))}}}]);
//# sourceMappingURL=24.b96bbafc.chunk.js.map