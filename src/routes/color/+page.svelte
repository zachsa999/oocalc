<script>
	let colorSet = Math.floor(Math.random() * 16777215).toString(16);
	let colorHex = colorSet;
</script>

<h1>Color Input</h1>
<form>
	<label for="colorText">Hex Input</label>
	<input type="text" name="color" id="colorText" bind={colorHex} />
	<label for="colorSelect">Select Input</label>
	<input name="color" type="color" id="colorSelect" bind="#{colorHex}" />
</form>
<h1>Breakdown</h1>

<h3>ColorHex: #{colorHex}</h3>
