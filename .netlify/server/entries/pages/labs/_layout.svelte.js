import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/labs/jslabs"}">js Labs</a>
	<a href="${"/labs/color"}">color</a></nav>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
