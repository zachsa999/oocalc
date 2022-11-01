<script>
	let color = Math.floor(Math.random() * 16777215).toString(16);
</script>

<form>
	<input type="text" name="color" id="colorText" value={color} />
	<input name="color" type="color" value={color} />
</form>
