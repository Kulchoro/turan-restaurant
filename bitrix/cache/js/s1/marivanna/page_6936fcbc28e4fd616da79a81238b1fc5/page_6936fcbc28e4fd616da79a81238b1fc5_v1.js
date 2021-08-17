
; /* Start:"a:4:{s:4:"full";s:82:"/bitrix/components/innova/instagram/lib/min/ts-innova-instagram.js?157702471529769";s:6:"source";s:66:"/bitrix/components/innova/instagram/lib/min/ts-innova-instagram.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var tns_innova_instagram=function(){var t=window,hi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,mi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function pi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function yi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function gi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function xi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function bi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function wi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ci(t,e){return Math.atan2(t,e)*(180/Math.PI)}function Ai(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return 90-e<=i?n="horizontal":i<=e&&(n="vertical"),n}function Mi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),ki=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Ei=i?function(t,e){ki(t,e)||t.classList.add(e)}:function(t,e){ki(t,e)||(t.className+=" "+e)},Ti=i?function(t,e){ki(t,e)&&t.classList.remove(e)}:function(t,e){ki(t,e)&&(t.className=t.className.replace(e,""))};function Ni(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Oi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Bi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ii(t){t.style.cssText=""}function Li(t){Ni(t,"hidden")||Oi(t,{hidden:""})}function Si(t){Ni(t,"hidden")&&Bi(t,"hidden")}function Di(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Ri(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Pi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Wi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Hi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function zi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var qi=function(f){f=pi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns_innova_instagram-fadeIn",animateOut:"tns_innova_instagram-fadeOut",animateNormal:"tns_innova_instagram-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},f||{});var T=document,d=window,s=13,l=32,u=33,c=34,v=35,h=36,m=37,p=38,y=39,g=40,o={},x=f.useLocalStorage;if(x){var t=navigator.userAgent,e=new Date;try{(o=d.localStorage)?(o.setItem(e,e),x=o.getItem(e)==e,o.removeItem(e)):x=!1,x||(o={})}catch(t){x=!1}x&&(o.tns_innova_instagramApp&&o.tns_innova_instagramApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){o.removeItem(t)}),localStorage.tns_innova_instagramApp=t)}function n(t,e){return o[t]?(r=o[t],0<=["true","false"].indexOf(r)?JSON.parse(r):r):(n=o,i=t,a=e,x&&n.setItem(i,a),a);var n,i,a,r}for(var i,a,r,b,w,C,A,M=n("tC",function(){var t=document,e=yi(),n=gi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=s[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?xi(e,n):i.remove(),a}()),k=n("tPL",function(){var t,e=document,n=yi(),i=gi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns_innova_instagram-t-subp2",r.className="tns_innova_instagram-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?xi(n,i):a.remove(),t}()),N=n("tMQ",(a=document,r=yi(),b=gi(r),w=a.createElement("div"),C=a.createElement("style"),A="@media all and (min-width:1px){.tns_innova_instagram-mq-test{position:absolute}}",C.type="text/css",w.className="tns_innova_instagram-mq-test",r.appendChild(C),r.appendChild(w),C.styleSheet?C.styleSheet.cssText=A:C.appendChild(a.createTextNode(A)),i=window.getComputedStyle?window.getComputedStyle(w).position:w.currentStyle.position,r.fake?xi(r,b):w.remove(),"absolute"===i)),E=n("tTf",Ri("transform")),O=n("t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=yi(),a=gi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?xi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(E)),B=n("tTDu",Ri("transitionDuration")),I=n("tTDe",Ri("transitionDelay")),L=n("tADu",Ri("animationDuration")),S=n("tADe",Ri("animationDelay")),D=n("tTE",Pi(B,"Transition")),R=n("tAE",Pi(L,"Animation")),P=d.console&&"function"==typeof d.console.warn,W=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],H=W.length;H--;){var z=W[H];if("string"==typeof f[z]){var q=T.querySelector(f[z]);if(!q||!q.nodeName)return void(P&&console.warn("Can't find",f[z]));f[z]=q}}if(!(f.container.children.length<1)){if(f.responsive){var j={},F=f.responsive;for(var V in F){var Q=F[V];j[V]="number"==typeof Q?{items:Q}:Q}f.responsive=j,j=null,0 in f.responsive&&delete(f=pi(f,f.responsive[0])).responsive[0]}var X="carousel"===f.mode;if(!X){f.axis="horizontal",f.edgePadding=!1;var Y=f.animateIn,K=f.animateOut,U=f.animateDelay,G=f.animateNormal}var J,_="horizontal"===f.axis,Z=T.createElement("div"),$=T.createElement("div"),tt=f.container,et=tt.parentNode,nt=tt.children,it=nt.length,at=f.responsive,rt=!1,ot=0,st=ln();at&&(rt=Object.keys(at).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e}),An());var lt,ut,ct,ft,dt,vt,ht,mt,pt=f.nested,yt=f.autoWidth,gt=fn("fixedWidth"),xt=fn("edgePadding"),bt=fn("gutter"),wt=un(),Ct=yt?null:Math.floor(fn("items")),At="page"===fn("slideBy")?Ct:fn("slideBy"),Mt=f.viewportMax||f.fixedWidthViewportWidth,kt=fn("arrowKeys"),Et=fn("speed"),Tt=f.rewind,Nt=!Tt&&f.loop,Ot=fn("autoHeight"),Bt=(mt=document.createElement("style"),ht&&mt.setAttribute("media",ht),document.querySelector("head").appendChild(mt),mt.sheet?mt.sheet:mt.styleSheet),It=f.lazyload,Lt=[],St=cn("edgePadding"),Dt=Nt?(dt=function(){{if(yt||gt&&!Mt)return it-1;var n=gt?"fixedWidth":"items",i=[];return(gt||f[n]<it)&&i.push(f[n]),rt&&rt.forEach(function(t){var e=at[t][n];e&&(gt||e<it)&&i.push(e)}),i.length||i.push(0),Math.ceil(gt?Mt/Math.min.apply(null,i):Math.max.apply(null,i))}}(),vt=X?Math.ceil((5*dt-it)/2):4*dt-it,vt=Math.max(dt,vt),St?vt+1:vt):0,Rt=X?it+2*Dt:it+Dt,Pt=!(!gt&&!yt||Nt),Wt=gt?jn():null,Ht=!X||!Nt,zt=_?"left":"top",qt="",jt="",Ft=fn("startIndex"),Vt=Ft?function(t){(t%=it)<0&&(t+=it);return t=Math.min(t,Rt-Ct)}(Ft):X?Dt:0,Qt=Vt,Xt=0,Yt=yt?null:on(),Kt=f.swipeAngle,Ut=!Kt||"?",Gt=!1,Jt=f.onInit,_t=new zi,Zt=tt.id,$t=" tns_innova_instagram-slider tns_innova_instagram-"+f.mode,te=tt.id||(ft=window.tns_innova_instagramId,window.tns_innova_instagramId=ft?ft+1:1,"tns_innova_instagram"+window.tns_innova_instagramId),ee=fn("disable"),ne=f.freezable,ie=yt?null:Cn(),ae={click:Jn,keydown:function(t){switch((t=ai(t)).keyCode){case m:case p:case u:ke.disabled||Jn(t,-1);break;case y:case g:case c:Ee.disabled||Jn(t,1);break;case h:Gn("first",t);break;case v:Gn("last",t)}}},re={click:function(t){Gt&&Un();var e=(t=ai(t)).target||t.srcElement;for(;e!==Oe&&!Ni(e,"data-nav");)e=e.parentNode;Ni(e,"data-nav")&&Gn(Le=[].indexOf.call(Te,e),t)},keydown:function(t){var e=T.activeElement;if(!Ni(e,"data-nav"))return;var n=(t=ai(t)).keyCode,i=[].indexOf.call(Te,e),a=Be.length,r=Be.indexOf(i);f.navContainer&&(a=it,r=i);function o(t){return f.navContainer?t:Be[t]}switch(n){case m:case u:0<r&&ii(Te[o(r-1)]);break;case p:case h:0<r&&ii(Te[o(0)]);break;case y:case c:r<a-1&&ii(Te[o(r+1)]);break;case g:case v:r<a-1&&ii(Te[o(a-1)]);break;case s:case l:Gn(Le=i,t)}}},oe={mouseover:function(){We&&(Zn(),He=!0)},mouseout:function(){He&&(_n(),He=!1)}},se={visibilitychange:function(){T.hidden?We&&(Zn(),qe=!0):qe&&(_n(),qe=!1)}},le={keydown:function(t){switch((t=ai(t)).keyCode){case m:Jn(t,-1);break;case y:Jn(t,1)}}},ue={touchstart:li,touchmove:ui,touchend:ci,touchcancel:ci},ce={mousedown:li,mousemove:ui,mouseup:ci,mouseleave:ci},fe=cn("controls"),de=cn("nav"),ve=!!yt||f.navAsThumbnails,he=cn("autoplay"),me=cn("touch"),pe=cn("mouseDrag"),ye="tns_innova_instagram-slide-active",ge="tns_innova_instagram-complete",xe={load:Tn,error:Tn};if(fe)var be,we,Ce=fn("controls"),Ae=fn("controlsText"),Me=f.controlsContainer,ke=f.prevButton,Ee=f.nextButton;if(de)var Te,Ne=fn("nav"),Oe=f.navContainer,Be=[],Ie=Be,Le=-1,Se=sn(),De=Se,Re="tns_innova_instagram-nav-active";if(he)var Pe,We,He,ze,qe,je=fn("autoplay"),Fe=fn("autoplayTimeout"),Ve="forward"===f.autoplayDirection?1:-1,Qe=fn("autoplayText"),Xe=fn("autoplayHoverPause"),Ye=f.autoplayButton,Ke=fn("autoplayResetOnVisibility"),Ue=["<span class='tns_innova_instagram-visually-hidden'>"," animation</span>"];if(me||pe)var Ge,Je={},_e={},Ze=!1,$e=0,tn=_?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(me)var en=fn("touch");if(pe)var nn=fn("mouseDrag");ie&&(Ce=Ne=en=nn=kt=je=Xe=Ke=!1),E&&(zt=E,qt="translate",O?(qt+=_?"3d(":"3d(0px, ",jt=_?", 0px, 0px)":", 0px)"):(qt+=_?"X(":"Y(",jt=")")),function(){cn("gutter");Z.className="tns_innova_instagram-outer",$.className="tns_innova_instagram-inner",$.id=te+"-iw",Ot&&($.className+=" tns_innova_instagram-ah");""===tt.id&&(tt.id=te);$t+=k||yt?" tns_innova_instagram-subpixel":" tns_innova_instagram-no-subpixel",$t+=M?" tns_innova_instagram-calc":" tns_innova_instagram-no-calc",X&&($t+=" tns_innova_instagram-"+f.axis);if(tt.className+=$t,X){var t=T.createElement("div");t.className="tns_innova_instagram-ovh",Z.appendChild(t),t.appendChild($)}else Z.appendChild($);if(et.insertBefore(Z,tt),$.appendChild(tt),X&&D){var e={};e[D]=Un,Wi(tt,e)}for(var n=0;n<it;n++){var i=nt[n];i.id||(i.id=te+"-item"+n),Ei(i,"tns_innova_instagram-item"),!X&&G&&Ei(i,G),Oi(i,{"aria-hidden":"true",tabindex:"-1"})}if(Dt){for(var a=T.createDocumentFragment(),r=T.createDocumentFragment(),o=Dt;o--;){var s=o%it,l=nt[s].cloneNode(!0);if(Bi(l,"id"),r.insertBefore(l,r.firstChild),X){var u=nt[it-1-s].cloneNode(!0);Bi(u,"id"),a.appendChild(u)}}tt.insertBefore(a,tt.firstChild),tt.appendChild(r),nt=tt.children}if(cn("autoHeight")||!X||yt||!_){var c=tt.querySelectorAll("img");Mi(c,function(t){var e=t.src;e.indexOf("data:image")<0?(Wi(t,xe),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Ei(t,ge)}),hi(function(){Bn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(c),function(){ct=!0,ee||(_&&!yt||(Dn(),En(),yt&&(Ct=fn("items"),Wt=jn(),ie=Cn(),Yt=on(),ie&&(Ce=Ne=en=nn=kt=je=Xe=Ke=!1),xn()),_||fi()),X&&Vn())})})}X&&_&&!yt&&Vn();(function(){for(var t=Vt,e=Vt+Math.min(it,Ct);t<e;t++){var n=nt[t];Oi(n,{"aria-hidden":"false"}),Bi(n,["tabindex"]),Ei(n,ye),X||(n.style.left=100*(t-Vt)/Ct+"%",Ei(n,Y),Ti(n,G))}if(X&&_&&(k||yt?(bi(Bt,"#"+te+" > .tns_innova_instagram-item","font-size:"+d.getComputedStyle(nt[0]).fontSize+";",wi(Bt)),bi(Bt,"#"+te,"font-size:0;",wi(Bt))):Mi(nt,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Rt+")":100*n/Rt+"%")})),N){var i=dn(f.edgePadding,f.gutter,f.fixedWidth,f.speed);bi(Bt,"#"+te+"-iw",i,wi(Bt)),X&&(i=_&&!yt?"width:"+vn(f.fixedWidth,f.gutter,f.items)+";":"",B&&(i+=yn(Et)),bi(Bt,"#"+te,i,wi(Bt))),i=_&&!yt?hn(f.fixedWidth,f.gutter,f.items):"",f.gutter&&(i+=mn(f.gutter)),X||(B&&(i+=yn(Et)),L&&(i+=gn(Et))),i&&bi(Bt,"#"+te+" > .tns_innova_instagram-item",i,wi(Bt))}else{$.style.cssText=dn(xt,bt,gt),X&&_&&!yt&&(tt.style.width=vn(gt,bt,Ct));var i=_&&!yt?hn(gt,bt,Ct):"";bt&&(i+=mn(bt)),i&&bi(Bt,"#"+te+" > .tns_innova_instagram-item",i,wi(Bt))}at&&N&&rt.forEach(function(t){var e=at[t],n="",i="",a="",r="",o=yt?null:fn("items",t),s=fn("fixedWidth",t),l=fn("speed",t),u=fn("edgePadding",t),c=fn("gutter",t);("edgePadding"in e||"gutter"in e)&&(i="#"+te+"-iw{"+dn(u,c,s,l)+"}"),X&&_&&!yt&&("fixedWidth"in e||"items"in e||gt&&"gutter"in e)&&(a="width:"+vn(s,c,o)+";"),B&&"speed"in e&&(a+=yn(l)),a&&(a="#"+te+"{"+a+"}"),("fixedWidth"in e||gt&&"gutter"in e||!X&&"items"in e)&&(r+=hn(s,c,o)),"gutter"in e&&(r+=mn(c)),!X&&"speed"in e&&(B&&(r+=yn(l)),L&&(r+=gn(l))),r&&(r="#"+te+" > .tns_innova_instagram-item{"+r+"}"),(n=i+a+r)&&Bt.insertRule("@media (min-width: "+t/16+"em) {"+n+"}",Bt.cssRules.length)})})(),yt||xn()}();var an=Nt?X?function(){var t=Xt,e=Yt;t+=At,e-=At,xt?(t+=1,e-=1):gt&&wt%(gt+bt)&&(e-=1),Dt&&(e<Vt?Vt-=it:Vt<t&&(Vt+=it))}:function(){if(Yt<Vt)for(;Xt+it<=Vt;)Vt-=it;else if(Vt<Xt)for(;Vt<=Yt-it;)Vt+=it}:function(){Vt=Math.max(Xt,Math.min(Yt,Vt))},rn=X?function(){var e,n,i,a,t,r,o,s,l,u,c;B||!Et?(Qn(),Et&&Di(tt)||Un()):(e=tt,n=zt,i=qt,a=jt,t=Fn(),r=Et,o=Un,s=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),u=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-u)/r*s,setTimeout(function t(){r-=s,u+=c,e.style[n]=i+u+l+a,0<r?setTimeout(t,s):o()},s)),_||fi()}:function(){Lt=[];var t={};t[D]=t[R]=Un,Hi(nt[Qt],t),Wi(nt[Vt],t),Xn(Qt,Y,K,!0),Xn(Vt,G,Y),D&&R&&Et&&Di(tt)||Un()};return{getInfo:vi,events:_t,goTo:Gn,play:function(){je&&!We&&(ti(),ze=!1)},pause:function(){We&&(ei(),ze=!0)},isOn:J,updateSliderHeight:Sn,rebuild:function(){return qi(f)},destroy:function(){if(Hi(d,{resize:bn}),Hi(T,le),Bt.disabled=!0,Nt)for(var t=Dt;t--;)X&&nt[0].remove(),nt[nt.length-1].remove();var e=["tns_innova_instagram-item",ye];X||(e=e.concat("tns_innova_instagram-normal",Y));for(var n=it;n--;){var i=nt[n];0<=i.id.indexOf(te+"-item")&&(i.id=""),e.forEach(function(t){Ti(i,t)})}if(Bi(nt,["style","aria-hidden","tabindex"]),nt=te=it=Rt=Dt=null,Ce&&(Hi(Me,ae),f.controlsContainer&&(Bi(Me,["aria-label","tabindex"]),Bi(Me.children,["aria-controls","aria-disabled","tabindex"])),Me=ke=Ee=null),Ne&&(Hi(Oe,re),f.navContainer&&(Bi(Oe,["aria-label"]),Bi(Te,["aria-selected","aria-controls","tabindex"])),Oe=Te=null),je&&(clearInterval(Pe),Ye&&Hi(Ye,{click:ni}),Hi(tt,oe),Hi(tt,se),f.autoplayButton&&Bi(Ye,["data-action"])),tt.id=Zt||"",tt.className=tt.className.replace($t,""),Ii(tt),X&&D){var a={};a[D]=Un,Hi(tt,a)}Hi(tt,ue),Hi(tt,ce),et.insertBefore(tt,Z),Z.remove(),Z=$=tt=Vt=Qt=Ct=At=Se=De=fe=Be=Ie=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=J=!1}}}function on(){if(gt||yt){if(gt)return Math.floor(-Wt/(gt+bt))+1;for(var t=Rt-1,e=t;lt[t]>-Wt;)e=--t;return e}return Nt||X?Math.max(0,Rt-Math.ceil(fn("items"))):Rt-1}function sn(t){for(null==t&&(t=Vt),X&&(t-=Dt);t<0;)t+=it;return Math.floor(t%it)}function ln(){return d.innerWidth||T.documentElement.clientWidth||T.body.clientWidth}function un(){var t=function t(e){return e.clientWidth||t(e.parentNode)}(et);return xt?t-(2*xt-bt):t}function cn(e){return!!f[e]||(rt&&rt.forEach(function(t){if(at[t][e])return!0}),!1)}function fn(e,n){n=n||st;var i,t={slideBy:"page",edgePadding:!1};return!X&&e in t?i=t[e]:"items"===e&&gt?i=Math.floor(n/(gt+bt)):"autoHeight"===e&&"outer"===pt?i=!0:(i=f[e],rt&&rt.forEach(function(t){t<=n&&e in at[t]&&(i=at[t][e])})),"slideBy"===e&&"page"===i&&(i=fn("items")),X||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function dn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=_?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(_?o+" 0 0":"0 "+o+" 0")+";"}return B&&i&&(a+=yn(i)),a}function vn(t,e,n){return t?(t+e)*Rt+"px":M?M+"("+100*Rt+"% / "+n+")":100*Rt/n+"%"}function hn(t,e,n){var i;if(t)i=t+e+"px";else{X||(n=Math.floor(n));var a=X?Rt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==pt?i+";":i+" !important;"}function mn(t){var e="";!1!==t&&(e=(_?"padding-":"margin-")+(_?"right":"bottom")+": "+t+"px;");return e}function pn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function yn(t){return pn(B,18)+"transition-duration:"+t/1e3+"s;"}function gn(t){return pn(L,17)+"animation-duration:"+t/1e3+"s;"}function xn(){if(he){var t=je?"stop":"start";Ye?Oi(Ye,{"data-action":t}):f.autoplayButtonOutput&&(Z.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+Ue[0]+t+Ue[1]+Qe[0]+"</button>"),Ye=Z.querySelector("[data-action]")),Ye&&Wi(Ye,{click:ni}),je?(ti(),Xe&&Wi(tt,oe),Ke&&Wi(tt,se)):Ye&&Li(Ye)}if(de){var e=X?Dt:0;if(Oe){Oi(Oe,{"aria-label":"Carousel Pagination"}),Te=Oe.children;for(var n=0;n<it;n++){var i=Te[n];i&&Oi(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":nt[e+n].id})}}else{var a="",r=ve?"":"hidden";for(n=0;n<it;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+nt[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns_innova_instagram-nav" aria-label="Carousel Pagination">'+a+"</div>",Z.insertAdjacentHTML("afterbegin",a),Oe=Z.querySelector(".tns_innova_instagram-nav"),Te=Oe.children}if(di(),B){var o=B.substring(0,B.length-18).toLowerCase(),s="transition: all "+Et/1e3+"s";o&&(s="-"+o+"-"+s),bi(Bt,"[aria-controls^="+te+"-item]",s,wi(Bt))}Oi(Te[Se],{tabindex:"0","aria-selected":"true"}),Ei(Te[Se],Re),Wi(Oe,re),Ne||Li(Oe)}fe&&(Me||ke&&Ee?(Me&&(ke=Me.children[0],Ee=Me.children[1],Oi(Me,{"aria-label":"Carousel Navigation",tabindex:"0"}),Oi(Me.children,{"aria-controls":te,tabindex:"-1"})),Oi(ke,{"data-controls":"prev"}),Oi(Ee,{"data-controls":"next"})):(Z.insertAdjacentHTML("afterbegin",'<div class="tns_innova_instagram-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+te+'" type="button">'+Ae[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+te+'" type="button">'+Ae[1]+"</button></div>"),Me=Z.querySelector(".tns_innova_instagram-controls"),ke=Me.children[0],Ee=Me.children[1]),be=Pn(ke),we=Pn(Ee),zn(),Me?Wi(Me,ae):(Wi(ke,ae),Wi(Ee,ae)),Ce||Li(Me)),en&&Wi(tt,ue),nn&&Wi(tt,ce),kt&&Wi(T,le),"inner"===pt?_t.on("outerResized",function(){wn(),_t.emit("innerLoaded",vi())}):Wi(d,{resize:bn}),"outer"===pt?_t.on("innerLoaded",On):!Ot&&X||ee||On(),yt||En(),Mn(),_t.on("indexChanged",In),"function"==typeof Jt&&Jt(vi()),"inner"===pt&&_t.emit("innerLoaded",vi()),ee&&kn(!0),J=!0}function bn(t){hi(function(){wn(ai(t))})}function wn(t){if(J){st=ln(),"outer"===pt&&_t.emit("outerResized",vi(t));var e,n,i=ot,a=xt,r=bt,o=Vt,s=Ct,l=ie,u=!1;if(xt=fn("edgePadding"),bt=fn("gutter"),wt=un(),rt&&An(),i!==ot&&_t.emit("newBreakpointStart",vi(t)),_&&!yt||ee||(Dn(),_||(fi(),u=!0)),(gt||yt)&&(Wt=jn(),Yt=on()),i!==ot||gt||yt){var c=kt,f=Ot,d=gt,v=ee;if(Ct=fn("items"),At=fn("slideBy"),ee=fn("disable"),Pt&&(u=!0),ie=Cn(),Ct!==s&&(gt||yt||(Yt=on()),an()),ee!==v&&kn(ee),ie!==l&&(ie?Qn(Fn(X?Dt:0)):u=!0,Mn()),i!==ot&&(Et=fn("speed"),gt=fn("fixedWidth"),ee||gt===d||(u=!0),(Ot=fn("autoHeight"))!==f&&(Ot||($.style.height=""))),(kt=!ie&&fn("arrowKeys"))!==c&&(kt?Wi(T,le):Hi(T,le)),fe){var h=Ce,m=Ae;Ce=!ie&&fn("controls"),Ae=fn("controlsText"),Ce!==h&&(Ce?Si(Me):Li(Me)),Ae!==m&&(ke.innerHTML=Ae[0],Ee.innerHTML=Ae[1])}if(de){var p=Ne;(Ne=!ie&&fn("nav"))!==p&&(Ne?(Si(Oe),di()):Li(Oe))}if(me){var y=en;(en=!ie&&fn("touch"))!==y&&X&&(en?Wi(tt,ue):Hi(tt,ue))}if(pe){var g=nn;(nn=!ie&&fn("mouseDrag"))!==g&&X&&(nn?Wi(tt,ce):Hi(tt,ce))}if(he){var x=je,b=Xe,w=Ke,C=Qe;if(ie?je=Xe=Ke=!1:(je=fn("autoplay"))?(Xe=fn("autoplayHoverPause"),Ke=fn("autoplayResetOnVisibility")):Xe=Ke=!1,Qe=fn("autoplayText"),Fe=fn("autoplayTimeout"),je!==x&&(je?(Ye&&Si(Ye),We||ze||ti()):(Ye&&Li(Ye),We&&ei())),Xe!==b&&(Xe?Wi(tt,oe):Hi(tt,oe)),Ke!==w&&(Ke?Wi(T,se):Hi(T,se)),Ye&&Qe!==C){var A=je?1:0,M=Ye.innerHTML,k=M.length-C[A].length;M.substring(k)===C[A]&&(Ye.innerHTML=M.substring(0,k)+Qe[A])}}if(!N){if(ie||xt===a&&bt===r||($.style.cssText=dn(xt,bt,gt)),_&&!gt){X&&(tt.style.width=vn(!1,null,Ct));var E=hn(gt,bt,Ct)+mn(bt);n=wi(e=Bt)-1,"deleteRule"in e?e.deleteRule(n):e.removeRule(n),bi(Bt,"#"+te+" > .tns_innova_instagram-item",E,wi(Bt))}gt||(u=!0)}Vt!==o&&(_t.emit("indexChanged",vi()),u=!0),(Ct!==s||yt)&&(In(),function(){if(!X){for(var t=Vt+Math.min(it,Ct),e=Rt;e--;){var n=nt[e];Vt<=e&&e<t?(Ei(n,"tns_innova_instagram-moving"),n.style.left=100*(e-Vt)/Ct+"%",Ei(n,Y),Ti(n,G)):n.style.left&&(n.style.left="",Ei(n,G),Ti(n,Y)),Ti(n,K)}setTimeout(function(){Mi(nt,function(t){Ti(t,"tns_innova_instagram-moving")})},300)}}(),navigator.msMaxTouchPoints&&setSnapInterval())}u&&(Vn(),Qt=Vt),!Ot&&X||ee||On(),i!==ot&&_t.emit("newBreakpointEnd",vi(t))}}function Cn(){return!!ee||!!ne&&(gt||yt?Nt?(gt?(gt+bt)*it:lt[it])-bt<=wt:!Wt:it<=Ct)}function An(){ot=0,rt.forEach(function(t,e){t<=st&&(ot=e+1)})}function Mn(){var t="tns_innova_instagram-transparent";if(ie){if(!ut){if(xt&&($.style.margin="0px"),Dt)for(var e=Dt;e--;)X&&Ei(nt[e],t),Ei(nt[Rt-e-1],t);ut=!0}}else if(ut){if(xt&&N&&($.style.margin=""),Dt)for(e=Dt;e--;)X&&Ti(nt[e],t),Ti(nt[Rt-e-1],t);ut=!1}}function kn(t){var e=nt.length;if(t){if(Bt.disabled=!0,tt.className=tt.className.replace($t.substring(1),""),Ii(tt),Nt)for(var n=Dt;n--;)X&&Li(nt[n]),Li(nt[e-n-1]);if(_&&X||Ii($),!X)for(var i=Vt,a=Vt+it;i<a;i++){Ii(r=nt[i]),Ti(r,Y),Ti(r,G)}}else{if(Bt.disabled=!1,tt.className+=$t,_&&!yt||(Dn(),yt&&(Wt=jn(),Yt=on())),Vn(),Nt)for(n=Dt;n--;)X&&Si(nt[n]),Si(nt[e-n-1]);if(!X)for(i=Vt,a=Vt+it;i<a;i++){var r=nt[i],o=i<Vt+Ct?Y:G;r.style.left=100*(i-Vt)/Ct+"%",Ei(r,o)}}}function En(){if(It&&!ee){var t=Vt;if(yt)for(var e=Vt+1,n=e,i=lt[Vt]+wt+xt-bt;lt[e]<i;)n=++e;else n=Vt+Ct;for(xt&&(t-=1,yt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Rt));t<n;t++)Mi(nt[t].querySelectorAll(".tns_innova_instagram-lazy-img"),function(t){var e,n={};n[D]=function(t){t.stopPropagation()},Wi(t,n),ki(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Ei(t,"loaded"))})}}function Tn(t){var e=ri(t);Ei(e,ge),Hi(e,xe)}function Nn(t,e){for(var n=[],i=t,a=Math.min(t+e,Rt);i<a;i++)Mi(nt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function On(){var t=Ot?Nn(Vt,Ct):Nn(Dt,it);hi(function(){Bn(t,Sn)})}function Bn(n,t){return ct?t():(n.forEach(function(t,e){ki(t,ge)&&n.splice(e,1)}),n.length?void hi(function(){Bn(n,t)}):t())}function In(){En(),function(){for(var t=Vt+Math.min(it,Ct),e=Rt;e--;){var n=nt[e];Vt<=e&&e<t?Ni(n,"tabindex")&&(Oi(n,{"aria-hidden":"false"}),Bi(n,["tabindex"]),Ei(n,ye)):(Ni(n,"tabindex")||Oi(n,{"aria-hidden":"true",tabindex:"-1"}),ki(n,ye)&&Ti(n,ye))}}(),zn(),di(),function(){if(Ne&&(Se=-1!==Le?Le:sn(),Le=-1,Se!==De)){var t=Te[De],e=Te[Se];Oi(t,{tabindex:"-1","aria-selected":"false"}),Oi(e,{tabindex:"0","aria-selected":"true"}),Ti(t,Re),Ei(e,Re),De=Se}}()}function Ln(t,e){for(var n=[],i=t,a=Math.min(t+e,Rt);i<a;i++)n.push(nt[i].offsetHeight);return Math.max.apply(null,n)}function Sn(){var t=Ot?Ln(Vt,Ct):Ln(Dt,it);$.style.height!==t&&($.style.height=t+"px")}function Dn(){lt=[0];for(var t,e=_?"left":"top",n=nt[0].getBoundingClientRect()[e],i=1;i<Rt;i++)t=nt[i].getBoundingClientRect()[e],lt.push(t-n)}function Rn(t){return t.nodeName.toLowerCase()}function Pn(t){return"button"===Rn(t)}function Wn(t){return"true"===t.getAttribute("aria-disabled")}function Hn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function zn(){if(Ce&&!Tt&&!Nt){var t=be?ke.disabled:Wn(ke),e=we?Ee.disabled:Wn(Ee),n=Vt===Xt,i=!Tt&&Vt===Yt;n&&!t&&Hn(be,ke,!0),!n&&t&&Hn(be,ke,!1),i&&!e&&Hn(we,Ee,!0),!i&&e&&Hn(we,Ee,!1)}}function qn(t,e){B&&(t.style[B]=e)}function jn(){var t=-((gt?(gt+bt)*Rt-bt:lt[Rt-1]+nt[Rt-1].getBoundingClientRect().width-bt)-wt);return 0<t&&(t=0),t}function Fn(t){var e;(null==t&&(t=Vt),_&&!yt)?e=gt?-(gt+bt)*t:100*-t/(E?Rt:Ct):e=-lt[t];return Pt&&(e=Math.max(e,Wt)),e+=!_||yt||gt?"px":"%"}function Vn(t){qn(tt,"0s"),Qn(t),setTimeout(function(){qn(tt,"")},10)}function Qn(t){null==t&&(t=Fn()),tt.style[zt]=qt+t+jt}function Xn(t,e,n,i){var a=t+Ct;Nt||(a=Math.min(a,Rt));for(var r=t;r<a;r++){var o=nt[r];i||(o.style.left=100*(r-Vt)/Ct+"%"),U&&I&&(o.style[I]=o.style[S]=U*(r-t)/1e3+"s"),Ti(o,e),Ei(o,n),i&&Lt.push(o)}}function Yn(t,e){Ht&&an(),(Vt!==Qt||e)&&(_t.emit("indexChanged",vi()),_t.emit("transitionStart",vi()),We&&t&&0<=["click","keydown"].indexOf(t.type)&&ei(),Gt=!0,rn())}function Kn(t){return t.toLowerCase().replace(/-/g,"")}function Un(t){if(X||Gt){if(_t.emit("transitionEnd",vi(t)),!X&&0<Lt.length)for(var e=0;e<Lt.length;e++){var n=Lt[e];n.style.left="",S&&I&&(n.style[S]="",n.style[I]=""),Ti(n,K),Ei(n,G)}if(!t||!X&&t.target.parentNode===tt||t.target===tt&&Kn(t.propertyName)===Kn(zt)){if(!Ht){var i=Vt;an(),Vt!==i&&(_t.emit("indexChanged",vi()),Vn())}Ot&&On(),"inner"===pt&&_t.emit("innerLoaded",vi()),Gt=!1,Qt=Vt}}}function Gn(t,e){if(!ie)if("prev"===t)Jn(e,-1);else if("next"===t)Jn(e,1);else{Gt&&Un();var n=sn(),i=0;if("first"===t?i=-n:"last"===t?i=X?it-Ct-n:it-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(1,Math.min(it,t)),t-=1),i=t-n)),!X&&i&&Math.abs(i)<Ct){var a=0<i?1:-1;i+=Xt<=Vt+i-it?it*a:2*it*a*-1}Vt+=i,X&&Nt&&(Vt<Xt&&(Vt+=it),Yt<Vt&&(Vt-=it)),sn(Vt)!==sn(Qt)&&Yn(e)}}function Jn(t,e){var n;if(Gt&&Un(),!e){for(var i=(t=ai(t)).target||t.srcElement;i!==Me&&[ke,Ee].indexOf(i)<0;)i=i.parentNode;var a=[ke,Ee].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Tt){if(Vt===Xt&&-1===e)return void Gn("last",t);if(Vt===Yt&&1===e)return void Gn("first",t)}e&&(Vt+=At*e,yt&&(Vt=Math.floor(Vt)),Yn(n||t&&"keydown"===t.type?t:null))}function _n(){Pe=setInterval(function(){Jn(null,Ve)},Fe),We=!0}function Zn(){clearInterval(Pe),We=!1}function $n(t,e){Oi(Ye,{"data-action":t}),Ye.innerHTML=Ue[0]+t+Ue[1]+e}function ti(){_n(),Ye&&$n("stop",Qe[1])}function ei(){Zn(),Ye&&$n("start",Qe[0])}function ni(){We?(ei(),ze=!0):(ti(),ze=!1)}function ii(t){t.focus()}function ai(t){return oi(t=t||d.event)?t.changedTouches[0]:t}function ri(t){return t.target||d.event.srcElement}function oi(t){return 0<=t.type.indexOf("touch")}function si(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function li(t){Gt&&Un(),Ze=!0,X&&(mi($e),$e=0);var e=ai(t);_t.emit(oi(t)?"touchStart":"dragStart",vi(t)),!oi(t)&&0<=["img","a"].indexOf(Rn(ri(t)))&&si(t),_e.x=Je.x=parseInt(e.clientX),_e.y=Je.y=parseInt(e.clientY),X&&(Ge=parseFloat(tt.style[zt].replace(qt,"").replace(jt,"")),qn(tt,"0s"))}function ui(t){if(Ze){var e=ai(t);_e.x=parseInt(e.clientX),_e.y=parseInt(e.clientY),X&&!$e&&($e=hi(function(){!function t(e){if(!Ut)return void(Ze=!1);mi($e);Ze&&($e=hi(function(){t(e)}));"?"===Ut&&_e.x!==Je.x&&_e.y!==Je.y&&(Ut=Ai(Ci(_e.y-Je.y,_e.x-Je.x),Kt)===f.axis);if(Ut){try{e.type&&_t.emit(oi(e)?"touchMove":"dragMove",vi(e))}catch(t){}var n=Ge,i=tn(_e,Je);if(!_||gt||yt)n+=i,n+="px";else{var a=E?i*Ct*100/(wt*Rt):100*i/wt;n+=a,n+="%"}tt.style[zt]=qt+n+jt}}(t)}))}}function ci(i){if(Kt&&(Ut="?"),Ze){X&&(mi($e),qn(tt,"")),Ze=!1;var t=ai(i);_e.x=parseInt(t.clientX),_e.y=parseInt(t.clientY);var a=tn(_e,Je);if(5<=Math.abs(a)){if(!oi(i)){var n=ri(i);Wi(n,{click:function t(e){si(e),Hi(n,{click:t})}})}X?$e=hi(function(){if(_&&!yt){var t=-a*Ct/wt;t=0<a?Math.floor(t):Math.ceil(t),Vt+=t}else{var e=-(Ge+a);if(e<=0)Vt=Xt;else if(e>=lt[lt.length-1])Vt=Yt;else for(var n=0;n<Rt&&e>=lt[n];)e>lt[Vt=n]&&a<0&&(Vt+=1),n++}Yn(i,a),_t.emit(oi(i)?"touchEnd":"dragEnd",vi(i))}):("?"===Ut&&_e.x!==Je.x&&_e.y!==Je.y&&(Ut=Ai(Ci(_e.y-Je.y,_e.x-Je.x),Kt)===f.axis),Ut&&Jn(i,0<a?-1:1))}}}function fi(){$.style.height=lt[Vt+Ct]-lt[Vt]+"px"}function di(){Ne&&!ve&&(!function(){Be=[];for(var t=sn()%Ct;t<it;)X&&!Nt&&it<t+Ct&&(t=it-Ct),Be.push(t),t+=Ct;(Nt&&Be.length*Ct<it||!Nt&&0<Be[0])&&Be.unshift(0)}(),Be!==Ie&&(Mi(Te,function(t,e){Be.indexOf(e)<0?Li(t):Si(t)}),Ie=Be))}function vi(t){return{container:tt,slideItems:nt,navContainer:Oe,navItems:Te,controlsContainer:Me,hasControls:fe,prevButton:ke,nextButton:Ee,items:Ct,slideBy:At,cloneCount:Dt,slideCount:it,slideCountNew:Rt,index:Vt,indexCached:Qt,navCurrentIndex:Se,navCurrentIndexCached:De,visibleNavIndexes:Be,visibleNavIndexesCached:Ie,sheet:Bt,event:t||{}}}P&&console.warn("No slides found in",f.container)};return qi}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/components/innova/instagram/lib/ElementQueries.js?157702471520013";s:6:"source";s:57:"/bitrix/components/innova/instagram/lib/ElementQueries.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./ResizeSensor.js'], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require('./ResizeSensor.js'));
    } else {
        root.ElementQueries = factory(root.ResizeSensor);
        root.ElementQueries.listen();
    }
}(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function () {
        //<style> element with our dynamically created styles
        var cssStyleElement;

        //all rules found for element queries
        var allQueries = {};

        //association map to identify which selector belongs to a element from the animationstart event.
        var idToSelectorMapping = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         * Get element size
         * @param {HTMLElement} element
         * @returns {Object} {width, height}
         */
        function getElementSize(element) {
            if (!element.getBoundingClientRect) {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                }
            }

            var rect = element.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            }
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\d/);
            var units = numbers[numbers.length - 1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {String} id
         * @constructor
         */
        function SetupInformation(element, id) {
            this.element = element;
            var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function () {
                // extract current dimensions
                elementSize = getElementSize(this.element);

                attrValues = {};

                for (key in allQueries[id]) {
                    if (!allQueries[id].hasOwnProperty(key)) {
                        continue;
                    }
                    option = allQueries[id][key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode === 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode === 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if (!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      id
         */
        function setupElement(element, id) {
            if (!element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation = new SetupInformation(element, id);
            }
            if (!element.elementQueriesSensor) {
                element.elementQueriesSensor = new ResizeSensor(element, function () {
                    element.elementQueriesSetupInformation.call();
                });
            }

            element.elementQueriesSetupInformation.call();
        }

        /**
         * Stores rules to the selector that should be applied once resized.
         *
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[selector]) === 'undefined') {
                allQueries[selector] = [];
                // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

                var id = idToSelectorMapping.length;
                cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
                cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
                idToSelectorMapping.push(selector);
            }

            allQueries[selector].push({
                mode: mode,
                property: property,
                value: value
            });
        }

        function getQuery(container) {
            var query;
            if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
            }

            return query;
        }

        /**
         * If animationStart didn't catch a new element in the DOM, we can manually search for it
         */
        function findElementQueriesElements(container) {
            var query = getQuery(container);

            for (var selector in allQueries) if (allQueries.hasOwnProperty(mode)) {
                // find all elements based on the extract query selector from the element query rule
                var elements = query(selector, container);

                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], selector);
                }
            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if (!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children) {
                    if (!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage !== imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]) {
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function () {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensor = new ResizeSensor(element, check);
            check();
        }

        function findResponsiveImages() {
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
        var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match, smatch, attrs, attrMatch;

            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';

            if (!rules) {
                return;
            }

            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    } else if (3 === rules[i].type) {
                        readRules(rules[i].styleSheet.cssRules);
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         */
        this.init = function () {
            var animationStart = 'animationstart';
            if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
                animationStart = 'webkitAnimationStart';
            } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
                animationStart = 'mozanimationstart';
            } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
                animationStart = 'oanimationstart';
            }

            document.body.addEventListener(animationStart, function (e) {
                var element = e.target;
                var styles = window.getComputedStyle(element, null);

                if (-1 !== styles.getPropertyValue('animation-name').indexOf('element-queries')) {
                    element.elementQueriesSensor = new ResizeSensor(element, function () {
                        if (element.elementQueriesSetupInformation) {
                            element.elementQueriesSetupInformation.call();
                        }
                    });

                    var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
                    var id = sensorStyles.getPropertyValue('min-width');
                    id = parseInt(id.replace('px', ''));
                    setupElement(e.target, idToSelectorMapping[id]);
                }
            });

            if (!defaultCssInjected) {
                cssStyleElement = document.createElement('style');
                cssStyleElement.type = 'text/css';
                cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';

                //safari wants at least one rule in keyframes to start working
                cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
                document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
                defaultCssInjected = true;
            }

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
                        console.log("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
                    }

                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch (e) {
                }
            }

            // findElementQueriesElements();
            findResponsiveImages();
        };

        /**
         * Go through all collected rules (readRules()) and attach the resize-listener.
         * Not necessary to call it manually, since we detect automatically when new elements
         * are available in the DOM. However, sometimes handy for dirty DOM modifications.
         *
         * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
         */
        this.findElementQueriesElements = function (container) {
            findElementQueriesElements(container);
        };

        this.update = function () {
            this.init();
        };
    };

    ElementQueries.update = function () {
        ElementQueries.instance.update();
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function (element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensor) {
            //responsive image

            element.resizeSensor.detach();
            delete element.resizeSensor;
        }
    };

    ElementQueries.init = function () {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init();
    };

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.findElementQueriesElements = function (container) {
        ElementQueries.instance.findElementQueriesElements(container);
    };

    ElementQueries.listen = function () {
        domLoaded(ElementQueries.init);
    };

    return ElementQueries;

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/components/innova/instagram/lib/ResizeSensor.js?15770247158691";s:6:"source";s:55:"/bitrix/components/innova/instagram/lib/ResizeSensor.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ResizeSensor = factory();
    }
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (fn) {
            return window.setTimeout(fn, 20);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function() {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call();
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';
            var style = 'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
            var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

            element.resizeSensor.style.cssText = style;
            element.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' + style + '">' +
                    '<div style="' + styleChild + '"></div>' +
                '</div>' +
                '<div class="resize-sensor-shrink" style="' + style + '">' +
                    '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
                '</div>';
            element.appendChild(element.resizeSensor);

            var position = window.getComputedStyle(element).getPropertyPriority('position');
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position) {
                element.style.position = 'relative';
            }

            var expand = element.resizeSensor.childNodes[0];
            var expandChild = expand.childNodes[0];
            var shrink = element.resizeSensor.childNodes[1];
            var dirty, rafId, newWidth, newHeight;
            var size = getElementSize(element);
            var lastWidth = size.width;
            var lastHeight = size.height;

            var reset = function() {
                //set display to block, necessary otherwise hidden elements won't ever work
                var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;

                if (invisible) {
                    var saveDisplay = element.style.display;
                    element.style.display = 'block';
                }

                expandChild.style.width = '100000px';
                expandChild.style.height = '100000px';

                expand.scrollLeft = 100000;
                expand.scrollTop = 100000;

                shrink.scrollLeft = 100000;
                shrink.scrollTop = 100000;

                if (invisible) {
                    element.style.display = saveDisplay;
                }
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = newWidth;
                lastHeight = newHeight;

                if (element.resizedAttached) {
                    element.resizedAttached.call();
                }
            };

            var onScroll = function() {
                var size = getElementSize(element);
                var newWidth = size.width;
                var newHeight = size.height;
                dirty = newWidth != lastWidth || newHeight != lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);
            
			// Fix for custom Elements
			requestAnimationFrame(reset);
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            element.resizeSensor.resetSensor();
        };
    };

    ResizeSensor.reset = function(element, ev) {
        forEachElement(element, function(elem){
            elem.resizeSensor.resetSensor();
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    return ResizeSensor;

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/bitrix/components/innova/instagram/lib/isotope.pkgd.min.js?157702471535445";s:6:"source";s:59:"/bitrix/components/innova/instagram/lib/isotope.pkgd.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/bitrix/components/innova/instagram/lib/wa-mediabox.min.js?157702471519086";s:6:"source";s:58:"/bitrix/components/innova/instagram/lib/wa-mediabox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * WA MediaBox
 *
 * @author WA Studio <www.webarts.name>
 * @author Jiri Hybek <jiri@hybek.cz>
 * @license MIT
 */

(function(){

	/*
	 * Preloader constructor
	 */
	var Preloader = function(){

		this.el = document.createElement("div");
		this.el.classList.add("wa-mediabox-preloader");

		this.wrap = document.createElement("div");
		this.wrap.classList.add("wa-mediabox-preloader-wrap");

		this.spinner = document.createElement("div");
		this.spinner.classList.add("wa-mediabox-preloader-spinner");

		this.patch = document.createElement("div");
		this.patch.classList.add("wa-mediabox-preloader-patch");

		this.clipperLeft = document.createElement("div");
		this.clipperLeft.classList.add("wa-mediabox-preloader-clipper");
		this.clipperLeft.classList.add("left");

		this.clipperRight = document.createElement("div");
		this.clipperRight.classList.add("wa-mediabox-preloader-clipper");
		this.clipperRight.classList.add("right");

		var circle = document.createElement("div");
		circle.classList.add("wa-mediabox-preloader-circle");

		this.patch.appendChild(circle);
		this.clipperLeft.appendChild(circle.cloneNode(true));
		this.clipperRight.appendChild(circle.cloneNode(true));

		this.spinner.appendChild(this.clipperLeft);
		this.spinner.appendChild(this.patch);
		this.spinner.appendChild(this.clipperRight);

		this.wrap.appendChild(this.spinner);
		this.el.appendChild(this.wrap);

	};

	Preloader.prototype.show = function(){

		this.el.classList.remove("hidden");
		this.el.style.display = '';

	};

	Preloader.prototype.hide = function(){

		var self = this;

		this.el.classList.add("hidden");

		setTimeout(function(){

			if(self.el.classList.contains("hidden"))
				self.el.style.display = 'none';

		}, 350);

	};

	/* 
     * Gallery constructor
     */
	var WAMediaBox_Gallery = function(parent){

		this.parent = parent;
		this.mediaList = [];
		
		this.opened = false;

		this.loaded = false;
		this.current = null;

		this.containerWidth = null;
		this.containerHeight = null;

	};

	/*
	 * Media adders
	 */
	WAMediaBox_Gallery.prototype.addImage = function(src, title, instLink){

		this.mediaList.push({
			type: "image",
			src: src,
			title: title,
			instLink: instLink
		});

		return this.mediaList.length - 1;

	};
	
	WAMediaBox_Gallery.prototype.addVideo = function(src, title, instLink){

		this.mediaList.push({
			type: "video",
			src: src,
			title: title,
			instLink: instLink
		});

		return this.mediaList.length - 1;

	};

	WAMediaBox_Gallery.prototype.addIframe = function(src, title, width, height){

		this.mediaList.push({
			type: "iframe",
			src: src,
			title: title,
			width: width,
			height: height
		});

		return this.mediaList.length - 1;

	};

	/*
	 * Open gallery
	 */
	WAMediaBox_Gallery.prototype.open = function(index){

		if(this.opened) return;

		var self = this;

		this.current = -1;
		this.loaded = false;

		//Create overlay and content wrapper
		this.overlay = document.createElement("div");
		this.overlay.classList.add("wa-mediabox-overlay");

		this.frame = document.createElement("div");
		this.frame.classList.add("wa-mediabox-frame");

		this.container = document.createElement("div");
		this.container.classList.add("wa-mediabox-container");

		this.title = document.createElement("div");
		this.title.classList.add("wa-mediabox-title");

		this.loading = new Preloader();

		//Buttons
		this.closeBtn = document.createElement("button");
		this.closeBtn.classList.add("wa-mediabox-close");
		this.closeBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
		this.closeBtn.setAttribute("title", this.parent.lang.close);

		this.prevBtn = document.createElement("button");
		this.prevBtn.classList.add("wa-mediabox-prev");
		this.prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>';
		this.prevBtn.setAttribute("title", this.parent.lang.prev);

		this.nextBtn = document.createElement("button");
		this.nextBtn.classList.add("wa-mediabox-next");
		this.nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>';
		this.nextBtn.setAttribute("title", this.parent.lang.next);

		this.openBtn = document.createElement("button");
		this.openBtn.classList.add("wa-mediabox-open");
		this.openBtn.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-46.0041" y1="634.1208" x2="-32.9334" y2="647.1917" gradientTransform="matrix(32 0 0 -32 1519 20757)">	<stop  offset="0" style="stop-color:#FFC107"/>	<stop  offset="0.507" style="stop-color:#F44336"/>	<stop  offset="0.99" style="stop-color:#9C27B0"/></linearGradient><path style="fill:url(#SVGID_1_);" d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192	c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112	V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-42.2971" y1="637.8279" x2="-36.6404" y2="643.4846" gradientTransform="matrix(32 0 0 -32 1519 20757)">	<stop  offset="0" style="stop-color:#FFC107"/>	<stop  offset="0.507" style="stop-color:#F44336"/>	<stop  offset="0.99" style="stop-color:#9C27B0"/></linearGradient><path style="fill:url(#SVGID_2_);" d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128	S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80	C336,300.096,300.096,336,256,336z"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.5456" y1="644.5793" x2="-34.7919" y2="645.3331" gradientTransform="matrix(32 0 0 -32 1519 20757)">	<stop  offset="0" style="stop-color:#FFC107"/>	<stop  offset="0.507" style="stop-color:#F44336"/>	<stop  offset="0.99" style="stop-color:#9C27B0"/></linearGradient><circle style="fill:url(#SVGID_3_);" cx="393.6" cy="118.4" r="17.056"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
		this.openBtn.setAttribute("title", this.parent.lang.openInNew);

		//Put together
		this.frame.appendChild(this.container);
		this.frame.appendChild(this.title);
		this.frame.appendChild(this.loading.el);
		this.frame.appendChild(this.closeBtn);
		this.frame.appendChild(this.prevBtn);
		this.frame.appendChild(this.nextBtn);
		this.frame.appendChild(this.openBtn);

		this.overlay.appendChild(this.frame);
		document.body.appendChild(this.overlay);

		//Bind events
		this.overlay.addEventListener("click", function(ev){

			ev.stopPropagation();
			self.close();

		});

		this.closeBtn.addEventListener("click", function(ev){

			ev.stopPropagation();
			self.close();

		});

		this.prevBtn.addEventListener("click", function(ev){

			ev.stopPropagation();
			self.prev();

		});

		this.nextBtn.addEventListener("click", function(ev){

			ev.stopPropagation();
			self.next();

		});

		this.openBtn.addEventListener("click", function(ev){

			ev.stopPropagation();
			self.openSource();

		});
		
		this.container.addEventListener("click", function(ev){

			ev.stopPropagation();

		});

		//Resize
		this.resizeHandler = function(){

			self.resizeContainer();

		};

		this.keyDownHandler = function(ev){

			ev.preventDefault();
			ev.stopPropagation();

			if(ev.keyCode === 37)
				self.prev();
			else if(ev.keyCode === 39)
				self.next();
			else if(ev.keyCode === 27)
				self.close();

			return false;

		};

		window.addEventListener("resize", this.resizeHandler);
		document.body.addEventListener("keydown", this.keyDownHandler);

		//Open
		setTimeout(function(){

			self.overlay.classList.add("opened");

			self.loadMedia(index);

		}, 10);

		//Set opened
		this.opened = true;

	};

	/*
	 * Close gallery
	 */
	WAMediaBox_Gallery.prototype.close = function(){

		if(!this.opened) return;

		var self = this;

		this.overlay.classList.remove("opened");

		window.removeEventListener("resize", this.resizeHandler);
		document.body.removeEventListener("keydown", this.keyDownHandler);

		setTimeout(function(){

			self.overlay.parentElement.removeChild(self.overlay);
			self.opened = false;

			self.nextBtn = null;
			self.prevBtn = null;
			self.closeBtn = null;
			self.openBtn = null;
			self.loading = null;
			self.container = null;
			self.frame = null;
			self.overlay = null;

			self.current = null;
			self.containerWidth = null;
			self.containerHeight = null;

		}, 450);

	};

	/*
	 * Resize container
	 */
	WAMediaBox_Gallery.prototype.resizeContainer = function(){

		if(!this.opened) return;

		//Defaults
		if(!this.containerWidth)
			this.containerWidth = Math.round(this.overlay.offsetWidth * 0.7);

		if(!this.containerHeight)
			this.containerHeight = Math.round(this.overlay.offsetWidth * 0.7);

		var widthLimit = 160;

		if(this.overlay.offsetWidth < 480)
			widthLimit = 70;

		var maxWidth = Math.min(this.overlay.offsetWidth * 0.9, this.overlay.offsetWidth - widthLimit);
		var maxHeight = Math.min(this.overlay.offsetHeight * 0.9, this.overlay.offsetHeight - 64);

		var targetWidth = this.containerWidth;
		var targetHeight = this.containerHeight;

		//Resize if neccesary
		var ratio = targetWidth / targetHeight;

		if(targetWidth > maxWidth){
			targetWidth = Math.round(maxWidth);
			targetHeight = targetWidth / ratio;
		}

		if(targetHeight > maxHeight){
			targetHeight = Math.round(maxHeight);
			targetWidth = targetHeight * ratio;
		}

		//Set styles
		this.frame.style.width = targetWidth + "px";
		this.frame.style.height = targetHeight + "px";

		this.frame.style.marginLeft = -Math.round(targetWidth / 2) + "px";
		this.frame.style.marginTop = -Math.round(targetHeight / 2) + "px";

	};

	/*
	 * Set media into container
	 */
	WAMediaBox_Gallery.prototype.setMedia = function(type, src, title, width, height){

		if(!this.opened) return;

		var self = this;
		this.loaded = false;

		this.frame.classList.remove("can-open-in-new");
		self.frame.classList.remove("has-title");

		//Reset content
		this.container.innerHTML = '';

		//Create proper element
		var mediaEl = null;

		if(type == "image"){

			//Resize
			if(width) this.containerWidth = width;
			if(height) this.containerHeight = height;
			this.resizeContainer();

			mediaEl = document.createElement("img");

			mediaEl.addEventListener("load", function(){

				self.containerWidth = mediaEl.width;
				self.containerHeight = mediaEl.height;

				self.resizeContainer();
				self.frame.classList.add("can-open-in-new");

				//Add to DOM
				self.container.appendChild(mediaEl);

			});

			mediaEl.src = src;

		} else if(type == "video"){

			//Resize
			if(width) this.containerWidth = width;
			if(height) this.containerHeight = height;
			this.resizeContainer();

			mediaEl = document.createElement("video");
			
			mediaEl.setAttribute("type", "video/mp4");
			
			mediaEl.setAttribute("id", "WAMediaBoxVideo");
			
			//mediaEl.setAttribute("preload", "none");
			
			mediaEl.setAttribute("loop", "true");

			mediaEl.addEventListener("loadeddata", function(){

				self.containerWidth = 640;
				self.containerHeight = 640;

				self.resizeContainer();
				self.frame.classList.add("can-open-in-new");
				
				
				var videoBtn = document.createElement("div");
			
				videoBtn.setAttribute("class", "wa-mediabox-video-btn");
				
				videoBtn.setAttribute("onclick", "WAMediaBoxPlayPause()");
			
				videoBtn.innerHTML = '<svg class="wa-mediabox-video-btn-play" id="wa-mediabox-video-btn-play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 232.153 232.153" style="enable-background:new 0 0 232.153 232.153;" xml:space="preserve"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z" fill="#FFFFFF"/></g></svg><svg class="wa-mediabox-video-btn-pause" id="wa-mediabox-video-btn-pause" xmlns="http://www.w3.org/2000/svg" viewBox="-45 0 327 327"><path d="m158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0" fill="#FFFFFF"/><path d="m8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0" fill="#FFFFFF"/></svg>';
				
				self.container.innerHTML = mediaEl.outerHTML + videoBtn.outerHTML;

				//Add to DOM
				//self.container.appendChild(mediaEl);

			});

			mediaEl.src = src;

		} else {

			//Resize
			if(width) this.containerWidth = width;
			if(height) this.containerHeight = height + ( title ? 52 : 0 );
			this.resizeContainer();

			mediaEl = document.createElement("iframe");
			mediaEl.src = src;
			mediaEl.setAttribute("width", parseInt(this.frame.style.width));
			mediaEl.setAttribute("height", parseInt(this.frame.style.height) - ( title ? 52 : 0 ));
			mediaEl.setAttribute("frameborder", "0");
			mediaEl.setAttribute("allowfullscreen", "allowfullscreen");

			//Add to DOM
			this.container.appendChild(mediaEl);

		}

		
		if(type == "video") {
			//Wait for load
			mediaEl.addEventListener("loadeddata", function(){

				setTimeout(function(){
					
					//Set title
					if(title){
						self.title.innerHTML = title;
						self.frame.classList.add("has-title");
					}

					//Show
					self.frame.classList.add("loaded");
					self.loading.hide();
					self.loaded = true;

				}, 550);

			});
		} else {
			//Wait for load
			mediaEl.addEventListener("load", function(){

				setTimeout(function(){
					
					//Set title
					if(title){
						self.title.innerHTML = title;
						self.frame.classList.add("has-title");
					}

					//Show
					self.frame.classList.add("loaded");
					self.loading.hide();
					self.loaded = true;

				}, 550);

			});
		}

	};

	/*
	 * Load media at index
	 */
	WAMediaBox_Gallery.prototype.loadMedia = function(index){

		if(!this.opened) return;
		if(index == this.current) return;

		var self = this;

		if(!this.mediaList[index]) throw new Error("Undefined media");

		var load = function(){

			self.setMedia( self.mediaList[index].type, self.mediaList[index].src, self.mediaList[index].title, self.mediaList[index].width, self.mediaList[index].height );

		};

		if(this.loaded){

			this.frame.classList.remove("loaded");
			this.loading.show();
			setTimeout(load, 350);

		} else {

			load();

		}

		if(index > 0)
			this.frame.classList.add("has-prev");
		else
			this.frame.classList.remove("has-prev");

		if(index < this.mediaList.length - 1)
			this.frame.classList.add("has-next");
		else
			this.frame.classList.remove("has-next");

		this.current = index;

	};

	/*
	 * Switch to previous media
	 */
	WAMediaBox_Gallery.prototype.prev = function(){

		if(!this.opened) return;

		var index = Math.max(0, this.current - 1);
		this.loadMedia(index);

	};

	/*
	 * Switch to next media
	 */
	WAMediaBox_Gallery.prototype.next = function(){

		if(!this.opened) return;

		var index = Math.min(this.mediaList.length - 1, this.current + 1);
		this.loadMedia(index);

	};

	WAMediaBox_Gallery.prototype.openSource = function(){

		if(!this.opened) return;

		window.open( this.mediaList[this.current].instLink );

	};

	/*
	 * ImageBox constructor
	 */
	var WAMediaBox = function(){

		this.lang = {
			prev: "Previous",
			next: "Next",
			close: "Close",
			openInNew: "Open in new window"
		};

		this.galleries = {};

	};

	WAMediaBox.prototype.openGallery = function(gallery, index){

		if(!this.galleries[gallery]) throw new Error("Gallery not found");

		this.galleries[gallery].open(index);

	};

	/*
	 * Media adders
	 */
	WAMediaBox.prototype.addImage = function(gallery, src, title, instLink){

		if(!this.galleries[gallery])
			this.galleries[gallery] = new WAMediaBox_Gallery(this);

		return this.galleries[gallery].addImage(src, title, instLink);

	};
	
	WAMediaBox.prototype.addVideo = function(gallery, src, title, instLink){

		if(!this.galleries[gallery])
			this.galleries[gallery] = new WAMediaBox_Gallery(this);

		return this.galleries[gallery].addVideo(src, title, instLink);

	};

	WAMediaBox.prototype.addIframe = function(gallery, src, title, width, height){

		if(!this.galleries[gallery])
			this.galleries[gallery] = new WAMediaBox_Gallery(this);

		return this.galleries[gallery].addIframe(src, title, width, height);

	};

	/*
	 * Bind single elements
	 */
	WAMediaBox.prototype.bind = function(el){

		if(el._waMediaBoxBound) return;

		el._waMediaBoxBound = true;

		var self = this;

		var gallery = el.getAttribute("data-mediabox") || "_";
		var src = String(el.getAttribute("href") || el.getAttribute("data-src"));
		var instLink = el.getAttribute("data-instagram");
		var title = el.getAttribute("data-title");
		var isIframe = ( el.hasAttribute("data-iframe") || src.indexOf("youtube") >= 0 ? true : false );
		var isVideo = ( el.hasAttribute("data-video") ? true : false );
		var width = ( el.hasAttribute("data-width") ? parseInt(el.getAttribute("data-width")) : null );
		var height = ( el.hasAttribute("data-height") ? parseInt(el.getAttribute("data-height")) : null );

		var index = null;

		//Add to gallery
		if(isIframe)
			index = this.addIframe(gallery, src, title, width, height);
		else if(isVideo)
			index = this.addVideo(gallery, src, title, instLink);
		else
			index = this.addImage(gallery, src, title, instLink);
		
		//Bind open event
		el.addEventListener("click", function(ev){

			ev.preventDefault();
			ev.stopPropagation();

			self.openGallery(gallery, index);

			return false;

		});

	};

	/*
	 * Bind all elements in given parent node
	 */
	WAMediaBox.prototype.bindAll = function(parentEl){

		var elements = parentEl.querySelectorAll("a[data-mediabox]");

		for(var i = 0; i < elements.length; i++)
			this.bind(elements.item(i));

	};

	//Assign to window
	window.WAMediaBox = new WAMediaBox();

	//Bind lightbox elements
	window.addEventListener("load", function(){
		
		window.WAMediaBox.bindAll(document.body);

	});

})();

function WAMediaBoxPlayPause() { 
	var WAMediaBoxVideo = document.getElementById("WAMediaBoxVideo"); 
    if (WAMediaBoxVideo.paused) {
		document.getElementById("wa-mediabox-video-btn-play").style.display = 'none';
		document.getElementById("wa-mediabox-video-btn-pause").style.display = 'block';
        WAMediaBoxVideo.play(); 
    } else {
		document.getElementById("wa-mediabox-video-btn-pause").style.display = 'none';
		document.getElementById("wa-mediabox-video-btn-play").style.display = 'block';
        WAMediaBoxVideo.pause(); 
	}
} 
/* End */
;; /* /bitrix/components/innova/instagram/lib/min/ts-innova-instagram.js?157702471529769*/
; /* /bitrix/components/innova/instagram/lib/ElementQueries.js?157702471520013*/
; /* /bitrix/components/innova/instagram/lib/ResizeSensor.js?15770247158691*/
; /* /bitrix/components/innova/instagram/lib/isotope.pkgd.min.js?157702471535445*/
; /* /bitrix/components/innova/instagram/lib/wa-mediabox.min.js?157702471519086*/
