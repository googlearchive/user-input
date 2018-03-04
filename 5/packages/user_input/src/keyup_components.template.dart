// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'keyup_components.dart';
export 'keyup_components.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'keyup_components.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$KeyUp1Component_untyped = const [];

class ViewKeyUp1Component_untyped0 extends AppView<import1.KeyUp1Component_untyped> {
  import2.InputElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewKeyUp1Component_untyped0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('key-up1-untyped');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$KeyUp1Component_untyped);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.KeyUp1Component_untyped> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _el_1 = createAndAppend(doc, 'p', parentRenderNode);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    _el_0.addEventListener('keyup', eventHandler1(ctx.onKey));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.KeyUp1Component_untyped _ctx = ctx;
    final currVal_0 = (_ctx.values ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.KeyUp1Component_untyped> viewFactory_KeyUp1Component_untyped0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewKeyUp1Component_untyped0(parentView, parentIndex);
}

const List<dynamic> styles$KeyUp1Component_untypedHost = const [];

class _ViewKeyUp1Component_untypedHost0 extends AppView<dynamic> {
  ViewKeyUp1Component_untyped0 _compView_0;
  import1.KeyUp1Component_untyped _KeyUp1Component_untyped_0_5;
  _ViewKeyUp1Component_untypedHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewKeyUp1Component_untyped0(this, 0);
    rootEl = _compView_0.rootEl;
    _KeyUp1Component_untyped_0_5 = new import1.KeyUp1Component_untyped();
    _compView_0.create(_KeyUp1Component_untyped_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.KeyUp1Component_untyped>(0, this, rootEl, _KeyUp1Component_untyped_0_5);
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

AppView viewFactory_KeyUp1Component_untypedHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewKeyUp1Component_untypedHost0(parentView, parentIndex);
}

const ComponentFactory<import1.KeyUp1Component_untyped> KeyUp1Component_untypedNgFactory = const ComponentFactory<import1.KeyUp1Component_untyped>('key-up1-untyped', viewFactory_KeyUp1Component_untypedHost0, _KeyUp1Component_untypedMetadata);
const List<dynamic> styles$KeyUp1Component = const [];

class ViewKeyUp1Component0 extends AppView<import1.KeyUp1Component> {
  import2.InputElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewKeyUp1Component0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('key-up1');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$KeyUp1Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.KeyUp1Component> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _el_1 = createAndAppend(doc, 'p', parentRenderNode);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    _el_0.addEventListener('keyup', eventHandler1(ctx.onKey));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.KeyUp1Component _ctx = ctx;
    final currVal_0 = (_ctx.values ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.KeyUp1Component> viewFactory_KeyUp1Component0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewKeyUp1Component0(parentView, parentIndex);
}

const List<dynamic> styles$KeyUp1ComponentHost = const [];

class _ViewKeyUp1ComponentHost0 extends AppView<dynamic> {
  ViewKeyUp1Component0 _compView_0;
  import1.KeyUp1Component _KeyUp1Component_0_5;
  _ViewKeyUp1ComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewKeyUp1Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _KeyUp1Component_0_5 = new import1.KeyUp1Component();
    _compView_0.create(_KeyUp1Component_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.KeyUp1Component>(0, this, rootEl, _KeyUp1Component_0_5);
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

AppView viewFactory_KeyUp1ComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewKeyUp1ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.KeyUp1Component> KeyUp1ComponentNgFactory = const ComponentFactory<import1.KeyUp1Component>('key-up1', viewFactory_KeyUp1ComponentHost0, _KeyUp1ComponentMetadata);
const List<dynamic> styles$KeyUp2Component = const [];

class ViewKeyUp2Component0 extends AppView<import1.KeyUp2Component> {
  import2.InputElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewKeyUp2Component0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('key-up2');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$KeyUp2Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.KeyUp2Component> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _el_1 = createAndAppend(doc, 'p', parentRenderNode);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    _el_0.addEventListener('keyup', eventHandler1(_handle_keyup_0_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.KeyUp2Component _ctx = ctx;
    final currVal_0 = (_ctx.values ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_keyup_0_0($event) {
    final local_box = _el_0;
    ctx.onKey(local_box.value);
  }
}

AppView<import1.KeyUp2Component> viewFactory_KeyUp2Component0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewKeyUp2Component0(parentView, parentIndex);
}

const List<dynamic> styles$KeyUp2ComponentHost = const [];

class _ViewKeyUp2ComponentHost0 extends AppView<dynamic> {
  ViewKeyUp2Component0 _compView_0;
  import1.KeyUp2Component _KeyUp2Component_0_5;
  _ViewKeyUp2ComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewKeyUp2Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _KeyUp2Component_0_5 = new import1.KeyUp2Component();
    _compView_0.create(_KeyUp2Component_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.KeyUp2Component>(0, this, rootEl, _KeyUp2Component_0_5);
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

AppView viewFactory_KeyUp2ComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewKeyUp2ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.KeyUp2Component> KeyUp2ComponentNgFactory = const ComponentFactory<import1.KeyUp2Component>('key-up2', viewFactory_KeyUp2ComponentHost0, _KeyUp2ComponentMetadata);
const List<dynamic> styles$KeyUp3Component = const [];

class ViewKeyUp3Component0 extends AppView<import1.KeyUp3Component> {
  import2.InputElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewKeyUp3Component0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('key-up3');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$KeyUp3Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.KeyUp3Component> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _el_1 = createAndAppend(doc, 'p', parentRenderNode);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    import6.appViewUtils.eventManager.addEventListener(_el_0, 'keyup.enter', eventHandler1(_handle_keyup_enter_0_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.KeyUp3Component _ctx = ctx;
    final currVal_0 = (_ctx.values ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_keyup_enter_0_0($event) {
    final local_box = _el_0;
    ctx.values = local_box.value;
  }
}

AppView<import1.KeyUp3Component> viewFactory_KeyUp3Component0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewKeyUp3Component0(parentView, parentIndex);
}

const List<dynamic> styles$KeyUp3ComponentHost = const [];

class _ViewKeyUp3ComponentHost0 extends AppView<dynamic> {
  ViewKeyUp3Component0 _compView_0;
  import1.KeyUp3Component _KeyUp3Component_0_5;
  _ViewKeyUp3ComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewKeyUp3Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _KeyUp3Component_0_5 = new import1.KeyUp3Component();
    _compView_0.create(_KeyUp3Component_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.KeyUp3Component>(0, this, rootEl, _KeyUp3Component_0_5);
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

AppView viewFactory_KeyUp3ComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewKeyUp3ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.KeyUp3Component> KeyUp3ComponentNgFactory = const ComponentFactory<import1.KeyUp3Component>('key-up3', viewFactory_KeyUp3ComponentHost0, _KeyUp3ComponentMetadata);
const List<dynamic> styles$KeyUp4Component = const [];

class ViewKeyUp4Component0 extends AppView<import1.KeyUp4Component> {
  import2.InputElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewKeyUp4Component0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('key-up4');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$KeyUp4Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.KeyUp4Component> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _el_1 = createAndAppend(doc, 'p', parentRenderNode);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    import6.appViewUtils.eventManager.addEventListener(_el_0, 'keyup.enter', eventHandler1(_handle_keyup_enter_0_0));
    _el_0.addEventListener('blur', eventHandler1(_handle_blur_0_1));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.KeyUp4Component _ctx = ctx;
    final currVal_0 = (_ctx.values ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_keyup_enter_0_0($event) {
    final local_box = _el_0;
    ctx.values = local_box.value;
  }

  void _handle_blur_0_1($event) {
    final local_box = _el_0;
    ctx.values = local_box.value;
  }
}

AppView<import1.KeyUp4Component> viewFactory_KeyUp4Component0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewKeyUp4Component0(parentView, parentIndex);
}

const List<dynamic> styles$KeyUp4ComponentHost = const [];

class _ViewKeyUp4ComponentHost0 extends AppView<dynamic> {
  ViewKeyUp4Component0 _compView_0;
  import1.KeyUp4Component _KeyUp4Component_0_5;
  _ViewKeyUp4ComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewKeyUp4Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _KeyUp4Component_0_5 = new import1.KeyUp4Component();
    _compView_0.create(_KeyUp4Component_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.KeyUp4Component>(0, this, rootEl, _KeyUp4Component_0_5);
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

AppView viewFactory_KeyUp4ComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewKeyUp4ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.KeyUp4Component> KeyUp4ComponentNgFactory = const ComponentFactory<import1.KeyUp4Component>('key-up4', viewFactory_KeyUp4ComponentHost0, _KeyUp4ComponentMetadata);
const _KeyUp1Component_untypedMetadata = const [];
const _KeyUp1ComponentMetadata = const [];
const _KeyUp2ComponentMetadata = const [];
const _KeyUp3ComponentMetadata = const [];
const _KeyUp4ComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(KeyUp1Component_untyped, KeyUp1Component_untypedNgFactory);
  _ngRef.registerComponent(KeyUp1Component, KeyUp1ComponentNgFactory);
  _ngRef.registerComponent(KeyUp2Component, KeyUp2ComponentNgFactory);
  _ngRef.registerComponent(KeyUp3Component, KeyUp3ComponentNgFactory);
  _ngRef.registerComponent(KeyUp4Component, KeyUp4ComponentNgFactory);
  _ref0.initReflector();
}
