(this.webpackJsonppage=this.webpackJsonppage||[]).push([[0],{128:function(e,t,a){e.exports=a(438)},134:function(e,t,a){},135:function(e,t,a){},167:function(e,t){},169:function(e,t){},202:function(e,t){},203:function(e,t){},246:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(40),r=a.n(c),o=(a(133),a(134),a(135),a(15)),i=a(16),s=a(17),u=a(18),m=a(453),p=a(441),d=a(442),h=a(454),E=a(455),y=a(127),v=a(443),b=a(444),f=a(445),C=a(446),x=a(447),g=a(41),k=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],r=a[1];return l.a.createElement(p.a,{style:{marginTop:10}},l.a.createElement(d.a,null,l.a.createElement(v.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(b.a,{onClick:function(){return r(!c)}}),l.a.createElement(f.a,{isOpen:c,navbar:!0},l.a.createElement(C.a,{className:"mr-auto",navbar:!0},l.a.createElement(x.a,null,l.a.createElement(g.b,{className:"nav-link",to:"/"},l.a.createElement("strong",null,"DevUtils"))),l.a.createElement(x.a,null,l.a.createElement(g.b,{className:"nav-link",to:"/social-meta"},"Social Meta")))))))},j=a(122),O=a.n(j),S=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={ip:"Carregando..."},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getIp()}},{key:"getIp",value:function(){var e=this;O.a.get("https://api.ipify.org/?format=json").then((function(t){var a=t.data.ip;e.setState({ip:a})}))}},{key:"render",value:function(){var e=this.state.ip;return l.a.createElement("h4",null,e)}}]),a}(l.a.Component),T=a(27),w=a(448),M=a(449),I=a(450),N=a(451),G=a(123),D=a.n(G),L=a(28),A=a.n(L),R=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).textCopy="Copy to clipboard",n.textCopied="Text copied successfully.",n.state={text:"",strMd5:"",textCopy:n.textCopy},n.handleTextChange=n.handleTextChange.bind(Object(T.a)(n)),n}return Object(i.a)(a,[{key:"handleTextChange",value:function(e){var t=e.target.value;this.setState({text:t,strMd5:D()(t).toString()})}},{key:"onSuccess",value:function(){var e=this;this.setState({textCopy:this.textCopied}),setTimeout((function(){e.setState({textCopy:e.textCopy})}),2e3)}},{key:"render",value:function(){var e=this;return l.a.createElement(w.a,null,l.a.createElement(p.a,{style:{marginTop:10}},l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"text"},"Text"),l.a.createElement(N.a,{type:"text",name:"text",id:"text",placeholder:"Text",value:this.state.text,onChange:this.handleTextChange})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"md5"},"MD5"),l.a.createElement(N.a,{type:"text",placeholder:"MD5",readOnly:!0,value:this.state.strMd5})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(A.a,{disabled:!0,className:"btn-block btn btn-primary","data-clipboard-text":this.state.strMd5,onSuccess:function(){e.onSuccess()}},this.state.textCopy)))))}}]),a}(l.a.Component),F=a(452),P=function(e,t){return Math.round(e-Math.floor(e/t)*t)},U=function(e){var t=function(e){return Math.round(Math.random()*e)},a=t(9),n=t(9),l=t(9),c=t(9),r=t(9),o=t(9),i=t(9),s=t(9),u=t(9),m=2*u+3*s+4*i+5*o+6*r+7*c+8*l+9*n+10*a;(m=11-P(m,11))>=10&&(m=0);var p=2*m+3*u+4*s+5*i+6*o+7*r+8*c+9*l+10*n+11*a;(p=11-P(p,11))>=10&&(p=0);return e?""+a+n+l+"."+c+r+o+"."+i+s+u+"-"+m+p:""+a+n+l+c+r+o+i+s+u+m+p},B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).textCopy="Copy to clipboard",n.textCopied="Text copied successfully.",n.state={cpf:"",textCopy:n.textCopy},n.handleGenerateClick=n.generateClick.bind(Object(T.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({cpf:U(!0)})}},{key:"generateClick",value:function(){this.setState({cpf:U(!0)})}},{key:"onSuccess",value:function(){var e=this;this.setState({textCopy:this.textCopied}),setTimeout((function(){e.setState({textCopy:e.textCopy})}),2e3)}},{key:"render",value:function(){var e=this;return l.a.createElement(w.a,null,l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement("small",null,"A ferramenta abaixo tem o objetivo de auxiliar desenvolvedores de softwares a testarem em seu ambiente de desenvolvimento. A m\xe1 utiliza\xe7\xe3o desse conte\xfado \xe9 de total responsabilidade do visitante. N\xe3o possu\xedmos v\xednculos com a Receita Federal."))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(N.a,{type:"text",readOnly:!0,value:this.state.cpf})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(A.a,{className:"btn-block btn btn-primary","data-clipboard-text":this.state.cpf,onSuccess:function(){e.onSuccess()}},this.state.textCopy))),l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(F.a,{block:!0,color:"success",onClick:this.handleGenerateClick},"Gerar novo n\xfamero")))))}}]),a}(l.a.Component),J=a(458),K=function(e,t){return Math.round(e-Math.floor(e/t)*t)},W=function(e){return Math.round(Math.random()*e)},z=function(e,t){if(t){var a=e.substring(0,2),n=e.substring(2,5),l=e.substring(5,8),c=e.substring(8,12),r=e.substring(12,15);e=a+"."+n+"."+l+"/"+c+"-"+r}return e},H=function(e){var t=W(9),a=W(9),n=W(9),l=W(9),c=W(9),r=W(9),o=W(9),i=W(9),s=2+6*i+7*o+8*r+9*c+2*l+3*n+4*a+5*t,u=2*(s=(s=11-K(s,11))>=10?0:s)+3+0+0+0+7*i+8*o+9*r+2*c+3*l+4*n+5*a+6*t,m=""+t+a+n+l+c+r+o+i+"0001"+s+(u=(u=11-K(u,11))>=10?0:u);return z(m,!!e)},$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).textCopy="Copy to clipboard",n.textCopied="Text copied successfully.",n.state={cnpj:"",textCopy:n.textCopy},n.handleGenerateClick=n.generateClick.bind(Object(T.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({cnpj:H(!0)})}},{key:"generateClick",value:function(){this.setState({cnpj:H(!0)})}},{key:"onSuccess",value:function(){var e=this;this.setState({textCopy:this.textCopied}),setTimeout((function(){e.setState({textCopy:e.textCopy})}),2e3)}},{key:"render",value:function(){var e=this;return l.a.createElement(w.a,null,l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement("small",null,"A ferramenta abaixo tem o objetivo de auxiliar desenvolvedores de softwares a testarem em seu ambiente de desenvolvimento. A m\xe1 utiliza\xe7\xe3o desse conte\xfado \xe9 de total responsabilidade do visitante. N\xe3o possu\xedmos v\xednculos com a Receita Federal."))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(N.a,{type:"text",readOnly:!0,value:this.state.cnpj})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(A.a,{className:"btn-block btn btn-primary","data-clipboard-text":this.state.cnpj,onSuccess:function(){e.onSuccess()}},this.state.textCopy))),l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(F.a,{block:!0,color:"success",onClick:this.handleGenerateClick},"Gerar novo n\xfamero")))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,this.state.copySuccess?l.a.createElement(J.a,{fade:!1,color:"success"},"Code copied successfully."):null)))}}]),a}(l.a.Component),q=(a(246),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(k,null),l.a.createElement(p.a,{style:{marginTop:10}},l.a.createElement(d.a,{xs:"12",sm:"12",md:"6"},l.a.createElement(h.a,{body:!0,inverse:!0},l.a.createElement(E.a,null,l.a.createElement("h4",null,"Meu IP")),l.a.createElement(S,null))),l.a.createElement(d.a,null,l.a.createElement(h.a,{body:!0,inverse:!0},l.a.createElement("h4",null,"MD5 Generator"),l.a.createElement(R,null)))),l.a.createElement(p.a,{style:{marginTop:10}},l.a.createElement(d.a,{sm:"12",md:"6"},l.a.createElement(h.a,{body:!0,inverse:!0},l.a.createElement("h4",null,"Gerador de CPF"),l.a.createElement(B,null))),l.a.createElement(d.a,null,l.a.createElement(h.a,{body:!0,inverse:!0},l.a.createElement("h4",null,"Gerador de CNPJ"),l.a.createElement($,null)))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement("p",null,l.a.createElement("br",null),l.a.createElement("br",null)))))}}]),a}(l.a.Component)),Q=a(124),V=a(457),X=a(456),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={code:"",copySuccess:!1,title:"",image:"",description:"",type:"",url:"",keywords:""},n}return Object(i.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(Q.a)({},n,a))}},{key:"onSuccess",value:function(){var e=this;this.setState({copySuccess:!0}),setTimeout((function(){e.setState({copySuccess:!1})}),1500)}},{key:"getCode",value:function(){var e=this.state,t=e.title,a=e.image,n=e.description,l=e.type,c=e.url,r=e.keywords;return"\x3c!-- HTML --\x3e\n<title>".concat(t,'</title>\n<meta name="title" content="').concat(t,'">\n<meta name="description" content="').concat(n,'">\n<meta name="keywords" content="').concat(r,'">\n\n\x3c!-- FACEBOOK --\x3e\n<meta property="og:title" content="').concat(t,'">\n<meta property="og:image" content="').concat(a,'">\n\n<meta property="og:type" content="').concat(l,'">\n<meta property="og:url" content="').concat(c,'">\n<meta property="og:description" content="').concat(n,'">\n\n\x3c!-- GOOGLE PLUS --\x3e\n<meta itemprop="name" content="').concat(t,'">\n<meta itemprop="image" content="').concat(a,'">\n<meta itemprop="url" content="').concat(c,'">\n<meta itemprop="description" content="').concat(n,'">\n\n\x3c!-- TWITTER --\x3e\n<meta name="twitter:title" content="').concat(t,'">\n<meta name="twitter:image:src" content="').concat(a,'">\n<meta name="twitter:site" content="').concat(c,'">\n<meta name="twitter:description" content="').concat(n,'">')}},{key:"render",value:function(){var e=this,t=this.getCode();return l.a.createElement(m.a,null,l.a.createElement(k,null),l.a.createElement(w.a,null,l.a.createElement(p.a,{style:{marginTop:10}},l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"title"},"Title/Name"),l.a.createElement(N.a,{type:"text",name:"title",id:"title",placeholder:"Title/Name",value:this.state.title,onChange:this.handleInputChange.bind(this)}))),l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"image"},"Image"),l.a.createElement(N.a,{type:"text",name:"image",id:"image",placeholder:"Image",value:this.state.image,onChange:this.handleInputChange.bind(this)})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"description"},"Description"),l.a.createElement(N.a,{type:"text",name:"description",id:"description",placeholder:"Description",value:this.state.description,onChange:this.handleInputChange.bind(this)}))),l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"type"},"Type"),l.a.createElement(N.a,{type:"text",name:"type",id:"type",placeholder:"Type",value:this.state.type,onChange:this.handleInputChange.bind(this)})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"url"},"URL"),l.a.createElement(N.a,{type:"text",name:"url",id:"url",placeholder:"URL",value:this.state.url,onChange:this.handleInputChange.bind(this)}))),l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(I.a,{for:"keywords"},"Keywords"),l.a.createElement(N.a,{type:"text",name:"keywords",id:"keywords",placeholder:"Keywords",value:this.state.keywords,onChange:this.handleInputChange.bind(this)})))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(M.a,null,l.a.createElement(A.a,{className:"btn btn-primary","data-clipboard-text":t,onSuccess:function(){e.onSuccess()}},"Copy to clipboard"))),l.a.createElement(d.a,null,this.state.copySuccess?l.a.createElement(J.a,{color:"success"},"Code copied successfully."):null)),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(V.a,{language:"html",style:X.a,wrapLines:!1,showLineNumbers:!0},t)))))}}]),a}(l.a.Component),Z=a(29);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g.a,null,l.a.createElement(Z.c,null,l.a.createElement(Z.a,{path:"/",exact:!0,component:q}),l.a.createElement(Z.a,{path:"/social-meta",component:Y})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.4dddde17.chunk.js.map