import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { deductions = [] } = $$props;
  let { input = 0 } = $$props;
  let { deduction = 0 } = $$props;
  let { label = "" } = $$props;
  let { i = 0 } = $$props;
  function handleDeduction(id, label2, value) {
    i++;
    deductions = [...deductions, { id, label: label2, value }];
  }
  if ($$props.deductions === void 0 && $$bindings.deductions && deductions !== void 0)
    $$bindings.deductions(deductions);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.deduction === void 0 && $$bindings.deduction && deduction !== void 0)
    $$bindings.deduction(deduction);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.handleDeduction === void 0 && $$bindings.handleDeduction && handleDeduction !== void 0)
    $$bindings.handleDeduction(handleDeduction);
  return `<h1>js</h1>
<div><p>total</p>
	<input type="${"number"}" step="${"0.01"}"${add_attribute("value", input, 0)}>

	<h2>Deductions</h2>
	<p>new deductions</p>
	<div class="${"flex"}"><label for="${"dedtext"}">Deduction Name</label>
		<input id="${"dedtext"}" type="${"text"}"${add_attribute("value", label, 0)}></div>
	<div><input type="${"number"}" step="${"0.01"}"${add_attribute("value", deduction, 0)}>
		<button>Add Deduction: ${escape(deduction)}</button></div></div>

${each(deductions, ({ id, label: label2, value }) => {
    return `<p><strong>Deduction ${escape(id)}: </strong>${escape(label2)}${label2 != "" ? `:` : ``}
		${escape(value)}
	</p>`;
  })}`;
});
export {
  Page as default
};
