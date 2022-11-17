import { c as create_ssr_component } from "../../chunks/index.js";
import "../../chunks/supabaseClient.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "slot.svelte-392lgy{width:100%;height:100%;background:lightgray}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><a href="${"/forms"}">Forms</a>
	<a href="${"/labs"}">Labs</a>
	<a href="${"/calc"}">calc</a></nav>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
