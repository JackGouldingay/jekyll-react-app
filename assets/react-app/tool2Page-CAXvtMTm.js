import { r as s, j as r } from "./index-z7rhCO7I.js";
function a(o) {
  const [e, n] = s.useState(0);
  return r.jsxs("div", { className: `hc-hero-viewport hc-view-${o.num}`, children: [r.jsx("p", { children: "Tool 2" }), r.jsx("button", { className: "px-4 py-1 text-gray-600 border-gray-300 bg-gray-200 w-16 cursor-pointer border-1 rounded-sm", onClick: () => n(e + 1), children: e }), e > 10 && r.jsx("p", { children: "More than ten!" })] });
}
export {
  a as default
};
