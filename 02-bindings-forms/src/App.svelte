<script>
	import CustomInput from "./components/CustomInput.svelte";
	import Toggle from "./components/Toggle.svelte";

	let val = "Test";
	let price = 0
	let opt = 1
	let agreed
	let favColor = 'green'
	let favFoods = ["Mac & Cheese"]
	let usernameInput // ref

	$: console.log(val); 
	$: console.log(opt);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(favFoods);

	function saveData() {
		console.log(usernameInput.value)
	}
</script>

<!-- custom inputs -->
<CustomInput type="text" bind:val={val} />

<Toggle bind:chosenOption={opt} /> Chosen: {opt}

<!-- automatic number conversion -->
<input 
	type="number"
	bind:value={price}
/>

<!-- boolean checkbox -->
<label>
	<input type="checkbox" bind:checked={agreed} />
	Aggree to terms?
</label>

<!-- radios (bind:group) -->
<h2>Favorite color?</h2>
<label>
	<input name="color" type="radio" value="red" bind:group={favColor} /> Red
</label>
<label>
	<input name="color" type="radio" value="green" bind:group={favColor} /> Green
</label>
<label>
	<input name="color" type="radio" value="blue" bind:group={favColor} /> Blue
</label>

<!-- binding multiple checkboxes, returns an array of values -->
<h2>Favorite foods?</h2>
<label>
	<input name="foods" type="checkbox" value="Mac & Cheese" bind:group={favFoods} /> Mac & Cheese
</label>
<label>
	<input name="foods" type="checkbox" value="Sushi" bind:group={favFoods} /> Sushi
</label>
<label>
	<input name="foods" type="checkbox" value="Pad Thai" bind:group={favFoods} /> Pad Thai
</label>

<!-- selects -->
<select bind:value={favColor}>
	<option value="red">Red</option>
	<option value="green">Green</option>
	<option value="blue">Blue</option>
</select>

<hr/>

<!-- ref -->
<input type="text" id="username" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>

