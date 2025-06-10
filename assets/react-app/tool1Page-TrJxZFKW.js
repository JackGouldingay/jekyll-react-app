import { j as e } from "./index-z7rhCO7I.js";
function o(s) {
  return e.jsx("div", { className: "custom", children: s.message });
}
function r(s) {
  return e.jsxs("div", { className: `tool tool-${s.num}`, children: [e.jsx("p", { children: "Tool 1" }), e.jsx(o, { message: "Hello from Tool 1" }), s.children] });
}
export {
  r as default
};
