import{_}from"./index.vue_vue_type_script_setup_true_lang.0fc2cba4.js";import{d as u,b as p,r as c,e as v,k as m,n as f,f as h,g as l,j as d,_ as x}from"./index.d3573972.js";import{g}from"./service.9fa59922.js";import"./index.e529e2b1.js";const w={class:"chart-container"},y=u({__name:"index",setup(V){const{t:n}=p(),a=c(!0),i=c(["area-1","area-2","area-3","area-4"]),o=v({"area-1":{total:[],orders:[]},"area-2":{total:[],orders:[]},"area-3":{total:[],orders:[]},"area-4":{total:[],orders:[]}});return(()=>{i.value.forEach(async e=>{const t=await g(e),{total:r,orders:s}=t.data;o[e].total=r,o[e].orders=s})})(),(e,t)=>{const r=m("el-switch");return f(),h("div",w,[l(r,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),class:"switch","active-color":"#13ce66","inactive-color":"#1890FF","active-text":d(n)("charts.turnover"),"inactive-text":d(n)("charts.orders")},null,8,["modelValue","active-text","inactive-text"]),l(_,{height:"100%",width:"100%",type:a.value,data:o},null,8,["type","data"])])}}});const E=x(y,[["__scopeId","data-v-ed01c098"]]);export{E as default};