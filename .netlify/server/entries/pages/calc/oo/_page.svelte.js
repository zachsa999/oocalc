import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-w66wto{margin:0px;padding:0px}.input.svelte-w66wto{align-content:center;align-items:center;padding:20px}p.svelte-w66wto{font-size:large}code.svelte-w66wto{padding:0px;margin:0px}.result.svelte-w66wto{border-radius:15px;border:1px solid lightgray;padding:15px;margin:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trailer_rate_percent;
  let office_deduction_cents;
  let trailer_deduction_cents;
  let net_cents;
  let gross_cents = 0;
  let deductions = [];
  let calculated_total = 0;
  let total_rate_percent = 18;
  let office_rate_percent = 8;
  let temp_deduction_cents = 0;
  let temp_label = "";
  $$result.css.add(css);
  trailer_rate_percent = total_rate_percent - office_rate_percent;
  office_deduction_cents = gross_cents * office_rate_percent;
  trailer_deduction_cents = gross_cents * trailer_rate_percent;
  net_cents = gross_cents - Math.round(total_rate_percent * gross_cents / 100);
  return `<div class="${"input svelte-w66wto"}"><h2>Input</h2>
	<h3>Grossing</h3>
	<div><label for="${"gross"}">Gross pay \xA2</label>
		<input id="${"gross"}" type="${"number"}" step="${"1"}"${add_attribute("value", gross_cents, 0)}></div>
	
	<div><label for="${"rate"}">Total Rate %</label>
		<input id="${"rate"}" type="${"number"}" step="${"0.5"}"${add_attribute("value", total_rate_percent, 0)}></div>
	<div><label for="${"office_rate"}">Office Rate % Deduction off total</label>
		<input id="${"office_rate"}" type="${"number"}" step="${"0.5"}"${add_attribute("value", office_rate_percent, 0)}></div>

	<div><h3>Deductions</h3>
		<p class="${"svelte-w66wto"}">new deductions</p>
		<div class="${"flex"}"><label for="${"dedtext"}">Deduction Name</label>
			<input id="${"dedtext"}" type="${"text"}" placeholder="${"Insurance etc."}"${add_attribute("value", temp_label, 0)}></div>
		<div><label for="${"dedamount"}">Deduction amount \xA2</label>
			<input id="${"dedamount"}" type="${"number"}" step="${"0.01"}" min="${"0"}"${add_attribute("value", temp_deduction_cents, 0)}></div>
		<div>${each(deductions, ({ id, label, value }) => {
    return `<div><label for="${"remove_deduction"}">Deduction ${escape(label)}: $${escape(value / 100)}</label>
					<button id="${"remove_deduction"}">Remove </button>
				</div>`;
  })}</div>
		<button>Add Deduction: ${escape(temp_deduction_cents)} \xA2
		</button></div>
	<button>Calculate Total</button></div>

<h2>Output</h2>
<p class="${"svelte-w66wto"}">Net Cents = ${escape(net_cents)}</p>
<div><div class="${"result wrapper svelte-w66wto"}" id="${"output"}" contenteditable="${"true"}"><code class="${"svelte-w66wto"}"><strong>Gross:</strong><br>
			Gross Profit:$${escape(gross_cents / 100)}<br><br>
			<strong>Deductions:</strong><br>
			Office Charges ${escape(office_rate_percent)}%: $${escape(office_deduction_cents / 100)}<br>
			Trailer Lease ${escape(trailer_rate_percent)}%: $${escape(trailer_deduction_cents / 100)}<br>
			${each(deductions, ({ id, label, value }) => {
    return `${label != "" ? `<strong>${escape(label)}:</strong>` : `<strong>Deduction</strong>`}
				$${escape(value / 100)}<br>`;
  })}
			<strong>Total Deductions:</strong><br><br>
			<strong>Total Enumeration: </strong>
			${escape(total_rate_percent)}% $${escape(calculated_total / 100)}</code></div>
	<button>Copy</button>
</div>`;
});
export {
  Page as default
};
