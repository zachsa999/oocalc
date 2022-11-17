import { c as create_ssr_component, e as escape } from "../../../../../chunks/index.js";
let total_rate = 0.18;
let office_rate = 0.08;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trailer_rate = office_rate - total_rate;
  return `<p>${escape(trailer_rate)}</p>`;
});
export {
  Page as default
};
