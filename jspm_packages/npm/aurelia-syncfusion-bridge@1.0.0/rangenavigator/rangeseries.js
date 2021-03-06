/* */ 
define(['exports', '../common/constants', '../common/decorators', '../common/common'], function (exports, _constants, _decorators, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RangeSeries = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var RangeSeries = exports.RangeSeries = (_dec = (0, _common.inlineView)('' + _constants.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_constants.constants.elementPrefix + 'range-series'), _dec3 = (0, _decorators.generateBindables)('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill']), _dec(_class = _dec2(_class = _dec3(_class = function RangeSeries() {
    _classCallCheck(this, RangeSeries);
  }) || _class) || _class) || _class);
});