(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1135:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a(137);var s=a(33),i=a.n(s),n=a(7),r=a.n(n),o=a(1108),l=a(1106);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class d extends r.a.PureComponent{render(){return r.a.createElement("div",{id:"back_button",className:"signup-header"},r.a.createElement(l.a,{onClick:this.props.onClick,to:this.props.url},r.a.createElement(o.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>r.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),r.a.createElement(o.a,{id:"web.header.back",defaultMessage:"Back"})))}}c(d,"propTypes",{url:i.a.string,onClick:i.a.func}),c(d,"defaultProps",{url:"/"})},1140:function(e,t,a){e.exports=a.p+"files/77de51bb9d8c3e0ae1c9fba08495fcc7.png"},1198:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(33),i=a.n(s),n=a(7),r=a.n(n),o=a(1108);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class c extends r.a.PureComponent{render(){const{customDescriptionText:e,siteName:t}=this.props;let a=null;return a=e||r.a.createElement(o.a,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"site_name"},t),r.a.createElement("h4",{id:"site_description",className:"color--light"},a))}}l(c,"propTypes",{customDescriptionText:i.a.string,siteName:i.a.string}),l(c,"defaultProps",{siteName:"Mattermost"})},1236:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(61),a(70);var s=a(33),i=a.n(s),n=a(7),r=a.n(n),o=a(1108),l=a(13),c=a(28),d=a(1152),m=a(1129);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class u extends r.a.PureComponent{constructor(e){super(e),p(this,"handleChange",e=>{e.preventDefault();const t=e.target.value.trim().replace(/\s/g,"");t!==this.state.token&&this.setState({token:t})}),p(this,"handleSubmit",e=>{e.preventDefault();const t={serverError:"",saving:!0};this.setState(t),this.props.submit(this.props.loginId,this.props.password,this.state.token)}),this.state={saving:!1,token:"",serverError:""}}render(){let e,t="";return this.state.serverError&&(e=r.a.createElement("label",{className:"control-label"},this.state.serverError),t=" has-error"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"signup__email-container"},r.a.createElement("p",null,r.a.createElement(o.a,{id:"login_mfa.enterToken",defaultMessage:"To complete the sign in process, please enter a token from your smartphone's authenticator"})),r.a.createElement("div",{className:"form-group"+t},e),r.a.createElement("div",{className:"form-group"+t},r.a.createElement(m.a,{type:"text",className:"form-control",name:"token",placeholder:{id:Object(c.b)("login_mfa.token"),defaultMessage:"MFA Token"},spellCheck:"false",autoComplete:"off",autoFocus:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(d.a,{saving:this.state.saving,disabled:this.state.saving,onClick:this.handleSubmit,defaultMessage:Object(l.hb)("login_mfa.submit","Submit"),savingMessage:Object(l.hb)("login_mfa.submitting","Submitting...")}))))}}p(u,"propTypes",{loginId:i.a.string.isRequired,password:i.a.string.isRequired,submit:i.a.func.isRequired})},1338:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));a(53);var s=a(20);function i(e,t,a){return i=>r(i(s.login(e,t,a)))}function n(e,t,a){return i=>r(i(s.loginById(e,t,a)))}async function r(e){let t=await e;return t.error&&"api.context.mfa_required.app_error"===t.error.server_error_id&&(t={data:!0}),t}},2001:function(e,t,a){"use strict";a.r(t);var s=a(310),i=a(6),n=a(14),r=a(18),o=a(10),l=a(11),c=a(1193),d=a(1338),m=(a(53),a(138),a(61),a(172),a(70),a(35),a(595),a(33)),p=a.n(m),u=a(7),g=a.n(u),h=a(1108),E=a(315),b=a(1106),f=a(17),S=a(1121),N=a(116),v=a(84),_=a(0),I=a(1122),w=a(13),x=a(542),U=a(28),L=a(1140),C=a.n(L),y=a(1198),M=a(1184),R=a(1131),T=a(1116),k=a(1135),O=a(1120),P=a(1162),W=a(1225),D=a(1165),j=a(1129),q=a(1150),A=a(1236);function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class G extends g.a.Component{constructor(e){super(e),B(this,"configureTitle",()=>{this.state.sessionExpired?document.title=this.props.intl.formatMessage({id:"login.session_expired.title",defaultMessage:"* {siteName} - Session Expired"},{siteName:this.props.siteName}):document.title=this.props.siteName}),B(this,"showSessionExpiredNotificationIfNeeded",()=>{this.state.sessionExpired&&!this.closeSessionExpiredNotification?Object(x.a)({title:this.props.siteName,body:w.hb("login.session_expired.notification","Session Expired: Please sign in to continue receiving notifications."),requireInteraction:!0,silent:!1,onClick:()=>{window.focus(),this.closeSessionExpiredNotification()&&(this.closeSessionExpiredNotification(),this.closeSessionExpiredNotification=null)}}).then(e=>{this.closeSessionExpiredNotification=e}).catch(()=>{}):!this.state.sessionExpired&&this.closeSessionExpiredNotification&&(this.closeSessionExpiredNotification(),this.closeSessionExpiredNotification=null)}),B(this,"preSubmit",e=>{e.preventDefault(),this.onDismissSessionExpired();const{location:t}=this.props,a=t.search.replace(/(extra=password_change)&?/i,"");a!==t.search&&v.a.replace("".concat(t.pathname).concat(a).concat(t.hash));let s=this.state.loginId;this.loginIdInput.current&&(s=this.loginIdInput.current.value,s!==this.state.loginId&&this.setState({loginId:s}));let i=this.state.password;if(this.passwordInput.current&&(i=this.passwordInput.current.value,i!==this.state.password&&this.setState({password:i})),s=s.trim().toLowerCase(),!s){Object(U.b)("login.noEmail"),Object(U.b)("login.noEmailLdapUsername"),Object(U.b)("login.noEmailUsername"),Object(U.b)("login.noEmailUsernameLdapUsername"),Object(U.b)("login.noLdapUsername"),Object(U.b)("login.noUsername"),Object(U.b)("login.noUsernameLdapUsername");let e="login.no";return this.state.emailSigninEnabled&&(e+="Email"),this.state.usernameSigninEnabled&&(e+="Username"),this.state.ldapEnabled&&(e+="LdapUsername"),void this.setState({serverError:g.a.createElement(h.a,{id:e,values:{ldapUsername:this.props.ldapLoginFieldName||w.hb("login.ldapUsernameLower","AD/LDAP username")}})})}i?this.submit(s,i,""):this.setState({serverError:g.a.createElement(h.a,{id:"login.noPassword",defaultMessage:"Please enter your password"})})}),B(this,"submit",(e,t,a)=>{this.setState({serverError:null,loading:!0}),this.props.actions.login(e,t,a).then(async({error:t})=>{if(t)return void("api.user.login.not_verified.app_error"===t.server_error_id?v.a.push("/should_verify_email?&email="+encodeURIComponent(e)):"store.sql_user.get_for_login.app_error"===t.server_error_id||"ent.ldap.do_login.user_not_registered.app_error"===t.server_error_id?this.setState({showMfa:!1,loading:!1,serverError:g.a.createElement(h.a,{id:"login.userNotFound",defaultMessage:"We couldn't find an account matching your login credentials."})}):"api.user.check_user_password.invalid.app_error"===t.server_error_id||"ent.ldap.do_login.invalid_password.app_error"===t.server_error_id?this.setState({showMfa:!1,loading:!1,serverError:g.a.createElement(h.a,{id:"login.invalidPassword",defaultMessage:"Your password is incorrect."})}):this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==t.server_error_id?this.setState({showMfa:!1,serverError:t.message,loading:!1}):this.setState({showMfa:!0}));const a=new URLSearchParams(this.props.location.search),s=a.get("t")||"",i=a.get("id")||"";if(i||s){const{data:e}=await this.props.actions.addUserToTeamFromInvite(s,i);e?this.finishSignin(e):this.finishSignin()}else this.finishSignin()})}),B(this,"finishSignin",e=>{const t=this.props.experimentalPrimaryTeam,a=new URLSearchParams(this.props.location.search).get("redirect_to");w.nb(),N.a.setWasLoggedIn(!0),a&&a.match(/^\/([^/]|$)/)?v.a.push(a):e?v.a.push("/".concat(e.name)):t?v.a.push("/".concat(t)):S.f()}),B(this,"handleLoginIdChange",e=>{this.setState({loginId:e.target.value})}),B(this,"handlePasswordChange",e=>{this.setState({password:e.target.value})}),B(this,"handleBrandImageError",()=>{this.setState({brandImageError:!0})}),B(this,"createCustomLogin",()=>{if(this.props.enableCustomBrand){const e=this.props.customBrandText||"",t=f.Client4.getBrandImageUrl(0),a=this.state.brandImageError?{display:"none"}:{};return g.a.createElement("div",null,g.a.createElement("img",{alt:"brand image",src:t,onError:this.handleBrandImageError,style:a}),g.a.createElement("div",null,g.a.createElement(q.a,{message:e,options:{mentions:!1,imagesMetadata:null}})))}return null}),B(this,"createLoginPlaceholder",()=>{const e=this.state.ldapEnabled,t=this.state.usernameSigninEnabled,a=[];return this.state.emailSigninEnabled&&a.push(w.hb("login.email","Email")),t&&a.push(w.hb("login.username","Username")),e&&(this.props.ldapLoginFieldName?a.push(this.props.ldapLoginFieldName):a.push(w.hb("login.ldapUsername","AD/LDAP Username"))),a.length>=2?a.slice(0,a.length-1).join(", ")+w.hb("login.placeholderOr"," or ")+a[a.length-1]:1===a.length?a[0]:""}),B(this,"checkSignUpEnabled",()=>this.props.enableSignUpWithEmail||this.props.enableSignUpWithGitLab||this.props.enableSignUpWithOffice365||this.props.enableSignUpWithGoogle||this.props.enableLdap||this.props.enableSaml),B(this,"onDismissSessionExpired",()=>{N.a.setWasLoggedIn(!1),this.setState({sessionExpired:!1})}),B(this,"createExtraText",()=>{const e=new URLSearchParams(this.props.location.search).get("extra");return this.state.sessionExpired?g.a.createElement("div",{className:"alert alert-warning"},g.a.createElement(D.a,null)," ",g.a.createElement(h.a,{id:"login.session_expired",defaultMessage:"Your session has expired. Please log in again."})," ",g.a.createElement(b.a,{className:"btn-close",to:"/login",onClick:this.onDismissSessionExpired},g.a.createElement("span",null,"×"))):e===_.Q.GET_TERMS_ERROR?g.a.createElement("div",{className:"alert has-error no-padding"},g.a.createElement("label",{className:"control-label"},g.a.createElement(h.a,{id:"login.get_terms_error",defaultMessage:"Unable to load terms of service. If this issue persists, contact your System Administrator."}))):e===_.Q.TERMS_REJECTED?g.a.createElement("div",{className:"alert alert-warning"},g.a.createElement(D.a,null),g.a.createElement(T.b,{id:"login.terms_rejected",defaultMessage:"You must agree to the terms of service before accessing {siteName}. Please contact your System Administrator for more details.",values:{siteName:this.props.siteName}})):e===_.Q.SIGNIN_CHANGE?g.a.createElement("div",{className:"alert alert-success"},g.a.createElement(W.a,null),g.a.createElement(h.a,{id:"login.changed",defaultMessage:" Sign-in method changed successfully"})):e===_.Q.SIGNIN_VERIFIED?g.a.createElement("div",{className:"alert alert-success"},g.a.createElement(W.a,null),g.a.createElement(h.a,{id:"login.verified",defaultMessage:" Email Verified"})):e===_.Q.PASSWORD_CHANGE?g.a.createElement("div",{id:"passwordUpdatedSuccess",className:"alert alert-success"},g.a.createElement(W.a,null),g.a.createElement(h.a,{id:"login.passwordChanged",defaultMessage:" Password updated successfully"})):e===_.Q.CREATE_LDAP?g.a.createElement("div",{className:"alert alert-grey"},g.a.createElement(h.a,{id:"login.ldapCreate",defaultMessage:" Enter your AD/LDAP username and password to create an account."})):null}),B(this,"createLoginOptions",()=>{const e=[],t=this.state.ldapEnabled,a=this.props.enableSignUpWithGitLab,s=this.props.enableSignUpWithGoogle,i=this.props.enableSignUpWithOffice365,n=this.state.samlEnabled,r=this.state.usernameSigninEnabled,o=this.state.emailSigninEnabled;if(o||r||t){let t="";this.state.serverError&&(t=" has-error"),e.push(g.a.createElement("form",{key:"loginBoxes",onSubmit:this.preSubmit},g.a.createElement("div",{className:"signup__email-container"},g.a.createElement(R.a,{error:this.state.serverError,margin:!0}),g.a.createElement("div",{className:"form-group"+t},g.a.createElement("input",{id:"loginId",className:"form-control",ref:this.loginIdInput,name:"loginId",value:this.state.loginId,onChange:this.handleLoginIdChange,placeholder:this.createLoginPlaceholder(),spellCheck:"false",autoCapitalize:"off",autoFocus:!0})),g.a.createElement("div",{className:"form-group"+t},g.a.createElement(j.a,{id:"loginPassword",type:"password",className:"form-control",ref:this.passwordInput,name:"password",value:this.state.password,onChange:this.handlePasswordChange,placeholder:{id:Object(U.b)("login.password"),defaultMessage:"Password"},spellCheck:"false"})),g.a.createElement("div",{className:"form-group"},g.a.createElement("button",{id:"loginButton",type:"submit",className:"btn btn-primary"},g.a.createElement(P.a,{id:"login_button_signing",loading:this.state.loading,text:w.hb("login.signInLoading","Signing in...")},g.a.createElement(h.a,{id:"login.signIn",defaultMessage:"Sign in"})))))))}return this.props.enableOpenServer&&this.checkSignUpEnabled()&&e.push(g.a.createElement("div",{className:"form-group",key:"signup"},g.a.createElement("span",null,g.a.createElement(h.a,{id:"login.noAccount",defaultMessage:"Don't have an account? "}),g.a.createElement(b.a,{id:"signup",to:"/signup_user_complete"+this.props.location.search,className:"signup-team-login"},g.a.createElement(h.a,{id:"login.create",defaultMessage:"Create one now"}))))),(r||o)&&e.push(g.a.createElement("div",{id:"login_forgot",key:"forgotPassword",className:"form-group"},g.a.createElement(b.a,{to:"/reset_password"},g.a.createElement(h.a,{id:"login.forgot",defaultMessage:"I forgot my password."})))),(o||r||t)&&(a||s||n||i)&&(e.push(g.a.createElement("div",{key:"divider",className:"or__container"},g.a.createElement(h.a,{id:"login.or",defaultMessage:"or"}))),e.push(g.a.createElement("h5",{key:"oauthHeader"},g.a.createElement(h.a,{id:"login.signInWith",defaultMessage:"Sign in with:"})))),a&&e.push(g.a.createElement("a",{className:"btn btn-custom-login gitlab",key:"gitlab",href:f.Client4.getOAuthRoute()+"/gitlab/login"+this.props.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon"}),g.a.createElement("span",null,g.a.createElement(h.a,{id:"login.gitlab",defaultMessage:"GitLab"}))))),s&&e.push(g.a.createElement("a",{className:"btn btn-custom-login google",key:"google",href:f.Client4.getOAuthRoute()+"/google/login"+this.props.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon"}),g.a.createElement("span",null,g.a.createElement(h.a,{id:"login.google",defaultMessage:"Google Apps"}))))),i&&e.push(g.a.createElement("a",{className:"btn btn-custom-login office365",key:"office365",href:f.Client4.getOAuthRoute()+"/office365/login"+this.props.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon"}),g.a.createElement("span",null,g.a.createElement(h.a,{id:"login.office365",defaultMessage:"Office 365"}))))),n&&e.push(g.a.createElement("a",{className:"btn btn-custom-login saml",key:"saml",href:f.Client4.getUrl()+"/login/sso/saml"+this.props.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon fa fa-lock fa--margin-top",title:"Saml icon"}),g.a.createElement("span",null,this.props.samlLoginButtonText)))),0===e.length&&e.push(g.a.createElement(R.a,{key:"noMethods",error:g.a.createElement(h.a,{id:"login.noMethods",defaultMessage:"No sign-in methods are enabled. Please contact your System Administrator."}),margin:!0})),g.a.createElement("div",null,this.createExtraText(),e)}),B(this,"hideMfa",()=>{this.setState({showMfa:!1})});let t="";new URLSearchParams(this.props.location.search).get("extra")===_.Q.SIGNIN_VERIFIED&&new URLSearchParams(this.props.location.search).get("email")&&(t=new URLSearchParams(this.props.location.search).get("email")),this.state={ldapEnabled:this.props.isLicensed&&this.props.enableLdap,usernameSigninEnabled:this.props.enableSignInWithUsername,emailSigninEnabled:this.props.enableSignInWithEmail,samlEnabled:this.props.isLicensed&&this.props.enableSaml,loginId:t,password:"",showMfa:!1,loading:!1,sessionExpired:!1,brandImageError:!1},this.loginIdInput=g.a.createRef(),this.passwordInput=g.a.createRef()}componentDidMount(){if(this.configureTitle(),this.props.currentUser)return void S.f();const e=new URLSearchParams(this.props.location.search),t=e.get("extra"),a=e.get("email");t===_.Q.SIGNIN_VERIFIED&&a&&this.passwordInput.current.focus(),N.a.getWasLoggedIn()&&(t===_.Q.SIGNIN_CHANGE?N.a.setWasLoggedIn(!1):(this.setState({sessionExpired:!0}),e.set("extra",_.Q.SESSION_EXPIRED),v.a.replace("".concat(this.props.location.pathname,"?").concat(e)))),this.showSessionExpiredNotificationIfNeeded()}componentDidUpdate(){this.configureTitle(),this.showSessionExpiredNotificationIfNeeded()}componentWillUnmount(){this.closeSessionExpiredNotification&&(this.closeSessionExpiredNotification(),this.closeSessionExpiredNotification=null)}render(){const{customDescriptionText:e,siteName:t,initializing:a}=this.props;if(a)return g.a.createElement(O.a,null);let s,i,n,r;return this.state.showMfa?(s=g.a.createElement(A.a,{loginId:this.state.loginId,password:this.state.password,submit:this.submit}),r=g.a.createElement(k.a,{onClick:this.hideMfa})):(s=this.createLoginOptions(),i=this.createCustomLogin(),i&&(n="branded")),g.a.createElement("div",null,g.a.createElement(M.a,null),r,g.a.createElement("div",{id:"login_section",className:"col-sm-12"},g.a.createElement("div",{className:"signup-team__container "+n},g.a.createElement("div",{className:"signup__markdown"},i),g.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:C.a}),g.a.createElement("div",{className:"signup__content"},g.a.createElement(y.a,{customDescriptionText:e,siteName:t}),s))))}}B(G,"propTypes",{intl:I.a.isRequired,location:p.a.object.isRequired,isLicensed:p.a.bool.isRequired,currentUser:p.a.object,customBrandText:p.a.string,customDescriptionText:p.a.string,enableCustomBrand:p.a.bool.isRequired,enableLdap:p.a.bool.isRequired,enableOpenServer:p.a.bool.isRequired,enableSaml:p.a.bool.isRequired,enableSignInWithEmail:p.a.bool.isRequired,enableSignInWithUsername:p.a.bool.isRequired,enableSignUpWithEmail:p.a.bool.isRequired,enableSignUpWithGitLab:p.a.bool.isRequired,enableSignUpWithGoogle:p.a.bool.isRequired,enableSignUpWithOffice365:p.a.bool.isRequired,experimentalPrimaryTeam:p.a.string,ldapLoginFieldName:p.a.string,samlLoginButtonText:p.a.string,siteName:p.a.string,initializing:p.a.bool,actions:p.a.shape({login:p.a.func.isRequired,addUserToTeamFromInvite:p.a.func.isRequired}).isRequired});var F=Object(E.c)(G);t.default=Object(s.connect)((function(e){const t=Object(n.getConfig)(e),a="true"===Object(n.getLicense)(e).IsLicensed,s=t.CustomBrandText,i=t.CustomDescriptionText,c="true"===t.EnableCustomBrand,d="true"===t.EnableLdap,m="true"===t.EnableOpenServer,p="true"===t.EnableSaml,u="true"===t.EnableSignInWithEmail,g="true"===t.EnableSignInWithUsername,h="true"===t.EnableSignUpWithEmail,E="true"===t.EnableSignUpWithGitLab,b="true"===t.EnableSignUpWithGoogle,f="true"===t.EnableSignUpWithOffice365,S=t.LdapLoginFieldName,N=t.SamlLoginButtonText,v=t.SiteName,_=e.requests.users.logout.status===l.RequestStatus.SUCCESS||!e.storage.initialized;let I=t.ExperimentalPrimaryTeam;if(I){const t=Object(r.getTeamByName)(e,I);if(t){const a=Object(r.getMyTeamMember)(e,t.id);a&&a.team_id||(I=null)}else I=null}return{currentUser:Object(o.getCurrentUser)(e),isLicensed:a,customBrandText:s,customDescriptionText:i,enableCustomBrand:c,enableLdap:d,enableOpenServer:m,enableSaml:p,enableSignInWithEmail:u,enableSignInWithUsername:g,enableSignUpWithEmail:h,enableSignUpWithGitLab:E,enableSignUpWithGoogle:b,enableSignUpWithOffice365:f,experimentalPrimaryTeam:I,ldapLoginFieldName:S,samlLoginButtonText:N,siteName:v,initializing:_}}),(function(e){return{actions:Object(i.bindActionCreators)({login:d.a,addUserToTeamFromInvite:c.b},e)}}))(F)}}]);
//# sourceMappingURL=10.413b6ecff329fdc55218.js.map