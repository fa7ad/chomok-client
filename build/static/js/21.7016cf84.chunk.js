(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{578:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a(77),c=a(47),i=a(78),o=a(48),s=a(20),u=a(1),l=a.n(u),h=a(21),d=a(13),m=a(565),p=a(567),f=a(369),g=a(50),b=a(563),v=a(10);function w(){var e=Object(s.a)(["\n  display: block;\n  margin: 15px auto;\n\n  img {\n    line-height: 128px;\n  }\n\n  .ant-avatar {\n    height: 128px;\n    width: 128px;\n  }\n"]);return w=function(){return e},e}var E=Object(h.c)(m.a.Group)(w()),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={choice:void 0,images:[]},a.beforeUpload=function(e){var t=e.size/1024/1024<3;return t||p.a.error("Image must smaller than 2.5MB!"),t},a.selectImage=function(e){a.setState({choice:e.target.value})},a.setBG=function(e){if(!a.state.choice)return!1;fetch("/images/bg/"+a.state.choice,{method:"POST",credentials:"include"}).then(function(e){if(401===e.status)throw Object(d.e)("/login"),new Error("Unauthorized");if(200!==e.status)throw e;return e.json()}).then(function(e){p.a.success("The background was successfully set")}).catch(function(e){console.error(e)})},a.updateList=function(e){fetch("/images/bg/all",{credentials:"include"}).then(function(e){if(401===e.status)throw Object(d.e)("/login"),new Error("Unauthorized");return e.json()}).then(function(e){a.setState({images:e})})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Select a background"),l.a.createElement(E,{onChange:this.selectImage},this.state.images.map(function(e){return l.a.createElement(m.a,{value:e.id,key:e.id},l.a.createElement(f.a,{src:e.link,size:"large",shape:"square"}))})),l.a.createElement(g.a,{type:"primary",onClick:this.setBG},"Set as Background")),l.a.createElement("div",null,l.a.createElement("h3",null,"Upload a new background"),l.a.createElement(b.a,{name:"file",listType:"picture-card",accept:"image/*",action:"/images/bg",withCredentials:!0,beforeUpload:this.beforeUpload,onChange:this.updateList},l.a.createElement(v.a,{type:"plus"}),l.a.createElement("div",{className:"ant-upload-text"},"Upload"))))}},{key:"componentDidMount",value:function(){this.updateList()}}]),t}(l.a.PureComponent);t.default=k}}]);
//# sourceMappingURL=21.7016cf84.chunk.js.map