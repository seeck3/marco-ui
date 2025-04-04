import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-D4lIrffr.js";import{M as T}from"./Tooltip-CHt7Rsq-.js";import{v as L}from"./v4-CtRu48qb.js";const{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:B}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:b}=__STORYBOOK_MODULE_GLOBAL__;var K=Object.defineProperty,N=(t,e)=>{for(var o in e)K(t,o,{get:e[o],enumerable:!0})},Y="storybook/actions",V=`${Y}/action-event`,k={depth:10,clearOnStoryChange:!0,limit:50},S=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:S(o,e)},W=t=>!!(typeof t=="object"&&t&&S(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),U=t=>{if(W(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?L():Date.now().toString(36)+Math.random().toString(36).substring(2);function u(t,e={}){let o={...k,...e},n=function(...r){var _,g;if(e.implicit){let m=(_="__STORYBOOK_PREVIEW__"in b?b.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(m){let c=!((g=globalThis==null?void 0:globalThis.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),h=new B({phase:m.phase,name:t,deprecated:c});if(c)console.warn(h);else throw h}}let s=P.getChannel(),i=F(),a=5,d=r.map(U),w=r.length>1?d:d[0],j={id:i,count:0,data:{name:t,args:w},options:{...o,maxDepth:a+(o.depth||3),allowFunction:o.allowFunction||!1}};s.emit(V,j)};return n.isAction=!0,n.implicit=e.implicit,n}const{definePreview:te}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var z={};N(z,{argsEnhancers:()=>q,loaders:()=>J});var M=(t,e)=>typeof e[t]>"u"&&!(t in e),$=t=>{let{initialArgs:e,argTypes:o,id:n,parameters:{actions:r}}=t;if(!r||r.disable||!r.argTypesRegex||!o)return{};let s=new RegExp(r.argTypesRegex);return Object.entries(o).filter(([i])=>!!s.test(i)).reduce((i,[a,d])=>(M(a,e)&&(i[a]=u(a,{implicit:!0,id:n})),i),{})},G=t=>{let{initialArgs:e,argTypes:o,parameters:{actions:n}}=t;return n!=null&&n.disable||!o?{}:Object.entries(o).filter(([r,s])=>!!s.action).reduce((r,[s,i])=>(M(s,e)&&(r[s]=u(typeof i.action=="string"?i.action:s)),r),{})},q=[G,$],y=!1,H=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!y&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in f&&typeof f.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=f.__STORYBOOK_TEST_ON_MOCK_CALL__;o((n,r)=>{let s=n.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>s.startsWith(i)))&&u(s)(r)}),y=!0}},J=[H];const oe={title:"Components/Modal",component:T},I=t=>{const[e,o]=D.useState(t.isOpen||!1),n=()=>{o(!1),u("onClose")()},r=()=>{o(!1),u("onConfirm")()};return O.jsxs("div",{children:[O.jsx("button",{onClick:()=>o(!0),className:"mb-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",children:"Open Modal"}),O.jsx(T,{...t,isOpen:e,onClose:n,onConfirm:r})]})},l=I.bind({});l.args={isOpen:!1,title:"Confirm Action",children:"Are you sure you want to proceed?"};const p=I.bind({});p.args={isOpen:!1,isAction:!0,title:"Confirm Action",children:"Are you sure you want to proceed?"};var C,E,R;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  const handleClose = () => {
    setIsOpen(false);
    action('onClose')();
  };
  const handleConfirm = () => {
    setIsOpen(false);
    action('onConfirm')();
  };
  return <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} />
    </div>;
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var x,v,A;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  const handleClose = () => {
    setIsOpen(false);
    action('onClose')();
  };
  const handleConfirm = () => {
    setIsOpen(false);
    action('onConfirm')();
  };
  return <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} />
    </div>;
}`,...(A=(v=p.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const ne=["DefaultModal","ActionModal"];export{p as ActionModal,l as DefaultModal,ne as __namedExportsOrder,oe as default};
