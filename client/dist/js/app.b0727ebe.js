(function(t){function e(e){for(var i,s,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)s=l[d],n[s]&&p.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-container app-container",style:{backgroundImage:"url("+t.image+")"},attrs:{id:"app"}},[a("title",[t._v("Path Finder")]),a("page-header"),a("left-box",{attrs:{detailsTrail:t.detailsTrail},on:{changeHiked:t.changeHiked,newTrail:t.newTrail}}),a("search",{on:{childToParent:t.findTrails}}),a("RouterView",{attrs:{newTrails:t.newTrails,oldTrails:t.oldTrails,coordinates:t.coordinates},on:{changeHiked:t.changeHiked,viewDetails:t.viewDetails}})],1)},r=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-header",attrs:{id:"page-header"}},[a("div",{staticClass:"vertical-center",attrs:{id:"header-title"}},[a("h1",[t._v("Path Finder")])])])}],o={name:"PageHeader"},c=o,u=a("2877"),d=Object(u["a"])(c,s,l,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"vertical-center",attrs:{id:"city",type:"text",placeholder:"Enter City Name"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedState,expression:"selectedState"}],staticClass:"vertical-center",attrs:{id:"state"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedState=e.target.multiple?a:a[0]}}},t._l(t.states,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])}),0),a("button",{staticClass:"btn btn-primary vertical-center block",attrs:{id:"find-path"},on:{click:t.findPath}},[a("p",{staticClass:"vertical-center"},[t._v("Find Path")])]),a("button",{staticClass:"btn btn-primary vertical-center block",attrs:{id:"saved-trails"},on:{click:t.routerPush}},[t.routeIsMap?a("p",{staticClass:"vertical-center"},[t._v("Saved Trails")]):a("p",{staticClass:"vertical-center"},[t._v("View Map")])])])},f=[],v=(a("7f7f"),function(){return["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"]}),m={name:"Search",data:function(){return{city:"",states:v(),selectedState:""}},methods:{findPath:function(){this.$emit("childToParent",this.city,this.selectedState)},routerPush:function(){var t=this.routeIsMap?"bucketList":"map";this.$router.push({name:t})}},computed:{routeIsMap:function(){return"map"==this.$route.name}}},g=m,_=Object(u["a"])(g,h,f,!1,null,null,null),T=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"left-box"}},[t._m(0),a("div",{attrs:{id:"left-details"}},[t.detailsTrail.id?a("div",[a("h2",{staticClass:"trail-attr"},[t._v(t._s(t.detailsTrail.name))]),a("p",{staticClass:"trail-attr"},[t._v("Location: "+t._s(t.detailsTrail.location))]),a("p",{staticClass:"trail-attr"},[t._v("Stars: "+t._s(t.detailsTrail.stars))]),a("p",{staticClass:"trail-attr"},[t._v("Difficulty: "+t._s(this.capitalize(t.detailsTrail.difficulty)))]),a("p",{staticClass:"trail-attr"},[t._v("Length: "+t._s(t.detailsTrail.length)+" Miles")]),a("p",{staticClass:"trail-attr"},[t._v("Summary: "+t._s(t.detailsTrail.summary))]),t.detailsTrail.hasHiked?a("p",{staticClass:"trail-attr"},[t._v("Hiked!")]):a("p",{staticClass:"trail-attr"},[t._v("Not Hiked!")]),t.detailsTrail.hasOwnProperty("hasHiked")?a("button",{staticClass:"btn btn-secondary btn-right",on:{click:t.changeHiked}},[t._v("\n      Changed Hiked Status\n            ")]):t._e(),a("button",{on:{click:t.saveTrail}},[t._v("Save Trail")])]):t._e()])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"left-header"}},[a("p",[t._v("Details")])])}],w={name:"LeftBox",props:{detailsTrail:{type:Object}},methods:{capitalize:function(t){return t?t[0].toUpperCase()+t.slice(1):t},changeHiked:function(){this.$emit("changeHiked",this.detailsTrail),console.log(this.detailsTrail)},saveTrail:function(){var t=this;this.$trail_api.saveNewTrail(this.detailsTrail).then(function(e){t.$emit("newTrail",e)}).catch(function(t){console.log(t)})}}},y=w,H=Object(u["a"])(y,b,k,!1,null,null,null),C=H.exports,S={name:"app",data:function(){return{oldTrails:[],coordinates:[44.9778,-93.265],newTrails:{},detailsTrail:{},image:"https://raw.githubusercontent.com/OrionRiitters/path_finder/master/static/assets/images/adventure-alpine-background-355747.jpg"}},components:{PageHeader:p,Search:T,LeftBox:C},created:function(){this.findTrails("Minneapolis","MN")},mounted:function(){this.loadSavedTrails()},methods:{loadSavedTrails:function(){var t=this;this.$trail_api.getAllTrails().then(function(e){t.oldTrails=e})},findTrails:function(t,e){var a=this;this.$trail_api.findTrails(t,e).then(function(t){a.coordinates=[t["coordinates"]["lat"],t["coordinates"]["lon"]],a.newTrails=t["trails"]})},viewDetails:function(t){this.detailsTrail=t},newTrail:function(t){console.log(t),this.oldTrails.push(t)},changeHiked:function(t){var e=this,a=!t.hasHiked;this.$trail_api.updateTrailHiked({id:t.id,hasHiked:a}).then(function(t){for(var a in e.oldTrails)t.id==e.oldTrails[a].id&&(e.oldTrails[a].hasHiked=t.hasHiked,e.detailsTrail=e.oldTrails[a])})}}},M=S,x=(a("034f"),Object(u["a"])(M,n,r,!1,null,null,null)),$=x.exports,O=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box",attrs:{id:"leaflet-map"}},[a("l-map",{ref:"trailMap",staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url}}),t._l(t.newTrails,function(e){return a("l-marker",{attrs:{icon:t.newIcon,"lat-lng":[e.latitude,e.longitude]},on:{click:function(a){return t.viewDetails(e)}}})})],2)],1)},A=[],D=a("2699"),N=a("a40a"),j=a("4e2b"),I={name:"leaflet-map",components:{LMap:D["a"],LTileLayer:N["a"],LMarker:j["a"]},data:function(){return{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:11,center:this.coordinates,bounds:null,newIcon:L.icon({iconUrl:"http://leafletjs.com/examples/custom-icons/leaf-green.png",iconSize:[25,58],iconAnchor:[0,0],popupAnchor:[-3,-76]})}},props:{newTrails:{type:Array},coordinates:{type:Array}},methods:{viewDetails:function(t){this.$emit("viewDetails",t),console.log(t)}},watch:{newTrails:function(){this.center=this.coordinates}}},E=I,R=Object(u["a"])(E,P,A,!1,null,null,null),V=R.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box",attrs:{id:"bucket-list"}},[a("table",[a("tbody",[a("th",[t._v("Name")]),a("th",[t._v("Hiked?")]),t._l(t.oldTrails,function(e){return a("bucket-row",{attrs:{trail:e},on:{changeHiked:t.changeHiked,viewDetails:t.viewDetails}})})],2)])])},B=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bucket-row"}},[a("tr",[a("td",[t._v(t._s(t.trail.name))]),t.trailHiked?a("td",[t._v("Yes")]):a("td",[t._v("No")]),a("button",{staticClass:"btn btn-secondary btn-right",on:{click:t.showDetails}},[t._v("\n      View Details\n    ")]),a("button",{staticClass:"btn btn-secondary btn-right",on:{click:t.changeHiked}},[t._v("\n      Changed Hiked Status\n    ")])])])},W=[],K={name:"BucketRow",props:{trail:{value:Array}},computed:{trailHiked:function(){return this.trail.hasHiked}},methods:{showDetails:function(){this.$emit("viewDetails",this.trail)},changeHiked:function(){this.$emit("changeHiked",this.trail)}}},U=K,Y=Object(u["a"])(U,F,W,!1,null,null,null),J=Y.exports,G={name:"BucketList",props:{oldTrails:{type:Array}},components:{BucketRow:J},methods:{viewDetails:function(t){this.$emit("viewDetails",t),console.log(t)},changeHiked:function(t){this.$emit("changeHiked",t)}}},X=G,Z=Object(u["a"])(X,z,B,!1,null,null,null),q=Z.exports,Q=new O["a"]({routes:[{path:"/",component:V,name:"map",props:!0},{path:"/bucketList",component:q,name:"bucketList",props:!0}]}),tt=a("bc3a"),et=a.n(tt),at="/api/db/trails",it="api/external",nt={getAllTrails:function(){return et.a.get(at).then(function(t){return t.data})},addTrail:function(t){return et.a.post(at,t).then(function(t){return t.data})},findTrails:function(t,e){return et.a.get(it,{params:{city:t,state:e}}).then(function(t){return t["data"]}).catch(function(t){throw console.log(t),t})},updateTrailHiked:function(t){return et.a.patch(at,t).then(function(t){return t["data"]}).catch(function(t){throw console.log(t),t})},saveNewTrail:function(t){return et.a.post(at,t).then(function(t){return t["data"]}).catch(function(t){throw console.log(t),t})}};a("6cc5");i["a"].use(O["a"]),i["a"].config.productionTip=!1,i["a"].prototype.$trail_api=nt,new i["a"]({render:function(t){return t($)},router:Q}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.b0727ebe.js.map