(function(t){function e(e){for(var i,l,s=e[0],o=e[1],c=e[2],d=0,f=[];d<s.length;d++)l=s[d],a[l]&&f.push(a[l][0]),a[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},a={app:0},r=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"0782":function(t,e,n){"use strict";var i=n("c366"),a=n.n(i);a.a},5490:function(t,e,n){"use strict";var i=n("bdf3"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-container app-container",attrs:{id:"app"}},[n("title",[t._v("Path Finder")]),n("page-header"),n("left-box",{attrs:{detailsTrail:t.detailsTrail},on:{changeHiked:t.changeHiked,newTrail:t.newTrail}}),n("search",{on:{childToParent:t.findTrails}}),n("RouterView",{attrs:{newTrails:t.newTrails,oldTrails:t.oldTrails,coordinates:t.coordinates},on:{changeHiked:t.changeHiked,viewDetails:t.viewDetails}})],1)},r=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-header"}},[n("div",{staticClass:"vertical-center",attrs:{id:"header-title"}},[n("h1",[t._v("Path Finder")])])])}],o={name:"PageHeader"},c=o,u=(n("8baf"),n("2877")),d=Object(u["a"])(c,l,s,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"vertical-center",attrs:{id:"city",type:"text",placeholder:"Enter City Name"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedState,expression:"selectedState"}],staticClass:"vertical-center",attrs:{id:"state"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedState=e.target.multiple?n:n[0]}}},t._l(t.states,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}),0),n("button",{staticClass:"btn btn-primary vertical-center block",attrs:{id:"find-path"},on:{click:t.findPath}},[n("p",{staticClass:"vertical-center"},[t._v("Find Path")])]),n("button",{staticClass:"btn btn-primary vertical-center block",attrs:{id:"saved-trails"},on:{click:t.routerPush}},[t.routeIsMap?n("p",{staticClass:"vertical-center"},[t._v("Saved Trails")]):n("p",{staticClass:"vertical-center"},[t._v("View Map")])])])},h=[],v=(n("7f7f"),function(){return["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"]}),m={name:"Search",data:function(){return{city:"",states:v(),selectedState:""}},methods:{findPath:function(){this.$emit("childToParent",this.city,this.selectedState)},routerPush:function(){var t=this.routeIsMap?"bucketList":"map";this.$router.push({name:t})}},computed:{routeIsMap:function(){return"map"==this.$route.name}}},T=m,_=(n("0782"),Object(u["a"])(T,p,h,!1,null,null,null)),b=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"left-box"}},[t._m(0),n("div",{attrs:{id:"left-details"}},[t.detailsTrail.id?n("div",[n("h2",[t._v(t._s(t.detailsTrail.name))]),n("p",[t._v("Location: "+t._s(t.detailsTrail.location))]),n("p",[t._v("Stars: "+t._s(t.detailsTrail.stars))]),n("p",[t._v("Difficulty: "+t._s(this.capitalize(t.detailsTrail.difficulty)))]),n("p",[t._v("Length: "+t._s(t.detailsTrail.length)+" Miles")]),n("p",[t._v("Summary: "+t._s(t.detailsTrail.summary))]),n("p",[t._v(t._s(t.detailsTrail.hasHiked))]),t.detailsTrail.hasOwnProperty("hasHiked")?n("button",{staticClass:"btn btn-secondary btn-right",on:{click:t.changeHiked}},[t._v("\n      Changed Hiked Status\n            ")]):t._e(),n("button",{on:{click:t.saveTrail}},[t._v("Save Trail")])]):t._e()])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"left-header"}},[n("p",[t._v("Details")])])}],k={name:"LeftBox",props:{detailsTrail:{type:Object}},methods:{capitalize:function(t){return t?t[0].toUpperCase()+t.slice(1):t},changeHiked:function(){this.$emit("changeHiked",this.detailsTrail),console.log(this.detailsTrail)},saveTrail:function(){var t=this;this.$trail_api.saveNewTrail(this.detailsTrail).then(function(e){t.$emit("newTrail",e)}).catch(function(t){console.log(t)})}}},y=k,H=(n("bc96"),Object(u["a"])(y,g,w,!1,null,null,null)),S=H.exports,M={name:"app",data:function(){return{oldTrails:[],coordinates:[44.9778,-93.265],newTrails:{},detailsTrail:{}}},components:{PageHeader:f,Search:b,LeftBox:S},created:function(){this.findTrails("Minneapolis","MN")},mounted:function(){this.loadSavedTrails()},methods:{loadSavedTrails:function(){var t=this;this.$trail_api.getAllTrails().then(function(e){t.oldTrails=e})},findTrails:function(t,e){var n=this;this.$trail_api.findTrails(t,e).then(function(t){n.coordinates=[t["coordinates"]["lat"],t["coordinates"]["lon"]],n.newTrails=t["trails"]})},viewDetails:function(t){this.detailsTrail=t},newTrail:function(t){console.log(t),this.oldTrails.push(t)},changeHiked:function(t){var e=this,n=!t.hasHiked;this.$trail_api.updateTrailHiked({id:t.id,hasHiked:n}).then(function(t){for(var n in e.oldTrails)t.id==e.oldTrails[n].id&&(e.oldTrails[n].hasHiked=t.hasHiked,e.detailsTrail=e.oldTrails[n])})}}},$=M,P=(n("034f"),Object(u["a"])($,a,r,!1,null,null,null)),x=P.exports,O=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"leaflet-map"}},[n("l-map",{ref:"trailMap",staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:t.url}}),t._l(t.newTrails,function(e){return n("l-marker",{attrs:{icon:t.newIcon,"lat-lng":[e.latitude,e.longitude]},on:{click:function(n){return t.viewDetails(e)}}})})],2)],1)},C=[],D=n("2699"),N=n("a40a"),j=n("4e2b"),I={name:"leaflet-map",components:{LMap:D["a"],LTileLayer:N["a"],LMarker:j["a"]},data:function(){return{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:11,center:this.coordinates,bounds:null,newIcon:L.icon({iconUrl:"http://leafletjs.com/examples/custom-icons/leaf-green.png",iconSize:[25,58],iconAnchor:[0,0],popupAnchor:[-3,-76]})}},props:{newTrails:{type:Array},coordinates:{type:Array}},methods:{viewDetails:function(t){this.$emit("viewDetails",t),console.log(t)}},watch:{newTrails:function(){this.center=this.coordinates}}},E=I,V=(n("5490"),Object(u["a"])(E,A,C,!1,null,null,null)),z=V.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bucket-list"}},[n("td",t._l(t.oldTrails,function(e){return n("bucket-row",{attrs:{trail:e},on:{changeHiked:t.changeHiked,viewDetails:t.viewDetails}})}),1)])},B=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bucket-row"}},[n("tr",[n("td",[t._v(t._s(t.trail.name))]),t.trailHiked?n("td",[t._v("Yes")]):n("td",[t._v("No")]),n("button",{staticClass:"btn btn-secondary btn-right",on:{click:t.showDetails}},[t._v("\n      View Details\n    ")]),n("button",{staticClass:"btn btn-secondary btn-right",on:{click:t.changeHiked}},[t._v("\n      Changed Hiked Status\n    ")])])])},W=[],K={name:"BucketRow",props:{trail:{value:Array}},computed:{trailHiked:function(){return this.trail.hasHiked}},methods:{showDetails:function(){this.$emit("viewDetails",this.trail)},changeHiked:function(){this.$emit("changeHiked",this.trail)}}},U=K,Y=Object(u["a"])(U,F,W,!1,null,null,null),J=Y.exports,G={name:"BucketList",props:{oldTrails:{type:Array}},components:{BucketRow:J},methods:{viewDetails:function(t){this.$emit("viewDetails",t),console.log(t)},changeHiked:function(t){this.$emit("changeHiked",t)}}},X=G,Z=(n("736a"),Object(u["a"])(X,R,B,!1,null,null,null)),q=Z.exports,Q=new O["a"]({routes:[{path:"/",component:z,name:"map",props:!0},{path:"/bucketList",component:q,name:"bucketList",props:!0}]}),tt=n("bc3a"),et=n.n(tt),nt="/api/db/trails",it="api/external",at={getAllTrails:function(){return et.a.get(nt).then(function(t){return t.data})},addTrail:function(t){return et.a.post(nt,t).then(function(t){return t.data})},findTrails:function(t,e){return et.a.get(it,{params:{city:t,state:e}}).then(function(t){return t["data"]}).catch(function(t){throw console.log(t),t})},updateTrailHiked:function(t){return et.a.patch(nt,t).then(function(t){return t["data"]}).catch(function(t){throw console.log(t),t})},saveNewTrail:function(t){return et.a.post(nt,t).then(function(t){return t["data"]}).catch(function(t){throw console.log(t),t})}};n("6cc5");i["a"].use(O["a"]),i["a"].config.productionTip=!1,i["a"].prototype.$trail_api=at,new i["a"]({render:function(t){return t(x)},router:Q}).$mount("#app")},"576a":function(t,e,n){},"64a9":function(t,e,n){},"736a":function(t,e,n){"use strict";var i=n("d24e"),a=n.n(i);a.a},"782e":function(t,e,n){},"8baf":function(t,e,n){"use strict";var i=n("782e"),a=n.n(i);a.a},bc96:function(t,e,n){"use strict";var i=n("576a"),a=n.n(i);a.a},bdf3:function(t,e,n){},c366:function(t,e,n){},d24e:function(t,e,n){}});
//# sourceMappingURL=app.757a0ae9.js.map