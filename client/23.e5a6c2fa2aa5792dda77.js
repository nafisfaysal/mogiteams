(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1135:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t(137);var n=t(33),s=t.n(n),i=t(7),r=t.n(i),l=t(1108),c=t(1106);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class u extends r.a.PureComponent{render(){return r.a.createElement("div",{id:"back_button",className:"signup-header"},r.a.createElement(c.a,{onClick:this.props.onClick,to:this.props.url},r.a.createElement(l.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>r.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),r.a.createElement(l.a,{id:"web.header.back",defaultMessage:"Back"})))}}o(u,"propTypes",{url:s.a.string,onClick:s.a.func}),o(u,"defaultProps",{url:"/"})},1999:function(e,a,t){"use strict";t.r(a);var n=t(6),s=t(310),i=t(14),r=t(20),l=(t(53),t(172),t(35),t(595),t(33)),c=t.n(l),o=t(7),u=t.n(o),d=t(1108),m=t(1135),f=t(1225);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class E extends u.a.PureComponent{constructor(e){super(e),p(this,"handleResend",async()=>{const e=new URLSearchParams(this.props.location.search).get("email");this.setState({resendStatus:"sending"});const{data:a,error:t}=await this.props.actions.sendVerificationEmail(e);a?this.setState({resendStatus:"success"}):t&&this.setState({resendStatus:"failure"})}),this.state={resendStatus:"none"}}render(){let e="";return"success"===this.state.resendStatus&&(e=u.a.createElement("div",null,u.a.createElement("br",null),u.a.createElement("p",{className:"alert alert-success"},u.a.createElement(f.a,null),u.a.createElement(d.a,{id:"email_verify.sent",defaultMessage:" Verification email sent."})))),"failure"===this.state.resendStatus&&(e=u.a.createElement("div",null,u.a.createElement("br",null),u.a.createElement("p",{className:"alert alert-danger"},u.a.createElement(d.a,{id:"generic_icons.fail",defaultMessage:"Faliure Icon"},e=>u.a.createElement("i",{className:"fa fa-times",title:e})),u.a.createElement(d.a,{id:"email_verify.failed"})))),u.a.createElement("div",null,u.a.createElement(m.a,null),u.a.createElement("div",{className:"col-sm-12"},u.a.createElement("div",{className:"signup-team__container"},u.a.createElement("h3",null,u.a.createElement(d.a,{id:"email_verify.almost",defaultMessage:"{siteName}: You are almost done",values:{siteName:this.props.siteName}})),u.a.createElement("div",null,u.a.createElement("p",null,u.a.createElement(d.a,{id:"email_verify.notVerifiedBody",defaultMessage:"Please verify your email address. Check your inbox for an email."})),u.a.createElement("button",{onClick:this.handleResend,className:"btn btn-primary"},u.a.createElement(d.a,{id:"email_verify.resend",defaultMessage:"Resend Email"})),e))))}}p(E,"propTypes",{location:c.a.object.isRequired,siteName:c.a.string.isRequired,actions:c.a.shape({sendVerificationEmail:c.a.func.isRequired}).isRequired});a.default=Object(s.connect)(e=>{const{SiteName:a}=Object(i.getConfig)(e);return{siteName:a}},e=>({actions:Object(n.bindActionCreators)({sendVerificationEmail:r.sendVerificationEmail},e)}))(E)}}]);
//# sourceMappingURL=23.e5a6c2fa2aa5792dda77.js.map