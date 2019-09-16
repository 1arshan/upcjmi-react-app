(window.webpackJsonpupcjmi=window.webpackJsonpupcjmi||[]).push([[10],{363:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{return e[t]}catch(a){return n}}},364:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a={INPUT:"input",INPUT_NUMBER:"input-number",PASSWORD:"password",TEXTAREA:"textarea",MARKDOWN:"markdown",SELECT:"select",CAPTCHA:"captcha",MONTH_PICKER:"month-picker",FILE_DRAG_DROP:"file-drag-drop",RANGE_PICKER:"range-picker",RADIO:"radio"},r={type:a.CAPTCHA,name:"captcha",label:"Captcha",rules:[{required:!0,message:"Please solve the captcha"}]}},383:function(e,t,n){"use strict";n(70);var a=n(41),r=(n(358),n(360)),c=(n(137),n(74)),i=(n(426),n(415)),o=(n(104),n(9)),l=n(55),u=(n(393),n(418)),s=(n(425),n(417)),p=(n(394),n(419)),b=(n(193),n(361)),m=n(424),f=n(57),d=n(58),O=n(62),y=n(59),h=n(63),E=(n(423),n(414)),g=n(0),v=n.n(g),j=n(28),P=n(395),k=n.n(P),w=n(364),D=(n(400),n(34)),C=n(420),T=n(80),R=n(54);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var A=E.a.MonthPicker,I=E.a.RangePicker,N={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},x=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(O.a)(this,Object(y.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.onSubmit;(0,a.validateFields)((function(e){e?Object(D.c)("error","Please Correct the error displayed in forms."):r(a)}))},n.state={initialValues:{},loaded:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.initialValue;t&&t().then((function(t){e.setState({initialValues:t,loaded:!0})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.props.form,n=t.getFieldDecorator,f=t.setFieldsValue,d=t.getFieldValue,O=this.props,y=O.onCancel,h=O.state,E=O.extraData,g=O.initialValue,j=O.submitButtonText,P=O.cancelButtonText,D=O.buttonType,x=O.formLayout,M=void 0===x?N:x,V=this.props.formTemplate;return!this.state.loaded&&g?"Loading...":("function"===typeof V&&(V=V(h,this.state.initialValues,E,this.props.form)),v.a.createElement(r.a,Object.assign({onSubmit:this.handleSubmit},M),V.map((function(e,t){var a=e.label,O=e.name,y=e.help,h=e.kwargs,E=e.type,g=e.desc,j=Object(m.a)(e,["label","name","help","kwargs","type","desc"]),P=null,D=null;switch(E){case w.b.CAPTCHA:var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f({captcha:e})};D=v.a.createElement(C.a,{sitekey:T.c,onChange:N,onExpired:function(){return N()},onErrored:function(){return N()}}),P=v.a.createElement("input",{type:"hidden"});break;case w.b.INPUT:P=v.a.createElement(b.a,h);break;case w.b.INPUT_NUMBER:P=v.a.createElement(p.a,h);break;case w.b.MARKDOWN:P=v.a.createElement(k.a,{onChange:function(e){document.getElementById(O).innerText=e}});break;case w.b.SELECT:var x=[];Object.keys(e.options).forEach((function(t,n){x.push(v.a.createElement(s.a.Option,{key:n.toString(),value:t,children:e.options[t]}))})),P=v.a.createElement(s.a,h,x);break;case w.b.RADIO:var M=[];Object.keys(e.options).forEach((function(t,n){M.push(v.a.createElement(u.a,{key:n.toString(),value:t,children:e.options[t]},t))})),P=v.a.createElement(u.a.Group,null,M);break;case w.b.PASSWORD:P=v.a.createElement(b.a.Password,h);break;case w.b.MONTH_PICKER:P=v.a.createElement(A,Object.assign({},h,{format:"MM/YYYY"}));break;case w.b.RANGE_PICKER:P=v.a.createElement(I,Object.assign({},h,{format:"YYYY-MM-DD"}));break;case w.b.FILE_DRAG_DROP:D=v.a.createElement(i.a.Dragger,Object.assign({},h,{action:"".concat(T.a,"/").concat("utils/file/"),data:function(e){return{id:e.uid}},onRemove:function(e){return t=e.response.id,n=e.uid,Object(R.a)("utils/file/",{method:"delete",data:{uid:n,id:t}});var t,n},onChange:function(e){var t=[];e.fileList.map((function(e){return t.push({uid:e.uid,id:e.response?e.response.id:""}),""})),f(Object(l.a)({},O,t))}}),v.a.createElement("p",{className:"ant-upload-drag-icon"},v.a.createElement(o.a,{type:"inbox"})),v.a.createElement("p",{className:"ant-upload-text"},h.help),v.a.createElement("p",{className:"ant-upload-hint"},h.desc)),j.initialValue="",P=v.a.createElement("input",{type:"hidden",value:d(O)});break;default:P=v.a.createElement(b.a,h)}return v.a.createElement(r.a.Item,{label:v.a.createElement("span",null,a,"\xa0",y?v.a.createElement(c.a,{title:y},v.a.createElement(o.a,{type:"question-circle-o"})):null),colon:!1,key:t.toString(),style:{marginBottom:20},extra:g},D,n(e.name,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({preserve:!0},j))(P))})),y?v.a.createElement(a.a,{style:{display:D},onClick:function(){return y(e.props.form)},htmlType:"button"},P||"Cancel"):null,v.a.createElement(a.a,{onClick:this.handleSubmit,type:"primary",htmlType:"submit",style:{width:"block"===D?"100%":null}},j||"Submit")))}}]),t}(g.Component),M=r.a.create({})(x);t.a=Object(j.b)((function(e){return{state:e}}),(function(e){return{}}))(M)},399:function(e,t){},625:function(e,t,n){"use strict";n.r(t);var a=n(55),r=(n(132),n(79)),c=n(0),i=n.n(c),o=n(39),l=n(383),u=n(364),s=n(363);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e,t,n,a){return[{label:"Documents",name:"documents",initialValue:Object(s.a)(t.values,"documents"),type:u.b.FILE_DRAG_DROP,rules:[{required:!0}],kwargs:{multiple:!0,help:"Add verification documents",desc:"Upload picture of your admit card and id card."}},b({},u.a)]},f=n(40);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=r.a.Title;t.default=function(e){var t=e.action,n=e.data,a=e.next,r=i.a.createElement(l.a,{formTemplate:m,title:"Verification Document",formLayout:{},submitButtonText:"Create My Account",buttonType:"block",onSubmit:function(e){t(O({},n,{basic:O({},n.basic,{},e.getFieldsValue())})),a()}});return i.a.createElement("div",null,i.a.createElement(y,null,"Verification Documents"),'By clicking on "Create my account" you agree to our',i.a.createElement(o.a,{href:f.g,newLine:!1}," terms and conditions "),"and",i.a.createElement(o.a,{href:f.e,newLine:!1}," privacy policy. "),i.a.createElement("br",null),"We are tracking your activity for any suspicious or illegal activity.",r)}}}]);
//# sourceMappingURL=10.b4589642.chunk.js.map