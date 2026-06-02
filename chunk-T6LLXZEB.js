import{b as We,e as $e,f as Ge,g as Ke,h as b,j as Ze,k as Ye,m as Xe,n as Je,o as et,p as tt,q as nt,r as at,t as it,u as ot}from"./chunk-UDLMC6L6.js";import{c as Fe,d as Te}from"./chunk-KSQ2GU6O.js";import{d as He,e as Ne,k as Re,l as je,m as I,r as Ve,u as qe,v as Be,w as Le}from"./chunk-SCTABGEJ.js";import{a as Qe,b as Ue}from"./chunk-OJSTVFPJ.js";import{a as st}from"./chunk-3FS5AHXK.js";import{a as rt}from"./chunk-TVQ7PXDV.js";import{b as ze}from"./chunk-XIYJNGLE.js";import{d as Ae,e as Oe,g as Ie,s as ke}from"./chunk-VG2PX2JL.js";import{A as w,Ab as R,Bb as j,Cb as Q,Db as ve,Eb as be,F as ae,Fb as ye,Gb as Ce,Ib as V,Jb as U,Kb as W,Lb as _,Mb as $,Nb as Ee,O as z,Ob as D,Pb as P,Qa as ue,Ua as i,Ub as we,V as ie,Vb as A,W as k,Xb as d,Y as y,Yb as p,Zb as O,_ as l,_a as ge,a as J,ab as he,ac as C,b as ee,bb as M,cc as Me,da as oe,db as fe,dc as Se,ea as re,f as T,fa as se,ha as de,hb as S,i as E,ib as N,jb as x,jc as De,ka as f,l as te,la as le,lb as L,mb as h,pa as pe,qc as q,ta as H,tc as v,ua as ce,ub as g,uc as Pe,vb as xe,wa as B,wb as _e,xa as me,xb as m,y as ne,yb as o,zb as r}from"./chunk-E5MBXTM3.js";var F=(()=>{class n{_listeners=[];notify(e,t){for(let a of this._listeners)a(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var K=new y("CdkAccordion"),dt=(()=>{class n{_stateChanges=new E;_openCloseAllActions=new E;id=l(I).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",v]},exportAs:["cdkAccordion"],features:[C([{provide:K,useExisting:n}]),H]})}return n})(),lt=(()=>{class n{accordion=l(K,{optional:!0,skipSelf:!0});_changeDetectorRef=l(q);_expansionDispatcher=l(F);_openCloseAllSubscription=T.EMPTY;closed=new f;opened=new f;destroyed=new f;expandedChange=new f;id=l(I).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=pe(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",v],disabled:[2,"disabled","disabled",v]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[C([{provide:K,useValue:void 0}])]})}return n})(),pt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=k({})}return n})();var bt=["body"],yt=["bodyWrapper"],Ct=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Et=["mat-expansion-panel-header","*","mat-action-row"];function wt(n,s){}var Mt=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],St=["mat-panel-title","mat-panel-description","*"];function Dt(n,s){n&1&&(j(0,"span",1),se(),j(1,"svg",2),ve(2,"path",3),Q()())}var Z=new y("MAT_ACCORDION"),ct=new y("MAT_EXPANSION_PANEL"),Pt=(()=>{class n{_template=l(ge);_expansionPanel=l(ct,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),mt=new y("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Y=(()=>{class n extends lt{_viewContainerRef=l(fe);_animationsDisabled=Ve();_document=l(de);_ngZone=l(le);_elementRef=l(B);_renderer=l(he);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new f;afterCollapse=new f;_inputChanges=new E;accordion=l(Z,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=l(I).getId("mat-expansion-panel-header-");constructor(){super();let e=l(mt,{optional:!0});this._expansionDispatcher=l(F),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(z(null),w(()=>this.expanded&&!this._portal),ae(1)).subscribe(()=>{this._portal=new We(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,a,c){if(t&1&&$(c,Pt,5),t&2){let u;D(u=P())&&(a._lazyContent=u.first)}},viewQuery:function(t,a){if(t&1&&Ee(bt,5)(yt,5),t&2){let c;D(c=P())&&(a._body=c.first),D(c=P())&&(a._bodyWrapper=c.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,a){t&2&&A("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[C([{provide:Z,useValue:void 0},{provide:ct,useExisting:n}]),L,H],ngContentSelectors:Et,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,a){t&1&&(W(Ct),_(0),o(1,"div",2,0)(3,"div",3,1)(5,"div",4),_(6,1),h(7,wt,0,0,"ng-template",5),r(),_(8,2),r()()),t&2&&(i(),g("inert",a.expanded?null:""),i(2),m("id",a.id),g("aria-labelledby",a._headerId),i(4),m("cdkPortalOutlet",a._portal))},dependencies:[$e],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var X=(()=>{class n{panel=l(Y,{host:!0});_element=l(B);_focusMonitor=l(He);_changeDetectorRef=l(q);_parentChangeSubscription=T.EMPTY;constructor(){l(Ne).load(qe);let e=this.panel,t=l(mt,{optional:!0}),a=l(new De("tabindex"),{optional:!0}),c=e.accordion?e.accordion._stateChanges.pipe(w(u=>!!(u.hideToggle||u.togglePosition))):te;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=ne(e.opened,e.closed,c,e._inputChanges.pipe(w(u=>!!(u.hideToggle||u.disabled||u.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(w(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Re(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,a){t&1&&V("click",function(){return a._toggle()})("keydown",function(u){return a._keydown(u)}),t&2&&(g("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),we("height",a._getHeaderHeight()),A("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Pe(e)]},ngContentSelectors:St,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,a){t&1&&(W(Mt),j(0,"span",0),_(1),_(2,1),_(3,2),Q(),xe(4,Dt,3,0,"span",1)),t&2&&(A("mat-content-hide-toggle",!a._showToggle()),i(4),_e(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),gt=(()=>{class n extends dt{_keyManager;_ownHeaders=new me;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(z(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new je(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ce(n)))(a||n)}})();static \u0275dir=x({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,a,c){if(t&1&&$(c,X,5),t&2){let u;D(u=P())&&(a._headers=u)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,a){t&2&&A("mat-accordion-multi",a.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[C([{provide:Z,useExisting:n}]),L]})}return n})(),ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=k({imports:[pt,Ge,ze]})}return n})();function Ot(n,s){if(n&1&&(o(0,"mat-card",21),d(1),r()),n&2){let e=s.$implicit,t=s.index;g("data-aos-delay",t*60),i(),O(" ",e," ")}}function It(n,s){if(n&1&&(o(0,"mat-card",24),R(1,"img",25),o(2,"h3"),d(3),r()()),n&2){let e=s.$implicit,t=s.index;g("data-aos-delay",t*70),i(),m("src",e.image,ue)("alt",e.name+" travel destination"),i(2),p(e.name)}}function Ft(n,s){if(n&1&&(o(0,"mat-card",21),d(1),r()),n&2){let e=s.$implicit,t=s.index;g("data-aos-delay",t*60),i(),O(" ",e," ")}}function Tt(n,s){if(n&1&&(o(0,"mat-card",21),d(1),r()),n&2){let e=s.$implicit,t=s.index;g("data-aos-delay",t*55),i(),O(" ",e," ")}}function kt(n,s){if(n&1&&(o(0,"mat-card",21),d(1),r()),n&2){let e=s.$implicit,t=s.index;g("data-aos-delay",t*55),i(),O(" ",e," ")}}function Ht(n,s){if(n&1&&(o(0,"mat-expansion-panel",26)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),d(3),r()(),o(4,"p"),d(5),r()()),n&2){let e=s.$implicit,t=s.index;m("expanded",t===0),g("data-aos-delay",t*80),i(3),p(e.question),i(2),p(e.answer)}}function Nt(n,s){if(n&1){let e=Ce();be(0),o(1,"section",1)(2,"h1"),d(3),r(),o(4,"p"),d(5),r(),o(6,"form",2),V("ngSubmit",function(){oe(e);let a=U();return re(a.onExploreNow())}),R(7,"input",3)(8,"input",4)(9,"input",5)(10,"input",6),o(11,"button",7),d(12),r()(),o(13,"div",8)(14,"a",9),d(15),r(),o(16,"a",10),d(17),r(),o(18,"a",11),d(19),r()()(),o(20,"section",12)(21,"h2"),d(22),r(),o(23,"div",13),h(24,Ot,2,2,"mat-card",14),r()(),o(25,"section",12)(26,"h2"),d(27),r(),o(28,"div",13),h(29,It,4,4,"mat-card",15),r()(),o(30,"section",12)(31,"h2"),d(32),r(),o(33,"div",13),h(34,Ft,2,2,"mat-card",14),r()(),o(35,"section",12)(36,"h2"),d(37),r(),o(38,"div",13),h(39,Tt,2,2,"mat-card",14),r()(),o(40,"section",12)(41,"h2"),d(42),r(),o(43,"div",13),h(44,kt,2,2,"mat-card",14),r()(),o(45,"section",12)(46,"h2"),d(47),r(),o(48,"mat-accordion"),h(49,Ht,6,4,"mat-expansion-panel",16),r()(),o(50,"section",17),d(51),r(),o(52,"section",12)(53,"h2"),d(54),r(),o(55,"p"),d(56),r(),o(57,"a",18),d(58),r(),o(59,"div",19),R(60,"img",20),r()(),o(61,"section",12)(62,"h2"),d(63),r(),o(64,"div",13)(65,"mat-card",21),d(66,"Dedicated location pages for Kolhapur routes"),r(),o(67,"mat-card",22),d(68,"Fresh SEO blogs targeting long-tail keywords"),r(),o(69,"mat-card",23),d(70,"Fast mobile-first quote and WhatsApp conversion flow"),r()()(),ye()}if(n&2){let e=s.ngIf,t=U();i(3),p(e.hero.title),i(2),p(e.hero.subtitle),i(),m("formGroup",t.heroSearchForm),i(),m("placeholder",t.languageService.isMarathi()?"\u0917\u0902\u0924\u0935\u094D\u092F":"Destination"),i(),m("placeholder",""),i(),m("placeholder",""),i(),m("placeholder",t.languageService.isMarathi()?"\u092A\u094D\u0930\u0935\u093E\u0938\u0940":"Travelers"),i(2),p(t.languageService.isMarathi()?"\u0906\u0924\u093E \u090F\u0915\u094D\u0938\u092A\u094D\u0932\u094B\u0930 \u0915\u0930\u093E":"Explore Now"),i(3),p(t.languageService.isMarathi()?"\u091F\u094D\u0930\u093F\u092A \u092C\u0941\u0915 \u0915\u0930\u093E":"Book Your Trip"),i(2),p(e.hero.ctaCall),i(2),p(e.hero.ctaWhatsapp),i(3),p(t.languageService.isMarathi()?"\u0906\u092E\u094D\u0939\u093E\u0932\u093E\u091A \u0915\u093E \u0928\u093F\u0935\u0921\u093E\u0935\u0947":"Why Choose Us"),i(2),m("ngForOf",e.whyChooseUs),i(3),p(t.languageService.isMarathi()?"\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F \u0920\u093F\u0915\u093E\u0923\u0947":"Popular Destinations"),i(2),m("ngForOf",e.destinations),i(3),p(t.languageService.isMarathi()?"\u0915\u0945\u092C \u092A\u094D\u0930\u0915\u093E\u0930":"Cab Categories"),i(2),m("ngForOf",e.cabCategories),i(3),p(t.languageService.isMarathi()?"\u0938\u0947\u0935\u093E \u0906\u0922\u093E\u0935\u093E":"Services Overview"),i(2),m("ngForOf",e.servicesOverview),i(3),p(t.languageService.isMarathi()?"\u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u0915":"Trust Indicators"),i(2),m("ngForOf",e.trustIndicators),i(3),p(t.languageService.isMarathi()?"\u0928\u0947\u0939\u092E\u0940 \u0935\u093F\u091A\u093E\u0930\u0932\u0947 \u091C\u093E\u0923\u093E\u0930\u0947 \u092A\u094D\u0930\u0936\u094D\u0928":"FAQ"),i(2),m("ngForOf",e.faqs),i(2),p(e.emergencyBanner),i(3),p(t.languageService.isMarathi()?"\u0917\u0942\u0917\u0932 \u0930\u093F\u0935\u094D\u092F\u0942":"Google Reviews"),i(2),p(t.languageService.isMarathi()?"\u0917\u094D\u0930\u093E\u0939\u0915 \u0905\u092D\u093F\u092A\u094D\u0930\u093E\u092F \u092A\u0939\u093E \u0906\u0923\u093F \u0924\u0941\u092E\u091A\u093E \u0905\u0928\u0941\u092D\u0935 \u0936\u0947\u0905\u0930 \u0915\u0930\u093E.":"See customer feedback and share your experience after your trip."),i(2),p(t.languageService.isMarathi()?"\u0917\u0942\u0917\u0932 \u0930\u093F\u0935\u094D\u092F\u0942 \u092A\u0939\u093E":"View Google Reviews"),i(5),p(t.languageService.isMarathi()?"\u0938\u094D\u092A\u0930\u094D\u0927\u093E\u0924\u094D\u092E\u0915 \u092B\u093E\u092F\u0926\u0947":"Competitor Advantage")}}var ft=class n{constructor(s,e,t,a){this.router=s;this.contentService=e;this.fb=t;this.seoService=a;this.content$=this.contentService.content,this.heroSearchForm=this.fb.group({destination:["",[b.required,b.minLength(2)]],journeyDate:["",b.required],returnDate:[""],travelers:[2,[b.required,b.min(1),b.max(50)]]})}content$;languageService=l(ke);heroSearchForm;ngOnInit(){this.content$.subscribe(s=>{this.seoService.update(ee(J({},s.meta.home),{path:"/"}))})}onExploreNow(){if(this.heroSearchForm.markAllAsTouched(),this.heroSearchForm.invalid)return;let s=this.heroSearchForm.value,e=(s.destination??"").toString().trim(),t=s.journeyDate??"",a=s.returnDate??"",c=Number(s.travelers??2),u=this.computeDays(t,a)??2,xt=c<=5?"5 Seater AC Cab":c<=7?"7 Seater SUV":"10 Seater Cab";this.router.navigate(["/request-quotation"],{queryParams:{pickup:"Kolhapur",destination:e,journeyDate:t,returnDate:a||"",adults:c,children:0,days:u,vehicleType:xt}})}computeDays(s,e){let t=new Date(`${s}T00:00:00`);if(isNaN(t.getTime())||!e)return null;let a=new Date(`${e}T00:00:00`);if(isNaN(a.getTime()))return null;let c=a.getTime()-t.getTime();return c<=0?null:Math.min(60,Math.max(1,Math.round(c/864e5)+1))}static \u0275fac=function(e){return new(e||n)(M(Fe),M(rt),M(it),M(st))};static \u0275cmp=S({type:n,selectors:[["app-home"]],decls:2,vars:3,consts:[[4,"ngIf"],["data-aos","fade-right",1,"hero"],["novalidate","",1,"hero-search",3,"ngSubmit","formGroup"],["formControlName","destination","autocomplete","off",3,"placeholder"],["formControlName","journeyDate","type","date",3,"placeholder"],["formControlName","returnDate","type","date",3,"placeholder"],["formControlName","travelers","type","number","inputmode","numeric","min","1","max","50",3,"placeholder"],["mat-flat-button","","color","primary","type","submit"],[1,"cta-row"],["mat-flat-button","","color","primary","routerLink","/request-quotation"],["mat-stroked-button","","href","tel:+919579858666"],["mat-stroked-button","","href","https://wa.me/919579858666","target","_blank","rel","noreferrer"],["data-aos","fade-up",1,"section"],[1,"grid"],["data-aos","fade-up",4,"ngFor","ngForOf"],["data-aos","zoom-in-up",4,"ngFor","ngForOf"],[3,"expanded",4,"ngFor","ngForOf"],[1,"section","emergency"],["href","https://maps.app.goo.gl/TFtSQp9g6WcRBVCF9","target","_blank","rel","noreferrer"],[1,"qr-wrap"],["src","https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://maps.app.goo.gl/TFtSQp9g6WcRBVCF9","alt","Google Review QR","loading","lazy"],["data-aos","fade-up"],["data-aos","fade-up","data-aos-delay","80"],["data-aos","fade-up","data-aos-delay","160"],["data-aos","zoom-in-up"],["loading","lazy","decoding","async","referrerpolicy","no-referrer-when-downgrade",3,"src","alt"],[3,"expanded"]],template:function(e,t){e&1&&(h(0,Nt,71,28,"ng-container",0),Me(1,"async")),e&2&&m("ngIf",Se(1,1,t.content$))},dependencies:[Oe,Ae,Te,Le,Be,Ue,Qe,ht,gt,Y,X,ut,ot,Xe,Ke,Je,Ze,Ye,at,nt,tt,et,Ie],styles:[".hero[_ngcontent-%COMP%]{background:linear-gradient(#0b3a69cc,#0b3a69cc),url(https://images.unsplash.com/photo-1603349206295-dde20617cb6f?auto=format&fit=crop&w=1400&q=80) center/cover;color:#fff;padding:4rem 1rem;text-align:center}.cta-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap}.hero-search[_ngcontent-%COMP%]{margin:1.25rem auto 0;display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center;align-items:stretch;max-width:980px}.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1 1 200px;min-width:160px;border:0;border-radius:12px;padding:.85rem .95rem;background:#fffffff2;color:#0b3a69;outline:none;box-shadow:0 12px 26px #0000002e}.hero-search[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]{padding:.72rem .95rem}.hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 auto;border-radius:12px;padding:0 1.1rem;height:46px;align-self:center;white-space:nowrap}@media(max-width:768px){.hero[_ngcontent-%COMP%]{padding:2.5rem .75rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.55rem}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem}.cta-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;margin:0}.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;flex:0 0 100%;min-width:0;height:auto}.section[_ngcontent-%COMP%]{padding:1.25rem .75rem}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.section[_ngcontent-%COMP%]{padding:2rem 1rem}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}mat-card[_ngcontent-%COMP%]{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;border:1px solid transparent}mat-card[_ngcontent-%COMP%]:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 16px 30px #0b3a6933;border-color:#d7e7ff}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:8px;margin-bottom:.5rem;aspect-ratio:16/10;object-fit:cover;background:#e8eef5;min-height:140px}mat-card[_ngcontent-%COMP%]{overflow:hidden}mat-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05);transition:transform .35s ease}.emergency[_ngcontent-%COMP%]{background:#1a9f43;color:#fff;text-align:center;font-weight:600}.qr-wrap[_ngcontent-%COMP%]{margin-top:1rem;max-width:180px}[_nghost-%COMP%]     mat-expansion-panel{border-radius:12px;background:transparent}[_nghost-%COMP%]     mat-expansion-panel-header{padding:0 .75rem}"]})};export{ft as HomeComponent};
