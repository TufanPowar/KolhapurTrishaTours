import{b as Be,e as Ve,f as Le}from"./chunk-7ZOVAB2R.js";import{d as Oe,e as Ie,k as ke,l as Fe,m as A,r as Te,u as He,v as Ne,w as je}from"./chunk-GFBVOFNO.js";import{c as De}from"./chunk-V22O4W3R.js";import{a as ze,b as qe}from"./chunk-FUMSGKZ4.js";import{a as Ue}from"./chunk-D7ZAHZZE.js";import{a as Qe}from"./chunk-42AKWQRD.js";import{b as Re}from"./chunk-W5XRJKSM.js";import{d as Me,e as Se,g as Pe,s as Ae}from"./chunk-YJSTALR5.js";import{A as E,Ab as B,Bb as H,Cb as V,Db as ge,Eb as he,F as ee,Fb as xe,Ib as fe,Jb as _e,Kb as L,Lb as _,Mb as Q,Nb as ve,O as N,Ob as M,Pb as S,Qa as de,Ua as r,Ub as be,V as ne,Vb as P,W as k,Xb as d,Y as b,Yb as p,Zb as D,_ as s,_a as le,a as G,ab as pe,ac as y,b as Y,bb as z,db as ce,dc as ye,ec as Ce,f as I,fa as te,ha as ae,hb as w,i as C,ib as T,jb as f,ka as x,kc as Ee,l as X,la as ie,lb as q,mb as h,pa as oe,rc as R,ta as F,ua as re,ub as g,uc as v,vb as me,vc as we,wa as j,wb as ue,xa as se,xb as m,y as J,yb as i,zb as o}from"./chunk-T5V6HZOP.js";var O=(()=>{class t{_listeners=[];notify(e,n){for(let a of this._listeners)a(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var W=new b("CdkAccordion"),We=(()=>{class t{_stateChanges=new C;_openCloseAllActions=new C;id=s(A).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",v]},exportAs:["cdkAccordion"],features:[y([{provide:W,useExisting:t}]),F]})}return t})(),$e=(()=>{class t{accordion=s(W,{optional:!0,skipSelf:!0});_changeDetectorRef=s(R);_expansionDispatcher=s(O);_openCloseAllSubscription=I.EMPTY;closed=new x;opened=new x;destroyed=new x;expandedChange=new x;id=s(A).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=oe(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",v],disabled:[2,"disabled","disabled",v]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[y([{provide:W,useValue:void 0}])]})}return t})(),Ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=T({type:t});static \u0275inj=k({})}return t})();var an=["body"],on=["bodyWrapper"],rn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],sn=["mat-expansion-panel-header","*","mat-action-row"];function dn(t,l){}var ln=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],pn=["mat-panel-title","mat-panel-description","*"];function cn(t,l){t&1&&(H(0,"span",1),te(),H(1,"svg",2),ge(2,"path",3),V()())}var $=new b("MAT_ACCORDION"),Ze=new b("MAT_EXPANSION_PANEL"),mn=(()=>{class t{_template=s(le);_expansionPanel=s(Ze,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),Ge=new b("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),K=(()=>{class t extends $e{_viewContainerRef=s(ce);_animationsDisabled=Te();_document=s(ae);_ngZone=s(ie);_elementRef=s(j);_renderer=s(pe);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new x;afterCollapse=new x;_inputChanges=new C;accordion=s($,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=s(A).getId("mat-expansion-panel-header-");constructor(){super();let e=s(Ge,{optional:!0});this._expansionDispatcher=s(O),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(N(null),E(()=>this.expanded&&!this._portal),ee(1)).subscribe(()=>{this._portal=new Be(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,u){if(n&1&&Q(u,mn,5),n&2){let c;M(c=S())&&(a._lazyContent=c.first)}},viewQuery:function(n,a){if(n&1&&ve(an,5)(on,5),n&2){let u;M(u=S())&&(a._body=u.first),M(u=S())&&(a._bodyWrapper=u.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,a){n&2&&P("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[y([{provide:$,useValue:void 0},{provide:Ze,useExisting:t}]),q,F],ngContentSelectors:sn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){n&1&&(L(rn),_(0),i(1,"div",2,0)(3,"div",3,1)(5,"div",4),_(6,1),h(7,dn,0,0,"ng-template",5),o(),_(8,2),o()()),n&2&&(r(),g("inert",a.expanded?null:""),r(2),m("id",a.id),g("aria-labelledby",a._headerId),r(4),m("cdkPortalOutlet",a._portal))},dependencies:[Ve],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var Z=(()=>{class t{panel=s(K,{host:!0});_element=s(j);_focusMonitor=s(Oe);_changeDetectorRef=s(R);_parentChangeSubscription=I.EMPTY;constructor(){s(Ie).load(He);let e=this.panel,n=s(Ge,{optional:!0}),a=s(new Ee("tabindex"),{optional:!0}),u=e.accordion?e.accordion._stateChanges.pipe(E(c=>!!(c.hideToggle||c.togglePosition))):X;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=J(e.opened,e.closed,u,e._inputChanges.pipe(E(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(E(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ke(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,a){n&1&&fe("click",function(){return a._toggle()})("keydown",function(c){return a._keydown(c)}),n&2&&(g("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),be("height",a._getHeaderHeight()),P("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:we(e)]},ngContentSelectors:pn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,a){n&1&&(L(ln),H(0,"span",0),_(1),_(2,1),_(3,2),V(),me(4,cn,3,0,"span",1)),n&2&&(P("mat-content-hide-toggle",!a._showToggle()),r(4),ue(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ye=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),Xe=(()=>{class t extends We{_keyManager;_ownHeaders=new se;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(N(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Fe(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=re(t)))(a||t)}})();static \u0275dir=f({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,a,u){if(n&1&&Q(u,Z,5),n&2){let c;M(c=S())&&(a._headers=c)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,a){n&2&&P("mat-accordion-multi",a.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[y([{provide:$,useExisting:t}]),q]})}return t})(),Je=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=T({type:t});static \u0275inj=k({imports:[Ke,Le,Re]})}return t})();function gn(t,l){if(t&1&&(i(0,"mat-card",15),d(1),o()),t&2){let e=l.$implicit,n=l.index;g("data-aos-delay",n*60),r(),D(" ",e," ")}}function hn(t,l){if(t&1&&(i(0,"mat-card",18),B(1,"img",19),i(2,"h3"),d(3),o()()),t&2){let e=l.$implicit,n=l.index;g("data-aos-delay",n*70),r(),m("src",e.image,de)("alt",e.name+" travel destination"),r(2),p(e.name)}}function xn(t,l){if(t&1&&(i(0,"mat-card",15),d(1),o()),t&2){let e=l.$implicit,n=l.index;g("data-aos-delay",n*60),r(),D(" ",e," ")}}function fn(t,l){if(t&1&&(i(0,"mat-card",15),d(1),o()),t&2){let e=l.$implicit,n=l.index;g("data-aos-delay",n*55),r(),D(" ",e," ")}}function _n(t,l){if(t&1&&(i(0,"mat-card",15),d(1),o()),t&2){let e=l.$implicit,n=l.index;g("data-aos-delay",n*55),r(),D(" ",e," ")}}function vn(t,l){if(t&1&&(i(0,"mat-expansion-panel",20)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),d(3),o()(),i(4,"p"),d(5),o()()),t&2){let e=l.$implicit,n=l.index;m("expanded",n===0),g("data-aos-delay",n*80),r(3),p(e.question),r(2),p(e.answer)}}function bn(t,l){if(t&1&&(he(0),i(1,"section",1)(2,"h1"),d(3),o(),i(4,"p"),d(5),o(),i(6,"div",2)(7,"a",3),d(8),o(),i(9,"a",4),d(10),o(),i(11,"a",5),d(12),o()()(),i(13,"section",6)(14,"h2"),d(15),o(),i(16,"div",7),h(17,gn,2,2,"mat-card",8),o()(),i(18,"section",6)(19,"h2"),d(20),o(),i(21,"div",7),h(22,hn,4,4,"mat-card",9),o()(),i(23,"section",6)(24,"h2"),d(25),o(),i(26,"div",7),h(27,xn,2,2,"mat-card",8),o()(),i(28,"section",6)(29,"h2"),d(30),o(),i(31,"div",7),h(32,fn,2,2,"mat-card",8),o()(),i(33,"section",6)(34,"h2"),d(35),o(),i(36,"div",7),h(37,_n,2,2,"mat-card",8),o()(),i(38,"section",6)(39,"h2"),d(40),o(),i(41,"mat-accordion"),h(42,vn,6,4,"mat-expansion-panel",10),o()(),i(43,"section",11),d(44),o(),i(45,"section",6)(46,"h2"),d(47),o(),i(48,"p"),d(49),o(),i(50,"a",12),d(51),o(),i(52,"div",13),B(53,"img",14),o()(),i(54,"section",6)(55,"h2"),d(56),o(),i(57,"div",7)(58,"mat-card",15),d(59,"Dedicated location pages for Kolhapur routes"),o(),i(60,"mat-card",16),d(61,"Fresh SEO blogs targeting long-tail keywords"),o(),i(62,"mat-card",17),d(63,"Fast mobile-first quote and WhatsApp conversion flow"),o()()(),xe()),t&2){let e=l.ngIf,n=_e();r(3),p(e.hero.title),r(2),p(e.hero.subtitle),r(3),p(n.languageService.isMarathi()?"\u091F\u094D\u0930\u093F\u092A \u092C\u0941\u0915 \u0915\u0930\u093E":"Book Your Trip"),r(2),p(e.hero.ctaCall),r(2),p(e.hero.ctaWhatsapp),r(3),p(n.languageService.isMarathi()?"\u0906\u092E\u094D\u0939\u093E\u0932\u093E\u091A \u0915\u093E \u0928\u093F\u0935\u0921\u093E\u0935\u0947":"Why Choose Us"),r(2),m("ngForOf",e.whyChooseUs),r(3),p(n.languageService.isMarathi()?"\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F \u0920\u093F\u0915\u093E\u0923\u0947":"Popular Destinations"),r(2),m("ngForOf",e.destinations),r(3),p(n.languageService.isMarathi()?"\u0915\u0945\u092C \u092A\u094D\u0930\u0915\u093E\u0930":"Cab Categories"),r(2),m("ngForOf",e.cabCategories),r(3),p(n.languageService.isMarathi()?"\u0938\u0947\u0935\u093E \u0906\u0922\u093E\u0935\u093E":"Services Overview"),r(2),m("ngForOf",e.servicesOverview),r(3),p(n.languageService.isMarathi()?"\u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u0915":"Trust Indicators"),r(2),m("ngForOf",e.trustIndicators),r(3),p(n.languageService.isMarathi()?"\u0928\u0947\u0939\u092E\u0940 \u0935\u093F\u091A\u093E\u0930\u0932\u0947 \u091C\u093E\u0923\u093E\u0930\u0947 \u092A\u094D\u0930\u0936\u094D\u0928":"FAQ"),r(2),m("ngForOf",e.faqs),r(2),p(e.emergencyBanner),r(3),p(n.languageService.isMarathi()?"\u0917\u0942\u0917\u0932 \u0930\u093F\u0935\u094D\u092F\u0942":"Google Reviews"),r(2),p(n.languageService.isMarathi()?"\u0917\u094D\u0930\u093E\u0939\u0915 \u0905\u092D\u093F\u092A\u094D\u0930\u093E\u092F \u092A\u0939\u093E \u0906\u0923\u093F \u0924\u0941\u092E\u091A\u093E \u0905\u0928\u0941\u092D\u0935 \u0936\u0947\u0905\u0930 \u0915\u0930\u093E.":"See customer feedback and share your experience after your trip."),r(2),p(n.languageService.isMarathi()?"\u0917\u0942\u0917\u0932 \u0930\u093F\u0935\u094D\u092F\u0942 \u092A\u0939\u093E":"View Google Reviews"),r(5),p(n.languageService.isMarathi()?"\u0938\u094D\u092A\u0930\u094D\u0927\u093E\u0924\u094D\u092E\u0915 \u092B\u093E\u092F\u0926\u0947":"Competitor Advantage")}}var en=class t{constructor(l,e){this.contentService=l;this.seoService=e;this.content$=this.contentService.content}content$;languageService=s(Ae);ngOnInit(){this.content$.subscribe(l=>{this.seoService.update(Y(G({},l.meta.home),{path:"/"}))})}static \u0275fac=function(e){return new(e||t)(z(Qe),z(Ue))};static \u0275cmp=w({type:t,selectors:[["app-home"]],decls:2,vars:3,consts:[[4,"ngIf"],["data-aos","fade-right",1,"hero"],[1,"cta-row"],["mat-flat-button","","color","primary","routerLink","/request-quotation",1,"cta-book"],["href","tel:+919579858666",1,"cta-call"],["href","https://wa.me/919579858666","target","_blank","rel","noreferrer",1,"cta-whatsapp"],["data-aos","fade-up",1,"section"],[1,"grid"],["data-aos","fade-up",4,"ngFor","ngForOf"],["data-aos","zoom-in-up",4,"ngFor","ngForOf"],[3,"expanded",4,"ngFor","ngForOf"],[1,"section","emergency"],["href","https://maps.app.goo.gl/TFtSQp9g6WcRBVCF9","target","_blank","rel","noreferrer"],[1,"qr-wrap"],["src","https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://maps.app.goo.gl/TFtSQp9g6WcRBVCF9","alt","Google Review QR","loading","lazy"],["data-aos","fade-up"],["data-aos","fade-up","data-aos-delay","80"],["data-aos","fade-up","data-aos-delay","160"],["data-aos","zoom-in-up"],["loading","lazy","decoding","async","referrerpolicy","no-referrer-when-downgrade",3,"src","alt"],[3,"expanded"]],template:function(e,n){e&1&&(h(0,bn,64,22,"ng-container",0),ye(1,"async")),e&2&&m("ngIf",Ce(1,1,n.content$))},dependencies:[Se,Me,De,je,Ne,qe,ze,Je,Xe,K,Z,Ye,Pe],styles:[".hero[_ngcontent-%COMP%]{background:linear-gradient(#0b3a69cc,#0b3a69cc),url(https://images.unsplash.com/photo-1603349206295-dde20617cb6f?auto=format&fit=crop&w=1400&q=80) center/cover;color:#fff;padding:4rem 1rem;text-align:center}.cta-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap}.cta-row[_ngcontent-%COMP%]   a.cta-call[_ngcontent-%COMP%], .cta-row[_ngcontent-%COMP%]   a.cta-whatsapp[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;padding:0 1.25rem;min-height:42px;border-radius:8px;font-weight:600;text-decoration:none;color:#fff!important;border:2px solid rgba(255,255,255,.35);box-shadow:0 8px 20px #00000040}.cta-call[_ngcontent-%COMP%]{background:#1a9f43}.cta-call[_ngcontent-%COMP%]:hover{background:#158a3a}.cta-whatsapp[_ngcontent-%COMP%]{background:#128c7e}.cta-whatsapp[_ngcontent-%COMP%]:hover{background:#0f7a6e}.cta-book[_ngcontent-%COMP%]{font-weight:600}@media(max-width:768px){.hero[_ngcontent-%COMP%]{padding:2.5rem .75rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.55rem}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem}.cta-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;margin:0}.section[_ngcontent-%COMP%]{padding:1.25rem .75rem}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.section[_ngcontent-%COMP%]{padding:2rem 1rem}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}mat-card[_ngcontent-%COMP%]{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;border:1px solid transparent}mat-card[_ngcontent-%COMP%]:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 16px 30px #0b3a6933;border-color:#d7e7ff}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:8px;margin-bottom:.5rem;aspect-ratio:16/10;object-fit:cover;background:#e8eef5;min-height:140px}mat-card[_ngcontent-%COMP%]{overflow:hidden}mat-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05);transition:transform .35s ease}.emergency[_ngcontent-%COMP%]{background:#1a9f43;color:#fff;text-align:center;font-weight:600}.qr-wrap[_ngcontent-%COMP%]{margin-top:1rem;max-width:180px}[_nghost-%COMP%]     mat-expansion-panel{border-radius:12px;background:transparent}[_nghost-%COMP%]     mat-expansion-panel-header{padding:0 .75rem}"]})};export{en as HomeComponent};
