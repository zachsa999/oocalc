<script>
	let gross_cents = 0;
	let deductions = [];
	let calculated_total = 0;

	let total_rate_percent = 18.0;
	let office_rate_percent = 8.0;
	$: trailer_rate_percent = total_rate_percent - office_rate_percent;

	$: office_deduction_cents = gross_cents * office_rate_percent;
	$: trailer_deduction_cents = gross_cents * trailer_rate_percent;

	$: net_cents = gross_cents - Math.round((total_rate_percent * gross_cents) / 100);

	let temp_deduction_cents = 0;
	let temp_label = '';
	let deductions_length = 0;

	async function copyText(input) {
		var toCopy = document.getElementById(input);
		var text = toCopy.innerText;
		await navigator.clipboard.writeText(text);
	}

	function handleDeduction(id, label, value) {
		deductions_length++;
		deductions = [...deductions, { id, label, value }];
	}

	function removeDeduction(j) {
		for (const deduction of deductions) {
			if (j == deduction.id) {
				deductions = deductions.filter((item) => item != deduction);
			}
		}
	}

	function applyDeductions(gross_cents, deductions) {
		let total = 0;
		for (const deduction of deductions) {
			total = total + deduction.value;
		}
		calculated_total = net_cents - total;
	}
</script>

<div class="input">
	<h2>Input</h2>
	<h3>Grossing</h3>
	<div>
		<label for="gross">Gross pay ¢</label>
		<input id="gross" type="number" step="1" bind:value={gross_cents} />
	</div>
	<!-- <p>Total = {gross_cents}</p> -->
	<div>
		<label for="rate">Total Rate %</label>
		<input id="rate" type="number" step="0.5" bind:value={total_rate_percent} />
	</div>
	<div>
		<label for="office_rate">Office Rate % Deduction off total</label>
		<input id="office_rate" type="number" step="0.5" bind:value={office_rate_percent} />
	</div>

	<div>
		<h3>Deductions</h3>
		<p>new deductions</p>
		<div class="flex">
			<label for="dedtext">Deduction Name</label>
			<input id="dedtext" type="text" placeholder="Insurance etc." bind:value={temp_label} />
		</div>
		<div>
			<label for="dedamount">Deduction amount ¢</label>
			<input id="dedamount" type="number" step="0.01" min="0" bind:value={temp_deduction_cents} />
		</div>
		<div>
			{#each deductions as { id, label, value }}
				<div>
					<label for="remove_deduction">Deduction {label}: ${value / 100}</label>
					<button id="remove_deduction" on:click={removeDeduction(id)}> Remove </button>
				</div>
			{/each}
		</div>
		<button on:click={handleDeduction(deductions_length, temp_label, temp_deduction_cents)}>
			Add Deduction: {temp_deduction_cents} ¢
		</button>
	</div>
	<button on:click={applyDeductions(gross_cents, deductions)}>Calculate Total</button>
</div>

<h2>Output</h2>
<p>Net Cents = {net_cents}</p>
<div>
	<div class="result wrapper" id="output" contentEditable="true">
		<code>
			<strong>Gross:</strong><br />
			Gross Profit:${gross_cents / 100}<br /><br />
			<strong>Deductions:</strong><br />
			Office Charges {office_rate_percent}%: ${office_deduction_cents / 100}<br />
			Trailer Lease {trailer_rate_percent}%: ${trailer_deduction_cents / 100}<br />
			{#each deductions as { id, label, value }}
				{#if label != ''}
					<strong>{label}:</strong>
				{:else}
					<strong>Deduction</strong>
				{/if}
				${value / 100}<br />
			{/each}
			<strong>Total Deductions:</strong><br /><br />
			<strong>Total Enumeration: </strong>
			{total_rate_percent}% ${calculated_total / 100}
		</code>
	</div>
	<button on:click={() => copyText('output')}>Copy</button>
</div>

<style>
	.wrapper {
		margin: 0px;
		padding: 0px;
	}
	.input {
		align-content: center;
		align-items: center;
		padding: 20px;
	}

	p {
		font-size: large;
	}
	code {
		padding: 0px;
		margin: 0px;
	}
	.result {
		border-radius: 15px;
		border: 1px solid lightgray;
		padding: 15px;
		margin: 30px;
	}
</style>
