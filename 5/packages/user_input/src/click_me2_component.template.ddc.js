define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/user_input/src/click_me2_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, click_me2_component, reflector, angular) {
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
  const src__click_me2_component = click_me2_component.src__click_me2_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__click_me2_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfClickMe2Component = () => (AppViewOfClickMe2Component = dart.constFn(src__core__linker__app_view.AppView$(src__click_me2_component.ClickMe2Component)))();
  let AppViewAndintToAppViewOfClickMe2Component = () => (AppViewAndintToAppViewOfClickMe2Component = dart.constFn(dart.fnType(AppViewOfClickMe2Component(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfClickMe2Component = () => (ComponentRefOfClickMe2Component = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__click_me2_component.ClickMe2Component)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfClickMe2Component = () => (ComponentFactoryOfClickMe2Component = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__click_me2_component.ClickMe2Component)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__click_me2_component$46template, {
    /*src__click_me2_component$46template.styles$ClickMe2Component*/get styles$ClickMe2Component() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__click_me2_component$46template.ViewClickMe2Component0 = class ViewClickMe2Component0 extends src__core__linker__app_view.AppView$(src__click_me2_component.ClickMe2Component) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      let _text_1 = html.Text.new('No! .. Click me!');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      parentRenderNode[$append](this[_text_2]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onClickMe2')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.clickMessage;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__click_me2_component$46template.ViewClickMe2Component0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__click_me2_component$46template.ViewClickMe2Component0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('click-me2'));
    let t = src__click_me2_component$46template.ViewClickMe2Component0._renderType;
    t == null ? src__click_me2_component$46template.ViewClickMe2Component0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__click_me2_component$46template.styles$ClickMe2Component) : t;
    this.setupComponentType(src__click_me2_component$46template.ViewClickMe2Component0._renderType);
  }).prototype = src__click_me2_component$46template.ViewClickMe2Component0.prototype;
  dart.addTypeTests(src__click_me2_component$46template.ViewClickMe2Component0);
  dart.setMethodSignature(src__click_me2_component$46template.ViewClickMe2Component0, () => ({
    __proto__: dart.getMethods(src__click_me2_component$46template.ViewClickMe2Component0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__click_me2_component.ClickMe2Component), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__click_me2_component$46template.ViewClickMe2Component0, () => ({
    __proto__: dart.getFields(src__click_me2_component$46template.ViewClickMe2Component0.__proto__),
    [_el_0]: dart.fieldType(html.ButtonElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__click_me2_component$46template.ViewClickMe2Component0, {
    /*src__click_me2_component$46template.ViewClickMe2Component0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__click_me2_component$46template.viewFactory_ClickMe2Component0 = function(parentView, parentIndex) {
    return new src__click_me2_component$46template.ViewClickMe2Component0.new(parentView, parentIndex);
  };
  dart.fn(src__click_me2_component$46template.viewFactory_ClickMe2Component0, AppViewAndintToAppViewOfClickMe2Component());
  dart.defineLazy(src__click_me2_component$46template, {
    /*src__click_me2_component$46template.styles$ClickMe2ComponentHost*/get styles$ClickMe2ComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ClickMe2Component_0_5 = Symbol('_ClickMe2Component_0_5');
  src__click_me2_component$46template._ViewClickMe2ComponentHost0 = class _ViewClickMe2ComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__click_me2_component$46template.ViewClickMe2Component0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ClickMe2Component_0_5] = new src__click_me2_component.ClickMe2Component.new();
      this[_compView_0].create(this[_ClickMe2Component_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfClickMe2Component()).new(0, this, this.rootEl, this[_ClickMe2Component_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__click_me2_component$46template._ViewClickMe2ComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ClickMe2Component_0_5] = null;
    src__click_me2_component$46template._ViewClickMe2ComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__click_me2_component$46template._ViewClickMe2ComponentHost0.prototype;
  dart.addTypeTests(src__click_me2_component$46template._ViewClickMe2ComponentHost0);
  dart.setMethodSignature(src__click_me2_component$46template._ViewClickMe2ComponentHost0, () => ({
    __proto__: dart.getMethods(src__click_me2_component$46template._ViewClickMe2ComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__click_me2_component$46template._ViewClickMe2ComponentHost0, () => ({
    __proto__: dart.getFields(src__click_me2_component$46template._ViewClickMe2ComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__click_me2_component$46template.ViewClickMe2Component0),
    [_ClickMe2Component_0_5]: dart.fieldType(src__click_me2_component.ClickMe2Component)
  }));
  src__click_me2_component$46template.viewFactory_ClickMe2ComponentHost0 = function(parentView, parentIndex) {
    return new src__click_me2_component$46template._ViewClickMe2ComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__click_me2_component$46template.viewFactory_ClickMe2ComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__click_me2_component$46template, {
    /*src__click_me2_component$46template.ClickMe2ComponentNgFactory*/get ClickMe2ComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfClickMe2Component()).new('click-me2', src__click_me2_component$46template.viewFactory_ClickMe2ComponentHost0, src__click_me2_component$46template._ClickMe2ComponentMetadata));
    },
    /*src__click_me2_component$46template._ClickMe2ComponentMetadata*/get _ClickMe2ComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__click_me2_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__click_me2_component$46template.initReflector = function() {
    if (dart.test(src__click_me2_component$46template._visited)) {
      return;
    }
    src__click_me2_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__click_me2_component.ClickMe2Component), src__click_me2_component$46template.ClickMe2ComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__click_me2_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/user_input/src/click_me2_component.template.ddc", {
    "package:user_input/src/click_me2_component.template.dart": src__click_me2_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["click_me2_component.template.dart"],"names":[],"mappings":";;;;QAmCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;MATP,4DAAwB;YAAG;;;;;;;;;AAc3C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GADK,AACF,IADS,sBACT,2CAAe,CAAC,GAAG,EAAE,UAAU,gBAAgB;AACvD,UAAa,UAFH,AAEa,AAAI,IAFV,SAEsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAJG,AAIA,AAAI,IAJG,SAIS,CAAC;AAC3B,sBAAgB,SAAO,CAAC,aAAO;AAC/B,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CANnC,IAAO,QAAP,IAAO,kBAM6B,QAAG;AACjD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAgC,OAAO,QAAG;AAC1C,cAAmB,IAAI,aAAa;UAA9B,4BAAkC;AACxC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;6EA5BuB,UAA2B,EAAE,WAAe;IAJ7C,WAAK;IACd,aAAO;IAChB,aAAO;AAE4D,wFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,kFAAW;gBAAX,sEAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,4DAAwB;AAC1G,2BAAkB,CAAC,sEAAW;EAChC;;;;;;;;;4BAKY,IAAO;8BAAP,IAAO;;;;MAVQ,sEAAW;;;;;gFAgC0B,UAA2B,EAAE,WAAe;AAC5G,UAAO,KAAI,8DAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;;MAEoB,gEAA4B;YAAG;;;;;;;AAQ/C,uBAAW,GAAG,IAAI,8DAAsB,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,kCAAsB,GAAG,IAAI,8CAAyB;AACtD,uBAAW,OAAO,CAAC,4BAAsB,EAAE,qBAAgB;AAC3D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,uCAAuC,CAAC,GAAG,MAAM,WAAM,EAAE,4BAAsB;IAC5F;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;kFAnB4B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,4BAAsB;AAC4B,6FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;oFAsBjI,UAA2B,EAAE,WAAe;AACrF,UAAO,KAAI,mEAA2B,CAAC,UAAU,EAAE,WAAW;EAChE;;;MAEkD,8DAA0B;YAAG,gBAAM,2CAA2C,CAAC,aAAa,sEAAkC,EAAE,8DAA0B;;MACtM,8DAA0B;YAAG;;MAC/B,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,oCAAiB,CAAC,yDAAiB,EAAE,8DAA0B;AACtE,IAAM,gCAAa;EACrB","file":"click_me2_component.template.ddc.js"}');
  // Exports:
  return {
    src__click_me2_component$46template: src__click_me2_component$46template
  };
});

//# sourceMappingURL=click_me2_component.template.ddc.js.map
