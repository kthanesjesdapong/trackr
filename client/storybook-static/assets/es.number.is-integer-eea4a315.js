var x=Object.defineProperty;var i=(e,r)=>x(e,"name",{value:r,configurable:!0});import{_ as u,a7 as b,F as h,aO as j,a0 as $,y as O,aP as w,ac as D,P as N,aQ as P,aR as y,A as S,a4 as I,q as E,aG as U}from"./index-c0974016.js";import{a1 as _}from"./index-681e4b07-d0bdd22e.js";var A=u,F=h.findIndex,L=b,v="findIndex",p=!0;v in[]&&Array(1)[v](function(){p=!1});A({target:"Array",proto:!0,forced:p},{findIndex:i(function(r){return F(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});L(v);var M=u,R=_,q=b;M({target:"Array",proto:!0},{fill:R});q("fill");var G=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),T=$,C=j,V=O,W=w,K=D,c=G,d=N,Q=P,X=y;C("search",function(e,r,t){return[i(function(a){var s=K(this),o=W(a)?void 0:Q(a,e);return o?T(o,a,s):new RegExp(a)[e](d(s))},"search"),function(n){var a=V(this),s=d(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;c(l,0)||(a.lastIndex=0);var f=X(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var g=S,k=i(function(e){return e!==void 0&&(g(e,"value")||g(e,"writable"))},"isDataDescriptor$1"),z=u,B=$,H=I,J=O,Y=k,Z=E,rr=U;function m(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(J(e)===t)return e[r];if(n=Z.f(e,r),n)return Y(n)?n.value:n.get===void 0?void 0:B(n.get,t);if(H(a=rr(e)))return m(a,r,t)}i(m,"get");z({target:"Reflect",stat:!0},{get:m});var er=I,ar=Math.floor,tr=Number.isInteger||i(function(r){return!er(r)&&isFinite(r)&&ar(r)===r},"isInteger"),nr=u,ir=tr;nr({target:"Number",stat:!0},{isInteger:ir});export{tr as i};
//# sourceMappingURL=es.number.is-integer-eea4a315.js.map
