import{e as b,n as m,G as s,g as R,y as A,aK as C,aq as w,b as n,H as o,aL as L,I as P,i as N}from"./index.3fe0e41c.js";const[S,t]=b("nav-bar"),y={title:String,fixed:Boolean,zIndex:m,border:s,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var E=R({name:S,props:y,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:a}){const c=A(),f=C(c,t),d=r=>l("clickLeft",r),h=r=>l("clickRight",r),g=()=>a.left?a.left():[e.leftArrow&&n(P,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:t("text")},[e.leftText])],x=()=>a.right?a.right():n("span",{class:t("text")},[e.rightText]),i=()=>{const{title:r,fixed:u,border:v,zIndex:T}=e,k=w(T),B=e.leftArrow||e.leftText||a.left,I=e.rightText||a.right;return n("div",{ref:c,style:k,class:[t({fixed:u}),{[L]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:t("content")},[B&&n("div",{class:[t("left"),e.clickable?o:""],onClick:d},[g()]),n("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():r]),I&&n("div",{class:[t("right"),e.clickable?o:""],onClick:h},[x()])])])};return()=>e.fixed&&e.placeholder?f(i):i()}});const _=N(E);export{_ as N};
