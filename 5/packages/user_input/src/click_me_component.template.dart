// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'click_me_component.dart';
export 'click_me_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'click_me_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$ClickMeComponent = const [];

class ViewClickMeComponent0 extends AppView<import1.ClickMeComponent> {
  import2.ButtonElement _el_0;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewClickMeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('click-me');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ClickMeComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ClickMeComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'button', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Click me!');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    parentRenderNode.append(_text_2);
    _el_0.addEventListener('click', eventHandler0(ctx.onClickMe));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ClickMeComponent _ctx = ctx;
    final currVal_0 = (_ctx.clickMessage ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ClickMeComponent> viewFactory_ClickMeComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewClickMeComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ClickMeComponentHost = const [];

class _ViewClickMeComponentHost0 extends AppView<dynamic> {
  ViewClickMeComponent0 _compView_0;
  import1.ClickMeComponent _ClickMeComponent_0_5;
  _ViewClickMeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewClickMeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ClickMeComponent_0_5 = new import1.ClickMeComponent();
    _compView_0.create(_ClickMeComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ClickMeComponent>(0, this, rootEl, _ClickMeComponent_0_5);
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

AppView viewFactory_ClickMeComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewClickMeComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ClickMeComponent> ClickMeComponentNgFactory = const ComponentFactory<import1.ClickMeComponent>('click-me', viewFactory_ClickMeComponentHost0, _ClickMeComponentMetadata);
const _ClickMeComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ClickMeComponent, ClickMeComponentNgFactory);
  _ref0.initReflector();
}