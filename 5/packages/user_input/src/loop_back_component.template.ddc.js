define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/user_input/src/loop_back_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, loop_back_component, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__loop_back_component = loop_back_component.src__loop_back_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__loop_back_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfLoopBackComponent = () => (AppViewOfLoopBackComponent = dart.constFn(src__core__linker__app_view.AppView$(src__loop_back_component.LoopBackComponent)))();
  let AppViewAndintToAppViewOfLoopBackComponent = () => (AppViewAndintToAppViewOfLoopBackComponent = dart.constFn(dart.fnType(AppViewOfLoopBackComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfLoopBackComponent = () => (ComponentRefOfLoopBackComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__loop_back_component.LoopBackComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfLoopBackComponent = () => (ComponentFactoryOfLoopBackComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__loop_back_component.LoopBackComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__loop_back_component$46template, {
    /*src__loop_back_component$46template.styles$LoopBackComponent*/get styles$LoopBackComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  const _handle_keyup_0_0 = Symbol('_handle_keyup_0_0');
  let const$;
  src__loop_back_component$46template.ViewLoopBackComponent0 = class ViewLoopBackComponent0 extends src__core__linker__app_view.AppView$(src__loop_back_component.LoopBackComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', parentRenderNode));
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this[_el_0][$addEventListener]('keyup', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keyup_0_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let local_box = this[_el_0];
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_box.value);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handle_keyup_0_0]($event) {
      0;
    }
  };
  (src__loop_back_component$46template.ViewLoopBackComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__loop_back_component$46template.ViewLoopBackComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('loop-back'));
    let t = src__loop_back_component$46template.ViewLoopBackComponent0._renderType;
    t == null ? src__loop_back_component$46template.ViewLoopBackComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__loop_back_component$46template.styles$LoopBackComponent) : t;
    this.setupComponentType(src__loop_back_component$46template.ViewLoopBackComponent0._renderType);
  }).prototype = src__loop_back_component$46template.ViewLoopBackComponent0.prototype;
  dart.addTypeTests(src__loop_back_component$46template.ViewLoopBackComponent0);
  dart.setMethodSignature(src__loop_back_component$46template.ViewLoopBackComponent0, () => ({
    __proto__: dart.getMethods(src__loop_back_component$46template.ViewLoopBackComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__loop_back_component.LoopBackComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_keyup_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__loop_back_component$46template.ViewLoopBackComponent0, () => ({
    __proto__: dart.getFields(src__loop_back_component$46template.ViewLoopBackComponent0.__proto__),
    [_el_0]: dart.fieldType(html.InputElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__loop_back_component$46template.ViewLoopBackComponent0, {
    /*src__loop_back_component$46template.ViewLoopBackComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__loop_back_component$46template.viewFactory_LoopBackComponent0 = function(parentView, parentIndex) {
    return new src__loop_back_component$46template.ViewLoopBackComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__loop_back_component$46template.viewFactory_LoopBackComponent0, AppViewAndintToAppViewOfLoopBackComponent());
  dart.defineLazy(src__loop_back_component$46template, {
    /*src__loop_back_component$46template.styles$LoopBackComponentHost*/get styles$LoopBackComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _LoopBackComponent_0_5 = Symbol('_LoopBackComponent_0_5');
  src__loop_back_component$46template._ViewLoopBackComponentHost0 = class _ViewLoopBackComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__loop_back_component$46template.ViewLoopBackComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LoopBackComponent_0_5] = new src__loop_back_component.LoopBackComponent.new();
      this[_compView_0].create(this[_LoopBackComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfLoopBackComponent()).new(0, this, this.rootEl, this[_LoopBackComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__loop_back_component$46template._ViewLoopBackComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LoopBackComponent_0_5] = null;
    src__loop_back_component$46template._ViewLoopBackComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__loop_back_component$46template._ViewLoopBackComponentHost0.prototype;
  dart.addTypeTests(src__loop_back_component$46template._ViewLoopBackComponentHost0);
  dart.setMethodSignature(src__loop_back_component$46template._ViewLoopBackComponentHost0, () => ({
    __proto__: dart.getMethods(src__loop_back_component$46template._ViewLoopBackComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__loop_back_component$46template._ViewLoopBackComponentHost0, () => ({
    __proto__: dart.getFields(src__loop_back_component$46template._ViewLoopBackComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__loop_back_component$46template.ViewLoopBackComponent0),
    [_LoopBackComponent_0_5]: dart.fieldType(src__loop_back_component.LoopBackComponent)
  }));
  src__loop_back_component$46template.viewFactory_LoopBackComponentHost0 = function(parentView, parentIndex) {
    return new src__loop_back_component$46template._ViewLoopBackComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__loop_back_component$46template.viewFactory_LoopBackComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__loop_back_component$46template, {
    /*src__loop_back_component$46template.LoopBackComponentNgFactory*/get LoopBackComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfLoopBackComponent()).new('loop-back', src__loop_back_component$46template.viewFactory_LoopBackComponentHost0, src__loop_back_component$46template._LoopBackComponentMetadata));
    },
    /*src__loop_back_component$46template._LoopBackComponentMetadata*/get _LoopBackComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__loop_back_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__loop_back_component$46template.initReflector = function() {
    if (dart.test(src__loop_back_component$46template._visited)) {
      return;
    }
    src__loop_back_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__loop_back_component.LoopBackComponent), src__loop_back_component$46template.LoopBackComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__loop_back_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/user_input/src/loop_back_component.template.ddc", {
    "package:user_input/src/loop_back_component.template.dart": src__loop_back_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["loop_back_component.template.dart"],"names":[],"mappings":";;;;QAoCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;MAVP,4DAAwB;YAAG;;;;;;;;;;;AAe3C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GADK,AACF,IADS,qBACT,2CAAe,CAAC,GAAG,EAAE,SAAS,gBAAgB;AACtD,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,mBAAO,GAHG,AAGA,AAAI,IAHG,SAGS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CALnC,IAAO,QAAP,IAAO,QAK6B,kCAAiB;AAC/D,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAM,YAAY,WAAK;AACvB,UAAM,YApBU,AAoBE,AAAQ,iCApBH,aAoBe,CAAC,SAAS,MAAM;AACtD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;wBAEuB,MAAM;AAC3B;IACF;;6EA/BuB,UAA2B,EAAE,WAAe;IAL9C,WAAK;IACV,WAAK;IACR,aAAO;IAChB,aAAO;AAE4D,wFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,kFAAW;gBAAX,sEAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,4DAAwB;AAC1G,2BAAkB,CAAC,sEAAW;EAChC;;;;;;;;;;4BAKY,IAAO;4BAAP,IAAO;8BAAP,IAAO;;;;MAVQ,sEAAW;;;;;gFAmC0B,UAA2B,EAAE,WAAe;AAC5G,UAAO,KAAI,8DAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;;MAEoB,gEAA4B;YAAG;;;;;;;AAQ/C,uBAAW,GAAG,IAAI,8DAAsB,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,kCAAsB,GAAG,IAAI,8CAAyB;AACtD,uBAAW,OAAO,CAAC,4BAAsB,EAAE,qBAAgB;AAC3D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,uCAAuC,CAAC,GAAG,MAAM,WAAM,EAAE,4BAAsB;IAC5F;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;kFAnB4B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,4BAAsB;AAC4B,6FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;oFAsBjI,UAA2B,EAAE,WAAe;AACrF,UAAO,KAAI,mEAA2B,CAAC,UAAU,EAAE,WAAW;EAChE;;;MAEkD,8DAA0B;YAAG,gBAAM,2CAA2C,CAAC,aAAa,sEAAkC,EAAE,8DAA0B;;MACtM,8DAA0B;YAAG;;MAC/B,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,oCAAiB,CAAC,yDAAiB,EAAE,8DAA0B;AACtE,IAAM,gCAAa;EACrB","file":"loop_back_component.template.ddc.js"}');
  // Exports:
  return {
    src__loop_back_component$46template: src__loop_back_component$46template
  };
});

//# sourceMappingURL=loop_back_component.template.ddc.js.map
