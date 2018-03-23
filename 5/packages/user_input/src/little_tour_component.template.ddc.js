define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/user_input/src/little_tour_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, little_tour_component, reflector, angular) {
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
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__little_tour_component = little_tour_component.src__little_tour_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__little_tour_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfLittleTourComponent = () => (AppViewOfLittleTourComponent = dart.constFn(src__core__linker__app_view.AppView$(src__little_tour_component.LittleTourComponent)))();
  let AppViewAndintToAppViewOfLittleTourComponent = () => (AppViewAndintToAppViewOfLittleTourComponent = dart.constFn(dart.fnType(AppViewOfLittleTourComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfLittleTourComponent = () => (ComponentRefOfLittleTourComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__little_tour_component.LittleTourComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfLittleTourComponent = () => (ComponentFactoryOfLittleTourComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__little_tour_component.LittleTourComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__little_tour_component$46template, {
    /*src__little_tour_component$46template.styles$LittleTourComponent*/get styles$LittleTourComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgFor_4_9 = Symbol('_NgFor_4_9');
  const _expr_0 = Symbol('_expr_0');
  const _handle_keyup_enter_0_0 = Symbol('_handle_keyup_enter_0_0');
  const _handle_blur_0_1 = Symbol('_handle_blur_0_1');
  const _handle_click_1_0 = Symbol('_handle_click_1_0');
  let const$;
  src__little_tour_component$46template.ViewLittleTourComponent0 = class ViewLittleTourComponent0 extends src__core__linker__app_view.AppView$(src__little_tour_component.LittleTourComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', parentRenderNode));
      this[_el_1] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      let _text_2 = html.Text.new('Add');
      this[_el_1][$append](_text_2);
      this[_el_3] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_3][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], src__little_tour_component$46template.viewFactory_LittleTourComponent1);
      this[_NgFor_4_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_4], _TemplateRef_4_8);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(this[_el_0], 'keyup.enter', this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_keyup_enter_0_0)));
      this[_el_0][$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_1)));
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_4_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_4_9].ngDoCheck();
      this[_appEl_4].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_keyup_enter_0_0]($event) {
      let local_newHero = this[_el_0];
      this.ctx.addHero(local_newHero.value);
    }
    [_handle_blur_0_1]($event) {
      let local_newHero = this[_el_0];
      this.ctx.addHero(local_newHero.value);
      local_newHero.value = '';
    }
    [_handle_click_1_0]($event) {
      let local_newHero = this[_el_0];
      this.ctx.addHero(local_newHero.value);
    }
  };
  (src__little_tour_component$46template.ViewLittleTourComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_appEl_4] = null;
    this[_NgFor_4_9] = null;
    this[_expr_0] = null;
    src__little_tour_component$46template.ViewLittleTourComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('little-tour'));
    let t = src__little_tour_component$46template.ViewLittleTourComponent0._renderType;
    t == null ? src__little_tour_component$46template.ViewLittleTourComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__little_tour_component$46template.styles$LittleTourComponent) : t;
    this.setupComponentType(src__little_tour_component$46template.ViewLittleTourComponent0._renderType);
  }).prototype = src__little_tour_component$46template.ViewLittleTourComponent0.prototype;
  dart.addTypeTests(src__little_tour_component$46template.ViewLittleTourComponent0);
  dart.setMethodSignature(src__little_tour_component$46template.ViewLittleTourComponent0, () => ({
    __proto__: dart.getMethods(src__little_tour_component$46template.ViewLittleTourComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__little_tour_component.LittleTourComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_keyup_enter_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__little_tour_component$46template.ViewLittleTourComponent0, () => ({
    __proto__: dart.getFields(src__little_tour_component$46template.ViewLittleTourComponent0.__proto__),
    [_el_0]: dart.fieldType(html.InputElement),
    [_el_1]: dart.fieldType(html.ButtonElement),
    [_el_3]: dart.fieldType(html.UListElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_4_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__little_tour_component$46template.ViewLittleTourComponent0, {
    /*src__little_tour_component$46template.ViewLittleTourComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__little_tour_component$46template.viewFactory_LittleTourComponent0 = function(parentView, parentIndex) {
    return new src__little_tour_component$46template.ViewLittleTourComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__little_tour_component$46template.viewFactory_LittleTourComponent0, AppViewAndintToAppViewOfLittleTourComponent());
  const _text_1 = Symbol('_text_1');
  src__little_tour_component$46template._ViewLittleTourComponent1 = class _ViewLittleTourComponent1 extends src__core__linker__app_view.AppView$(src__little_tour_component.LittleTourComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__little_tour_component$46template._ViewLittleTourComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__little_tour_component$46template._ViewLittleTourComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__little_tour_component$46template.ViewLittleTourComponent0._renderType;
  }).prototype = src__little_tour_component$46template._ViewLittleTourComponent1.prototype;
  dart.addTypeTests(src__little_tour_component$46template._ViewLittleTourComponent1);
  dart.setMethodSignature(src__little_tour_component$46template._ViewLittleTourComponent1, () => ({
    __proto__: dart.getMethods(src__little_tour_component$46template._ViewLittleTourComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__little_tour_component.LittleTourComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__little_tour_component$46template._ViewLittleTourComponent1, () => ({
    __proto__: dart.getFields(src__little_tour_component$46template._ViewLittleTourComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__little_tour_component$46template.viewFactory_LittleTourComponent1 = function(parentView, parentIndex) {
    return new src__little_tour_component$46template._ViewLittleTourComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__little_tour_component$46template.viewFactory_LittleTourComponent1, AppViewAndintToAppViewOfLittleTourComponent());
  dart.defineLazy(src__little_tour_component$46template, {
    /*src__little_tour_component$46template.styles$LittleTourComponentHost*/get styles$LittleTourComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _LittleTourComponent_0_5 = Symbol('_LittleTourComponent_0_5');
  src__little_tour_component$46template._ViewLittleTourComponentHost0 = class _ViewLittleTourComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__little_tour_component$46template.ViewLittleTourComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LittleTourComponent_0_5] = new src__little_tour_component.LittleTourComponent.new();
      this[_compView_0].create(this[_LittleTourComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfLittleTourComponent()).new(0, this, this.rootEl, this[_LittleTourComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__little_tour_component$46template._ViewLittleTourComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LittleTourComponent_0_5] = null;
    src__little_tour_component$46template._ViewLittleTourComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__little_tour_component$46template._ViewLittleTourComponentHost0.prototype;
  dart.addTypeTests(src__little_tour_component$46template._ViewLittleTourComponentHost0);
  dart.setMethodSignature(src__little_tour_component$46template._ViewLittleTourComponentHost0, () => ({
    __proto__: dart.getMethods(src__little_tour_component$46template._ViewLittleTourComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__little_tour_component$46template._ViewLittleTourComponentHost0, () => ({
    __proto__: dart.getFields(src__little_tour_component$46template._ViewLittleTourComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__little_tour_component$46template.ViewLittleTourComponent0),
    [_LittleTourComponent_0_5]: dart.fieldType(src__little_tour_component.LittleTourComponent)
  }));
  src__little_tour_component$46template.viewFactory_LittleTourComponentHost0 = function(parentView, parentIndex) {
    return new src__little_tour_component$46template._ViewLittleTourComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__little_tour_component$46template.viewFactory_LittleTourComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__little_tour_component$46template, {
    /*src__little_tour_component$46template.LittleTourComponentNgFactory*/get LittleTourComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfLittleTourComponent()).new('little-tour', src__little_tour_component$46template.viewFactory_LittleTourComponentHost0, src__little_tour_component$46template._LittleTourComponentMetadata));
    },
    /*src__little_tour_component$46template._LittleTourComponentMetadata*/get _LittleTourComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__little_tour_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__little_tour_component$46template.initReflector = function() {
    if (dart.test(src__little_tour_component$46template._visited)) {
      return;
    }
    src__little_tour_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__little_tour_component.LittleTourComponent), src__little_tour_component$46template.LittleTourComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__little_tour_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/user_input/src/little_tour_component.template.ddc", {
    "package:user_input/src/little_tour_component.template.dart": src__little_tour_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["little_tour_component.template.dart"],"names":[],"mappings":"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","file":"little_tour_component.template.ddc.js"}');
  // Exports:
  return {
    src__little_tour_component$46template: src__little_tour_component$46template
  };
});

//# sourceMappingURL=little_tour_component.template.ddc.js.map
