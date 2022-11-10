<script>
	import { bind } from 'svelte/internal';

	// throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
	let total_rate = 18;
	let office_rate = 8;

	let trailer_rate = total_rate - office_rate;

	let input = 0.0;

	let deduction = {
		label: 'New Deduction',
		exists: false,
		type: 'amount', // can be percent or amount
		value: 0.0
	};

	function roundx(x) {
		const y = Math.round(x * 100 * 0.01);
		return y;
	}

	async function copyText(input) {
		var toCopy = document.getElementById(input);
		var text = toCopy.innerText;
		await navigator.clipboard.writeText(text);
	}
</script>

<div class="input">
	<h2>Input</h2>
	<h3>Grossing</h3>
	<div>
		<p>Gross pay ($)</p>
		<input type="number" bind:value={input} />
		<p>Total Rate (%)</p>
		<input type="number" min="16" max="18" bind:value={total_rate} />

		<p>Office Rate (%) Deduction off total</p>
		<input type="number" min="0.16" max="0.18" bind:value={office_rate} />
	</div>
	<div>
		<h3>Deductions</h3>
		<label for="deductions">Add new deductions?</label>
		<input type="checkbox" name="deductions" id="deductions" bind:checked={deduction.exists} />
		<div>
			{#if deduction.exists}
				<div>
					<input
						type="radio"
						id="amount"
						name="amount"
						value="amount"
						bind:group={deduction.type}
						checked
					/>
					<label for="amount">Amount</label>
				</div>
				<div>
					<input
						type="radio"
						id="percentage"
						name="percentage"
						value="percentage"
						bind:group={deduction.type}
					/>
					<label for="percentage">Percentage</label>
				</div>
				<input type="number" bind:value={deduction.value} />
			{/if}
		</div>
	</div>
</div>

<h2>Output</h2>
<div>
	<div class="result wrapper" id="output" contentEditable="true">
		<code>
			<strong>Profits:</strong><br />
			Gross Profit:${input}<br />
			<strong>Deductions:</strong><br />
			Office Charges 1%: ${input * office_rate * 0.01}<br />
			Trailer Lease {trailer_rate}%: ${input * trailer_rate * 0.01}<br />
			{#if deduction.exists}
				{#if deduction.type == "percent"}
					{deduction.label}: {deduction.value}%

				{/if}
			{/if}
			<strong>Total Deductions:</strong><br />

			<strong>Total Enumeration: </strong>
			{total_rate}% ({100 - total_rate}% of total) : ${input * (100 - total_rate) * 0.01}
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
