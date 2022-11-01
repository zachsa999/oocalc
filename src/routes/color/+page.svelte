<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form method="POST" action="?textColorInput">
	<input type="text" name="color" id="colorText" />
	<input name="color" type="color" />
</form>
