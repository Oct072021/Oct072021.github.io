import{d as e,A as t}from"./index.fdcd0fff.js";const s=e({__name:"auth-redirect",setup(a){return t(()=>{const o=window.location.search.slice(1);window.localStorage&&(window.localStorage.setItem("x-admin-oauth-code",o),window.close())}),()=>{}}});export{s as default};
