import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".entry.svelte-bbqpxv{padding:80px}.page.svelte-bbqpxv{min-width:min-content;max-width:780px;margin:auto;background:white;margin-top:50px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><a href="${"/forms/contract"}">OO Contract</a>
	<a href="${"/forms/maintenance-checklist"}">Maintenance Checklist</a></nav>
<div class="${"page svelte-bbqpxv"}"><div class="${"entry svelte-bbqpxv"}">${slots.default ? slots.default({}) : ``}</div></div>
<div class="${"submit-form"}"><button>Print</button>
</div>`;
});
export {
  Layout as default
};
