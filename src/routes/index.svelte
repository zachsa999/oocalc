<script>
	let total_rate = 18;
	let office_rate = 1;

	$: trailer_rate = total_rate - office_rate;

	let input = 0.0;
	let enumeration = 0.0;
	export function roundxx(x) {
		return Math.round(x * 100) * 0.01;
	}
</script>

<div class="wrapper">
	<h1>Random Company OO Calculator</h1>
	<div class="input">
		<div>
			<p>Gross pay ($)</p>
			<input type="number" bind:value={input} />
		</div>
		<div>
			<p>Total Rate (%)</p>
			<input type="number" min="16" max="18" bind:value={total_rate} />
		</div>
		<div>
			<p>Office Rate (%) Deduction off total</p>
			<input type="number" min="0.16" max="0.18" bind:value={office_rate} />
		</div>
	</div>

	<code>
		<div class="result">
			<p>Gross Profit:${input}</p>
			<p>Office Charges 1%: ${roundxx(input * office_rate * 0.01)}</p>
			<p>Trailer Lease {trailer_rate}%: ${roundxx(input * trailer_rate * 0.01)}</p>
			<p>
				Total Enumeration {total_rate}% ({100 - total_rate}% of total): ${roundxx(
					input * (100 - total_rate) * 0.01
				)}
			</p>
		</div>
	</code>
</div>

<style>
	.input {
		align-content: center;
		align-items: center;
		padding: 20px;
	}
	.wrapper {
		align-content: center;
		align-items: center;
		margin: 200px;

		background-color: white;
		border-radius: 15px;
		border: 2px solid;
		padding: 15px;
	}
	p {
		font-size: large;
	}
	.result {
		border-radius: 15px;
		border: 1px solid lightgray;
		padding: 15px;
		margin: 30px;
	}
</style>
