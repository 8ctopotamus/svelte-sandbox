<script>
	import CustomInput from "./components/CustomInput.svelte";
	import Toggle from "./components/Toggle.svelte";
	import { isValidEmail } from './validation'

	let val = "Test";
	let price = 0
	let opt = 1
	let agreed
	let favColor = 'green'
	let favFoods = ["Mac & Cheese"]
	let usernameInput // ref
	let customInput
	let email = ''
	let formIsValid = false

	// validation
	$: formIsValid = isValidEmail(email)

	$: console.log(val); 
	$: console.log(opt);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(favFoods);
	$: console.log(customInput)

	function saveData() {
		console.log(customInput.value)
		customInput.empty()
	}
</script>

<style>
	.invalid {
		border: 1px solid red;
	}
</style>

<!-- custom inputs -->
<CustomInput type="text" bind:val bind:this={customInput} />

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

<hr/>

<form on:submit|preventDefault>
	<input type="email" bind:value={email} class={isValidEmail(email) ? '' : 'invalid'}/>
	<button type="submit" disabled={!formIsValid}>Save</button>
</form>