function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var defaultContext = {};
var RekeepContext = React__default.createContext(defaultContext);

function useRekeep() {
  var _useContext = React.useContext(RekeepContext),
      store = _useContext.store,
      update = _useContext.update;

  return {
    store: store,
    update: update
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Provider = function Provider(props) {
  var store = props.store,
      children = props.children;

  var _useState = React.useState(store),
      state = _useState[0],
      setState = _useState[1];

  var update = function update(key, value) {
    var _extends2;

    var newState = _extends(_extends({}, state), {}, (_extends2 = {}, _extends2[key] = value, _extends2));

    setState(newState);
  };

  return React__default.createElement(RekeepContext.Provider, {
    value: {
      store: state,
      update: update
    }
  }, children);
};

exports.Provider = Provider;
exports.useRekeep = useRekeep;
//# sourceMappingURL=index.js.map
