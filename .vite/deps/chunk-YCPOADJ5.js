import {
  Primitive,
  useLayoutEffect2
} from "./chunk-BEXLDUAU.js";
import {
  require_react_dom
} from "./chunk-5U2ID3AT.js";
import {
  require_jsx_runtime
} from "./chunk-XC26ZK3T.js";
import {
  require_react
} from "./chunk-E55NSNTN.js";
import {
  __toESM
} from "./chunk-4MBMRILA.js";

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? import_react_dom.default.createPortal((0, import_jsx_runtime.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

export {
  Portal
};
//# sourceMappingURL=chunk-YCPOADJ5.js.map