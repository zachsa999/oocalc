<script>
	//sum an array based on number of boxes selected
	export let deductions = [];
	export let input = 0.0;
	export let deduction = 0.0;
	export let label = '';
	export let i = 0;

	export function handleDeduction(id, label, value) {
		i++;
		deductions = [...deductions, { id, label, value }];
	}
</script>

<h1>js</h1>
<div>
	<p>total</p>
	<input type="number" step="0.01" bind:value={input} />

	<h2>Deductions</h2>
	<p>new deductions</p>
	<div class="flex">
		<label for="dedtext">Deduction Name</label>
		<input id="dedtext" type="text" bind:value={label} />
	</div>
	<div>
		<input type="number" step="0.01" bind:value={deduction} />
		<button on:click={handleDeduction(i, label, deduction)}>Add Deduction: {deduction}</button>
	</div>
</div>

{#each deductions as { id, label, value }}
	<p>
		<strong>Deduction {id}: </strong>{label}{#if label != ''}:{/if}
		{value}
	</p>
{/each}

<style>
</style>
