(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__3maWh",Label:"BuildControl_Label__2j4I6",Less:"BuildControl_Less__2bSUV",More:"BuildControl_More__Ijduk"}},13:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem___3v5H",active:"NavigationItem_active__2jBXI"}},14:function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__TKyIC",OrderButton:"BuildControls_OrderButton__t-1Ot",enable:"BuildControls_enable__3iAUn"}},15:function(e,t,a){e.exports={Button:"Button_Button__x1DAt",Success:"Button_Success__1kBhS",Danger:"Button_Danger__3msiq"}},2:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2mT6t",BreadTop:"BurgerIngredient_BreadTop__1kKjL",Seeds1:"BurgerIngredient_Seeds1__p34FK",Seeds2:"BurgerIngredient_Seeds2__1m53S",Meat:"BurgerIngredient_Meat__2fjjM",Cheese:"BurgerIngredient_Cheese__3BZym",Salad:"BurgerIngredient_Salad__2r5fL",Bacon:"BurgerIngredient_Bacon__37DEI"}},23:function(e,t,a){e.exports={Content:"Layout_Content__2yFsg"}},24:function(e,t,a){e.exports={Logo:"Logo_Logo__4QWWM"}},25:function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},26:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1FEtX"}},27:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__KlODr"}},28:function(e,t,a){e.exports={Burger:"Burger_Burger__1eBbA"}},29:function(e,t,a){e.exports={Modal:"Modal_Modal__VRBoR"}},32:function(e,t,a){e.exports=a(72)},38:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(38),a(3)),l=a(4),s=a(6),d=a(5),u=a(7),m=function(e){return e.children},p=a(23),_=a.n(p),h=a(8),g=a.n(h),b=a(24),f=a.n(b),E=a(25),v=a.n(E),B=function(){return r.a.createElement("div",{className:f.a.Logo},r.a.createElement("img",{src:v.a,alt:"Burger Builder"}))},k=a(26),C=a.n(k),w=a(13),N=a.n(w),O=function(e){return r.a.createElement("li",{className:N.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?N.a.active:null},e.children))},y=function(e){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(O,{link:"/",active:!0},"Burger Builder "),r.a.createElement(O,{link:"/"},"Checkout "))},I=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement("div",{className:g.a.showOnMobile,onClick:e.clicked},r.a.createElement("div",{className:g.a.MenuIcon}),r.a.createElement("div",{className:g.a.MenuIcon}),r.a.createElement("div",{className:g.a.MenuIcon})),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(y,null)))},j=a(9),S=a.n(j),D=a(27),M=a.n(D),L=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}):null},x=function(e){var t=[S.a.SideDrawer,S.a.Close];return e.open&&(t=[S.a.SideDrawer,S.a.Open]),r.a.createElement(m,null,r.a.createElement(L,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:S.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",null,r.a.createElement(y,null))))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerCloseHandler=function(){a.setState({showSideDrawer:!a.state.showSideDrawer})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(I,{open:"true",clicked:this.sideDrawerCloseHandler}),r.a.createElement(x,{open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),r.a.createElement("main",{className:_.a.Content},this.props.children))}}]),t}(n.Component),P=a(11),A=a(31),F=a(28),R=a.n(F),H=a(2),W=a.n(H),K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:W.a.BreadTop},r.a.createElement("div",{className:W.a.Seeds1}),r.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:W.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:W.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:W.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:W.a.Salad});break;default:e=null}return e}}]),t}(n.Component),U=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(A.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(K,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null," Please Start adding ingredients ")),r.a.createElement("div",{className:R.a.Burger},r.a.createElement(K,{type:"bread-top"}),t,r.a.createElement(K,{type:"bread-bottom"}))},X=a(14),z=a.n(X),Y=a(10),$=a.n(Y),q=function(e){return r.a.createElement("div",{className:$.a.BuildControl},r.a.createElement("div",{className:$.a.Label},e.label),r.a.createElement("button",{className:$.a.Less,onClick:e.removed,disabled:e.disabled}," Less "),r.a.createElement("button",{className:$.a.More,onClick:e.added}," More"))},J=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return r.a.createElement("div",{className:z.a.BuildControls},r.a.createElement("p",null," Current Price : ",r.a.createElement("strong",null," $",e.price.toFixed(2)," ")),J.map(function(t){return r.a.createElement(q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabledInfo[t.type]})}),r.a.createElement("button",{className:z.a.OrderButton,disabled:!e.purchasable,onClick:e.purchasing}," ORDER NOW  "))},V=a(29),G=a.n(V),Z=function(e){return r.a.createElement("div",{className:G.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children)},ee=a(15),te=a.n(ee),ae=function(e){return r.a.createElement("button",{className:[te.a.Button,te.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ne=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capatlize"}},t),": ",e.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order "),r.a.createElement("p",null," A delicious burger with the following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("h3",null," Total Price: $",e.totalPrice.toFixed(2)),r.a.createElement(ae,{btnType:"Success",clicked:e.clickedContinue},"CONTINUE"),r.a.createElement(ae,{btnType:"Danger",clicked:e.cancelClicked},"CANCEL"))},re=a(30),ce=a.n(re).a.create({baseURL:"https://burger-builder-20e6f.firebaseio.com/"}),oe={salad:.5,bacon:.4,cheese:.6,meat:.9},ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},price:4,purchasable:!1,purchasing:!1},a.updatePurchasable=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0})},a.addIngredients=function(e){var t=a.state.ingredients[e]+1,n=Object(P.a)({},a.state.ingredients);n[e]=t;var r=oe[e],c=a.state.price+r;a.setState({ingredients:n,price:c}),a.updatePurchasable(n)},a.removeIngredients=function(e){var t=a.state.ingredients[e];if(t>0){var n=t-1,r=Object(P.a)({},a.state.ingredients);r[e]=n;var c=oe[e],o=a.state.price-c;a.setState({ingredients:r,price:o}),a.updatePurchasable(r)}},a.updatePurchasing=function(){a.setState({purchasing:!0})},a.closeBackdrop=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){var e={ingredients:a.state.ingredients,price:a.state.price.toFixed(2),customer:{name:"Parmeshwar",address:{street:"Nacharam",zipCode:500076,country:"India"},email:"parmesh1042@gmail.com",deliveryMethod:"fastest"}};ce.post("/orders.json",e).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object(P.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(L,{show:this.state.purchasing,clicked:this.closeBackdrop}),r.a.createElement(Z,{show:this.state.purchasing},r.a.createElement(ne,{ingredients:this.state.ingredients,totalPrice:this.state.price,clickedContinue:this.purchaseContinueHandler,cancelClicked:this.closeBackdrop})),r.a.createElement(U,{ingredients:this.state.ingredients}),r.a.createElement(Q,{ingredientAdded:this.addIngredients,ingredientRemoved:this.removeIngredients,disabledInfo:e,price:this.state.price,purchasable:this.state.purchasable,purchasing:this.updatePurchasing}))}}]),t}(n.Component),le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(ie,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__3X-zQ",showOnMobile:"Toolbar_showOnMobile__lt5kL",Logo:"Toolbar_Logo__32F_f",DesktopOnly:"Toolbar_DesktopOnly__frDvF",MenuIcon:"Toolbar_MenuIcon__1-sc7"}},9:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1GIXI",Open:"SideDrawer_Open__3cg5k",Close:"SideDrawer_Close__2qOB7",Logo:"SideDrawer_Logo__3rK7M"}}},[[32,2,1]]]);
//# sourceMappingURL=main.a014c3b1.chunk.js.map