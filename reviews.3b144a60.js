parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"C1JV":[function(require,module,exports) {
var e=1,l=document.documentElement.clientWidth;function t(l){y(e+=l)}y(e),window.addEventListener("resize",function(){l=document.documentElement.clientWidth,y(e)},!1);var n=document.getElementById("ArrowRight");n.onclick=function(){t(1)};var s=document.getElementById("ArrowLeft");s.onclick=function(){t(-1)};for(var i=document.getElementsByClassName("reviews-dot"),o=function(e){i[e].onclick=function(){c(e+1)}},a=0;a<i.length;a++)o(a);function c(l){y(e=l)}function y(t){var n=document.getElementsByClassName("reviews-slide");t>n.length&&(e=1),t<1&&(e=n.length);for(var s=0;s<n.length;s++)n[s].style.display="none";n[e-1].style.display="block";for(var i=document.getElementsByClassName("reviews-dot"),o=0;o<i.length;o++)i[o].className=i[o].className.replace("active",""),i[o].style.display="none",i[o].style.order=0,l<768&&(i[o].style.margin=0);if(i[e-1].className+=" active",l<768)1===e?(i[i.length-1].style.display="block",i[i.length-1].style.order=-1,i[i.length-1].style.margin="0 10px 0 0",i[0].style.display="block",i[0].style.margin="0 10px 0 0",i[1].style.display="block"):e===i.length?(i[i.length-2].style.display="block",i[i.length-2].style.margin="0 10px 0 0",i[i.length-1].style.display="block",i[i.length-1].style.margin="0 10px 0 0",i[0].style.display="block",i[0].style.order=99):(i[e-2].style.display="block",i[e-2].style.margin="0 10px 0 0",i[e-1].style.display="block",i[e-1].style.margin="0 10px 0 0",i[e].style.display="block");else for(var a=0;a<i.length;a++)i[a].style.display="block"}
},{}]},{},["C1JV"], null)
//# sourceMappingURL=/HellEN/reviews.3b144a60.js.map