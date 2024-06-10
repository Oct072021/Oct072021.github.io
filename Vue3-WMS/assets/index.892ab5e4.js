import{d as L,a as S,u as T,b as A,e as w,r as G,k as p,n as y,f as I,m,t as b,j as o,g as e,i as t,L as C,M as O,q as P,x as V,E as k,T as H,_ as J}from"./index.3d7026b0.js";import{u as K,d as Q,e as W,a as X}from"./index.b8ab54da.js";import{o as Y}from"./array.c63cef91.js";const Z={class:"createPost-container"},ee={class:"title"},le={class:"createPost-main-container"},te={class:"postInfo-container"},oe={class:"title"},ae={class:"specs"},ne={class:"submit_order_button"},re=L({__name:"index",setup(de){const q=S(),U=T(),{t:r}=A(),{area:$,type:F}=K(),f=(s,a)=>k.global.t(`orders.${s}`)+" "+k.global.t(`${a}`),B=w({area:[{required:!0,message:f("area","require"),trigger:"change"}],type:[{required:!0,message:f("type","require"),trigger:"blur"}],client:[{required:!0,message:f("client","require"),trigger:"blur"}],contact:[{required:!0,message:f("contact","require"),trigger:"blur"}],number:[{required:!0,message:f("number","require"),trigger:"blur"}],documenter:[{required:!0,message:f("documenter","require"),trigger:"blur"}]}),x=G(),n=w({orderID:"",type:void 0,area:"",client:"",contact:"",number:+"",title:"",documenter:"",remark:"",timestamp:"",production:[{productionID:"",productionName:"",quantity:0,price:0,specs1:"",specs2:""}]}),R=s=>{!s||s.validate(async a=>{if(a)(q.query.id?await Q(n):await W(n)).code===2e4&&(H({title:"Success",message:k.global.t("tips.submit")+k.global.t("tips.success"),type:"success",duration:2e3}),U.go(-1));else return console.log("error submit!!"),!1})},j=()=>{n.production.length>=5||n.production.push({productionID:"",productionName:"",quantity:0,price:0,specs1:"",specs2:""})},z=s=>{n.production.splice(s,1)},M=async()=>{const s=await X(+q.query.id);s.code===2e4&&Object.assign(n,s.data)};return q.query.id&&M(),(s,a)=>{const d=p("el-input"),i=p("el-form-item"),c=p("el-col"),D=p("el-option"),N=p("el-select"),g=p("el-row"),v=p("el-button"),_=p("el-table-column"),h=p("el-table"),E=p("el-form");return y(),I("div",Z,[m("div",ee,[m("span",null,b(o(q).query.id?o(r)("orders.update"):o(r)("orders.create")),1)]),e(E,{ref_key:"orderFormRef",ref:x,model:n,rules:B,class:"form-container"},{default:t(()=>[m("div",le,[e(g,null,{default:t(()=>[e(c,{span:24},{default:t(()=>[m("div",te,[e(g,null,{default:t(()=>[e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.orderID")+" :",class:"postInfo-container-item",prop:"orderID"},{default:t(()=>[e(d,{modelValue:n.orderID,"onUpdate:modelValue":a[0]||(a[0]=l=>n.orderID=l),placeholder:o(r)("AutoGeneration")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.type")+" :",class:"postInfo-container-item",prop:"type"},{default:t(()=>[e(N,{modelValue:n.type,"onUpdate:modelValue":a[1]||(a[1]=l=>n.type=l),placeholder:""},{default:t(()=>[(y(!0),I(C,null,O(o(Y)(o(F)),l=>(y(),P(D,{key:l.key,label:l.label,value:l.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("area")+" :",class:"postInfo-container-item",prop:"area"},{default:t(()=>[e(N,{modelValue:n.area,"onUpdate:modelValue":a[2]||(a[2]=l=>n.area=l),placeholder:""},{default:t(()=>[(y(!0),I(C,null,O(o($),l=>(y(),P(D,{key:l.key,label:l.label,value:l.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.client")+" :",class:"postInfo-container-item",prop:"client"},{default:t(()=>[e(d,{modelValue:n.client,"onUpdate:modelValue":a[3]||(a[3]=l=>n.client=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.contact")+" :",class:"postInfo-container-item",prop:"contact"},{default:t(()=>[e(d,{modelValue:n.contact,"onUpdate:modelValue":a[4]||(a[4]=l=>n.contact=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.number")+" :",class:"postInfo-container-item",prop:"number"},{default:t(()=>[e(d,{modelValue:n.number,"onUpdate:modelValue":a[5]||(a[5]=l=>n.number=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.title")+" :",class:"postInfo-container-item",prop:"title"},{default:t(()=>[e(d,{modelValue:n.title,"onUpdate:modelValue":a[6]||(a[6]=l=>n.title=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:8},{default:t(()=>[e(i,{label:o(r)("orders.documenter")+" :",class:"postInfo-container-item",prop:"documenter"},{default:t(()=>[e(d,{modelValue:n.documenter,"onUpdate:modelValue":a[7]||(a[7]=l=>n.documenter=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(c,{span:20},{default:t(()=>[e(i,{label:o(r)("orders.remark")+":",prop:"remark"},{default:t(()=>[e(d,{modelValue:n.remark,"onUpdate:modelValue":a[8]||(a[8]=l=>n.remark=l),rows:4,type:"textarea"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1})]),_:1})]),m("div",oe,[m("span",null,b(o(r)("orders.inboundProduction")),1),e(v,{type:"success",onClick:a[9]||(a[9]=l=>j())},{default:t(()=>[V(b(o(r)("button.createProduction")),1)]),_:1})]),e(i,{prop:"production"},{default:t(()=>[e(h,{data:n.production,border:"",fit:"","header-cell-class-name":"table_header",class:"production"},{default:t(()=>[e(_,{"min-width":"100px",label:o(r)("orders.productionID"),align:"center"},{default:t(({row:l})=>[e(d,{modelValue:l.productionID,"onUpdate:modelValue":u=>l.productionID=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(_,{"min-width":"100px",label:o(r)("orders.productionName"),align:"center"},{default:t(({row:l})=>[e(d,{modelValue:l.productionName,"onUpdate:modelValue":u=>l.productionName=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(_,{"min-width":"150px",label:o(r)("orders.specs"),align:"center"},{default:t(({row:l})=>[m("div",ae,[e(d,{modelValue:l.specs1,"onUpdate:modelValue":u=>l.specs1=u},null,8,["modelValue","onUpdate:modelValue"]),V(" \xD7 "),e(d,{modelValue:l.specs2,"onUpdate:modelValue":u=>l.specs2=u},null,8,["modelValue","onUpdate:modelValue"])])]),_:1},8,["label"]),e(_,{"min-width":"80px",label:o(r)("orders.price"),align:"center"},{default:t(({row:l})=>[e(d,{modelValue:l.price,"onUpdate:modelValue":u=>l.price=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(_,{"min-width":"80px",label:o(r)("orders.quantity"),align:"center"},{default:t(({row:l})=>[e(d,{modelValue:l.quantity,"onUpdate:modelValue":u=>l.quantity=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(_,{"min-width":"90px",label:o(r)("orders.total"),align:"center"},{default:t(({row:l})=>[V(b((l.price*l.quantity).toFixed(2)),1)]),_:1},8,["label"]),e(_,{label:o(r)("orders.actions"),align:"center","min-width":"50","class-name":"small-padding fixed-width"},{default:t(({row:l,$index:u})=>[e(v,{type:"danger",size:"small",onClick:ue=>z(u)},{default:t(()=>[V(b(o(r)("button.delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1}),m("div",ne,[e(v,{type:"primary",size:"large",onClick:a[10]||(a[10]=l=>R(x.value))},{default:t(()=>[V(b(o(r)("button.submit")),1)]),_:1}),e(v,{size:"large",onClick:a[11]||(a[11]=l=>o(U).go(-1))},{default:t(()=>[V(b(o(r)("button.cancel")),1)]),_:1})])]),_:1},8,["model","rules"])])}}});const pe=J(re,[["__scopeId","data-v-c9bef13b"]]);export{pe as default};