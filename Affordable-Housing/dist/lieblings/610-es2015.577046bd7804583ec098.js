(self.webpackChunklieblings=self.webpackChunklieblings||[]).push([[610],{73610:function(e,t,i){"use strict";i.r(t),i.d(t,{ContactModule:function(){return A}});var s=i(40098),n=i(45448),a=i(58348),o=i(90838),r=i(29782),l=i(68707),g=i(31012),h=i(34487),c=i(48359),p=i(85639),d=i(44213);const m=["*"];class u{constructor(e){this._ngZone=e,this._pending=[],this._listeners=[],this._targetStream=new o.X(void 0)}_clearListeners(){for(const e of this._listeners)e.remove();this._listeners=[]}getLazyEmitter(e){return this._targetStream.pipe((0,h.w)(t=>{const i=new r.y(s=>{if(!t)return void this._pending.push({observable:i,observer:s});const n=t.addListener(e,e=>{this._ngZone.run(()=>s.next(e))});return this._listeners.push(n),()=>n.remove()});return i}))}setTarget(e){const t=this._targetStream.value;e!==t&&(t&&(this._clearListeners(),this._pending=[]),this._targetStream.next(e),this._pending.forEach(e=>e.observable.subscribe(e.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const _={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"};let b=(()=>{class e{constructor(e,t,i){this._elementRef=e,this._ngZone=t,this._eventManager=new u(this._ngZone),this.height="500px",this.width="500px",this._options=_,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,s.NF)(i),this._isBrowser&&window}set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||_}ngOnChanges(e){(e.height||e.width)&&this._setSize();const t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&null!=this._zoom&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap))}ngOnDestroy(){this._eventManager.destroy()}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":M(this.height)||"500px",e.width=null===this.width?"":M(this.width)||"500px"}}_combineOptions(){var e,t;const i=this._options||{};return Object.assign(Object.assign({},i),{center:this._center||i.center||_.center,zoom:null!==(t=null!==(e=this._zoom)&&void 0!==e?e:i.zoom)&&void 0!==t?t:_.zoom,mapTypeId:this.mapTypeId||i.mapTypeId||_.mapTypeId})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(a.Lbi))},e.\u0275cmp=a.Xpm({type:e,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options",mapTypeId:"mapTypeId"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[a.TTD],ngContentSelectors:m,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,t){1&e&&(a.F$t(),a._UZ(0,"div",0),a.Hsn(1))},encapsulation:2,changeDetection:0}),e})();const v=/([A-Za-z%]+)$/;function M(e){return null==e?"":v.test(e)?e:`${e}px`}let y=(()=>{class e{constructor(e,t){this._map=e,this._ngZone=t,this._eventManager=new u(this._ngZone),this._options=new o.X({}),this._center=new o.X(void 0),this._radius=new o.X(void 0),this._destroyed=new l.xQ,this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.circleClick=this._eventManager.getLazyEmitter("click"),this.circleDblclick=this._eventManager.getLazyEmitter("dblclick"),this.circleDrag=this._eventManager.getLazyEmitter("drag"),this.circleDragend=this._eventManager.getLazyEmitter("dragend"),this.circleDragstart=this._eventManager.getLazyEmitter("dragstart"),this.circleMousedown=this._eventManager.getLazyEmitter("mousedown"),this.circleMousemove=this._eventManager.getLazyEmitter("mousemove"),this.circleMouseout=this._eventManager.getLazyEmitter("mouseout"),this.circleMouseover=this._eventManager.getLazyEmitter("mouseover"),this.circleMouseup=this._eventManager.getLazyEmitter("mouseup"),this.radiusChanged=this._eventManager.getLazyEmitter("radius_changed"),this.circleRightclick=this._eventManager.getLazyEmitter("rightclick")}set options(e){this._options.next(e||{})}set center(e){this._center.next(e)}set radius(e){this._radius.next(e)}ngOnInit(){this._map._isBrowser&&(this._combineOptions().pipe((0,c.q)(1)).subscribe(e=>{this._ngZone.runOutsideAngular(()=>{this.circle=new google.maps.Circle(e)}),this._assertInitialized(),this.circle.setMap(this._map.googleMap),this._eventManager.setTarget(this.circle)}),this._watchForOptionsChanges(),this._watchForCenterChanges(),this._watchForRadiusChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroyed.next(),this._destroyed.complete(),this.circle&&this.circle.setMap(null)}getBounds(){return this._assertInitialized(),this.circle.getBounds()}getCenter(){return this._assertInitialized(),this.circle.getCenter()}getDraggable(){return this._assertInitialized(),this.circle.getDraggable()}getEditable(){return this._assertInitialized(),this.circle.getEditable()}getRadius(){return this._assertInitialized(),this.circle.getRadius()}getVisible(){return this._assertInitialized(),this.circle.getVisible()}_combineOptions(){return(0,g.aj)([this._options,this._center,this._radius]).pipe((0,p.U)(([e,t,i])=>Object.assign(Object.assign({},e),{center:t||e.center,radius:void 0!==i?i:e.radius})))}_watchForOptionsChanges(){this._options.pipe((0,d.R)(this._destroyed)).subscribe(e=>{this._assertInitialized(),this.circle.setOptions(e)})}_watchForCenterChanges(){this._center.pipe((0,d.R)(this._destroyed)).subscribe(e=>{e&&(this._assertInitialized(),this.circle.setCenter(e))})}_watchForRadiusChanges(){this._radius.pipe((0,d.R)(this._destroyed)).subscribe(e=>{void 0!==e&&(this._assertInitialized(),this.circle.setRadius(e))})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(b),a.Y36(a.R0b))},e.\u0275dir=a.lG2({type:e,selectors:[["map-circle"]],inputs:{options:"options",center:"center",radius:"radius"},outputs:{centerChanged:"centerChanged",circleClick:"circleClick",circleDblclick:"circleDblclick",circleDrag:"circleDrag",circleDragend:"circleDragend",circleDragstart:"circleDragstart",circleMousedown:"circleMousedown",circleMousemove:"circleMousemove",circleMouseout:"circleMouseout",circleMouseover:"circleMouseover",circleMouseup:"circleMouseup",radiusChanged:"radiusChanged",circleRightclick:"circleRightclick"},exportAs:["mapCircle"]}),e})(),z=(()=>{class e{constructor(e,t,i){this._googleMap=e,this._elementRef=t,this._ngZone=i,this._eventManager=new u(this._ngZone),this._options=new o.X({}),this._position=new o.X(void 0),this._destroy=new l.xQ,this.closeclick=this._eventManager.getLazyEmitter("closeclick"),this.contentChanged=this._eventManager.getLazyEmitter("content_changed"),this.domready=this._eventManager.getLazyEmitter("domready"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set options(e){this._options.next(e||{})}set position(e){this._position.next(e)}ngOnInit(){this._googleMap._isBrowser&&(this._combineOptions().pipe((0,c.q)(1)).subscribe(e=>{this._ngZone.runOutsideAngular(()=>{this.infoWindow=new google.maps.InfoWindow(e)}),this._eventManager.setTarget(this.infoWindow)}),this._watchForOptionsChanges(),this._watchForPositionChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete(),this.infoWindow&&this.close()}close(){this._assertInitialized(),this.infoWindow.close()}getContent(){return this._assertInitialized(),this.infoWindow.getContent()}getPosition(){return this._assertInitialized(),this.infoWindow.getPosition()}getZIndex(){return this._assertInitialized(),this.infoWindow.getZIndex()}open(e){this._assertInitialized();const t=e?e.getAnchor():void 0;this.infoWindow.get("anchor")===t&&t||(this._elementRef.nativeElement.style.display="",this.infoWindow.open(this._googleMap.googleMap,t))}_combineOptions(){return(0,g.aj)([this._options,this._position]).pipe((0,p.U)(([e,t])=>Object.assign(Object.assign({},e),{position:t||e.position,content:this._elementRef.nativeElement})))}_watchForOptionsChanges(){this._options.pipe((0,d.R)(this._destroy)).subscribe(e=>{this._assertInitialized(),this.infoWindow.setOptions(e)})}_watchForPositionChanges(){this._position.pipe((0,d.R)(this._destroy)).subscribe(e=>{e&&(this._assertInitialized(),this.infoWindow.setPosition(e))})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(b),a.Y36(a.SBq),a.Y36(a.R0b))},e.\u0275dir=a.lG2({type:e,selectors:[["map-info-window"]],hostAttrs:[2,"display","none"],inputs:{options:"options",position:"position"},outputs:{closeclick:"closeclick",contentChanged:"contentChanged",domready:"domready",positionChanged:"positionChanged",zindexChanged:"zindexChanged"},exportAs:["mapInfoWindow"]}),e})();const C={position:{lat:37.421995,lng:-122.084092}};let f=(()=>{class e{constructor(e,t){this._googleMap=e,this._ngZone=t,this._eventManager=new u(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){const{marker:t,_title:i,_position:s,_label:n,_clickable:a}=this;t&&(e.options&&t.setOptions(this._combineOptions()),e.title&&void 0!==i&&t.setTitle(i),e.position&&s&&t.setPosition(s),e.label&&void 0!==n&&t.setLabel(n),e.clickable&&void 0!==a&&t.setClickable(a))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){const e=this._options||C;return Object.assign(Object.assign({},e),{title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:void 0!==this._clickable?this._clickable:e.clickable,map:this._googleMap.googleMap})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(b),a.Y36(a.R0b))},e.\u0275dir=a.lG2({type:e,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[a.TTD]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({}),e})(),k=(()=>{class e{}return e.Markers=[{position:{lat:28.51373879665654,lng:-81.36323055491305},label:{text:"Good"},icon:{path:"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",fillColor:"blue",fillOpacity:.6,scale:300}},{position:{lat:28.565225490654658,lng:-81.32972717285156},label:{text:"Good"},icon:{path:"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",fillColor:"purple",fillOpacity:.6,scale:300}},{position:{lat:28.563504017948954,lng:-81.352415888165},label:{text:"Good"},shape:"circle",height:30,width:30,color:"purple"},{position:{lat:28.536145562030278,lng:-81.38840936322703},label:{text:"Non-Compliant"},shape:"circle",height:30,width:30,color:"red"},{position:{lat:28.530933076019487,lng:-81.40116771921969},label:{text:"Non-Compliant"},shape:"circle",height:30,width:30,color:"red"},{position:{lat:28.56290094390906,lng:-81.36941036448336},label:{text:"Non-Compliant"},shape:"circle",height:30,width:30,color:"red"},{position:{lat:28.555060666949633,lng:-81.3879497931943},label:{text:"Poor"},shape:"circle",height:30,width:30,color:"yellow"},{position:{lat:28.531234705011673,lng:-81.39172634348726},label:{text:"Poor"},shape:"circle",height:30,width:30,color:"yellow"},{position:{lat:28.561393243691317,lng:-81.39069637522555},label:{text:"Poor"},shape:{type:"circle",height:30,width:30,color:"yellow"}}],e})();function Z(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"map-marker",2,3),a.NdJ("mapClick",function(){const t=a.CHM(e).$implicit,i=a.oxw();return i.openInfo(i.markerElem,t.info)}),a.qZA()}if(2&e){const e=t.$implicit;a.Q6J("position",e.position)("label",e.label)("title",e.title)("icon",e.icon)("options",e.options)}}let x=(()=>{class e{constructor(){this.infoContent="",this.markers=[],this.zoom=12,this.options={zoomControl:!0,scrollwheel:!0,disableDoubleClickZoom:!0,mapTypeId:"roadmap",maxZoom:15,minZoom:8},this.markers=k.Markers}ngOnInit(){navigator.geolocation.getCurrentPosition(e=>{this.center={lat:28.542111,lng:-81.37903}})}openInfo(e,t){this.infoContent=t,this.info.open(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-google-map"]],viewQuery:function(e,t){if(1&e&&(a.Gf(b,5),a.Gf(y,5),a.Gf(z,5)),2&e){let e;a.iGM(e=a.CRH())&&(t.map=e.first),a.iGM(e=a.CRH())&&(t.mapCircle=e.first),a.iGM(e=a.CRH())&&(t.info=e.first)}},decls:4,vars:5,consts:[["height","500px","width","100%",3,"zoom","center","options"],[3,"position","label","title","icon","options","mapClick",4,"ngFor","ngForOf"],[3,"position","label","title","icon","options","mapClick"],["marker",""]],template:function(e,t){1&e&&(a.TgZ(0,"google-map",0),a.YNc(1,Z,2,5,"map-marker",1),a.TgZ(2,"map-info-window"),a._uU(3),a.qZA(),a.qZA()),2&e&&(a.Q6J("zoom",t.zoom)("center",t.center)("options",t.options),a.xp6(1),a.Q6J("ngForOf",t.markers),a.xp6(2),a.hij("",t.infoContent," "))},directives:[b,s.sg,z,f],styles:[""]}),e})();const I=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ll-contact"]],decls:52,vars:1,consts:[[1,"pt-52","pb-32","bg-gray-100","text-center"],[1,"container"],[1,"breadcrumb","flex","justify-center","items-center"],["href","javascript:void(0)",1,"text-accent"],[1,"pt-20"],[1,"grid","grid-cols-12","gap-4","lg:gap-8","xxl:gap-16"],[1,"contact__form","col-span-12","lg:col-span-7"],[1,"mb-8"],[1,"flex","flex-wrap","sm:flex-nowrap","sm:space-x-5","mt-3"],["type","text","placeholder","Your Name",1,"border","border-gray-200","p-2","px-4","w-full","sm:w-1/2","rounded-sm"],["type","number","placeholder","Your Number",1,"border","border-gray-200","p-2","px-4","w-full","sm:w-1/2","rounded-sm","mt-3","sm:mt-0"],["type","email","placeholder","Your Email",1,"border","border-gray-200","p-2","px-4","w-full","rounded-sm","mt-5"],["type","text","placeholder","Subject",1,"border","border-gray-200","p-2","px-4","w-full","rounded-sm","mt-5"],["cols","10","rows","3","placeholder","Tell us about desired property",1,"border","border-gray-200","p-3","mt-5","w-full","rounded-sm","mt-5",3,"value"],[1,"px-5","py-2","bg-accent","text-white","mt-5","rounded","font-medium"],[1,"col-span-12","lg:col-span-5","bg-black","bg-opacity-90","text-white","rounded","p-8","xxl:px-16","mt-10","lg:mt-0"],[1,"flex","space-x-4","mt-14"],[1,"flex","pt-1","bg-purple-600","rounded-lg"],[1,"flex-1"],["href","callto:125512556523",1,"text-gray-300","font-semibold","hover:text-accent"],["href","callto:125512556523",1,"text-gray-300","font-semibold","hover:text-accent","mt-2","inline-block"],[1,"flex","space-x-4","mt-8"],["href","mailto:mail@example.com",1,"text-gray-300","font-semibold","hover:text-accent"],["href","mailto:mail@example.com",1,"text-gray-300","font-semibold","hover:text-accent","mt-2","inline-block"],["target","_blank","href","https://www.google.com/maps/@23.6982376,90.3462922,19.25z",1,"text-gray-300","hover:text-accent","font-semibold"],[1,"col-span-12","mt-5"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h3"),a._uU(3,"Contact Us"),a.qZA(),a.TgZ(4,"nav",2),a.TgZ(5,"a",3),a._uU(6,"Contact"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"div",4),a.TgZ(8,"div",1),a.TgZ(9,"div",5),a.TgZ(10,"div",6),a.TgZ(11,"div",7),a.TgZ(12,"h3"),a._uU(13,"Leave us a message"),a.qZA(),a.TgZ(14,"p"),a._uU(15,"You will receive a response within 24 hours from our team."),a.qZA(),a.qZA(),a.TgZ(16,"form"),a.TgZ(17,"div",8),a._UZ(18,"input",9),a._UZ(19,"input",10),a.qZA(),a._UZ(20,"input",11),a._UZ(21,"input",12),a.TgZ(22,"textarea",13),a._uU(23,"          "),a.qZA(),a.TgZ(24,"button",14),a._uU(25,"Send Message"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(26,"div",15),a.TgZ(27,"h3"),a._uU(28,"Contact info"),a.qZA(),a.TgZ(29,"div",16),a._UZ(30,"div",17),a.TgZ(31,"div",18),a.TgZ(32,"a",19),a._uU(33,"+1255 - 1255 - 6523"),a.qZA(),a._UZ(34,"br"),a.TgZ(35,"a",20),a._uU(36,"+1255 - 1255 - 6523"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(37,"div",21),a._UZ(38,"div",17),a.TgZ(39,"div",18),a.TgZ(40,"a",22),a._uU(41,"mail@example.com"),a.qZA(),a._UZ(42,"br"),a.TgZ(43,"a",23),a._uU(44,"mail@example.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(45,"div",21),a._UZ(46,"div",17),a.TgZ(47,"div",18),a.TgZ(48,"a",24),a._uU(49," Orlando, FL "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(50,"div",25),a._UZ(51,"app-google-map"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(22),a.Q6J("value",""))},directives:[x],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.Bz.forChild(I)],n.Bz]}),e})();var T=i(35289),L=i(75472);let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.ez,E,T.m,w,L.Ed]]}),e})()}}]);