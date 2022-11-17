import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colorSet = Math.floor(Math.random() * 16777215).toString(16);
  let colorHex = colorSet;
  return `<h1>Color Input</h1>
<form><label for="${"colorText"}">Hex Input</label>
	<input type="${"text"}" name="${"color"}" id="${"colorText"}"${add_attribute("bind", colorHex, 0)}>
	<label for="${"colorSelect"}">Select Input</label>
	<input name="${"color"}" type="${"color"}" id="${"colorSelect"}" bind="${"#" + escape(colorHex, true)}"></form>
<h1>Breakdown</h1>

<h3>ColorHex: #${escape(colorHex)}</h3>`;
});
export {
  Page as default
};
