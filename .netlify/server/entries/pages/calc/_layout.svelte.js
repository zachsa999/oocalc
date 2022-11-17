import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1rygjit{align-content:center;align-items:center;padding:200px;background-color:white;border-radius:15px;border:2px solid;padding:15px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><a href="${"/calc/oo"}">OO</a></nav>
<div class="${"wrapper full svelte-1rygjit"}"><h1>OO Calculator</h1>
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
