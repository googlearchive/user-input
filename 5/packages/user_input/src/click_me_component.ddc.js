define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__click_me_component = Object.create(_root);
  src__click_me_component.ClickMeComponent = class ClickMeComponent extends core.Object {
    get clickMessage() {
      return this[clickMessage];
    }
    set clickMessage(value) {
      this[clickMessage] = value;
    }
    onClickMe() {
      return this.clickMessage = 'You are my hero!';
    }
  };
  (src__click_me_component.ClickMeComponent.new = function() {
    this[clickMessage] = '';
  }).prototype = src__click_me_component.ClickMeComponent.prototype;
  dart.addTypeTests(src__click_me_component.ClickMeComponent);
  const clickMessage = Symbol("ClickMeComponent.clickMessage");
  dart.setMethodSignature(src__click_me_component.ClickMeComponent, () => ({
    __proto__: dart.getMethods(src__click_me_component.ClickMeComponent.__proto__),
    onClickMe: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__click_me_component.ClickMeComponent, () => ({
    __proto__: dart.getFields(src__click_me_component.ClickMeComponent.__proto__),
    clickMessage: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/user_input/src/click_me_component.ddc", {
    "package:user_input/src/click_me_component.dart": src__click_me_component
  }, '{"version":3,"sourceRoot":"","sources":["click_me_component.dart"],"names":[],"mappings":";;;;;;;;IAUS;;;;;;;YAEa,kBAAY,GAAG;IAAkB;;;IAF9C,kBAAY,GAAG;EAGxB","file":"click_me_component.ddc.js"}');
  // Exports:
  return {
    src__click_me_component: src__click_me_component
  };
});

//# sourceMappingURL=click_me_component.ddc.js.map
