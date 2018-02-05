// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'click_me2_component.dart';
export 'click_me2_component.dart';
import 'package:angular/angular.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

import 'package:angular/src/core/linker/app_view.dart';
import 'click_me2_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$ClickMe2Component = const [];

class ViewClickMe2Component0 extends AppView<import1.ClickMe2Component> {
  import2.ButtonElement _el_0;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewClickMe2Component0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('click-me2');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ClickMe2Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ClickMe2Component> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'button', parentRenderNode);
    import2.Text _text_1 = new import2.Text('No! .. Click me!');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    parentRenderNode.append(_text_2);
    _el_0.addEventListener('click', eventHandler1(ctx.onClickMe2));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ClickMe2Component _ctx = ctx;
    final currVal_0 = (_ctx.clickMessage ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ClickMe2Component> viewFactory_ClickMe2Component0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewClickMe2Component0(parentView, parentIndex);
}

const List<dynamic> styles$ClickMe2ComponentHost = const [];

class _ViewClickMe2ComponentHost0 extends AppView<dynamic> {
  ViewClickMe2Component0 _compView_0;
  import1.ClickMe2Component _ClickMe2Component_0_4;
  _ViewClickMe2ComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewClickMe2Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _ClickMe2Component_0_4 = new import1.ClickMe2Component();
    _compView_0.create(_ClickMe2Component_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ClickMe2Component>(0, this, rootEl, _ClickMe2Component_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.ClickMe2Component) && (0 == nodeIndex))) {
      return _ClickMe2Component_0_4;
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

AppView viewFactory_ClickMe2ComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewClickMe2ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ClickMe2Component> ClickMe2ComponentNgFactory = const ComponentFactory<import1.ClickMe2Component>('click-me2', viewFactory_ClickMe2ComponentHost0, _ClickMe2ComponentMetadata);
const _ClickMe2ComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ngRef.registerComponent(
    ClickMe2Component,
    ClickMe2ComponentNgFactory,
  );
}
