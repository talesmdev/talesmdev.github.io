/*! lifestyle-1.js | INFINITECRED | Css ninja 2020-2021 */
"use strict";$(document).ready((function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,e=window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame;window.onload=function(){!function(n,i){var s=Math.sqrt,o=Math.cos,r=Math.sin;function a(t){this[1]={1:t[0],2:t[1],3:t[2]},this[2]={1:t[3],2:t[4],3:t[5]},this[3]={1:t[6],2:t[7],3:t[8]}}var u=a.prototype;function c(t,e,n){this.x=t,this.y=e,this.z=n||0}a.Rotation=function(t,e){var n=r(t),i=o(t),s=1-i,u=e.x*e.y,c=e.x*e.z,f=e.y*e.z,l=e.x*e.x,d=e.y*e.y,m=e.z*e.z;return new a([i+l*s,u*s-e.z*n,c*s+e.y*n,u*s+e.z*n,i+d*s,f*s-e.x*n,c*s-e.y*n,f*s+e.x*n,i+m*s])},u.mul_v=function(t){var e,n=[];for(e=1;e<=3;++e)n[e-1]=t[0]*this[e][1]+t[1]*this[e][2]+t[2]*this[e][3];return n},a.rotate_pts=function(t,e){for(var n=e.length;n--;)e[n]=t.mul_v(e[n]);return e};var f=c.prototype;function l(t){return t.getBoundingClientRect?m(t):d(t)}function d(t){for(var e=0,n=0;t;)e+=parseInt(t.offsetTop),n+=parseInt(t.offsetLeft),t=t.offsetParent;return{top:e,left:n}}function m(t){var e=t.getBoundingClientRect(),n=document.body,i=document.documentElement,s=window.pageYOffset||i.scrollTop||n.scrollTop,o=window.pageXOffset||i.scrollLeft||n.scrollLeft,r=i.clientTop||n.clientTop||0,a=i.clientLeft||n.clientLeft||0;return{top:0|e.top+s-r,left:0|e.left+o-a}}f.length=function(){var t=this.x*this.x,e=this.y*this.y,n=this.z*this.z;return s(t+e+n)},f.cross=function(t){return new c(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},f.normalized=function(){var t=this.length();return new c(this.x/t,this.y/t,this.z/t)};var p,y={radius_x:100,radius_y:100,radius_z:100,radius_stop:.2,scale_max:1,scale_min:.5,scale_steps:50,opacity_max:1,opacity_min:.5,opacity_steps:20};if(i)for(p in y)i[p]||(i[p]=y[p]);else i=y;var h,_=document.getElementById(n),w=l(_),v=_.offsetWidth,z=_.offsetHeight,x=s(v*v+z*z)/2,g=_.querySelectorAll(".cloud-element"),A=g.length,R=C(A,i.radius_x,i.radius_y,i.radius_z),q={step:(i.scale_max-i.scale_min)/i.scale_steps,z_step:2*i.radius_z/i.scale_steps,arr:new Array(A)},F={step:(i.opacity_max-i.opacity_min)/i.opacity_steps,z_step:2*i.radius_z/i.opacity_steps,arr:new Array(A)},T={x:i.radius_stop*i.radius_x,y:i.radius_stop*i.radius_y},b=new c(0,0,1),L=0,M=0;function C(t,e,n,i){var a,u,c,f,l=[],d=Math.PI*(3-s(5)),m=2/t;for(a=0;a<t;++a)c=s(1-(u=a*m-1+m/2)*u),f=a*d,l.push([o(f)*c*e,u*n,r(f)*c*i]);return l}function E(t,e,n){var s,o,r=-i.radius_z;for(s=0;s<A;++s)for(o=0;o<=e;++o)if(R[s][2]<=r+o*t.z_step){t.arr[s]=n+o*t.step;break}}function I(t){return"scale("+q.arr[t]+")"}function k(t){var e=g[t].offsetWidth/2,n=g[t].offsetHeight/2,i=z/2;return"translate3d("+(v/2+R[t][0]-e|0)+"px,"+(i+R[t][1]-n|0)+"px,"+R[t][0]+"px)"}function B(t,e){var n=g[t];n.style.webkitTransform=e,n.style.mozTransform=e,n.style.msTransform=e,n.style.oTransform=e,n.style.transform=e}function P(t){g[t].style.opacity=F.arr[t]}function H(){var t=A;for(_.style.overflow="hidden";t--;)g[t].style.position="absolute"}function O(){var t=A;for(E(q,i.scale_steps,i.scale_min),E(F,i.opacity_steps,i.opacity_min);t--;)B(t,k(t)+" "+I(t)),P(t)}function W(t){var e=t||window.event,n=e.clientX-w.left-v/2,i=e.clientY-w.top-z/2,s=new c(n,i,0);M=Math.abs(n)<T.x&&Math.abs(i)<T.y?0:s.length()/x,X(),b=s.cross(new c(0,0,1)).normalized()}function X(){L=Math.PI*M/90}function Y(){var t;L&&(t=a.Rotation(L,b),R=a.rotate_pts(t,R))}function S(){h=t(S),Y(),O()}function $(){h=t($),M>.01?(M*=.96,X()):e(h),Y(),O()}H(),_.addEventListener("mousemove",W,!1),_.addEventListener("mouseleave",(function(){e(h),$()}),!1),_.addEventListener("mouseenter",(function(){e(h),S()}),!1),O()}("cl",{radius_x:200,radius_y:200,radius_z:200,radius_stop:.3})}}));