(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1135:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(137);var r=a(33),n=a.n(r),s=a(7),o=a.n(s),c=a(1108),i=a(1106);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class u extends o.a.PureComponent{render(){return o.a.createElement("div",{id:"back_button",className:"signup-header"},o.a.createElement(i.a,{onClick:this.props.onClick,to:this.props.url},o.a.createElement(c.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>o.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),o.a.createElement(c.a,{id:"web.header.back",defaultMessage:"Back"})))}}l(u,"propTypes",{url:n.a.string,onClick:n.a.func}),l(u,"defaultProps",{url:"/"})},1140:function(e,t,a){e.exports=a.p+"files/77de51bb9d8c3e0ae1c9fba08495fcc7.png"},1239:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(7),n=a.n(r),s=a(1108);class o extends n.a.PureComponent{render(){return n.a.createElement(s.a,{id:"generic_icons.logout",defaultMessage:"Logout Icon"},e=>n.a.createElement("i",{className:"fa fa-1x fa-angle-left",title:e}))}}},1345:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c}));var r=a(20),n=a(10);function s(e){return(t,a)=>{const s=Object(n.getCurrentUserId)(a());return t(r.updateUserMfa(s,!0,e))}}function o(){return(e,t)=>{const a=Object(n.getCurrentUserId)(t());return e(r.updateUserMfa(a,!1))}}function c(){return(e,t)=>{const a=Object(n.getCurrentUserId)(t());return e(r.generateMfaSecret(a))}}},1984:function(e,t,a){"use strict";a.r(t);var r=a(310),n=a(14),s=(a(171),a(138),a(35),a(33)),o=a.n(s),c=a(7),i=a.n(c),l=a(1108),u=a(1107),m=a(1121),d=a(1140),p=a.n(d),f=a(1135),h=a(1239),b=a(6),g=a(10),E=a(1345),y=(a(61),a(13)),v=a(28),M=a(1116),N=a(1129);function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class O extends i.a.Component{constructor(e){super(e),C(this,"submit",e=>{e.preventDefault();const t=this.input.current.value.replace(/\s/g,"");t&&0!==t.length?(this.setState({error:null}),this.props.actions.activateMfa(t).then(({error:e})=>{e?"ent.mfa.activate.authenticate.app_error"===e.server_error_id?this.setState({error:y.hb("mfa.setup.badCode","Invalid code. If this issue persists, contact your System Administrator.")}):this.setState({error:e.message}):this.props.history.push("/mfa/confirm")})):this.setState({error:y.hb("mfa.setup.codeError","Please enter the code from Google Authenticator.")})}),this.state={secret:"",qrCode:""},this.input=i.a.createRef()}componentDidMount(){const e=this.props.currentUser;e&&!e.mfa_active?this.props.actions.generateMfaSecret().then(({data:e,error:t})=>{t?this.setState({serverError:t.message}):this.setState({secret:e.secret,qrCode:e.qr_code})}):this.props.history.push("/")}render(){let e,t,a="form-group";return this.state.error&&(e=i.a.createElement("div",{className:"form-group has-error"},i.a.createElement("label",{className:"control-label"},this.state.error)),a+=" has-error"),this.props.enforceMultifactorAuthentication&&(t=i.a.createElement("p",null,i.a.createElement(M.b,{id:"mfa.setup.required",defaultMessage:"**Multi-factor authentication is required on {siteName}.**",values:{siteName:this.props.siteName}}))),i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.submit,className:a},t,i.a.createElement("p",null,i.a.createElement(M.b,{id:"mfa.setup.step1",defaultMessage:"**Step 1: **On your phone, download Google Authenticator from [iTunes](!https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8') or [Google Play](!https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)"})),i.a.createElement("p",null,i.a.createElement(M.b,{id:"mfa.setup.step2",defaultMessage:"**Step 2: **Use Google Authenticator to scan this QR code, or manually type in the secret key"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"col-sm-12"},i.a.createElement("img",{alt:"qr code image",style:k.qrCode,src:"data:image/png;base64,"+this.state.qrCode}))),i.a.createElement("br",null),i.a.createElement("div",{className:"form-group"},i.a.createElement("p",{className:"col-sm-12"},i.a.createElement(l.a,{id:"mfa.setup.secret",defaultMessage:"Secret: {secret}",values:{secret:this.state.secret}}))),i.a.createElement("p",null,i.a.createElement(M.b,{id:"mfa.setup.step3",defaultMessage:"**Step 3: **Enter the code generated by Google Authenticator"})),i.a.createElement("p",null,i.a.createElement(N.a,{ref:this.input,className:"form-control",placeholder:{id:Object(v.b)("mfa.setup.code"),defaultMessage:"MFA Code"},autoFocus:!0})),e,i.a.createElement("button",{type:"submit",className:"btn btn-primary"},i.a.createElement(l.a,{id:"mfa.setup.save",defaultMessage:"Save"}))))}}C(O,"propTypes",{currentUser:o.a.object,siteName:o.a.string,enforceMultifactorAuthentication:o.a.bool.isRequired,actions:o.a.shape({activateMfa:o.a.func.isRequired,generateMfaSecret:o.a.func.isRequired}).isRequired});const k={qrCode:{maxHeight:170}};var j=Object(r.connect)((function(e){const t=Object(n.getConfig)(e),a=t.SiteName,r="true"===t.EnforceMultifactorAuthentication;return{currentUser:Object(g.getCurrentUser)(e),siteName:a,enforceMultifactorAuthentication:r}}),(function(e){return{actions:Object(b.bindActionCreators)({activateMfa:E.a,generateMfaSecret:E.c},e)}}))(O);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const S=a(0).Q.KeyCodes;class q extends i.a.Component{constructor(...e){super(...e),A(this,"submit",e=>{e.preventDefault(),Object(m.f)()}),A(this,"onKeyPress",e=>{Object(y.X)(e,S.ENTER)&&this.submit(e)})}componentDidMount(){document.body.addEventListener("keydown",this.onKeyPress)}componentWillUnmount(){document.body.removeEventListener("keydown",this.onKeyPress)}render(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.submit,onKeyPress:this.onKeyPress,className:"form-group"},i.a.createElement("p",null,i.a.createElement(M.b,{id:"mfa.confirm.complete",defaultMessage:"**Set up complete!**"})),i.a.createElement("p",null,i.a.createElement(l.a,{id:"mfa.confirm.secure",defaultMessage:"Your account is now secure. Next time you sign in, you will be asked to enter a code from the Google Authenticator app on your phone."})),i.a.createElement("button",{type:"submit",className:"btn btn-primary"},i.a.createElement(l.a,{id:"mfa.confirm.okay",defaultMessage:"Okay"}))))}}class w extends i.a.Component{constructor(...e){var t,a,r;super(...e),r=e=>{e.preventDefault(),Object(m.e)("/login")},(a="handleOnClick")in(t=this)?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r}componentDidMount(){document.body.classList.add("sticky"),document.getElementById("root").classList.add("container-fluid"),this.props.enableMultifactorAuthentication||this.props.history.push("/")}componentWillUnmount(){document.body.classList.remove("sticky"),document.getElementById("root").classList.remove("container-fluid")}render(){let e;return e=this.props.mfa&&this.props.enforceMultifactorAuthentication?i.a.createElement("div",{className:"signup-header"},i.a.createElement("button",{className:"style--none color--link",onClick:this.handleOnClick},i.a.createElement(h.a,null),i.a.createElement(l.a,{id:"web.header.logout",defaultMessage:"Logout"}))):i.a.createElement(f.a,null),i.a.createElement("div",{className:"inner-wrap"},i.a.createElement("div",{className:"row content"},i.a.createElement("div",null,e,i.a.createElement("div",{className:"col-sm-12"},i.a.createElement("div",{className:"signup-team__container"},i.a.createElement("h3",null,i.a.createElement(l.a,{id:"mfa.setupTitle",defaultMessage:"Multi-factor Authentication Setup"})),i.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:p.a}),i.a.createElement("div",{id:"mfa"},i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"".concat(this.props.match.url,"/setup"),render:e=>i.a.createElement(j,Object.assign({state:this.state,updateParent:this.updateParent},e))}),i.a.createElement(u.b,{path:"".concat(this.props.match.url,"/confirm"),render:e=>i.a.createElement(q,Object.assign({state:this.state,updateParent:this.updateParent},e))}))))))))}}w.propTypes={location:o.a.object.isRequired,children:o.a.node,mfa:o.a.bool.isRequired,enableMultifactorAuthentication:o.a.bool.isRequired,enforceMultifactorAuthentication:o.a.bool.isRequired,match:o.a.shape({url:o.a.string.isRequired}).isRequired};t.default=Object(r.connect)((function(e){const t=Object(n.getLicense)(e),a=Object(n.getConfig)(e);return{mfa:"true"===t.MFA,enableMultifactorAuthentication:"true"===a.EnableMultifactorAuthentication,enforceMultifactorAuthentication:"true"===a.EnforceMultifactorAuthentication}}))(w)}}]);
//# sourceMappingURL=12.c08acf3f9866df4451fd.js.map