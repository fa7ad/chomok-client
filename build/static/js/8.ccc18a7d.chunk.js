(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{348:function(e,t,n){"use strict";n.r(t);var a=n(77),r=n(78),i=n(80),l=n(79),s=n(81),o=n(1),c=n.n(o),u=n(215),f=n.n(u),m=n(227),h=n(12),d=n(342),p=n(25),g=n(2),E=n.n(g),y=n(7),v=n.n(y),b=n(4),w=n.n(b),O=n(8),S=n.n(O),I=n(3),k=n.n(I),x=n(5),j=n.n(x),D=n(6),C=n(10),M=n(9),z=n.n(M),Y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},N=function(e){function t(e){w()(this,t);var n=k()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setScale=function(){var e=n.avatarChildren;if(e){var t=e.offsetWidth,a=D.findDOMNode(n).getBoundingClientRect().width;a-8<t?n.setState({scale:(a-8)/t}):n.setState({scale:1})}},n.handleImgLoadError=function(){var e=n.props.onError;!1!==(e?e():void 0)&&n.setState({isImgExist:!1})},n.state={scale:1,isImgExist:!0},n}return j()(t,e),S()(t,[{key:"componentDidMount",value:function(){this.setScale()}},{key:"componentDidUpdate",value:function(e,t){(e.children!==this.props.children||t.scale!==this.state.scale&&1===this.state.scale||t.isImgExist!==this.state.isImgExist)&&this.setScale()}},{key:"render",value:function(){var e,t,n=this,a=this.props,r=a.prefixCls,i=a.shape,l=a.size,s=a.src,c=a.icon,u=a.className,f=a.alt,m=Y(a,["prefixCls","shape","size","src","icon","className","alt"]),h=this.state,d=h.isImgExist,p=h.scale,g=z()((e={},v()(e,r+"-lg","large"===l),v()(e,r+"-sm","small"===l),e)),y=z()(r,u,g,(t={},v()(t,r+"-"+i,i),v()(t,r+"-image",s&&d),v()(t,r+"-icon",c),t)),b="number"===typeof l?{width:l,height:l,lineHeight:l+"px",fontSize:c?l/2:18}:{},w=this.props.children;if(s&&d)w=o.createElement("img",{src:s,onError:this.handleImgLoadError,alt:f});else if(c)w=o.createElement(C.a,{type:c});else{var O=this.avatarChildren;if(O||1!==p){var S={msTransform:"scale("+p+")",WebkitTransform:"scale("+p+")",transform:"scale("+p+")",position:"absolute",display:"inline-block",left:"calc(50% - "+Math.round(O.offsetWidth/2)+"px)"},I="number"===typeof l?{lineHeight:l+"px"}:{};w=o.createElement("span",{className:r+"-string",ref:function(e){return n.avatarChildren=e},style:E()({},I,S)},w)}else w=o.createElement("span",{className:r+"-string",ref:function(e){return n.avatarChildren=e}},w)}return o.createElement("span",E()({},m,{style:E()({},b,m.style),className:y}),w)}}]),t}(o.Component),T=N;N.defaultProps={prefixCls:"ant-avatar",shape:"circle",size:"default"};var P=n(329),_=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={offers:[],loading:!0},n.listStyle={textAlign:"left"},n.listMapper=function(e,t){return c.a.createElement(d.a.Item,{actions:[c.a.createElement(p.a,{onClick:n.deleteItem(e._id,t),type:"danger"},"DELETE!")],key:e._id},c.a.createElement(d.a.Item.Meta,{avatar:c.a.createElement(T,{src:e.image,size:"large",shape:"square"}),title:n.getItemTitle(e),description:n.getItemDesc(e),style:n.listStyle}))},n.getItemTitle=function(e){var t=f()(e.date,"YYYYMMDD"),n=t.isSame(f()(),"day"),a=t.format("DD-MM-YYYY");return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{color:n?"cyan":"magenta"},c.a.createElement("b",null,"Date: ")," ",n?"Today / ":"",a),c.a.createElement(P.a,{color:"red"},c.a.createElement("b",null,"Name:")," ",e.partner.name),c.a.createElement(P.a,{color:"orange"},c.a.createElement("b",null,"Zone:")," ",Object(m.d)(e.zone.division+" > "+e.zone.name)))},n.getItemDesc=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{color:"blue"},c.a.createElement("b",null,"Request:")," ",e.reqBy.length),c.a.createElement(P.a,{color:"green"},c.a.createElement("b",null,"Used:")," ",e.useBy.length),c.a.createElement(P.a,{color:"pink"},c.a.createElement("b",null,"Unused:")," ",e.reqBy.length-e.useBy.length))},n.deleteItem=function(e,t){return function(a){fetch("/api/offers/"+e,{method:"DELETE",credentials:"include"}).then(function(e){return e.json()}).then(function(e){if(!e.ok)throw new Error("Something went wrong");n.setState(function(e){var n=e.offers.slice();return n.splice(t,1),{offers:n}})}).catch(function(e){console.error(e)})}},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{loading:this.state.loading,itemLayout:"horizontal",dataSource:this.state.offers,renderItem:this.listMapper})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/offers",{credentials:"include"}).then(function(e){return 401===e.status&&Object(h.e)("/login"),e.json()}).then(function(t){var n=t.ok,a=t.data;if(!n)throw new Error("Something went wrong");e.setState({offers:a,loading:!1})}).catch(function(e){console.error(e)})}}]),t}(c.a.PureComponent);t.default=_}}]);
//# sourceMappingURL=8.ccc18a7d.chunk.js.map