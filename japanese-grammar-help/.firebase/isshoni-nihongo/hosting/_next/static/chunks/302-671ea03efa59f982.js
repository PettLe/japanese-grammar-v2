"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[302],{3908:function(e,r,t){t.d(r,{fg:function(){return n},gy:function(){return i},rV:function(){return l}});var o=t(4090);function n(e){return{UNSAFE_getDOMNode:()=>e.current}}function i(e){let r=(0,o.useRef)(null);return(0,o.useImperativeHandle)(e,()=>r.current),r}function l(e,r){let t=(0,o.useRef)(null);return(0,o.useImperativeHandle)(e,()=>(function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return{...n(e),focus(){r.current&&r.current.focus()}}})(t,r)),t}window.document&&window.document.createElement},5142:function(e,r,t){t.d(r,{W:function(){return o}});function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];for(var o,n,i=0,l="";i<r.length;)(o=r[i++])&&(n=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(o))&&(l&&(l+=" "),l+=n);return l}},4808:function(e,r,t){t.d(r,{Kn:function(){return n},PB:function(){return l},Ts:function(){return o},mf:function(){return i}});var o=!1;function n(e){let r=typeof e;return null!=e&&("object"===r||"function"===r)&&!Array.isArray(e)}function i(e){return"function"==typeof e}var l=e=>e?"true":void 0},4291:function(e,r,t){t.d(r,{Gp:function(){return n},oe:function(){return i}});var o=t(4090);function n(e){return(0,o.forwardRef)(e)}var i=function(e,r){let t=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(!r)return[e,{}];let o=r.reduce((r,t)=>t in e?{...r,[t]:e[t]}:r,{});return t?[Object.keys(e).filter(e=>!r.includes(e)).reduce((r,t)=>({...r,[t]:e[t]}),{}),o]:[e,o]}},2044:function(e,r,t){t.d(r,{tv:function(){return et}});var o=["0","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","1","2","3","3.5","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"].map(e=>"unit-".concat(e)),n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=e=>!e||"object"!=typeof e||0===Object.keys(e).length,l=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function a(e){let r=[];return function e(r,t){r.forEach(function(r){Array.isArray(r)?e(r,t):t.push(r)})}(e,r),r}var s=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return a(r).filter(Boolean)},c=(e,r)=>{let t={},o=Object.keys(e),n=Object.keys(r);for(let i of o)if(n.includes(i)){let o=e[i],n=r[i];"object"==typeof o&&"object"==typeof n?t[i]=c(o,n):Array.isArray(o)||Array.isArray(n)?t[i]=s(n,o):t[i]=n+" "+o}else t[i]=e[i];for(let e of n)o.includes(e)||(t[e]=r[e]);return t},u=e=>e&&"string"==typeof e?e.replace(/\s+/g," ").trim():e,d=/^\[(.+)\]$/;function f(e,r){var t=e;return r.split("-").forEach(function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}var p=/\s+/;function b(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){if("string"==typeof r)return r;for(var t,o="",n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function g(){for(var e,r,t,o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];var l=function(o){var i=n[0];return r=(e=function(e){var r,t,o,n,i,l,a,s,c,u,p;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function n(n,i){t.set(n,i),++r>e&&(r=0,o=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(t=1===(r=e.separator||":").length,o=r[0],n=r.length,function(e){for(var i,l=[],a=0,s=0,c=0;c<e.length;c++){var u=e[c];if(0===a){if(u===o&&(t||e.slice(c,c+n)===r)){l.push(e.slice(s,c)),s=c+n;continue}if("/"===u){i=c;continue}}"["===u?a++:"]"===u&&a--}var d=0===l.length?e:e.substring(s),f=d.startsWith("!"),p=f?d.substring(1):d;return{modifiers:l,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}),...(s=e.theme,c=e.prefix,u={nextPart:new Map,validators:[]},(p=Object.entries(e.classGroups),c?p.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?c+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[c+e[0],e[1]]})):e})]}):p).forEach(function(e){var r=e[0];(function e(r,t,o,n){r.forEach(function(r){if("string"==typeof r){(""===r?t:f(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(n),t,o,n);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(function(r){var i=r[0];e(r[1],f(t,i),o,n)})})})(e[1],u,r,s)}),i=e.conflictingClassGroups,a=void 0===(l=e.conflictingClassGroupModifiers)?{}:l,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,t){if(0===r.length)return t.classGroupId;var o,n=r[0],i=t.nextPart.get(n),l=i?e(r.slice(1),i):void 0;if(l)return l;if(0!==t.validators.length){var a=r.join("-");return null===(o=t.validators.find(function(e){return(0,e.validator)(a)}))||void 0===o?void 0:o.classGroupId}}(r,u)||function(e){if(d.test(e)){var r=d.exec(e)[1],t=null==r?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){var t=i[e]||[];return r&&a[e]?[].concat(t,a[e]):t}})}}(n.slice(1).reduce(function(e,r){return r(e)},i()))).cache.get,t=e.cache.set,l=a,a(o)};function a(o){var n,i,l,a,s,c=r(o);if(c)return c;var u=(i=(n=e).splitModifiers,l=n.getClassGroupId,a=n.getConflictingClassGroupIds,s=new Set,o.trim().split(p).map(function(e){var r=i(e),t=r.modifiers,o=r.hasImportantModifier,n=r.baseClassName,a=r.maybePostfixModifierPosition,s=l(a?n.substring(0,a):n),c=!!a;if(!s){if(!a||!(s=l(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var u=(function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)}),r.push.apply(r,t.sort()),r})(t).join(":");return{isTailwindClass:!0,modifierId:o?u+"!":u,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,o=e.hasPostfixModifier,n=r+t;return!s.has(n)&&(s.add(n),a(t,o).forEach(function(e){return s.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return t(o,u),u}return function(){return l(b.apply(null,arguments))}}function m(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var v=/^\[(?:([a-z-]+):)?(.+)\]$/i,y=/^\d+\/\d+$/,h=new Set(["px","full","screen"]),w=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,x=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,k=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function j(e){return N(e)||h.has(e)||y.test(e)||A(e)}function A(e){return R(e,"length",T)}function z(e){return R(e,"size",W)}function C(e){return R(e,"position",W)}function M(e){return R(e,"url",_)}function O(e){return R(e,"number",N)}function N(e){return!Number.isNaN(Number(e))}function G(e){return e.endsWith("%")&&N(e.slice(0,-1))}function P(e){return $(e)||R(e,"number",$)}function I(e){return v.test(e)}function S(){return!0}function V(e){return w.test(e)}function E(e){return R(e,"",B)}function R(e,r,t){var o=v.exec(e);return!!o&&(o[1]?o[1]===r:t(o[2]))}function T(e){return x.test(e)}function W(){return!1}function _(e){return e.startsWith("url(")}function $(e){return Number.isInteger(Number(e))}function B(e){return k.test(e)}function q(){var e=m("colors"),r=m("spacing"),t=m("blur"),o=m("brightness"),n=m("borderColor"),i=m("borderRadius"),l=m("borderSpacing"),a=m("borderWidth"),s=m("contrast"),c=m("grayscale"),u=m("hueRotate"),d=m("invert"),f=m("gap"),p=m("gradientColorStops"),b=m("gradientColorStopPositions"),g=m("inset"),v=m("margin"),y=m("opacity"),h=m("padding"),w=m("saturate"),x=m("scale"),k=m("sepia"),R=m("skew"),T=m("space"),W=m("translate"),_=function(){return["auto","contain","none"]},$=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",I,r]},q=function(){return[I,r]},H=function(){return["",j]},J=function(){return["auto",N,I]},K=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},D=function(){return["solid","dashed","dotted","double","none"]},F=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},U=function(){return["start","end","center","between","around","evenly","stretch"]},L=function(){return["","0",I]},Q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},X=function(){return[N,O]},Y=function(){return[N,I]};return{cacheSize:500,theme:{colors:[S],spacing:[j],blur:["none","",V,I],brightness:X(),borderColor:[e],borderRadius:["none","","full",V,I],borderSpacing:q(),borderWidth:H(),contrast:X(),grayscale:L(),hueRotate:Y(),invert:L(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[G,A],inset:B(),margin:B(),opacity:X(),padding:q(),saturate:X(),scale:X(),sepia:L(),skew:Y(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",I]}],container:["container"],columns:[{columns:[V]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(K(),[I])}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",I]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",P]}],"grid-cols":[{"grid-cols":[S]}],"col-start-end":[{col:["auto",{span:["full",P]},I]}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":[S]}],"row-start-end":[{row:["auto",{span:[P]},I]}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",I]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",I]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(U())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(U(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(U(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",I,r]}],"min-w":[{"min-w":["min","max","fit",I,j]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[V]},V,I]}],h:[{h:[I,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",I,j]}],"max-h":[{"max-h":[I,r,"min","max","fit"]}],"font-size":[{text:["base",V,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[S]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",N,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",I,j]}],"list-image":[{"list-image":["none",I]}],"list-style-type":[{list:["none","disc","decimal",I]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(D(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",j]}],"underline-offset":[{"underline-offset":["auto",I,j]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(K(),[C])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",z]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},M]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[].concat(D(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:D()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(D())}],"outline-offset":[{"outline-offset":[I,j]}],"outline-w":[{outline:[j]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[j]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",V,E]}],"shadow-color":[{shadow:[S]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":F()}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",V,I]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",I]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",I]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",I]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[P,I]}],"translate-x":[{"translate-x":[W]}],"translate-y":[{"translate-y":[W]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",I]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[j,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var H=g(q),J=Object.prototype.hasOwnProperty,K=new Set(["string","number","boolean"]),D={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},F=e=>e||void 0,U=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return F(a(r).filter(Boolean).join(" "))},L=null,Q={},X=!1,Y=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return e=>e.twMerge?((!L||X)&&(X=!1,L=i(Q)?H:function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return"function"==typeof e?g.apply(void 0,[q,e].concat(t)):g.apply(void 0,[function(){return function(e,r){for(var t in r)(function e(r,t,o){if(!J.call(r,t)||K.has(typeof o)||null===o){r[t]=o;return}if(Array.isArray(o)&&Array.isArray(r[t])){r[t]=r[t].concat(o);return}if("object"==typeof o&&"object"==typeof r[t]){if(null===r[t]){r[t]=o;return}for(var n in o)e(r[t],n,o[n])}})(e,t,r[t]);return e}(q(),e)}].concat(t))}(Q)),F(L(U(r)))):U(r)},Z=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=U(e[t],r[t]):e[t]=r[t];return e},ee=(e,r)=>{let{extend:t=null,slots:o={},variants:a={},compoundVariants:d=[],compoundSlots:f=[],defaultVariants:p={}}=e,b={...D,...r},g=null!=t&&t.base?U(t.base,null==e?void 0:e.base):null==e?void 0:e.base,m=null!=t&&t.variants&&!i(t.variants)?c(a,t.variants):a,v=null!=t&&t.defaultVariants&&!i(t.defaultVariants)?{...t.defaultVariants,...p}:p;i(b.twMergeConfig)||l(b.twMergeConfig,Q)||(X=!0,Q=b.twMergeConfig);let y=i(null==t?void 0:t.slots),h=i(o)?{}:{base:U(null==e?void 0:e.base,y&&(null==t?void 0:t.base)),...o},w=y?h:Z({...null==t?void 0:t.slots},i(h)?{base:null==e?void 0:e.base}:h),x=e=>{if(i(m)&&i(o)&&y)return Y(g,null==e?void 0:e.class,null==e?void 0:e.className)(b);if(d&&!Array.isArray(d))throw TypeError('The "compoundVariants" prop must be an array. Received: '.concat(typeof d));if(f&&!Array.isArray(f))throw TypeError('The "compoundSlots" prop must be an array. Received: '.concat(typeof f));let r=function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3?arguments[3]:void 0,n=t;if("string"==typeof r)n=n.concat(u(r).split(" ").map(r=>"".concat(e,":").concat(r)));else if(Array.isArray(r))n=n.concat(r.reduce((r,t)=>r.concat("".concat(e,":").concat(t)),[]));else if("object"==typeof r&&"string"==typeof o){for(let t in r)if(r.hasOwnProperty(t)&&t===o){let i=r[t];if(i&&"string"==typeof i){let r=u(i);n[o]?n[o]=n[o].concat(r.split(" ").map(r=>"".concat(e,":").concat(r))):n[o]=r.split(" ").map(r=>"".concat(e,":").concat(r))}else Array.isArray(i)&&i.length>0&&(n[o]=i.reduce((r,t)=>r.concat("".concat(e,":").concat(t)),[]))}}return n},l=function(t){var o;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=l[t];if(!c||i(c))return null;let u=null!=(o=null==s?void 0:s[t])?o:null==e?void 0:e[t];if(null===u)return null;let d=n(u),f=Array.isArray(b.responsiveVariants)&&b.responsiveVariants.length>0||!0===b.responsiveVariants,p=null==v?void 0:v[t],g=[];if("object"==typeof d&&f)for(let[e,t]of Object.entries(d)){let o=c[t];if("initial"===e){p=t;continue}Array.isArray(b.responsiveVariants)&&!b.responsiveVariants.includes(e)||(g=r(e,o,g,a))}let y=c[d]||c[n(p)];return"object"==typeof g&&"string"==typeof a&&g[a]?Z(g,y):g.length>0?(g.push(y),g):y},a=(e,r)=>{if(!m||"object"!=typeof m)return null;let t=[];for(let o in m){let n=l(o,m,e,r),i="base"===e&&"string"==typeof n?n:n&&n[e];i&&(t[t.length]=i)}return t},c={};for(let r in e)void 0!==e[r]&&(c[r]=e[r]);let p=(r,t)=>{var o;let n="object"==typeof(null==e?void 0:e[r])?{[r]:null==(o=e[r])?void 0:o.initial}:{};return{...v,...c,...n,...t}},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,t=[];for(let{class:o,className:n,...i}of e){let e=!0;for(let[t,o]of Object.entries(i)){let n=p(t,r);if(Array.isArray(o)){if(!o.includes(n[t])){e=!1;break}}else if(n[t]!==o){e=!1;break}}e&&(o&&t.push(o),n&&t.push(n))}return t},x=e=>{let r=h(d,e);return s(h(null==t?void 0:t.compoundVariants,e),r)},k=e=>{let r=x(e);if(!Array.isArray(r))return r;let t={};for(let e of r)if("string"==typeof e&&(t.base=Y(t.base,e)(b)),"object"==typeof e)for(let[r,o]of Object.entries(e))t[r]=Y(t[r],o)(b);return t},j=e=>{if(f.length<1)return null;let r={};for(let{slots:t=[],class:o,className:n,...l}of f){if(!i(l)){let r=!0;for(let t of Object.keys(l)){let o=p(t,e)[t];if(void 0===o||(Array.isArray(l[t])?!l[t].includes(o):l[t]!==o)){r=!1;break}}if(!r)continue}for(let e of t)r[e]=r[e]||[],r[e].push([o,n])}return r};if(!i(o)||!y){let e={};if("object"==typeof w&&!i(w))for(let r of Object.keys(w))e[r]=e=>{var t,o;return Y(w[r],a(r,e),(null!=(t=k(e))?t:[])[r],(null!=(o=j(e))?o:[])[r],null==e?void 0:e.class,null==e?void 0:e.className)(b)};return e}return Y(g,m?Object.keys(m).map(e=>l(e,m)):null,x(),null==e?void 0:e.class,null==e?void 0:e.className)(b)};return x.variantKeys=(()=>{if(!(!m||"object"!=typeof m))return Object.keys(m)})(),x.extend=t,x.base=g,x.slots=w,x.variants=m,x.defaultVariants=v,x.compoundSlots=f,x.compoundVariants=d,x},er=["small","medium","large"],et=(e,r)=>{var t,n,i;return ee(e,{...r,twMerge:null==(t=null==r?void 0:r.twMerge)||t,twMergeConfig:{...null==r?void 0:r.twMergeConfig,theme:{...null==(n=null==r?void 0:r.twMergeConfig)?void 0:n.theme,opacity:["disabled"],spacing:["divider","unit",...o],borderWidth:er,borderRadius:er},classGroups:{...null==(i=null==r?void 0:r.twMergeConfig)?void 0:i.classGroups,shadow:[{shadow:er}],"font-size":[{text:["tiny",...er]}],"bg-image":["bg-stripe-gradient"],"min-w":[{"min-w":["unit",...o]}],"min-h":[{"min-h":["unit",...o]}]}}})}}}]);