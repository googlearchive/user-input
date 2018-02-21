// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'little_tour_component.dart';
export 'little_tour_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'little_tour_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';

const List<dynamic> styles$LittleTourComponent = const [];

class ViewLittleTourComponent0 extends AppView<import1.LittleTourComponent> {
  import2.InputElement _el_0;
  import2.ButtonElement _el_1;
  import2.UListElement _el_3;
  ViewContainer _appEl_4;
  import4.NgFor _NgFor_4_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewLittleTourComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('little-tour');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$LittleTourComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.LittleTourComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _el_1 = createAndAppend(doc, 'button', parentRenderNode);
    import2.Text _text_2 = new import2.Text('Add');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'ul', parentRenderNode);
    var _anchor_4 = ngAnchor.clone(false);
    _el_3.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_6 = new TemplateRef(_appEl_4, viewFactory_LittleTourComponent1);
    _NgFor_4_7 = new import4.NgFor(_appEl_4, _TemplateRef_4_6);
    import8.appViewUtils.eventManager.addEventListener(_el_0, 'keyup.enter', eventHandler1(_handle_keyup_enter_0_0));
    _el_0.addEventListener('blur', eventHandler1(_handle_blur_0_1));
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.LittleTourComponent _ctx = ctx;
    final currVal_0 = _ctx.heroes;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_4_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_4_7.ngDoCheck();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
  }

  void _handle_keyup_enter_0_0($event) {
    final local_newHero = _el_0;
    ctx.addHero(local_newHero.value);
  }

  void _handle_blur_0_1($event) {
    final local_newHero = _el_0;
    ctx.addHero(local_newHero.value);
    local_newHero.value = '';
  }

  void _handle_click_1_0($event) {
    final local_newHero = _el_0;
    ctx.addHero(local_newHero.value);
  }
}

AppView<import1.LittleTourComponent> viewFactory_LittleTourComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewLittleTourComponent0(parentView, parentIndex);
}

class _ViewLittleTourComponent1 extends AppView<import1.LittleTourComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewLittleTourComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewLittleTourComponent0._renderType;
  }
  @override
  ComponentRef<import1.LittleTourComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('li');
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final String local_hero = locals['\$implicit'];
    final currVal_0 = import8.interpolate0(local_hero);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.LittleTourComponent> viewFactory_LittleTourComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewLittleTourComponent1(parentView, parentIndex);
}

const List<dynamic> styles$LittleTourComponentHost = const [];

class _ViewLittleTourComponentHost0 extends AppView<dynamic> {
  ViewLittleTourComponent0 _compView_0;
  import1.LittleTourComponent _LittleTourComponent_0_4;
  _ViewLittleTourComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewLittleTourComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LittleTourComponent_0_4 = new import1.LittleTourComponent();
    _compView_0.create(_LittleTourComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.LittleTourComponent>(0, this, rootEl, _LittleTourComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.LittleTourComponent) && (0 == nodeIndex))) {
      return _LittleTourComponent_0_4;
    }
    return notFoundResult;
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

AppView viewFactory_LittleTourComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewLittleTourComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.LittleTourComponent> LittleTourComponentNgFactory = const ComponentFactory<import1.LittleTourComponent>('little-tour', viewFactory_LittleTourComponentHost0, _LittleTourComponentMetadata);
const _LittleTourComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(LittleTourComponent, LittleTourComponentNgFactory);
  _ref0.initReflector();
}
