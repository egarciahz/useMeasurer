!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("resize-observer-polyfill"),require("@use-it/instance/dist/instance")):"function"==typeof define&&define.amd?define(["react","resize-observer-polyfill","@use-it/instance/dist/instance"],t):e.useMeasurer=t(e.react,e.ResizeObserver,e.useInstance)}(this,function(e,t,n){return t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,function(i){console.log("pass function ");var r=n({});console.log("pass useInstance");var o=e.useState({}),s=o[0],f=o[1];console.log("pass useState");var l=e.useRef(null);console.log("pass useRef");var a=e.useCallback(function(){if(l.current){var e=function(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var i=e.getBoundingClientRect();n.bounds={top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height}}if(t.indexOf("margin")>-1){var r=getComputedStyle(e);n.margin={top:r?parseInt(r.marginTop):0,right:r?parseInt(r.marginRight):0,bottom:r?parseInt(r.marginBottom):0,left:r?parseInt(r.marginLeft):0}}return n}(l.current,i);r.animFrameID=window.requestAnimationFrame(function(){f(e)})}},[l.current]),u=n(new t(a));return e.useEffect(function(){return l.current&&u&&(u.unobserve(l.current),u.observe(l.current)),function(){window.cancelAnimationFrame(r.animFrameID),u&&(u.disconnect(),u=null)}},[l.current]),[s,l,a]}});
//# sourceMappingURL=index.umd.js.map
