function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),n=e(require("resize-observer-polyfill")),i=e(require("@use-it/instance/dist/instance"));module.exports=function(e){console.log("pass function ");var r=i({});console.log("pass useInstance");var o=t.useState({}),s=o[0],l=o[1];console.log("pass useState");var f=t.useRef(null);console.log("pass useRef");var c=t.useCallback(function(){if(f.current){var t=function(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var i=e.getBoundingClientRect();n.bounds={top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height}}if(t.indexOf("margin")>-1){var r=getComputedStyle(e);n.margin={top:r?parseInt(r.marginTop):0,right:r?parseInt(r.marginRight):0,bottom:r?parseInt(r.marginBottom):0,left:r?parseInt(r.marginLeft):0}}return n}(f.current,e);r.animFrameID=window.requestAnimationFrame(function(){l(t)})}},[f.current]),a=i(new n(c));return t.useEffect(function(){return f.current&&a&&(a.unobserve(f.current),a.observe(f.current)),function(){window.cancelAnimationFrame(r.animFrameID),a&&(a.disconnect(),a=null)}},[f.current]),[s,f,c]};
//# sourceMappingURL=index.js.map
