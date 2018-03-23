define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__click_me2_component = Object.create(_root);
  const _clicks = Symbol('_clicks');
  src__click_me2_component.ClickMe2Component = class ClickMe2Component extends core.Object {
    get clickMessage() {
      return this[clickMessage];
    }
    set clickMessage(value) {
      this[clickMessage] = value;
    }
    onClickMe2(event) {
      let evtMsg = event != null ? ' Event target is ' + dart.notNull(core.String._check(dart.dload(dart.dload(event, 'target'), 'tagName'))) : '';
      this.clickMessage = dart.str`Click #${(() => {
        let x = this[_clicks];
        this[_clicks] = dart.notNull(x) + 1;
        return x;
      })()}. ${evtMsg}`;
    }
  };
  (src__click_me2_component.ClickMe2Component.new = function() {
    this[clickMessage] = '';
    this[_clicks] = 1;
  }).prototype = src__click_me2_component.ClickMe2Component.prototype;
  dart.addTypeTests(src__click_me2_component.ClickMe2Component);
  const clickMessage = Symbol("ClickMe2Component.clickMessage");
  dart.setMethodSignature(src__click_me2_component.ClickMe2Component, () => ({
    __proto__: dart.getMethods(src__click_me2_component.ClickMe2Component.__proto__),
    onClickMe2: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__click_me2_component.ClickMe2Component, () => ({
    __proto__: dart.getFields(src__click_me2_component.ClickMe2Component.__proto__),
    clickMessage: dart.fieldType(core.String),
    [_clicks]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/user_input/src/click_me2_component.ddc", {
    "package:user_input/src/click_me2_component.dart": src__click_me2_component
  }, '{"version":3,"sourceRoot":"","sources":["click_me2_component.dart"],"names":[],"mappings":";;;;;;;;;IAUS;;;;;;eAGS,KAAa;AAC3B,UAAI,SACA,KAAK,IAAI,OAAO,AAAoB,4EAAE,KAAK,4BAAkB;AACjE,uBAAY,GAAI;gBAAU,aAAO;0CAhBrC;;eAgB4C,MAAM;IAChD;;;IAPO,kBAAY,GAAG;IAClB,aAAO,GAAG;EAOhB","file":"click_me2_component.ddc.js"}');
  // Exports:
  return {
    src__click_me2_component: src__click_me2_component
  };
});

//# sourceMappingURL=click_me2_component.ddc.js.map
