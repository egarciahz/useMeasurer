!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("resize-observer-polyfill"),require("@use-it/instance")):"function"==typeof define&&define.amd?define(["react","resize-observer-polyfill","@use-it/instance"],t):e.useMeasurer=t(e.react,e.ResizeObserver,e.useInstance)}(this,function(e,t,n){return t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,function(r){var i=n({}),o=e.useState({}),f=o[0],u=o[1],l=e.useRef(null),s=e.useCallback(function(){if(l.current){var e=function(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var r=e.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(t.indexOf("margin")>-1){var i=getComputedStyle(e);n.margin={top:i?parseInt(i.marginTop):0,right:i?parseInt(i.marginRight):0,bottom:i?parseInt(i.marginBottom):0,left:i?parseInt(i.marginLeft):0}}return n}(l.current,r);i.animFrameID=window.requestAnimationFrame(function(){u(e)})}},[l.current]),c=n(new t(s));return e.useEffect(function(){return l.current&&c&&(c.unobserve(l.current),c.observe(l.current)),function(){window.cancelAnimationFrame(i.animFrameID),c&&(c.disconnect(),c=null)}},[l.current]),[f,l,s]}});
