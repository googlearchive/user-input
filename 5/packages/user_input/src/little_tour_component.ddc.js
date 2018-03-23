define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__little_tour_component = Object.create(_root);
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__little_tour_component.LittleTourComponent = class LittleTourComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    addHero(newHero) {
      if (dart.notNull(newHero == null ? null : newHero.length) > 0) {
        this.heroes[$add](newHero);
      }
    }
  };
  (src__little_tour_component.LittleTourComponent.new = function() {
    this[heroes] = JSArrayOfString().of(['Windstorm', 'Bombasto', 'Magneta', 'Tornado']);
  }).prototype = src__little_tour_component.LittleTourComponent.prototype;
  dart.addTypeTests(src__little_tour_component.LittleTourComponent);
  const heroes = Symbol("LittleTourComponent.heroes");
  dart.setMethodSignature(src__little_tour_component.LittleTourComponent, () => ({
    __proto__: dart.getMethods(src__little_tour_component.LittleTourComponent.__proto__),
    addHero: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__little_tour_component.LittleTourComponent, () => ({
    __proto__: dart.getFields(src__little_tour_component.LittleTourComponent.__proto__),
    heroes: dart.fieldType(ListOfString())
  }));
  dart.trackLibraries("packages/user_input/src/little_tour_component.ddc", {
    "package:user_input/src/little_tour_component.dart": src__little_tour_component
  }, '{"version":3,"sourceRoot":"","sources":["little_tour_component.dart"],"names":[],"mappings":";;;;;;;;;;;;IAgBe;;;;;;YAEA,OAAc;AACzB,UAAoB,aAAhB,OAAO,kBAAP,OAAO,OAAQ,IAAG,GAAG;AACvB,mBAAM,MAAI,CAAC,OAAO;;IAEtB;;;IANa,YAAM,GAAG,sBAAC,aAAa,YAAY,WAAW;EAO7D","file":"little_tour_component.ddc.js"}');
  // Exports:
  return {
    src__little_tour_component: src__little_tour_component
  };
});

//# sourceMappingURL=little_tour_component.ddc.js.map
