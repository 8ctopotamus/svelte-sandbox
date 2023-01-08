<script>
	import CustomInput from "./components/CustomInput.svelte";
	import Toggle from "./components/Toggle.svelte";

	let val = "Test";
	let price = 0
	let opt = 1
	let agreed
	let favColor = 'green'

	$: console.log(val); 
	$: console.log(opt);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
</script>

<CustomInput type="text" bind:val={val} />

<Toggle bind:chosenOption={opt} /> Chosen: {opt}

<input 
	type="number"
	bind:value={price}
/>

<label>
	<input type="checkbox" bind:checked={agreed} />
	Aggree to terms?
</label>

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