(function(_){for(var r in _){_[r].__farm_resource_pot__='index_59a1.js';(globalThis || window || global)['9cc96d5e1508b45fce2fa7ddc6f6ff56'].__farm_module_system__.register(r,_[r])}})({"c34e9bc4":function t(t,c,s,e){"use strict";t.exports=s("c6339496",!0);},"c6339496":/**
* vue v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("fb7e4917",!0),l=n("2741f5e4",!0),o=n("8a69b5b7",!0),u=function(e){var t=Object.create(null);if(e)for(var n in e)t[n]=e[n];return t.default=e,Object.freeze(t);}(l);let c=new WeakMap;function f(e,t){let n;if(!o.isString(e)){if(!e.nodeType)return o.NOOP;e=e.innerHTML;}let r=e,l=((n=c.get(null!=t?t:o.EMPTY_OBJ))||(n=Object.create(null),c.set(null!=t?t:o.EMPTY_OBJ,n)),n),f=l[r];if(f)return f;if("#"===e[0]){let t=document.querySelector(e);e=t?t.innerHTML:"";}let s=o.extend({hoistStatic:!0,onError:void 0,onWarn:o.NOOP},t);s.isCustomElement||"undefined"==typeof customElements||(s.isCustomElement=e=>!!customElements.get(e));let{code:a}=i.compile(e,s),m=Function("Vue",a)(u);return m._rc=!0,l[r]=m;}l.registerRuntimeCompiler(f),t.compile=f,Object.keys(l).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(t,e)||(t[e]=l[e]);});},"dac0745e":/**
* vue v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e(e,f,n,_){e._m(f),n("2741f5e4");var a=n("2741f5e4");e._e(f,a);},"ec61a43c":/**
* vue v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("fb7e4917",!0),l=n("2741f5e4",!0),i=n("8a69b5b7",!0),a=function(e){var t=Object.create(null);if(e)for(var n in e)t[n]=e[n];return t.default=e,Object.freeze(t);}(l);let c=new WeakMap;function u(e,t){let n;if(!i.isString(e)){if(!e.nodeType)return l.warn("invalid template option: ",e),i.NOOP;e=e.innerHTML;}let r=e,u=((n=c.get(null!=t?t:i.EMPTY_OBJ))||(n=Object.create(null),c.set(null!=t?t:i.EMPTY_OBJ,n)),n),f=u[r];if(f)return f;if("#"===e[0]){let t=document.querySelector(e);t||l.warn(`Template element not found or is empty: ${e}`),e=t?t.innerHTML:"";}let s=i.extend({hoistStatic:!0,onError:p,onWarn:e=>p(e,!0)},t);s.isCustomElement||"undefined"==typeof customElements||(s.isCustomElement=e=>!!customElements.get(e));let{code:m}=o.compile(e,s);function p(t,n=!1){let r=n?t.message:`Template compilation error: ${t.message}`,o=t.loc&&i.generateCodeFrame(e,t.loc.start.offset,t.loc.end.offset);l.warn(o?`${r}
${o}`:r);}let d=Function("Vue",m)(a);return d._rc=!0,u[r]=d;}l.registerRuntimeCompiler(u),t.compile=u,Object.keys(l).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(t,e)||(t[e]=l[e]);});},"fb7e4917":/**
* @vue/compiler-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e(e,t,r,n){let o;e._m(t),e.o(t,"DOMDirectiveTransforms",()=>C),e.o(t,"DOMErrorCodes",()=>I),e.o(t,"DOMErrorMessages",()=>M),e.o(t,"DOMNodeTransforms",()=>X),e.o(t,"TRANSITION",()=>u),e.o(t,"TRANSITION_GROUP",()=>N),e.o(t,"V_MODEL_CHECKBOX",()=>p),e.o(t,"V_MODEL_DYNAMIC",()=>c),e.o(t,"V_MODEL_RADIO",()=>a),e.o(t,"V_MODEL_SELECT",()=>E),e.o(t,"V_MODEL_TEXT",()=>_),e.o(t,"V_ON_WITH_KEYS",()=>d),e.o(t,"V_ON_WITH_MODIFIERS",()=>m),e.o(t,"V_SHOW",()=>T),e.o(t,"compile",()=>R),e.o(t,"createDOMCompilerError",()=>g),e.o(t,"parse",()=>b),e.o(t,"parserOptions",()=>O),e.o(t,"transformStyle",()=>S);var i=r("75479a4c"),s=r("8a69b5b7"),l=r("75479a4c");e._e(t,l);let a=Symbol(""),p=Symbol(""),_=Symbol(""),E=Symbol(""),c=Symbol(""),m=Symbol(""),d=Symbol(""),T=Symbol(""),u=Symbol(""),N=Symbol("");i.registerRuntimeHelpers({[a]:"vModelRadio",[p]:"vModelCheckbox",[_]:"vModelText",[E]:"vModelSelect",[c]:"vModelDynamic",[m]:"withModifiers",[d]:"withKeys",[T]:"vShow",[u]:"Transition",[N]:"TransitionGroup"});let O={parseMode:"html",isVoidTag:s.isVoidTag,isNativeTag:e=>s.isHTMLTag(e)||s.isSVGTag(e)||s.isMathMLTag(e),isPreTag:e=>"pre"===e,decodeEntities:function(e,t=!1){return(o||(o=document.createElement("div")),t)?(o.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,o.children[0].getAttribute("foo")):(o.innerHTML=e,o.textContent);},isBuiltInComponent:e=>"Transition"===e||"transition"===e?u:"TransitionGroup"===e||"transition-group"===e?N:void 0,getNamespace(e,t,r){let n=t?t.ns:r;if(t&&2===n){if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some(e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content))&&(n=0);}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(n=0);}else t&&1===n&&("foreignObject"===t.tag||"desc"===t.tag||"title"===t.tag)&&(n=0);if(0===n){if("svg"===e)return 1;if("math"===e)return 2;}return n;}},S=e=>{1===e.type&&e.props.forEach((t,r)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[r]={type:7,name:"bind",arg:i.createSimpleExpression("style",!0,t.loc),exp:h(t.value.content,t.loc),modifiers:[],loc:t.loc});});},h=(e,t)=>{let r=s.parseStringStyle(e);return i.createSimpleExpression(JSON.stringify(r),!1,t,3);};function g(e,t){return i.createCompilerError(e,t,void 0);}let I={X_V_HTML_NO_EXPRESSION:53,53:"X_V_HTML_NO_EXPRESSION",X_V_HTML_WITH_CHILDREN:54,54:"X_V_HTML_WITH_CHILDREN",X_V_TEXT_NO_EXPRESSION:55,55:"X_V_TEXT_NO_EXPRESSION",X_V_TEXT_WITH_CHILDREN:56,56:"X_V_TEXT_WITH_CHILDREN",X_V_MODEL_ON_INVALID_ELEMENT:57,57:"X_V_MODEL_ON_INVALID_ELEMENT",X_V_MODEL_ARG_ON_ELEMENT:58,58:"X_V_MODEL_ARG_ON_ELEMENT",X_V_MODEL_ON_FILE_INPUT_ELEMENT:59,59:"X_V_MODEL_ON_FILE_INPUT_ELEMENT",X_V_MODEL_UNNECESSARY_VALUE:60,60:"X_V_MODEL_UNNECESSARY_VALUE",X_V_SHOW_NO_EXPRESSION:61,61:"X_V_SHOW_NO_EXPRESSION",X_TRANSITION_INVALID_CHILDREN:62,62:"X_TRANSITION_INVALID_CHILDREN",X_IGNORED_SIDE_EFFECT_TAG:63,63:"X_IGNORED_SIDE_EFFECT_TAG",__EXTEND_POINT__:64,64:"__EXTEND_POINT__"},M={53:"v-html is missing expression.",54:"v-html will override element children.",55:"v-text is missing expression.",56:"v-text will override element children.",57:"v-model can only be used on <input>, <textarea> and <select> elements.",58:"v-model argument is not supported on plain elements.",59:"v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",60:"Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",61:"v-show is missing expression.",62:"<Transition> expects exactly one child element or component.",63:"Tags with side effect (<script> and <style>) are ignored in client component templates."},f=s.makeMap("passive,once,capture"),y=s.makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),L=s.makeMap("left,right"),v=s.makeMap("onkeyup,onkeydown,onkeypress",!0),x=(e,t,r,n)=>{let o=[],s=[],l=[];for(let a=0;a<t.length;a++){let p=t[a];"native"===p&&i.checkCompatEnabled("COMPILER_V_ON_NATIVE",r,n)?l.push(p):f(p)?l.push(p):L(p)?i.isStaticExp(e)?v(e.content)?o.push(p):s.push(p):(o.push(p),s.push(p)):y(p)?s.push(p):o.push(p);}return{keyModifiers:o,nonKeyModifiers:s,eventOptionModifiers:l};},D=(e,t)=>i.isStaticExp(e)&&"onclick"===e.content.toLowerCase()?i.createSimpleExpression(t,!0):4!==e.type?i.createCompoundExpression(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,V=(e,t)=>{1===e.type&&0===e.tagType&&("script"===e.tag||"style"===e.tag)&&t.removeNode();},X=[S],C={cloak:i.noopDirectiveTransform,html:(e,t,r)=>{let{exp:n,loc:o}=e;return n||r.onError(g(53,o)),t.children.length&&(r.onError(g(54,o)),t.children.length=0),{props:[i.createObjectProperty(i.createSimpleExpression("innerHTML",!0,o),n||i.createSimpleExpression("",!0))]};},text:(e,t,r)=>{let{exp:n,loc:o}=e;return n||r.onError(g(55,o)),t.children.length&&(r.onError(g(56,o)),t.children.length=0),{props:[i.createObjectProperty(i.createSimpleExpression("textContent",!0),n?i.getConstantType(n,r)>0?n:i.createCallExpression(r.helperString(i.TO_DISPLAY_STRING),[n],o):i.createSimpleExpression("",!0))]};},model:(e,t,r)=>{let n=i.transformModel(e,t,r);if(!n.props.length||1===t.tagType)return n;e.arg&&r.onError(g(58,e.arg.loc));let{tag:o}=t,s=r.isCustomElement(o);if("input"===o||"textarea"===o||"select"===o||s){let l=_,m=!1;if("input"===o||s){let n=i.findProp(t,"type");if(n){if(7===n.type)l=c;else if(n.value)switch(n.value.content){case"radio":l=a;break;case"checkbox":l=p;break;case"file":m=!0,r.onError(g(59,e.loc));}}else i.hasDynamicKeyVBind(t)&&(l=c);}else"select"===o&&(l=E);m||(n.needRuntime=r.helper(l));}else r.onError(g(57,e.loc));return n.props=n.props.filter(e=>!(4===e.key.type&&"modelValue"===e.key.content)),n;},on:(e,t,r)=>i.transformOn(e,t,r,t=>{let{modifiers:n}=e;if(!n.length)return t;let{key:o,value:l}=t.props[0],{keyModifiers:a,nonKeyModifiers:p,eventOptionModifiers:_}=x(o,n,r,e.loc);if(p.includes("right")&&(o=D(o,"onContextmenu")),p.includes("middle")&&(o=D(o,"onMouseup")),p.length&&(l=i.createCallExpression(r.helper(m),[l,JSON.stringify(p)])),a.length&&(!i.isStaticExp(o)||v(o.content))&&(l=i.createCallExpression(r.helper(d),[l,JSON.stringify(a)])),_.length){let e=_.map(s.capitalize).join("");o=i.isStaticExp(o)?i.createSimpleExpression(`${o.content}${e}`,!0):i.createCompoundExpression(["(",o,`) + "${e}"`]);}return{props:[i.createObjectProperty(o,l)]};}),show:(e,t,r)=>{let{exp:n,loc:o}=e;return n||r.onError(g(61,o)),{props:[],needRuntime:r.helper(T)};}};function R(e,t={}){return i.baseCompile(e,s.extend({},O,t,{nodeTransforms:[V,...X,...t.nodeTransforms||[]],directiveTransforms:s.extend({},C,t.directiveTransforms||{}),transformHoist:null}));}function b(e,t={}){return i.baseParse(e,s.extend({},O,t));}},});