import J from"../../Jetstream/ActionMessage.vue.js";import S from"../../Jetstream/ActionSection.vue.js";import B from"../../Jetstream/Button.vue.js";import D from"../../Jetstream/ConfirmationModal.vue.js";import w from"../../Jetstream/DangerButton.vue.js";import $ from"../../Jetstream/DialogModal.vue.js";import I from"../../Jetstream/FormSection.vue.js";import V from"../../Jetstream/Input.vue.js";import M from"../../Jetstream/Checkbox.vue.js";import N from"../../Jetstream/InputError.vue.js";import L from"../../Jetstream/Label.vue.js";import E from"../../Jetstream/SecondaryButton.vue.js";import U from"../../Jetstream/SectionBorder.vue.js";const v={components:{JetActionMessage:J,JetActionSection:S,JetButton:B,JetConfirmationModal:D,JetDangerButton:w,JetDialogModal:$,JetFormSection:I,JetInput:V,JetCheckbox:M,JetInputError:N,JetLabel:L,JetSecondaryButton:E,JetSectionBorder:U},props:["tokens","availablePermissions","defaultPermissions"],data(){return{createApiTokenForm:this.$inertia.form({name:"",permissions:this.defaultPermissions}),updateApiTokenForm:this.$inertia.form({permissions:[]}),deleteApiTokenForm:this.$inertia.form(),displayingToken:!1,managingPermissionsFor:null,apiTokenBeingDeleted:null}},methods:{createApiToken(){this.createApiTokenForm.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{this.displayingToken=!0,this.createApiTokenForm.reset()}})},manageApiTokenPermissions(e){this.updateApiTokenForm.permissions=e.abilities,this.managingPermissionsFor=e},updateApiToken(){this.updateApiTokenForm.put(route("api-tokens.update",this.managingPermissionsFor),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.managingPermissionsFor=null})},confirmApiTokenDeletion(e){this.apiTokenBeingDeleted=e},deleteApiToken(){this.deleteApiTokenForm.delete(route("api-tokens.destroy",this.apiTokenBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.apiTokenBeingDeleted=null})}}};import{createTextVNode as i,resolveComponent as r,createVNode as o,renderList as u,Fragment as k,openBlock as a,createBlock as l,toDisplayString as d,createCommentVNode as p,withCtx as t}from"../../../_snowpack/pkg/vue.js";const Y=i(" Create API Token "),q=i(" API tokens allow third-party services to authenticate with our application on your behalf. "),z={class:"col-span-6 sm:col-span-4"},G={key:0,class:"col-span-6"},H={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},K={class:"flex items-center"},O={class:"ml-2 text-sm text-gray-600"},Q=i(" Created. "),R=i(" Create "),W={key:0},X={class:"mt-10 sm:mt-0"},Z=i(" Manage API Tokens "),x=i(" You may delete any of your existing tokens if they are no longer needed. "),ee={class:"space-y-6"},oe={class:"flex items-center"},te={key:0,class:"text-sm text-gray-400"},se=i(" API Token "),ne=o("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),ie={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},re=i(" Close "),ae=i(" API Token Permissions "),le={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},me={class:"flex items-center"},de={class:"ml-2 text-sm text-gray-600"},pe=i(" Cancel "),ce=i(" Save "),ue=i(" Delete API Token "),ke=i(" Are you sure you would like to delete this API token? "),_e=i(" Cancel "),ge=i(" Delete ");export function render(e,n){const _=r("jet-label"),T=r("jet-input"),y=r("jet-input-error"),g=r("jet-checkbox"),A=r("jet-action-message"),f=r("jet-button"),j=r("jet-form-section"),b=r("jet-section-border"),F=r("jet-action-section"),c=r("jet-secondary-button"),h=r("jet-dialog-modal"),C=r("jet-danger-button"),P=r("jet-confirmation-modal");return a(),l("div",null,[o(j,{onSubmitted:e.createApiToken},{title:t(()=>[Y]),description:t(()=>[q]),form:t(()=>[o("div",z,[o(_,{for:"name",value:"Name"}),o(T,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.createApiTokenForm.name,"onUpdate:modelValue":n[1]||(n[1]=s=>e.createApiTokenForm.name=s),autofocus:""},null,8,["modelValue"]),o(y,{message:e.createApiTokenForm.errors.name,class:"mt-2"},null,8,["message"])]),e.availablePermissions.length>0?(a(),l("div",G,[o(_,{for:"permissions",value:"Permissions"}),o("div",H,[(a(!0),l(k,null,u(e.availablePermissions,s=>(a(),l("div",{key:s},[o("label",K,[o(g,{value:s,checked:e.createApiTokenForm.permissions,"onUpdate:checked":n[2]||(n[2]=m=>e.createApiTokenForm.permissions=m)},null,8,["value","checked"]),o("span",O,d(s),1)])]))),128))])])):p("",!0)]),actions:t(()=>[o(A,{on:e.createApiTokenForm.recentlySuccessful,class:"mr-3"},{default:t(()=>[Q]),_:1},8,["on"]),o(f,{class:{"opacity-25":e.createApiTokenForm.processing},disabled:e.createApiTokenForm.processing},{default:t(()=>[R]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"]),e.tokens.length>0?(a(),l("div",W,[o(b),o("div",X,[o(F,null,{title:t(()=>[Z]),description:t(()=>[x]),content:t(()=>[o("div",ee,[(a(!0),l(k,null,u(e.tokens,s=>(a(),l("div",{class:"flex items-center justify-between",key:s.id},[o("div",null,d(s.name),1),o("div",oe,[s.last_used_ago?(a(),l("div",te," Last used "+d(s.last_used_ago),1)):p("",!0),e.availablePermissions.length>0?(a(),l("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:m=>e.manageApiTokenPermissions(s)}," Permissions ",8,["onClick"])):p("",!0),o("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:m=>e.confirmApiTokenDeletion(s)}," Delete ",8,["onClick"])])]))),128))])]),_:1})])])):p("",!0),o(h,{show:e.displayingToken,onClose:n[4]||(n[4]=s=>e.displayingToken=!1)},{title:t(()=>[se]),content:t(()=>[ne,e.$page.props.jetstream.flash.token?(a(),l("div",ie,d(e.$page.props.jetstream.flash.token),1)):p("",!0)]),footer:t(()=>[o(c,{onClick:n[3]||(n[3]=s=>e.displayingToken=!1)},{default:t(()=>[re]),_:1})]),_:1},8,["show"]),o(h,{show:e.managingPermissionsFor,onClose:n[7]||(n[7]=s=>e.managingPermissionsFor=null)},{title:t(()=>[ae]),content:t(()=>[o("div",le,[(a(!0),l(k,null,u(e.availablePermissions,s=>(a(),l("div",{key:s},[o("label",me,[o(g,{value:s,checked:e.updateApiTokenForm.permissions,"onUpdate:checked":n[5]||(n[5]=m=>e.updateApiTokenForm.permissions=m)},null,8,["value","checked"]),o("span",de,d(s),1)])]))),128))])]),footer:t(()=>[o(c,{onClick:n[6]||(n[6]=s=>e.managingPermissionsFor=null)},{default:t(()=>[pe]),_:1}),o(f,{class:["ml-2",{"opacity-25":e.updateApiTokenForm.processing}],onClick:e.updateApiToken,disabled:e.updateApiTokenForm.processing},{default:t(()=>[ce]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"]),o(P,{show:e.apiTokenBeingDeleted,onClose:n[9]||(n[9]=s=>e.apiTokenBeingDeleted=null)},{title:t(()=>[ue]),content:t(()=>[ke]),footer:t(()=>[o(c,{onClick:n[8]||(n[8]=s=>e.apiTokenBeingDeleted=null)},{default:t(()=>[_e]),_:1}),o(C,{class:["ml-2",{"opacity-25":e.deleteApiTokenForm.processing}],onClick:e.deleteApiToken,disabled:e.deleteApiTokenForm.processing},{default:t(()=>[ge]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])])}v.render=render;export default v;