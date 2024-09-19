import{g as W,b as K,s as G,c as N,_ as l,r as p,d as X,e as S,j as r,f as I,h as q,i as xt,k as mt,l as wt,m as M,n as ht,o as bt,S as rt,p as Dt,a as Lt,B as at}from"./index-Mp10o8wC.js";import{P as vt,o as yt,T as Pt,d as Rt,r as Ot,g as dt,M as Tt,L as J,i as Et,a as pt,I as V,b as Mt,c as it,e as Nt,f as St,h as Gt}from"./IconifyIcon-BeudZvIu.js";import{T as Ft,A as Vt,M as Ut,L as Ct,a as kt,b as st,B as $t,S as Ht}from"./index-Bae5VNA0.js";import{u as lt,B as At,a as Jt,I as zt,T as Qt}from"./Image-DSF_LTm_.js";import{L as ct}from"./Link-Dqp25FZa.js";import{l as Yt}from"./Logo-with-text-BzcRjYXZ.js";function Zt(t){return W("MuiAppBar",t)}K("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Wt=["className","color","enableColorOnDark","position"],Kt=t=>{const{color:o,position:e,classes:n}=t,i={root:["root",`color${N(o)}`,`position${N(e)}`]};return q(i,Zt,n)},ot=(t,o)=>t?`${t==null?void 0:t.replace(")","")}, ${o})`:o,Xt=G(vt,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`position${N(e.position)}`],o[`color${N(e.color)}`]]}})(({theme:t,ownerState:o})=>{const e=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return l({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!t.vars&&l({},o.color==="default"&&{backgroundColor:e,color:t.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&l({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&l({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:ot(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:ot(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:ot(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:ot(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},!["inherit","transparent"].includes(o.color)&&{backgroundColor:"var(--AppBar-background)"},{color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),qt=p.forwardRef(function(o,e){const n=X({props:o,name:"MuiAppBar"}),{className:i,color:a="primary",enableColorOnDark:c=!1,position:u="fixed"}=n,g=S(n,Wt),d=l({},n,{color:a,position:u,enableColorOnDark:c}),f=Kt(d);return r.jsx(Xt,l({square:!0,component:"header",ownerState:d,elevation:4,className:I(f.root,i,u==="fixed"&&"mui-fixed"),ref:e},g))}),_t=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function to(t,o,e){const n=o.getBoundingClientRect(),i=e&&e.getBoundingClientRect(),a=yt(o);let c;if(o.fakeTransform)c=o.fakeTransform;else{const d=a.getComputedStyle(o);c=d.getPropertyValue("-webkit-transform")||d.getPropertyValue("transform")}let u=0,g=0;if(c&&c!=="none"&&typeof c=="string"){const d=c.split("(")[1].split(")")[0].split(",");u=parseInt(d[4],10),g=parseInt(d[5],10)}return t==="left"?i?`translateX(${i.right+u-n.left}px)`:`translateX(${a.innerWidth+u-n.left}px)`:t==="right"?i?`translateX(-${n.right-i.left-u}px)`:`translateX(-${n.left+n.width-u}px)`:t==="up"?i?`translateY(${i.bottom+g-n.top}px)`:`translateY(${a.innerHeight+g-n.top}px)`:i?`translateY(-${n.top-i.top+n.height-g}px)`:`translateY(-${n.top+n.height-g}px)`}function oo(t){return typeof t=="function"?t():t}function et(t,o,e){const n=oo(e),i=to(t,o,n);i&&(o.style.webkitTransform=i,o.style.transform=i)}const eo=p.forwardRef(function(o,e){const n=xt(),i={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:u=!0,children:g,container:d,direction:f="down",easing:B=i,in:h,onEnter:R,onEntered:y,onEntering:C,onExit:k,onExited:w,onExiting:O,style:A,timeout:b=a,TransitionComponent:z=Pt}=o,T=S(o,_t),m=p.useRef(null),Q=lt(g.ref,m,e),P=s=>x=>{s&&(x===void 0?s(m.current):s(m.current,x))},D=P((s,x)=>{et(f,s,d),Ot(s),R&&R(s,x)}),v=P((s,x)=>{const L=dt({timeout:b,style:A,easing:B},{mode:"enter"});s.style.webkitTransition=n.transitions.create("-webkit-transform",l({},L)),s.style.transition=n.transitions.create("transform",l({},L)),s.style.webkitTransform="none",s.style.transform="none",C&&C(s,x)}),E=P(y),j=P(O),_=P(s=>{const x=dt({timeout:b,style:A,easing:B},{mode:"exit"});s.style.webkitTransition=n.transitions.create("-webkit-transform",x),s.style.transition=n.transitions.create("transform",x),et(f,s,d),k&&k(s)}),U=P(s=>{s.style.webkitTransition="",s.style.transition="",w&&w(s)}),tt=s=>{c&&c(m.current,s)},Y=p.useCallback(()=>{m.current&&et(f,m.current,d)},[f,d]);return p.useEffect(()=>{if(h||f==="down"||f==="right")return;const s=Rt(()=>{m.current&&et(f,m.current,d)}),x=yt(m.current);return x.addEventListener("resize",s),()=>{s.clear(),x.removeEventListener("resize",s)}},[f,h,d]),p.useEffect(()=>{h||Y()},[h,Y]),r.jsx(z,l({nodeRef:m,onEnter:D,onEntered:E,onEntering:v,onExit:_,onExited:U,onExiting:j,addEndListener:tt,appear:u,in:h,timeout:b},T,{children:(s,x)=>p.cloneElement(g,l({ref:Q,style:l({visibility:s==="exited"&&!h?"hidden":void 0},A,g.props.style)},x))}))});function ro(t){return W("MuiDrawer",t)}K("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const no=["BackdropProps"],io=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],jt=(t,o)=>{const{ownerState:e}=t;return[o.root,(e.variant==="permanent"||e.variant==="persistent")&&o.docked,o.modal]},ao=t=>{const{classes:o,anchor:e,variant:n}=t,i={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${N(e)}`,n!=="temporary"&&`paperAnchorDocked${N(e)}`]};return q(i,ro,o)},so=G(Tt,{name:"MuiDrawer",slot:"Root",overridesResolver:jt})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),ut=G("div",{shouldForwardProp:mt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:jt})({flex:"0 0 auto"}),lo=G(vt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`paperAnchor${N(e.anchor)}`],e.variant!=="temporary"&&o[`paperAnchorDocked${N(e.anchor)}`]]}})(({theme:t,ownerState:o})=>l({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),It={left:"right",right:"left",top:"down",bottom:"up"};function co(t){return["left","right"].indexOf(t)!==-1}function po({direction:t},o){return t==="rtl"&&co(o)?It[o]:o}const gt=p.forwardRef(function(o,e){const n=X({props:o,name:"MuiDrawer"}),i=xt(),a=wt(),c={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:u="left",BackdropProps:g,children:d,className:f,elevation:B=16,hideBackdrop:h=!1,ModalProps:{BackdropProps:R}={},onClose:y,open:C=!1,PaperProps:k={},SlideProps:w,TransitionComponent:O=eo,transitionDuration:A=c,variant:b="temporary"}=n,z=S(n.ModalProps,no),T=S(n,io),m=p.useRef(!1);p.useEffect(()=>{m.current=!0},[]);const Q=po({direction:a?"rtl":"ltr"},u),D=l({},n,{anchor:u,elevation:B,open:C,variant:b},T),v=ao(D),E=r.jsx(lo,l({elevation:b==="temporary"?B:0,square:!0},k,{className:I(v.paper,k.className),ownerState:D,children:d}));if(b==="permanent")return r.jsx(ut,l({className:I(v.root,v.docked,f),ownerState:D,ref:e},T,{children:E}));const j=r.jsx(O,l({in:C,direction:It[Q],timeout:A,appear:m.current},w,{children:E}));return b==="persistent"?r.jsx(ut,l({className:I(v.root,v.docked,f),ownerState:D,ref:e},T,{children:j})):r.jsx(so,l({BackdropProps:l({},g,R,{transitionDuration:A}),className:I(v.root,v.modal,f),open:C,ownerState:D,onClose:y,hideBackdrop:h,ref:e},T,z,{children:j}))});function uo(t){return W("MuiListItem",t)}const $=K("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function go(t){return W("MuiListItemButton",t)}const H=K("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),fo=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],xo=(t,o)=>{const{ownerState:e}=t;return[o.root,e.dense&&o.dense,e.alignItems==="flex-start"&&o.alignItemsFlexStart,e.divider&&o.divider,!e.disableGutters&&o.gutters]},mo=t=>{const{alignItems:o,classes:e,dense:n,disabled:i,disableGutters:a,divider:c,selected:u}=t,d=q({root:["root",n&&"dense",!a&&"gutters",c&&"divider",i&&"disabled",o==="flex-start"&&"alignItemsFlexStart",u&&"selected"]},go,e);return l({},e,d)},ho=G(At,{shouldForwardProp:t=>mt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:xo})(({theme:t,ownerState:o})=>l({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${H.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${H.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${H.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${H.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),bo=p.forwardRef(function(o,e){const n=X({props:o,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:a=!1,component:c="div",children:u,dense:g=!1,disableGutters:d=!1,divider:f=!1,focusVisibleClassName:B,selected:h=!1,className:R}=n,y=S(n,fo),C=p.useContext(J),k=p.useMemo(()=>({dense:g||C.dense||!1,alignItems:i,disableGutters:d}),[i,C.dense,g,d]),w=p.useRef(null);ht(()=>{a&&w.current&&w.current.focus()},[a]);const O=l({},n,{alignItems:i,dense:k.dense,disableGutters:d,divider:f,selected:h}),A=mo(O),b=lt(w,e);return r.jsx(J.Provider,{value:k,children:r.jsx(ho,l({ref:b,href:y.href||y.to,component:(y.href||y.to)&&c==="div"?"button":c,focusVisibleClassName:I(A.focusVisible,B),ownerState:O,className:I(A.root,R)},y,{classes:A,children:u}))})});function vo(t){return W("MuiListItemSecondaryAction",t)}K("MuiListItemSecondaryAction",["root","disableGutters"]);const yo=["className"],Co=t=>{const{disableGutters:o,classes:e}=t;return q({root:["root",o&&"disableGutters"]},vo,e)},ko=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.disableGutters&&o.disableGutters]}})(({ownerState:t})=>l({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Bt=p.forwardRef(function(o,e){const n=X({props:o,name:"MuiListItemSecondaryAction"}),{className:i}=n,a=S(n,yo),c=p.useContext(J),u=l({},n,{disableGutters:c.disableGutters}),g=Co(u);return r.jsx(ko,l({className:I(g.root,i),ownerState:u,ref:e},a))});Bt.muiName="ListItemSecondaryAction";const Ao=["className"],jo=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Io=(t,o)=>{const{ownerState:e}=t;return[o.root,e.dense&&o.dense,e.alignItems==="flex-start"&&o.alignItemsFlexStart,e.divider&&o.divider,!e.disableGutters&&o.gutters,!e.disablePadding&&o.padding,e.button&&o.button,e.hasSecondaryAction&&o.secondaryAction]},Bo=t=>{const{alignItems:o,button:e,classes:n,dense:i,disabled:a,disableGutters:c,disablePadding:u,divider:g,hasSecondaryAction:d,selected:f}=t;return q({root:["root",i&&"dense",!c&&"gutters",!u&&"padding",g&&"divider",a&&"disabled",e&&"button",o==="flex-start"&&"alignItemsFlexStart",d&&"secondaryAction",f&&"selected"],container:["container"]},uo,n)},wo=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:Io})(({theme:t,ownerState:o})=>l({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&l({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&{[`& > .${H.root}`]:{paddingRight:48}},{[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${$.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.alignItems==="flex-start"&&{alignItems:"flex-start"},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity)}}},o.hasSecondaryAction&&{paddingRight:48})),Do=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,o)=>o.container})({position:"relative"}),Lo=p.forwardRef(function(o,e){const n=X({props:o,name:"MuiListItem"}),{alignItems:i="center",autoFocus:a=!1,button:c=!1,children:u,className:g,component:d,components:f={},componentsProps:B={},ContainerComponent:h="li",ContainerProps:{className:R}={},dense:y=!1,disabled:C=!1,disableGutters:k=!1,disablePadding:w=!1,divider:O=!1,focusVisibleClassName:A,secondaryAction:b,selected:z=!1,slotProps:T={},slots:m={}}=n,Q=S(n.ContainerProps,Ao),P=S(n,jo),D=p.useContext(J),v=p.useMemo(()=>({dense:y||D.dense||!1,alignItems:i,disableGutters:k}),[i,D.dense,y,k]),E=p.useRef(null);ht(()=>{a&&E.current&&E.current.focus()},[a]);const j=p.Children.toArray(u),_=j.length&&Et(j[j.length-1],["ListItemSecondaryAction"]),U=l({},n,{alignItems:i,autoFocus:a,button:c,dense:v.dense,disabled:C,disableGutters:k,disablePadding:w,divider:O,hasSecondaryAction:_,selected:z}),tt=Bo(U),Y=lt(E,e),s=m.root||f.Root||wo,x=T.root||B.root||{},L=l({className:I(tt.root,x.className,g),disabled:C},P);let F=d||"li";return c&&(L.component=d||"div",L.focusVisibleClassName=I($.focusVisible,A),F=At),_?(F=!L.component&&!d?"div":F,h==="li"&&(F==="li"?F="div":L.component==="li"&&(L.component="div")),r.jsx(J.Provider,{value:v,children:r.jsxs(Do,l({as:h,className:I(tt.container,R),ref:Y,ownerState:U},Q,{children:[r.jsx(s,l({},x,!pt(s)&&{as:F,ownerState:l({},U,x.ownerState)},L,{children:j})),j.pop()]}))})):r.jsx(J.Provider,{value:v,children:r.jsxs(s,l({},x,{as:F,ref:Y},!pt(s)&&{ownerState:l({},U,x.ownerState)},L,{children:[j,b&&r.jsx(Bt,{children:b})]}))})}),Po="data:image/png;base64,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",Ro=[{id:1,title:"View Profile",icon:"mingcute:user-2-fill",color:"text.primary"},{id:2,title:"Account Settings",icon:"material-symbols:settings-account-box-rounded",color:"text.primary"},{id:3,title:"Notifications",icon:"ion:notifications",color:"text.primary"},{id:4,title:"Switch Account",icon:"material-symbols:switch-account",color:"text.primary"},{id:5,title:"Help Center",icon:"material-symbols:live-help",color:"text.primary"},{id:6,title:"Logout",icon:"material-symbols:logout",color:"error.main"}],Oo=()=>{const[t,o]=p.useState(null),e=!!t,n=p.useCallback(a=>{o(a.currentTarget)},[]),i=p.useCallback(()=>{o(null)},[]);return r.jsxs(r.Fragment,{children:[r.jsxs(Jt,{color:"inherit",variant:"text",id:"account-dropdown-menu","aria-controls":e?"account-dropdown-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:n,disableRipple:!0,sx:{borderRadius:2,gap:3.75,px:{xs:0,sm:.625},py:.625,"&:hover":{bgcolor:"transparent"}},children:[r.jsx(Ft,{title:"Nickelfox",arrow:!0,placement:"bottom",children:r.jsx(Vt,{src:Po,sx:{width:44,height:44}})}),r.jsx(V,{color:"common.white",icon:"mingcute:down-fill",width:22.5,height:22.5,sx:a=>({transform:e?"rotate(180deg)":"rotate(0deg)",transition:a.transitions.create("all",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.short})})})]}),r.jsx(Mt,{id:"account-dropdown-menu",anchorEl:t,open:e,onClose:i,MenuListProps:{"aria-labelledby":"account-dropdown-button"},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:Ro.map(a=>r.jsxs(Ut,{onClick:i,children:[r.jsx(Ct,{sx:{minWidth:"0 !important",color:a.color,width:14,height:10,mb:1.5},children:r.jsx(V,{icon:a.icon,color:a.color})}),r.jsx(kt,{sx:c=>({color:a.color,"& .MuiListItemText-primary":{fontSize:c.typography.subtitle2.fontSize,fontFamily:c.typography.subtitle2.fontFamily,fontWeight:c.typography.subtitle2.fontWeight}}),children:a.title})]},a.id))})]})},To=({open:t,handleDrawerToggle:o})=>{const{down:e}=bt(),n=e("sm");return r.jsx(qt,{position:"fixed",sx:{left:0,ml:n?0:t?60:27.5,width:n?1:t?`calc(100% - ${Z}px)`:`calc(100% - ${nt}px)`,paddingRight:"0 !important"},children:r.jsxs(st,{component:rt,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{bgcolor:"background.default",height:116},children:[r.jsxs(rt,{direction:"row",gap:2,alignItems:"center",ml:2.5,flex:"1 1 52.5%",children:[r.jsx(it,{color:"inherit","aria-label":"open drawer",onClick:o,edge:"start",children:r.jsx(V,{icon:t?"ri:menu-unfold-4-line":"ri:menu-unfold-3-line",color:"common.white"})}),r.jsx(it,{color:"inherit",sx:{display:{xs:"flex",sm:"none"}},children:r.jsx(V,{icon:"mdi:search"})}),r.jsx(Nt,{variant:"filled",fullWidth:!0,placeholder:"Search here...",sx:{display:{xs:"none",sm:"flex"}},InputProps:{startAdornment:r.jsx(St,{position:"end",children:r.jsx(V,{icon:"akar-icons:search",width:13,height:13})})}})]}),r.jsxs(rt,{direction:"row",gap:3.75,alignItems:"center",justifyContent:"flex-end",mr:3.75,flex:"1 1 20%",children:[r.jsx($t,{color:"error",badgeContent:" ",variant:"dot",sx:{"& .MuiBadge-badge":{top:11,right:11}},children:r.jsx(it,{sx:{padding:1},children:r.jsx(V,{icon:"ph:bell-bold",width:29,height:32})})}),r.jsx(Oo,{})]})]})})},Eo=[{id:1,path:"/",title:"Dashboard",icon:"mingcute:home-1-fill",active:!0},{id:2,path:"#!",title:"Profile",icon:"clarity:user-line",active:!1},{id:3,path:"#!",title:"Leaderboard",icon:"material-symbols-light:leaderboard-outline",active:!1},{id:4,path:"#!",title:"Order",icon:"ant-design:shopping-cart-outlined",active:!1},{id:5,path:"#!",title:"Product",icon:"lets-icons:bag-alt-light",active:!1},{id:6,path:"#!",title:"Sales Report",icon:"lucide:line-chart",active:!1},{id:7,path:"#!",title:"Message",icon:"bi:chat",active:!1},{id:8,path:"#!",title:"Settings",icon:"mingcute:settings-3-line",active:!1},{id:9,path:"#!",title:"Favourite",icon:"clarity:favorite-line",active:!1},{id:10,path:"#!",title:"History",icon:"ic:round-history",active:!1},{id:11,path:"authentication/login",title:"Login",icon:"tabler:login",active:!0},{id:12,path:"authentication/sign-up",title:"Sign Up",icon:"tdesign:user-add",active:!0}],Mo=({navItem:t,open:o})=>{const{pathname:e}=Dt();return r.jsx(Lo,{disablePadding:!0,sx:n=>({display:"block",px:5,borderRight:o?"":e===t.path?`3px solid ${n.palette.primary.main}`:"3px solid transparent"}),children:r.jsxs(bo,{LinkComponent:ct,href:t.path,sx:{opacity:t.active?1:.5,bgcolor:e===t.path?o?"primary.main":"":"background.default","&:hover":{bgcolor:e===t.path&&o?"primary.dark":"background.paper"},"& .MuiTouchRipple-root":{color:e===t.path?"primary.main":"text.disabled"}},children:[r.jsx(Ct,{sx:{width:20,height:20,mr:o?"auto":0,color:e===t.path?o?"background.default":"primary.main":"text.primary"},children:r.jsx(V,{icon:t.icon,width:1,height:1})}),r.jsx(kt,{primary:t.title,sx:{display:o?"inline-block":"none",opacity:o?1:0,color:e===t.path?"background.default":""}})]})})},No="/nickelfox/LOGO.png",ft=({open:t})=>r.jsxs(r.Fragment,{children:[r.jsx(st,{sx:{position:"fixed",height:98,zIndex:1,bgcolor:"background.default",p:0,justifyContent:"center",width:t?Z-1:nt-1},children:r.jsx(ct,{href:Lt.homeRoot,sx:{mt:3},children:r.jsx(zt,{src:t?Yt:No,alt:t?"logo with text":"logo",height:40})})}),r.jsx(Ht,{style:{maxHeight:"100vh"},children:r.jsx(Gt,{component:"nav",sx:{mt:24.5,py:2.5,height:724,justifyContent:"space-between"},children:Eo.map(o=>r.jsx(Mo,{navItem:o,open:t},o.id))})})]}),So=({open:t})=>{const{down:o}=bt(),e=o("sm");return r.jsx(rt,{component:"footer",direction:"row",justifyContent:{xs:"center",sm:"flex-end"},ml:e?0:t?60:27.5,pr:{xs:3,sm:5.175},pb:6.25,pl:{xs:3,sm:5.25},children:r.jsxs(Qt,{variant:"subtitle1",sx:{textAlign:{xs:"center",sm:"right"}},children:["Made with"," ",r.jsx(at,{component:"span",sx:{color:"error.main",verticalAlign:"middle"},children:"❤"})," ","by"," ",r.jsx(ct,{href:"https://themewagon.com/",target:"_blank",rel:"noopener","aria-label":"Explore ThemeWagon Website",sx:{color:"text.primary","&:hover":{color:"primary.main"}},children:"ThemeWagon"})]})})},Z=240,nt=110,Jo=({children:t})=>{const[o,e]=p.useState(!1),n=()=>e(!o);return r.jsxs(r.Fragment,{children:[r.jsxs(at,{sx:{display:"flex",minHeight:"100vh"},children:[r.jsx(To,{open:o,handleDrawerToggle:n}),r.jsx(gt,{variant:"temporary",open:o,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Z}},children:r.jsx(ft,{open:o})}),r.jsx(gt,{variant:"permanent",component:"aside",open:o,sx:{display:{xs:"none",sm:"block"},width:o?Z:nt,"& .MuiDrawer-paper":{width:o?Z:nt}},children:r.jsx(ft,{open:o})}),r.jsxs(at,{component:"main",overflow:"auto",sx:{width:1,flexGrow:1,pt:5,pr:{xs:3,sm:5.175},pb:6.25,pl:{xs:3,sm:5.25}},children:[r.jsx(st,{sx:{height:96}}),t]})]}),r.jsx(So,{open:o})]})};export{Jo as default,nt as drawerCloseWidth,Z as drawerOpenWidth};
