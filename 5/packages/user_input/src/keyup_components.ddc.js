define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__keyup_components = Object.create(_root);
  const $target = dartx.target;
  src__keyup_components.KeyUp1Component_untyped = class KeyUp1Component_untyped extends core.Object {
    get values() {
      return this[values];
    }
    set values(value) {
      this[values] = value;
    }
    onKey(event) {
      this.values = dart.notNull(this.values) + dart.notNull(core.String._check(dart.dsend(dart.dload(dart.dload(event, 'target'), 'value'), '+', ' | ')));
    }
  };
  (src__keyup_components.KeyUp1Component_untyped.new = function() {
    this[values] = '';
  }).prototype = src__keyup_components.KeyUp1Component_untyped.prototype;
  dart.addTypeTests(src__keyup_components.KeyUp1Component_untyped);
  const values = Symbol("KeyUp1Component_untyped.values");
  dart.setMethodSignature(src__keyup_components.KeyUp1Component_untyped, () => ({
    __proto__: dart.getMethods(src__keyup_components.KeyUp1Component_untyped.__proto__),
    onKey: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__keyup_components.KeyUp1Component_untyped, () => ({
    __proto__: dart.getFields(src__keyup_components.KeyUp1Component_untyped.__proto__),
    values: dart.fieldType(core.String)
  }));
  src__keyup_components.KeyUp1Component = class KeyUp1Component extends core.Object {
    get values() {
      return this[values$];
    }
    set values(value) {
      this[values$] = value;
    }
    onKey(event) {
      let el = html.InputElement._check(event[$target]);
      this.values = dart.notNull(this.values) + dart.str`${el.value}  | `;
    }
  };
  (src__keyup_components.KeyUp1Component.new = function() {
    this[values$] = '';
  }).prototype = src__keyup_components.KeyUp1Component.prototype;
  dart.addTypeTests(src__keyup_components.KeyUp1Component);
  const values$ = Symbol("KeyUp1Component.values");
  dart.setMethodSignature(src__keyup_components.KeyUp1Component, () => ({
    __proto__: dart.getMethods(src__keyup_components.KeyUp1Component.__proto__),
    onKey: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setFieldSignature(src__keyup_components.KeyUp1Component, () => ({
    __proto__: dart.getFields(src__keyup_components.KeyUp1Component.__proto__),
    values: dart.fieldType(core.String)
  }));
  src__keyup_components.KeyUp2Component = class KeyUp2Component extends core.Object {
    get values() {
      return this[values$0];
    }
    set values(value) {
      this[values$0] = value;
    }
    onKey(value) {
      return this.values = dart.notNull(this.values) + dart.str`${value} | `;
    }
  };
  (src__keyup_components.KeyUp2Component.new = function() {
    this[values$0] = '';
  }).prototype = src__keyup_components.KeyUp2Component.prototype;
  dart.addTypeTests(src__keyup_components.KeyUp2Component);
  const values$0 = Symbol("KeyUp2Component.values");
  dart.setMethodSignature(src__keyup_components.KeyUp2Component, () => ({
    __proto__: dart.getMethods(src__keyup_components.KeyUp2Component.__proto__),
    onKey: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__keyup_components.KeyUp2Component, () => ({
    __proto__: dart.getFields(src__keyup_components.KeyUp2Component.__proto__),
    values: dart.fieldType(core.String)
  }));
  src__keyup_components.KeyUp3Component = class KeyUp3Component extends core.Object {
    get values() {
      return this[values$1];
    }
    set values(value) {
      this[values$1] = value;
    }
  };
  (src__keyup_components.KeyUp3Component.new = function() {
    this[values$1] = '';
  }).prototype = src__keyup_components.KeyUp3Component.prototype;
  dart.addTypeTests(src__keyup_components.KeyUp3Component);
  const values$1 = Symbol("KeyUp3Component.values");
  dart.setFieldSignature(src__keyup_components.KeyUp3Component, () => ({
    __proto__: dart.getFields(src__keyup_components.KeyUp3Component.__proto__),
    values: dart.fieldType(core.String)
  }));
  src__keyup_components.KeyUp4Component = class KeyUp4Component extends core.Object {
    get values() {
      return this[values$2];
    }
    set values(value) {
      this[values$2] = value;
    }
  };
  (src__keyup_components.KeyUp4Component.new = function() {
    this[values$2] = '';
  }).prototype = src__keyup_components.KeyUp4Component.prototype;
  dart.addTypeTests(src__keyup_components.KeyUp4Component);
  const values$2 = Symbol("KeyUp4Component.values");
  dart.setFieldSignature(src__keyup_components.KeyUp4Component, () => ({
    __proto__: dart.getFields(src__keyup_components.KeyUp4Component.__proto__),
    values: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/user_input/src/keyup_components.ddc", {
    "package:user_input/src/keyup_components.dart": src__keyup_components
  }, '{"version":3,"sourceRoot":"","sources":["keyup_components.dart"],"names":[],"mappings":";;;;;;;;;;IAYS;;;;;;UAEI,KAAa;AACtB,iBAAM,GAfV,aAeI,WAAM,iBAAI,mBAAmB,iCAAnB,KAAK,4BAAgB;IACjC;;;IAJO,YAAM,GAAG;EAKlB;;;;;;;;;;;;IAUS;;;;;;UAEI,KAAmB;AAC5B,UAAa,8BAAK,KAAK,SAAO;AAC9B,iBAAM,GA/BV,aA+BI,WAAM,IAAI,WAAG,EAAE,MAAM;IACvB;;;IALO,aAAM,GAAG;EAMlB;;;;;;;;;;;;IAUS;;;;;;UACI,KAAK;wBAAW,GA5C7B,aA4CuB,WAAM,IAAI,WAAE,KAAK;IAAI;;;IADnC,cAAM,GAAG;EAElB;;;;;;;;;;;;IAUS;;;;;;;;kBAAM,GAAG;EAClB;;;;;;;;IAYS;;;;;;;;kBAAM,GAAG;EAClB","file":"keyup_components.ddc.js"}');
  // Exports:
  return {
    src__keyup_components: src__keyup_components
  };
});

//# sourceMappingURL=keyup_components.ddc.js.map
