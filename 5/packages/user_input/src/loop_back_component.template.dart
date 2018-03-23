// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'loop_back_component.dart';
export 'loop_back_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'loop_back_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$LoopBackComponent = const [];

class ViewLoopBackComponent0 extends AppView<import1.LoopBackComponent> {
  import2.InputElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewLoopBackComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('loop-back');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$LoopBackComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.LoopBackComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
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
    final local_box = _el_0;
    final currVal_0 = import6.interpolate0(local_box.value);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_keyup_0_0($event) {
    0;
  }
}

AppView<import1.LoopBackComponent> viewFactory_LoopBackComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewLoopBackComponent0(parentView, parentIndex);
}

const List<dynamic> styles$LoopBackComponentHost = const [];

class _ViewLoopBackComponentHost0 extends AppView<dynamic> {
  ViewLoopBackComponent0 _compView_0;
  import1.LoopBackComponent _LoopBackComponent_0_5;
  _ViewLoopBackComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewLoopBackComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoopBackComponent_0_5 = new import1.LoopBackComponent();
    _compView_0.create(_LoopBackComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.LoopBackComponent>(0, this, rootEl, _LoopBackComponent_0_5);
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

AppView viewFactory_LoopBackComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewLoopBackComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.LoopBackComponent> LoopBackComponentNgFactory = const ComponentFactory<import1.LoopBackComponent>('loop-back', viewFactory_LoopBackComponentHost0, _LoopBackComponentMetadata);
const _LoopBackComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(LoopBackComponent, LoopBackComponentNgFactory);
  _ref0.initReflector();
}
