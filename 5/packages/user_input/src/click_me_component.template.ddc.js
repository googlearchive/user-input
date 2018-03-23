define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/user_input/src/click_me_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, click_me_component, reflector, angular) {
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
  const src__click_me_component = click_me_component.src__click_me_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__click_me_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfClickMeComponent = () => (AppViewOfClickMeComponent = dart.constFn(src__core__linker__app_view.AppView$(src__click_me_component.ClickMeComponent)))();
  let AppViewAndintToAppViewOfClickMeComponent = () => (AppViewAndintToAppViewOfClickMeComponent = dart.constFn(dart.fnType(AppViewOfClickMeComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfClickMeComponent = () => (ComponentRefOfClickMeComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__click_me_component.ClickMeComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfClickMeComponent = () => (ComponentFactoryOfClickMeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__click_me_component.ClickMeComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__click_me_component$46template, {
    /*src__click_me_component$46template.styles$ClickMeComponent*/get styles$ClickMeComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__click_me_component$46template.ViewClickMeComponent0 = class ViewClickMeComponent0 extends src__core__linker__app_view.AppView$(src__click_me_component.ClickMeComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      let _text_1 = html.Text.new('Click me!');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      parentRenderNode[$append](this[_text_2]);
      this[_el_0][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'onClickMe')));
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
  (src__click_me_component$46template.ViewClickMeComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__click_me_component$46template.ViewClickMeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('click-me'));
    let t = src__click_me_component$46template.ViewClickMeComponent0._renderType;
    t == null ? src__click_me_component$46template.ViewClickMeComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__click_me_component$46template.styles$ClickMeComponent) : t;
    this.setupComponentType(src__click_me_component$46template.ViewClickMeComponent0._renderType);
  }).prototype = src__click_me_component$46template.ViewClickMeComponent0.prototype;
  dart.addTypeTests(src__click_me_component$46template.ViewClickMeComponent0);
  dart.setMethodSignature(src__click_me_component$46template.ViewClickMeComponent0, () => ({
    __proto__: dart.getMethods(src__click_me_component$46template.ViewClickMeComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__click_me_component.ClickMeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__click_me_component$46template.ViewClickMeComponent0, () => ({
    __proto__: dart.getFields(src__click_me_component$46template.ViewClickMeComponent0.__proto__),
    [_el_0]: dart.fieldType(html.ButtonElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__click_me_component$46template.ViewClickMeComponent0, {
    /*src__click_me_component$46template.ViewClickMeComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__click_me_component$46template.viewFactory_ClickMeComponent0 = function(parentView, parentIndex) {
    return new src__click_me_component$46template.ViewClickMeComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__click_me_component$46template.viewFactory_ClickMeComponent0, AppViewAndintToAppViewOfClickMeComponent());
  dart.defineLazy(src__click_me_component$46template, {
    /*src__click_me_component$46template.styles$ClickMeComponentHost*/get styles$ClickMeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ClickMeComponent_0_5 = Symbol('_ClickMeComponent_0_5');
  src__click_me_component$46template._ViewClickMeComponentHost0 = class _ViewClickMeComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__click_me_component$46template.ViewClickMeComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ClickMeComponent_0_5] = new src__click_me_component.ClickMeComponent.new();
      this[_compView_0].create(this[_ClickMeComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfClickMeComponent()).new(0, this, this.rootEl, this[_ClickMeComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__click_me_component$46template._ViewClickMeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ClickMeComponent_0_5] = null;
    src__click_me_component$46template._ViewClickMeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__click_me_component$46template._ViewClickMeComponentHost0.prototype;
  dart.addTypeTests(src__click_me_component$46template._ViewClickMeComponentHost0);
  dart.setMethodSignature(src__click_me_component$46template._ViewClickMeComponentHost0, () => ({
    __proto__: dart.getMethods(src__click_me_component$46template._ViewClickMeComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__click_me_component$46template._ViewClickMeComponentHost0, () => ({
    __proto__: dart.getFields(src__click_me_component$46template._ViewClickMeComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__click_me_component$46template.ViewClickMeComponent0),
    [_ClickMeComponent_0_5]: dart.fieldType(src__click_me_component.ClickMeComponent)
  }));
  src__click_me_component$46template.viewFactory_ClickMeComponentHost0 = function(parentView, parentIndex) {
    return new src__click_me_component$46template._ViewClickMeComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__click_me_component$46template.viewFactory_ClickMeComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__click_me_component$46template, {
    /*src__click_me_component$46template.ClickMeComponentNgFactory*/get ClickMeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfClickMeComponent()).new('click-me', src__click_me_component$46template.viewFactory_ClickMeComponentHost0, src__click_me_component$46template._ClickMeComponentMetadata));
    },
    /*src__click_me_component$46template._ClickMeComponentMetadata*/get _ClickMeComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__click_me_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__click_me_component$46template.initReflector = function() {
    if (dart.test(src__click_me_component$46template._visited)) {
      return;
    }
    src__click_me_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__click_me_component.ClickMeComponent), src__click_me_component$46template.ClickMeComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__click_me_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/user_input/src/click_me_component.template.ddc", {
    "package:user_input/src/click_me_component.template.dart": src__click_me_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["click_me_component.template.dart"],"names":[],"mappings":";;;;QAmCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;MATP,0DAAuB;YAAG;;;;;;;;;AAc1C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GADK,AACF,IADS,sBACT,2CAAe,CAAC,GAAG,EAAE,UAAU,gBAAgB;AACvD,UAAa,UAFH,AAEa,AAAI,IAFV,SAEsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAJG,AAIA,AAAI,IAJG,SAIS,CAAC;AAC3B,sBAAgB,SAAO,CAAC,aAAO;AAC/B,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CANnC,IAAO,kBAM6B,QAAG;AACjD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAA+B,OAAO,QAAG;AACzC,cAAmB,IAAI,aAAa;UAA9B,4BAAkC;AACxC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;2EA5BsB,UAA2B,EAAE,WAAe;IAJ5C,WAAK;IACd,aAAO;IAChB,aAAO;AAE2D,sFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,gFAAW;gBAAX,oEAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,0DAAuB;AACzG,2BAAkB,CAAC,oEAAW;EAChC;;;;;;;;;4BAKY,IAAO;8BAAP,IAAO;;;;MAVQ,oEAAW;;;;;8EAgCwB,UAA2B,EAAE,WAAe;AAC1G,UAAO,KAAI,4DAAqB,CAAC,UAAU,EAAE,WAAW;EAC1D;;;MAEoB,8DAA2B;YAAG;;;;;;;AAQ9C,uBAAW,GAAG,IAAI,4DAAqB,CAAC,MAAM;AAC9C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,iCAAqB,GAAG,IAAI,4CAAwB;AACpD,uBAAW,OAAO,CAAC,2BAAqB,EAAE,qBAAgB;AAC1D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,sCAAsC,CAAC,GAAG,MAAM,WAAM,EAAE,2BAAqB;IAC1F;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;gFAnB2B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,2BAAqB;AAC6B,2FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;kFAsBjI,UAA2B,EAAE,WAAe;AACpF,UAAO,KAAI,iEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEiD,4DAAyB;YAAG,gBAAM,0CAA0C,CAAC,YAAY,oEAAiC,EAAE,4DAAyB;;MAChM,4DAAyB;YAAG;;MAC9B,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAO,oCAAiB,CAAC,uDAAgB,EAAE,4DAAyB;AACpE,IAAM,gCAAa;EACrB","file":"click_me_component.template.ddc.js"}');
  // Exports:
  return {
    src__click_me_component$46template: src__click_me_component$46template
  };
});

//# sourceMappingURL=click_me_component.template.ddc.js.map
