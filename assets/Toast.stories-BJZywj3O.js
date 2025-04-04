import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{b as c,B as h}from"./Tooltip-CHt7Rsq-.js";const P={title:"Components/Toast",component:c,argTypes:{position:{control:"select",options:["left","center","right"]},duration:{control:"number"},variant:{control:"select",options:["default","primary","secondary","success","warning","error"]}}},d=l=>{const[u,n]=s.useState(!1);return t.jsxs("div",{children:[u&&t.jsx(c,{...l,onClose:()=>{n(!1)}}),t.jsx("button",{onClick:()=>n(!0),className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",children:"Show Toast"})]})},r=d.bind({});r.args={message:"This is a toast notification!",duration:3e3,position:"center",variant:"default"};const o=d.bind({});o.args={message:"Toast on the left!",duration:3e3,position:"left",variant:"default"};const i=d.bind({});i.args={message:"Toast on the right!",duration:3e3,position:"right",variant:"default"};const a=l=>{const[u,n]=s.useState(!1),[p,E]=s.useState("default"),[R,f]=s.useState(!1),[v,U]=s.useState("default"),b=["default","primary","secondary","success","warning","error"],g=e=>{switch(e){case"primary":return"primary";case"secondary":return"secondary";case"warning":return"warning";case"error":return"error";default:return"primary"}};return t.jsxs("div",{className:"space-x-4 flex grow justify-around",children:[t.jsx("div",{className:"flex flex-col space-y-4 border-2 border-dashed border-gray-300 p-6 rounded-md",children:b.map(e=>t.jsx(h,{onClick:()=>{n(!0),E(e)},label:`Show ${e} Toast`,variant:g(e)},e))}),t.jsx("div",{className:"flex flex-col space-y-4 border-2 border-dashed border-gray-300 p-6 rounded-md",children:b.map(e=>t.jsx(h,{onClick:()=>{f(!0),U(e)},label:`Show ${e} Toast Without Icon`,variant:g(e)},e))}),u&&t.jsx(c,{...l,message:`Vairant: ${p}`,duration:5e3,variant:p,position:"left",icon:!0,onClose:()=>{n(!1)}}),R&&t.jsx(c,{...l,message:`Vairant: ${v}`,duration:5e3,position:"right",variant:v,onClose:()=>{f(!1)}})]})};a.__docgenInfo={description:`AllVariantToasts story displays one toast for each variant.
We use a longer duration and a no-op onClose to ensure each toast stays visible for preview.`,methods:[],displayName:"AllVariantToasts"};var m,y,V;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  return <div>
      {visible && <Toast {...args} onClose={() => {
      setVisible(false);
    }} />}
      <button onClick={() => setVisible(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Show Toast
      </button>
    </div>;
}`,...(V=(y=r.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var T,x,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  return <div>
      {visible && <Toast {...args} onClose={() => {
      setVisible(false);
    }} />}
      <button onClick={() => setVisible(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Show Toast
      </button>
    </div>;
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,N,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  return <div>
      {visible && <Toast {...args} onClose={() => {
      setVisible(false);
    }} />}
      <button onClick={() => setVisible(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Show Toast
      </button>
    </div>;
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var I,j,k,$,A;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<ToastProps['variant']>('default');
  const [visibleNoIcon, setVisibleNoIcon] = useState(false);
  const [variantNoIcon, setVariantNoIcon] = useState<ToastProps['variant']>('default');
  // Define all the available variants
  const variants: ToastProps['variant'][] = ['default', 'primary', 'secondary', 'success', 'warning', 'error'];
  const getVariant = (variant: ToastProps['variant'] | undefined) => {
    switch (variant // Use the key of the variant to determine which one it is.
    ) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'warning':
        return 'warning';
      // warning variant
      case 'error':
        return 'error';
      // error variant
      default:
        return 'primary';
      // default variant, this is the fallback if none of the above match.
    }
  };
  return <div className="space-x-4 flex grow justify-around">
      <div className="flex flex-col space-y-4 border-2 border-dashed border-gray-300 p-6 rounded-md">
        {variants.map(variant => <Button key={variant} // Ensure each button has a unique key for React's list rendering
      onClick={() => {
        setVisible(true);
        setVariant(variant); // Set the variant for the toast to show
      }} label={\`Show \${variant} Toast\`} variant={getVariant(variant)} // Use the getVariant function to determine the variant for the button
      />)}
      </div>
      <div className="flex flex-col space-y-4 border-2 border-dashed border-gray-300 p-6 rounded-md">
        {variants.map(variant => <Button key={variant} // Ensure each button has a unique key for React's list rendering
      onClick={() => {
        setVisibleNoIcon(true);
        setVariantNoIcon(variant); // Set the variant for the toast to show
      }} label={\`Show \${variant} Toast Without Icon\`} variant={getVariant(variant)} // Use the getVariant function to determine the variant for the button
      />)}
      </div>
      {visible && <Toast {...args} message={\`Vairant: \${variant}\`} // Display the variant in the message for clarity
    duration={5000} // Longer duration to allow for visibility during preview
    variant={variant} // Use the current variant
    position="left" icon onClose={() => {
      setVisible(false);
    }} />}
      {visibleNoIcon && <Toast {...args} message={\`Vairant: \${variantNoIcon}\`} // Display the variant in the message for clarity
    duration={5000} // Longer duration to allow for visibility during preview
    position="right" variant={variantNoIcon} // Use the current variant
    onClose={() => {
      setVisibleNoIcon(false);
    }} />}
    </div>;
}`,...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:`AllVariantToasts story displays one toast for each variant.
We use a longer duration and a no-op onClose to ensure each toast stays visible for preview.`,...(A=($=a.parameters)==null?void 0:$.docs)==null?void 0:A.description}}};const W=["CenterToast","LeftToast","RightToast","AllVariantToasts"];export{a as AllVariantToasts,r as CenterToast,o as LeftToast,i as RightToast,W as __namedExportsOrder,P as default};
