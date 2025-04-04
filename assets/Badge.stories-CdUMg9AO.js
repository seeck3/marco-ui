import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./Tooltip-CHt7Rsq-.js";import{r as n}from"./index-D4lIrffr.js";function g({title:a,titleId:t,...d},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},d),a?n.createElement("title",{id:t},a):null,n.createElement("path",{fillRule:"evenodd",d:"M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",clipRule:"evenodd"}),n.createElement("path",{d:"M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"}))}const m=n.forwardRef(g);function v({title:a,titleId:t,...d},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},d),a?n.createElement("title",{id:t},a):null,n.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const x=n.forwardRef(v),B={title:"Components/Badge",component:r,argTypes:{icon:{control:!1,table:{disable:!0}},initial:{control:!1,description:"Initials to display when no icon is provided",table:{type:{summary:"string"},defaultValue:{summary:"N/A"}}},text:{control:!1,description:"Text to display inside the badge",table:{type:{summary:"string"},defaultValue:{summary:"N/A"}}},variant:{control:!1,options:["default","primary","secondary","success","warning","error"]}}},u=a=>e.jsxs("div",{className:"flex gap-10 items-cente grow",children:[e.jsxs("div",{className:"space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full",children:[e.jsx(r,{...a,variant:"default",text:"Default Badge"}),e.jsx(r,{...a,variant:"primary",text:"Primary Badge"}),e.jsx(r,{...a,variant:"secondary",text:"Secondary Badge"}),e.jsx(r,{...a,variant:"success",text:"Success Badge"}),e.jsx(r,{...a,variant:"warning",text:"Warning Badge"}),e.jsx(r,{...a,variant:"error",text:"Error Badge"})]}),e.jsxs("div",{className:"space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full items-center",children:[e.jsx(r,{...a,variant:"default",text:"Default Badge"}),e.jsx("div",{children:e.jsx(r,{...a,variant:"primary",icon:e.jsx(x,{className:"h-4 w-4"})})}),e.jsx("div",{children:e.jsx(r,{...a,variant:"secondary",icon:e.jsx(m,{className:"h-4 w-4"})})}),e.jsx("div",{children:e.jsx(r,{...a,variant:"success",initial:"MS"})}),e.jsx("div",{children:e.jsx(r,{...a,variant:"warning",initial:"DS"})})]})]}),s=u.bind({});s.args={};var l,o,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div className="flex gap-10 items-cente grow">
    <div className="space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
      <Badge {...args} variant="default" text="Default Badge" />
      <Badge {...args} variant="primary" text="Primary Badge" />
      <Badge {...args} variant="secondary" text="Secondary Badge" />
      <Badge {...args} variant="success" text="Success Badge" />
      <Badge {...args} variant="warning" text="Warning Badge" />
      <Badge {...args} variant="error" text="Error Badge" />
    </div>
    <div className="space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full items-center">
      <Badge {...args} variant="default" text="Default Badge" />
      <div>
        <Badge {...args} variant="primary" icon={<UserIcon className="h-4 w-4" />} />
      </div>
      <div>
        <Badge {...args} variant="secondary" icon={<UserGroupIcon className="h-4 w-4" />} />
      </div>
      <div>
        <Badge {...args} variant="success" initial="MS" />
      </div>
      <div>
        <Badge {...args} variant="warning" initial="DS" />
      </div>
    </div>
  </div>`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const w=["AllVariants"];export{s as AllVariants,w as __namedExportsOrder,B as default};
