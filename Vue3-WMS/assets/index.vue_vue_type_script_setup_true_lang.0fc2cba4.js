import{i as m}from"./index.e529e2b1.js";import{d as y,D as b,E as v,r as u,B as c,w as x,I as S,o as g,z as w,F as k,n as z,f as B,G as A,H as L}from"./index.d3573972.js";const C=["id"],I=y({__name:"index",props:{className:{default:"chart"},id:{default:"chart"},width:{default:"200px"},height:{default:"200px"},type:{type:Boolean,default:!0},data:{}},setup(d){const p=b(),{t:h}=v.global,l=d,o=u(null),r=u(["line","bar"]),f=c(()=>p.language),t=c(()=>l.type?0:1);x([f,t,()=>l.data],()=>{i(l.data)},{deep:!0});const i=a=>{o.value&&(o.value.dispose(),o.value=null),o.value=S(m(document.getElementById(l.id)));const n=function(){const e=[];for(let s=1;s<13;s++)e.push(s+" "+h("charts.month"));return e}();o.value.setOption({backgroundColor:"#344b58",title:{text:"statistics",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{left:"5%",right:"5%",borderWidth:0,top:150,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["area-1","area-2","area-3","area-4"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:n}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"area-1",type:r.value[t.value],stack:"total",symbolSize:10,symbol:"circle",barMaxWidth:45,barGap:"10%",itemStyle:{color:"rgba(52,158,255)",barBorderRadius:0},label:{show:!0,position:"top",formatter(e){return e.value>0?e.value:""}},data:a["area-1"][t.value?"orders":"total"]},{name:"area-2",type:r.value[t.value],stack:"total",symbolSize:10,symbol:"circle",itemStyle:{color:"rgba(252,230,48,1)",barBorderRadius:0},label:{show:!0,position:"top",formatter(e){return e.value>0?e.value:""}},data:a["area-2"][t.value?"orders":"total"]},{name:"area-3",type:r.value[t.value],stack:"total",symbolSize:10,symbol:"circle",itemStyle:{color:"rgba(20,251,46)",barBorderRadius:0},label:{show:!0,position:"top",formatter(e){return e.value>0?e.value:""}},data:a["area-3"][t.value?"orders":"total"]},{name:"area-4",type:r.value[t.value],stack:"total",symbolSize:10,symbol:"circle",itemStyle:{color:"rgba(226,4,4)",barBorderRadius:0},label:{show:!0,position:"top",formatter(e){return e.value>0?e.value:""}},data:a["area-4"][t.value?"orders":"total"]}]})};return g(()=>{w(()=>{i(l.data)})}),k(()=>{!o.value||(o.value.dispose(),o.value=null)}),(a,n)=>(z(),B("div",{id:a.id,class:A(a.className),style:L({height:a.height,width:a.width})},null,14,C))}});export{I as _};