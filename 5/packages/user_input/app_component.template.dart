// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/click_me_component.dart';
import 'src/click_me2_component.dart';
import 'src/keyup_components.dart';
import 'src/little_tour_component.dart';
import 'src/loop_back_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/click_me2_component.template.dart' as _ref1;
import 'src/click_me_component.template.dart' as _ref2;
import 'src/keyup_components.template.dart' as _ref3;
import 'src/little_tour_component.template.dart' as _ref4;
import 'src/loop_back_component.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/click_me_component.template.dart' as import3;
import 'src/click_me_component.dart' as import4;
import 'src/click_me2_component.template.dart' as import5;
import 'src/click_me2_component.dart' as import6;
import 'src/keyup_components.template.dart' as import7;
import 'src/keyup_components.dart' as import8;
import 'src/loop_back_component.template.dart' as import9;
import 'src/loop_back_component.dart' as import10;
import 'src/little_tour_component.template.dart' as import11;
import 'src/little_tour_component.dart' as import12;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/angular.dart';

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import2.Element _el_1;
  import3.ViewClickMeComponent0 _compView_1;
  import4.ClickMeComponent _ClickMeComponent_1_5;
  import2.Element _el_2;
  import2.Element _el_3;
  import5.ViewClickMe2Component0 _compView_3;
  import6.ClickMe2Component _ClickMe2Component_3_5;
  import2.Element _el_4;
  import2.Element _el_6;
  import7.ViewKeyUp1Component0 _compView_6;
  import8.KeyUp1Component _KeyUp1Component_6_5;
  import2.Element _el_7;
  import2.Element _el_9;
  import9.ViewLoopBackComponent0 _compView_9;
  import10.LoopBackComponent _LoopBackComponent_9_5;
  import2.Element _el_10;
  import2.Element _el_12;
  import7.ViewKeyUp2Component0 _compView_12;
  import8.KeyUp2Component _KeyUp2Component_12_5;
  import2.Element _el_13;
  import2.Element _el_15;
  import7.ViewKeyUp3Component0 _compView_15;
  import8.KeyUp3Component _KeyUp3Component_15_5;
  import2.Element _el_16;
  import2.Element _el_18;
  import7.ViewKeyUp4Component0 _compView_18;
  import8.KeyUp4Component _KeyUp4Component_18_5;
  import2.Element _el_19;
  import2.Element _el_21;
  import2.Element _el_22;
  import2.Element _el_24;
  import11.ViewLittleTourComponent0 _compView_24;
  import12.LittleTourComponent _LittleTourComponent_24_5;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import14.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import16.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    _compView_1 = new import3.ViewClickMeComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _ClickMeComponent_1_5 = new import4.ClickMeComponent();
    _compView_1.create(_ClickMeComponent_1_5, []);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    _compView_3 = new import5.ViewClickMe2Component0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    _ClickMe2Component_3_5 = new import6.ClickMe2Component();
    _compView_3.create(_ClickMe2Component_3_5, []);
    _el_4 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_5 = new import2.Text('Give me some keys!');
    _el_4.append(_text_5);
    _compView_6 = new import7.ViewKeyUp1Component0(this, 6);
    _el_6 = _compView_6.rootEl;
    parentRenderNode.append(_el_6);
    _KeyUp1Component_6_5 = new import8.KeyUp1Component();
    _compView_6.create(_KeyUp1Component_6_5, []);
    _el_7 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_8 = new import2.Text('keyup loop-back component');
    _el_7.append(_text_8);
    _compView_9 = new import9.ViewLoopBackComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    parentRenderNode.append(_el_9);
    _LoopBackComponent_9_5 = new import10.LoopBackComponent();
    _compView_9.create(_LoopBackComponent_9_5, []);
    _el_10 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_11 = new import2.Text('Give me some more keys!');
    _el_10.append(_text_11);
    _compView_12 = new import7.ViewKeyUp2Component0(this, 12);
    _el_12 = _compView_12.rootEl;
    parentRenderNode.append(_el_12);
    _KeyUp2Component_12_5 = new import8.KeyUp2Component();
    _compView_12.create(_KeyUp2Component_12_5, []);
    _el_13 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_14 = new import2.Text('Type away! Press [Enter] when done.');
    _el_13.append(_text_14);
    _compView_15 = new import7.ViewKeyUp3Component0(this, 15);
    _el_15 = _compView_15.rootEl;
    parentRenderNode.append(_el_15);
    _KeyUp3Component_15_5 = new import8.KeyUp3Component();
    _compView_15.create(_KeyUp3Component_15_5, []);
    _el_16 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_17 = new import2.Text('Type away! Press [Enter] or click elsewhere when done.');
    _el_16.append(_text_17);
    _compView_18 = new import7.ViewKeyUp4Component0(this, 18);
    _el_18 = _compView_18.rootEl;
    parentRenderNode.append(_el_18);
    _KeyUp4Component_18_5 = new import8.KeyUp4Component();
    _compView_18.create(_KeyUp4Component_18_5, []);
    _el_19 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_20 = new import2.Text('Little Tour of Heroes');
    _el_19.append(_text_20);
    _el_21 = createAndAppend(doc, 'p', parentRenderNode);
    _el_22 = createAndAppend(doc, 'i', _el_21);
    import2.Text _text_23 = new import2.Text('Add a new hero');
    _el_22.append(_text_23);
    _compView_24 = new import11.ViewLittleTourComponent0(this, 24);
    _el_24 = _compView_24.rootEl;
    parentRenderNode.append(_el_24);
    _LittleTourComponent_24_5 = new import12.LittleTourComponent();
    _compView_24.create(_LittleTourComponent_24_5, []);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    _compView_6.detectChanges();
    _compView_9.detectChanges();
    _compView_12.detectChanges();
    _compView_15.detectChanges();
    _compView_18.detectChanges();
    _compView_24.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _compView_3?.destroy();
    _compView_6?.destroy();
    _compView_9?.destroy();
    _compView_12?.destroy();
    _compView_15?.destroy();
    _compView_18?.destroy();
    _compView_24?.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import14.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = new import1.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
