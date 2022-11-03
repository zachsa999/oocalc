<nav>
	<a href="/forms/contract">OO Contract</a>
	<a href="/forms/maintenance-checklist">Maintenance Checklist</a>
</nav>
<div class=" page">
	<div class="entry">
		<slot />
	</div>
</div>
<div class="submit-form">
	<button>Print</button>
</div>

<style>
	.entry {
		/* margin: 70px; */
		padding: 80px;
	}
	.page {
		min-width: min-content;
		max-width: 780px;
		margin: auto;
		background: white;
		margin-top: 50px;
	}
</style>
