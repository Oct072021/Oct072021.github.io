import{d as ee,b as te,w as ae,r as f,e as K,k as i,n as g,f as U,J as ye,K as ve,g as e,i as t,j as a,m as le,t as o,R as se,x as r,q as L,S as j,T as oe,E as ne,u as he,a as ge,B as ke,L as X,M as we,U as xe,z as Y,V as De,_ as Ce}from"./index.fdcd0fff.js";import{u as re,g as Ve,r as Ie,a as Z,b as Te,c as Ae}from"./index.45e24b4d.js";import{M as $e,_ as Se,t as Oe}from"./common.05076652.js";import{u as de}from"./index.b64a32f9.js";const Ue=ee({__name:"TabPane",props:{area:{default:"area-1"},searchList:{default:()=>({status:void 0,type:void 0,orderID:void 0})}},emits:["create","handleUpdate","toDetail","handleAudit"],setup(Q,{expose:d,emit:I}){const{t:u}=te(),N=de(),T=Q,w=I;ae(()=>T.searchList,()=>{B()},{deep:!0});const{type:A,status:P}=re(),E=f(null);let p=K({page:1,limit:10,type:void 0,status:void 0,orderID:void 0,area:T.area});const $=f(!1),x=f(0),V=async m=>{m&&(p={...p,...m}),p={...p,...T.searchList},$.value=!0;const D=await Ve(p);E.value=D.data.items,$.value=!1,x.value=D.data.total,w("create")};V();const F=m=>{w("handleUpdate",m)},M=async m=>{(await Ie(m)).code===2e4&&(oe({title:"Success",message:ne.global.t("tips.deleteMsg_success"),type:"success",duration:2e3}),V())},R=m=>{w("toDetail",m)},q=m=>{w("handleAudit",m)},B=()=>{N.removeAlive(),V(),setTimeout(()=>{N.setAlive()},0)};return d({resetAlive_search:B}),(m,D)=>{const _=i("el-table-column"),S=i("el-tag"),y=i("el-button"),k=i("el-table");return g(),U("div",null,[ye(e($e,{total:x.value,page:a(p).page,limit:a(p).limit,onPagination:V},{table:t(()=>[e(k,{data:E.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"},draggable:""},{default:t(()=>[e(_,{"min-width":"130px",label:a(u)("orders.orderID"),prop:"orderID",align:"center"},null,8,["label"]),e(_,{"min-width":"130px",label:a(u)("orders.title"),align:"center",prop:"title"},null,8,["label"]),e(_,{"min-width":"120px",align:"center",label:a(u)("orders.date")},{default:t(l=>[le("span",null,o(a(se)(l.row.timestamp,"{y}-{m}-{d}")),1)]),_:1},8,["label"]),e(_,{"class-name":"status-col",label:a(u)("orders.type"),"min-width":"120"},{default:t(({row:l})=>[r(o(a(A)[l.type]),1)]),_:1},8,["label"]),e(_,{"class-name":"status-col",label:a(u)("orders.client"),prop:"client","min-width":"110"},null,8,["label"]),e(_,{"class-name":"status-col",label:a(u)("orders.documenter"),prop:"documenter","min-width":"120"},null,8,["label"]),e(_,{"class-name":"status-col",label:a(u)("orders.status"),"min-width":"120"},{default:t(({row:l})=>[e(S,{type:a(P)[l.status][1]},{default:t(()=>[r(o(a(P)[l.status][0]),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(_,{"class-name":"status-col",label:a(u)("orders.auditor"),"min-width":"110",prop:"auditor"},null,8,["label"]),e(_,{label:a(u)("orders.actions"),align:"center","min-width":"270","class-name":"small-padding fixed-width"},{default:t(({row:l})=>[e(y,{type:"info",size:"small",onClick:O=>R(l.id)},{default:t(()=>[r(o(a(u)("button.detail")),1)]),_:2},1032,["onClick"]),e(y,{type:"primary",size:"small",onClick:O=>F(l.id)},{default:t(()=>[r(o(a(u)("button.edit")),1)]),_:2},1032,["onClick"]),l.status===0?(g(),L(y,{key:0,size:"small",type:"warning",onClick:O=>q(l.id)},{default:t(()=>[r(o(a(u)("button.audit")),1)]),_:2},1032,["onClick"])):j("",!0),e(y,{size:"small",type:"danger",onClick:O=>M(l.id)},{default:t(()=>[r(o(a(u)("button.delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1},8,["total","page","limit"]),[[ve,x.value>0]])])}}}),Le=[{type:"input",name:"orderID",styles:{width:"200px"},event:"search"},{type:"select",name:"type",styles:{width:"150px"},page:"orders",options:[{label:"purchase",key:0},{label:"sell",key:1}]},{type:"select",name:"status",styles:{width:"150px"},page:"orders",options:[{label:"wait",key:0},{label:"success",key:1},{label:"fail",key:2}]},{type:"button",name:"Search",buttonType:"primary",icon:"search",styles:{margin:"0 10px 0 0"},event:"search"},{type:"button",name:"Add",buttonType:"primary",icon:"edit",styles:{margin:"0 10px 0 0"},event:"add"},{type:"button",name:"Export",buttonType:"primary",icon:"download",styles:{margin:"0 10px 0 0"},event:"export"}],Ne={class:"tab-container"},Pe={key:1},Ee={class:"dialog-footer"},Fe=ee({__name:"index",setup(Q){const{t:d}=te(),I=he(),u=ge(),N=de(),T=ke(()=>N.aliveComp),{type:w,status:A,title:P,area:E}=re(),p=f("area-1");ae(p,c=>{I.push(`${u.path}?tab=${c}`)});const $=u.query.tab;$&&(p.value=$);const x=K({type:void 0,orderID:void 0,status:void 0}),V=(c,s)=>{switch(s){case"search":Object.assign(x,{...x,...c});break;case"add":O();break;case"export":B();break}},F=f(0),M=()=>{F.value++},R=f(null),q=f(!1),B=Oe(async function(){q.value=!0;const c=await Ae(p.value);R.value=c.data,De(()=>import("./Export2Excel.df3d1516.js"),["./Export2Excel.df3d1516.js","./index.fdcd0fff.js","./index.0a15a48e.css"],import.meta.url).then(s=>{const b=["orderID","title","data","type","client","documenter","status","auditor"],H=m(["orderID","title","timestamp","type","client","documenter","status","auditor"]);s.export_json_to_excel({header:b,data:H,filename:`outbound-list-${p.value}`}),q.value=!1})},5*1e3),m=c=>R.value.map(s=>c.map(b=>{switch(b){case"timestamp":return se(s[b],"{y}-{m}-{d}");case"type":return w.value[s[b]];case"status":return A.value[s[b]][0];default:return s[b]}})),D=f(),_=()=>{D.value[0].resetAlive_search()},S=f(),y=f(""),k=f(!1),l=K({id:-1,orderID:"",status:-1,area:"",type:-1,timestamp:"",client:"",documenter:"",number:void 0,remark:"",contact:"",reason:"",production:[],auditor:""}),O=()=>{I.push({path:"/order/outbound/create_update"})},ie=c=>{I.push({path:"/order/outbound/create_update",query:{id:c}})},ue=async c=>{const s=await Z(c);Object.assign(l,s.data),y.value="detail",k.value=!0,Y(()=>{S.value.clearValidate()})},ce=async c=>{const s=await Z(c);Object.assign(l,s.data),y.value="audit",k.value=!0,Y(()=>{S.value.clearValidate()})},G=async(c,s)=>{(await Te({detail:c,status:s})).code===2e4&&(k.value=!1,oe({title:"Success",message:ne.global.t("tips.audit_success"),type:"success",duration:2e3}),_())};return(c,s)=>{const b=i("el-tag"),W=i("el-alert"),H=i("el-tab-pane"),pe=i("el-tabs"),v=i("el-form-item"),h=i("el-col"),z=i("el-row"),me=i("el-input"),C=i("el-table-column"),_e=i("el-table"),be=i("el-form"),J=i("el-button"),fe=i("el-dialog");return g(),U("div",Ne,[e(b,null,{default:t(()=>[r("mounted times : "+o(F.value),1)]),_:1}),e(W,{closable:!1,style:{width:"200px",display:"inline-block","vertical-align":"middle","margin-left":"30px"},title:"Tab with keep-alive",type:"success"}),e(Se,{"config-data":a(Le),onButtonClick:V},null,8,["config-data"]),e(pe,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=n=>p.value=n),style:{"margin-top":"15px"},type:"border-card"},{default:t(()=>[(g(!0),U(X,null,we(a(E),n=>(g(),L(H,{key:n.key,label:n.label,name:n.key},{default:t(()=>[(g(),L(xe,{include:T.value},[p.value==n.key?(g(),L(Ue,{ref_for:!0,ref_key:"TabPaneRef",ref:D,key:n.key,area:n.key,"search-list":x,onCreate:M,onHandleUpdate:ie,onToDetail:ue,onHandleAudit:ce},null,8,["area","search-list"])):j("",!0)],1032,["include"]))]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"]),e(fe,{title:a(P)[y.value],modelValue:k.value,"onUpdate:modelValue":s[5]||(s[5]=n=>k.value=n),"align-center":"",width:"900px"},{footer:t(()=>[le("div",Ee,[y.value==="audit"?(g(),U(X,{key:0},[e(J,{type:"success",onClick:s[2]||(s[2]=n=>G(l,1))},{default:t(()=>[r(o(a(d)("button.pass")),1)]),_:1}),e(J,{type:"danger",onClick:s[3]||(s[3]=n=>G(l,2))},{default:t(()=>[r(o(a(d)("button.noPass")),1)]),_:1})],64)):j("",!0),e(J,{onClick:s[4]||(s[4]=n=>k.value=!1)},{default:t(()=>[r(o(a(d)("button.cancel")),1)]),_:1})])]),default:t(()=>[e(be,{ref_key:"dataForm",ref:S,model:l,"label-position":"left"},{default:t(()=>[e(z,{gutter:20},{default:t(()=>[e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.orderID")+":",prop:"orderID"},{default:t(()=>[r(o(l.orderID),1)]),_:1},8,["label"])]),_:1}),e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.type")+":",prop:"type"},{default:t(()=>[r(o(a(w)[l.type]),1)]),_:1},8,["label"])]),_:1}),e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.status")+":",prop:"status"},{default:t(()=>[e(b,{type:a(A)[l.status][1]},{default:t(()=>[r(o(a(A)[l.status][0]),1)]),_:1},8,["type"])]),_:1},8,["label"])]),_:1})]),_:1}),e(z,{gutter:20},{default:t(()=>[e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.client")+":",prop:"client"},{default:t(()=>[r(o(l.client),1)]),_:1},8,["label"])]),_:1}),e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.contact")+":",prop:"contact"},{default:t(()=>[r(o(l.contact),1)]),_:1},8,["label"])]),_:1}),e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.number")+":",prop:"number"},{default:t(()=>[r(o(l.number),1)]),_:1},8,["label"])]),_:1})]),_:1}),e(z,{gutter:20},{default:t(()=>[e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.documenter")+":",prop:"documenter"},{default:t(()=>[r(o(l.documenter),1)]),_:1},8,["label"])]),_:1}),e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.date")+":",prop:"timestamp"},{default:t(()=>[r(o(l.timestamp),1)]),_:1},8,["label"])]),_:1}),e(h,{span:8},{default:t(()=>[e(v,{label:a(d)("orders.remark")+":",prop:"remark"},{default:t(()=>[r(o(l.remark),1)]),_:1},8,["label"])]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(h,{span:20},{default:t(()=>[e(v,{label:a(d)("orders.reason")+":",prop:"reason"},{default:t(()=>[y.value==="audit"?(g(),L(me,{key:0,modelValue:l.reason,"onUpdate:modelValue":s[1]||(s[1]=n=>l.reason=n),rows:3,type:"textarea"},null,8,["modelValue"])):(g(),U("span",Pe,o(l.reason),1))]),_:1},8,["label"])]),_:1})]),_:1}),e(_e,{data:l.production,border:"",fit:"","highlight-current-row":"","header-cell-class-name":"table_header",style:{width:"100%"}},{default:t(()=>[e(C,{"min-width":"100px",label:a(d)("orders.productionID"),align:"center",prop:"productionID"},null,8,["label"]),e(C,{"min-width":"100px",label:a(d)("orders.productionName"),align:"center",prop:"productionName"},null,8,["label"]),e(C,{align:"center",label:a(d)("orders.specs"),"min-width":"95"},{default:t(({row:n})=>[r(o(`${n.specs1} \xD7 ${n.specs2}`),1)]),_:1},8,["label"]),e(C,{"class-name":"status-col",label:a(d)("orders.price"),prop:"price","min-width":"80"},null,8,["label"]),e(C,{"class-name":"status-col",label:a(d)("orders.quantity"),"min-width":"80"},{default:t(({row:n})=>[r(o(n.quantity+" /\u4EF6"),1)]),_:1},8,["label"]),e(C,{"class-name":"status-col",label:a(d)("orders.total"),"min-width":"90"},{default:t(({row:n})=>[r(o((n.price*n.quantity).toFixed(2)),1)]),_:1},8,["label"]),e(C,{"class-name":"status-col",label:a(d)("orders.area"),"min-width":"105"},{default:t(()=>[r(o(l.area),1)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});const Me=Ce(Fe,[["__scopeId","data-v-2b980bc4"]]);export{Me as default};
